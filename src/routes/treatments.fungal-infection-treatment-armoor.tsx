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

export const Route = createFileRoute("/treatments/fungal-infection-treatment-armoor")({
  head: () => ({
    meta: [
      {
        title: `Fungal Infection Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        name: "description",
        content: `Expert fungal infection treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}. Effective care for ringworm, athlete's foot, nail fungus, and skin infections at ${CLINIC_NAME}. Book your consultation.`,
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: `Fungal Infection Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        property: "og:description",
        content: `Effective fungal skin infection treatment in Armoor by Dr. Raghavendhra MD, DVL. Personalised care for ringworm, itching, and nail fungus at Armoor Skin & Hair Clinic.`,
      },
      { property: "og:url", content: `${SITE_URL}/treatments/fungal-infection-treatment-armoor` },
      { property: "og:type", content: "website" },
      {
        name: "twitter:title",
        content: `Fungal Infection Treatment in Armoor | ${CLINIC_NAME}`,
      },
      {
        name: "twitter:description",
        content: `Expert fungal infection treatment in Armoor by Dr. Raghavendhra — personalised care for healthy, infection-free skin.`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/treatments/fungal-infection-treatment-armoor` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": `${SITE_URL}/treatments/fungal-infection-treatment-armoor#clinic`,
              name: CLINIC_NAME,
              description: `Fungal infection treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}.`,
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
              "@id": `${SITE_URL}/treatments/fungal-infection-treatment-armoor#business`,
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
              "@id": `${SITE_URL}/treatments/fungal-infection-treatment-armoor#breadcrumbs`,
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
                  name: "Fungal Infection Treatment in Armoor",
                  item: `${SITE_URL}/treatments/fungal-infection-treatment-armoor`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/treatments/fungal-infection-treatment-armoor#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Are fungal infections contagious?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, many fungal skin infections are contagious. They can spread through direct skin-to-skin contact or indirectly through contaminated items like towels, clothing, bedding, and shower floors. This is why prompt treatment and good hygiene are important.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does fungal infection treatment take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Treatment duration depends on the type and severity of the infection. Mild skin infections may clear in 2–4 weeks with topical creams. Nail infections can take several months of oral medication. It is important to complete the full course of treatment even if symptoms improve.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can fungal infections return after treatment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, fungal infections can recur if the underlying risk factors are not addressed. Poor hygiene, excessive sweating, diabetes, and incomplete treatment are common reasons for recurrence. Following prevention advice helps reduce the risk.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is ringworm caused by worms?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, ringworm is not caused by worms. It is a fungal infection of the skin caused by dermatophytes. The name comes from the ring-like, circular shape of the rash. It is treated with antifungal medications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I use home remedies for fungal infections?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "While some home remedies may provide temporary relief, they are not a substitute for medical treatment. Fungal infections require proper antifungal medications to be fully treated. Delaying proper treatment can allow the infection to spread or worsen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "When should I visit a dermatologist for a fungal infection?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You should see a dermatologist if you have a persistent itchy rash that does not improve with over-the-counter creams, if the infection is spreading, if you have nail discolouration or thickening, or if you have diabetes or a weakened immune system.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can children get fungal infections?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, children can get fungal infections, particularly ringworm and scalp fungal infections. These are common in school-age children and can spread through close contact or sharing items. Treatment is safe and effective for children.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does sweating increase fungal infections?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, excessive sweating creates a warm, moist environment that encourages fungal growth. This is why fungal infections are more common in skin folds, between toes, and in the groin area. Keeping the skin dry helps prevent infections.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does fungal infection treatment cost in Armoor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `The cost of fungal infection treatment at ${CLINIC_NAME} depends on the type and severity of the infection and the treatment required. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I prevent fungal infections from recurring?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To prevent recurrence, keep your skin clean and dry, wear breathable cotton clothing, avoid sharing towels or footwear, complete the full course of prescribed treatment, and manage underlying conditions like diabetes. Regular hygiene practices are essential.",
                  },
                },
              ],
            },
            {
              "@type": "MedicalProcedure",
              name: "Fungal Infection Treatment in Armoor",
              description:
                "Comprehensive fungal infection treatment services including antifungal creams, oral medications, medicated shampoos, and hygiene guidance.",
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
  component: FungalInfectionTreatmentArmoorPage,
});

