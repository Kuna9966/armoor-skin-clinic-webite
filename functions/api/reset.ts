import { ReviewDB } from "../../lib/db";

interface Env {
  DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const db = new ReviewDB(context.env);
    const resetCount = await db.resetQueue();

    return Response.json({
      success: true,
      resetCount,
      message: `Reset ${resetCount} reviews from assigned to unused`,
    });
  } catch (error) {
    console.error("Error resetting queue:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
