import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Database, Inbox, CheckCircle2, TrendingUp, Activity } from "lucide-react";
import { StatsCard } from "@/components/stats-card";
import { getDashboardStats } from "@/services/mockApi";

export const Route = createFileRoute("/admin/")({
  component: DashboardPage,
});

function DashboardPage() {
  const [stats, setStats] = useState<Awaited<ReturnType<typeof getDashboardStats>> | null>(null);

  useEffect(() => {
    getDashboardStats().then(setStats);
  }, []);

  if (!stats) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-32 rounded-2xl glass-card animate-pulse" />
        ))}
      </div>
    );
  }

  const pct = stats.queueProgress;
  const circ = 2 * Math.PI * 52;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard label="Total Reviews" value={stats.total.toLocaleString()} icon={Database} accent="primary" delay={0} />
        <StatsCard label="Remaining" value={stats.remaining.toLocaleString()} hint="Ready to assign" icon={Inbox} accent="chart-2" delay={0.05} />
        <StatsCard label="Used" value={stats.used.toLocaleString()} icon={CheckCircle2} accent="success" delay={0.1} />
        <StatsCard label="Imported Today" value={`+${stats.importedToday}`} hint="Last 24 hours" icon={TrendingUp} accent="warning" delay={0.15} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6 lg:col-span-2"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-bold text-lg">Recent Activity</h2>
              <p className="text-xs text-muted-foreground">Latest queue events</p>
            </div>
            <Activity className="h-5 w-5 text-muted-foreground" />
          </div>
          <ul className="mt-5 space-y-1">
            {stats.recent.map((ev, i) => (
              <motion.li
                key={ev.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.04 }}
                className="flex items-center gap-3 py-2.5 border-b border-border/50 last:border-0"
              >
                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-[10px] font-mono font-semibold">
                  {ev.id.slice(-3)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{ev.action}</p>
                  <p className="text-xs text-muted-foreground">{ev.id}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{ev.time}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center"
        >
          <h2 className="font-display font-bold text-lg">Queue Progress</h2>
          <p className="text-xs text-muted-foreground">Used vs. total</p>

          <div className="relative mt-6 h-40 w-40">
            <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
              <circle cx="60" cy="60" r="52" fill="none" stroke="var(--color-muted)" strokeWidth="10" />
              <motion.circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="url(#grad)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circ}
                initial={{ strokeDashoffset: circ }}
                animate={{ strokeDashoffset: circ - (circ * pct) / 100 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.55 0.22 285)" />
                  <stop offset="100%" stopColor="oklch(0.72 0.18 300)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold font-display gradient-text">{pct}%</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">used</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            <span className="font-semibold text-foreground">{stats.remaining}</span> of {stats.total} still available
          </p>
        </motion.div>
      </div>
    </div>
  );
}
