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
} from "../lib/clinic-data";

export const Route = createFileRoute("/treatments/acne-treatment-armoor")({
  head: () => ({
    meta: [
      {
        title: `Acne Treatment in Armoor | Pimple & Scar Removal | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        name: "description",
        content: `Expert acne treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}. Advanced solutions for pimples, cystic acne, acne scars, and hormonal breakouts at ${CLINIC_NAME}. Book your consultation today.`,
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: `Acne Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        property: "og:description",
        content: `Effective acne and pimple treatment in Armoor by Dr. Raghavendhra MD, DVL. Advanced therapies for acne scars, cystic acne, and hormonal breakouts at Armoor Skin & Hair Clinic.`,
      },
      { property: "og:url", content: `${SITE_URL}/treatments/acne-treatment-armoor` },
      { property: "og:type", content: "website" },
      {
        name: "twitter:title",
        content: `Acne Treatment in Armoor | ${CLINIC_NAME}`,
      },
      {
        name: "twitter:description",
        content: `Expert acne treatment in Armoor by Dr. Raghavendhra — personalised care for clear, healthy skin.`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/treatments/acne-treatment-armoor` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": `${SITE_URL}/treatments/acne-treatment-armoor#clinic`,
              name: CLINIC_NAME,
              description: `Acne treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}.`,
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
              "@id": `${SITE_URL}/treatments/acne-treatment-armoor#business`,
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
              "@id": `${SITE_URL}/treatments/acne-treatment-armoor#breadcrumbs`,
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
                  name: "Acne Treatment in Armoor",
                  item: `${SITE_URL}/treatments/acne-treatment-armoor`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/treatments/acne-treatment-armoor#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Can acne be cured permanently?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "While acne may recur in some individuals, it can be effectively controlled with proper treatment. Most patients achieve long-term clearance with a combination of medical therapy, good skincare habits, and maintenance treatments as needed.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does acne treatment take to show results?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most patients notice visible improvement within 4–6 weeks of starting treatment. Complete clearance typically takes 3–6 months depending on the severity of your acne. Consistency with the prescribed regimen is key to achieving the best results.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can acne scars be removed completely?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "While complete removal may not always be possible, modern treatments like microneedling, chemical peels, and laser therapy can significantly reduce the appearance of acne scars by up to 70–80%. Early treatment of active acne also helps prevent new scars.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is acne treatment painful?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most treatments are well-tolerated. Chemical peels may cause mild tingling, and microneedling is performed under numbing cream for your comfort. Oral medications involve no discomfort. Your dermatologist will ensure you are comfortable throughout the process.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the best treatment for cystic acne?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cystic acne requires professional medical treatment. Options include oral antibiotics, hormonal therapy, isotretinoin, intralesional steroid injections for individual cysts, and drainage of large cysts. A dermatologist will determine the best approach based on your condition.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is acne caused by diet?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Diet can influence acne in some people. High-glycemic foods like refined sugars and carbohydrates, as well as dairy products, may trigger breakouts in susceptible individuals. A balanced diet with low-glycemic foods may help improve acne.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does acne treatment cost in Armoor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `The cost of acne treatment at ${CLINIC_NAME} depends on the type and duration of treatment required. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
                  },
                },
                {
                  "@type": "Question",
                  name: "Can hormonal acne be treated?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, hormonal acne responds well to targeted therapy. Treatment may include oral contraceptive pills, spironolactone, or other hormonal modulators, combined with topical medications. A dermatologist can assess your hormonal profile and recommend appropriate treatment.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does popping pimples make acne worse?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, popping or picking pimples can push bacteria deeper into the skin, causing more inflammation, increasing the risk of scarring, and delaying healing. It is best to leave extractions to a trained dermatologist.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What should I avoid during acne treatment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Avoid harsh scrubs, picking or popping pimples, excessive sun exposure without protection, heavy oil-based skincare and makeup products, and frequent touching of the face. Your dermatologist will provide complete guidance for your specific treatment plan.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can adults get acne?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, adult acne is very common and affects many people beyond their teenage years. It is often linked to hormonal changes, stress, medications, or underlying medical conditions. Adult acne can be effectively treated with the right approach.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is isotretinoin safe for acne treatment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `Isotretinoin is a highly effective medication for severe cystic acne that has not responded to other treatments. It is used under strict medical supervision at ${CLINIC_NAME} with regular monitoring of blood parameters. Your dermatologist will discuss all benefits and risks before starting treatment.`,
                  },
                },
              ],
            },
            {
              "@type": "MedicalProcedure",
              name: "Acne Treatment in Armoor",
              description:
                "Comprehensive acne treatment services including topical and oral medications, chemical peels, microneedling, laser therapy, and personalised skincare plans.",
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
  component: AcneTreatmentArmoorPage,
});

