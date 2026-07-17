import { cn } from "@/lib/utils";

interface Props {
  status: "unused" | "used" | "duplicate" | "ok" | "error";
  className?: string;
}

const styles: Record<Props["status"], string> = {
  unused: "bg-chart-2/15 text-chart-2 border-chart-2/30",
  used: "bg-muted text-muted-foreground border-border",
  duplicate: "bg-warning/15 text-warning border-warning/30",
  ok: "bg-success/15 text-success border-success/30",
  error: "bg-destructive/15 text-destructive border-destructive/30",
};

const labels: Record<Props["status"], string> = {
  unused: "Unused",
  used: "Used",
  duplicate: "Duplicate",
  ok: "OK",
  error: "Error",
};

export function StatusBadge({ status, className }: Props) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium", styles[status], className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {labels[status]}
    </span>
  );
}
