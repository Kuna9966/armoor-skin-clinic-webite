import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/status-badge";
import { getHistory } from "@/services/mockApi";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/history")({
  component: HistoryPage,
});

function HistoryPage() {
  const [history, setHistory] = useState<Awaited<ReturnType<typeof getHistory>>>([]);

  useEffect(() => {
    getHistory().then(setHistory);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end">
        <Button
          onClick={() => toast.success("Export queued", { description: "Your CSV will download shortly." })}
          className="rounded-full gradient-bg text-white border-0 shadow-glow"
        >
          <Download className="h-4 w-4" /> Export
        </Button>
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase text-muted-foreground bg-muted/30">
              <tr>
                <th className="text-left px-6 py-3 font-medium">Review</th>
                <th className="text-left px-6 py-3 font-medium">Assigned</th>
                <th className="text-left px-6 py-3 font-medium">Copied</th>
                <th className="text-left px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((r, i) => (
                <motion.tr
                  key={r.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-t border-border/40 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4 max-w-lg">
                    <p className="truncate">{r.text}</p>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">{r.id}</p>
                  </td>
                  <td className="px-6 py-4 text-xs text-muted-foreground whitespace-nowrap">
                    {r.assignedAt ? new Date(r.assignedAt).toLocaleString() : "—"}
                  </td>
                  <td className="px-6 py-4">
                    {r.copied ? (
                      <Check className="h-4 w-4 text-success" />
                    ) : (
                      <span className="text-muted-foreground text-xs">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4"><StatusBadge status={r.status} /></td>
                </motion.tr>
              ))}
              {history.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-16 text-center text-muted-foreground text-sm">
                    No history yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
