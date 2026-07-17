import type {
  ReviewRecord,
  ReviewAssignment,
  ImportResult,
  DashboardStats,
  HistoryEntry,
  HealthCheck,
  QueueItem,
  ReviewStatus,
} from "../types/review";

interface Env {
  DB: D1Database;
}

export class ReviewDB {
  private db: D1Database;

  constructor(env: Env) {
    this.db = env.DB;
  }

  async getNextReview(): Promise<ReviewAssignment | null> {
    const now = new Date().toISOString();

    // 1. If there's already an assigned (not yet used) review, return it
    const existing = await this.db
      .prepare(
        `SELECT id, review FROM reviews WHERE status = 'assigned' ORDER BY assigned_at ASC LIMIT 1`,
      )
      .first<ReviewAssignment>();

    if (existing) return existing;

    // 2. Otherwise assign the next unused review
    const result = await this.db
      .prepare(
        `UPDATE reviews
       SET status = 'assigned', assigned_at = ?
       WHERE id = (
         SELECT id FROM reviews
         WHERE status = 'unused'
         ORDER BY created_at ASC
         LIMIT 1
       )
       RETURNING id, review`,
      )
      .bind(now)
      .first<ReviewAssignment>();

    return result ?? null;
  }

  async importReviews(reviews: string[]): Promise<ImportResult> {
    const cleaned = reviews.map((r) => r.trim()).filter((r) => r.length > 0);

    if (cleaned.length === 0) {
      return { imported: 0, duplicates: 0, total: 0 };
    }

    const existing = await this.db.prepare("SELECT review FROM reviews").all<{ review: string }>();

    const existingSet = new Set(existing.results.map((r) => r.review));

    const toInsert = cleaned.filter((r) => !existingSet.has(r));
    const duplicates = cleaned.length - toInsert.length;

    if (toInsert.length === 0) {
      return { imported: 0, duplicates, total: cleaned.length };
    }

    const now = new Date().toISOString();
    const stmt = this.db.prepare(
      "INSERT INTO reviews (review, status, created_at) VALUES (?, 'unused', ?)",
    );

    const batches: D1PreparedStatement[] = [];
    for (const review of toInsert) {
      batches.push(stmt.bind(review, now));
    }

    await this.db.batch(batches);

    return {
      imported: toInsert.length,
      duplicates,
      total: cleaned.length,
    };
  }

  async markCopied(reviewId: number): Promise<boolean> {
    const now = new Date().toISOString();

    const result = await this.db
      .prepare(
        `UPDATE reviews
       SET status = 'used', copied_at = ?
       WHERE id = ? AND status = 'assigned'
       RETURNING id`,
      )
      .bind(now, reviewId)
      .first<{ id: number }>();

    return result !== null;
  }

  async getDashboardStats(): Promise<DashboardStats> {
    const counts = await this.db
      .prepare(
        `SELECT
         COUNT(*) as total,
         SUM(CASE WHEN status = 'unused' THEN 1 ELSE 0 END) as remaining,
         SUM(CASE WHEN status = 'assigned' THEN 1 ELSE 0 END) as assigned,
         SUM(CASE WHEN status = 'used' THEN 1 ELSE 0 END) as used
       FROM reviews`,
      )
      .first<{
        total: number;
        remaining: number;
        assigned: number;
        used: number;
      }>();

    const today = new Date().toISOString().split("T")[0];
    const importedToday = await this.db
      .prepare("SELECT COUNT(*) as count FROM reviews WHERE created_at >= ?")
      .bind(today)
      .first<{ count: number }>();

    const total = counts?.total ?? 0;
    const remaining = counts?.remaining ?? 0;
    const queueHealth = total > 0 ? Math.round((remaining / total) * 100) : 0;

    return {
      total,
      remaining,
      assigned: counts?.assigned ?? 0,
      used: counts?.used ?? 0,
      importedToday: importedToday?.count ?? 0,
      queueHealth,
    };
  }

  async getHistory(limit: number = 50): Promise<HistoryEntry[]> {
    const importHistory = await this.db
      .prepare(
        `SELECT id, review, NULL as assigned_at, NULL as copied_at, status,
         'import' as event_type, created_at as event_time
       FROM reviews
       ORDER BY created_at DESC
       LIMIT ?`,
      )
      .bind(limit)
      .all<HistoryEntry>();

    const assignHistory = await this.db
      .prepare(
        `SELECT id, review, assigned_at, NULL as copied_at, status,
         'assign' as event_type, assigned_at as event_time
       FROM reviews
       WHERE assigned_at IS NOT NULL
       ORDER BY assigned_at DESC
       LIMIT ?`,
      )
      .bind(limit)
      .all<HistoryEntry>();

    const copyHistory = await this.db
      .prepare(
        `SELECT id, review, assigned_at, copied_at, status,
         'copy' as event_type, copied_at as event_time
       FROM reviews
       WHERE copied_at IS NOT NULL
       ORDER BY copied_at DESC
       LIMIT ?`,
      )
      .bind(limit)
      .all<HistoryEntry>();

    const all = [...importHistory.results, ...assignHistory.results, ...copyHistory.results]
      .filter((e) => e.event_time !== null)
      .sort((a, b) => new Date(b.event_time).getTime() - new Date(a.event_time).getTime())
      .slice(0, limit);

    return all;
  }

