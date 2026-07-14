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

export const Route = createFileRoute("/treatments/skin-allergy-treatment-armoor")({
  head: () => ({
    meta: [
      {
        title: `Skin Allergy Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        name: "description",
        content: `Expert skin allergy treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}. Effective relief for rashes, hives, contact dermatitis, and allergic skin reactions at ${CLINIC_NAME}. Book your consultation.`,
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: `Skin Allergy Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        property: "og:description",
        content: `Effective skin allergy treatment in Armoor by Dr. Raghavendhra MD, DVL. Personalised care for rashes, hives, and allergic skin conditions at Armoor Skin & Hair Clinic.`,
      },
      { property: "og:url", content: `${SITE_URL}/treatments/skin-allergy-treatment-armoor` },
      { property: "og:type", content: "website" },
      {
        name: "twitter:title",
        content: `Skin Allergy Treatment in Armoor | ${CLINIC_NAME}`,
      },
      {
        name: "twitter:description",
        content: `Expert skin allergy treatment in Armoor by Dr. Raghavendhra — personalised care for healthier, comfortable skin.`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/treatments/skin-allergy-treatment-armoor` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": `${SITE_URL}/treatments/skin-allergy-treatment-armoor#clinic`,
              name: CLINIC_NAME,
              description: `Skin allergy treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}.`,
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
              "@id": `${SITE_URL}/treatments/skin-allergy-treatment-armoor#business`,
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
              "@id": `${SITE_URL}/treatments/skin-allergy-treatment-armoor#breadcrumbs`,
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
                  name: "Skin Allergy Treatment in Armoor",
                  item: `${SITE_URL}/treatments/skin-allergy-treatment-armoor`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/treatments/skin-allergy-treatment-armoor#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How are skin allergies diagnosed?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Skin allergies are diagnosed through clinical examination and detailed history. Patch testing may be recommended for contact dermatitis to identify specific allergens causing the reaction.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can skin allergies be cured?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Many skin allergies can be effectively managed by identifying and avoiding triggers, with medications to control symptoms during flare-ups. While some allergies may resolve over time, others require ongoing management.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How quickly do allergy treatments work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Antihistamines provide relief within 30–60 minutes. Topical corticosteroids for contact dermatitis show improvement within a few days. Chronic conditions like urticaria may take longer to control.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is skin allergy contagious?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, skin allergies are not contagious. They cannot be transmitted from one person to another. Allergic reactions are the body's immune response to a specific trigger and are not caused by an infection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can stress cause skin allergies?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, stress can trigger or worsen skin allergies. Stress releases chemicals in the body that can activate allergic reactions and histamine release, leading to hives and worsening of existing allergic skin conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the difference between skin allergy and eczema?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Skin allergy is an immune reaction to a specific allergen, while eczema (atopic dermatitis) is a chronic condition involving skin barrier dysfunction. However, people with eczema are more prone to developing skin allergies.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can food allergies cause skin rashes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, food allergies commonly cause skin reactions including hives, redness, and swelling. Common triggers include nuts, shellfish, eggs, milk, and certain food additives. A dermatologist can help identify food-related triggers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "When should I see a doctor for a skin allergy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You should see a doctor if the rash is severe, spreading, painful, or does not improve with over-the-counter treatments. Immediate medical attention is needed if there is swelling of the face or lips, or difficulty breathing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does skin allergy treatment cost in Armoor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `The cost of skin allergy treatment at ${CLINIC_NAME} depends on the severity, type of allergic reaction, and treatment approach required. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
                  },
                },
              ],
            },
            {
              "@type": "MedicalProcedure",
              name: "Skin Allergy Treatment in Armoor",
              description:
                "Comprehensive skin allergy treatment services including antihistamines, topical corticosteroids, allergen avoidance strategies, and personalised care plans.",
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
  component: SkinAllergyTreatmentArmoorPage,
});

