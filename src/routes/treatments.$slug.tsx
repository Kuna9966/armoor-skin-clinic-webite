import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Check,
  Phone,
  Stethoscope,
  ShieldCheck,
  Microscope,
  HeartPulse,
  Sparkles,
} from "lucide-react";
import { treatments } from "../lib/treatments";
import {
  CLINIC_NAME,
  DOCTOR_NAME,
  QUALIFICATION,
  PHONE,
  PHONE_TEL,
  SITE_URL,
  WHATSAPP,
} from "../lib/clinic-data";
import type { TreatmentData } from "../lib/treatments";

function findTreatment(slug: string): TreatmentData | undefined {
  return treatments.find((t) => t.slug === slug);
}

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const armoorRedirects: Record<string, string> = {
      "acne-treatment": "/treatments/acne-treatment-armoor",
      "hair-loss-treatment": "/treatments/hair-loss-treatment-armoor",
      "psoriasis-treatment": "/treatments/psoriasis-treatment-armoor",
      "eczema-treatment": "/treatments/eczema-treatment-armoor",
      "fungal-infection-treatment": "/treatments/fungal-infection-treatment-armoor",
      "dandruff-treatment": "/treatments/dandruff-treatment-armoor",
      "vitiligo-treatment": "/treatments/vitiligo-treatment-armoor",
      "pigmentation-treatment": "/treatments/pigmentation-treatment-armoor",
      "skin-allergy-treatment": "/treatments/skin-allergy-treatment-armoor",
      "nail-disorders": "/treatments/nail-disorders-armoor",
      "wart-removal": "/treatments/wart-removal-armoor",
      "mole-removal": "/treatments/mole-removal-armoor",
    };
    const redirectTo = armoorRedirects[params.slug];
    if (redirectTo) {
      throw redirect({ to: redirectTo });
    }
    const dataSlug = params.slug.endsWith("-armoor")
      ? params.slug.replace(/-armoor$/, "")
      : params.slug;
    const treatment = findTreatment(dataSlug);
    if (!treatment) throw notFound();
    return { treatment };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        { title: loaderData.treatment.title },
        { name: "description", content: loaderData.treatment.metaDescription },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: loaderData.treatment.title },
        { property: "og:description", content: loaderData.treatment.metaDescription },
        { property: "og:url", content: `${SITE_URL}/treatments/${loaderData.treatment.slug}` },
        { name: "twitter:title", content: loaderData.treatment.title },
        { name: "twitter:description", content: loaderData.treatment.metaDescription },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/treatments/${loaderData.treatment.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: loaderData.treatment.shortTitle,
            description: loaderData.treatment.intro,
            provider: {
              "@type": "MedicalClinic",
              name: CLINIC_NAME,
              url: SITE_URL,
            },
            relevantSpecialty: "Dermatology",
          }),
        },
      ],
    };
  },
  component: TreatmentDetailPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-foreground">Treatment not found</h1>
        <p className="mt-4 text-muted-foreground">
          The treatment page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/treatments"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            View all treatments
          </Link>
        </div>
      </div>
    </div>
  ),
});

function TreatmentDetailPage() {
  const { treatment } = Route.useLoaderData();

  return (
    <>
      <TreatmentHero treatment={treatment} />
      <TreatmentContent treatment={treatment} />
      <TreatmentFAQ treatment={treatment} />
      <RelatedTreatments currentSlug={treatment.slug} />
      <BookingCTA />
    </>
  );
}

function TreatmentHero({ treatment }: { treatment: TreatmentData }) {
  return (
    <section
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span>/</span>
          <Link to="/treatments" className="hover:text-white">
            Treatments
          </Link>
          <span>/</span>
          <span className="text-white/90">{treatment.shortTitle}</span>
        </nav>
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {treatment.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{treatment.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              hash="contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <Calendar className="h-4 w-4" /> Book an Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TreatmentContent({ treatment }: { treatment: TreatmentData }) {
  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          <div className="space-y-12">
            <SectionBlock title="Symptoms" items={treatment.symptoms} />
            <SectionBlock title="Causes" items={treatment.causes} />
            <SectionBlock title="Our Treatment Approach" items={treatment.treatments} />
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sticky top-28">
              <h2 className="font-display text-lg font-bold text-foreground">
                Why Choose Our Clinic
              </h2>
              <ul className="mt-4 space-y-3">
                {treatment.whyUs.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-3">
                <Link
                  to="/"
                  hash="contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-glow"
                >
                  <Calendar className="h-4 w-4" /> Book Appointment
                </Link>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-primary transition-all hover:border-primary"
                >
                  <Phone className="h-4 w-4" /> Call {PHONE}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function SectionBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground"
          >
            <span className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
              <Check className="h-3 w-3" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TreatmentFAQ({ treatment }: { treatment: TreatmentData }) {
  if (!treatment.faqs.length) return null;
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {treatment.faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-border bg-card p-5 transition-all open:border-primary/30"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-foreground list-none">
                  {faq.q}
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-glow"
            >
              Have more questions? Ask {DOCTOR_NAME}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedTreatments({ currentSlug }: { currentSlug: string }) {
  const related = treatments.filter((t) => t.slug !== currentSlug).slice(0, 3);
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-foreground text-center">
          Related Treatments
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {related.map((t) => (
            <Link
              key={t.slug}
              to="/treatments/$slug"
              params={{ slug: t.slug }}
              className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-base font-bold text-foreground">{t.shortTitle}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{t.intro}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingCTA() {
  return (
    <section className="py-12" style={{ background: "var(--gradient-navy)" }}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Ready to start your treatment?
        </h2>
        <p className="mt-3 text-base text-white/80">
          Book a consultation with {DOCTOR_NAME}, {QUALIFICATION}, at {CLINIC_NAME} in Armoor.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            <Calendar className="h-4 w-4" /> Book Your Consultation
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
          >
            <Phone className="h-4 w-4" /> Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
