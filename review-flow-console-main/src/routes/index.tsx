import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Check, Copy, ExternalLink, Star, Sparkles, MessageSquareOff, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  getAssignedReview,
  copyReview,
  copyAndRedirect,
  openGoogleReview,
  GOOGLE_REVIEW_URL,
  type Review,
} from "@/services/mockApi";

export const Route = createFileRoute("/")({
  component: PublicReviewPage,
});

function PublicReviewPage() {
  const [review, setReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    getAssignedReview().then((r) => {
      setReview(r);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c" && review && !window.getSelection()?.toString()) {
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
    toast.success("Review copied", { description: "Ready to paste on Google Reviews." });
    setTimeout(() => setCopied(false), 2200);
  }

  async function handleCopyAndRedirect() {
    if (!review) return;
    await copyAndRedirect(review.text);
    setCopied(true);
    setRedirecting(true);
    toast.success("Review copied", { description: "Redirecting to Google Reviews…" });
    setTimeout(() => {
      // Placeholder — backend supplies the real URL later
      // window.location.href = GOOGLE_REVIEW_URL;
      console.log("Would redirect to:", GOOGLE_REVIEW_URL);
      setRedirecting(false);
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-background hero-glow relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-10%,var(--primary-glow)/0.2,transparent_60%)]" />

      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-5">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl gradient-bg flex items-center justify-center shadow-glow">
            <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold tracking-tight">Review Flow</span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" className="rounded-full">
            <Link to="/admin">Admin</Link>
          </Button>
        </div>
      </header>

      <main className="relative z-10 flex flex-col items-center px-6 py-10 sm:py-16 max-w-3xl mx-auto">
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
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08, type: "spring" }}
            >
              <Star className="h-8 w-8 fill-warning text-warning drop-shadow-[0_2px_10px_oklch(0.78_0.16_75/0.4)]" />
            </motion.div>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-display"
        >
          Thank You <span className="gradient-text">For Visiting</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 text-center text-base sm:text-lg text-muted-foreground max-w-xl"
        >
          We appreciate your valuable feedback. Please share your genuine experience below.
        </motion.p>

        {/* Review card or states */}
        <div className="w-full mt-10">
          {loading ? (
            <ReviewSkeleton />
          ) : !review ? (
            <EmptyState />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-elegant"
            >
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-glow/20 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Your assigned review
                  </span>
                  <span className="text-xs text-muted-foreground">#{review.id}</span>
                </div>

                <p className="text-lg sm:text-xl leading-relaxed font-medium text-foreground">
                  <span className="gradient-text text-3xl leading-none mr-1 align-top font-display">“</span>
                  {review.text}
                  <span className="gradient-text text-3xl leading-none ml-1 align-bottom font-display">”</span>
                </p>
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
            className="mt-8 w-full flex flex-col gap-3"
          >
            <Button
              size="lg"
              onClick={handleCopyAndRedirect}
              disabled={redirecting}
              className="h-14 text-base rounded-2xl gradient-bg text-white border-0 shadow-glow hover:shadow-glow hover:scale-[1.02] transition-all font-semibold"
            >
              <AnimatePresence mode="wait">
                {redirecting ? (
                  <motion.span key="r" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                    <Check className="h-5 w-5" /> Redirecting to Google Reviews…
                  </motion.span>
                ) : (
                  <motion.span key="c" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                    <Copy className="h-5 w-5" /> Copy & Continue
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                variant="outline"
                size="lg"
                onClick={handleCopy}
                className="h-12 rounded-2xl border-border/70 backdrop-blur-sm bg-card/50 hover:bg-card"
              >
                {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Copy Review Only"}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={openGoogleReview}
                className="h-12 rounded-2xl border-border/70 backdrop-blur-sm bg-card/50 hover:bg-card"
              >
                <ExternalLink className="h-4 w-4" />
                Open Google Review
              </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-2">
              Tip: press <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-[10px] font-mono">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-[10px] font-mono">C</kbd> to copy instantly
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
              className="glass-card rounded-3xl p-8 max-w-sm mx-4 text-center shadow-glow"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12, delay: 0.1 }}
                className="mx-auto h-16 w-16 rounded-full gradient-bg flex items-center justify-center shadow-glow"
              >
                <Check className="h-8 w-8 text-white" strokeWidth={3} />
              </motion.div>
              <h3 className="mt-5 text-xl font-bold font-display">Review Copied Successfully</h3>
              <p className="mt-2 text-sm text-muted-foreground">Redirecting to Google Reviews…</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ReviewSkeleton() {
  return (
    <div className="glass-card rounded-3xl p-8 space-y-3 animate-pulse">
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
      <div className="mx-auto h-16 w-16 rounded-full bg-muted flex items-center justify-center">
        <MessageSquareOff className="h-7 w-7 text-muted-foreground" />
      </div>
      <h3 className="mt-5 text-xl font-bold font-display">No review available</h3>
      <p className="mt-2 text-sm text-muted-foreground">Please contact the administrator to refill the queue.</p>
    </div>
  );
}