function FungalInfectionTreatmentArmoorPage() {
  return (
    <>
      <HeroSection />
      <WhatIsSection />
      <SymptomsSection />
      <TypesSection />
      <CausesSection />
      <DiagnosisSection />
      <TreatmentsSection />
      <WhyChooseSection />
      <ProcessSection />
      <PreventionSection />
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
          <span className="text-white/90">Fungal Infection Treatment in Armoor</span>
        </nav>
        {/* IMAGE PLACEHOLDER: Hero image for fungal infection treatment page */}
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 text-gold" />
              Expert Fungal Infection Care in Armoor
            </div>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Fungal Infection Treatment in Armoor
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Effective fungal skin infection treatment at {CLINIC_NAME}. Led by {DOCTOR_NAME},{" "}
              {QUALIFICATION} — Armoor's trusted dermatologist for personalised care and
              long-lasting relief from fungal infections.
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
                  "Accurate diagnosis with skin examination",
                  "Effective antifungal treatments",
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
              Understanding Fungal Infections
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              What is a Fungal Infection?
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                A fungal skin infection is caused by microscopic fungi that live on the skin, nails,
                or scalp. While many fungi are harmless, certain types can multiply excessively and
                cause infection, especially in warm, moist areas of the body.
              </p>
              <p>
                Fungal infections are very common in tropical and humid climates like Telangana.
                They can affect anyone, but certain factors like excessive sweating, poor hygiene,
                diabetes, and a weakened immune system increase the risk.
              </p>
              <p>
                It is important to distinguish fungal infections from bacterial infections, as the
                treatment is completely different. Bacterial infections require antibiotics, while
                fungal infections need antifungal medications. Using the wrong treatment can worsen
                the condition.
              </p>
              <p>
                Common fungal skin diseases include ringworm, athlete's foot, jock itch, and nail
                fungus. Early treatment is important because fungal infections can spread to other
                parts of the body and to other people if left untreated.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-secondary/40">
            {/* IMAGE PLACEHOLDER: Types of fungal infections */}
            <div className="flex aspect-[4/3] items-center justify-center p-8">
              <div className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <AlertCircle className="h-8 w-8" />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  Fungal Skin Infection
                </p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Replace with an image showing fungal infection on skin
                </p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Alt: Illustration showing common fungal skin infections like ringworm
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
      title: "Itching",
      desc: "Intense itching is the most common symptom of fungal skin infections. The itch may worsen in warm weather or after sweating.",
    },
    {
      title: "Red Circular Rash",
      desc: "Ringworm appears as a red, ring-shaped rash with a clear centre. The edges may be raised and scaly, giving it a worm-like appearance.",
    },
    {
      title: "Scaling",
      desc: "The affected skin often becomes dry and flaky, with visible scales that may shed. This is common in athlete's foot and ringworm.",
    },
    {
      title: "Burning Sensation",
      desc: "Many patients experience a burning or stinging sensation on the infected skin, especially in areas where skin rubs together.",
    },
    {
      title: "Skin Discoloration",
      desc: "Fungal infections can cause the skin to become lighter or darker than the surrounding area. This discolouration may persist even after treatment.",
    },
    {
      title: "Peeling Skin",
      desc: "The skin may peel or crack, particularly between the toes in athlete's foot. Peeling can be accompanied by a foul odour in some cases.",
    },
    {
      title: "Cracking",
      desc: "Deep, painful cracks can develop in the skin, especially on the feet and between toes. Cracked skin is prone to secondary bacterial infections.",
    },
    {
      title: "Blisters",
      desc: "In some cases, small fluid-filled blisters may form, particularly in inflammatory fungal infections. These should not be popped.",
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
            Common Symptoms of Fungal Infections
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Fungal infections can present in different ways depending on the type and location.
            Recognising the symptoms early helps in seeking timely treatment.
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
          {/* IMAGE PLACEHOLDER: Fungal infection symptoms */}
          <div className="flex aspect-[2/1] items-center justify-center rounded-2xl bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                <AlertCircle className="h-6 w-6" />
              </div>
              <p className="mt-3 text-sm font-medium text-muted-foreground">
                Fungal Infection Symptoms
              </p>
              <p className="mt-1 text-xs text-muted-foreground/80">
                Replace with an infographic showing common fungal infection symptoms
              </p>
              <p className="text-xs text-muted-foreground/80">
                Alt: Illustration showing ringworm, athlete's foot, and other fungal infections
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TypesSection() {
  const types = [
    {
      title: "Ringworm (Tinea Corporis)",
      desc: "A circular, red, ring-shaped rash with raised edges and clear centre. It can appear anywhere on the body and is highly contagious through direct contact.",
    },
    {
      title: "Jock Itch (Tinea Cruris)",
      desc: "A fungal infection of the groin area, causing redness, itching, and a burning sensation. It is more common in men and those who sweat heavily.",
    },
    {
      title: "Athlete's Foot (Tinea Pedis)",
      desc: "Affects the feet, especially between the toes. Symptoms include itching, burning, peeling, and cracked skin. It is commonly picked up in public showers and changing rooms.",
    },
    {
      title: "Scalp Fungal Infection (Tinea Capitis)",
      desc: "Affects the scalp, causing itching, scaling, and patchy hair loss. It is most common in children and requires oral antifungal treatment.",
    },
    {
      title: "Nail Fungal Infection (Onychomycosis)",
      desc: "Causes the nails to become thickened, discoloured, brittle, and distorted. It can affect both fingernails and toenails and requires long-term treatment.",
    },
    {
      title: "Yeast Infections",
      desc: "Caused by Candida species, these infections affect warm, moist areas like skin folds, under the breasts, and the groin. They appear as red, itchy rashes with satellite lesions.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Types of Infections
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Common Types of Fungal Infections
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Fungal infections can affect different parts of the body. Identifying the specific type
            helps guide the right treatment.
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

function CausesSection() {
  const causes = [
    {
      title: "Warm & Humid Climate",
      desc: "Fungi thrive in warm, moist environments. Telangana's tropical climate creates ideal conditions for fungal growth, especially during the monsoon and summer months.",
    },
    {
      title: "Excessive Sweating",
      desc: "Hyperhidrosis or excessive sweating keeps the skin damp, creating a breeding ground for fungi. This is a common cause of recurrent fungal infections.",
    },
    {
      title: "Poor Hygiene",
      desc: "Irregular bathing, not drying the skin properly after washing, and wearing unwashed clothes can promote fungal growth on the skin.",
    },
    {
      title: "Tight Clothing",
      desc: "Wearing tight, non-breathable synthetic clothing traps heat and moisture against the skin, increasing the risk of fungal infections in skin folds.",
    },
    {
      title: "Shared Items",
      desc: "Using shared towels, clothing, footwear, or gym equipment can transmit fungal infections from one person to another.",
    },
    {
      title: "Diabetes",
      desc: "Uncontrolled diabetes weakens the immune system and creates favourable conditions for fungal infections. People with diabetes are more prone to recurrent infections.",
    },
    {
      title: "Weakened Immunity",
      desc: "A compromised immune system due to illness, medications, or medical treatments makes it harder for the body to fight off fungal infections.",
    },
    {
      title: "Obesity",
      desc: "Excess body weight creates deeper skin folds that trap moisture, making obese individuals more susceptible to fungal infections.",
    },
    {
      title: "Prolonged Moisture",
      desc: "Keeping the skin wet for long periods — such as wearing damp socks or not drying thoroughly after bathing — encourages fungal overgrowth.",
    },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Causes and Risk Factors
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            What Causes Fungal Infections?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Fungal infections are caused by a combination of environmental and personal factors.
            Understanding these helps in prevention.
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
              How We Diagnose Fungal Infections
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                At {CLINIC_NAME}, we diagnose fungal infections through a thorough clinical
                evaluation. An accurate diagnosis is essential because many skin conditions can look
                similar to fungal infections but require different treatment.
              </p>
              <p>
                We begin by reviewing your medical history, including when the symptoms started, any
                previous treatments you have tried, and any underlying conditions like diabetes that
                may be contributing.
              </p>
              <p>
                A careful skin examination helps us identify the characteristic appearance of fungal
                infections. In many cases, the location, shape, and pattern of the rash are enough
                to make a confident diagnosis.
              </p>
              <p>
                When the diagnosis is unclear, we may perform a simple skin scraping test. A small
                sample of skin scales is collected and examined under a microscope to check for the
                presence of fungi. This quick, painless test helps confirm the diagnosis.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "Detailed medical history review",
                "Clinical skin examination",
                "Identification of infection type and location",
                "Skin scraping or KOH mount test when needed",
                "Accurate diagnosis before starting treatment",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-secondary/40">
            {/* IMAGE PLACEHOLDER: Skin examination */}
            <div className="flex aspect-[4/3] items-center justify-center p-8">
              <div className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <Stethoscope className="h-8 w-8" />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">Skin Examination</p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Replace with a photo of a dermatologist examining a patient's skin
                </p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Alt: Dermatologist examining fungal infection at Armoor Skin & Hair Clinic
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
            Fungal Infection Treatments Available in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We offer a range of effective treatments tailored to the type and severity of your
            fungal infection.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Antifungal Creams & Ointments",
              items: [
                "Topical antifungal medications for mild to moderate infections",
                "Creams containing clotrimazole, terbinafine, or miconazole",
                "Combination preparations for inflamed or itchy skin",
                "Clear instructions on duration and application",
              ],
            },
            {
              title: "Oral Antifungal Medicines",
              items: [
                "Oral tablets for widespread or resistant infections",
                "Effective for scalp and nail fungal infections",
                "Prescribed under medical supervision with monitoring",
                "Short course for skin infections, longer course for nail infections",
              ],
            },
            {
              title: "Medicated Shampoos",
              items: [
                "Antifungal shampoos for scalp fungal infections",
                "Ketoconazole and selenium sulphide preparations",
                "Regular use for effective control",
                "Guidance on frequency and technique",
              ],
            },
            {
              title: "Nail Infection Treatment",
              items: [
                "Oral antifungal medications for nail fungus",
                "Topical nail lacquers for mild cases",
                "Nail debridement when necessary",
                "Patience and consistency for complete clearance",
              ],
            },
            {
              title: "Hygiene & Prevention Guidance",
              items: [
                "Personalised advice on keeping skin clean and dry",
                "Recommendations for breathable clothing and footwear",
                "Tips to avoid reinfection from contaminated items",
                "Guidance for family members to prevent spread",
              ],
            },
            {
              title: "Management of Underlying Factors",
              items: [
                "Diabetes screening and management advice",
                "Guidance on controlling excessive sweating",
                "Weight management support when relevant",
                "Addressing immune-compromising conditions",
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
      desc: `Led by ${DOCTOR_NAME}, ${QUALIFICATION}, with extensive experience in diagnosing and treating all types of fungal infections — from mild to severe cases.`,
    },
    {
      icon: Microscope,
      title: "Accurate Diagnosis",
      desc: "We use clinical examination and laboratory tests when needed to confirm the diagnosis. Proper identification ensures the right treatment from the start.",
    },
    {
      icon: ShieldCheck,
      title: "Personalised Treatment",
      desc: "Your treatment plan is tailored to the type, location, and severity of your infection, as well as your overall health and medical history.",
    },
    {
      icon: Sparkles,
      title: "Prevention-Focused Care",
      desc: "We do not just treat the infection — we guide you on how to prevent recurrence and protect your family from spread.",
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
            Why {CLINIC_NAME} for Fungal Infection Treatment?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We combine medical expertise with genuine care to help you achieve healthy,
            infection-free skin.
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
      title: "Skin Examination",
      desc: `${DOCTOR_NAME} examines the affected area, discusses your symptoms and medical history, and performs tests if needed.`,
    },
    {
      step: "03",
      title: "Personalised Treatment",
      desc: "A customised treatment plan is created — combining antifungal medications, skincare guidance, and preventive advice.",
    },
    {
      step: "04",
      title: "Follow-up & Prevention",
      desc: "Regular follow-up visits to monitor progress, ensure complete clearance, and guide you on preventing recurrence.",
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
            From your first visit to complete recovery — here is what you can expect.
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

function PreventionSection() {
  const tips = [
    {
      title: "Keep Skin Dry",
      desc: "Dry your skin thoroughly after bathing, especially in skin folds and between toes. Fungi thrive in moisture, so keeping the skin dry is the most effective prevention.",
    },
    {
      title: "Wear Breathable Clothing",
      desc: "Choose loose-fitting, cotton clothes that allow the skin to breathe. Avoid synthetic fabrics that trap heat and moisture against the skin.",
    },
    {
      title: "Avoid Sharing Items",
      desc: "Do not share towels, clothing, shoes, combs, or bedding with others, especially if someone in the family has a fungal infection.",
    },
    {
      title: "Maintain Good Hygiene",
      desc: "Bathe regularly, change into clean clothes daily, and wash towels and bedsheets frequently in hot water to kill fungi.",
    },
    {
      title: "Complete the Full Course",
      desc: "Finish the entire course of prescribed treatment even if the symptoms disappear. Stopping early can lead to recurrence and drug resistance.",
    },
    {
      title: "Manage Diabetes",
      desc: "If you have diabetes, keeping your blood sugar under control significantly reduces your risk of recurrent fungal infections.",
    },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Prevention Tips
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            How to Prevent Fungal Infections
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Simple daily habits can significantly reduce your risk of developing or recurring fungal
            infections.
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
          {/* IMAGE PLACEHOLDER: Healthy skin after treatment */}
          <div className="flex aspect-[2/1] items-center justify-center rounded-2xl bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <p className="mt-3 text-sm font-medium text-muted-foreground">
                Healthy Skin Illustration
              </p>
              <p className="mt-1 text-xs text-muted-foreground/80">
                Replace with an image showing healthy, clear skin
              </p>
              <p className="text-xs text-muted-foreground/80">
                Alt: Illustration of healthy skin after fungal infection treatment
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
      q: "Are fungal infections contagious?",
      a: "Yes, many fungal skin infections are contagious. They can spread through direct skin contact or indirectly through shared towels, clothing, bedding, and shower floors. This is why early treatment and good hygiene are important to prevent spread to others.",
    },
    {
      q: "How long does fungal infection treatment take?",
      a: "Treatment duration varies by type and severity. Mild skin infections may clear in 2–4 weeks with topical creams. Nail infections can require 3–6 months of oral medication. It is important to complete the full course even after symptoms improve.",
    },
    {
      q: "Can fungal infections return after treatment?",
      a: "Yes, recurrence is possible if underlying risk factors like moisture, poor hygiene, or diabetes are not addressed. Incomplete treatment is another common cause. Following prevention advice reduces the chance of recurrence.",
    },
    {
      q: "Is ringworm caused by worms?",
      a: "No, ringworm is not caused by worms. It is a fungal infection caused by dermatophytes. The name refers to the ring-like, circular shape of the rash. It is treated with antifungal medications, not deworming medicine.",
    },
    {
      q: "Can I use home remedies for fungal infections?",
      a: "While some home remedies may provide temporary relief, they cannot cure fungal infections. Proper antifungal medication is necessary for complete treatment. Delaying proper treatment can allow the infection to spread.",
    },
    {
      q: "When should I visit a dermatologist for a fungal infection?",
      a: "You should see a dermatologist if the infection is spreading, if over-the-counter creams are not working, if you have nail changes, if you have recurrent infections, or if you have diabetes or a weakened immune system.",
    },
    {
      q: "Can children get fungal infections?",
      a: "Yes, children are quite susceptible to fungal infections, especially ringworm and scalp infections. These are common in school settings. Treatment is safe and effective for children when prescribed by a doctor.",
    },
    {
      q: "Does sweating increase fungal infections?",
      a: "Yes, excessive sweating creates a warm, moist environment where fungi thrive. This is why fungal infections are common in skin folds, between toes, and in the groin area. Keeping skin dry helps prevent infections.",
    },
    {
      q: "How much does fungal infection treatment cost in Armoor?",
      a: `The cost of fungal infection treatment at ${CLINIC_NAME} depends on the type, severity, and duration of treatment required. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
    },
    {
      q: "How can I prevent fungal infections from recurring?",
      a: "Keep your skin clean and dry, wear breathable cotton clothing, avoid sharing personal items, complete the full course of treatment, and manage underlying conditions like diabetes. Good hygiene is your best defence against recurrence.",
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
            Common questions about fungal infection treatment at our clinic in Armoor.
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
      name: "Mahesh",
      location: "Armoor",
      text: "I had ringworm on my arms for weeks and tried over-the-counter creams that did not help. Dr. Raghavendhra diagnosed it quickly and prescribed the right medication. The itching stopped in a few days, and the patches cleared completely in three weeks. Very happy with the treatment.",
      rating: 5,
    },
    {
      name: "Swathi",
      location: "Nizamabad",
      text: "I was embarrassed by the dark patches on my neck and underarms. I thought it was a hygiene issue, but the doctor explained it was a fungal infection. The treatment was simple and affordable. The patches are gone now. Highly recommend this clinic.",
      rating: 5,
    },
    {
      name: "Ravi Kumar",
      location: "Balkonda",
      text: "I had athlete's foot for months. It was itchy and uncomfortable, especially during summer. The doctor prescribed a combination of cream and oral medication, along with advice on keeping my feet dry. Completely cured now. Thank you.",
      rating: 5,
    },
    {
      name: "Padma",
      location: "Mortad",
      text: "My son got a fungal infection on his scalp from school. The doctor was very gentle with him and prescribed a medicated shampoo and oral medicine. His scalp is clear now, and his hair is growing back. Very grateful for the care.",
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
            Real experiences from patients who have undergone fungal infection treatment at our
            clinic.
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
            Patients visit {CLINIC_NAME} from across Armoor and surrounding areas for expert fungal
            infection treatment. Our clinic is easily accessible and welcomes patients from all
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
    { name: "Psoriasis Treatment", to: "/treatments/psoriasis-treatment-armoor" },
    { name: "Vitiligo Treatment", to: "/treatments/$slug", params: { slug: "vitiligo-treatment" } },
    { name: "Warts Treatment", to: "/treatments/$slug", params: { slug: "warts-treatment" } },
    {
      name: "Skin Allergy Treatment",
      to: "/treatments/$slug",
      params: { slug: "skin-allergy-treatment" },
    },
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
          Ready to Treat Your Fungal Infection?
        </h2>
        <p className="mt-3 text-base text-white/80">
          Book a consultation with {DOCTOR_NAME}, {QUALIFICATION}, at {CLINIC_NAME} in Armoor. Take
          the first step towards healthy, infection-free skin.
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
