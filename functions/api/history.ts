import { ReviewDB } from "../../lib/db";

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const url = new URL(context.request.url);
    const limitParam = url.searchParams.get("limit");
    const limit = limitParam ? parseInt(limitParam, 10) : 50;

    if (isNaN(limit) || limit < 1 || limit > 200) {
      return Response.json({ error: "Invalid limit: must be between 1 and 200" }, { status: 400 });
    }

    const db = new ReviewDB(context.env);
    const history = await db.getHistory(limit);
    return Response.json(history);
  } catch (error) {
    console.error("Error fetching history:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
