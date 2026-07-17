import { ReviewDB } from "../../lib/db";

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const db = new ReviewDB(context.env);
    const chartData = await db.getChartData();
    return Response.json(chartData);
  } catch (error) {
    console.error("Error fetching chart data:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
