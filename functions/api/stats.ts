import { ReviewDB } from "../../lib/db";

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const db = new ReviewDB(context.env);
    const stats = await db.getDashboardStats();
    return Response.json(stats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
