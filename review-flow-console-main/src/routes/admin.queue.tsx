import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/status-badge";
import { getQueue, type Review } from "@/services/mockApi";

export const Route = createFileRoute("/admin/queue")({
  component: QueuePage,
});

const PAGE_SIZE = 5;

function QueuePage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | "unused" | "used">("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    getQueue().then(setReviews);
  }, []);

  const filtered = useMemo(() => {
    return reviews.filter((r) => {
      if (filter !== "all" && r.status !== filter) return false;
      if (q && !r.text.toLowerCase().includes(q.toLowerCase()) && !r.id.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [reviews, q, filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl overflow-hidden"
    >
      <div className="p-6 flex flex-wrap items-center gap-3 justify-between border-b border-border/50">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
            placeholder="Search reviews or ID…"
            className="pl-9 rounded-full bg-background/50"
          />
        </div>
        <div className="inline-flex rounded-full bg-muted p-1 gap-1">
          {(["all", "unused", "used"] as const).map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setPage(1);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize transition-colors ${
                filter === f ? "gradient-bg text-white shadow-glow" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-xs uppercase text-muted-foreground bg-muted/30">
            <tr>
              <th className="text-left px-6 py-3 font-medium">ID</th>
              <th className="text-left px-6 py-3 font-medium">Review</th>
              <th className="text-left px-6 py-3 font-medium">Status</th>
              <th className="text-left px-6 py-3 font-medium">Created</th>
              <th className="text-left px-6 py-3 font-medium">Assigned</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((r) => (
              <tr key={r.id} className="border-t border-border/40 hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4 font-mono text-xs">{r.id}</td>
                <td className="px-6 py-4 max-w-md truncate">{r.text}</td>
                <td className="px-6 py-4"><StatusBadge status={r.status} /></td>
                <td className="px-6 py-4 text-muted-foreground text-xs">{new Date(r.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-muted-foreground text-xs">
                  {r.assignedAt ? new Date(r.assignedAt).toLocaleDateString() : "—"}
                </td>
              </tr>
            ))}
            {paged.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground text-sm">
                  No reviews match your filters
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-6 py-4 border-t border-border/50">
        <p className="text-xs text-muted-foreground">
          {filtered.length} result{filtered.length === 1 ? "" : "s"} · Page {page} of {totalPages}
        </p>
        <div className="flex gap-1">
          <Button variant="outline" size="icon" className="rounded-full h-8 w-8" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-8 w-8" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
