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
} from "../lib/clinic-data";

export const Route = createFileRoute("/treatments/eczema-treatment-armoor")({
  head: () => ({
    meta: [
      {
        title: `Eczema Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        name: "description",
        content: `Expert eczema treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}. Effective care for atopic dermatitis, itchy skin, and chronic eczema at ${CLINIC_NAME}. Book your consultation.`,
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: `Eczema Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        property: "og:description",
        content: `Effective eczema and atopic dermatitis treatment in Armoor by Dr. Raghavendhra MD, DVL. Personalised care for itchy, dry, and inflamed skin at Armoor Skin & Hair Clinic.`,
      },
      { property: "og:url", content: `${SITE_URL}/treatments/eczema-treatment-armoor` },
      { property: "og:type", content: "website" },
      {
        name: "twitter:title",
        content: `Eczema Treatment in Armoor | ${CLINIC_NAME}`,
      },
      {
        name: "twitter:description",
        content: `Expert eczema treatment in Armoor by Dr. Raghavendhra — personalised care for healthier, comfortable skin.`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/treatments/eczema-treatment-armoor` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": `${SITE_URL}/treatments/eczema-treatment-armoor#clinic`,
              name: CLINIC_NAME,
              description: `Eczema and atopic dermatitis treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}.`,
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
              "@id": `${SITE_URL}/treatments/eczema-treatment-armoor#business`,
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
              "@id": `${SITE_URL}/treatments/eczema-treatment-armoor#breadcrumbs`,
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
                  name: "Eczema Treatment in Armoor",
                  item: `${SITE_URL}/treatments/eczema-treatment-armoor`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/treatments/eczema-treatment-armoor#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is eczema curable?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Eczema is a chronic condition that currently has no permanent cure. However, with proper treatment and skincare, symptoms can be effectively managed and flare-ups minimised. Most people with eczema lead normal, comfortable lives with the right care plan.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is eczema contagious?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, eczema is not contagious. It cannot be transmitted from one person to another through touch or close contact. Eczema is an inflammatory skin condition influenced by genetic and environmental factors.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can children outgrow eczema?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Many children do see improvement in eczema as they grow older. Some may outgrow it entirely, while others may continue to have mild symptoms into adulthood. Early and consistent treatment can help manage the condition effectively.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What triggers eczema flare-ups?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Common triggers include dry skin, harsh soaps and detergents, allergens (dust, pollen, pet dander), stress, weather changes (cold or hot), certain fabrics like wool, and some foods. Identifying and avoiding personal triggers is key to managing eczema.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which moisturizer is best for eczema?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Thick, fragrance-free emollients and moisturizers are best for eczema. Look for products containing ceramides, shea butter, petroleum jelly, or glycerin. Your dermatologist can recommend the most suitable option based on your skin type and severity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can eczema return after treatment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Eczema is a chronic condition with a relapsing-remitting course. Symptoms can return even after successful treatment, especially if triggers are encountered. Regular skincare and follow-up care help reduce the frequency and severity of flare-ups.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does food cause eczema?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In some individuals, certain foods can trigger or worsen eczema flare-ups. Common culprits include dairy, eggs, nuts, soy, and wheat. However, food triggers vary from person to person. An elimination diet under medical guidance can help identify triggers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does eczema treatment take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Eczema treatment is an ongoing process. Most patients see improvement in itching and redness within 1–2 weeks of starting treatment. However, long-term management with moisturizers and trigger avoidance is necessary to maintain healthy skin.",
                  },
                },
                {
                  "@type": "Question",
                  name: "When should I visit a dermatologist for eczema?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You should see a dermatologist if eczema is affecting your daily life, if over-the-counter creams are not helping, if the skin becomes infected (oozing, crusting), or if you are unsure about your diagnosis. Early treatment leads to better outcomes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does eczema treatment cost in Armoor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `The cost of eczema treatment at ${CLINIC_NAME} depends on the severity and type of treatment required. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
                  },
                },
              ],
            },
            {
              "@type": "MedicalProcedure",
              name: "Eczema Treatment in Armoor",
              description:
                "Comprehensive eczema treatment services including moisturizers, prescription creams, oral medications, and personalised care plans.",
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
  component: EczemaTreatmentArmoorPage,
});

