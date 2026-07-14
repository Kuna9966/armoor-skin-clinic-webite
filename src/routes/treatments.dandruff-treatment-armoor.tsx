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
  Wind,
  Droplets,
  Scissors,
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
  AREAS_WE_SERVE,
} from "../lib/clinic-data";

export const Route = createFileRoute("/treatments/dandruff-treatment-armoor")({
  head: () => ({
    meta: [
      {
        title: `Dandruff Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        name: "description",
        content: `Expert dandruff treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}. Effective relief from dry scalp, seborrheic dermatitis, itching, and flaking at ${CLINIC_NAME}. Book your consultation today.`,
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: `Dandruff Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        property: "og:description",
        content: `Get rid of dandruff with expert care in Armoor by Dr. Raghavendhra MD, DVL. Personalised treatment for itchy, flaky scalp at Armoor Skin & Hair Clinic.`,
      },
      { property: "og:url", content: `${SITE_URL}/treatments/dandruff-treatment-armoor` },
      { property: "og:type", content: "website" },
      {
        name: "twitter:title",
        content: `Dandruff Treatment in Armoor | ${CLINIC_NAME}`,
      },
      {
        name: "twitter:description",
        content: `Expert dandruff treatment in Armoor by Dr. Raghavendhra — personalised care for a healthy, flake-free scalp.`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/treatments/dandruff-treatment-armoor` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": `${SITE_URL}/treatments/dandruff-treatment-armoor#clinic`,
              name: CLINIC_NAME,
              description: `Dandruff treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}.`,
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
              "@id": `${SITE_URL}/treatments/dandruff-treatment-armoor#business`,
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
              "@id": `${SITE_URL}/treatments/dandruff-treatment-armoor#breadcrumbs`,
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
                  name: "Dandruff Treatment in Armoor",
                  item: `${SITE_URL}/treatments/dandruff-treatment-armoor`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/treatments/dandruff-treatment-armoor#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Can dandruff be cured permanently?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "While dandruff may recur, it can be effectively controlled with proper treatment and a regular scalp care routine. Long-term management with medicated shampoos and good hair hygiene helps keep symptoms at bay.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is dandruff contagious?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, dandruff is not contagious. It is a scalp condition caused by yeast overgrowth, dry skin, or seborrheic dermatitis. It cannot spread from person to person through contact or sharing items.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How often should I use medicated shampoo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Frequency depends on the severity. Typically 2–3 times per week initially, reducing to once weekly for maintenance as symptoms improve. Your dermatologist will advise the best schedule for your condition.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does dandruff cause hair loss?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dandruff itself does not directly cause permanent hair loss, but severe itching and scratching can damage hair follicles and lead to temporary hair shedding. Treating dandruff helps protect your scalp and hair health.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the difference between dandruff and dry scalp?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dry scalp produces small, dry white flakes and feels tight or itchy, often worsened by cold weather. Dandruff flakes are larger, oilier, and yellowish, caused by excess oil and yeast overgrowth. A dermatologist can help distinguish between them.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can stress cause dandruff?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, stress can worsen dandruff by increasing sebum production and weakening the immune system, making the scalp more susceptible to yeast overgrowth. Managing stress levels can help reduce flare-ups.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is dandruff more common in certain seasons?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, dandruff often worsens in cold, dry winter months because indoor heating dries out the scalp, and reduced sun exposure may increase yeast activity. Symptoms often improve in warmer, sunnier weather.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can diet affect dandruff?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A diet rich in zinc, B vitamins, and omega-3 fatty acids may help reduce dandruff. Foods high in sugar and unhealthy fats can increase oil production and worsen symptoms. A balanced diet supports overall scalp health.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can dandruff affect other parts of the body?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, seborrheic dermatitis — a common cause of dandruff — can also affect the face, eyebrows, sides of the nose, ears, chest, and back. These areas may become red, greasy, and flaky.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does dandruff treatment cost in Armoor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `The cost of dandruff treatment at ${CLINIC_NAME} depends on the severity and treatment approach required. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
                  },
                },
              ],
            },
            {
              "@type": "MedicalProcedure",
              name: "Dandruff Treatment in Armoor",
              description:
                "Comprehensive dandruff treatment services including medicated shampoos, scalp treatments, seborrheic dermatitis management, and personalised scalp care plans.",
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
  component: DandruffTreatmentArmoorPage,
});

