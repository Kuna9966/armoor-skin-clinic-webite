import { ReviewDB } from "../../lib/db";

function getDb(): ReviewDB {
  const env = (globalThis as Record<string, unknown>).__env__ as Record<string, unknown>;
  if (!env?.DB) {
    throw new Error("D1 binding not found");
  }
  return new ReviewDB({ DB: env.DB as D1Database });
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function error(message: string, status = 500): Response {
  return json({ error: message }, status);
}

export async function handleApiRoute(
  pathname: string,
  request: Request,
): Promise<Response> {
  try {
    const route = pathname.replace(/^\/api\/?/, "/").replace(/\/$/, "") || "/";

    if (route === "/health") {
      const db = getDb();
      const health = await db.getHealth();
      return json(health);
    }

    if (route === "/stats") {
      const db = getDb();
      const stats = await db.getDashboardStats();
      return json(stats);
    }

    if (route === "/review") {
      const db = getDb();
      const review = await db.getNextReview();
      if (!review) return error("No reviews available in queue", 404);
      return json(review);
    }

    if (route === "/charts") {
      const db = getDb();
      const chartData = await db.getChartData();
      return json(chartData);
    }

    if (route === "/import" && request.method === "POST") {
      const body = (await request.json()) as { reviews?: string[] };
      if (!body.reviews || !Array.isArray(body.reviews)) {
        return error("Invalid request: reviews array is required", 400);
      }
      if (body.reviews.length === 0) {
        return error("Invalid request: reviews array cannot be empty", 400);
      }
      if (body.reviews.length > 1000) {
        return error("Invalid request: maximum 1000 reviews per import", 400);
      }
      const db = getDb();
      const result = await db.importReviews(body.reviews);
      return json(result);
    }

    if (route === "/copy" && request.method === "POST") {
      const body = (await request.json()) as { reviewId?: number };
      if (!body.reviewId || typeof body.reviewId !== "number") {
        return error("Invalid request: reviewId is required and must be a number", 400);
      }
      const db = getDb();
      const success = await db.markCopied(body.reviewId);
      if (!success) return error("Review not found or not in assigned status", 404);
      return json({ success: true });
    }

    if (route === "/reset" && request.method === "POST") {
      const db = getDb();
      const resetCount = await db.resetQueue();
      return json({
        success: true,
        resetCount,
        message: `Reset ${resetCount} reviews from assigned to unused`,
      });
    }

    if (route === "/all" && request.method === "DELETE") {
      const db = getDb();
      const deletedCount = await db.deleteAllReviews();
      return json({
        success: true,
        deletedCount,
        message: `Deleted ${deletedCount} reviews from database`,
      });
    }

    if (route === "/reset-ids" && request.method === "POST") {
      const db = getDb();
      const result = await db.resetIdSequence();
      if (!result.success) {
        return error(result.error!, 400);
      }
      return json({
        success: true,
        message: "Review ID sequence reset successfully. The next imported review will start from ID 1.",
      });
    }

    if (route === "/export") {
      const db = getDb();
      const csv = await db.exportCsv();
      return new Response(csv, {
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": `attachment; filename="reviews-export-${new Date().toISOString().split("T")[0]}.csv"`,
        },
      });
    }

    if (route.startsWith("/history")) {
      const url = new URL(request.url);
      const limitParam = url.searchParams.get("limit");
      const limit = limitParam ? parseInt(limitParam, 10) : 50;
      if (isNaN(limit) || limit < 1 || limit > 200) {
        return error("Invalid limit: must be between 1 and 200", 400);
      }
      const db = getDb();
      const history = await db.getHistory(limit);
      return json(history);
    }

    if (route.startsWith("/queue")) {
      const url = new URL(request.url);
      const search = url.searchParams.get("search") || undefined;
      const statusParam = url.searchParams.get("status");
      const pageParam = url.searchParams.get("page");
      const pageSizeParam = url.searchParams.get("pageSize");

      const status =
        statusParam && ["unused", "assigned", "used"].includes(statusParam)
          ? (statusParam as "unused" | "assigned" | "used")
          : undefined;
      const page = pageParam ? parseInt(pageParam, 10) : 1;
      const pageSize = pageSizeParam ? parseInt(pageSizeParam, 10) : 20;

      if (isNaN(page) || page < 1) return error("Invalid page number", 400);
      if (isNaN(pageSize) || pageSize < 1 || pageSize > 100) {
        return error("Invalid page size: must be between 1 and 100", 400);
      }

      const db = getDb();
      const result = await db.getQueue(search, status, page, pageSize);
      return json(result);
    }

    return error("Not found", 404);
  } catch (err) {
    console.error("API error:", err);
    return error("Internal server error", 500);
  }
}
