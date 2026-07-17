import { ReviewDB } from "../../lib/db";

interface Env {
  DB: D1Database;
}

interface CopyRequest {
  reviewId: number;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = (await context.request.json()) as CopyRequest;

    if (!body.reviewId || typeof body.reviewId !== "number") {
      return Response.json(
        { error: "Invalid request: reviewId is required and must be a number" },
        { status: 400 },
      );
    }

    const db = new ReviewDB(context.env);
    const success = await db.markCopied(body.reviewId);

    if (!success) {
      return Response.json(
        { error: "Review not found or not in assigned status" },
        { status: 404 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error marking review as copied:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
