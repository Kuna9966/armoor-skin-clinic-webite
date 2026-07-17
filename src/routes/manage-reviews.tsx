import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import {
  LayoutDashboard,
  Upload,
  ListOrdered,
  History,
  Settings,
  Search,
  ChevronLeft,
  ChevronRight,
  Database,
  Inbox,
  CheckCircle2,
  TrendingUp,
  Activity,
  Eye,
  Trash2,
  FileText,
  AlertTriangle,
  QrCode,
  RotateCcw,
  Download,
  Home,
  ExternalLink,
  Bell,
  Users,
  ClipboardList,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import {
  getDashboardStats,
  getChartData,
  getQueue,
  getHistory,
  importReviews,
  resetQueue,
  deleteAllReviews,
  type Review,
  type HistoryEntry,
  type DashboardStats,
  type ChartData,
} from "@/services/mockApi";

export const Route = createFileRoute("/manage-reviews")({
  component: ManageReviewsPage,
});

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "import", label: "Import Reviews", icon: Upload },
  { id: "queue", label: "Queue", icon: ListOrdered },
  { id: "history", label: "History", icon: History },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

type Tab = (typeof NAV_ITEMS)[number]["id"];

const TAB_TITLES: Record<Tab, { t: string; s: string }> = {
  dashboard: { t: "Dashboard", s: "Live overview of your review queue" },
  import: { t: "Import Reviews", s: "Bring reviews in from any source" },
  queue: { t: "Queue", s: "Search, filter and inspect every review" },
  history: { t: "History", s: "Timeline of everything you've served" },
  settings: { t: "Settings", s: "URLs, QR code and danger zone" },
};

/* ── Page Shell ───────────────────────────────────────────── */