function EczemaTreatmentArmoorPage() {
  return (
    <>
      <HeroSection />
      <WhatIsSection />
      <SymptomsSection />
      <CausesSection />
      <WhoCanGetSection />
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
          <span className="text-white/90">Eczema Treatment in Armoor</span>
        </nav>
        {/* IMAGE PLACEHOLDER: Hero image for eczema treatment page */}
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 text-gold" />
              Expert Eczema Care in Armoor
            </div>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Eczema Treatment in Armoor
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Effective eczema and atopic dermatitis treatment at {CLINIC_NAME}. Led by{" "}
              {DOCTOR_NAME}, {QUALIFICATION} — Armoor's trusted dermatologist for personalised skin
              care and long-term relief.
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
                  "Evidence-based eczema therapies",
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
              Understanding Eczema
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              What is Eczema?
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Eczema, also known as atopic dermatitis, is a chronic inflammatory skin condition
                that causes dry, itchy, and inflamed patches of skin. It is one of the most common
                skin conditions worldwide and can affect people of all ages.
              </p>
              <p>
                There are several types of eczema. <strong>Atopic dermatitis</strong> is the most
                common form and is often linked to a family history of allergies, asthma, or hay
                fever. <strong>Contact dermatitis</strong> occurs when the skin reacts to an
                irritant or allergen. Other types include dyshidrotic eczema, nummular eczema, and
                seborrheic dermatitis.
              </p>
              <p>
                Eczema is a chronic condition, meaning it tends to persist over time with periods of
                flare-ups and remission. Unlike some skin infections, eczema is not contagious and
                cannot spread from person to person.
              </p>
              <p>
                It is important to distinguish eczema from other skin conditions like psoriasis or
                fungal infections, as the treatment approach differs. A proper diagnosis by a
                dermatologist ensures you receive the right care for your specific condition.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/treatments/eczema/eczema-1.webp"
              alt="Comparison of healthy skin to eczema-affected skin"
              width={800}
              height={600}
              loading="lazy"
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
      title: "Intense Itching",
      desc: "Itching is the most common and distressing symptom of eczema. It can be severe, especially at night, and often leads to scratching that worsens the condition.",
    },
    {
      title: "Dry, Sensitive Skin",
      desc: "Eczema-affected skin loses moisture quickly, becoming dry, rough, and sensitive to touch. The skin barrier is compromised, making it prone to irritation.",
    },
    {
      title: "Redness & Inflammation",
      desc: "Affected areas appear red or darker than the surrounding skin. Inflammation is a hallmark of active eczema and may be accompanied by warmth.",
    },
    {
      title: "Rash",
      desc: "Eczema typically presents as a red, itchy rash that may appear on the face, hands, elbows, knees, or other parts of the body. The location often varies with age.",
    },
    {
      title: "Skin Thickening",
      desc: "Chronic scratching and rubbing can cause the skin to thicken and develop a leathery texture. This is known as lichenification.",
    },
    {
      title: "Cracked or Scaling Skin",
      desc: "The skin may crack, peel, or develop fine scales. Cracked skin is particularly vulnerable to infection and requires careful moisturization.",
    },
    {
      title: "Oozing & Crusting",
      desc: "In severe cases, small fluid-filled blisters may form and ooze, leading to crusting. This is more common during acute flare-ups and may indicate infection.",
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
            Common Symptoms of Eczema
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Eczema symptoms can vary from person to person. Recognising them early helps in seeking
            timely treatment.
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
              src="/images/treatments/eczema/eczema-2.webp"
              alt="Dry, red, and itchy skin affected by eczema"
              width={800}
              height={600}
              loading="lazy"
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
      desc: "A family history of eczema, allergies, or asthma increases your risk. Certain gene variations affect the skin barrier, making it easier for moisture to escape and irritants to enter.",
    },
    {
      title: "Immune System",
      desc: "Eczema involves an overactive immune response. The immune system reacts to mild irritants or allergens as if they were threats, triggering inflammation in the skin.",
    },
    {
      title: "Allergies",
      desc: "Allergens like dust mites, pollen, pet dander, and certain foods can trigger or worsen eczema flare-ups in susceptible individuals.",
    },
    {
      title: "Dry Skin",
      desc: "When the skin barrier is compromised, it loses moisture and becomes dry. Dry skin is more prone to itching and cracking, which can trigger an eczema flare.",
    },
    {
      title: "Irritants",
      desc: "Harsh soaps, detergents, fragrances, wool, synthetic fabrics, and certain skincare products can irritate the skin and provoke eczema symptoms.",
    },
    {
      title: "Weather Changes",
      desc: "Cold, dry air in winter can strip moisture from the skin, while heat and humidity can cause sweating that irritates eczema. Both extremes can trigger flare-ups.",
    },
    {
      title: "Stress",
      desc: "Emotional stress is a well-known trigger for eczema. Stress can increase inflammation and make the skin more reactive, leading to worsening symptoms.",
    },
    {
      title: "Environmental Triggers",
      desc: "Pollution, smoke, and climate conditions can aggravate eczema. Identifying and avoiding personal environmental triggers is an important part of management.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Why It Happens
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Causes of Eczema
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Eczema is caused by a combination of genetic and environmental factors. Understanding
            your triggers is key to managing the condition.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

function WhoCanGetSection() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Who Is Affected
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Who Can Get Eczema?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Eczema can affect anyone, regardless of age. It is one of the most common skin
            conditions seen in dermatology practice.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: "Infants",
              desc: "Eczema often appears in infancy, typically on the face, scalp, and outer limbs. Many children show improvement as they grow older.",
            },
            {
              icon: Users,
              title: "Children",
              desc: "Eczema is very common in children and may affect the elbows, knees, and neck. It can impact sleep and daily activities if not well managed.",
            },
            {
              icon: Users,
              title: "Teenagers & Adults",
              desc: "Eczema can persist into adolescence and adulthood. It often affects the hands, eyelids, and flexural areas. Stress and lifestyle factors play a larger role in this age group.",
            },
            {
              icon: Users,
              title: "Elderly",
              desc: "Age-related skin changes, reduced oil production, and medications can worsen eczema in older adults. Gentle skincare becomes especially important.",
            },
          ].map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary">
                <group.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-foreground">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.desc}</p>
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
              How We Diagnose Eczema
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                At {CLINIC_NAME}, we diagnose eczema through a thorough clinical evaluation. There
                is no single laboratory test for eczema — diagnosis is based on your medical
                history, symptoms, and a careful examination of your skin.
              </p>
              <p>
                We begin by discussing your symptoms, when they started, what makes them better or
                worse, and whether you have a personal or family history of eczema, allergies, or
                asthma. This helps us understand the pattern of your condition.
              </p>
              <p>
                A detailed skin examination allows us to assess the location, appearance, and extent
                of the rash. This also helps rule out other conditions like psoriasis, fungal
                infections, or contact dermatitis that may look similar.
              </p>
              <p>
                If allergies may be playing a role, we may recommend allergy testing. Once we have a
                clear diagnosis, a personalised treatment plan is created to address your specific
                needs.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "Comprehensive medical history review",
                "Detailed clinical skin examination",
                "Assessment of triggers and patterns",
                "Allergy evaluation when indicated",
                "Personalised diagnosis and treatment plan",
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
              src="/images/treatments/eczema/eczema-3.webp"
              alt="Dermatologist performing skin examination"
              width={800}
              height={600}
              loading="lazy"
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
            Eczema Treatments Available in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We offer a comprehensive range of evidence-based treatments to manage eczema and improve
            your quality of life.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Moisturizers & Emollients",
              items: [
                "Medical-grade moisturizers to restore the skin barrier",
                "Fragrance-free emollients for daily use",
                "Ceramide-rich creams for deep hydration",
                "Guidance on proper moisturization technique",
              ],
            },
            {
              title: "Prescription Creams",
              items: [
                "Topical corticosteroids to reduce inflammation",
                "Topical calcineurin inhibitors for sensitive areas",
                "Anti-itch creams for symptom relief",
                "Customised potency based on severity and location",
              ],
            },
            {
              title: "Oral Medications",
              items: [
                "Antihistamines for severe itching and better sleep",
                "Oral corticosteroids for short-term flare control",
                "Antibiotics if secondary infection is present",
                "Immunomodulators for severe, resistant cases",
              ],
            },
            {
              title: "Allergy Management",
              items: [
                "Identification of allergic triggers",
                "Dietary guidance when food allergies are suspected",
                "Avoidance strategies for environmental allergens",
                "Referral for allergy testing when needed",
              ],
            },
            {
              title: "Infection Treatment",
              items: [
                "Prompt treatment of secondary bacterial infections",
                "Antifungal therapy if fungal infection is present",
                "Proper wound care for cracked or oozing skin",
                "Prevention strategies to avoid recurrence",
              ],
            },
            {
              title: "Lifestyle Modifications",
              items: [
                "Daily skincare routine guidance",
                "Bathing and moisturizing recommendations",
                "Trigger identification and avoidance strategies",
                "Stress management techniques",
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
      desc: `Led by ${DOCTOR_NAME}, ${QUALIFICATION}, with extensive experience in diagnosing and managing all types of eczema — from mild to severe cases.`,
    },
    {
      icon: Microscope,
      title: "Evidence-Based Care",
      desc: "We follow current dermatology guidelines and use proven treatments to manage eczema effectively. No fads, no misinformation.",
    },
    {
      icon: ShieldCheck,
      title: "Personalised Treatment",
      desc: "Every eczema patient is different. Your treatment plan is customised to your skin type, symptoms, triggers, and lifestyle for the best outcomes.",
    },
    {
      icon: Sparkles,
      title: "Patient Education",
      desc: "We empower you with the knowledge to manage your skin at home — from proper moisturization to trigger avoidance and flare-up management.",
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
            Why {CLINIC_NAME} for Eczema Treatment?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We combine medical expertise with genuine care to help you achieve healthier,
            comfortable skin.
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
      desc: `${DOCTOR_NAME} examines your skin, discusses your symptoms, and evaluates potential triggers and contributing factors.`,
    },
    {
      step: "03",
      title: "Personalised Treatment Plan",
      desc: "A customised treatment plan is created — combining moisturizers, medications, and lifestyle guidance tailored to your needs.",
    },
    {
      step: "04",
      title: "Follow-up & Flare Management",
      desc: "Regular follow-up visits to monitor progress, adjust treatment, and help you manage flare-ups effectively when they occur.",
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
      title: "Moisturize Daily",
      desc: "Apply a thick, fragrance-free moisturizer immediately after bathing to lock in moisture. Consistent moisturization is the foundation of eczema management.",
    },
    {
      title: "Avoid Harsh Soaps",
      desc: "Use gentle, soap-free cleansers instead of regular soaps. Avoid products with fragrances, alcohol, and harsh detergents that strip the skin of natural oils.",
    },
    {
      title: "Choose Gentle Skincare",
      desc: "Look for products labelled for sensitive skin. Patch test new products before full application. Less is often more when it comes to eczema-prone skin.",
    },
    {
      title: "Wear Soft Fabrics",
      desc: "Choose soft, breathable cotton clothing. Avoid wool, synthetics, and rough fabrics that can irritate the skin. Wash new clothes before wearing.",
    },
    {
      title: "Manage Stress",
      desc: "Stress is a common eczema trigger. Incorporate relaxation techniques such as deep breathing, meditation, or gentle exercise into your daily routine.",
    },
    {
      title: "Identify Triggers",
      desc: "Keep a diary to track flare-ups and identify personal triggers. Common ones include certain foods, weather changes, dust, and specific skincare products.",
    },
    {
      title: "Bathe Properly",
      desc: "Use lukewarm (not hot) water for baths. Keep baths short — around 10 minutes. Pat the skin dry gently and apply moisturizer within 3 minutes of bathing.",
    },
    {
      title: "Avoid Scratching",
      desc: "Keep nails short and smooth. Use cold compresses or anti-itch creams during flare-ups. Scratching damages the skin barrier and worsens eczema.",
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
            Skin Care Tips for Managing Eczema
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Simple daily habits can make a significant difference in managing eczema and preventing
            flare-ups.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              src="/images/treatments/eczema/eczema-4.webp"
              alt="Healthy, moisturised skin after eczema treatment"
              width={800}
              height={600}
              loading="lazy"
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
      q: "Is eczema curable?",
      a: "Eczema is a chronic condition with no permanent cure, but it can be effectively managed with proper treatment and skincare. Most people with eczema achieve good control of their symptoms and lead comfortable lives.",
    },
    {
      q: "Is eczema contagious?",
      a: "No, eczema is not contagious. It cannot spread from person to person through touch or close contact. Eczema is an inflammatory skin condition, not an infection.",
    },
    {
      q: "Can children outgrow eczema?",
      a: "Many children see significant improvement in eczema as they grow older, and some may outgrow it entirely. However, some may continue to have mild symptoms into adulthood. Early and consistent treatment gives the best outcomes.",
    },
    {
      q: "What triggers eczema flare-ups?",
      a: "Common triggers include dry skin, harsh soaps, allergens (dust, pollen, pet dander), stress, weather changes, rough fabrics, and sometimes certain foods. Identifying and avoiding your personal triggers is an important part of management.",
    },
    {
      q: "Which moisturizer is best for eczema?",
      a: "Thick, fragrance-free moisturizers with ceramides, shea butter, petroleum jelly, or glycerin work well for eczema. Your dermatologist can recommend the most suitable product based on your skin type and condition severity.",
    },
    {
      q: "Can eczema return after treatment?",
      a: "Yes, eczema is a chronic condition that can relapse. Symptoms may return when exposed to triggers. The goal of treatment is to control flare-ups and extend the periods of remission through consistent skincare and trigger avoidance.",
    },
    {
      q: "Does food cause eczema?",
      a: "In some people, certain foods can trigger or worsen eczema. Common food triggers include dairy, eggs, nuts, soy, and wheat. However, this varies from person to person. Consult your dermatologist before making significant dietary changes.",
    },
    {
      q: "How long does eczema treatment take?",
      a: "Most patients notice improvement in itching and redness within 1–2 weeks of starting treatment. However, eczema requires long-term management. Consistent moisturization and follow-up care are essential for maintaining healthy skin.",
    },
    {
      q: "When should I visit a dermatologist for eczema?",
      a: "You should see a dermatologist if eczema is affecting your sleep or daily activities, if over-the-counter treatments are not working, if the skin shows signs of infection, or if you are unsure about your diagnosis.",
    },
    {
      q: "How much does eczema treatment cost in Armoor?",
      a: `The cost of eczema treatment at ${CLINIC_NAME} depends on the severity and type of treatment needed. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
    },
    {
      q: "Can stress cause eczema?",
      a: "Stress does not directly cause eczema, but it is a well-known trigger that can worsen existing eczema. High stress levels increase inflammation in the body, which can lead to more frequent and severe flare-ups.",
    },
    {
      q: "Is sunlight good for eczema?",
      a: "Moderate sun exposure may improve eczema symptoms for some people, as UV light has anti-inflammatory effects. However, excessive sun exposure can dry the skin and worsen symptoms. Always use sun protection and consult your dermatologist.",
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
            Common questions about eczema treatment at our clinic in Armoor.
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
      name: "Kavitha",
      location: "Armoor",
      text: "I have had eczema since childhood and tried many creams that only gave temporary relief. Dr. Raghavendhra took time to understand my skin and advised a proper skincare routine along with medication. The itching has reduced a lot, and my skin feels much better. Thank you.",
      rating: 5,
    },
    {
      name: "Suresh Goud",
      location: "Nizamabad",
      text: "My son's eczema was affecting his sleep and school. The doctor was very patient with him and explained everything in simple terms. The treatment plan was easy to follow, and we have seen great improvement in three months. Highly recommend.",
      rating: 5,
    },
    {
      name: "Lakshmi",
      location: "Balkonda",
      text: "I developed eczema on my hands from frequent washing and cleaning. The doctor identified the irritants and prescribed the right moisturizer and cream. My hands are so much better now. Very grateful for the practical advice.",
      rating: 5,
    },
    {
      name: "Venkat Reddy",
      location: "Mortad",
      text: "I was struggling with itchy, dry skin for months. Other clinics gave me strong steroid creams without proper guidance. At this clinic, the doctor explained how to use medications safely and focused on long-term management. Good experience overall.",
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
            Real experiences from patients who have undergone eczema treatment at our clinic.
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
            Patients visit {CLINIC_NAME} from across Armoor and surrounding areas for expert eczema
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
    { name: "Acne Treatment", to: "/treatments/acne-treatment-armoor" },
    { name: "Hair Fall Treatment", to: "/treatments/hair-fall-treatment-armoor" },
    {
      name: "Psoriasis Treatment",
      to: "/treatments/$slug",
      params: { slug: "psoriasis-treatment" },
    },
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
          Ready to Find Relief from Eczema?
        </h2>
        <p className="mt-3 text-base text-white/80">
          Book a consultation with {DOCTOR_NAME}, {QUALIFICATION}, at {CLINIC_NAME} in Armoor. Take
          the first step towards healthier, comfortable skin.
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