function DandruffTreatmentArmoorPage() {
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
          <span className="text-white/90">Dandruff Treatment in Armoor</span>
        </nav>
        {/* IMAGE PLACEHOLDER: Hero image for dandruff treatment page */}
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 text-gold" />
              Expert Dandruff Care in Armoor
            </div>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Dandruff Treatment in Armoor
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Effective dandruff and dry scalp treatment at {CLINIC_NAME}. Led by {DOCTOR_NAME},{" "}
              {QUALIFICATION} — Armoor's trusted dermatologist for personalised scalp care and
              lasting relief from flaking and itching.
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
                  "Personalised treatment for all scalp types",
                  "Prescription-grade medicated shampoos",
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
              Understanding Dandruff
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              What is Dandruff?
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Dandruff is a common scalp condition that causes white or yellow flakes of dead skin
                to appear on the scalp, hair, and shoulders. It is often accompanied by itching and
                can be embarrassing or uncomfortable. At {CLINIC_NAME}, we treat the root cause of
                dandruff — whether it is dry skin, seborrheic dermatitis, or fungal overgrowth — for
                lasting relief.
              </p>
              <p>
                Dandruff occurs when the natural shedding of skin cells on the scalp accelerates. In
                a healthy scalp, skin cells renew slowly and shed invisibly. In dandruff, this
                process speeds up, causing dead cells to clump together into visible flakes. The
                condition affects nearly half of the adult population worldwide.
              </p>
              <p>
                Dandruff is often confused with a dry scalp. While both cause flaking, dandruff
                flakes are typically larger, oilier, and yellowish, while dry scalp flakes are
                smaller, drier, and white. The causes and treatments differ, so an accurate
                diagnosis by a dermatologist is essential for effective relief.
              </p>
              <p>
                A common misconception is that dandruff is caused by poor hygiene. In reality, it is
                a medical condition influenced by factors like yeast overgrowth, oil production,
                genetics, and environmental triggers. Even people who wash their hair daily can
                experience dandruff.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-secondary/40">
            {/* IMAGE PLACEHOLDER: Dandruff scalp condition */}
            <div className="flex aspect-[4/3] items-center justify-center p-8">
              <div className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <AlertCircle className="h-8 w-8" />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  Dandruff Scalp Condition
                </p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Replace with an image showing dandruff-affected scalp
                </p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Alt: Illustration showing white and yellow flakes on a scalp affected by dandruff
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
      title: "White or Yellow Flakes",
      desc: "Visible flakes of dead skin on the scalp, hair, and shoulders. Dandruff flakes are typically larger and oilier than dry scalp flakes.",
    },
    {
      title: "Itchy Scalp",
      desc: "Persistent itching of the scalp is one of the most common symptoms of dandruff. The itch may be mild to severe and can worsen in dry or cold weather.",
    },
    {
      title: "Red, Greasy Patches",
      desc: "Red, greasy patches on the scalp are a sign of seborrheic dermatitis, a more severe form of dandruff. These patches may also appear on the face and ears.",
    },
    {
      title: "Dry or Oily Scalp",
      desc: "Dandruff can present with either a dry, tight-feeling scalp or an excessively oily scalp. Both types require different treatment approaches.",
    },
    {
      title: "Flaking in Cold Weather",
      desc: "Dandruff often worsens in cold or dry weather. Indoor heating can dry out the scalp, and reduced sun exposure may increase yeast activity.",
    },
    {
      title: "Mild Hair Fall",
      desc: "Mild hair shedding can occur due to scalp inflammation or vigorous scratching. Treating dandruff helps prevent temporary hair loss.",
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
            Common Symptoms of Dandruff
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Dandruff symptoms can range from mild flaking to more severe scalp inflammation.
            Recognising them early helps in seeking timely treatment.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          {/* IMAGE PLACEHOLDER: Dandruff symptoms illustration */}
          <div className="flex aspect-[2/1] items-center justify-center rounded-2xl bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                <AlertCircle className="h-6 w-6" />
              </div>
              <p className="mt-3 text-sm font-medium text-muted-foreground">
                Dandruff Symptoms Illustration
              </p>
              <p className="mt-1 text-xs text-muted-foreground/80">
                Replace with an infographic showing common dandruff symptoms
              </p>
              <p className="text-xs text-muted-foreground/80">
                Alt: Illustration showing scalp flaking, itching, and greasy patches caused by
                dandruff
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
      title: "Malassezia Yeast Overgrowth",
      desc: "An overgrowth of Malassezia, a naturally occurring yeast on the scalp, is one of the most common causes of dandruff. The yeast feeds on scalp oils and produces irritants that accelerate skin shedding.",
    },
    {
      title: "Excess Oil Production",
      desc: "Overactive sebaceous glands produce excess oil (sebum) on the scalp. This oily environment allows Malassezia yeast to thrive, leading to inflammation and flaking.",
    },
    {
      title: "Dry Skin",
      desc: "Dry skin can cause small, white flakes to appear on the scalp. This type of dandruff is often worse in cold weather or when the air is dry, and is usually less oily than yeast-related dandruff.",
    },
    {
      title: "Seborrheic Dermatitis",
      desc: "A chronic inflammatory form of dandruff that causes red, greasy, scaly patches. It commonly affects the scalp, face, eyebrows, ears, and chest. It requires targeted medical treatment.",
    },
    {
      title: "Infrequent Shampooing",
      desc: "Not washing hair often enough allows oils and dead skin cells to accumulate on the scalp, creating an environment conducive to dandruff. Regular cleansing helps prevent buildup.",
    },
    {
      title: "Sensitivity to Hair Products",
      desc: "Some people develop contact dermatitis from certain hair care products, leading to a red, itchy, flaky scalp. Ingredients like certain fragrances or preservatives can be triggers.",
    },
    {
      title: "Stress",
      desc: "Stress can weaken the immune system and increase sebum production, both of which can worsen dandruff. Managing stress is an important part of controlling flare-ups.",
    },
    {
      title: "Dietary Factors",
      desc: "A diet low in zinc, B vitamins, and healthy fats may contribute to dandruff. High-sugar and high-fat diets can increase oil production and promote yeast growth on the scalp.",
    },
    {
      title: "Weather Changes",
      desc: "Cold, dry weather and indoor heating can dry out the scalp and worsen dandruff. Conversely, some people experience improvement in warmer, sunnier months due to UV exposure.",
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
            What Causes Dandruff?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Dandruff can be caused by a combination of factors. Understanding the underlying cause
            is key to effective treatment.
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
      title: "Dry Scalp Dandruff",
      desc: "Characterised by small, dry, white flakes that shed easily. The scalp may feel tight and itchy. This type is more common in winter and is often caused by dry air or harsh shampoos.",
    },
    {
      title: "Oily Scalp Dandruff",
      desc: "Produces larger, yellowish, greasy flakes that stick to the scalp and hair. It is caused by excess sebum production and Malassezia yeast overgrowth. This is the most common form of dandruff.",
    },
    {
      title: "Seborrheic Dermatitis",
      desc: "A more severe, chronic form of dandruff with red, inflamed, greasy patches covered with white or yellow scales. It can affect the scalp, face, eyebrows, ears, and chest.",
    },
    {
      title: "Contact Dermatitis",
      desc: "An allergic or irritant reaction to hair products such as shampoos, conditioners, dyes, or styling products. It causes redness, itching, and flaking that resolves when the trigger is removed.",
    },
    {
      title: "Fungal Dandruff",
      desc: "Caused by an overgrowth of Malassezia yeast. This type typically presents with itching and greasy flakes. Antifungal treatments are effective in controlling this form of dandruff.",
    },
    {
      title: "Psoriasis-Related Dandruff",
      desc: "Scalp psoriasis can mimic dandruff with thick, silvery-white scales on red patches. It is an autoimmune condition, not true dandruff, and requires different treatment. A dermatologist can distinguish between them.",
    },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Types of Dandruff
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Different Types of Dandruff
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Dandruff can present in several forms. Identifying the specific type helps guide
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
              How We Diagnose Dandruff
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                At {CLINIC_NAME}, we diagnose dandruff through a thorough clinical examination of
                your scalp. In most cases, the appearance and pattern of flaking is enough to
                determine the type and cause of dandruff.
              </p>
              <p>
                We begin by reviewing your medical history, including any history of skin conditions
                like eczema or psoriasis, your hair care routine, products you use, and any triggers
                you may have noticed. This helps us understand what might be contributing to your
                dandruff.
              </p>
              <p>
                A detailed scalp examination allows us to assess the type of flakes, the extent of
                scaling, and whether there are signs of inflammation, redness, or greasiness. We
                also check for involvement of other areas like the face, eyebrows, and ears, which
                may indicate seborrheic dermatitis.
              </p>
              <p>
                In cases where the diagnosis is unclear, or if we suspect a fungal infection or
                scalp psoriasis, we may recommend a scalp scraping or biopsy for laboratory
                analysis. This ensures an accurate diagnosis and appropriate treatment.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "Comprehensive medical and hair care history review",
                "Detailed scalp examination for flake type and pattern",
                "Assessment of associated skin conditions like seborrheic dermatitis",
                "Scalp scraping or biopsy only when necessary",
                "Accurate diagnosis before treatment begins",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-secondary/40">
            {/* IMAGE PLACEHOLDER: Dermatologist scalp consultation */}
            <div className="flex aspect-[4/3] items-center justify-center p-8">
              <div className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <Stethoscope className="h-8 w-8" />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">Scalp Consultation</p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Replace with a photo of a dermatologist examining a patient's scalp
                </p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Alt: Dermatologist examining a patient's scalp at Armoor Skin & Hair Clinic
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
            Dandruff Treatments Available in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We offer a comprehensive range of evidence-based treatments to control dandruff and
            maintain a healthy scalp.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Medicated Anti-Dandruff Shampoos",
              items: [
                "Ketoconazole shampoo to control fungal overgrowth",
                "Zinc pyrithione shampoo for mild to moderate dandruff",
                "Selenium sulphide shampoo for stubborn cases",
                "Salicylic acid shampoo to remove scales and flakes",
              ],
            },
            {
              title: "Scalp Treatments & Lotions",
              items: [
                "Prescription topical corticosteroids for inflammation",
                "Antifungal scalp lotions for persistent cases",
                "Coal tar preparations for thick scaling",
                "Calcineurin inhibitors for sensitive scalp areas",
              ],
            },
            {
              title: "Seborrheic Dermatitis Management",
              items: [
                "Combination therapy for scalp and facial involvement",
                "Anti-inflammatory and antifungal medications",
                "Gentle cleansing and moisturising routines",
                "Long-term maintenance to prevent recurrence",
              ],
            },
            {
              title: "Hair Care Routine Guidance",
              items: [
                "Recommendation of suitable shampooing frequency",
                "Advice on choosing the right hair products",
                "Techniques for proper scalp cleansing",
                "Tips to avoid common irritants and triggers",
              ],
            },
            {
              title: "Treatment of Associated Conditions",
              items: [
                "Management of scalp psoriasis if present",
                "Treatment of associated fungal infections",
                "Care for eczema affecting the scalp",
                "Integrated approach for related skin conditions",
              ],
            },
            {
              title: "Long-Term Scalp Health Maintenance",
              items: [
                "Personalised maintenance treatment plans",
                "Regular follow-up to monitor progress",
                "Adjustment of treatment based on response",
                "Preventive strategies to reduce recurrence",
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
      desc: `Led by ${DOCTOR_NAME}, ${QUALIFICATION}, with extensive experience in diagnosing and treating all types of dandruff and scalp conditions — from mild flaking to seborrheic dermatitis.`,
    },
    {
      icon: Microscope,
      title: "Accurate Diagnosis",
      desc: "We identify the root cause of your dandruff — whether it is fungal overgrowth, dry skin, seborrheic dermatitis, or product sensitivity — for targeted treatment.",
    },
    {
      icon: ShieldCheck,
      title: "Prescription-Grade Care",
      desc: "We provide prescription-grade medicated shampoos, scalp treatments, and lotions that are more effective than over-the-counter products for lasting relief.",
    },
    {
      icon: Sparkles,
      title: "Long-Term Scalp Health",
      desc: "Beyond treating symptoms, we guide you on maintaining a healthy scalp with personalised advice on hair care routines, products, and lifestyle adjustments.",
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
            Why {CLINIC_NAME} for Dandruff Treatment?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We combine medical expertise with genuine care to help you achieve a healthy, flake-free
            scalp.
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
      title: "Scalp Assessment",
      desc: `${DOCTOR_NAME} examines your scalp, discusses your symptoms and hair care routine, and identifies the underlying cause of your dandruff.`,
    },
    {
      step: "03",
      title: "Personalised Treatment Plan",
      desc: "A customised treatment plan is created based on your dandruff type and severity — combining medicated shampoos, scalp treatments, and hair care guidance.",
    },
    {
      step: "04",
      title: "Follow-up & Maintenance",
      desc: "Regular follow-up visits to assess response, adjust treatment as needed, and establish a long-term scalp care routine to prevent recurrence.",
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
            From your first visit to long-term scalp health — here is what you can expect.
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
      icon: Droplets,
      title: "Wash Hair Regularly",
      desc: "Shampoo your hair regularly to prevent oil and dead skin buildup. Use a gentle, pH-balanced shampoo. Avoid overwashing as it can dry out the scalp.",
    },
    {
      icon: Wind,
      title: "Use Medicated Shampoo Correctly",
      desc: "Apply medicated shampoo directly to the scalp, not just the hair. Leave it on for 3-5 minutes before rinsing to allow the active ingredients to work effectively.",
    },
    {
      icon: Sun,
      title: "Get Moderate Sun Exposure",
      desc: "Moderate sun exposure may help dandruff as UV light can reduce yeast activity. However, avoid excessive sun exposure and always protect your skin.",
    },
    {
      icon: Sparkles,
      title: "Manage Stress Levels",
      desc: "Stress can worsen dandruff by increasing oil production and weakening immunity. Incorporate relaxation techniques like meditation or yoga into your routine.",
    },
    {
      icon: Scissors,
      title: "Avoid Scratching",
      desc: "Scratching the scalp can damage hair follicles and worsen inflammation. If your scalp itches, use a medicated treatment rather than scratching.",
    },
    {
      icon: ShieldCheck,
      title: "Choose the Right Products",
      desc: "Avoid harsh hair products containing alcohol or strong fragrances. Use gentle, sulphate-free shampoos and conditioners suitable for your scalp type.",
    },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Hair Care Tips
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Tips for Managing Dandruff
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Small changes in your hair care routine can make a significant difference in controlling
            dandruff and keeping your scalp healthy.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/5 text-primary">
                <tip.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">{tip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tip.desc}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          {/* IMAGE PLACEHOLDER: Scalp care routine illustration */}
          <div className="flex aspect-[2/1] items-center justify-center rounded-2xl bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <p className="mt-3 text-sm font-medium text-muted-foreground">Scalp Care Routine</p>
              <p className="mt-1 text-xs text-muted-foreground/80">
                Replace with an image showing healthy scalp care routine
              </p>
              <p className="text-xs text-muted-foreground/80">
                Alt: Illustration of daily scalp care routine for managing dandruff
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
      q: "Can dandruff be cured permanently?",
      a: "While dandruff may recur, it can be effectively controlled with proper treatment and a regular scalp care routine. Long-term management with medicated shampoos and good hair hygiene helps keep symptoms at bay.",
    },
    {
      q: "Is dandruff contagious?",
      a: "No, dandruff is not contagious. It is a scalp condition caused by yeast overgrowth, dry skin, or seborrheic dermatitis. It cannot spread from person to person through contact or sharing items.",
    },
    {
      q: "How often should I use medicated shampoo?",
      a: "Frequency depends on the severity. Typically 2–3 times per week initially, reducing to once weekly for maintenance as symptoms improve. Your dermatologist will advise the best schedule for your condition.",
    },
    {
      q: "Does dandruff cause hair loss?",
      a: "Dandruff itself does not directly cause permanent hair loss, but severe itching and scratching can damage hair follicles and lead to temporary hair shedding. Treating dandruff helps protect your scalp and hair health.",
    },
    {
      q: "What is the difference between dandruff and dry scalp?",
      a: "Dry scalp produces small, dry white flakes and feels tight or itchy, often worsened by cold weather. Dandruff flakes are larger, oilier, and yellowish, caused by excess oil and yeast overgrowth. A dermatologist can help distinguish between them.",
    },
    {
      q: "Can stress worsen dandruff?",
      a: "Yes, stress can worsen dandruff by increasing sebum production and weakening the immune system, making the scalp more susceptible to yeast overgrowth. Managing stress levels can help reduce flare-ups.",
    },
    {
      q: "Is dandruff more common in certain seasons?",
      a: "Yes, dandruff often worsens in cold, dry winter months because indoor heating dries out the scalp, and reduced sun exposure may increase yeast activity. Symptoms often improve in warmer, sunnier weather.",
    },
    {
      q: "Can diet affect dandruff?",
      a: "A diet rich in zinc, B vitamins, and omega-3 fatty acids may help reduce dandruff. Foods high in sugar and unhealthy fats can increase oil production and worsen symptoms. A balanced diet supports overall scalp health.",
    },
    {
      q: "Can dandruff affect other parts of the body?",
      a: "Yes, seborrheic dermatitis can also affect the face, eyebrows, sides of the nose, ears, chest, and back. These areas may become red, greasy, and flaky. Treatment of scalp dandruff often improves these areas too.",
    },
    {
      q: "How much does dandruff treatment cost in Armoor?",
      a: `The cost of dandruff treatment at ${CLINIC_NAME} depends on the severity and treatment approach required. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
    },
    {
      q: "Can I use home remedies for dandruff?",
      a: "While some home remedies may provide temporary relief, they are often ineffective for moderate to severe dandruff. Medicated treatments prescribed by a dermatologist provide more reliable and lasting results.",
    },
    {
      q: "What is the best shampoo for dandruff?",
      a: "The best shampoo depends on the type and cause of your dandruff. Options include ketoconazole, zinc pyrithione, selenium sulphide, and salicylic acid shampoos. Your dermatologist can recommend the most suitable one for you.",
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
            Common questions about dandruff treatment at our clinic in Armoor.
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
      text: "I had dandruff for years and tried many over-the-counter shampoos with no lasting relief. Dr. Raghavendhra examined my scalp and prescribed a medicated shampoo and scalp lotion. Within two weeks, the flaking stopped and my scalp felt normal again. Highly recommended for anyone struggling with dandruff.",
      rating: 5,
    },
    {
      name: "Kavitha",
      location: "Nizamabad",
      text: "My dandruff was so bad I could not wear dark clothes. The white flakes were embarrassing and my scalp was constantly itchy. The doctor identified it as seborrheic dermatitis and started me on a treatment plan. My scalp is now clear and healthy. I am so grateful.",
      rating: 5,
    },
    {
      name: "Ravi",
      location: "Balkonda",
      text: "I thought my dandruff was just due to dry skin, but the doctor explained it was caused by yeast overgrowth. The prescribed treatment worked much better than anything I had tried before. The itching stopped within a few days, and the flakes are completely gone now.",
      rating: 5,
    },
    {
      name: "Laxmi",
      location: "Kamareddy",
      text: "My son had a red, flaky scalp that we thought was severe dandruff. Dr. Raghavendhra diagnosed it as seborrheic dermatitis and prescribed the right treatment. His scalp cleared up beautifully. The doctor was very patient and explained everything clearly.",
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
            Real experiences from patients who have undergone dandruff treatment at our clinic.
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
            dandruff treatment. Our clinic is easily accessible and welcomes patients from all
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
    { name: "Psoriasis Treatment", to: "/treatments/psoriasis-treatment-armoor" },
    { name: "Eczema Treatment", to: "/treatments/eczema-treatment-armoor" },
    {
      name: "Fungal Infection Treatment",
      to: "/treatments/$slug",
      params: { slug: "fungal-infection-treatment" },
    },
    { name: "Vitiligo Treatment", to: "/treatments/$slug", params: { slug: "vitiligo-treatment" } },
    {
      name: "Pigmentation Treatment",
      to: "/treatments/$slug",
      params: { slug: "pigmentation-treatment" },
    },
    {
      name: "Skin Allergy Treatment",
      to: "/treatments/$slug",
      params: { slug: "skin-allergy-treatment" },
    },
    { name: "Nail Disorders", to: "/treatments/$slug", params: { slug: "nail-disorders" } },
    { name: "Wart Removal", to: "/treatments/$slug", params: { slug: "wart-removal" } },
    { name: "Mole Removal", to: "/treatments/$slug", params: { slug: "mole-removal" } },
  ].filter((r) => r.name !== "Dandruff Treatment");

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
          {related.slice(0, 6).map((treatment) => (
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
          Ready to Get Rid of Dandruff?
        </h2>
        <p className="mt-3 text-base text-white/80">
          Book a consultation with {DOCTOR_NAME}, {QUALIFICATION}, at {CLINIC_NAME} in Armoor. Take
          the first step towards a healthy, flake-free scalp.
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
