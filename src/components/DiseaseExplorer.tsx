import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpRight, Check, ShieldCheck, Phone, Calendar, Quote } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Disease } from "../lib/disease-data";
import { PHONE, PHONE_TEL, CLINIC_NAME } from "../lib/clinic-data";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Skin", value: "skin" },
  { label: "Hair", value: "hair" },
  { label: "Pigmentation", value: "pigmentation" },
  { label: "Allergy", value: "allergy" },
  { label: "Fungal", value: "fungal" },
  { label: "Autoimmune", value: "autoimmune" },
  { label: "Acne", value: "acne" },
];

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  pigmentation: ["hyperpigmentation", "vitiligo", "melasma", "pigment"],
  allergy: ["eczema", "atopic dermatitis", "allergy", "urticaria"],
  fungal: ["fungal", "dandruff", "seborrheic"],
  autoimmune: ["psoriasis", "alopecia", "vitiligo", "lichen"],
  acne: ["acne", "pimple"],
};

function getFilterValue(disease: Disease, filter: string): boolean {
  if (filter === "all") return true;
  if (filter === "skin") return disease.category === "skin";
  if (filter === "hair") return disease.category === "hair";
  const keywords = CATEGORY_KEYWORDS[filter];
  if (!keywords) return true;
  const name = disease.name.toLowerCase();
  const desc = disease.description.toLowerCase();
  return keywords.some((k) => name.includes(k) || desc.includes(k));
}

interface DiseaseExplorerProps {
  skinDiseases: Disease[];
  hairDiseases: Disease[];
}