function AcneTreatmentArmoorPage() {
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
          <span className="text-white/90">Acne Treatment in Armoor</span>
        </nav>
        {/* IMAGE PLACEHOLDER: Hero image for acne treatment page */}
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 text-gold" />
              Expert Acne Care in Armoor
            </div>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Acne Treatment in Armoor
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Effective acne and pimple treatment at {CLINIC_NAME}. Led by {DOCTOR_NAME},{" "}
              {QUALIFICATION} — Armoor's trusted dermatologist for personalised acne care, scar
              treatment, and lasting skin clarity.
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
                  "Chemical peels, microneedling & laser therapy",
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
              Understanding Acne
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              What is Acne?
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Acne is a common skin condition that occurs when hair follicles become clogged with
                oil (sebum) and dead skin cells. It manifests as pimples, blackheads, whiteheads,
                and deeper lumps like nodules and cysts. At {CLINIC_NAME}, we treat the root causes
                of acne — excess oil production, bacteria, inflammation, and clogged pores — for
                lasting skin clarity.
              </p>
              <p>
                Acne develops when sebaceous glands produce excess sebum, which mixes with dead skin
                cells and blocks the follicle opening. The bacterium Cutibacterium acnes (C. acnes)
                thrives in this environment, triggering inflammation and the formation of red,
                swollen pimples. Acne most commonly affects the face, chest, back, and shoulders.
              </p>
              <p>
                Acne is not just a teenage problem. Many adults, particularly women, experience acne
                well into their 30s, 40s, and beyond. Hormonal fluctuations, stress, diet, and
                certain medications can all trigger or worsen breakouts at any age. Effective
                treatment begins with understanding what is driving your acne.
              </p>
              <p>
                A common misconception is that acne is caused by poor hygiene or eating greasy food.
                While diet can play a role in some individuals, acne is primarily a medical
                condition driven by hormones, genetics, and bacterial activity. Even people with
                meticulous skincare routines can experience acne. A dermatologist's evaluation is
                essential for effective treatment.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/treatments/acne/acne-1.webp"
              alt="Acne breakouts on facial skin including whiteheads, blackheads, and inflamed pimples"
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
      title: "Whiteheads",
      desc: "Small, flesh-coloured or white bumps that form when pores are completely blocked with oil and dead skin. They remain closed at the surface and appear as tiny white spots on the skin.",
    },
    {
      title: "Blackheads",
      desc: "Open clogged pores that turn dark due to oxidation of the trapped oil and skin cells on exposure to air. Blackheads are not dirt and can be effectively treated with topical retinoids.",
    },
    {
      title: "Papules",
      desc: "Small, red, tender bumps that indicate inflammation in the hair follicle. Papules are a sign of active infection and should not be picked or squeezed as they can worsen inflammation.",
    },
    {
      title: "Pustules",
      desc: "Red bumps with a white or yellow pus-filled centre. These are commonly called pimples or zits and are caused by bacterial activity and inflammation within the blocked pore.",
    },
    {
      title: "Nodules",
      desc: "Large, deep, painful lumps beneath the skin surface. Nodular acne is a severe form that requires professional medical treatment and does not respond to over-the-counter products.",
    },
    {
      title: "Cysts",
      desc: "Deep, pus-filled, painful lesions that can cause scarring. Cystic acne is the most severe form and requires prompt dermatological intervention including oral medications and drainage.",
    },
    {
      title: "Acne Scars",
      desc: "Permanent textural changes in the skin that result from severe or poorly treated acne. Scars can be atrophic (depressed) or hypertrophic (raised) and require specialised treatments.",
    },
    {
      title: "Post-Acne Pigmentation",
      desc: "Dark spots or red marks that remain after acne lesions heal. This pigmentation can persist for months but responds well to treatments like chemical peels and topical brightening agents.",
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
            Common Symptoms of Acne
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Acne symptoms range from mild non-inflammatory comedones to severe painful cysts.
            Recognising the type and severity helps in choosing the right treatment.
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
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            <img
              src="/images/treatments/acne/acne-2.webp"
              alt="Different types of acne lesions from whiteheads to cystic acne on facial skin"
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
      title: "Excess Oil Production",
      desc: "Overactive sebaceous glands produce excessive sebum, the natural oil that moisturises the skin. When too much oil is produced, it can combine with dead skin cells to clog hair follicles and trigger acne.",
    },
    {
      title: "Clogged Hair Follicles",
      desc: "Dead skin cells that are not shed properly can accumulate in hair follicles and mix with sebum to form a plug. This creates an ideal environment for bacteria to multiply and cause inflammation.",
    },
    {
      title: "Bacterial Overgrowth",
      desc: "Cutibacterium acnes (C. acnes) bacteria naturally live on the skin. When follicles become blocked, these bacteria multiply rapidly, triggering inflammation and the formation of red, pus-filled pimples.",
    },
    {
      title: "Hormonal Fluctuations",
      desc: "Androgens, hormones that increase during puberty, menstrual cycles, pregnancy, and conditions like PCOS, stimulate sebaceous glands to produce more oil. This is why hormonal acne is common in teenagers and women.",
    },
    {
      title: "Genetics",
      desc: "A family history of acne increases your likelihood of developing the condition. Genetic factors influence how your sebaceous glands function, how your skin sheds cells, and how your body responds to inflammation.",
    },
    {
      title: "Dietary Triggers",
      desc: "High-glycemic foods such as refined sugars, white bread, and sugary drinks can spike insulin levels, leading to increased oil production. Dairy products may also trigger breakouts in some individuals.",
    },
    {
      title: "Stress",
      desc: "Stress triggers the release of cortisol and other hormones that increase sebum production and inflammation. Stress can also slow wound healing, making acne lesions take longer to resolve.",
    },
    {
      title: "Certain Medications",
      desc: "Some medications can cause or worsen acne, including corticosteroids, lithium, certain anticonvulsants, and hormone-containing medications. Always inform your dermatologist about all medications you are taking.",
    },
    {
      title: "Skincare & Cosmetic Products",
      desc: "Oil-based, heavy, or comedogenic skincare and makeup products can clog pores and contribute to acne breakouts. Using non-comedogenic, oil-free products is recommended for acne-prone skin.",
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
            What Causes Acne?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Acne is caused by a combination of factors. Understanding the underlying cause is key to
            effective treatment and prevention.
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
      title: "Whiteheads (Closed Comedones)",
      desc: "Small, flesh-coloured or white bumps that form when a pore is completely blocked by oil and dead skin. The surface remains closed, giving them a white appearance. They are non-inflammatory but can develop into inflamed acne.",
    },
    {
      title: "Blackheads (Open Comedones)",
      desc: "Open clogged pores where the trapped oil and skin cells are exposed to air and oxidise, turning dark. Blackheads are not dirt and can be effectively treated with topical retinoids and gentle exfoliation.",
    },
    {
      title: "Papules",
      desc: "Small, red, inflamed bumps that are tender to the touch. Papules indicate that the follicle wall has ruptured, causing inflammation. They do not contain pus and should not be squeezed.",
    },
    {
      title: "Pustules",
      desc: "Red, inflamed bumps with a visible white or yellow pus-filled centre. Pustules are the classic pimple and are caused by the immune system fighting bacterial overgrowth in the blocked follicle.",
    },
    {
      title: "Nodules",
      desc: "Large, deep, firm, and painful lumps beneath the skin surface. Nodular acne does not have a visible head and can persist for weeks. It carries a high risk of scarring and requires oral medications.",
    },
    {
      title: "Cystic Acne",
      desc: "The most severe form of acne, characterised by deep, soft, pus-filled lesions that are extremely painful. Cystic acne often leads to significant scarring and requires aggressive treatment including isotretinoin.",
    },
    {
      title: "Hormonal Acne",
      desc: "Acne triggered by hormonal fluctuations, typically appearing along the jawline, chin, and lower cheeks. It is common in adult women and often presents as deep, tender cysts that appear cyclically.",
    },
    {
      title: "Acne Conglobata",
      desc: "A rare but severe form of inflammatory acne characterised by large, interconnected nodules and abscesses that can cause extensive scarring. It requires immediate and intensive dermatological treatment.",
    },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Types of Acne
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Different Types of Acne
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Acne can present in various forms. Identifying the specific type helps guide treatment
            decisions and improves outcomes.
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
              How We Diagnose Acne
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                At {CLINIC_NAME}, we diagnose acne through a thorough clinical examination of your
                skin. The appearance, type, and distribution of acne lesions are usually sufficient
                to determine the type and severity of your condition.
              </p>
              <p>
                We begin by reviewing your medical history, including any history of hormonal
                disorders like PCOS, medications you are taking, your skincare routine, dietary
                habits, and any previous acne treatments you may have tried. This comprehensive
                history helps us identify contributing factors.
              </p>
              <p>
                A detailed skin examination allows us to grade the severity of acne, identify the
                types of lesions present (comedones, papules, pustules, nodules, cysts), and assess
                for scarring and pigmentation. We also evaluate your skin type and oil production
                levels to tailor treatment appropriately.
              </p>
              <p>
                In cases where hormonal acne is suspected, we may recommend blood tests to evaluate
                hormone levels, including androgens. This helps us determine whether hormonal
                therapy would be beneficial. We also assess for conditions like PCOS that may
                underlie persistent acne.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "Comprehensive medical and skincare history review",
                "Detailed skin examination and acne severity grading",
                "Identification of acne type and lesion classification",
                "Assessment of scarring, pigmentation, and skin type",
                "Hormonal evaluation when indicated",
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
              src="/images/treatments/acne/acne-3.webp"
              alt="Dermatologist examining a patient's facial skin for acne"
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
            Acne Treatments Available in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We offer a comprehensive range of evidence-based treatments for all types of acne — from
            mild comedones to severe cystic acne.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Topical Retinoids & Medications",
              items: [
                "Tretinoin, adapalene, and tazarotene for comedonal acne",
                "Benzoyl peroxide to reduce bacteria and inflammation",
                "Topical antibiotics like clindamycin for active breakouts",
                "Topical dapsone for inflammatory acne in adults",
              ],
            },
            {
              title: "Oral Medications",
              items: [
                "Oral antibiotics for moderate to severe inflammatory acne",
                "Isotretinoin for severe cystic and resistant acne",
                "Hormonal therapy including oral contraceptives and spironolactone",
                "Low-dose antibiotics for maintenance therapy",
              ],
            },
            {
              title: "Chemical Peels",
              items: [
                "Salicylic acid peels for active acne and oil control",
                "Glycolic acid peels for exfoliation and pigmentation",
                "Lactic acid peels for sensitive skin types",
                "Jessner's peel for stubborn comedonal acne",
              ],
            },
            {
              title: "Microneedling for Scars",
              items: [
                "Microneedling with derma roller or pen device",
                "Platelet-rich plasma (PRP) combined with microneedling",
                "Radiofrequency microneedling for deep scars",
                "Multiple sessions for optimal scar reduction",
              ],
            },
            {
              title: "Laser & Light Therapies",
              items: [
                "Fractional CO2 laser for acne scar resurfacing",
                "ND:YAG laser for active acne and inflammation",
                "Blue light therapy for bacterial reduction",
                "IPL for post-acne pigmentation and redness",
              ],
            },
            {
              title: "Long-Term Skin Health Maintenance",
              items: [
                "Personalised maintenance treatment plans",
                "Regular follow-up to monitor progress",
                "Adjustment of treatment based on skin response",
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
      desc: `Led by ${DOCTOR_NAME}, ${QUALIFICATION}, with extensive experience in diagnosing and treating all types of acne — from mild comedonal acne to severe cystic and hormonal acne.`,
    },
    {
      icon: Microscope,
      title: "Accurate Diagnosis",
      desc: "We identify the root cause of your acne — whether it is hormonal imbalance, bacterial overgrowth, clogged pores, or dietary triggers — for targeted and effective treatment.",
    },
    {
      icon: ShieldCheck,
      title: "Advanced Treatment Options",
      desc: "We offer prescription-grade medications, medical-grade chemical peels, microneedling, laser therapy, and isotretinoin — all under expert supervision for safe results.",
    },
    {
      icon: Sparkles,
      title: "Long-Term Skin Health",
      desc: "Beyond treating active acne, we guide you on maintaining clear skin with personalised advice on skincare routines, products, diet, and lifestyle adjustments.",
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
            Why {CLINIC_NAME} for Acne Treatment?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We combine medical expertise with genuine care to help you achieve clear, healthy skin.
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
      desc: `${DOCTOR_NAME} examines your skin, discusses your acne history and skincare routine, and identifies the underlying cause of your breakouts.`,
    },
    {
      step: "03",
      title: "Personalised Treatment Plan",
      desc: "A customised treatment plan is created based on your acne type and severity — combining medications, in-clinic procedures, and skincare guidance.",
    },
    {
      step: "04",
      title: "Follow-up & Maintenance",
      desc: "Regular follow-up visits to assess response, adjust treatment as needed, and establish a long-term skincare routine to prevent recurrence.",
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
            From your first visit to long-term skin health — here is what you can expect.
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
      title: "Cleanse Gently Twice Daily",
      desc: "Wash your face with a gentle, non-comedogenic cleanser in the morning and evening. Avoid harsh scrubs that can irritate the skin and worsen inflammation.",
    },
    {
      icon: Wind,
      title: "Follow a Consistent Skincare Routine",
      desc: "Use a routine that suits your skin type: cleanse, treat (with prescribed medication), moisturise, and protect with sunscreen. Consistency is key to seeing results.",
    },
    {
      icon: Sun,
      title: "Protect Your Skin from the Sun",
      desc: "Sun exposure can darken acne spots and cause pigmentation. Use an oil-free, non-comedogenic sunscreen with SPF 30+ daily, even on cloudy days.",
    },
    {
      icon: Sparkles,
      title: "Manage Stress Levels",
      desc: "Stress can trigger hormonal changes that worsen acne. Incorporate relaxation techniques like meditation, yoga, or deep breathing into your daily routine.",
    },
    {
      icon: Scissors,
      title: "Avoid Picking or Popping Pimples",
      desc: "Picking at acne lesions pushes bacteria deeper, increases inflammation, delays healing, and causes permanent scarring. Leave extractions to your dermatologist.",
    },
    {
      icon: ShieldCheck,
      title: "Moisturise Daily",
      desc: "Even oily, acne-prone skin needs moisturiser. Use a lightweight, oil-free, non-comedogenic moisturiser to keep the skin barrier healthy and prevent irritation from medications.",
    },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Skincare Tips
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Tips for Managing Acne
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Small changes in your skincare routine can make a significant difference in controlling
            acne and keeping your skin clear.
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
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            <img
              src="/images/treatments/acne/acne-4.webp"
              alt="Daily skincare routine for managing acne-prone skin"
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
      q: "Can acne be cured permanently?",
      a: "While acne may recur in some individuals, it can be effectively controlled with proper treatment. Most patients achieve long-term clearance with a combination of medical therapy, good skincare habits, and maintenance treatments as needed.",
    },
    {
      q: "How long does acne treatment take to show results?",
      a: "Most patients notice visible improvement within 4–6 weeks of starting treatment. Complete clearance typically takes 3–6 months depending on the severity of your acne. Consistency with the prescribed regimen is key to achieving the best results.",
    },
    {
      q: "Can acne scars be removed completely?",
      a: "While complete removal may not always be possible, modern treatments like microneedling, chemical peels, and laser therapy can significantly reduce the appearance of acne scars by up to 70–80%. Early treatment of active acne also helps prevent new scars.",
    },
    {
      q: "Is acne treatment painful?",
      a: "Most treatments are well-tolerated. Chemical peels may cause mild tingling, and microneedling is performed under numbing cream for your comfort. Oral medications involve no discomfort.",
    },
    {
      q: "What is the best treatment for cystic acne?",
      a: "Cystic acne requires professional medical treatment. Options include oral antibiotics, hormonal therapy, isotretinoin, intralesional steroid injections for individual cysts, and drainage of large cysts. A dermatologist will determine the best approach.",
    },
    {
      q: "Is acne caused by diet?",
      a: "Diet can influence acne in some people. High-glycemic foods like refined sugars and carbohydrates, as well as dairy products, may trigger breakouts in susceptible individuals. A balanced diet with low-glycemic foods may help improve acne.",
    },
    {
      q: "How much does acne treatment cost in Armoor?",
      a: `The cost of acne treatment at ${CLINIC_NAME} depends on the type and duration of treatment required. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
    },
    {
      q: "Can hormonal acne be treated?",
      a: "Yes, hormonal acne responds well to targeted therapy. Treatment may include oral contraceptive pills, spironolactone, or other hormonal modulators, combined with topical medications. A dermatologist can assess your hormonal profile and recommend appropriate treatment.",
    },
    {
      q: "Does popping pimples make acne worse?",
      a: "Yes, popping or picking pimples can push bacteria deeper into the skin, causing more inflammation, increasing the risk of scarring, and delaying healing. It is best to leave extractions to a trained dermatologist.",
    },
    {
      q: "What should I avoid during acne treatment?",
      a: "Avoid harsh scrubs, picking or popping pimples, excessive sun exposure without protection, heavy oil-based skincare and makeup products, and frequent touching of the face. Your dermatologist will provide complete guidance.",
    },
    {
      q: "Can adults get acne?",
      a: "Yes, adult acne is very common and affects many people beyond their teenage years. It is often linked to hormonal changes, stress, medications, or underlying medical conditions. Adult acne can be effectively treated with the right approach.",
    },
    {
      q: "Is isotretinoin safe for acne treatment?",
      a: `Isotretinoin is a highly effective medication for severe cystic acne that has not responded to other treatments. It is used under strict medical supervision at ${CLINIC_NAME} with regular monitoring of blood parameters. Your dermatologist will discuss all benefits and risks before starting treatment.`,
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
            Common questions about acne treatment at our clinic in Armoor.
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
      name: "Reshma",
      location: "Armoor",
      text: "I struggled with acne for over 5 years and tried every product on the market. Dr. Raghavendhra diagnosed my condition as hormonal acne and put me on a combination of topical treatment and oral medication. Within 3 months, my skin cleared up significantly. I am so thankful for the personalised care I received.",
      rating: 5,
    },
    {
      name: "Sandeep",
      location: "Nizamabad",
      text: "I had severe cystic acne that left me with deep scars. The doctor recommended microneedling sessions along with medical treatment. After 4 sessions, my scars have faded remarkably and my active acne is under control. The clinic is very professional and the doctor explains everything in detail.",
      rating: 5,
    },
    {
      name: "Anjali",
      location: "Balkonda",
      text: "My daughter's acne was getting worse and she was losing confidence. Dr. Raghavendhra was very gentle with her and designed a treatment plan that suited her sensitive skin. The chemical peels and topical medications made a huge difference. Her skin is now clear and glowing.",
      rating: 5,
    },
    {
      name: "Mahesh",
      location: "Mortad",
      text: "I came to the clinic with persistent back acne that I had for years. The doctor prescribed a combination of medicated cleansers, topical treatments, and oral medication. The results have been excellent — my back is almost completely clear now. Highly recommend this clinic for acne treatment.",
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
            Real experiences from patients who have undergone acne treatment at our clinic.
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
    { name: "Nizamabad" },
    { name: "Mortad" },
    { name: "Bodhan" },
    { name: "Kamareddy" },
    { name: "Yellareddy" },
    { name: "Sadasivanagar" },
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
            Patients visit {CLINIC_NAME} from across Armoor and surrounding areas for expert acne
            treatment. Our clinic is easily accessible and welcomes patients from all nearby towns
            and villages.
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
    { name: "Hair Loss Treatment", to: "/treatments/hair-loss-treatment-armoor" },
    { name: "Psoriasis Treatment", to: "/treatments/psoriasis-treatment-armoor" },
    { name: "Eczema Treatment", to: "/treatments/eczema-treatment-armoor" },
    {
      name: "Fungal Infection Treatment",
      to: "/treatments/$slug",
      params: { slug: "fungal-infection-treatment" },
    },
    { name: "Dandruff Treatment", to: "/treatments/dandruff-treatment-armoor" },
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
  ].filter((r) => r.name !== "Acne Treatment");

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
    <section className="py-20" style={{ background: "var(--gradient-navy)" }}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Ready to Get Clear Skin?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Book a consultation with {DOCTOR_NAME}, {QUALIFICATION}, at {CLINIC_NAME} in Armoor. Take
          the first step towards healthy, glowing skin.
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
