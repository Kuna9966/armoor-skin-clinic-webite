import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { ArrowRight, Check, Stethoscope } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DiseaseExplorer } from "@/components/DiseaseExplorer";
import { skinDiseases, hairDiseases } from "../lib/disease-data";
import { treatments } from "../lib/treatments";
import {
  CLINIC_NAME,
  DOCTOR_NAME,
  QUALIFICATION,
  PHONE,
  PHONE_TEL,
  SITE_URL,
} from "../lib/clinic-data";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      {
        title: `Dermatology Treatments in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME} ${QUALIFICATION}`,
      },
      {
        name: "description",
        content: `Comprehensive dermatology treatments at ${CLINIC_NAME} in Armoor. Expert care for acne, hair loss, psoriasis, pigmentation, eczema, fungal infections, and more by ${DOCTOR_NAME}.`,
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: `Dermatology Treatments in Armoor | ${CLINIC_NAME}` },
      {
        property: "og:description",
        content: `Expert dermatology treatments for skin, hair, and nail conditions in Armoor, Telangana. Led by ${DOCTOR_NAME} ${QUALIFICATION}.`,
      },
      { property: "og:url", content: `${SITE_URL}/treatments` },
      { name: "twitter:title", content: `Dermatology Treatments in Armoor | ${CLINIC_NAME}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/treatments` }],
  }),
  component: TreatmentsPage,
});

function TreatmentsPage() {
  const matches = useMatches();
  const isExact = matches[matches.length - 1]?.routeId === "/treatments";

  if (!isExact) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <DiseaseExplorer skinDiseases={skinDiseases} hairDiseases={hairDiseases} />
        <TreatmentGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Comprehensive Dermatology Treatments in Armoor
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-white/80">
          Expert diagnosis and treatment for all skin, hair, and nail conditions. Led by{" "}
          {DOCTOR_NAME}, {QUALIFICATION}.
        </p>
      </div>
    </section>
  );
}

function TreatmentGrid() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => {
            const isAcneCity = t.slug === "acne-treatment";
            return (
              <Link
                key={t.slug}
                to={isAcneCity ? "/treatments/acne-treatment-armoor" : "/treatments/$slug"}
                {...(isAcneCity ? {} : { params: { slug: t.slug } })}
                className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-lg font-bold text-foreground">
                  {t.shortTitle}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {t.intro}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t.symptoms.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                  {t.symptoms.length > 2 && (
                    <span className="rounded-full bg-primary/5 px-3 py-1 text-xs text-primary">
                      +{t.symptoms.length - 2} more
                    </span>
                  )}
                </div>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20" style={{ background: "var(--gradient-navy)" }}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Not sure which treatment you need?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Book a consultation with {DOCTOR_NAME} for an accurate diagnosis and personalised
          treatment plan.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            Book a Consultation
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
