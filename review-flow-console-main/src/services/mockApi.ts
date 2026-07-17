// Mock service layer. Replace with real API calls later.

export const GOOGLE_REVIEW_URL = "GOOGLE_REVIEW_URL";

export interface Review {
  id: string;
  text: string;
  status: "unused" | "used";
  createdAt: string;
  assignedAt?: string;
}

const MOCK_REVIEWS: Review[] = [
  { id: "R-0001", text: "Excellent consultation. Doctor explained everything clearly and the treatment was effective. The clinic is clean, professional and highly recommended.", status: "unused", createdAt: "2025-07-10T09:14:00Z" },
  { id: "R-0002", text: "Very friendly staff and short waiting time. The doctor was knowledgeable and answered all my questions with patience.", status: "used", createdAt: "2025-07-09T10:20:00Z", assignedAt: "2025-07-15T11:02:00Z" },
  { id: "R-0003", text: "Highly professional clinic with modern facilities. The whole experience was smooth from booking to consultation.", status: "unused", createdAt: "2025-07-11T08:30:00Z" },
  { id: "R-0004", text: "Great experience! The doctor took time to understand my concerns and provided a clear treatment plan.", status: "used", createdAt: "2025-07-08T12:00:00Z", assignedAt: "2025-07-14T15:22:00Z" },
  { id: "R-0005", text: "Clean, welcoming environment and excellent care. Would definitely recommend to family and friends.", status: "unused", createdAt: "2025-07-12T14:00:00Z" },
  { id: "R-0006", text: "The receptionist was warm, the doctor was thorough. I felt properly cared for throughout the visit.", status: "unused", createdAt: "2025-07-12T15:10:00Z" },
  { id: "R-0007", text: "Best clinic in the area. Modern equipment, transparent pricing and truly caring team.", status: "used", createdAt: "2025-07-07T09:00:00Z", assignedAt: "2025-07-13T10:45:00Z" },
];

export async function getAssignedReview(): Promise<Review | null> {
  await delay(400);
  return MOCK_REVIEWS[0];
}

export async function copyReview(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}

export async function copyAndRedirect(text: string): Promise<void> {
  await copyReview(text);
  // Later: window.location.href = GOOGLE_REVIEW_URL
}

export function openGoogleReview(): void {
  // Later: window.open(GOOGLE_REVIEW_URL, "_blank")
  console.log("Open:", GOOGLE_REVIEW_URL);
}

export async function importReviews(raw: string): Promise<{ imported: number; duplicates: number; errors: number }> {
  await delay(600);
  const lines = raw.split("\n").map((l) => l.trim()).filter(Boolean);
  return { imported: lines.length, duplicates: Math.floor(lines.length * 0.02), errors: 0 };
}

export async function getDashboardStats() {
  await delay(300);
  return {
    total: 1284,
    remaining: 947,
    used: 337,
    importedToday: 42,
    queueProgress: Math.round((337 / 1284) * 100),
    recent: [
      { id: "R-1284", action: "Imported 42 reviews", time: "2 min ago" },
      { id: "R-1250", action: "Assigned to visitor", time: "18 min ago" },
      { id: "R-1249", action: "Assigned to visitor", time: "42 min ago" },
      { id: "R-1248", action: "Copied to clipboard", time: "1 hr ago" },
      { id: "R-1247", action: "Redirected to Google", time: "2 hrs ago" },
    ],
  };
}

export async function getHistory() {
  await delay(300);
  return MOCK_REVIEWS.filter((r) => r.status === "used").map((r) => ({
    ...r,
    copied: true,
  }));
}

export async function getQueue() {
  await delay(300);
  return MOCK_REVIEWS;
}

export async function resetQueue(): Promise<void> {
  await delay(500);
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
