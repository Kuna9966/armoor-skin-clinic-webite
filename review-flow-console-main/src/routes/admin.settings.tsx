import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, QrCode, RotateCcw, Trash2, Download, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { resetQueue, GOOGLE_REVIEW_URL } from "@/services/mockApi";

export const Route = createFileRoute("/admin/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  const [publicUrl] = useState("https://reviewflow.app/r/acme-clinic");
  const [reviewUrl, setReviewUrl] = useState(GOOGLE_REVIEW_URL);

  const copy = async (v: string, label: string) => {
    await navigator.clipboard.writeText(v);
    toast.success(`${label} copied`);
  };

  const doReset = async () => {
    await resetQueue();
    toast.success("Queue reset");
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-2xl p-6">
        <h2 className="font-display font-bold text-lg">Public URL</h2>
        <p className="text-xs text-muted-foreground mt-1">Where customers land after scanning the QR code.</p>
        <div className="mt-4 flex gap-2">
          <Input value={publicUrl} readOnly className="font-mono text-sm bg-background/50" />
          <Button variant="outline" onClick={() => copy(publicUrl, "URL")} className="rounded-lg shrink-0">
            <Copy className="h-4 w-4" /> Copy
          </Button>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="glass-card rounded-2xl p-6">
        <div className="flex items-start justify-between flex-wrap gap-6">
          <div>
            <h2 className="font-display font-bold text-lg">QR Code</h2>
            <p className="text-xs text-muted-foreground mt-1">Print this on receipts, tables and posters.</p>
            <Button className="mt-4 rounded-full gradient-bg text-white border-0 shadow-glow">
              <Download className="h-4 w-4" /> Download PNG
            </Button>
          </div>
          <div className="h-40 w-40 rounded-2xl bg-white p-3 shadow-elegant flex items-center justify-center">
            <div className="h-full w-full rounded-lg bg-[repeating-conic-gradient(#000_0%_25%,#fff_0%_50%)_50%_/_12px_12px] flex items-center justify-center">
              <div className="h-10 w-10 rounded bg-white flex items-center justify-center">
                <QrCode className="h-6 w-6 text-black" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-2xl p-6">
        <h2 className="font-display font-bold text-lg">Google Review URL</h2>
        <p className="text-xs text-muted-foreground mt-1">Customers are redirected here after copying.</p>
        <div className="mt-4 space-y-2">
          <Label htmlFor="gru" className="text-xs">Destination</Label>
          <div className="flex gap-2">
            <Input id="gru" value={reviewUrl} onChange={(e) => setReviewUrl(e.target.value)} placeholder="https://g.page/r/…" className="font-mono text-sm bg-background/50" />
            <Button onClick={() => toast.success("Saved")} className="rounded-lg shrink-0 gradient-bg text-white border-0">
              Save
            </Button>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <h2 className="font-display font-bold text-lg text-destructive">Danger Zone</h2>
        </div>
        <p className="text-xs text-muted-foreground mt-1">These actions cannot be undone.</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <ConfirmAction
            title="Reset queue"
            description="Restore all reviews to unused state. Assignment history is preserved."
            action="Reset"
            icon={RotateCcw}
            onConfirm={doReset}
          />
          <ConfirmAction
            title="Delete used"
            description="Permanently remove every review marked as used. This cannot be undone."
            action="Delete"
            icon={Trash2}
            onConfirm={() => toast.success("Used reviews deleted")}
          />
          <ConfirmAction
            title="Export data"
            description="Download a full CSV export of all reviews and history."
            action="Export"
            icon={Download}
            onConfirm={() => toast.success("Export queued")}
            destructive={false}
          />
        </div>
      </motion.section>
    </div>
  );
}

interface CAProps {
  title: string;
  description: string;
  action: string;
  icon: any;
  onConfirm: () => void;
  destructive?: boolean;
}

function ConfirmAction({ title, description, action, icon: Icon, onConfirm, destructive = true }: CAProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="text-left rounded-xl border border-border bg-card/50 backdrop-blur-sm p-4 hover:border-destructive/50 transition-colors group">
          <div className="flex items-center gap-2">
            <Icon className={`h-4 w-4 ${destructive ? "text-destructive" : "text-primary"}`} />
            <p className="font-semibold text-sm">{title}</p>
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">{description}</p>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}?</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className={destructive ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : ""}
          >
            {action}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
