import { ReviewDB } from "../../lib/db";
import type { ReviewStatus } from "../../types/review";

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const url = new URL(context.request.url);
    const search = url.searchParams.get("search") || undefined;
    const statusParam = url.searchParams.get("status") as ReviewStatus | null;
    const pageParam = url.searchParams.get("page");
    const pageSizeParam = url.searchParams.get("pageSize");

    const status =
      statusParam && ["unused", "assigned", "used"].includes(statusParam) ? statusParam : undefined;
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    const pageSize = pageSizeParam ? parseInt(pageSizeParam, 10) : 20;

    if (isNaN(page) || page < 1) {
      return Response.json({ error: "Invalid page number" }, { status: 400 });
    }

    if (isNaN(pageSize) || pageSize < 1 || pageSize > 100) {
      return Response.json(
        { error: "Invalid page size: must be between 1 and 100" },
        { status: 400 },
      );
    }

    const db = new ReviewDB(context.env);
    const result = await db.getQueue(search, status, page, pageSize);
    return Response.json(result);
  } catch (error) {
    console.error("Error fetching queue:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