function SkinAllergyTreatmentArmoorPage() {
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
          <span className="text-white/90">Skin Allergy Treatment in Armoor</span>
        </nav>
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 text-gold" />
              Expert Allergy Care in Armoor
            </div>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Skin Allergy Treatment in Armoor
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Effective relief from rashes, hives, and allergic skin reactions at {CLINIC_NAME}. Led
              by {DOCTOR_NAME}, {QUALIFICATION} — Armoor's trusted dermatologist for personalised
              skin allergy diagnosis and treatment.
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
                  "Comprehensive allergy evaluation",
                  "Effective relief for acute and chronic allergies",
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
              Understanding Skin Allergies
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              What is a Skin Allergy?
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                A skin allergy occurs when the immune system overreacts to a substance that is
                normally harmless. This reaction triggers inflammation, redness, itching, and other
                symptoms on the skin. Skin allergies can range from mild irritation to severe,
                widespread reactions that significantly affect quality of life.
              </p>
              <p>
                Common forms of skin allergies include contact dermatitis (reaction to direct skin
                contact with an allergen), urticaria (hives), and angioedema (swelling of deeper
                skin layers). Each type has distinct characteristics and requires a tailored
                approach to diagnosis and treatment.
              </p>
              <p>
                Unlike infections, skin allergies are not contagious. They are the body's way of
                defending itself against perceived threats. The key to effective management lies in
                identifying the specific trigger and developing a personalised treatment and
                avoidance plan.
              </p>
              <p>
                At {CLINIC_NAME}, we take a comprehensive approach to skin allergies. We combine
                detailed clinical evaluation with patient education to help you understand your
                condition, avoid triggers, and find lasting relief from uncomfortable symptoms.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/treatments/skin-allergy/skin-allergy-1.webp"
              alt="Red, itchy rash from a skin allergy"
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
      title: "Red, Itchy Rash",
      desc: "The most common symptom of a skin allergy. Red, inflamed patches appear on the skin accompanied by persistent itching that can range from mild to severe.",
    },
    {
      title: "Hives (Urticaria)",
      desc: "Raised, red or skin-coloured welts that appear suddenly. They vary in size and shape, can join together to form larger patches, and are intensely itchy.",
    },
    {
      title: "Swelling (Angioedema)",
      desc: "Deep swelling of the skin, often around the eyes, lips, face, hands, or genitals. This can feel like a burning, tingling, or stretching sensation beneath the skin.",
    },
    {
      title: "Burning or Stinging",
      desc: "Many patients experience a burning or stinging sensation on the affected skin, especially in contact dermatitis where the skin feels irritated and sensitive to touch.",
    },
    {
      title: "Dry, Cracked Skin",
      desc: "Allergic reactions can cause the skin to become excessively dry, flaky, and cracked. This is particularly common in chronic allergic contact dermatitis.",
    },
    {
      title: "Blisters or Oozing",
      desc: "In severe contact dermatitis, small fluid-filled blisters may develop. These can burst and ooze, leading to crusting and secondary infection if not treated properly.",
    },
    {
      title: "Chronic Itching",
      desc: "Some skin allergies present with persistent itching without a visible rash. This can be particularly frustrating and disruptive to sleep and daily activities.",
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
            Common Symptoms of Skin Allergies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Skin allergy symptoms can vary depending on the type of allergen and the individual's
            sensitivity. Recognising them early helps in seeking timely treatment.
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
      </div>
    </section>
  );
}

