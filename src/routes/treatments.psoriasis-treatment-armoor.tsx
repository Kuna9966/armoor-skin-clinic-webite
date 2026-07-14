import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Check,
  Phone,
  ArrowRight,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Microscope,
  Star,
  MapPin,
  Quote,
  Users,
} from "lucide-react";
import {
  CLINIC_NAME,
  DOCTOR_NAME,
  QUALIFICATION,
  PHONE,
  PHONE_TEL,
  SITE_URL,
  WHATSAPP,
  ADDRESS,
  HOURS,
  MAP_LINK,
  AREAS_WE_SERVE,
} from "../lib/clinic-data";

export const Route = createFileRoute("/treatments/psoriasis-treatment-armoor")({
  head: () => ({
    meta: [
      {
        title: `Psoriasis Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        name: "description",
        content: `Expert psoriasis treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}. Effective care for plaque psoriasis, scalp psoriasis, and chronic symptoms at ${CLINIC_NAME}. Book your consultation.`,
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: `Psoriasis Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        property: "og:description",
        content: `Effective psoriasis and plaque psoriasis treatment in Armoor by Dr. Raghavendhra MD, DVL. Personalised care for red, scaly, and itchy skin at Armoor Skin & Hair Clinic.`,
      },
      { property: "og:url", content: `${SITE_URL}/treatments/psoriasis-treatment-armoor` },
      { property: "og:type", content: "website" },
      {
        name: "twitter:title",
        content: `Psoriasis Treatment in Armoor | ${CLINIC_NAME}`,
      },
      {
        name: "twitter:description",
        content: `Expert psoriasis treatment in Armoor by Dr. Raghavendhra — personalised care for healthier, comfortable skin.`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/treatments/psoriasis-treatment-armoor` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": `${SITE_URL}/treatments/psoriasis-treatment-armoor#clinic`,
              name: CLINIC_NAME,
              description: `Psoriasis treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}.`,
              url: SITE_URL,
              telephone: PHONE_TEL,
              address: {
                "@type": "PostalAddress",
                streetAddress: ADDRESS.street,
                addressLocality: ADDRESS.city,
                addressRegion: ADDRESS.state,
                postalCode: "503224",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 18.796,
                longitude: 78.289,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "11:00",
                closes: "18:00",
              },
              medicalSpecialty: "Dermatology",
            },
            {
              "@type": "LocalBusiness",
              "@id": `${SITE_URL}/treatments/psoriasis-treatment-armoor#business`,
              name: CLINIC_NAME,
              image: `${SITE_URL}/og-image.jpg`,
              telephone: PHONE_TEL,
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: ADDRESS.street,
                addressLocality: ADDRESS.city,
                addressRegion: ADDRESS.state,
                postalCode: "503224",
                addressCountry: "IN",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${SITE_URL}/treatments/psoriasis-treatment-armoor#breadcrumbs`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: SITE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Psoriasis Treatment in Armoor",
                  item: `${SITE_URL}/treatments/psoriasis-treatment-armoor`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/treatments/psoriasis-treatment-armoor#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is psoriasis curable?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Psoriasis is a chronic autoimmune condition that currently has no permanent cure. However, with proper treatment, symptoms can be effectively managed, flare-ups can be reduced, and most patients achieve significant improvement in their quality of life.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is psoriasis contagious?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, psoriasis is not contagious. It cannot be transmitted from one person to another through touch, close contact, or sharing personal items. Psoriasis is an autoimmune condition, not an infection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can psoriasis spread to other parts of the body?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: 'Psoriasis can appear on different parts of the body over time, but it is not "spreading" in the way an infection does. New patches can develop due to disease activity, especially during flare-ups or after triggers like skin injuries or stress.',
                  },
                },
                {
                  "@type": "Question",
                  name: "What triggers psoriasis flare-ups?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Common triggers include stress, skin injuries (cuts, scrapes, sunburn), infections (especially strep throat), certain medications, cold weather, smoking, and excessive alcohol consumption. Identifying and avoiding personal triggers is an important part of management.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can stress worsen psoriasis?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, stress is one of the most common triggers for psoriasis flare-ups. Emotional stress can activate the immune system and lead to increased inflammation, which worsens psoriasis symptoms. Stress management is an important part of treatment.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is psoriasis hereditary?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, psoriasis has a strong genetic component. If one or both parents have psoriasis, the risk of developing the condition is significantly higher. However, not everyone with a family history will develop psoriasis.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can children develop psoriasis?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, children can develop psoriasis, though it is more common in adults. Childhood psoriasis often appears as guttate psoriasis (small drop-like patches) and may be triggered by infections like strep throat. Early treatment can help manage symptoms effectively.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does psoriasis treatment take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Psoriasis treatment is a long-term process. Most patients notice improvement in redness and scaling within 2–4 weeks of starting treatment. However, psoriasis requires ongoing management, and treatment plans may need to be adjusted over time based on response.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can psoriasis return after treatment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, psoriasis is a chronic condition with a relapsing-remitting course. Symptoms can return after periods of improvement, especially if triggered by stress, illness, or other factors. The goal of treatment is to prolong remission and manage flare-ups when they occur.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does psoriasis treatment cost in Armoor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `The cost of psoriasis treatment at ${CLINIC_NAME} depends on the severity, type of psoriasis, and treatment approach required. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
                  },
                },
              ],
            },
            {
              "@type": "MedicalProcedure",
              name: "Psoriasis Treatment in Armoor",
              description:
                "Comprehensive psoriasis treatment services including prescription creams, oral medications, moisturizers, and personalised care plans.",
              provider: {
                "@type": "MedicalClinic",
                name: CLINIC_NAME,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: ADDRESS.street,
                  addressLocality: ADDRESS.city,
                  addressRegion: ADDRESS.state,
                  postalCode: "503224",
                  addressCountry: "IN",
                },
              },
              relevantSpecialty: "Dermatology",
            },
          ],
        }),
      },
    ],
  }),
  component: PsoriasisTreatmentArmoorPage,
});

