export const GOOGLE_REVIEW_URL = "https://g.page/r/CWYmHRHhqTqnEAE/review";

export interface Review {
  id: string;
  text: string;
  status: "unused" | "assigned" | "used";
  createdAt: string;
  assignedAt?: string;
  copiedAt?: string;
}

export interface DashboardStats {
  total: number;
  remaining: number;
  used: number;
  assigned: number;
  importedToday: number;
  queueProgress: number;
  recent: Array<{
    id: string;
    action: string;
    time: string;
    type: "import" | "assign" | "copy" | "redirect";
  }>;
}

export interface ChartData {
  dailyImports: Array<{ date: string; count: number }>;
  reviewUsage: Array<{ date: string; copied: number; assigned: number }>;
  remainingTrend: Array<{ date: string; remaining: number }>;
}

export interface HistoryEntry {
  id: string;
  text: string;
  assignedAt: string | null;
  copiedAt: string | null;
  copied: boolean;
  status: "unused" | "assigned" | "used";
  type: "import" | "copy" | "redirect";
  timestamp: string;
}

const MOCK_REVIEWS: Review[] = [
  {
    id: "R-0001",
    text: "Excellent consultation. Doctor explained everything clearly and the treatment was effective. The clinic is clean, professional and highly recommended.",
    status: "used",
    createdAt: "2025-07-10T09:14:00Z",
    assignedAt: "2025-07-15T11:02:00Z",
    copiedAt: "2025-07-15T11:05:00Z",
  },
  {
    id: "R-0002",
    text: "Very friendly staff and short waiting time. The doctor was knowledgeable and answered all my questions with patience.",
    status: "assigned",
    createdAt: "2025-07-09T10:20:00Z",
    assignedAt: "2025-07-16T09:30:00Z",
  },
  {
    id: "R-0003",
    text: "Highly professional clinic with modern facilities. The whole experience was smooth from booking to consultation.",
    status: "unused",
    createdAt: "2025-07-11T08:30:00Z",
  },
  {
    id: "R-0004",
    text: "Great experience! The doctor took time to understand my concerns and provided a clear treatment plan.",
    status: "used",
    createdAt: "2025-07-08T12:00:00Z",
    assignedAt: "2025-07-14T15:22:00Z",
    copiedAt: "2025-07-14T15:25:00Z",
  },
  {
    id: "R-0005",
    text: "Clean, welcoming environment and excellent care. Would definitely recommend to family and friends.",
    status: "unused",
    createdAt: "2025-07-12T14:00:00Z",
  },
  {
    id: "R-0006",
    text: "The receptionist was warm, the doctor was thorough. I felt properly cared for throughout the visit.",
    status: "assigned",
    createdAt: "2025-07-12T15:10:00Z",
    assignedAt: "2025-07-16T10:15:00Z",
  },
  {
    id: "R-0007",
    text: "Best clinic in the area. Modern equipment, transparent pricing and truly caring team.",
    status: "used",
    createdAt: "2025-07-07T09:00:00Z",
    assignedAt: "2025-07-13T10:45:00Z",
    copiedAt: "2025-07-13T10:48:00Z",
  },
  {
    id: "R-0008",
    text: "Outstanding dermatology care. The treatment for my pigmentation was very effective and the results are visible.",
    status: "unused",
    createdAt: "2025-07-13T11:00:00Z",
  },
  {
    id: "R-0009",
    text: "Doctor Pranavi is extremely patient and explains the treatment process in detail. Very satisfied.",
    status: "used",
    createdAt: "2025-07-06T08:45:00Z",
    assignedAt: "2025-07-12T14:20:00Z",
    copiedAt: "2025-07-12T14:23:00Z",
  },
  {
    id: "R-0010",
    text: "My hair fall reduced significantly after just 3 sessions. Highly recommend PRP therapy here.",
    status: "unused",
    createdAt: "2025-07-14T07:30:00Z",
  },
  {
    id: "R-0011",
    text: "Very professional approach. The clinic uses advanced technology and the results speak for themselves.",
    status: "assigned",
    createdAt: "2025-07-11T13:00:00Z",
    assignedAt: "2025-07-16T11:00:00Z",
  },
  {
    id: "R-0012",
    text: "Excellent clinic for skin allergies. Quick diagnosis and effective treatment. Five stars!",
    status: "used",
    createdAt: "2025-07-05T10:30:00Z",
    assignedAt: "2025-07-11T09:15:00Z",
    copiedAt: "2025-07-11T09:18:00Z",
  },
];

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function getAssignedReview(): Promise<Review | null> {
  await delay(400);
  return MOCK_REVIEWS.find((r) => r.status === "unused") ?? null;
}

export async function copyReview(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}