  async resetQueue(): Promise<number> {
    const result = await this.db
      .prepare(
        `UPDATE reviews
       SET status = 'unused', assigned_at = NULL, copied_at = NULL
       WHERE status != 'unused'`,
      )
      .run();

    return result.meta?.changes ?? 0;
  }

  async deleteAllReviews(): Promise<number> {
    const result = await this.db.prepare("DELETE FROM reviews").run();
    return result.meta?.changes ?? 0;
  }

  async exportCsv(): Promise<string> {
    const reviews = await this.db
      .prepare(
        "SELECT id, review, status, assigned_at, copied_at, created_at FROM reviews ORDER BY id",
      )
      .all<ReviewRecord>();

    const header = "id,review,status,assigned_at,copied_at,created_at";
    const rows = reviews.results.map(
      (r) =>
        `${r.id},"${r.review.replace(/"/g, '""')}",${r.status},${r.assigned_at ?? ""},${r.copied_at ?? ""},${r.created_at}`,
    );

    return [header, ...rows].join("\n");
  }

  async getHealth(): Promise<HealthCheck> {
    try {
      const stats = await this.getDashboardStats();
      return {
        database: true,
        queueHealthy: stats.remaining > 0,
        remaining: stats.remaining,
      };
    } catch {
      return {
        database: false,
        queueHealthy: false,
        remaining: 0,
      };
    }
  }

  async getQueue(
    search?: string,
    status?: ReviewStatus,
    page: number = 1,
    pageSize: number = 20,
  ): Promise<{ items: QueueItem[]; total: number }> {
    let where = "WHERE 1=1";
    const params: unknown[] = [];

    if (search) {
      where += " AND review LIKE ?";
      params.push(`%${search}%`);
    }

    if (status) {
      where += " AND status = ?";
      params.push(status);
    }

    const countResult = await this.db
      .prepare(`SELECT COUNT(*) as total FROM reviews ${where}`)
      .bind(...params)
      .first<{ total: number }>();

    const total = countResult?.total ?? 0;
    const offset = (page - 1) * pageSize;

    const items = await this.db
      .prepare(
        `SELECT id, review, status, assigned_at, copied_at, created_at
       FROM reviews ${where}
       ORDER BY created_at DESC
       LIMIT ? OFFSET ?`,
      )
      .bind(...params, pageSize, offset)
      .all<QueueItem>();

    return { items: items.results, total };
  }

  async getChartData(): Promise<{
    dailyImports: Array<{ date: string; count: number }>;
    reviewUsage: Array<{ date: string; copied: number; assigned: number }>;
    remainingTrend: Array<{ date: string; remaining: number }>;
  }> {
    const dailyImports = await this.db
      .prepare(
        `SELECT DATE(created_at) as date, COUNT(*) as count
       FROM reviews
       WHERE created_at >= DATE('now', '-30 days')
       GROUP BY DATE(created_at)
       ORDER BY date`,
      )
      .all<{ date: string; count: number }>();

    const reviewUsage = await this.db
      .prepare(
        `SELECT DATE(copied_at) as date,
         SUM(CASE WHEN copied_at IS NOT NULL THEN 1 ELSE 0 END) as copied,
         SUM(CASE WHEN assigned_at IS NOT NULL THEN 1 ELSE 0 END) as assigned
       FROM reviews
       WHERE copied_at >= DATE('now', '-30 days')
         OR assigned_at >= DATE('now', '-30 days')
       GROUP BY DATE(COALESCE(copied_at, assigned_at))
       ORDER BY date`,
      )
      .all<{ date: string; copied: number; assigned: number }>();

    const remainingTrend = await this.db
      .prepare(
        `SELECT DATE(created_at) as date,
         SUM(CASE WHEN status IN ('unused', 'assigned') THEN 1 ELSE 0 END) as remaining
       FROM reviews
       WHERE created_at >= DATE('now', '-14 days')
       GROUP BY DATE(created_at)
       ORDER BY date`,
      )
      .all<{ date: string; remaining: number }>();

    return {
      dailyImports: dailyImports.results,
      reviewUsage: reviewUsage.results,
      remainingTrend: remainingTrend.results,
    };
  }
}
