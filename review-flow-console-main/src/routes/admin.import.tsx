import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Upload, Eye, Trash2, FileText, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { StatusBadge } from "@/components/status-badge";
import { toast } from "sonner";
import { importReviews } from "@/services/mockApi";

export const Route = createFileRoute("/admin/import")({
  component: ImportPage,
});

const EXAMPLE = `Excellent doctor and friendly staff.
Very satisfied with treatment.
Highly recommended clinic.
Professional consultation.`;

function ImportPage() {
  const [text, setText] = useState("");
  const [preview, setPreview] = useState(false);
  const [summary, setSummary] = useState<{ imported: number; duplicates: number; errors: number } | null>(null);
  const [importing, setImporting] = useState(false);

  const lines = useMemo(
    () => text.split("\n").map((l) => l.trim()).filter(Boolean),
    [text]
  );

  const rows = useMemo(() => {
    const seen = new Set<string>();
    return lines.map((line, i) => {
      const dup = seen.has(line.toLowerCase());
      seen.add(line.toLowerCase());
      const status: "ok" | "error" = line.length < 15 ? "error" : "ok";
      return { i: i + 1, text: line, length: line.length, status, duplicate: dup };
    });
  }, [lines]);

  async function handleImport() {
    if (!text.trim()) {
      toast.error("Nothing to import", { description: "Paste your reviews first." });
      return;
    }
    setImporting(true);
    const s = await importReviews(text);
    setSummary(s);
    setImporting(false);
    toast.success(`${s.imported} reviews imported`);
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl p-6"
      >
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h2 className="font-display font-bold text-xl">Import Reviews</h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-lg">
              Paste directly from Excel, Google Sheets, CSV, Notepad or Word. Each new line represents one review.
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setText(EXAMPLE)} className="rounded-full">
            <FileText className="h-3.5 w-3.5" /> Load example
          </Button>
        </div>

        <div className="mt-6 relative">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={EXAMPLE}
            className="min-h-[280px] font-mono text-sm rounded-xl bg-background/50 backdrop-blur-sm resize-y"
          />
          <div className="absolute bottom-3 right-3 text-xs text-muted-foreground bg-background/80 backdrop-blur px-2 py-1 rounded-md">
            {lines.length} line{lines.length === 1 ? "" : "s"}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Button onClick={() => setPreview(true)} variant="outline" className="rounded-full">
            <Eye className="h-4 w-4" /> Preview
          </Button>
          <Button onClick={handleImport} disabled={importing} className="rounded-full gradient-bg text-white border-0 shadow-glow hover:scale-105 transition-transform">
            <Upload className="h-4 w-4" /> {importing ? "Importing…" : "Import"}
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setText("");
              setPreview(false);
              setSummary(null);
            }}
            className="rounded-full"
          >
            <Trash2 className="h-4 w-4" /> Clear
          </Button>
        </div>
      </motion.div>

      {preview && rows.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          <div className="p-6 pb-3 flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold text-lg">Preview</h3>
              <p className="text-xs text-muted-foreground">{rows.length} rows ready</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs uppercase text-muted-foreground border-y border-border/50 bg-muted/30">
                <tr>
                  <th className="text-left px-6 py-3 font-medium">#</th>
                  <th className="text-left px-6 py-3 font-medium">Review</th>
                  <th className="text-left px-6 py-3 font-medium">Length</th>
                  <th className="text-left px-6 py-3 font-medium">Status</th>
                  <th className="text-left px-6 py-3 font-medium">Duplicate</th>
                </tr>
              </thead>
              <tbody>
                {rows.slice(0, 50).map((r) => (
                  <tr key={r.i} className="border-b border-border/40 last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-3 text-muted-foreground font-mono text-xs">{r.i}</td>
                    <td className="px-6 py-3 max-w-md truncate">{r.text}</td>
                    <td className="px-6 py-3 text-muted-foreground">{r.length}</td>
                    <td className="px-6 py-3"><StatusBadge status={r.status} /></td>
                    <td className="px-6 py-3">
                      {r.duplicate ? <StatusBadge status="duplicate" /> : <span className="text-xs text-muted-foreground">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {rows.length > 50 && (
            <div className="px-6 py-3 text-xs text-muted-foreground border-t border-border/50">
              Showing first 50 of {rows.length} rows
            </div>
          )}
        </motion.div>
      )}

      {summary && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-4 sm:grid-cols-3"
        >
          <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-success/15 text-success flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Imported</p>
              <p className="text-2xl font-bold font-display">{summary.imported}</p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-warning/15 text-warning flex items-center justify-center">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Duplicates</p>
              <p className="text-2xl font-bold font-display">{summary.duplicates}</p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-destructive/15 text-destructive flex items-center justify-center">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Errors</p>
              <p className="text-2xl font-bold font-display">{summary.errors}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
