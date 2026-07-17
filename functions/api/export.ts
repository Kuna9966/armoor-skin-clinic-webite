import { ReviewDB } from "../../lib/db";

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const db = new ReviewDB(context.env);
    const csv = await db.exportCsv();

    return new Response(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="reviews-export-${new Date().toISOString().split("T")[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error("Error exporting reviews:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