function CausesSection() {
  const causes = [
    {
      title: "Contact Allergens",
      desc: "Direct contact with substances like nickel, latex, fragrances, cosmetics, hair dyes, and certain fabrics can trigger allergic contact dermatitis at the site of exposure.",
    },
    {
      title: "Food Allergies",
      desc: "Certain foods such as nuts, shellfish, eggs, milk, soy, and wheat can trigger skin reactions including hives, rashes, and swelling. Reactions can occur within minutes to hours after consumption.",
    },
    {
      title: "Medication Reactions",
      desc: "Many medications, including antibiotics (especially penicillin), NSAIDs, and certain painkillers, can cause skin allergic reactions ranging from mild rashes to severe conditions like Stevens-Johnson syndrome.",
    },
    {
      title: "Insect Bites & Stings",
      desc: "Insect bites from mosquitoes, bees, wasps, and ants can cause localised allergic reactions. Some individuals may experience exaggerated responses with extensive swelling and itching.",
    },
    {
      title: "Seasonal Allergens",
      desc: "Pollen, mould spores, dust mites, and pet dander can trigger skin allergies in susceptible individuals. These airborne allergens can cause both respiratory and skin symptoms.",
    },
    {
      title: "Stress",
      desc: "Emotional stress can trigger or worsen skin allergies by releasing histamine and other chemicals in the body. Stress-induced hives are a common presentation in clinical practice.",
    },
    {
      title: "Physical Factors",
      desc: "Heat, cold, sunlight, pressure, and even water can trigger physical urticaria in some individuals. These are known as physical allergies and require specific management approaches.",
    },
    {
      title: "Genetics",
      desc: "A family history of allergies, asthma, or eczema increases the likelihood of developing skin allergies. Genetic factors influence how your immune system responds to potential allergens.",
    },
    {
      title: "Occupational Exposures",
      desc: "Certain professions involving chemicals, hairdressing, healthcare, cleaning, or construction can expose individuals to allergens that cause occupational contact dermatitis.",
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
            What Causes Skin Allergies?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Skin allergies can be triggered by a wide range of substances and factors. Identifying
            your specific triggers is the first step towards effective management.
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
      title: "Allergic Contact Dermatitis",
      desc: "A delayed allergic reaction that occurs when the skin comes into contact with a substance to which it has developed an allergy. Common triggers include nickel, fragrances, and poison ivy.",
    },
    {
      title: "Urticaria (Hives)",
      desc: "Raised, itchy welts that appear suddenly on the skin. They can be acute (lasting less than 6 weeks) or chronic (persisting longer). Hives are caused by histamine release in the skin.",
    },
    {
      title: "Angioedema",
      desc: "Deep swelling beneath the skin, often around the eyes, lips, throat, and genitals. It can occur alone or alongside urticaria and requires prompt medical attention if the throat is involved.",
    },
    {
      title: "Atopic Dermatitis",
      desc: "A chronic inflammatory skin condition often associated with allergies. While primarily a skin barrier disorder, it is frequently triggered or worsened by allergens and is linked to asthma and hay fever.",
    },
    {
      title: "Irritant Contact Dermatitis",
      desc: "A non-allergic skin reaction caused by direct damage from irritating substances like acids, detergents, solvents, or prolonged exposure to water. It is the most common form of contact dermatitis.",
    },
    {
      title: "Photosensitivity",
      desc: "An allergic or irritant reaction triggered by sunlight or UV light. Certain medications, fragrances, and skin products can make the skin more sensitive to the sun, causing rashes on sun-exposed areas.",
    },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Types of Skin Allergies
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Different Types of Skin Allergies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Skin allergies can present in several distinct forms. Identifying the specific type is
            essential for effective treatment.
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
              How We Diagnose Skin Allergies
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                At {CLINIC_NAME}, we use a systematic approach to diagnose skin allergies. We begin
                with a detailed clinical history, including when the symptoms started, what
                substances you may have been exposed to, your occupation, and any family history of
                allergies.
              </p>
              <p>
                A thorough skin examination allows us to assess the pattern, distribution, and
                appearance of the rash. The location of the reaction often provides important clues
                about the causative allergen — for example, ear lobe dermatitis suggests nickel
                allergy from earrings.
              </p>
              <p>
                For suspected allergic contact dermatitis, patch testing is the gold standard
                diagnostic tool. Small patches containing common allergens are placed on your back
                and read after 48 and 96 hours to identify which substances trigger a reaction. This
                simple, painless test can be performed in our clinic.
              </p>
              <p>
                In some cases, we may recommend blood tests to check for specific IgE antibodies
                against common allergens. These tests help identify triggers for urticaria and other
                immediate-type allergic reactions.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "Comprehensive medical and exposure history review",
                "Detailed skin examination to identify reaction patterns",
                "Patch testing for suspected contact allergens",
                "Blood tests for specific allergy markers when indicated",
                "Accurate diagnosis to guide effective treatment",
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
              src="/images/treatments/skin-allergy/skin-allergy-2.webp"
              alt="Dermatologist performing allergy patch test"
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
            Skin Allergy Treatments Available in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We offer a comprehensive range of evidence-based treatments to relieve skin allergies
            and prevent future reactions.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Antihistamines",
              items: [
                "Oral antihistamines to block histamine and reduce itching",
                "Non-sedating options for daytime use",
                "Short-course sedating antihistamines for severe night-time itching",
                "Topical antihistamine creams for localised reactions",
              ],
            },
            {
              title: "Topical Corticosteroids",
              items: [
                "Prescription-strength steroid creams for inflamed skin",
                "Appropriate potency selection based on area and severity",
                "Short-term use to control flare-ups effectively",
                "Guidance on safe application to minimise side effects",
              ],
            },
            {
              title: "Allergen Avoidance",
              items: [
                "Identification of specific triggers through testing",
                "Practical strategies to avoid contact allergens",
                "Dietary guidance for food-related allergies",
                "Workplace modifications for occupational allergies",
              ],
            },
            {
              title: "Emergency Management",
              items: [
                "Emergency action plans for severe allergic reactions",
                "Prescription of emergency medications when needed",
                "Patient and family education on recognising warning signs",
                "Referral coordination for anaphylaxis management",
              ],
            },
            {
              title: "Chronic Urticaria Management",
              items: [
                "Stepwise treatment approach for chronic hives",
                "Combination therapy for resistant cases",
                "Monitoring and adjustment of treatment over time",
                "Identification and management of underlying causes",
              ],
            },
            {
              title: "Patient Education",
              items: [
                "Understanding your allergy and its triggers",
                "Proper skincare during and after allergic reactions",
                "When to seek immediate medical attention",
                "Long-term prevention and lifestyle modifications",
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
      desc: `Led by ${DOCTOR_NAME}, ${QUALIFICATION}, with extensive experience in diagnosing and managing all types of skin allergies — from contact dermatitis to chronic urticaria.`,
    },
    {
      icon: Microscope,
      title: "Accurate Diagnosis",
      desc: "We use systematic evaluation and patch testing to identify the exact cause of your allergy. Accurate diagnosis is the foundation of effective treatment and prevention.",
    },
    {
      icon: ShieldCheck,
      title: "Personalised Treatment",
      desc: "Every skin allergy is unique. Your treatment plan is customised to your specific triggers, symptoms, severity, and lifestyle for the best possible outcomes.",
    },
    {
      icon: Sparkles,
      title: "Compassionate Care",
      desc: "We understand how uncomfortable and distressing skin allergies can be. Our team provides gentle, supportive care with a focus on your comfort and well-being.",
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
            Why {CLINIC_NAME} for Skin Allergy Treatment?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We combine medical expertise with compassionate care to help you find relief from skin
            allergies.
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
      title: "Allergy Assessment",
      desc: `${DOCTOR_NAME} examines your skin, discusses your symptoms and exposure history, and identifies potential triggers through clinical evaluation.`,
    },
    {
      step: "03",
      title: "Diagnostic Testing",
      desc: "If needed, patch testing or blood tests are performed to pinpoint the exact allergen. This step is crucial for targeted treatment and effective avoidance.",
    },
    {
      step: "04",
      title: "Treatment & Follow-up",
      desc: "A personalised treatment plan is created, combining medications, avoidance strategies, and lifestyle guidance. Regular follow-up ensures optimal results.",
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
            From your first visit to long-term management — here is what you can expect.
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
      title: "Moisturize Regularly",
      desc: "Apply a gentle, fragrance-free moisturizer daily to strengthen the skin barrier. Well-moisturized skin is less prone to irritation and allergic reactions.",
    },
    {
      title: "Avoid Known Triggers",
      desc: "Once you have identified your allergens, take active steps to avoid them. Read product labels carefully, choose hypoallergenic products, and make necessary changes at home and work.",
    },
    {
      title: "Use Gentle Skin Care",
      desc: "Use lukewarm water for bathing, avoid harsh soaps and scrubs, and pat your skin dry gently. Choose products labelled 'fragrance-free' and 'for sensitive skin'.",
    },
    {
      title: "Manage Stress",
      desc: "Stress can trigger or worsen skin allergies. Incorporate relaxation techniques such as deep breathing, meditation, yoga, or regular exercise into your daily routine.",
    },
    {
      title: "Wear Protective Clothing",
      desc: "When exposed to potential irritants or allergens at work or home, wear appropriate protective gear such as gloves, long sleeves, and masks to minimise skin contact.",
    },
    {
      title: "Keep a Symptom Diary",
      desc: "Track your symptoms, what you ate, what products you used, and any environmental exposures. This can help identify patterns and hidden triggers.",
    },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Living with Skin Allergies
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Tips for Managing Skin Allergies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Small changes in your daily routine can make a significant difference in preventing and
            managing allergic skin reactions.
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
              src="/images/treatments/skin-allergy/skin-allergy-3.webp"
              alt="Tips for preventing skin allergic reactions"
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
      q: "How are skin allergies diagnosed?",
      a: "Skin allergies are diagnosed through clinical examination and detailed history. Patch testing may be recommended for contact dermatitis to identify specific allergens causing the reaction.",
    },
    {
      q: "Can skin allergies be cured?",
      a: "Many skin allergies can be effectively managed by identifying and avoiding triggers, with medications to control symptoms during flare-ups. While some allergies may resolve over time, others require ongoing management.",
    },
    {
      q: "How quickly do allergy treatments work?",
      a: "Antihistamines provide relief within 30–60 minutes. Topical corticosteroids for contact dermatitis show improvement within a few days. Chronic conditions like urticaria may take longer to control.",
    },
    {
      q: "Is skin allergy contagious?",
      a: "No, skin allergies are not contagious. They cannot be transmitted from one person to another. Allergic reactions are the body's immune response to a specific trigger.",
    },
    {
      q: "Can stress cause skin allergies?",
      a: "Yes, stress can trigger or worsen skin allergies. Stress releases chemicals in the body that can activate allergic reactions and histamine release, leading to hives and worsening of existing conditions.",
    },
    {
      q: "What is the difference between skin allergy and eczema?",
      a: "Skin allergy is an immune reaction to a specific allergen, while eczema (atopic dermatitis) is a chronic condition involving skin barrier dysfunction. However, people with eczema are more prone to skin allergies.",
    },
    {
      q: "Can food allergies cause skin rashes?",
      a: "Yes, food allergies commonly cause skin reactions including hives, redness, and swelling. Common triggers include nuts, shellfish, eggs, milk, and certain food additives.",
    },
    {
      q: "When should I see a doctor for a skin allergy?",
      a: "You should see a doctor if the rash is severe, spreading, painful, or does not improve with over-the-counter treatments. Immediate attention is needed if there is swelling of the face or lips.",
    },
    {
      q: "How much does skin allergy treatment cost in Armoor?",
      a: `The cost of skin allergy treatment at ${CLINIC_NAME} depends on the severity, type of allergic reaction, and treatment approach required. We offer affordable and transparent pricing. Please book a consultation for a personalised plan and cost estimate.`,
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
            Common questions about skin allergy treatment at our clinic in Armoor.
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
      text: "I had a severe allergic reaction to a new moisturizer that left my face red, swollen, and itchy. Dr. Raghavendhra diagnosed it as allergic contact dermatitis and prescribed the right medication. Within a week, my skin was back to normal. Very grateful.",
      rating: 5,
    },
    {
      name: "Srinivas",
      location: "Nizamabad",
      text: "I have been suffering from chronic hives for months with no idea what was causing them. The doctor took a detailed history and ran some tests. Turns out it was a combination of stress and certain foods. The treatment plan has helped me stay symptom-free.",
      rating: 5,
    },
    {
      name: "Laxmi",
      location: "Balkonda",
      text: "My daughter developed an itchy rash on her hands that would not go away. Dr. Raghavendhra performed patch testing and found she was allergic to nickel. With the right treatment and avoidance advice, her skin has completely cleared.",
      rating: 5,
    },
    {
      name: "Ravi",
      location: "Mortad",
      text: "I get a severe rash whenever I wear certain rings or watch straps. The doctor explained it is a nickel allergy and advised me on alternatives. The prescribed cream cleared the rash quickly. Very happy with the care.",
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
            Real experiences from patients who have undergone skin allergy treatment at our clinic.
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
            Patients visit {CLINIC_NAME} from across Armoor and surrounding areas for expert skin
            allergy treatment. Our clinic is easily accessible and welcomes patients from all nearby
            towns and villages.
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
    { name: "Psoriasis Treatment", to: "/treatments/psoriasis-treatment-armoor" },
    { name: "Eczema Treatment", to: "/treatments/eczema-treatment-armoor" },
    { name: "Fungal Infection Treatment", to: "/treatments/fungal-infection-treatment-armoor" },
    { name: "Dandruff Treatment", to: "/treatments/dandruff-treatment-armoor" },
    { name: "Vitiligo Treatment", to: "/treatments/vitiligo-treatment-armoor" },
    { name: "Pigmentation Treatment", to: "/treatments/pigmentation-treatment-armoor" },
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
          Ready to Find Relief from Your Skin Allergy?
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