function PsoriasisTreatmentArmoorPage() {
  return (
    <>
      <HeroSection />
      <WhatIsSection />
      <SymptomsSection />
      <CausesSection />
      <TypesSection />
      <DiagnosisSection />
      <TreatmentsSection />
      <WhyChooseSection />
      <ProcessSection />
      <LivingWithSection />
      <FAQSection />
      <ReviewsSection />
      <AreasWeServeSection />
      <RelatedTreatmentsSection />
      <BookingCTA />
    </>
  );
}

function HeroSection() {
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
          <span className="text-white/90">Psoriasis Treatment in Armoor</span>
        </nav>
        {/* IMAGE PLACEHOLDER: Hero image for psoriasis treatment page */}
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 text-gold" />
              Expert Psoriasis Care in Armoor
            </div>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Psoriasis Treatment in Armoor
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Effective psoriasis and plaque psoriasis treatment at {CLINIC_NAME}. Led by{" "}
              {DOCTOR_NAME}, {QUALIFICATION} — Armoor's trusted dermatologist for personalised
              psoriasis care and long-term management.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                hash="contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                <Calendar className="h-4 w-4" /> Book Appointment
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
          <div className="hidden lg:block">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-display text-lg font-bold text-white">Quick Info</h3>
              <ul className="mt-4 space-y-3">
                {[
                  `Expert dermatologist ${DOCTOR_NAME} ${QUALIFICATION}`,
                  "Personalised treatment for all skin types",
                  "Evidence-based psoriasis therapies",
                  "Affordable consultation in Armoor",
                  `${HOURS.weekdayDays}, ${HOURS.weekday}`,
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Understanding Psoriasis
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              What is Psoriasis?
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Psoriasis is a chronic autoimmune skin condition that causes skin cells to multiply
                much faster than normal. This rapid growth leads to the buildup of thick, red, scaly
                patches on the skin's surface. It is a non-contagious condition that can range from
                mild to severe.
              </p>
              <p>
                In a healthy person, skin cells take about a month to mature and shed. In someone
                with psoriasis, this process happens in just a few days. The body cannot shed the
                excess cells quickly enough, so they accumulate into raised, inflamed patches
                covered with silvery-white scales.
              </p>
              <p>
                Psoriasis is often confused with eczema, but they are different conditions.
                Psoriasis typically presents as well-defined, thick, scaly patches, while eczema
                tends to be more diffuse, dry, and intensely itchy. A proper diagnosis by a
                dermatologist is essential for effective treatment.
              </p>
              <p>
                A common misconception is that psoriasis is just a skin problem. In reality, it is a
                systemic autoimmune condition that can also affect the joints (psoriatic arthritis)
                and is associated with other health conditions. This is why proper medical
                management is important.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/treatments/psoriasis/psoriasis-1.webp"
              alt="Red, scaly psoriasis patches on skin"
              width={800}
              height={600}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SymptomsSection() {
  const symptoms = [
    {
      title: "Red Patches",
      desc: "Well-defined, raised red patches of skin are the hallmark of psoriasis. They can appear anywhere on the body, including the scalp, elbows, knees, and lower back.",
    },
    {
      title: "Thick Silvery Scales",
      desc: "The red patches are covered with thick, silvery-white scales made of dead skin cells. These scales may shed easily and can be mistaken for dandruff on the scalp.",
    },
    {
      title: "Itching",
      desc: "Psoriasis can cause mild to severe itching. The itch may be more noticeable during flare-ups or in dry weather. Scratching can worsen the patches.",
    },
    {
      title: "Burning Sensation",
      desc: "Many patients experience a burning or stinging sensation on affected skin, especially during active flare-ups or when the skin is irritated.",
    },
    {
      title: "Dry, Cracked Skin",
      desc: "The affected skin can become dry and may crack, particularly on the palms, soles, and over joints. Cracks can be painful and may bleed.",
    },
    {
      title: "Bleeding from Cracks",
      desc: "When scales are picked or rubbed off, or when cracked skin opens, small bleeding points may appear. This is known as the Auspitz sign.",
    },
    {
      title: "Nail Psoriasis",
      desc: "Psoriasis can affect the fingernails and toenails, causing pitting, thickening, discolouration, and separation of the nail from the nail bed.",
    },
    {
      title: "Scalp Psoriasis",
      desc: "Scalp psoriasis appears as red, scaly patches on the scalp that may extend beyond the hairline. It can be mistaken for severe dandruff.",
    },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Recognising the Signs
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Common Symptoms of Psoriasis
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Psoriasis symptoms can vary depending on the type and severity. Recognising them early
            helps in seeking timely treatment.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {symptoms.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            <img
              src="/images/treatments/psoriasis/psoriasis-2.webp"
              alt="Red patches, silvery scales, and nail changes caused by psoriasis"
              width={800}
              height={600}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CausesSection() {
  const causes = [
    {
      title: "Genetics",
      desc: "Psoriasis has a strong genetic link. If a close family member has psoriasis, your risk of developing it is significantly higher. Multiple genes are involved in its development.",
    },
    {
      title: "Immune System",
      desc: "Psoriasis is an autoimmune condition where the immune system mistakenly attacks healthy skin cells, triggering rapid cell turnover and inflammation.",
    },
    {
      title: "Stress",
      desc: "Emotional stress is one of the most common triggers for psoriasis. Stress can activate the immune response and lead to new flare-ups or worsening of existing symptoms.",
    },
    {
      title: "Skin Injuries",
      desc: "Cuts, scrapes, bug bites, sunburn, or even vaccinations can trigger psoriasis at the site of injury. This is known as the Koebner phenomenon.",
    },
    {
      title: "Infections",
      desc: "Infections, particularly strep throat, can trigger guttate psoriasis — a type that appears as small, drop-shaped patches. Other infections may also provoke flare-ups.",
    },
    {
      title: "Certain Medications",
      desc: "Some medications, including lithium, beta-blockers, antimalarial drugs, and certain anti-inflammatory medications, can trigger or worsen psoriasis.",
    },
    {
      title: "Smoking",
      desc: "Smoking is a known risk factor for developing psoriasis and is associated with more severe disease. It can also reduce the effectiveness of treatment.",
    },
    {
      title: "Alcohol",
      desc: "Excessive alcohol consumption can trigger flare-ups and worsen psoriasis symptoms. It may also interfere with treatment and reduce its effectiveness.",
    },
    {
      title: "Weather Changes",
      desc: "Cold, dry weather can worsen psoriasis by stripping moisture from the skin. Sunlight often improves psoriasis, but sunburn can trigger it.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Causes and Triggers
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            What Causes Psoriasis?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Psoriasis is caused by a combination of genetic and environmental factors. Understanding
            your triggers is key to managing the condition.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-base font-bold text-foreground">{cause.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cause.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TypesSection() {
  const types = [
    {
      title: "Plaque Psoriasis",
      desc: "The most common form, accounting for about 80–90% of cases. It appears as raised, red patches covered with silvery-white scales, typically on the elbows, knees, scalp, and lower back.",
    },
    {
      title: "Guttate Psoriasis",
      desc: "Appears as small, drop-shaped red spots on the trunk, arms, and legs. It often starts in childhood or young adulthood and may be triggered by a streptococcal infection.",
    },
    {
      title: "Inverse Psoriasis",
      desc: "Affects skin folds such as the armpits, groin, under the breasts, and around the genitals. It appears as smooth, red, inflamed patches without the typical scaling.",
    },
    {
      title: "Pustular Psoriasis",
      desc: "Characterised by white pustules (blisters of non-infectious pus) surrounded by red skin. It can be localised to the hands and feet or generalised across the body.",
    },
    {
      title: "Erythrodermic Psoriasis",
      desc: "A rare and severe form that causes widespread redness, shedding, and intense itching or burning over most of the body. It requires immediate medical attention.",
    },
    {
      title: "Scalp Psoriasis",
      desc: "Affects the scalp with red, scaly patches that may extend beyond the hairline. It can cause itching and temporary hair shedding due to scratching.",
    },
    {
      title: "Nail Psoriasis",
      desc: "Affects the fingernails and toenails, causing pitting, thickening, discolouration, and separation from the nail bed. It can be mistaken for a fungal infection.",
    },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Types of Psoriasis
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Different Types of Psoriasis
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Psoriasis can present in several forms. Identifying the specific type helps guide
            treatment decisions.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((type) => (
            <div
              key={type.title}
              className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-base font-bold text-foreground">{type.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiagnosisSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Diagnosis
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              How We Diagnose Psoriasis
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                At {CLINIC_NAME}, we diagnose psoriasis through a thorough clinical evaluation. In
                most cases, psoriasis can be diagnosed based on the appearance and location of the
                skin patches alone.
              </p>
              <p>
                We begin by reviewing your medical history, including any family history of
                psoriasis, your symptoms, triggers you may have noticed, and any previous treatments
                you have tried. This helps us understand the pattern and severity of your condition.
              </p>
              <p>
                A detailed skin examination allows us to assess the appearance, distribution, and
                extent of the patches. We also examine your nails and scalp, as these areas are
                commonly affected. This helps distinguish psoriasis from other conditions like
                eczema or fungal infections.
              </p>
              <p>
                In rare cases where the diagnosis is unclear, a small skin biopsy may be
                recommended. This involves taking a tiny sample of skin for laboratory analysis. The
                procedure is quick, safe, and provides a definitive diagnosis.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "Comprehensive medical and family history review",
                "Detailed skin, scalp, and nail examination",
                "Assessment of psoriasis type and severity",
                "Skin biopsy only when necessary for confirmation",
                "Accurate diagnosis before treatment begins",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/treatments/psoriasis/psoriasis-3.webp"
              alt="Dermatologist examining a patient's skin"
              width={800}
              height={600}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TreatmentsSection() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Treatments
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Psoriasis Treatments Available in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We offer a comprehensive range of evidence-based treatments to manage psoriasis and
            improve your quality of life.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Prescription Creams & Ointments",
              items: [
                "Topical corticosteroids to reduce inflammation and scaling",
                "Vitamin D analogues to slow skin cell growth",
                "Topical retinoids to normalise cell turnover",
                "Coal tar preparations for stubborn patches",
              ],
            },
            {
              title: "Moisturizers & Emollients",
              items: [
                "Medical-grade moisturizers to soften scales and soothe skin",
                "Fragrance-free emollients for daily hydration",
                "Salicylic acid preparations to help remove scales",
                "Guidance on proper moisturization techniques",
              ],
            },
            {
              title: "Oral Medications",
              items: [
                "Oral retinoids for severe or resistant psoriasis",
                "Methotrexate under medical supervision for severe cases",
                "Immunomodulators to control the immune response",
                "Regular blood monitoring to ensure safety",
              ],
            },
            {
              title: "Scalp Psoriasis Treatment",
              items: [
                "Medicated shampoos and scalp solutions",
                "Topical treatments formulated for the scalp",
                "Gentle scale removal techniques",
                "Long-term maintenance regimen",
              ],
            },
            {
              title: "Lifestyle Guidance",
              items: [
                "Trigger identification and avoidance strategies",
                "Stress management techniques",
                "Dietary recommendations to support skin health",
                "Importance of regular follow-up and monitoring",
              ],
            },
            {
              title: "Long-Term Disease Management",
              items: [
                "Personalised maintenance treatment plans",
                "Regular follow-up visits to assess disease activity",
                "Adjustment of treatment based on response",
                "Monitoring for associated conditions like psoriatic arthritis",
              ],
            },
          ].map((treatment, i) => (
            <div
              key={treatment.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="mb-4 grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                {i + 1}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{treatment.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {treatment.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const reasons = [
    {
      icon: Stethoscope,
      title: `Expert Dermatologist`,
      desc: `Led by ${DOCTOR_NAME}, ${QUALIFICATION}, with extensive experience in diagnosing and managing all types of psoriasis — from mild to severe cases.`,
    },
    {
      icon: Microscope,
      title: "Evidence-Based Care",
      desc: "We follow current dermatology guidelines and use proven treatments to manage psoriasis effectively. No fads, no misinformation.",
    },
    {
      icon: ShieldCheck,
      title: "Personalised Treatment",
      desc: "Every psoriasis patient is different. Your treatment plan is customised to your type of psoriasis, severity, triggers, and lifestyle for the best outcomes.",
    },
    {
      icon: Sparkles,
      title: "Long-Term Support",
      desc: "Psoriasis requires ongoing management. We provide regular follow-up, monitoring, and support to help you maintain healthy skin and quality of life.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Why {CLINIC_NAME} for Psoriasis Treatment?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We combine medical expertise with genuine care to help you manage psoriasis effectively.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Book a Consultation",
      desc: "Schedule your visit at our clinic in Armoor. Consultations are available Monday to Saturday, 11 AM to 6 PM.",
    },
    {
      step: "02",
      title: "Skin Assessment",
      desc: `${DOCTOR_NAME} examines your skin, scalp, and nails, discusses your symptoms and medical history, and identifies potential triggers.`,
    },
    {
      step: "03",
      title: "Personalised Treatment Plan",
      desc: "A customised treatment plan is created based on your psoriasis type, severity, and lifestyle — combining medications, skincare, and lifestyle guidance.",
    },
    {
      step: "04",
      title: "Follow-up & Monitoring",
      desc: "Regular follow-up visits to assess response, adjust treatment as needed, and monitor for any associated conditions like psoriatic arthritis.",
    },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Your Journey
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Our Treatment Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            From your first visit to long-term disease management — here is what you can expect.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                {s.step}
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LivingWithSection() {
  const tips = [
    {
      title: "Moisturize Regularly",
      desc: "Apply a thick, fragrance-free moisturizer daily to keep the skin hydrated and reduce scaling. Moisturizing immediately after bathing helps lock in moisture.",
    },
    {
      title: "Reduce Stress",
      desc: "Stress is a major trigger for psoriasis. Incorporate relaxation techniques such as meditation, deep breathing, yoga, or gentle exercise into your routine.",
    },
    {
      title: "Maintain a Healthy Lifestyle",
      desc: "A balanced diet rich in fruits, vegetables, and omega-3 fatty acids may help reduce inflammation. Maintain a healthy weight and avoid smoking.",
    },
    {
      title: "Avoid Triggers",
      desc: "Identify and avoid your personal triggers — whether they are certain foods, medications, weather conditions, or activities. Keeping a diary can help.",
    },
    {
      title: "Care for Your Skin Gently",
      desc: "Use lukewarm water for bathing, avoid harsh soaps, pat your skin dry gently, and wear soft, breathable fabrics like cotton.",
    },
    {
      title: "Follow Up Regularly",
      desc: "Consistent follow-up with your dermatologist is essential for adjusting treatment, monitoring response, and maintaining long-term control.",
    },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Living with Psoriasis
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Tips for Living with Psoriasis
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Small changes in your daily routine can make a significant difference in managing
            psoriasis and reducing flare-ups.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-base font-bold text-foreground">{tip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tip.desc}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            <img
              src="/images/treatments/psoriasis/psoriasis-4.webp"
              alt="Daily skincare routine for managing psoriasis"
              width={800}
              height={600}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Is psoriasis curable?",
      a: "Psoriasis is a chronic autoimmune condition that currently has no permanent cure. However, with proper and consistent treatment, symptoms can be effectively managed, flare-ups can be reduced, and most patients achieve significant improvement.",
    },
    {
      q: "Is psoriasis contagious?",
      a: "No, psoriasis is not contagious. It cannot be transmitted through touch, close contact, or sharing personal items. It is an autoimmune condition, not an infection.",
    },
    {
      q: "Can psoriasis spread to other parts of the body?",
      a: 'Psoriasis can appear on new areas of the body over time, especially during flare-ups. This is not "spreading" like an infection — it is the natural course of the disease. Treatment helps control this progression.',
    },
    {
      q: "What triggers psoriasis flare-ups?",
      a: "Common triggers include stress, skin injuries, infections (especially strep throat), cold weather, smoking, excessive alcohol, and certain medications. Identifying your personal triggers is an important part of managing psoriasis.",
    },
    {
      q: "Can stress worsen psoriasis?",
      a: "Yes, stress is one of the most common triggers. Emotional stress activates the immune system, increasing inflammation and leading to flare-ups. Managing stress through relaxation techniques can help reduce symptoms.",
    },
    {
      q: "Is psoriasis hereditary?",
      a: "Yes, psoriasis has a strong genetic component. If a close family member has psoriasis, your risk is higher. However, having the genes does not guarantee you will develop the condition.",
    },
    {
      q: "Can children develop psoriasis?",
      a: "Yes, children can develop psoriasis. It often appears as guttate psoriasis with small drop-like patches, frequently triggered by infections like strep throat. Early treatment helps manage symptoms effectively.",
    },
    {
      q: "How long does psoriasis treatment take?",
      a: "Most patients notice improvement in redness and scaling within 2–4 weeks of starting treatment. However, psoriasis is a chronic condition that requires ongoing management for long-term control.",
    },
    {
      q: "Can psoriasis return after treatment?",
      a: "Yes, psoriasis is a relapsing-remitting condition. Symptoms can return after periods of improvement, especially when triggered. The goal of treatment is to prolong remission and effectively manage flare-ups.",
    },
    {
      q: "How much does psoriasis treatment cost in Armoor?",
      a: `The cost of psoriasis treatment at ${CLINIC_NAME} depends on the severity, type, and treatment approach required. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
    },
    {
      q: "Can psoriasis affect the nails?",
      a: "Yes, nail psoriasis is common. It causes pitting, thickening, discolouration, and separation of the nail from the nail bed. Nail psoriasis can be treated with topical medications and, in some cases, oral therapy.",
    },
    {
      q: "What is the difference between psoriasis and eczema?",
      a: "Psoriasis typically presents as well-defined, thick, scaly patches, while eczema is more diffuse, dry, and intensely itchy. Psoriasis is an autoimmune condition, while eczema involves skin barrier dysfunction and immune sensitivity. A dermatologist can distinguish between them.",
    },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-center text-[15px] text-muted-foreground">
            Common questions about psoriasis treatment at our clinic in Armoor.
          </p>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, i) => (
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

function ReviewsSection() {
  const reviews = [
    {
      name: "Ramesh",
      location: "Armoor",
      text: "I have had psoriasis on my elbows and knees for years. I had tried many creams from local pharmacies with limited relief. Dr. Raghavendhra explained my condition clearly and started me on a combination treatment. The scaling has reduced significantly, and my skin looks so much better. Thank you.",
      rating: 5,
    },
    {
      name: "Sneha",
      location: "Nizamabad",
      text: "Scalp psoriasis was very embarrassing for me. I constantly had white flakes on my shoulders and an itchy scalp. The doctor prescribed a medicated shampoo and a scalp treatment that worked wonders. My scalp is clear now, and I feel so much more confident.",
      rating: 5,
    },
    {
      name: "Prakash",
      location: "Balkonda",
      text: "I was worried when I first developed red patches on my skin. The doctor took time to examine me thoroughly and reassured me that psoriasis is manageable. The treatment has been effective, and I appreciate the regular follow-up calls to check on my progress.",
      rating: 5,
    },
    {
      name: "Aruna",
      location: "Mortad",
      text: "My son was diagnosed with guttate psoriasis after a throat infection. The doctor treated the infection first and then started gentle topical treatment. His skin has cleared up nicely. Very grateful for the compassionate care.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Patient Reviews
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Real experiences from patients who have undergone psoriasis treatment at our clinic.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Quote className="mt-0.5 h-5 w-5 shrink-0 text-primary/40" />
                <p className="text-sm leading-relaxed text-muted-foreground">{review.text}</p>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-border pt-4 text-sm">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {review.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AreasWeServeSection() {
  const areas = AREAS_WE_SERVE;

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Areas We Serve
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Conveniently Located in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Patients visit {CLINIC_NAME} from across Armoor and surrounding areas for expert
            psoriasis treatment. Our clinic is easily accessible and welcomes patients from all
            nearby towns and villages.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area.name}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium ${
                area.isLocal
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground"
              }`}
            >
              <MapPin className="h-3.5 w-3.5" />
              {area.name}
            </span>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-glow"
          >
            <MapPin className="h-4 w-4" /> View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

function RelatedTreatmentsSection() {
  const related: { name: string; to: string; params?: Record<string, string> }[] = [
    { name: "Acne Treatment", to: "/treatments/acne-treatment-armoor" },
    { name: "Hair Fall Treatment", to: "/treatments/hair-fall-treatment-armoor" },
    { name: "Eczema Treatment", to: "/treatments/eczema-treatment-armoor" },
    {
      name: "Skin Allergy Treatment",
      to: "/treatments/$slug",
      params: { slug: "skin-allergy-treatment" },
    },
    { name: "Vitiligo Treatment", to: "/treatments/$slug", params: { slug: "vitiligo-treatment" } },
    {
      name: "Fungal Infection Treatment",
      to: "/treatments/$slug",
      params: { slug: "fungal-infection-treatment" },
    },
    { name: "Warts Treatment", to: "/treatments/$slug", params: { slug: "warts-treatment" } },
    { name: "Dandruff Treatment", to: "/treatments/$slug", params: { slug: "dandruff-treatment" } },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Explore More
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Related Treatments
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We offer a comprehensive range of dermatology treatments in Armoor.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {related.map((treatment) => (
            <Link
              key={treatment.name}
              to={treatment.to}
              {...(treatment.params ? { params: treatment.params } : {})}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:shadow-[var(--shadow-soft)]"
            >
              {treatment.name}
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
          Ready to Manage Your Psoriasis?
        </h2>
        <p className="mt-3 text-base text-white/80">
          Book a consultation with {DOCTOR_NAME}, {QUALIFICATION}, at {CLINIC_NAME} in Armoor. Take
          the first step towards healthier, more comfortable skin.
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
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
