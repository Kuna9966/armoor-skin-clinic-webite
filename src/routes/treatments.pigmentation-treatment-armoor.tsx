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
  AlertCircle,
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
} from "../lib/clinic-data";

export const Route = createFileRoute("/treatments/pigmentation-treatment-armoor")({
  head: () => ({
    meta: [
      {
        title: `Pigmentation Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        name: "description",
        content: `Expert pigmentation treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}. Advanced care for melasma, dark spots, uneven skin tone at ${CLINIC_NAME}. Book your consultation.`,
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: `Pigmentation Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        property: "og:description",
        content: `Advanced pigmentation treatment in Armoor by Dr. Raghavendhra MD, DVL. Personalised care for melasma, dark spots, and uneven skin tone at Armoor Skin & Hair Clinic.`,
      },
      { property: "og:url", content: `${SITE_URL}/treatments/pigmentation-treatment-armoor` },
      { property: "og:type", content: "website" },
      {
        name: "twitter:title",
        content: `Pigmentation Treatment in Armoor | ${CLINIC_NAME}`,
      },
      {
        name: "twitter:description",
        content: `Expert pigmentation treatment in Armoor by Dr. Raghavendhra — personalised care for clear, even-toned skin.`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/treatments/pigmentation-treatment-armoor` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": `${SITE_URL}/treatments/pigmentation-treatment-armoor#clinic`,
              name: CLINIC_NAME,
              description: `Pigmentation treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}.`,
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
              "@id": `${SITE_URL}/treatments/pigmentation-treatment-armoor#business`,
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
              "@id": `${SITE_URL}/treatments/pigmentation-treatment-armoor#breadcrumbs`,
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
                  name: "Pigmentation Treatment in Armoor",
                  item: `${SITE_URL}/treatments/pigmentation-treatment-armoor`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/treatments/pigmentation-treatment-armoor#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How many sessions are needed for pigmentation treatment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most patients require 4–6 sessions of chemical peels or laser therapy spaced 3–4 weeks apart. Topical treatments show results in 8–12 weeks. The exact number depends on the type and severity of pigmentation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is pigmentation treatment permanent?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Results are long-lasting with proper maintenance including sun protection and a consistent skincare routine. Some conditions like melasma may require periodic touch-up sessions to maintain results.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can chemical peels treat melasma?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, chemical peels are very effective for melasma when performed by an experienced dermatologist as part of a comprehensive treatment plan. They help reduce excess melanin and improve skin texture.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What causes dark spots on the face?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dark spots on the face can be caused by sun exposure (sun spots), hormonal changes (melasma), post-inflammatory hyperpigmentation after acne or injury, and certain medications. A dermatologist can identify the specific cause.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is laser treatment safe for pigmentation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, laser treatment is safe and effective for many types of pigmentation when performed by a qualified dermatologist. Different lasers target different pigment types, and your doctor will choose the most suitable one for your skin.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can pigmentation be treated naturally?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "While some home remedies may provide mild improvement, most pigmentation conditions require professional medical treatment for significant and lasting results. Medical-grade peels, topical agents, and lasers are far more effective than natural remedies.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will pigmentation come back after stopping treatment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Without maintenance and sun protection, pigmentation can return. Following your dermatologist's advice on sun protection, skincare routine, and periodic touch-ups is essential for maintaining results.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does pigmentation treatment cost in Armoor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `The cost of pigmentation treatment at ${CLINIC_NAME} depends on the type of pigmentation, severity, and treatment modalities required. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there any side effects of chemical peels for pigmentation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Chemical peels are generally safe when performed by a trained dermatologist. Mild redness, peeling, and sensitivity may occur for a few days after treatment. Your dermatologist will recommend appropriate post-peel care to minimise any side effects.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can men get pigmentation treatment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, pigmentation treatment is equally effective for men. Many men seek treatment for sun spots, post-inflammatory hyperpigmentation from shaving, and uneven skin tone. Treatments are customised to individual skin types and concerns.",
                  },
                },
              ],
            },
            {
              "@type": "MedicalProcedure",
              name: "Pigmentation Treatment in Armoor",
              description:
                "Comprehensive pigmentation treatment services including chemical peels, topical depigmenting agents, laser therapy, and personalised care plans.",
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
  component: PigmentationTreatmentArmoorPage,
});