export function DiseaseExplorer({ skinDiseases, hairDiseases }: DiseaseExplorerProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const allDiseases = useMemo(
    () => [...skinDiseases, ...hairDiseases],
    [skinDiseases, hairDiseases],
  );

  const filtered = useMemo(() => {
    return allDiseases.filter((d) => {
      const matchesSearch =
        !search ||
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.symptoms.some((s) => s.toLowerCase().includes(search.toLowerCase()));
      const matchesFilter = getFilterValue(d, filter);
      return matchesSearch && matchesFilter;
    });
  }, [allDiseases, search, filter]);

  const skinFiltered = useMemo(() => filtered.filter((d) => d.category === "skin"), [filtered]);
  const hairFiltered = useMemo(() => filtered.filter((d) => d.category === "hair"), [filtered]);

  return (
    <section className="py-20 sm:py-24" id="disease-explorer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Disease Explorer
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Explore Diseases We Treat
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Browse through common skin and hair conditions. Click on any condition to understand its
            symptoms, causes, and available treatment options at {CLINIC_NAME}.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search diseases..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-border bg-background py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Search diseases"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                filter === f.value
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "border border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <DiseaseSection
          title="Skin Diseases"
          diseases={skinFiltered}
          expandedId={expandedId}
          onToggle={setExpandedId}
        />

        {hairFiltered.length > 0 && (
          <div className="mt-16">
            <DiseaseSection
              title="Hair Diseases"
              diseases={hairFiltered}
              expandedId={expandedId}
              onToggle={setExpandedId}
            />
          </div>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------- */
/*  Disease Section — renders grid + inserts full-width     */
/*  expanded panel after the row containing the active card  */
/* -------------------------------------------------------- */
function DiseaseSection({
  title,
  diseases,
  expandedId,
  onToggle,
}: {
  title: string;
  diseases: Disease[];
  expandedId: number | null;
  onToggle: (id: number | null) => void;
}) {
  if (diseases.length === 0) return null;

  const expandedIndex = expandedId ? diseases.findIndex((d) => d.id === expandedId) : -1;
  const expandedRow = expandedIndex >= 0 ? Math.floor(expandedIndex / 2) : -1;
  // Insert the full-width panel after the last item in the expanded row
  const insertAfter = expandedIndex >= 0 ? Math.min(expandedRow * 2 + 1, diseases.length - 1) : -1;

  // Build flat render list
  const renderItems: {
    key: string;
    type: "card" | "panel";
    disease: Disease;
  }[] = [];

  for (let i = 0; i < diseases.length; i++) {
    renderItems.push({ key: `card-${diseases[i].id}`, type: "card", disease: diseases[i] });
    if (i === insertAfter) {
      renderItems.push({
        key: `panel-${expandedId}`,
        type: "panel",
        disease: diseases.find((d) => d.id === expandedId)!,
      });
    }
  }

  return (
    <div className="mt-12">
      <h3
        id={
          title === "Skin Diseases"
            ? "skin-diseases"
            : title === "Hair Diseases"
              ? "hair-diseases"
              : undefined
        }
        className="font-display text-2xl font-bold text-foreground scroll-mt-24"
      >
        {title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Click on a condition to learn more about symptoms and treatments.
      </p>

      <motion.div layout className="mt-6 flex flex-wrap -m-2">
        <AnimatePresence mode="popLayout">
          {renderItems.map((item) => (
            <motion.div
              key={item.key}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className={item.type === "panel" ? "w-full p-2" : "w-full sm:w-1/2 p-2"}
            >
              {item.type === "card" ? (
                <DiseaseCard
                  disease={item.disease}
                  isExpanded={false}
                  onToggle={() => onToggle(expandedId === item.disease.id ? null : item.disease.id)}
                />
              ) : (
                <ExpandedPanel disease={item.disease} onClose={() => onToggle(null)} />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------- */
/*  Disease Card                                            */
/* -------------------------------------------------------- */
function DiseaseCard({
  disease,
  isExpanded,
  onToggle,
}: {
  disease: Disease;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300">
      <button
        onClick={onToggle}
        className="group relative block w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-expanded={isExpanded}
      >
        <div className="relative aspect-[620/230] overflow-hidden sm:aspect-[620/230]">
          <img
            src={disease.image}
            alt={`${disease.name} - ${CLINIC_NAME} treatment`}
            loading="lazy"
            className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10 transition-all duration-400 ease-out group-hover:from-black/85 group-hover:via-black/40" />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <h4 className="text-center font-display text-xl font-bold text-white transition-all duration-400 ease-out group-hover:-translate-y-1 sm:text-2xl">
              {disease.name}
            </h4>
          </div>
          <div className="absolute right-4 top-4">
            <ArrowUpRight
              className={`h-5 w-5 text-white/80 transition-all duration-400 ease-out ${
                isExpanded
                  ? "translate-x-0.5 -translate-y-0.5 rotate-45"
                  : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-45"
              }`}
            />
          </div>
        </div>
      </button>
    </div>
  );
}

/* -------------------------------------------------------- */
/*  Expanded Panel — full-width landscape row               */
/* -------------------------------------------------------- */
function ExpandedPanel({ disease, onClose }: { disease: Disease; onClose: () => void }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-[var(--shadow-elegant)]">
      <div className="flex flex-col sm:flex-row min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]">
        {/* Image side — 35-40% */}
        <div className="relative w-full sm:w-[38%] min-h-[200px] sm:min-h-full overflow-hidden">
          <img
            src={disease.image}
            alt={disease.name}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content side — 60-65% */}
        <div className="flex flex-1 flex-col justify-center gap-4 p-6 sm:p-8 lg:p-10 overflow-y-auto">
          <h4 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            {disease.name}
          </h4>

          <div className="relative border-l-4 border-primary/40 bg-primary/5 pl-4 pr-4 py-3 rounded-r-lg">
            <Quote className="absolute -left-3 top-2 h-5 w-5 text-primary/20" />
            <p className="text-sm italic leading-relaxed text-foreground/80">
              &ldquo;{disease.quote}&rdquo;
            </p>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2 sm:line-clamp-3">
            {disease.description}
          </p>

          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Common Symptoms
            </p>
            <div className="flex flex-wrap gap-1.5">
              {disease.symptoms.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-foreground/80"
                >
                  <Check className="h-3 w-3 text-primary" />
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Treatment Available at {CLINIC_NAME}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {disease.treatments.map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-sm text-foreground/80">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            >
              <Calendar className="h-4 w-4" /> Book Consultation
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
