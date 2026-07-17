import { ReviewDB } from "../../lib/db";

interface Env {
  DB: D1Database;
}

interface ImportRequest {
  reviews: string[];
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = (await context.request.json()) as ImportRequest;

    if (!body.reviews || !Array.isArray(body.reviews)) {
      return Response.json(
        { error: "Invalid request: reviews array is required" },
        { status: 400 },
      );
    }

    if (body.reviews.length === 0) {
      return Response.json(
        { error: "Invalid request: reviews array cannot be empty" },
        { status: 400 },
      );
    }

    if (body.reviews.length > 1000) {
      return Response.json(
        { error: "Invalid request: maximum 1000 reviews per import" },
        { status: 400 },
      );
    }

    const db = new ReviewDB(context.env);
    const result = await db.importReviews(body.reviews);

    return Response.json(result);
  } catch (error) {
    console.error("Error importing reviews:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
