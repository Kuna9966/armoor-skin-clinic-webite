export type ReviewStatus = "unused" | "assigned" | "used";

export interface ReviewRecord {
  id: number;
  review: string;
  status: ReviewStatus;
  assigned_at: string | null;
  copied_at: string | null;
  created_at: string;
}

export interface ReviewAssignment {
  id: number;
  review: string;
}

export interface ImportResult {
  imported: number;
  duplicates: number;
  total: number;
}

export interface DashboardStats {
  total: number;
  remaining: number;
  used: number;
  assigned: number;
  importedToday: number;
  queueHealth: number;
}

export interface HistoryEntry {
  id: number;
  review: string;
  assigned_at: string | null;
  copied_at: string | null;
  status: ReviewStatus;
  event_type: "import" | "assign" | "copy";
  event_time: string;
}

export interface HealthCheck {
  database: boolean;
  queueHealthy: boolean;
  remaining: number;
}

export interface QueueItem {
  id: number;
  review: string;
  status: ReviewStatus;
  assigned_at: string | null;
  copied_at: string | null;
  created_at: string;
}

export interface ChartDataPoint {
  date: string;
  count: number;
}

export interface ReviewUsagePoint {
  date: string;
  copied: number;
  assigned: number;
}

export interface RemainingTrendPoint {
  date: string;
  remaining: number;
}