function PigmentationTreatmentArmoorPage() {
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
      <TipsSection />
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
          <span className="text-white/90">Pigmentation Treatment in Armoor</span>
        </nav>
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 text-gold" />
              Expert Pigmentation Care in Armoor
            </div>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Pigmentation Treatment in Armoor
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Effective pigmentation treatment at {CLINIC_NAME}. Led by {DOCTOR_NAME},{" "}
              {QUALIFICATION} — Armoor's trusted dermatologist for personalised melasma, dark spots,
              and uneven skin tone care.
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
                  "Customised treatment for all skin types",
                  "Evidence-based pigmentation therapies",
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
              Understanding Pigmentation
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              What is Pigmentation?
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Skin pigmentation refers to the colour of your skin, which is determined by melanin
                — a pigment produced by specialised cells called melanocytes. When these cells
                produce too much melanin in certain areas, it leads to dark patches or spots, a
                condition known as hyperpigmentation.
              </p>
              <p>
                Hyperpigmentation can appear as small spots (age spots, sun spots), large patches
                (melasma), or areas of darkened skin following inflammation (post-inflammatory
                hyperpigmentation). While usually harmless, these dark patches can affect your
                appearance and self-confidence.
              </p>
              <p>
                Pigmentation disorders are among the most common dermatological concerns in India,
                given the tropical climate and high sun exposure. Conditions like melasma, known
                locally as "masks of pregnancy," affect a significant number of people, especially
                women, in our region.
              </p>
              <p>
                The good news is that most pigmentation conditions are treatable. With the right
                combination of professional treatments, sun protection, and skincare, significant
                improvement can be achieved. Early treatment yields the best results.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-secondary/40">
            <div className="flex aspect-[4/3] items-center justify-center p-8">
              <div className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <AlertCircle className="h-8 w-8" />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  Pigmentation Skin Condition
                </p>
                <p className="mt-1 text-xs text-muted-foreground/60">
                  Replace with an image showing pigmentation-affected skin
                </p>
                <p className="mt-1 text-xs text-muted-foreground/60">
                  Alt: Illustration showing dark patches and uneven skin tone from hyperpigmentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SymptomsSection() {
  const symptoms = [
    {
      title: "Dark Patches on Face",
      desc: "Dark, irregular patches on the cheeks, forehead, bridge of the nose, and upper lip are classic signs of melasma, a common pigmentation disorder.",
    },
    {
      title: "Sun Spots",
      desc: "Also called solar lentigines or age spots, these are flat, brown spots on sun-exposed areas like the face, hands, shoulders, and arms.",
    },
    {
      title: "Post-Inflammatory Hyperpigmentation",
      desc: "Dark marks that remain after acne, eczema, insect bites, or minor injuries. These are especially common in darker skin types and can persist for months.",
    },
    {
      title: "Uneven Skin Tone",
      desc: "A generalised unevenness in skin colour where some areas appear darker than others, giving the complexion a patchy or blotchy appearance.",
    },
    {
      title: "Dark Circles",
      desc: "Periorbital hyperpigmentation presents as dark circles under the eyes. It can be caused by genetics, lack of sleep, allergies, or sun exposure.",
    },
    {
      title: "Freckles",
      desc: "Small, flat, tan or light-brown spots that appear on sun-exposed skin. While often genetic, they can darken and multiply with sun exposure.",
    },
    {
      title: "Melasma Patches",
      desc: "Symmetrical, brown or grey-brown patches on both sides of the face, often triggered by hormonal changes during pregnancy or with oral contraceptive use.",
    },
    {
      title: "Dark Knuckles & Elbows",
      desc: "Localised hyperpigmentation on the knuckles, elbows, and knees can be a normal variant or associated with conditions like insulin resistance.",
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
            Common Symptoms of Pigmentation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Pigmentation disorders can present in various forms. Recognising the type helps in
            choosing the right treatment approach.
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
          <div className="flex aspect-[2/1] items-center justify-center rounded-2xl bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                <AlertCircle className="h-6 w-6" />
              </div>
              <p className="mt-3 text-sm font-medium text-muted-foreground">
                Pigmentation Symptoms Illustration
              </p>
              <p className="mt-1 text-xs text-muted-foreground/60">
                Replace with an infographic showing common pigmentation symptoms
              </p>
              <p className="text-xs text-muted-foreground/60">
                Alt: Illustration showing melasma, sun spots, and uneven skin tone caused by
                hyperpigmentation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CausesSection() {
  const causes = [
    {
      title: "Sun Exposure",
      desc: "Ultraviolet radiation from the sun is the single most common cause of pigmentation. UV rays stimulate melanocytes to produce excess melanin, leading to sun spots and worsening existing pigmentation.",
    },
    {
      title: "Hormonal Changes",
      desc: "Fluctuations in hormones during pregnancy, while using oral contraceptives, or during menopause can trigger melasma. This is why melasma is more common in women.",
    },
    {
      title: "Post-Inflammatory Response",
      desc: "Any inflammation of the skin — from acne, eczema, insect bites, or injuries — can leave behind dark marks. This is especially common in darker skin tones.",
    },
    {
      title: "Genetics",
      desc: "A family history of pigmentation disorders increases your likelihood of developing them. Some people are genetically predisposed to produce more melanin in response to triggers.",
    },
    {
      title: "Certain Medications",
      desc: "Some medications, including certain antibiotics, antimalarials, chemotherapy drugs, and hormone treatments, can cause hyperpigmentation as a side effect.",
    },
    {
      title: "Cosmetic Products",
      desc: "Some cosmetic ingredients, particularly fragrances and essential oils, can cause photosensitivity and lead to pigmentation. Harsh products can also damage the skin barrier.",
    },
    {
      title: "Medical Conditions",
      desc: "Certain health conditions like Addison's disease, thyroid disorders, and insulin resistance can cause generalised or localised hyperpigmentation.",
    },
    {
      title: "Ageing",
      desc: "As the skin ages, cumulative sun exposure and natural cellular changes lead to the formation of age spots and uneven pigmentation, especially on frequently exposed areas.",
    },
    {
      title: "Friction & Pressure",
      desc: "Repeated friction, pressure, or rubbing of the skin can cause post-inflammatory hyperpigmentation, especially in areas like the inner thighs, underarms, and neck.",
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
            What Causes Pigmentation?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Pigmentation can result from a combination of internal and external factors. Identifying
            the underlying cause is key to effective treatment.
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
      title: "Melasma",
      desc: "A common condition characterised by symmetrical, brown or grey-brown patches on the face — typically on the cheeks, forehead, nose bridge, and upper lip. It is often triggered by hormonal changes and sun exposure.",
    },
    {
      title: "Solar Lentigines",
      desc: "Also known as sun spots, age spots, or liver spots. These are flat, well-defined brown spots that appear on sun-exposed areas like the face, hands, chest, and shoulders after years of cumulative sun exposure.",
    },
    {
      title: "Post-Inflammatory Hyperpigmentation",
      desc: "Dark marks or spots that develop after skin inflammation or injury. Common causes include acne, eczema, psoriasis, burns, insect bites, and cosmetic procedures. More common in darker skin types.",
    },
    {
      title: "Freckles",
      desc: "Small, flat, tan or light-brown spots that are usually genetic. They darken with sun exposure and fade in the absence of UV light. Freckles are more common in people with fair skin.",
    },
    {
      title: "Periorbital Hyperpigmentation",
      desc: "Dark circles under the eyes caused by various factors including genetics, lack of sleep, allergies, sun exposure, and thinning skin revealing underlying blood vessels.",
    },
    {
      title: "Drug-Induced Hyperpigmentation",
      desc: "Pigmentation caused by certain medications such as antimalarials, chemotherapy drugs, tetracycline antibiotics, and some hormone therapies. It may appear as grey, blue, or brown patches.",
    },
    {
      title: "Linea Alba / Nigra",
      desc: "A dark vertical line that appears on the abdomen during pregnancy, caused by hormonal changes. It usually fades after childbirth without specific treatment.",
    },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Types of Pigmentation
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Different Types of Pigmentation Disorders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Pigmentation disorders vary in appearance, cause, and treatment approach. Identifying
            the specific type is essential for effective management.
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
              How We Diagnose Pigmentation
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                At {CLINIC_NAME}, we diagnose pigmentation disorders through a comprehensive
                evaluation. Our goal is to identify the type, cause, and depth of pigmentation to
                determine the most effective treatment approach.
              </p>
              <p>
                We begin with a detailed consultation reviewing your medical history, including any
                hormonal changes, medication use, sun exposure habits, skincare routine, and family
                history of pigmentation. This helps us identify potential triggers and contributing
                factors.
              </p>
              <p>
                A thorough skin examination under good lighting allows us to assess the colour,
                pattern, and distribution of pigmentation. We use a Wood's lamp examination in some
                cases to determine whether the pigmentation is in the epidermis (surface) or dermis
                (deeper layer), as this affects treatment selection.
              </p>
              <p>
                In some cases, we may recommend a skin biopsy or dermoscopy to rule out other
                conditions. This ensures an accurate diagnosis and a targeted treatment plan that
                delivers the best possible results.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "Comprehensive medical and lifestyle history review",
                "Detailed skin examination with Wood's lamp analysis",
                "Identification of pigmentation type and depth",
                "Dermoscopy or biopsy when needed for confirmation",
                "Personalised treatment plan based on diagnosis",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-secondary/40">
            <div className="flex aspect-[4/3] items-center justify-center p-8">
              <div className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <Stethoscope className="h-8 w-8" />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  Dermatologist Consultation
                </p>
                <p className="mt-1 text-xs text-muted-foreground/60">
                  Replace with a photo of a dermatologist consulting a patient
                </p>
                <p className="mt-1 text-xs text-muted-foreground/60">
                  Alt: Dermatologist examining a patient's skin at Armoor Skin & Hair Clinic
                </p>
              </div>
            </div>
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
            Pigmentation Treatments Available in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We offer a comprehensive range of evidence-based treatments to reduce pigmentation and
            restore your natural, even complexion.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Medical-Grade Chemical Peels",
              items: [
                "Glycolic acid peels for surface pigmentation and skin brightening",
                "Salicylic acid peels for pigmentation associated with acne",
                "Kojic acid and mandelic acid peels for melasma",
                "TCA peels for deeper pigmentation and sun spots",
              ],
            },
            {
              title: "Topical Depigmenting Agents",
              items: [
                "Hydroquinone-based creams for targeted pigmentation reduction",
                "Kojic acid and arbutin formulations for gentle lightening",
                "Vitamin C serums for antioxidant protection and brightening",
                "Retinoid creams to accelerate cell turnover and fade dark spots",
              ],
            },
            {
              title: "Laser Therapy",
              items: [
                "Q-switched Nd:YAG laser for deep pigmentation and melasma",
                "Fractional laser for resurfacing and even skin tone",
                "IPL (Intense Pulsed Light) for sun spots and freckles",
                "Low-fluence laser protocols for safe melasma treatment",
              ],
            },
            {
              title: "Oral Antioxidants & Supplements",
              items: [
                "Oral tranexamic acid for resistant melasma",
                "Vitamin C and E supplements for antioxidant support",
                "Glutathione for skin brightening and melanin regulation",
                "Polypodium leucotomos for sun protection from within",
              ],
            },
            {
              title: "Sun Protection & Prevention",
              items: [
                "Medical-grade sunscreen recommendations for your skin type",
                "Guidance on physical vs chemical sunscreens",
                "Sun avoidance and protective clothing advice",
                "Long-term prevention strategies to prevent recurrence",
              ],
            },
            {
              title: "Maintenance & Long-Term Care",
              items: [
                "Periodic touch-up peels and laser sessions",
                "Customised home skincare regimen",
                "Regular follow-up to monitor progress",
                "Lifestyle adjustments to minimise triggers",
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
      desc: `Led by ${DOCTOR_NAME}, ${QUALIFICATION}, with extensive experience in diagnosing and treating all types of pigmentation disorders — from melasma to post-inflammatory hyperpigmentation.`,
    },
    {
      icon: Microscope,
      title: "Advanced Technology",
      desc: "We have access to modern diagnostic tools like Wood's lamp and dermoscopy, as well as advanced treatment modalities including medical-grade peels and laser therapy for optimal results.",
    },
    {
      icon: ShieldCheck,
      title: "Customised Treatment Plans",
      desc: "Every pigmentation case is unique. Your treatment plan is tailored to your pigmentation type, skin type, severity, and lifestyle for the safest and most effective outcomes.",
    },
    {
      icon: Sparkles,
      title: "Focus on Prevention",
      desc: "We believe in treating pigmentation and preventing its return. Our comprehensive approach includes sun protection counselling, maintenance plans, and long-term skincare guidance.",
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
            Why {CLINIC_NAME} for Pigmentation Treatment?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We combine medical expertise with modern technology to help you achieve a clear, even
            complexion.
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
      title: "Pigmentation Assessment",
      desc: `${DOCTOR_NAME} examines your skin, uses Wood's lamp analysis to determine pigmentation depth, and discusses your concerns, triggers, and skincare routine.`,
    },
    {
      step: "03",
      title: "Personalised Treatment Plan",
      desc: "A customised treatment plan is created based on your pigmentation type, skin type, and goals — combining in-clinic procedures, topical agents, and sun protection.",
    },
    {
      step: "04",
      title: "Follow-up & Maintenance",
      desc: "Regular follow-up visits to assess progress, adjust treatment as needed, and ensure long-lasting results with a sustainable maintenance plan.",
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
            From your first visit to long-term skin maintenance — here is what you can expect.
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

function TipsSection() {
  const tips = [
    {
      title: "Wear Sunscreen Daily",
      desc: "Apply a broad-spectrum sunscreen with SPF 30 or higher every day, even when indoors or during cloudy weather. Reapply every 3-4 hours for adequate protection.",
    },
    {
      title: "Protect Yourself from the Sun",
      desc: "Wear a wide-brimmed hat, sunglasses, and protective clothing when outdoors. Avoid direct sun exposure between 10 AM and 4 PM when UV rays are strongest.",
    },
    {
      title: "Use Gentle Skincare Products",
      desc: "Avoid harsh scrubs, strong exfoliants, and products with irritating fragrances. Gentle cleansing and moisturising help maintain a healthy skin barrier.",
    },
    {
      title: "Avoid Picking at Your Skin",
      desc: "Picking at acne, scabs, or bumps can trigger post-inflammatory hyperpigmentation. Let any blemishes heal naturally and seek professional treatment for acne.",
    },
    {
      title: "Follow a Consistent Routine",
      desc: "Consistency is key in pigmentation treatment. Follow your dermatologist's recommended skincare routine and attend all scheduled follow-up appointments.",
    },
    {
      title: "Stay Hydrated and Eat Well",
      desc: "A balanced diet rich in antioxidants (berries, leafy greens, nuts) and adequate water intake support skin health and can help in managing pigmentation.",
    },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Skin Care Tips
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Tips for Managing Pigmentation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Incorporating these habits into your daily routine can help manage pigmentation and
            prevent new dark spots from forming.
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
          <div className="flex aspect-[2/1] items-center justify-center rounded-2xl bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <p className="mt-3 text-sm font-medium text-muted-foreground">
                Skin Care Illustration
              </p>
              <p className="mt-1 text-xs text-muted-foreground/60">
                Replace with an image showing healthy skincare routine for pigmentation
              </p>
              <p className="text-xs text-muted-foreground/60">
                Alt: Illustration of daily skincare routine for managing pigmentation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "How many sessions are needed for pigmentation treatment?",
      a: "Most patients require 4–6 sessions of chemical peels or laser therapy spaced 3–4 weeks apart. Topical treatments show visible results in 8–12 weeks. The exact number depends on the type and severity of your pigmentation.",
    },
    {
      q: "Is pigmentation treatment permanent?",
      a: "Results are long-lasting with proper maintenance including sun protection and a consistent skincare routine. Some conditions like melasma may require periodic touch-up sessions to maintain optimal results.",
    },
    {
      q: "Can chemical peels treat melasma?",
      a: "Yes, chemical peels are very effective for melasma when performed by an experienced dermatologist as part of a comprehensive treatment plan. They help reduce excess melanin and improve overall skin texture and tone.",
    },
    {
      q: "What causes dark spots on the face?",
      a: "Dark spots on the face can be caused by sun exposure (sun spots), hormonal changes (melasma), post-inflammatory hyperpigmentation after acne or skin injury, certain medications, and genetic predisposition. A dermatologist can identify the specific cause.",
    },
    {
      q: "Is laser treatment safe for pigmentation?",
      a: "Yes, laser treatment is safe and effective for many types of pigmentation when performed by a qualified dermatologist. Different lasers target different pigment types and depths. Your doctor will choose the safest and most suitable option for your skin.",
    },
    {
      q: "Can pigmentation be treated naturally?",
      a: "While some home remedies may provide mild improvement, most pigmentation conditions require professional medical treatment for significant and lasting results. Medical-grade peels, prescription topical agents, and laser therapy are far more effective than natural remedies alone.",
    },
    {
      q: "Will pigmentation come back after stopping treatment?",
      a: "Without proper maintenance and sun protection, pigmentation can return. Following your dermatologist's advice on sun protection, a consistent skincare routine, and periodic touch-up treatments is essential for maintaining results long-term.",
    },
    {
      q: "Are there any side effects of chemical peels for pigmentation?",
      a: "Chemical peels are generally safe when performed by a trained dermatologist. Mild redness, peeling, and sensitivity may occur for a few days after treatment. Your dermatologist will recommend appropriate post-peel care to minimise any side effects.",
    },
    {
      q: "Can men get pigmentation treatment?",
      a: "Yes, pigmentation treatment is equally effective for men. Many men seek treatment for sun spots, post-inflammatory hyperpigmentation from shaving, and uneven skin tone. Treatments are customised to individual skin types and concerns.",
    },
    {
      q: "How much does pigmentation treatment cost in Armoor?",
      a: `The cost of pigmentation treatment at ${CLINIC_NAME} depends on the type of pigmentation, severity, and treatment modalities required. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
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
            Common questions about pigmentation treatment at our clinic in Armoor.
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
      name: "Priya",
      location: "Armoor",
      text: "I had melasma on my cheeks for years and had tried many creams without success. Dr. Raghavendhra recommended a combination of chemical peels and a topical cream. After 4 sessions, my skin looks so much clearer. I am very happy with the results.",
      rating: 5,
    },
    {
      name: "Srinivas",
      location: "Nizamabad",
      text: "Sun spots on my hands and face were making me look older than I felt. The laser treatment at the clinic was painless and effective. The spots have faded significantly. Highly recommend the pigmentation treatment here.",
      rating: 5,
    },
    {
      name: "Anjali",
      location: "Balkonda",
      text: "After my pregnancy, I developed dark patches on my face that made me very self-conscious. The doctor explained everything clearly and started me on a gentle treatment plan. My skin is looking much more even now. Thank you so much.",
      rating: 5,
    },
    {
      name: "Venkat",
      location: "Mortad",
      text: "I had dark marks left behind from acne that would not go away. The doctor prescribed a combination of peels and a vitamin C serum. Within a few months, the marks faded dramatically. Great care and very professional.",
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
            Real experiences from patients who have undergone pigmentation treatment at our clinic.
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
  const areas = [
    { name: "Armoor", isLocal: true },
    { name: "Balkonda" },
    { name: "Mortad" },
    { name: "Mupkal" },
    { name: "Velpur" },
    { name: "Kammarpally" },
    { name: "Nandipet" },
    { name: "Navipet" },
    { name: "Nizamabad" },
  ];

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
            pigmentation treatment. Our clinic is easily accessible and welcomes patients from all
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
    { name: "Hair Loss Treatment", to: "/treatments/hair-loss-treatment-armoor" },
    { name: "Eczema Treatment", to: "/treatments/eczema-treatment-armoor" },
    { name: "Psoriasis Treatment", to: "/treatments/psoriasis-treatment-armoor" },
    { name: "Fungal Infection Treatment", to: "/treatments/fungal-infection-treatment-armoor" },
    {
      name: "Skin Allergy Treatment",
      to: "/treatments/$slug",
      params: { slug: "skin-allergy-treatment" },
    },
    { name: "Vitiligo Treatment", to: "/treatments/$slug", params: { slug: "vitiligo-treatment" } },
    {
      name: "Warts Treatment",
      to: "/treatments/$slug",
      params: { slug: "warts-treatment" },
    },
    {
      name: "Dandruff Treatment",
      to: "/treatments/$slug",
      params: { slug: "dandruff-treatment" },
    },
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
    <section className="py-20" style={{ background: "var(--gradient-navy)" }}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Ready to Achieve Clear, Even Skin?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Book a consultation with {DOCTOR_NAME}, {QUALIFICATION}, at {CLINIC_NAME} in Armoor. Take
          the first step towards a brighter, more even complexion.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
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