export async function copyAndRedirect(text: string): Promise<void> {
  await copyReview(text);
}

export function openGoogleReview(): void {
  window.open(GOOGLE_REVIEW_URL, "_blank");
}

export async function importReviews(
  raw: string,
): Promise<{ imported: number; duplicates: number; errors: number }> {
  await delay(600);
  const lines = raw
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  return {
    imported: lines.length,
    duplicates: Math.floor(lines.length * 0.02),
    errors: 0,
  };
}

export async function getDashboardStats(): Promise<DashboardStats> {
  await delay(300);
  return {
    total: 1284,
    remaining: 947,
    used: 337,
    assigned: 26,
    importedToday: 42,
    queueProgress: 26,
    recent: [
      {
        id: "R-1284",
        action: "Imported 42 reviews",
        time: "2 min ago",
        type: "import",
      },
      {
        id: "R-1250",
        action: "Assigned to visitor",
        time: "18 min ago",
        type: "assign",
      },
      {
        id: "R-1249",
        action: "Assigned to visitor",
        time: "42 min ago",
        type: "assign",
      },
      {
        id: "R-1248",
        action: "Copied to clipboard",
        time: "1 hr ago",
        type: "copy",
      },
      {
        id: "R-1247",
        action: "Redirected to Google",
        time: "2 hrs ago",
        type: "redirect",
      },
    ],
  };
}

export async function getChartData(): Promise<ChartData> {
  await delay(200);
  const days30 = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (29 - i));
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  });

  return {
    dailyImports: days30.map((date, i) => ({
      date,
      count: Math.floor(Math.random() * 60) + 10 + (i > 20 ? 20 : 0),
    })),
    reviewUsage: days30.map((date) => ({
      date,
      copied: Math.floor(Math.random() * 25) + 5,
      assigned: Math.floor(Math.random() * 30) + 8,
    })),
    remainingTrend: Array.from({ length: 14 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (13 - i));
      return {
        date: d.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        remaining: 1000 - i * 5 + Math.floor(Math.random() * 20),
      };
    }),
  };
}

export async function getHistory(): Promise<HistoryEntry[]> {
  await delay(300);
  const entries: HistoryEntry[] = [
    {
      id: "R-1284",
      text: "Imported 42 reviews from Excel paste",
      assignedAt: null,
      copiedAt: null,
      copied: false,
      status: "unused",
      type: "import",
      timestamp: "2025-07-16T11:30:00Z",
    },
    {
      id: "R-1250",
      text: "Excellent consultation experience at the clinic",
      assignedAt: "2025-07-16T11:12:00Z",
      copiedAt: null,
      copied: false,
      status: "assigned",
      type: "assign",
      timestamp: "2025-07-16T11:12:00Z",
    },
    {
      id: "R-1249",
      text: "Very professional and caring approach",
      assignedAt: "2025-07-16T10:48:00Z",
      copiedAt: null,
      copied: false,
      status: "assigned",
      type: "assign",
      timestamp: "2025-07-16T10:48:00Z",
    },
    {
      id: "R-1248",
      text: "Best skin clinic in the area with modern equipment",
      assignedAt: "2025-07-16T10:30:00Z",
      copiedAt: "2025-07-16T10:33:00Z",
      copied: true,
      status: "used",
      type: "copy",
      timestamp: "2025-07-16T10:33:00Z",
    },
    {
      id: "R-1247",
      text: "Highly recommended for hair loss treatment",
      assignedAt: "2025-07-16T09:15:00Z",
      copiedAt: "2025-07-16T09:18:00Z",
      copied: true,
      status: "used",
      type: "redirect",
      timestamp: "2025-07-16T09:18:00Z",
    },
    {
      id: "R-1246",
      text: "Imported 15 reviews from CSV file",
      assignedAt: null,
      copiedAt: null,
      copied: false,
      status: "unused",
      type: "import",
      timestamp: "2025-07-15T18:00:00Z",
    },
    {
      id: "R-1240",
      text: "Doctor was very patient and thorough",
      assignedAt: "2025-07-15T14:20:00Z",
      copiedAt: "2025-07-15T14:23:00Z",
      copied: true,
      status: "used",
      type: "copy",
      timestamp: "2025-07-15T14:23:00Z",
    },
    {
      id: "R-1235",
      text: "Clean clinic with friendly staff",
      assignedAt: "2025-07-15T11:00:00Z",
      copiedAt: "2025-07-15T11:03:00Z",
      copied: true,
      status: "used",
      type: "redirect",
      timestamp: "2025-07-15T11:03:00Z",
    },
  ];
  return entries;
}

export async function getQueue(): Promise<Review[]> {
  await delay(300);
  return MOCK_REVIEWS;
}

export async function resetQueue(): Promise<void> {
  await delay(500);
}
