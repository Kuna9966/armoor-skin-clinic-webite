export const GOOGLE_REVIEW_URL = "https://g.page/r/CWYmHRHhqTqnEAE/review";

export interface Review {
  id: string;
  numericId: number;
  text: string;
  status: "unused" | "assigned" | "used";
  createdAt: string;
  assignedAt?: string;
  copiedAt?: string;
}

export interface DashboardStats {
  total: number;
  remaining: number;
  used: number;
  assigned: number;
  importedToday: number;
  queueProgress: number;
  recent: Array<{
    id: string;
    action: string;
    time: string;
    type: "import" | "assign" | "copy" | "redirect";
  }>;
}

export interface ChartData {
  dailyImports: Array<{ date: string; count: number }>;
  reviewUsage: Array<{ date: string; copied: number; assigned: number }>;
  remainingTrend: Array<{ date: string; remaining: number }>;
}

export interface HistoryEntry {
  id: string;
  text: string;
  assignedAt: string | null;
  copiedAt: string | null;
  copied: boolean;
  status: "unused" | "assigned" | "used";
  type: "import" | "copy" | "redirect";
  timestamp: string;
}

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`/api${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(body.error || `API error ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export async function getAssignedReview(): Promise<Review | null> {
  try {
    const data = await apiFetch<{ id: number; review: string }>("/review");
    return {
      id: `R-${String(data.id).padStart(4, "0")}`,
      numericId: data.id,
      text: data.review,
      status: "assigned",
      createdAt: new Date().toISOString(),
      assignedAt: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export async function copyReview(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}

export async function markReviewCopied(numericId: number): Promise<void> {
  try {
    await apiFetch("/copy", {
      method: "POST",
      body: JSON.stringify({ reviewId: numericId }),
    });
  } catch {
    // Non-critical — clipboard already succeeded
  }
}

export async function copyAndRedirect(text: string): Promise<void> {
  await copyReview(text);
}

export function openGoogleReview(): void {
  window.open(GOOGLE_REVIEW_URL, "_blank");
}

export async function importReviews(
  raw: string,
): Promise<{ imported: number; duplicates: number; errors: number }> {
  const lines = raw
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  try {
    const data = await apiFetch<{ imported: number; duplicates: number; total: number }>(
      "/import",
      { method: "POST", body: JSON.stringify({ reviews: lines }) },
    );
    return { imported: data.imported, duplicates: data.duplicates, errors: 0 };
  } catch {
    return { imported: 0, duplicates: 0, errors: lines.length };
  }
}

export async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const data = await apiFetch<{
      total: number;
      remaining: number;
      used: number;
      assigned: number;
      importedToday: number;
      queueHealth: number;
    }>("/stats");

    let recent: DashboardStats["recent"] = [];
    try {
      const history = await apiFetch<Array<{
        id: number;
        review: string;
        event_type: string;
        event_time: string;
        status: string;
      }>>("/history?limit=8");
      recent = history.map((e) => ({
        id: `R-${String(e.id).padStart(4, "0")}`,
        action: e.event_type === "import" ? "Imported reviews" :
                e.event_type === "assign" ? "Assigned to visitor" :
                "Copied to clipboard",
        time: formatTimeAgo(e.event_time),
        type: e.event_type as "import" | "assign" | "copy",
      }));
    } catch {
      // history may fail if DB is empty
    }

    return {
      total: data.total,
      remaining: data.remaining,
      used: data.used,
      assigned: data.assigned,
      importedToday: data.importedToday,
      queueProgress: data.queueHealth,
      recent,
    };
  } catch {
    return {
      total: 0,
      remaining: 0,
      used: 0,
      assigned: 0,
      importedToday: 0,
      queueProgress: 0,
      recent: [],
    };
  }
}

export async function getChartData(): Promise<ChartData> {
  try {
    const data = await apiFetch<{
      dailyImports: Array<{ date: string; count: number }>;
      reviewUsage: Array<{ date: string; copied: number; assigned: number }>;
      remainingTrend: Array<{ date: string; remaining: number }>;
    }>("/charts");
    return data;
  } catch {
    return { dailyImports: [], reviewUsage: [], remainingTrend: [] };
  }
}

export async function getHistory(): Promise<HistoryEntry[]> {
  try {
    const data = await apiFetch<Array<{
      id: number;
      review: string;
      assigned_at: string | null;
      copied_at: string | null;
      status: string;
      event_type: string;
      event_time: string;
    }>>("/history");
    return data.map((e) => ({
      id: `R-${String(e.id).padStart(4, "0")}`,
      text: e.review,
      assignedAt: e.assigned_at,
      copiedAt: e.copied_at,
      copied: e.event_type === "copy",
      status: e.status as "unused" | "assigned" | "used",
      type: e.event_type === "assign" ? "redirect" as const : e.event_type as "import" | "copy",
      timestamp: e.event_time,
    }));
  } catch {
    return [];
  }
}

export async function getQueue(): Promise<Review[]> {
  try {
    const data = await apiFetch<{ items: Array<{
      id: number;
      review: string;
      status: string;
      assigned_at: string | null;
      copied_at: string | null;
      created_at: string;
    }>; total: number }>("/queue");
    return data.items.map((r) => ({
      id: `R-${String(r.id).padStart(4, "0")}`,
      numericId: r.id,
      text: r.review,
      status: r.status as "unused" | "assigned" | "used",
      createdAt: r.created_at,
      assignedAt: r.assigned_at ?? undefined,
      copiedAt: r.copied_at ?? undefined,
    }));
  } catch {
    return [];
  }
}

export async function resetQueue(): Promise<void> {
  await apiFetch("/reset", { method: "POST" });
}

export async function deleteAllReviews(): Promise<{ deletedCount: number }> {
  return apiFetch("/all", { method: "DELETE" });
}

export async function resetIdSequence(): Promise<void> {
  await apiFetch("/reset-ids", { method: "POST" });
}

function formatTimeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}
