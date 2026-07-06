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
  Sun,
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

export const Route = createFileRoute("/treatments/vitiligo-treatment-armoor")({
  head: () => ({
    meta: [
      {
        title: `Vitiligo Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        name: "description",
        content: `Expert vitiligo treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}. Medical and surgical repigmentation therapies for white patches at ${CLINIC_NAME}. Book your consultation.`,
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: `Vitiligo Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        property: "og:description",
        content: `Effective vitiligo and white patch treatment in Armoor by Dr. Raghavendhra MD, DVL. Personalised repigmentation care at Armoor Skin & Hair Clinic.`,
      },
      { property: "og:url", content: `${SITE_URL}/treatments/vitiligo-treatment-armoor` },
      { property: "og:type", content: "website" },
      {
        name: "twitter:title",
        content: `Vitiligo Treatment in Armoor | ${CLINIC_NAME}`,
      },
      {
        name: "twitter:description",
        content: `Expert vitiligo treatment in Armoor by Dr. Raghavendhra — personalised care for repigmentation and confident skin.`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/treatments/vitiligo-treatment-armoor` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": `${SITE_URL}/treatments/vitiligo-treatment-armoor#clinic`,
              name: CLINIC_NAME,
              description: `Vitiligo treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}.`,
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
              "@id": `${SITE_URL}/treatments/vitiligo-treatment-armoor#business`,
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
              "@id": `${SITE_URL}/treatments/vitiligo-treatment-armoor#breadcrumbs`,
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
                  name: "Vitiligo Treatment in Armoor",
                  item: `${SITE_URL}/treatments/vitiligo-treatment-armoor`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/treatments/vitiligo-treatment-armoor#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Can vitiligo be treated?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, vitiligo is treatable. While results vary from person to person, many patients achieve significant repigmentation with consistent medical or surgical treatment over several months. Early intervention typically yields better outcomes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does vitiligo treatment take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vitiligo treatment is gradual. Repigmentation typically begins to appear after 3–6 months of regular treatment. Full results may take 12–18 months depending on the extent and location of the patches and the treatment method used.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is vitiligo treatment safe?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, all vitiligo treatments at our clinic are safe and administered under medical supervision. We use therapies that are well-studied and approved for vitiligo management, and we monitor progress closely to ensure the best outcomes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can vitiligo spread?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vitiligo can spread over time, especially when the condition is active. The spread is unpredictable and varies between individuals. Treatment aims to stabilise the condition and induce repigmentation of existing patches.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is vitiligo painful?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vitiligo itself is not painful. The white patches are usually painless. However, the affected skin is more sensitive to sunlight and can sunburn easily, which may cause discomfort. Sun protection is important for vitiligo patients.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is vitiligo genetic?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, there is a genetic component to vitiligo. Having a family member with vitiligo or other autoimmune conditions increases the risk. However, not everyone with a genetic predisposition will develop the condition.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can children get vitiligo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, vitiligo can develop at any age, including childhood. In children, vitiligo often responds well to treatment. Early diagnosis and treatment are recommended for the best results.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the difference between vitiligo and leucoderma?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The terms are often used interchangeably, but vitiligo is an autoimmune condition caused by the destruction of melanocytes. Leucoderma is a broader term for any white patch on the skin. A dermatologist can differentiate between them through examination.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can vitiligo be cured permanently?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vitiligo is a chronic condition, and while there is no permanent cure, treatment can achieve significant and long-lasting repigmentation. Maintenance therapy and sun protection help sustain the results.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does vitiligo treatment cost in Armoor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `The cost of vitiligo treatment at ${CLINIC_NAME} depends on the extent of involvement, type of treatment required, and duration of therapy. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
                  },
                },
              ],
            },
            {
              "@type": "MedicalProcedure",
              name: "Vitiligo Treatment in Armoor",
              description:
                "Comprehensive vitiligo treatment services including topical therapies, phototherapy, oral medications, and surgical options for repigmentation.",
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
  component: VitiligoTreatmentArmoorPage,
});