function ManageReviewsPage() {
  const [tab, setTab] = useState<Tab>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarStats, setSidebarStats] = useState<DashboardStats | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const info = TAB_TITLES[tab];

  const refreshStats = () => {
    getDashboardStats().then(setSidebarStats).catch(console.error);
    setRefreshKey((k) => k + 1);
  };

  useEffect(() => {
    getDashboardStats().then(setSidebarStats).catch(console.error);
  }, []);

  return (
    <div className="hero-glow flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`sticky top-0 z-30 flex h-screen flex-col border-r border-border/60 bg-background/80 backdrop-blur-xl transition-all duration-300 ${
          sidebarOpen ? "w-60" : "w-16"
        }`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center gap-2.5 border-b border-border/60 px-3">
          <Link
            to="/"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl gradient-bg shadow-glow"
          >
            <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
          </Link>
          {sidebarOpen && (
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-bold leading-tight">Review Flow</p>
              <p className="text-[10px] text-muted-foreground">Admin Console</p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 p-2">
          {NAV_ITEMS.map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                  active
                    ? "gradient-bg text-white shadow-glow"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
                title={item.label}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        {sidebarOpen && (
          <div className="space-y-2 border-t border-border/60 p-3">
            <div className="glass-card rounded-xl p-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <p className="text-xs font-semibold">Queue healthy</p>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                {sidebarStats?.remaining ?? "—"} reviews ready to serve
              </p>
            </div>
            <Link
              to="/review"
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Public Review Page
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
            >
              <Home className="h-3.5 w-3.5" />
              Back to Website
            </Link>
          </div>
        )}

        {/* Collapse toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex h-10 items-center justify-center border-t border-border/60 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft
            className={`h-4 w-4 transition-transform ${!sidebarOpen ? "rotate-180" : ""}`}
          />
        </button>
      </aside>

      {/* Main area */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-border/60 bg-background/70 px-4 backdrop-blur-xl sm:px-6">
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-lg font-bold leading-none truncate">{info.t}</h1>
            <p className="mt-1 text-xs text-muted-foreground truncate">{info.s}</p>
          </div>
          <button className="relative flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[var(--warning)]" />
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full gradient-bg text-xs font-bold text-white">
            A
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          {tab === "dashboard" && <DashboardTab refreshKey={refreshKey} />}
          {tab === "import" && <ImportTab />}
          {tab === "queue" && <QueueTab />}
          {tab === "history" && <HistoryTab />}
          {tab === "settings" && <SettingsTab onReset={refreshStats} />}
        </main>
      </div>
    </div>
  );
}

/* ── Dashboard ────────────────────────────────────────────── */

const COLORS = {
  primary: "oklch(0.24 0.08 265)",
  glow: "oklch(0.35 0.12 265)",
  success: "oklch(0.68 0.18 155)",
  warning: "oklch(0.78 0.16 75)",
  chart2: "oklch(0.62 0.09 195)",
  muted: "oklch(0.92 0.01 260)",
};

function DashboardTab({ refreshKey }: { refreshKey: number }) {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [charts, setCharts] = useState<ChartData | null>(null);

  useEffect(() => {
    getDashboardStats().then(setStats);
    getChartData().then(setCharts);
  }, [refreshKey]);

  if (!stats || !charts) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="glass-card h-32 animate-pulse rounded-2xl" />
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="glass-card h-80 animate-pulse rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  const donutData = [
    { name: "Used", value: stats.used, fill: COLORS.primary },
    { name: "Remaining", value: stats.remaining, fill: COLORS.muted },
  ];

  const radialData = [{ name: "Health", value: 92, fill: COLORS.success }];

  return (
    <div className="space-y-6">
      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total Reviews"
          value={stats.total.toLocaleString()}
          icon={Database}
          accent="primary"
          trend={{ value: "+12%", up: true }}
          delay={0}
        />
        <StatCard
          label="Remaining"
          value={stats.remaining.toLocaleString()}
          hint="Ready to assign"
          icon={Inbox}
          accent="chart-2"
          trend={{ value: "+8%", up: true }}
          delay={0.05}
        />
        <StatCard
          label="Used"
          value={stats.used.toLocaleString()}
          icon={CheckCircle2}
          accent="success"
          trend={{ value: "+26%", up: true }}
          delay={0.1}
        />
        <StatCard
          label="Imported Today"
          value={`+${stats.importedToday}`}
          hint="Last 24 hours"
          icon={TrendingUp}
          accent="warning"
          delay={0.15}
        />
      </div>

      {/* Charts row 1 */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Queue Progress Donut */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card flex flex-col items-center justify-center rounded-2xl p-6"
        >
          <h3 className="font-display font-bold">Queue Progress</h3>
          <p className="text-xs text-muted-foreground">Used vs. total</p>
          <div className="mt-4 h-48 w-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  strokeWidth={0}
                >
                  {donutData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center">
            <span className="gradient-text font-display text-3xl font-bold">
              {stats.queueProgress}%
            </span>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">{stats.remaining}</span> of{" "}
              {stats.total} still available
            </p>
          </div>
        </motion.div>

        {/* Daily Imports Area Chart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card rounded-2xl p-6 lg:col-span-2"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold">Daily Imports</h3>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </div>
            <TrendingUp className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={charts.dailyImports}>
                <defs>
                  <linearGradient id="importGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={COLORS.primary} stopOpacity={0.3} />
                    <stop offset="100%" stopColor={COLORS.primary} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip
                  contentStyle={{
                    background: "rgba(255,255,255,0.9)",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke={COLORS.primary}
                  strokeWidth={2}
                  fill="url(#importGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Charts row 2 */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Review Usage Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-2xl p-6 lg:col-span-2"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold">Review Usage</h3>
              <p className="text-xs text-muted-foreground">Daily copied vs assigned</p>
            </div>
            <ClipboardList className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={charts.reviewUsage}>
                <Tooltip
                  contentStyle={{
                    background: "rgba(255,255,255,0.9)",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  }}
                />
                <Legend />
                <Bar dataKey="copied" fill={COLORS.primary} radius={[4, 4, 0, 0]} name="Copied" />
                <Bar
                  dataKey="assigned"
                  fill={COLORS.chart2}
                  radius={[4, 4, 0, 0]}
                  name="Assigned"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Queue Health Radial */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card flex flex-col items-center justify-center rounded-2xl p-6 text-center"
        >
          <h3 className="font-display font-bold">Queue Health</h3>
          <p className="text-xs text-muted-foreground">System status</p>
          <div className="mt-4 h-44 w-44">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="100%"
                barSize={14}
                data={radialData}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar dataKey="value" cornerRadius={10} background={{ fill: COLORS.muted }} />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <span className="mt-2 text-lg font-bold text-[var(--success)]">Excellent</span>
          <p className="text-xs text-muted-foreground">92% queue health</p>
        </motion.div>
      </div>

      {/* Remaining Trend + Activity */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Remaining Reviews Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-2xl p-6 lg:col-span-2"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold">Remaining Reviews Trend</h3>
              <p className="text-xs text-muted-foreground">Last 14 days</p>
            </div>
            <Activity className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={charts.remainingTrend}>
                <Tooltip
                  contentStyle={{
                    background: "rgba(255,255,255,0.9)",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="remaining"
                  stroke={COLORS.success}
                  strokeWidth={2.5}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Activity Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold">Recent Activity</h3>
              <p className="text-xs text-muted-foreground">Latest events</p>
            </div>
            <Activity className="h-5 w-5 text-muted-foreground" />
          </div>
          <ul className="mt-4 space-y-1">
            {stats.recent.map((ev, i) => {
              const iconMap = {
                import: <Upload className="h-3 w-3" />,
                assign: <Users className="h-3 w-3" />,
                copy: <CheckCircle2 className="h-3 w-3" />,
                redirect: <ArrowUpRight className="h-3 w-3" />,
              };
              const colorMap = {
                import: "bg-primary/15 text-primary",
                assign: "bg-chart-2/15 text-chart-2",
                copy: "bg-success/15 text-success",
                redirect: "bg-warning/15 text-warning",
              };
              return (
                <motion.li
                  key={ev.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.04 }}
                  className="flex items-center gap-3 border-b border-border/40 py-2.5 last:border-0"
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${colorMap[ev.type]}`}
                  >
                    {iconMap[ev.type]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium">{ev.action}</p>
                    <p className="text-[10px] text-muted-foreground font-mono">{ev.id}</p>
                  </div>
                  <span className="whitespace-nowrap text-[10px] text-muted-foreground">
                    {ev.time}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Import ───────────────────────────────────────────────── */

const EXAMPLE = `Excellent doctor and friendly staff.
Very satisfied with treatment.
Highly recommended clinic.
Professional consultation.`;

function ImportTab() {
  const [text, setText] = useState("");
  const [preview, setPreview] = useState(false);
  const [importing, setImporting] = useState(false);

  const lines = useMemo(
    () =>
      text
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean),
    [text],
  );

  const rows = useMemo(() => {
    const seen = new Set<string>();
    return lines.map((line, i) => {
      const dup = seen.has(line.toLowerCase());
      seen.add(line.toLowerCase());
      const status: "ok" | "error" = line.length < 15 ? "error" : "ok";
      return {
        i: i + 1,
        text: line,
        length: line.length,
        status,
        duplicate: dup,
      };
    });
  }, [lines]);

  async function handleImport() {
    if (!text.trim()) {
      toast.error("Nothing to import", {
        description: "Paste your reviews first.",
      });
      return;
    }
    setImporting(true);
    await importReviews(text);
    setImporting(false);
    toast.success("Reviews imported");
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl p-6"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-bold">Import Reviews</h2>
            <p className="mt-1 max-w-lg text-sm text-muted-foreground">
              Paste reviews copied from Excel, Google Sheets or CSV. Each new line represents one
              review.
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setText(EXAMPLE)}
            className="rounded-full"
          >
            <FileText className="h-3.5 w-3.5" /> Load example
          </Button>
        </div>

        <div className="relative mt-6">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={EXAMPLE}
            className="min-h-[280px] resize-y rounded-xl bg-background/50 font-mono text-sm backdrop-blur-sm"
          />
          <div className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-background/80 px-2 py-1 text-xs text-muted-foreground backdrop-blur">
            {lines.length} line{lines.length === 1 ? "" : "s"}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Button onClick={() => setPreview(true)} variant="outline" className="rounded-full">
            <Eye className="h-4 w-4" /> Preview
          </Button>
          <Button
            onClick={handleImport}
            disabled={importing}
            className="gradient-bg rounded-full border-0 text-white shadow-glow hover:scale-105 transition-transform"
          >
            <Upload className="h-4 w-4" /> {importing ? "Importing\u2026" : "Import"}
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setText("");
              setPreview(false);
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
          className="glass-card overflow-hidden rounded-2xl"
        >
          <div className="flex items-center justify-between p-6 pb-3">
            <div>
              <h3 className="font-display text-lg font-bold">Preview</h3>
              <p className="text-xs text-muted-foreground">{rows.length} rows ready</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-y border-border/50 bg-muted/30 text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="px-6 py-3 text-left font-medium">#</th>
                  <th className="px-6 py-3 text-left font-medium">Review</th>
                  <th className="px-6 py-3 text-left font-medium">Characters</th>
                  <th className="px-6 py-3 text-left font-medium">Status</th>
                  <th className="px-6 py-3 text-left font-medium">Duplicate</th>
                </tr>
              </thead>
              <tbody>
                {rows.slice(0, 50).map((r) => (
                  <tr
                    key={r.i}
                    className="border-b border-border/40 transition-colors hover:bg-muted/30 last:border-0"
                  >
                    <td className="px-6 py-3 font-mono text-xs text-muted-foreground">{r.i}</td>
                    <td className="max-w-md truncate px-6 py-3">{r.text}</td>
                    <td className="px-6 py-3 text-muted-foreground">{r.length}</td>
                    <td className="px-6 py-3">
                      <StatusBadge status={r.status} />
                    </td>
                    <td className="px-6 py-3">
                      {r.duplicate ? (
                        <StatusBadge status="duplicate" />
                      ) : (
                        <span className="text-xs text-muted-foreground">&mdash;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {rows.length > 50 && (
            <div className="border-t border-border/50 px-6 py-3 text-xs text-muted-foreground">
              Showing first 50 of {rows.length} rows
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

/* ── Queue ────────────────────────────────────────────────── */

function QueueTab() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | "unused" | "assigned" | "used">("all");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;

  useEffect(() => {
    getQueue().then(setReviews);
  }, []);

  const filtered = useMemo(() => {
    return reviews.filter((r) => {
      if (filter !== "all" && r.status !== filter) return false;
      if (
        q &&
        !r.text.toLowerCase().includes(q.toLowerCase()) &&
        !r.id.toLowerCase().includes(q.toLowerCase())
      )
        return false;
      return true;
    });
  }, [reviews, q, filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card overflow-hidden rounded-2xl"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 p-6">
        <div className="relative min-w-[200px] max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
            placeholder="Search reviews or ID\u2026"
            className="rounded-full bg-background/50 pl-9"
          />
        </div>
        <div className="inline-flex gap-1 rounded-full bg-muted p-1">
          {(["all", "unused", "assigned", "used"] as const).map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setPage(1);
              }}
              className={`rounded-full px-4 py-1.5 text-xs font-medium capitalize transition-colors ${
                filter === f
                  ? "gradient-bg text-white shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/30 text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-6 py-3 text-left font-medium">ID</th>
              <th className="px-6 py-3 text-left font-medium">Review</th>
              <th className="px-6 py-3 text-left font-medium">Status</th>
              <th className="px-6 py-3 text-left font-medium">Assigned</th>
              <th className="px-6 py-3 text-left font-medium">Copied</th>
              <th className="px-6 py-3 text-left font-medium">Created</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((r) => (
              <tr
                key={r.id}
                className="border-t border-border/40 transition-colors hover:bg-muted/30"
              >
                <td className="px-6 py-4 font-mono text-xs">{r.id}</td>
                <td className="max-w-md truncate px-6 py-4">{r.text}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={r.status} />
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-xs text-muted-foreground">
                  {r.assignedAt ? new Date(r.assignedAt).toLocaleDateString() : "\u2014"}
                </td>
                <td className="px-6 py-4">
                  {r.copiedAt ? (
                    <CheckCircle2 className="h-4 w-4 text-[var(--success)]" />
                  ) : (
                    <span className="text-xs text-muted-foreground">&mdash;</span>
                  )}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-xs text-muted-foreground">
                  {new Date(r.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
            {paged.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-sm text-muted-foreground">
                  No reviews match your filters
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-border/50 px-6 py-4">
        <p className="text-xs text-muted-foreground">
          {filtered.length} result
          {filtered.length === 1 ? "" : "s"} &middot; Page {page} of {totalPages}
        </p>
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

/* ── History ──────────────────────────────────────────────── */

function HistoryTab() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    getHistory().then(setHistory);
  }, []);

  const iconMap = {
    import: <Upload className="h-4 w-4" />,
    copy: <CheckCircle2 className="h-4 w-4" />,
    redirect: <ArrowUpRight className="h-4 w-4" />,
  };
  const colorMap = {
    import: "bg-primary/15 text-primary",
    copy: "bg-success/15 text-success",
    redirect: "bg-warning/15 text-warning",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end">
        <Button
          onClick={() =>
            toast.success("Export queued", {
              description: "Your CSV will download shortly.",
            })
          }
          className="gradient-bg rounded-full border-0 text-white shadow-glow"
        >
          <Download className="h-4 w-4" /> Export
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card overflow-hidden rounded-2xl"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/30 text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-6 py-3 text-left font-medium">Event</th>
                <th className="px-6 py-3 text-left font-medium">Review</th>
                <th className="px-6 py-3 text-left font-medium">Time</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((r, i) => (
                <motion.tr
                  key={r.id + r.timestamp}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-t border-border/40 transition-colors hover:bg-muted/30"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${colorMap[r.type]}`}
                      >
                        {iconMap[r.type]}
                      </div>
                      <span className="text-xs font-medium capitalize">{r.type}</span>
                    </div>
                  </td>
                  <td className="max-w-lg px-6 py-4">
                    <p className="truncate">{r.text}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted-foreground">{r.id}</p>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs text-muted-foreground">
                    {new Date(r.timestamp).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={r.status} />
                  </td>
                </motion.tr>
              ))}
              {history.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-16 text-center text-sm text-muted-foreground">
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

/* ── Settings ─────────────────────────────────────────────── */

function SettingsTab({ onReset }: { onReset?: () => void }) {
  // Google Review URL for Armoor Skin & Hair Clinic
  const [reviewUrl, setReviewUrl] = useState("https://g.page/r/CWYmHRHhqTqnEAE/review");

  const doReset = async () => {
    try {
      await resetQueue();
      toast.success("Queue reset — all reviews set back to unused");
      onReset?.();
    } catch {
      toast.error("Failed to reset queue. Please try again.");
    }
  };

  const doDeleteAll = async () => {
    try {
      await deleteAllReviews();
      toast.success("All reviews deleted — database is now empty");
      onReset?.();
    } catch {
      toast.error("Failed to delete reviews. Please try again.");
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl p-6"
      >
        <h2 className="font-display text-lg font-bold">Google Review URL</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          Customers are redirected here after copying.
        </p>
        <div className="mt-4 flex gap-2">
          <Input
            value={reviewUrl}
            onChange={(e) => setReviewUrl(e.target.value)}
            placeholder="https://g.page/r/\u2026"
            className="bg-background/50 font-mono text-sm"
          />
          <Button
            onClick={() => toast.success("Saved")}
            className="gradient-bg shrink-0 rounded-lg border-0 text-white"
          >
            Save
          </Button>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="glass-card rounded-2xl p-6"
      >
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <h2 className="font-display text-lg font-bold">QR Code</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Print this on receipts, tables and posters.
            </p>
            <Button className="mt-4 rounded-full gradient-bg border-0 text-white shadow-glow">
              <Download className="h-4 w-4" /> Download PNG
            </Button>
          </div>
          <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-white p-3 shadow-elegant">
            <div className="flex h-full w-full items-center justify-center rounded-lg bg-[repeating-conic-gradient(#000_0%_25%,#fff_0%_50%)] bg-[length:12px_12px] bg-center">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-white">
                <QrCode className="h-6 w-6 text-black" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6"
      >
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <h2 className="font-display text-lg font-bold text-destructive">Danger Zone</h2>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">These actions cannot be undone.</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <ConfirmAction
            title="Reset queue"
            description="Restore all reviews to unused state."
            action="Reset"
            icon={RotateCcw}
            onConfirm={doReset}
          />
          <ConfirmAction
            title="Delete all reviews"
            description="Permanently remove every review from the database."
            action="Delete All"
            icon={Trash2}
            onConfirm={doDeleteAll}
          />
          <ConfirmAction
            title="Export data"
            description="Download a full JSON export of all reviews."
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

/* ── Shared Components ────────────────────────────────────── */

function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  accent = "primary",
  trend,
  delay = 0,
}: {
  label: string;
  value: string | number;
  hint?: string;
  icon: React.ElementType;
  accent?: "primary" | "success" | "warning" | "chart-2";
  trend?: { value: string; up: boolean };
  delay?: number;
}) {
  const accentMap: Record<string, string> = {
    primary: "from-primary/20 to-primary-glow/10 text-primary",
    success: "from-success/20 to-success/5 text-success",
    warning: "from-warning/20 to-warning/5 text-warning",
    "chart-2": "from-chart-2/20 to-chart-2/5 text-chart-2",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card relative overflow-hidden rounded-2xl p-6 group"
    >
      <div
        className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br opacity-40 blur-2xl transition-opacity group-hover:opacity-60 ${accentMap[accent]}`}
      />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight font-display">{value}</p>
          <div className="mt-1 flex items-center gap-2">
            {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
            {trend && (
              <span
                className={`inline-flex items-center gap-0.5 text-xs font-medium ${
                  trend.up ? "text-[var(--success)]" : "text-destructive"
                }`}
              >
                {trend.up ? (
                  <ArrowUpRight className="h-3 w-3" />
                ) : (
                  <ArrowDownRight className="h-3 w-3" />
                )}
                {trend.value}
              </span>
            )}
          </div>
        </div>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accentMap[accent]}`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </motion.div>
  );
}

function StatusBadge({
  status,
}: {
  status: "unused" | "assigned" | "used" | "duplicate" | "ok" | "error";
}) {
  const styles: Record<string, string> = {
    unused: "bg-chart-2/15 text-chart-2 border-chart-2/30",
    assigned: "bg-warning/15 text-warning border-warning/30",
    used: "bg-success/15 text-success border-success/30",
    duplicate: "bg-warning/15 text-warning border-warning/30",
    ok: "bg-success/15 text-success border-success/30",
    error: "bg-destructive/15 text-destructive border-destructive/30",
  };
  const labels: Record<string, string> = {
    unused: "Unused",
    assigned: "Assigned",
    used: "Used",
    duplicate: "Duplicate",
    ok: "OK",
    error: "Error",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {labels[status]}
    </span>
  );
}

function ConfirmAction({
  title,
  description,
  action,
  icon: Icon,
  onConfirm,
  destructive = true,
}: {
  title: string;
  description: string;
  action: string;
  icon: React.ElementType;
  onConfirm: () => void;
  destructive?: boolean;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="group w-full rounded-xl border border-border bg-card/50 p-4 text-left backdrop-blur-sm transition-colors hover:border-destructive/50">
          <div className="flex items-center gap-2">
            <Icon className={`h-4 w-4 ${destructive ? "text-destructive" : "text-primary"}`} />
            <p className="text-sm font-semibold">{title}</p>
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground">{description}</p>
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
            className={
              destructive
                ? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                : ""
            }
          >
            {action}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
