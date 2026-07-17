import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Check,
  Copy,
  ExternalLink,
  Star,
  MessageSquareOff,
  ShieldCheck,
  Home,
  AlertTriangle,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  getAssignedReview,
  copyReview,
  copyAndRedirect,
  markReviewCopied,
  openGoogleReview,
  GOOGLE_REVIEW_URL,
  type Review,
} from "@/services/mockApi";

export const Route = createFileRoute("/review")({
  component: PublicReviewPage,
});

function PublicReviewPage() {
  const [review, setReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchReview = () => {
    setLoading(true);
    setError(null);
    getAssignedReview()
      .then((r) => {
        setReview(r);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load review:", err);
        setError("Unable to load review. Please try again later.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchReview();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "c" &&
        review &&
        !window.getSelection()?.toString()
      ) {
        e.preventDefault();
        handleCopy();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [review]);

  async function handleCopy() {
    if (!review) return;
    await copyReview(review.text);
    setCopied(true);
    toast.success("Review copied", {
      description: "Ready to paste on Google Reviews.",
    });
    setRefreshing(true);
    try {
      await markReviewCopied(review.numericId);
    } catch {
      // non-critical
    }
    fetchReview();
    setRefreshing(false);
    setTimeout(() => setCopied(false), 2200);
  }

  async function handleCopyAndRedirect() {
    if (!review) return;
    await copyAndRedirect(review.text);
    toast.success("Review copied", {
      description: "Redirecting to Google Reviews\u2026",
    });
    window.location.href = GOOGLE_REVIEW_URL;
    setCopied(true);
    setRedirecting(true);
    setRefreshing(true);
    try {
      await markReviewCopied(review.numericId);
    } catch {
      // non-critical
    }
    fetchReview();
    setRefreshing(false);
    setTimeout(() => setCopied(false), 2200);
  }

  return (
    <div className="hero-glow relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-10%,var(--primary-glow)/0.15,transparent_60%)]" />

      {/* Top nav bar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 sm:px-10">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/images/logo/logocircle.webp"
            alt="Armoor Skin & Hair Clinic"
            className="h-10 w-10 rounded-xl object-cover shadow-md"
          />
          <span className="font-display font-bold tracking-tight">
            Armoor Skin &amp; Hair Clinic
          </span>
        </Link>
        <Button asChild variant="ghost" size="sm" className="rounded-full">
          <Link to="/">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
        </Button>
      </header>

      <main className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-10 sm:py-16">
        {/* Stars */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-1"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.1 + i * 0.08,
                type: "spring",
              }}
            >
              <Star className="h-8 w-8 fill-[var(--warning)] text-[var(--warning)] drop-shadow-[0_2px_10px_oklch(0.78_0.16_75/0.4)]" />
            </motion.div>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-center text-4xl font-bold tracking-tight font-display sm:text-5xl md:text-6xl"
        >
          Thank You <span className="gradient-text">For Visiting</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 max-w-xl text-center text-base text-muted-foreground sm:text-lg"
        >
          Please share your genuine experience with Armoor Skin &amp; Hair Clinic.
        </motion.p>

        {/* Review card or states */}
        <div className="mt-10 w-full">
          {loading ? (
            <ReviewSkeleton />
          ) : error ? (
            <ErrorState message={error} />
          ) : !review ? (
            <EmptyState />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/60 shadow-[0_8px_40px_-12px_rgba(24,40,74,0.18)] backdrop-blur-2xl"
            >
              {/* Decorative blurs */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-primary/15 to-primary-glow/10 blur-3xl transition-opacity duration-700 group-hover:opacity-80" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gradient-to-tr from-[var(--warning)]/10 to-transparent blur-3xl" />

              {/* Top accent line */}
              <div className="h-1 w-full bg-gradient-to-r from-primary via-primary-glow to-[var(--warning)]" />

              <div className="relative p-8 sm:p-10">
                {/* Header row */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/8 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Your Assigned Review
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/60">#{review.id}</span>
                </div>

                {/* Large quote marks + text */}
                <div className="relative">
                  <span className="pointer-events-none absolute -left-2 -top-6 font-display text-8xl font-bold leading-none text-primary/10 select-none sm:-left-4 sm:-top-8 sm:text-9xl">
                    &ldquo;
                  </span>
                  <p className="relative z-10 text-lg font-medium leading-[1.8] text-foreground/90 sm:text-xl md:text-2xl">
                    {review.text}
                  </p>
                  <span className="pointer-events-none absolute -bottom-8 right-0 font-display text-8xl font-bold leading-none text-primary/10 select-none sm:-bottom-10 sm:text-9xl">
                    &rdquo;
                  </span>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 flex items-center justify-between border-t border-primary/10 pt-5">
                  <div className="flex items-center gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[var(--warning)] text-[var(--warning)]"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground/50">
                    Armoor Skin &amp; Hair Clinic
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Buttons */}
        {review && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 w-full"
          >
            <Button
              size="lg"
              onClick={handleCopyAndRedirect}
              disabled={redirecting}
              className="gradient-bg h-14 w-full rounded-2xl border-0 text-base font-semibold text-white shadow-glow transition-all hover:scale-[1.02] hover:shadow-glow"
            >
              <AnimatePresence mode="wait">
                {redirecting ? (
                  <motion.span
                    key="r"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="h-5 w-5" /> Redirecting to Google Reviews&hellip;
                  </motion.span>
                ) : (
                  <motion.span
                    key="c"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Copy className="h-5 w-5" /> Copy &amp; Continue
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Button
                variant="outline"
                size="lg"
                onClick={handleCopy}
                className="h-12 rounded-2xl border-border/70 bg-card/50 backdrop-blur-sm hover:bg-card"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-[var(--success)]" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied ? "Copied" : "Copy Review Only"}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={openGoogleReview}
                className="h-12 rounded-2xl border-border/70 bg-card/50 backdrop-blur-sm hover:bg-card"
              >
                <ExternalLink className="h-4 w-4" />
                Open Google Review
              </Button>
            </div>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Tip: press{" "}
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
                Ctrl
              </kbd>{" "}
              +{" "}
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
                C
              </kbd>{" "}
              to copy instantly
            </p>
          </motion.div>
        )}
      </main>

      {/* Success overlay */}
      <AnimatePresence>
        {copied && redirecting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="glass-card mx-4 max-w-sm rounded-3xl p-8 text-center shadow-glow"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12, delay: 0.1 }}
                className="gradient-bg mx-auto flex h-16 w-16 items-center justify-center rounded-full shadow-glow"
              >
                <Check className="h-8 w-8 text-white" strokeWidth={3} />
              </motion.div>
              <h3 className="mt-5 font-display text-xl font-bold">Review Copied Successfully</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Redirecting to Google Reviews&hellip;
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ReviewSkeleton() {
  return (
    <div className="glass-card animate-pulse space-y-3 rounded-3xl p-8">
      <div className="h-4 w-40 rounded bg-muted" />
      <div className="h-4 w-full rounded bg-muted" />
      <div className="h-4 w-11/12 rounded bg-muted" />
      <div className="h-4 w-3/4 rounded bg-muted" />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="glass-card rounded-3xl p-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <MessageSquareOff className="h-7 w-7 text-muted-foreground" />
      </div>
      <h3 className="mt-5 font-display text-xl font-bold">No review available</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Please contact the administrator to refill the queue.
      </p>
    </div>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="glass-card rounded-3xl p-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
        <AlertTriangle className="h-7 w-7 text-red-500" />
      </div>
      <h3 className="mt-5 font-display text-xl font-bold">Something went wrong</h3>
      <p className="mt-2 text-sm text-muted-foreground">{message}</p>
      <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
        Try Again
      </Button>
    </div>
  );
}
