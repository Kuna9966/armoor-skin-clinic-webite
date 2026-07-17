import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  label: string;
  value: string | number;
  hint?: string;
  icon: LucideIcon;
  accent?: "primary" | "success" | "warning" | "chart-2";
  delay?: number;
}

const accentMap: Record<string, string> = {
  primary: "from-primary/20 to-primary-glow/10 text-primary",
  success: "from-success/20 to-success/5 text-success",
  warning: "from-warning/20 to-warning/5 text-warning",
  "chart-2": "from-chart-2/20 to-chart-2/5 text-chart-2",
};

export function StatsCard({ label, value, hint, icon: Icon, accent = "primary", delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-2xl p-6 relative overflow-hidden group"
    >
      <div className={cn("absolute -top-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br opacity-40 blur-2xl group-hover:opacity-60 transition-opacity", accentMap[accent])} />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight font-display">{value}</p>
          {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
        </div>
        <div className={cn("h-10 w-10 rounded-xl bg-gradient-to-br flex items-center justify-center", accentMap[accent])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </motion.div>
  );
}
