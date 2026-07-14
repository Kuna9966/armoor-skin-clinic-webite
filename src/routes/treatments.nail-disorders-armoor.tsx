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

export const Route = createFileRoute("/treatments/nail-disorders-armoor")({
  head: () => ({
    meta: [
      {
        title: `Nail Disorders Treatment in Armoor | Fungal & Ingrown Nail | ${DOCTOR_NAME}`,
      },
      {
        name: "description",
        content: `Expert nail disorders treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}. Advanced care for fungal nail infections, ingrown toenails, brittle nails, and paronychia at ${CLINIC_NAME}. Book your consultation.`,
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: `Nail Disorders Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        property: "og:description",
        content: `Effective nail disorder treatment in Armoor by Dr. Raghavendhra MD, DVL. Personalised care for fungal nails, ingrown nails, brittle nails, and paronychia at Armoor Skin & Hair Clinic.`,
      },
      { property: "og:url", content: `${SITE_URL}/treatments/nail-disorders-armoor` },
      { property: "og:type", content: "website" },
      {
        name: "twitter:title",
        content: `Nail Disorders Treatment in Armoor | ${CLINIC_NAME}`,
      },
      {
        name: "twitter:description",
        content: `Expert nail disorders treatment in Armoor by Dr. Raghavendhra — personalised care for healthy, strong nails.`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/treatments/nail-disorders-armoor` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": `${SITE_URL}/treatments/nail-disorders-armoor#clinic`,
              name: CLINIC_NAME,
              description: `Nail disorders treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}.`,
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
              "@id": `${SITE_URL}/treatments/nail-disorders-armoor#business`,
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
              "@id": `${SITE_URL}/treatments/nail-disorders-armoor#breadcrumbs`,
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
                  name: "Nail Disorders Treatment in Armoor",
                  item: `${SITE_URL}/treatments/nail-disorders-armoor`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/treatments/nail-disorders-armoor#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How long does nail fungus treatment take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nail fungus treatment typically takes 3–6 months for fingernails and 6–12 months for toenails, as nails grow slowly and medication needs time to reach the infection site. Consistent treatment is essential for complete clearance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can brittle nails be treated?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, brittle nails can be improved by identifying the underlying cause. Treatment may include nutritional supplementation (biotin, iron), moisturizing treatments, avoiding harsh chemicals, and proper nail care routines prescribed by a dermatologist.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is nail fungus contagious?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, fungal nail infections are contagious. They can spread from person to person through direct contact or via contaminated surfaces like floors, towels, nail clippers, and shoes. Prompt treatment reduces the risk of spreading.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need to see a dermatologist for nail problems?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, a dermatologist can accurately diagnose nail conditions through clinical examination and lab tests. Many nail disorders look similar but require different treatments, so professional diagnosis is important for effective care.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can nail problems indicate other health issues?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, nail changes can be a sign of underlying health conditions such as thyroid disorders, anaemia, psoriasis, diabetes, nutritional deficiencies, and circulatory problems. A dermatologist can help identify these associations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are fungal nail infections painful?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fungal nail infections are not always painful in the early stages. As the infection progresses, the nail may become thick, causing discomfort when wearing shoes, or pressure pain on the nail bed. Treatment helps relieve pain by resolving the infection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can ingrown toenails be treated without surgery?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mild ingrown toenails can often be managed with conservative measures such as proper nail trimming, wearing appropriate footwear, warm soaks, and antibiotic ointments. However, recurrent or severe cases may require a minor in-clinic procedure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can nail psoriasis be treated?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, nail psoriasis can be treated with topical medications, corticosteroid injections, oral therapies, and laser treatment. Early treatment is more effective, and consistent care can significantly improve nail appearance and comfort.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I prevent nail infections?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To prevent nail infections, keep nails clean and dry, trim them straight across, avoid sharing nail clippers or towels, wear breathable footwear, change socks daily, and use antifungal powder in shoes. Avoid walking barefoot in public showers or pools.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does nail disorders treatment cost in Armoor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `The cost of nail disorders treatment at ${CLINIC_NAME} depends on the type of condition, severity, and treatment approach. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
                  },
                },
              ],
            },
            {
              "@type": "MedicalProcedure",
              name: "Nail Disorders Treatment in Armoor",
              description:
                "Comprehensive nail disorders treatment including antifungal therapy, ingrown nail care, paronychia management, and nail psoriasis treatment.",
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
  component: NailDisordersArmoorPage,
});

function NailDisordersArmoorPage() {
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
          <span className="text-white/90">Nail Disorders Treatment in Armoor</span>
        </nav>
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 text-gold" />
              Expert Nail Disorder Care in Armoor
            </div>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Nail Disorders Treatment in Armoor
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Expert nail disorders treatment at {CLINIC_NAME}. Led by {DOCTOR_NAME},{" "}
              {QUALIFICATION} — Armoor's trusted dermatologist for fungal nail infections, ingrown
              toenails, brittle nails, and paronychia.
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
                  "Comprehensive nail disorder diagnosis",
                  "Medical & cosmetic nail treatments",
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
              Understanding Nail Disorders
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              What Are Nail Disorders?
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Nail disorders are conditions that affect the appearance, strength, and health of
                fingernails and toenails. They can be caused by infections, injuries, underlying
                medical conditions, or environmental factors. Nail problems can range from mild
                cosmetic concerns to painful conditions that interfere with daily activities.
              </p>
              <p>
                Common nail disorders include fungal infections (onychomycosis), ingrown toenails,
                paronychia (bacterial infection around the nail), brittle nail syndrome, nail
                psoriasis, and nail discolouration. Each condition requires a specific approach to
                diagnosis and treatment.
              </p>
              <p>
                Your nails can also serve as a window to your overall health. Changes in nail
                colour, texture, shape, or growth rate may indicate underlying health issues such as
                thyroid disorders, anaemia, nutritional deficiencies, or autoimmune conditions. This
                is why professional evaluation by a dermatologist is important.
              </p>
              <p>
                At {CLINIC_NAME}, we provide comprehensive care for all types of nail disorders. Our
                approach combines accurate diagnosis with effective, evidence-based treatments to
                restore nail health and relieve discomfort.
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
                  Nail Disorders Condition
                </p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Replace with an image showing nail disorders
                </p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Alt: Illustration showing common nail disorders and conditions
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
      title: "Thickened Nails",
      desc: "Nails become abnormally thick, often due to fungal infections. Thick toenails can press against shoes, causing discomfort and difficulty trimming.",
    },
    {
      title: "Discolouration",
      desc: "Nails may turn yellow, brown, green, white, or black depending on the cause. Fungal infections often cause yellow-brown discolouration, while trauma may cause dark spots.",
    },
    {
      title: "Brittle or Splitting Nails",
      desc: "Nails become weak, thin, and prone to splitting or peeling. This can be caused by nutritional deficiencies, thyroid disorders, or repeated exposure to water and chemicals.",
    },
    {
      title: "Pain & Swelling",
      desc: "Redness, swelling, and pain around the nail are common signs of paronychia (bacterial infection) or ingrown toenails. The area may feel warm and tender to touch.",
    },
    {
      title: "Nail Pitting",
      desc: "Small depressions or pits on the nail surface are a classic sign of nail psoriasis. They can also occur in eczema and alopecia areata.",
    },
    {
      title: "Nail Separation",
      desc: "The nail lifts away from the nail bed (onycholysis). This can be caused by fungal infection, trauma, psoriasis, or thyroid disease. It may trap debris underneath.",
    },
    {
      title: "White Spots or Streaks",
      desc: "White spots (leukonychia) are usually harmless and result from minor trauma. However, persistent or widespread white patches may indicate fungal infection or systemic issues.",
    },
    {
      title: "Ingrown Nail",
      desc: "The nail edge grows into the surrounding skin, causing pain, redness, and swelling. It commonly affects the big toe and may lead to infection if untreated.",
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
            Common Symptoms of Nail Disorders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Nail disorder symptoms vary depending on the underlying cause. Early recognition helps
            in seeking timely treatment.
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
                Nail Disorders Symptoms Illustration
              </p>
              <p className="mt-1 text-xs text-muted-foreground/80">
                Replace with an infographic showing common nail disorder symptoms
              </p>
              <p className="text-xs text-muted-foreground/80">
                Alt: Illustration showing thickened, discoloured, and pitted nails with various nail
                disorders
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
      title: "Fungal Infections",
      desc: "Dermatophyte fungi are the most common cause of nail disorders. They thrive in warm, moist environments and can infect nails through minor breaks in the skin or nail.",
    },
    {
      title: "Bacterial Infections",
      desc: "Bacteria such as Staphylococcus and Streptococcus can cause paronychia — an infection of the skin around the nail. It often occurs after injury or excessive moisture exposure.",
    },
    {
      title: "Trauma or Injury",
      desc: "Repeated microtrauma from ill-fitting shoes, sports activities, or accidental impact can damage the nail matrix, leading to discolouration, thickening, or nail loss.",
    },
    {
      title: "Psoriasis",
      desc: "Nail psoriasis is a common manifestation of psoriasis that affects the nail matrix and nail bed, causing pitting, thickening, onycholysis, and discolouration.",
    },
    {
      title: "Nutritional Deficiencies",
      desc: "Deficiencies in biotin, iron, zinc, calcium, and vitamins A, B12, and D can lead to brittle, weak, or abnormally shaped nails. Addressing deficiencies improves nail health.",
    },
    {
      title: "Thyroid Disorders",
      desc: "Both hyperthyroidism and hypothyroidism can affect nail growth and appearance. Thyroid-related nail changes include brittleness, ridging, and separation from the nail bed.",
    },
    {
      title: "Diabetes",
      desc: "Diabetes can impair circulation and immunity, increasing susceptibility to fungal infections and slow nail growth. Poorly controlled diabetes may worsen nail complications.",
    },
    {
      title: "Improper Nail Care",
      desc: "Incorrect nail trimming, aggressive manicures, prolonged water exposure, and use of harsh chemicals can damage nails and predispose them to infections and brittleness.",
    },
    {
      title: "Ageing",
      desc: "As we age, nails naturally become thicker, more brittle, and slower-growing. Age-related changes can also increase the risk of fungal infections and other nail conditions.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Causes and Risk Factors
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            What Causes Nail Disorders?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Nail disorders can result from infections, medical conditions, injuries, or lifestyle
            factors. Identifying the root cause is essential for effective treatment.
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
      title: "Fungal Nail Infection (Onychomycosis)",
      desc: "The most common nail disorder, caused by dermatophyte fungi. It leads to thickened, yellow-brown, crumbly nails. It can affect fingernails and toenails, with toenails being more commonly involved.",
    },
    {
      title: "Paronychia (Bacterial Infection)",
      desc: "An infection of the nail fold causing redness, swelling, and pain around the nail. Acute paronychia is usually bacterial, while chronic paronychia is often associated with moisture and irritants.",
    },
    {
      title: "Nail Psoriasis",
      desc: "Psoriasis affecting the nails causes pitting, thickening, discolouration (oil-drop sign), and separation of the nail from the nail bed. It often occurs with skin psoriasis but can appear alone.",
    },
    {
      title: "Ingrown Toenail (Onychocryptosis)",
      desc: "The nail edge grows into the surrounding skin, causing pain, redness, swelling, and sometimes infection. It most commonly affects the big toe and can recur if not properly treated.",
    },
    {
      title: "Brittle Nail Syndrome",
      desc: "Characterised by weak, splitting, or peeling nails. It can be caused by nutritional deficiencies, thyroid disorders, repeated wet-dry cycles, or exposure to harsh chemicals.",
    },
    {
      title: "Onycholysis (Nail Lifting)",
      desc: "The nail plate separates from the nail bed, often starting at the tip. Causes include fungal infection, trauma, psoriasis, thyroid disease, and certain medications.",
    },
    {
      title: "Nail Discolouration",
      desc: "Nails can turn yellow (fungus, smoking), green (bacterial infection), white (trauma, fungus), black (trauma, melanoma), or brown (fungus, medications). Colour changes help in diagnosis.",
    },
    {
      title: "Leukonychia (White Nails)",
      desc: "White spots or streaks on the nails, usually caused by minor trauma to the nail matrix. It is generally harmless but persistent white discolouration may indicate fungal infection or systemic disease.",
    },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Types of Nail Disorders
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Different Types of Nail Disorders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Nail disorders can present in various forms. Identifying the specific type guides
            treatment decisions and helps achieve the best outcome.
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
              How We Diagnose Nail Disorders
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                At {CLINIC_NAME}, we diagnose nail disorders through a thorough clinical evaluation
                and, when necessary, laboratory tests. An accurate diagnosis is essential because
                many nail conditions look similar but require different treatments.
              </p>
              <p>
                We begin by reviewing your medical history, including any underlying health
                conditions, medications, occupation, and lifestyle factors that may contribute to
                nail problems. We also ask about the duration and progression of your symptoms.
              </p>
              <p>
                A detailed examination of your nails allows us to assess the colour, thickness,
                shape, and texture of the nails, as well as the surrounding skin. We examine all
                fingernails and toenails, as multiple nails are often affected in fungal infections.
              </p>
              <p>
                In cases of suspected fungal infection, we may take a nail clipping or scraping for
                potassium hydroxide (KOH) microscopy and culture. This confirms the presence of
                fungus and helps identify the specific type, guiding treatment selection.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "Comprehensive medical history and lifestyle review",
                "Detailed examination of all fingernails and toenails",
                "KOH microscopy and fungal culture when indicated",
                "Wood's lamp examination for certain nail conditions",
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
            <div className="flex aspect-[4/3] items-center justify-center p-8">
              <div className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <Stethoscope className="h-8 w-8" />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  Nail Examination Consultation
                </p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Replace with a photo of a dermatologist examining a patient's nails
                </p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Alt: Dermatologist examining a patient's nails at Armoor Skin & Hair Clinic
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
            Nail Disorders Treatments Available in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We offer a comprehensive range of evidence-based treatments for all types of nail
            disorders to restore nail health and relieve discomfort.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Antifungal Medications",
              items: [
                "Oral antifungal tablets (terbinafine, itraconazole) for moderate to severe infections",
                "Topical antifungal lacquers and creams for mild cases",
                "Combination therapy for resistant fungal infections",
                "Regular monitoring of treatment progress with follow-up visits",
              ],
            },
            {
              title: "Ingrown Toenail Treatment",
              items: [
                "Conservative care with warm soaks and proper nail trimming",
                "Antibiotic therapy if infection is present",
                "Minor in-clinic procedure for chronic or severe cases",
                "Guidance on preventing recurrence with proper footwear and nail care",
              ],
            },
            {
              title: "Paronychia Management",
              items: [
                "Antibiotic therapy for bacterial paronychia",
                "Incision and drainage for abscess formation when needed",
                "Moisture avoidance and skin barrier protection for chronic cases",
                "Topical steroid and antifungal combinations for mixed infections",
              ],
            },
            {
              title: "Nail Psoriasis Treatment",
              items: [
                "Topical vitamin D analogues and corticosteroids for nail pitting",
                "Corticosteroid injections into the nail matrix for stubborn cases",
                "Oral medications for severe nail psoriasis with skin involvement",
                "Laser therapy options for resistant nail psoriasis",
              ],
            },
            {
              title: "Brittle Nail Therapy",
              items: [
                "Biotin and nutritional supplementation to strengthen nails",
                "Moisturising treatments and nail hardeners",
                "Identification and correction of underlying deficiencies",
                "Avoidance of harsh chemicals and proper nail care routine",
              ],
            },
            {
              title: "Nail Care & Hygiene Guidance",
              items: [
                "Proper nail trimming and filing techniques",
                "Footwear recommendations to prevent nail problems",
                "Hygiene practices to reduce infection risk",
                "Lifestyle modifications for long-term nail health",
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
      desc: `Led by ${DOCTOR_NAME}, ${QUALIFICATION}, with extensive experience in diagnosing and treating all types of nail disorders — from fungal infections to nail psoriasis.`,
    },
    {
      icon: Microscope,
      title: "Accurate Diagnosis",
      desc: "We use clinical examination and laboratory tests (KOH, culture) to accurately diagnose your nail condition before starting treatment. No guesswork.",
    },
    {
      icon: ShieldCheck,
      title: "Personalised Treatment",
      desc: "Every nail disorder is different. Your treatment plan is customised to the specific condition, severity, and your overall health for the best outcomes.",
    },
    {
      icon: Sparkles,
      title: "Comprehensive Care",
      desc: "From medical treatments for infections to cosmetic improvement of nail appearance — we provide complete nail care under one roof in Armoor.",
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
            Why {CLINIC_NAME} for Nail Disorders Treatment?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We combine medical expertise with genuine care to help you achieve healthy, strong
            nails.
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
      title: "Nail Examination",
      desc: `${DOCTOR_NAME} examines your nails, discusses your symptoms and medical history, and performs diagnostic tests if needed to identify the exact condition.`,
    },
    {
      step: "03",
      title: "Personalised Treatment Plan",
      desc: "A customised treatment plan is created based on your nail condition, severity, and health status — combining medications, procedures, and nail care guidance.",
    },
    {
      step: "04",
      title: "Follow-up & Recovery",
      desc: "Regular follow-up visits to monitor treatment response, adjust therapy as needed, and ensure complete recovery and prevention of recurrence.",
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
            From your first visit to full recovery — here is what you can expect.
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
      title: "Keep Nails Clean & Dry",
      desc: "Wash and dry your nails thoroughly, especially after bathing or washing hands. Moisture creates an ideal environment for fungal and bacterial growth.",
    },
    {
      title: "Trim Nails Properly",
      desc: "Cut nails straight across and round the tips slightly. Avoid cutting them too short or digging into the corners, which can lead to ingrown toenails.",
    },
    {
      title: "Wear Breathable Footwear",
      desc: "Choose shoes made of breathable materials and change socks daily. Use antifungal powder in shoes if you are prone to fungal infections.",
    },
    {
      title: "Avoid Sharing Personal Items",
      desc: "Do not share nail clippers, files, towels, or footwear with others. Nail infections can spread through contaminated personal care items.",
    },
    {
      title: "Moisturise Your Nails & Cuticles",
      desc: "Apply moisturiser to your nails and cuticles regularly to prevent dryness and brittleness. Avoid harsh nail polish removers containing acetone.",
    },
    {
      title: "Protect Your Nails",
      desc: "Wear gloves when doing household chores or working with chemicals. Avoid using nails as tools to open cans or scrape surfaces.",
    },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Nail Care Tips
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Tips for Healthy Nails
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Simple daily habits can prevent many nail problems and keep your nails healthy and
            strong.
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
                Nail Care Illustration
              </p>
              <p className="mt-1 text-xs text-muted-foreground/80">
                Replace with an image showing proper nail care routine
              </p>
              <p className="text-xs text-muted-foreground/80">
                Alt: Illustration of proper nail trimming and care techniques
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
      q: "How long does nail fungus treatment take?",
      a: "Nail fungus treatment takes 3–6 months for fingernails and 6–12 months for toenails, as nails grow slowly and medication needs time to reach the infected area. Consistent treatment and follow-up are essential for complete clearance.",
    },
    {
      q: "Can brittle nails be treated?",
      a: "Yes, brittle nails can be improved by identifying the underlying cause. Treatment may include biotin supplements, moisturising treatments, avoiding harsh chemicals, and proper nail care routines prescribed by a dermatologist.",
    },
    {
      q: "Is nail fungus contagious?",
      a: "Yes, fungal nail infections are contagious. They can spread through direct contact or via contaminated surfaces such as floors, towels, nail clippers, and footwear. Early treatment helps reduce the risk of spreading to others.",
    },
    {
      q: "Do I need to see a dermatologist for nail problems?",
      a: "Yes, a dermatologist can accurately diagnose nail conditions through clinical examination and lab tests. Many nail disorders look similar but require different treatments, so professional diagnosis is important.",
    },
    {
      q: "Can nail problems indicate other health issues?",
      a: "Yes, nail changes can be a sign of underlying health conditions such as thyroid disorders, anaemia, diabetes, psoriasis, nutritional deficiencies, and circulatory problems. A dermatologist can identify these associations.",
    },
    {
      q: "Are fungal nail infections painful?",
      a: "Fungal nail infections are not always painful in early stages. As the infection progresses, the nail may thicken and cause discomfort when wearing shoes. Advanced infections can cause pressure pain on the nail bed.",
    },
    {
      q: "Can ingrown toenails be treated without surgery?",
      a: "Mild ingrown toenails can often be managed with warm soaks, proper nail trimming, and wearing appropriate footwear. However, recurrent or severe cases may require a minor in-clinic procedure for permanent relief.",
    },
    {
      q: "Can nail psoriasis be treated?",
      a: "Yes, nail psoriasis can be treated with topical medications, corticosteroid injections, oral therapies, and laser treatment. Early treatment is more effective and can significantly improve nail appearance.",
    },
    {
      q: "How can I prevent nail infections?",
      a: "Keep nails clean and dry, trim them straight across, avoid sharing nail tools or towels, wear breathable footwear, change socks daily, and avoid walking barefoot in public showers or swimming pools.",
    },
    {
      q: "How much does nail disorders treatment cost in Armoor?",
      a: `The cost of nail disorders treatment at ${CLINIC_NAME} depends on the type of condition, severity, and treatment approach required. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
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
            Common questions about nail disorders treatment at our clinic in Armoor.
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
      text: "I had a fungal infection on my toenails for over two years. I tried over-the-counter creams but nothing worked. Dr. Raghavendhra prescribed oral medication and within a few months my nails started clearing up. Very happy with the results.",
      rating: 5,
    },
    {
      name: "Kavitha",
      location: "Nizamabad",
      text: "My son was suffering from an ingrown toenail that kept getting infected. The doctor performed a minor procedure in the clinic and gave us clear aftercare instructions. It healed perfectly and has not recurred. Highly recommend.",
      rating: 5,
    },
    {
      name: "Ravi",
      location: "Balkonda",
      text: "I have had brittle, splitting nails for years. The doctor checked my thyroid and vitamin levels, found deficiencies, and put me on supplements. My nails are so much stronger now. The attention to root cause made all the difference.",
      rating: 5,
    },
    {
      name: "Swathi",
      location: "Mortad",
      text: "I was embarrassed by the yellow discolouration on my fingernails. I thought it was just staining until I visited the clinic. It turned out to be a fungal infection. The treatment worked well and my nails look normal again. Thank you!",
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
            Real experiences from patients who have undergone nail disorders treatment at our
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
            Patients visit {CLINIC_NAME} from across Armoor and surrounding areas for expert nail
            disorders treatment. Our clinic is easily accessible and welcomes patients from all
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
    { name: "Vitiligo Treatment", to: "/treatments/vitiligo-treatment-armoor" },
    { name: "Pigmentation Treatment", to: "/treatments/pigmentation-treatment-armoor" },
    { name: "Skin Allergy Treatment", to: "/treatments/skin-allergy-treatment-armoor" },
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
    <section className="py-12" style={{ background: "var(--gradient-navy)" }}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Ready to Restore Your Nail Health?
        </h2>
        <p className="mt-3 text-base text-white/80">
          Book a consultation with {DOCTOR_NAME}, {QUALIFICATION}, at {CLINIC_NAME} in Armoor. Take
          the first step towards healthy, strong nails.
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
