import { ReviewDB } from "../../lib/db";

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const db = new ReviewDB(context.env);
    const health = await db.getHealth();
    return Response.json(health);
  } catch (error) {
    console.error("Error checking health:", error);
    return Response.json(
      {
        database: false,
        queueHealthy: false,
        remaining: 0,
      },
      { status: 500 },
    );
  }
};