function VitiligoTreatmentArmoorPage() {
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
          <span className="text-white/90">Vitiligo Treatment in Armoor</span>
        </nav>
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 text-gold" />
              Expert Vitiligo Care in Armoor
            </div>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Vitiligo Treatment in Armoor
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Effective vitiligo and white patch treatment at {CLINIC_NAME}. Led by {DOCTOR_NAME},{" "}
              {QUALIFICATION} — Armoor's trusted dermatologist for personalised repigmentation care
              and long-term management.
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
                  "Medical and surgical vitiligo treatments",
                  "Phototherapy and topical repigmentation",
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
              Understanding Vitiligo
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              What is Vitiligo?
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Vitiligo is a chronic skin condition in which the pigment-producing cells of the
                skin, called melanocytes, are destroyed by the immune system. This results in
                smooth, white patches that appear on various parts of the body. The condition is
                non-contagious and can affect people of any age, gender, or skin type.
              </p>
              <p>
                In a person with vitiligo, the immune system mistakenly attacks and destroys the
                melanocytes in certain areas of the skin. Without melanocytes, the skin cannot
                produce melanin — the pigment responsible for skin colour — leading to well-defined
                white patches. These patches can remain stable for years or gradually enlarge and
                spread over time.
              </p>
              <p>
                Vitiligo is often confused with other causes of skin depigmentation such as
                pityriasis alba, tinea versicolor, or post-inflammatory hypopigmentation. A proper
                diagnosis by a dermatologist is essential to distinguish vitiligo from these
                conditions and to plan appropriate treatment.
              </p>
              <p>
                Beyond the physical changes, vitiligo can have a significant emotional and
                psychological impact. Many patients experience self-consciousness, anxiety, or
                social stigma. At our clinic, we provide not just medical treatment but also
                compassionate support to help you regain confidence.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/treatments/vitiligo/vitiligo-1.webp"
              alt="White patches of vitiligo on skin"
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
      title: "White Patches",
      desc: "Well-defined, milky-white patches on the skin are the primary symptom. They commonly appear on sun-exposed areas such as the face, hands, arms, and feet, but can occur anywhere on the body.",
    },
    {
      title: "Patchy Hair Whitening",
      desc: "Vitiligo can affect hair follicles, leading to premature whitening or greying of hair on the scalp, eyebrows, eyelashes, or beard. This is often one of the early signs.",
    },
    {
      title: "Sun Sensitivity",
      desc: "The depigmented skin lacks melanin and is extremely sensitive to sunlight. It sunburns easily and cannot tan. Sun protection is essential for all vitiligo patients.",
    },
    {
      title: "Painless Patches",
      desc: "Vitiligo patches are typically smooth and painless. Unlike many other skin conditions, there is no itching, scaling, or discomfort on the patches themselves.",
    },
    {
      title: "Symmetrical Distribution",
      desc: "In the most common form of vitiligo (non-segmental), patches appear symmetrically on both sides of the body — for example, both knees, both hands, or both sides of the face.",
    },
    {
      title: "Progressive Spread",
      desc: "Vitiligo is often progressive. Existing patches may enlarge over time, and new patches may appear on previously unaffected areas. The rate of progression varies between individuals.",
    },
    {
      title: "Localised Patches",
      desc: "In segmental vitiligo, patches are limited to one side or one area of the body, such as a single limb or one side of the face. This type often starts in childhood.",
    },
    {
      title: "Mucous Membrane Involvement",
      desc: "In some cases, vitiligo can affect the mucous membranes — the tissues inside the mouth, nose, or around the genitals. These areas may also develop white patches.",
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
            Common Symptoms of Vitiligo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Vitiligo symptoms are primarily visible changes in skin pigmentation. Recognising them
            early helps in seeking timely treatment.
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
              src="/images/treatments/vitiligo/vitiligo-2.webp"
              alt="White patches, hair whitening, and symmetrical depigmentation caused by vitiligo"
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
      title: "Autoimmune Reaction",
      desc: "Vitiligo is primarily an autoimmune condition where the immune system mistakenly attacks and destroys melanocytes — the pigment-producing cells in the skin. This is the central mechanism behind the condition.",
    },
    {
      title: "Genetics",
      desc: "A family history of vitiligo or other autoimmune diseases increases the risk. Several genes have been identified that are associated with vitiligo susceptibility.",
    },
    {
      title: "Oxidative Stress",
      desc: "An imbalance between free radicals and antioxidants in the body can damage melanocytes. Oxidative stress is considered an important trigger in the development of vitiligo.",
    },
    {
      title: "Environmental Triggers",
      desc: "Sunburn, exposure to certain chemicals, physical skin trauma, or emotional stress can trigger the onset of vitiligo in genetically predisposed individuals.",
    },
    {
      title: "Associated Autoimmune Conditions",
      desc: "Vitiligo is more common in people with other autoimmune disorders such as thyroid disease (Hashimoto's thyroiditis), type 1 diabetes, pernicious anaemia, or alopecia areata.",
    },
    {
      title: "Neurogenic Factors",
      desc: "Some theories suggest that substances released by nerve endings in the skin may be toxic to melanocytes. This may explain the segmental distribution seen in some types of vitiligo.",
    },
    {
      title: "Viral Triggers",
      desc: "Some research indicates that certain viral infections may act as triggers for vitiligo in individuals who are genetically susceptible, possibly by activating the immune response.",
    },
    {
      title: "Hormonal Changes",
      desc: "Hormonal fluctuations during puberty, pregnancy, or menopause may influence the onset or progression of vitiligo in some individuals.",
    },
    {
      title: "Nutritional Deficiencies",
      desc: "Deficiencies in certain vitamins and minerals, particularly vitamin B12, folic acid, and vitamin D, have been associated with vitiligo, though they are not considered direct causes.",
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
            What Causes Vitiligo?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Vitiligo is caused by a complex interplay of genetic, immune, and environmental factors.
            Understanding these helps guide treatment.
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
      title: "Non-Segmental Vitiligo",
      desc: "The most common type, accounting for about 90% of cases. White patches appear symmetrically on both sides of the body. It typically begins on the hands, face, or around the eyes and mouth.",
    },
    {
      title: "Segmental Vitiligo",
      desc: "Less common, usually starts at a young age. Patches are limited to one segment or side of the body, such as one arm, one leg, or one side of the face. It often stabilises after an initial active period.",
    },
    {
      title: "Focal Vitiligo",
      desc: "Characterised by one or a few scattered white patches in a limited area. It may remain localised or progress to more widespread forms over time.",
    },
    {
      title: "Generalised Vitiligo",
      desc: "Widespread white patches distributed across many parts of the body. This is the most common form of non-segmental vitiligo and can involve large areas of skin.",
    },
    {
      title: "Acrofacial Vitiligo",
      desc: "Primarily affects the face and extremities — the fingers, toes, and around the mouth, eyes, and nostrils. It is a subtype of non-segmental vitiligo.",
    },
    {
      title: "Universal Vitiligo",
      desc: "A rare and extensive form where most of the body surface area is depigmented. This affects more than 80% of the skin and requires specialised management.",
    },
    {
      title: "Mucosal Vitiligo",
      desc: "Affects the mucous membranes of the mouth, lips, nose, and genital areas. It can occur alone or alongside skin involvement.",
    },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Types of Vitiligo
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Different Types of Vitiligo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Vitiligo can present in several patterns. Identifying the specific type helps guide
            treatment decisions and prognosis.
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
              How We Diagnose Vitiligo
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                At {CLINIC_NAME}, we diagnose vitiligo through a comprehensive clinical evaluation.
                In most cases, the characteristic appearance of well-defined white patches is enough
                for an experienced dermatologist to make a diagnosis.
              </p>
              <p>
                We begin by reviewing your medical history, including the onset and progression of
                the white patches, any family history of vitiligo or autoimmune conditions, and any
                triggers you may have noticed. This helps us determine whether the vitiligo is
                active or stable.
              </p>
              <p>
                A thorough skin examination under natural light allows us to assess the
                distribution, extent, and pattern of depigmentation. We may also use a Wood's lamp —
                a special ultraviolet light that makes vitiligo patches appear more clearly — to
                identify areas that are not yet visible to the naked eye.
              </p>
              <p>
                In rare cases where the diagnosis is uncertain, a small skin biopsy may be
                recommended to examine the melanocytes under a microscope. This is a quick and safe
                procedure that provides a definitive diagnosis and rules out other causes of
                hypopigmentation.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "Comprehensive medical and family history evaluation",
                "Detailed skin examination under natural and Wood's lamp light",
                "Assessment of vitiligo type, extent, and disease activity",
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
              src="/images/treatments/vitiligo/vitiligo-3.webp"
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
            Vitiligo Treatments Available in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We offer a comprehensive range of evidence-based treatments to repigment white patches
            and help you achieve even-toned skin.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Topical Corticosteroids",
              items: [
                "Potent steroid creams to reduce immune activity in the skin",
                "Applied carefully to depigmented patches",
                "Helps stabilise active vitiligo and promote repigmentation",
                "Supervised use to minimise side effects",
              ],
            },
            {
              title: "Topical Calcineurin Inhibitors",
              items: [
                "Steroid-free immunomodulator creams (tacrolimus, pimecrolimus)",
                "Safe for sensitive areas like face, neck, and skin folds",
                "Effective for both active and stable vitiligo",
                "Can be used long-term with minimal side effects",
              ],
            },
            {
              title: "Phototherapy (NB-UVB)",
              items: [
                "Narrowband UVB therapy to stimulate melanocyte activity",
                "Regular sessions at our clinic for best results",
                "Safe and effective for generalised vitiligo",
                "Often combined with topical treatments for enhanced effect",
              ],
            },
            {
              title: "Excimer Laser Therapy",
              items: [
                "Targeted UVB laser for localised and resistant patches",
                "Precise treatment of small, stubborn areas",
                "Faster repigmentation in treated spots",
                "Ideal for patches on hands, feet, and face",
              ],
            },
            {
              title: "Oral Medications & Antioxidants",
              items: [
                "Oral corticosteroids for rapidly progressive vitiligo",
                "Antioxidant supplements to combat oxidative stress",
                "Immunomodulators for widespread or resistant cases",
                "Vitamin and mineral supplementation when indicated",
              ],
            },
            {
              title: "Surgical Options (Stable Vitiligo)",
              items: [
                "Skin grafting for stable, localised patches",
                "Melanocyte transplantation in suitable candidates",
                "Suitable when medical therapy has plateaued",
                "Only for vitiligo that has been stable for 12+ months",
              ],
            },
            {
              title: "Camouflage Therapy",
              items: [
                "Medical-grade camouflage creams for visible patches",
                "Sun protection guidance for depigmented skin",
                "Cosmetic counselling to boost confidence",
                "Water-resistant and long-lasting options available",
              ],
            },
            {
              title: "Maintenance & Follow-Up Care",
              items: [
                "Personalised maintenance plan after repigmentation",
                "Regular follow-up to monitor stability",
                "Sun protection and skin care guidance",
                "Emotional and psychological support",
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
      desc: `Led by ${DOCTOR_NAME}, ${QUALIFICATION}, with extensive experience in diagnosing and managing all types of vitiligo — from early localised to widespread cases.`,
    },
    {
      icon: Microscope,
      title: "Evidence-Based Care",
      desc: "We follow current dermatology guidelines and use proven medical and surgical treatments to repigment vitiligo patches. No fads, no misinformation.",
    },
    {
      icon: ShieldCheck,
      title: "Personalised Treatment",
      desc: "Every vitiligo patient is different. Your treatment plan is customised to your type of vitiligo, extent of involvement, activity status, and skin type for the best outcomes.",
    },
    {
      icon: Sparkles,
      title: "Compassionate Support",
      desc: "We understand the emotional impact of vitiligo. Our team provides a supportive, non-judgmental environment and addresses both your medical and psychological needs.",
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
            Why {CLINIC_NAME} for Vitiligo Treatment?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We combine medical expertise with genuine care to help you manage vitiligo and restore
            your skin's natural colour.
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
      desc: `${DOCTOR_NAME} examines your skin, assesses the type and extent of vitiligo, discusses your medical history, and evaluates disease activity.`,
    },
    {
      step: "03",
      title: "Personalised Treatment Plan",
      desc: "A customised treatment plan is created based on your vitiligo type, extent, and activity — combining topical therapies, phototherapy, oral medications, or surgical options.",
    },
    {
      step: "04",
      title: "Follow-up & Monitoring",
      desc: "Regular follow-up visits to assess repigmentation progress, adjust treatment as needed, and provide ongoing support for the best possible outcomes.",
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
            From your first visit to long-term repigmentation success — here is what you can expect.
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
      title: "Protect Your Skin from the Sun",
      desc: "Apply a broad-spectrum sunscreen with SPF 50+ daily. Depigmented skin has no natural protection against UV rays and sunburns easily. Sun protection also prevents the contrast between affected and unaffected skin from worsening.",
    },
    {
      title: "Avoid Skin Trauma",
      desc: "Cuts, scrapes, and friction can trigger new vitiligo patches in some people (Koebner phenomenon). Be gentle with your skin — use soft towels, avoid harsh scrubbing, and wear comfortable clothing.",
    },
    {
      title: "Manage Stress",
      desc: "Stress can activate or worsen vitiligo. Incorporate relaxation techniques such as meditation, deep breathing, yoga, or light exercise into your daily routine.",
    },
    {
      title: "Eat a Balanced Diet",
      desc: "A diet rich in antioxidants, vitamins B12 and D, folic acid, and minerals may support skin health and repigmentation. Include fruits, vegetables, leafy greens, and fortified foods.",
    },
    {
      title: "Stay Consistent with Treatment",
      desc: "Vitiligo treatment takes time and consistency. Follow your treatment plan as prescribed, attend all follow-up appointments, and be patient — repigmentation is a gradual process.",
    },
    {
      title: "Use Camouflage if Needed",
      desc: "Medical-grade camouflage creams can help conceal visible patches while you undergo treatment. We can recommend suitable products that match your skin tone and are long-lasting.",
    },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Living with Vitiligo
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Tips for Living with Vitiligo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Small changes in your daily routine can make a significant difference in managing
            vitiligo and protecting your skin.
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
              src="/images/treatments/vitiligo/vitiligo-4.webp"
              alt="Sun protection and skincare routine for managing vitiligo"
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
      q: "Can vitiligo be treated?",
      a: "Yes, vitiligo is treatable. While results vary from person to person, many patients achieve significant repigmentation with consistent medical or surgical treatment over several months. Early intervention typically yields better outcomes.",
    },
    {
      q: "How long does vitiligo treatment take?",
      a: "Vitiligo treatment is gradual. Repigmentation typically begins to appear after 3–6 months of regular treatment. Full results may take 12–18 months depending on the extent and location of the patches and the treatment method used.",
    },
    {
      q: "Is vitiligo treatment safe?",
      a: "Yes, all vitiligo treatments at our clinic are safe and administered under medical supervision. We use therapies that are well-studied and approved for vitiligo management, and we monitor progress closely.",
    },
    {
      q: "Can vitiligo spread?",
      a: "Vitiligo can spread over time, especially when the condition is active. The spread is unpredictable and varies between individuals. Treatment aims to stabilise the condition and induce repigmentation of existing patches.",
    },
    {
      q: "Is vitiligo painful?",
      a: "Vitiligo itself is not painful. The white patches are usually painless. However, the affected skin is more sensitive to sunlight and can sunburn easily, which may cause discomfort. Sun protection is essential.",
    },
    {
      q: "Is vitiligo genetic?",
      a: "Yes, there is a genetic component to vitiligo. Having a family member with vitiligo or other autoimmune conditions increases the risk. However, not everyone with a genetic predisposition will develop the condition.",
    },
    {
      q: "Can children get vitiligo?",
      a: "Yes, vitiligo can develop at any age, including childhood. In children, vitiligo often responds well to treatment. Early diagnosis and treatment are recommended for the best results.",
    },
    {
      q: "What is the difference between vitiligo and leucoderma?",
      a: "The terms are often used interchangeably, but vitiligo is an autoimmune condition caused by the destruction of melanocytes. Leucoderma is a broader term for any white patch on the skin. A dermatologist can differentiate between them.",
    },
    {
      q: "Can vitiligo be cured permanently?",
      a: "Vitiligo is a chronic condition, and while there is no permanent cure, treatment can achieve significant and long-lasting repigmentation. Maintenance therapy and sun protection help sustain the results.",
    },
    {
      q: "How much does vitiligo treatment cost in Armoor?",
      a: `The cost of vitiligo treatment at ${CLINIC_NAME} depends on the extent of involvement, type of treatment required, and duration of therapy. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
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
            Common questions about vitiligo treatment at our clinic in Armoor.
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
      name: "Srinivas",
      location: "Armoor",
      text: "I have had vitiligo patches on my hands and face for about 4 years. I was very self-conscious and had tried many home remedies with no success. Dr. Raghavendhra explained the condition very well and started me on a combination of topical treatment and phototherapy. I can already see small spots of colour returning. Very grateful.",
      rating: 5,
    },
    {
      name: "Kavita",
      location: "Nizamabad",
      text: "My daughter developed a white patch on her cheek at the age of 6. We were very worried. The doctor diagnosed segmental vitiligo and started early treatment. The patch has reduced significantly in size and we are hopeful for full recovery. The doctor was very kind and patient with our questions.",
      rating: 5,
    },
    {
      name: "Venkatesh",
      location: "Balkonda",
      text: "I was hesitant to visit a doctor for my vitiligo because I thought nothing could be done. Dr. Raghavendhra changed my perspective. He explained the treatment options clearly and started me on a regimen. My patches have stopped spreading and repigmentation has started. Excellent care.",
      rating: 5,
    },
    {
      name: "Laxmi",
      location: "Mupkal",
      text: "The white patches on my hands were affecting my confidence at work. I consulted Dr. Raghavendhra and he recommended excimer laser along with creams. The response has been very good and I am seeing new pigment. The staff is very supportive and the clinic is well-equipped.",
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
            Real experiences from patients who have undergone vitiligo treatment at our clinic.
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
            vitiligo treatment. Our clinic is easily accessible and welcomes patients from all
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
  const related: { name: string; to: string }[] = [
    { name: "Acne Treatment", to: "/treatments/acne-treatment-armoor" },
    { name: "Hair Loss Treatment", to: "/treatments/hair-loss-treatment-armoor" },
    { name: "Psoriasis Treatment", to: "/treatments/psoriasis-treatment-armoor" },
    { name: "Eczema Treatment", to: "/treatments/eczema-treatment-armoor" },
    { name: "Fungal Infection Treatment", to: "/treatments/fungal-infection-treatment-armoor" },
    { name: "Dandruff Treatment", to: "/treatments/dandruff-treatment-armoor" },
    { name: "Pigmentation Treatment", to: "/treatments/pigmentation-treatment-armoor" },
    { name: "Skin Allergy Treatment", to: "/treatments/skin-allergy-treatment-armoor" },
    { name: "Nail Disorders", to: "/treatments/nail-disorders-armoor" },
    { name: "Wart Removal", to: "/treatments/wart-removal-armoor" },
    { name: "Mole Removal", to: "/treatments/mole-removal-armoor" },
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
          Ready to Restore Your Natural Skin Colour?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Book a consultation with {DOCTOR_NAME}, {QUALIFICATION}, at {CLINIC_NAME} in Armoor. Take
          the first step towards even-toned, confident skin.
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
