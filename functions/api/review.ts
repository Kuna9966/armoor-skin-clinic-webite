import { ReviewDB } from "../../lib/db";

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const db = new ReviewDB(context.env);
    const review = await db.getNextReview();

    if (!review) {
      return Response.json({ error: "No reviews available in queue" }, { status: 404 });
    }

    return Response.json(review);
  } catch (error) {
    console.error("Error fetching review:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
