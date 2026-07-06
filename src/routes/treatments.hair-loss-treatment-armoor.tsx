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
  Clock,
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

export const Route = createFileRoute("/treatments/hair-loss-treatment-armoor")({
  head: () => ({
    meta: [
      {
        title: `Hair Loss Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        name: "description",
        content: `Expert hair loss treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}. Advanced solutions for hair loss, thinning, and baldness at ${CLINIC_NAME}. Book your consultation today.`,
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: `Hair Loss Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        property: "og:description",
        content: `Effective hair loss treatment in Armoor by Dr. Raghavendhra MD, DVL. Personalised therapies for healthier, fuller hair at Armoor Skin & Hair Clinic.`,
      },
      { property: "og:url", content: `${SITE_URL}/treatments/hair-loss-treatment-armoor` },
      { property: "og:type", content: "website" },
      {
        name: "twitter:title",
        content: `Hair Loss Treatment in Armoor | ${CLINIC_NAME}`,
      },
      {
        name: "twitter:description",
        content: `Expert hair loss treatment in Armoor by Dr. Raghavendhra — personalised care for healthier, fuller hair.`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/treatments/hair-loss-treatment-armoor` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": `${SITE_URL}/treatments/hair-loss-treatment-armoor#clinic`,
              name: CLINIC_NAME,
              description: `Hair fall and hair loss treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}.`,
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
              "@id": `${SITE_URL}/treatments/hair-loss-treatment-armoor#business`,
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
              "@id": `${SITE_URL}/treatments/hair-loss-treatment-armoor#breadcrumbs`,
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
                  name: "Hair Loss Treatment in Armoor",
                  item: `${SITE_URL}/treatments/hair-loss-treatment-armoor`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/treatments/hair-loss-treatment-armoor#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What causes hair loss?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Hair fall can be caused by genetics, hormonal changes, nutritional deficiencies, stress, thyroid disorders, scalp infections, dandruff, certain medications, and lifestyle factors. A thorough evaluation by a dermatologist can help identify the specific cause.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is hair loss permanent?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Not all hair loss is permanent. Temporary hair shedding caused by stress, nutritional deficiencies, or illness often reverses with proper treatment. However, genetic hair loss (androgenetic alopecia) is progressive and requires ongoing management to slow its progression.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can hair grow back after falling out?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In many cases, yes. If the hair follicle is still alive and has not been scarred, hair can regrow with appropriate treatment. Early intervention significantly improves the chances of regrowth.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does hair loss treatment take to show results?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Hair growth is a slow process. Most patients notice a reduction in hair loss within 4–8 weeks of starting treatment. Visible new hair growth typically takes 3–6 months, and optimal results may require 6–12 months of consistent treatment.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which vitamin deficiency causes hair loss?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Common vitamin deficiencies linked to hair loss include iron (ferritin), vitamin D, vitamin B12, zinc, and biotin. A blood test can identify deficiencies, and correction through diet or supplements can help reduce hair loss.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does dandruff cause hair loss?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, severe dandruff and scalp inflammation can contribute to hair loss. Itching and scratching can damage hair follicles, and the inflammation can disrupt the normal hair growth cycle. Treating dandruff often helps reduce associated hair loss.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can stress increase hair loss?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, stress is a well-known trigger for hair loss. Conditions like telogen effluvium (temporary shedding) and trichotillomania (hair pulling) are directly linked to stress. Managing stress through lifestyle changes can help reduce its impact on hair health.",
                  },
                },
                {
                  "@type": "Question",
                  name: "When should I see a dermatologist for hair loss?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You should consult a dermatologist if you notice sudden or excessive hair shedding, visible thinning, bald patches, receding hairline, or if hair loss is affecting your confidence. Early diagnosis leads to better treatment outcomes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does hair loss treatment cost in Armoor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `The cost of hair loss treatment at ${CLINIC_NAME} varies depending on the type and duration of treatment required. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
                  },
                },
                {
                  "@type": "Question",
                  name: "Is PRP treatment effective for hair loss?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PRP (Platelet-Rich Plasma) therapy has shown promising results for certain types of hair loss, particularly androgenetic alopecia. It involves injecting concentrated platelets from your own blood into the scalp to stimulate hair follicles. Our dermatologist can assess if you are a suitable candidate.",
                  },
                },
              ],
            },
            {
              "@type": "MedicalProcedure",
              name: "Hair Loss Treatment in Armoor",
              description:
                "Comprehensive hair loss treatment services including diagnosis, medications, PRP therapy, mesotherapy, and personalised care plans.",
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
  component: HairLossTreatmentArmoorPage,
});

function HairLossTreatmentArmoorPage() {
  return (
    <>
      <HeroSection />
      <WhatIsSection />
      <SignsSymptomsSection />
      <CausesSection />
      <WhoCanExperienceSection />
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
          <span className="text-white/90">Hair Loss Treatment in Armoor</span>
        </nav>
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 text-gold" />
              Trusted Hair Care in Armoor
            </div>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Hair Loss Treatment in Armoor
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Effective hair loss and hair loss treatment at {CLINIC_NAME}. Led by {DOCTOR_NAME},{" "}
              {QUALIFICATION} — Armoor's trusted dermatologist for personalised hair care and
              restoration.
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
                  "Personalised treatment for all hair types",
                  "PRP therapy & advanced hair care",
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
              Understanding Hair Loss
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              What is Hair Loss?
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                It is normal to lose 50 to 100 hairs every day as part of the natural hair growth
                cycle. This is called hair shedding — old hairs fall out to make room for new ones.
                Most people do not notice this level of shedding.
              </p>
              <p>
                Hair fall becomes a concern when you begin losing more hair than usual, or when hair
                does not grow back at the same rate. Excessive hair loss can lead to visible
                thinning, receding hairlines, and bald patches over time.
              </p>
              <p>
                <strong>Hair thinning</strong> refers to a gradual reduction in hair density across
                the scalp, while <strong>hair loss</strong> involves actual shedding where the
                follicle stops producing hair. It is important to understand the difference between
                temporary shedding (telogen effluvium) and progressive hair loss (androgenetic
                alopecia), as the treatment approach differs for each.
              </p>
              <p>
                Temporary hair loss often resolves once the underlying trigger is addressed.
                Permanent or genetic hair loss requires ongoing management to slow progression and
                stimulate regrowth. Early evaluation by a dermatologist is the best way to determine
                which type you are experiencing.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/diseases/hair-loss-1.png"
              alt="Comparison of healthy hair density to thinning hair"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SignsSymptomsSection() {
  const signs = [
    {
      title: "Excessive Hair Shedding",
      desc: "Finding large amounts of hair on your pillow, in the shower drain, or on your hairbrush. Losing more than 100–150 hairs per day is considered excessive.",
    },
    {
      title: "Thinning Hair",
      desc: "Gradual reduction in hair volume, especially on the crown or top of the scalp. The hair may feel less dense and the scalp may become more visible.",
    },
    {
      title: "Receding Hairline",
      desc: "The hairline moves backward, typically starting at the temples. This is a common early sign of genetic hair loss in both men and women.",
    },
    {
      title: "Bald Patches",
      desc: "Circular or patchy areas of complete hair loss on the scalp. This may indicate alopecia areata or other medical conditions requiring prompt evaluation.",
    },
    {
      title: "Hair Breakage",
      desc: "Hair becomes brittle and breaks off easily, often due to damage, nutritional deficiencies, or underlying scalp conditions.",
    },
    {
      title: "Widening Part Line",
      desc: "The part line on your scalp becomes noticeably wider over time. This is often one of the earliest signs of female pattern hair loss.",
    },
    {
      title: "Reduced Hair Density",
      desc: "The overall fullness and thickness of your hair decreases. Ponytails may feel thinner, and the scalp may be more visible under bright light.",
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
            Common Signs and Symptoms
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Hair fall can present in different ways. Recognising these signs early can help you seek
            treatment at the right time.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signs.map((sign) => (
            <div
              key={sign.title}
              className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-base font-bold text-foreground">{sign.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sign.desc}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            <img
              src="/images/diseases/hair-loss-2.png"
              alt="Common signs of hair loss including receding hairline and thinning crown"
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
      desc: "Family history is the most common cause of hair loss. Androgenetic alopecia (male or female pattern baldness) is hereditary and progressive.",
    },
    {
      title: "Hormonal Imbalance",
      desc: "Changes in hormone levels — including pregnancy, menopause, and thyroid disorders — can trigger temporary or persistent hair loss.",
    },
    {
      title: "Nutritional Deficiencies",
      desc: "Low levels of iron, vitamin D, vitamin B12, zinc, and biotin are strongly linked to hair thinning and increased shedding.",
    },
    {
      title: "Stress",
      desc: "Physical or emotional stress can push hair follicles into a resting phase, causing noticeable shedding 2–3 months after the stressful event.",
    },
    {
      title: "Thyroid Disorders",
      desc: "Both hyperthyroidism and hypothyroidism can disrupt the hair growth cycle. Treating the underlying thyroid condition often improves hair health.",
    },
    {
      title: "PCOS",
      desc: "Polycystic Ovary Syndrome causes hormonal imbalances that can lead to thinning hair on the scalp along with excess facial or body hair.",
    },
    {
      title: "Scalp Infections",
      desc: "Fungal or bacterial infections of the scalp, such as ringworm, can cause patchy hair loss and scaling. These are treatable with medications.",
    },
    {
      title: "Dandruff & Scalp Inflammation",
      desc: "Chronic dandruff and seborrheic dermatitis create an unhealthy scalp environment that weakens hair follicles and increases shedding.",
    },
    {
      title: "Certain Medications",
      desc: "Some drugs — including blood thinners, antidepressants, chemotherapy drugs, and high-dose vitamin A — can cause temporary hair loss.",
    },
    {
      title: "Lifestyle Factors",
      desc: "Poor diet, smoking, excessive alcohol consumption, lack of sleep, and crash dieting can all contribute to hair loss by affecting overall health.",
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
            Causes of Hair Loss
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Hair fall can result from a combination of factors. Identifying the root cause is the
            first step toward effective treatment.
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

function WhoCanExperienceSection() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Who Is Affected
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Who Can Experience Hair Loss?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Hair fall does not discriminate. It can affect anyone, though the underlying causes may
            vary from person to person.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: "Men",
              desc: "Male pattern baldness is the most common type of hair loss in men, often starting with a receding hairline and thinning crown. It can begin as early as the late teens or early twenties.",
            },
            {
              icon: Users,
              title: "Women",
              desc: "Female pattern hair loss typically presents as diffuse thinning over the top of the scalp. Hormonal changes during pregnancy, postpartum, and menopause are common triggers.",
            },
            {
              icon: Users,
              title: "Teenagers",
              desc: "Hair fall in teenagers is often linked to nutritional deficiencies, stress, hormonal changes during puberty, or conditions like PCOS. Early treatment yields good results.",
            },
            {
              icon: Users,
              title: "Older Adults",
              desc: "Age-related hair thinning is natural, but underlying medical conditions, medications, and reduced nutrient absorption can worsen hair loss in older adults.",
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
              How We Diagnose Hair Loss
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                At {CLINIC_NAME}, we take a thorough and systematic approach to diagnosing hair
                fall. Every patient receives a detailed evaluation to identify the root cause before
                any treatment begins.
              </p>
              <p>
                Your consultation will include a review of your medical history, lifestyle, diet,
                and any medications you are taking. This helps us understand factors that may be
                contributing to your hair loss.
              </p>
              <p>
                We perform a careful scalp examination using good lighting and, when necessary, a
                dermatoscope to assess your scalp and hair follicle health. The hair pull test helps
                determine the severity of active shedding.
              </p>
              <p>
                If indicated, we may recommend blood tests to check for nutritional deficiencies
                (iron, vitamin D, zinc, B12), thyroid function, and hormonal imbalances. Based on
                the findings, a personalised treatment plan is created specifically for you.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "Detailed medical history review",
                "Scalp and hair follicle examination",
                "Hair pull test for shedding assessment",
                "Blood tests when necessary (iron, vitamins, thyroid, hormones)",
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
              src="/images/diseases/hair-loss-3.png"
              alt="Dermatologist performing scalp examination"
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
            Hair Loss Treatments Available in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We offer a range of evidence-based treatments tailored to your specific type and cause
            of hair loss.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Medications",
              items: [
                "Topical minoxidil to stimulate hair growth",
                "Oral finasteride for male pattern hair loss (under medical supervision)",
                "Anti-androgen therapy for hormonally related hair loss in women",
                "Vitamin and mineral supplements to correct deficiencies",
              ],
            },
            {
              title: "Nutritional Correction",
              items: [
                "Personalised dietary guidance for hair health",
                "Iron, vitamin D, zinc, and biotin supplementation",
                "Protein intake optimisation",
                "Addressing deficiencies identified through blood tests",
              ],
            },
            {
              title: "PRP Therapy",
              items: [
                "Platelet-Rich Plasma injections to stimulate hair follicles",
                "Uses your own blood components for natural regeneration",
                "Recommended for androgenetic alopecia and thinning hair",
                "Series of sessions for optimal results",
              ],
            },
            {
              title: "Scalp Care & Dandruff Management",
              items: [
                "Medicated shampoos and scalp treatments",
                "Management of seborrheic dermatitis and scalp inflammation",
                "Reducing itch and irritation that worsen hair loss",
                "Regular scalp care routine guidance",
              ],
            },
            {
              title: "Lifestyle Guidance",
              items: [
                "Stress management techniques",
                "Sleep hygiene recommendations",
                "Dietary improvements for better hair health",
                "Avoiding hairstyles and practices that damage hair",
              ],
            },
            {
              title: "Ongoing Monitoring",
              items: [
                "Regular follow-up visits to track progress",
                "Adjustments to treatment based on response",
                "Hair growth assessment at each visit",
                "Long-term maintenance plans",
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
      desc: `Led by ${DOCTOR_NAME}, ${QUALIFICATION}, with extensive experience in diagnosing and treating all types of hair loss — from temporary shedding to genetic baldness.`,
    },
    {
      icon: Microscope,
      title: "Thorough Diagnosis",
      desc: "We do not guess. Every patient receives a detailed scalp examination and, when needed, blood tests to identify the exact cause of hair loss before treatment begins.",
    },
    {
      icon: ShieldCheck,
      title: "Personalised Treatment",
      desc: "Your hair loss treatment plan is tailored to your specific condition, hair type, lifestyle, and goals. No two treatment plans are the same.",
    },
    {
      icon: Sparkles,
      title: "Patient Education",
      desc: "We believe in empowering you with knowledge. You will understand your condition, the treatment options, and how to maintain healthy hair at home.",
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
            Why {CLINIC_NAME} for Hair Loss Treatment?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We combine medical expertise with genuine care to help you achieve healthier, fuller
            hair.
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
      title: "Hair & Scalp Examination",
      desc: `${DOCTOR_NAME} evaluates your scalp and hair, discusses your medical history, and performs necessary assessments to identify the cause.`,
    },
    {
      step: "03",
      title: "Personalised Treatment Plan",
      desc: "A customised treatment plan is created based on your diagnosis — combining medications, procedures, and lifestyle recommendations.",
    },
    {
      step: "04",
      title: "Follow-up & Monitoring",
      desc: "Regular follow-up visits to track your progress, adjust treatment as needed, and ensure you achieve the best possible results.",
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
            From your first visit to long-term hair health — here is what you can expect.
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
      title: "Eat a Balanced Diet",
      desc: "Include protein-rich foods (eggs, fish, legumes), iron-rich greens, and vitamin-rich fruits in your daily meals. Hair is made of protein, and deficiencies directly impact growth.",
    },
    {
      title: "Prioritise Protein Intake",
      desc: "Since hair is primarily composed of keratin (a protein), insufficient protein intake can slow hair growth and lead to brittle, weak hair.",
    },
    {
      title: "Include Iron & Vitamin-Rich Foods",
      desc: "Leafy greens, nuts, seeds, citrus fruits, and dairy products provide essential nutrients like iron, vitamin C, vitamin D, and zinc that support healthy hair growth.",
    },
    {
      title: "Be Gentle With Your Hair",
      desc: "Avoid tight hairstyles, excessive brushing, hot styling tools, and chemical treatments. Use a wide-tooth comb and let hair air-dry when possible.",
    },
    {
      title: "Manage Stress Effectively",
      desc: "Chronic stress can trigger or worsen hair loss. Incorporate relaxation techniques like meditation, deep breathing, or gentle exercise into your routine.",
    },
    {
      title: "Get Adequate Sleep",
      desc: "Your body repairs and regenerates cells, including hair follicles, during sleep. Aim for 7–8 hours of quality sleep each night.",
    },
    {
      title: "Avoid Harsh Chemicals",
      desc: "Limit the use of hair dyes, bleaches, perms, and relaxers. When you do use them, opt for gentle, ammonia-free products and space out treatments.",
    },
    {
      title: "Seek Help Early",
      desc: "If you notice persistent or excessive hair loss, consult a dermatologist promptly. Early intervention significantly improves treatment outcomes.",
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
            Hair Care Tips for Healthier Hair
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Small changes in your daily routine can make a big difference in maintaining healthy
            hair and reducing hair loss.
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
              src="/images/diseases/hair-loss-4.png"
              alt="Healthy, strong hair after treatment"
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
      q: "What causes hair loss?",
      a: "Hair fall can be caused by genetics, hormonal imbalances, nutritional deficiencies (iron, vitamin D, zinc, B12), stress, thyroid disorders, PCOS, scalp infections, dandruff, certain medications, and lifestyle factors. A dermatologist can help identify the specific cause through evaluation and tests.",
    },
    {
      q: "Is hair loss permanent?",
      a: "Not all hair loss is permanent. Temporary shedding from stress, illness, or nutritional deficiencies often reverses with treatment. Genetic hair loss (androgenetic alopecia) is progressive and requires ongoing management, but treatment can significantly slow its progression and stimulate regrowth.",
    },
    {
      q: "Can hair grow back after falling out?",
      a: "In many cases, yes. If the hair follicle is still active and has not been scarred, regrowth is possible with appropriate treatment. The earlier treatment is started, the better the chances of regrowth.",
    },
    {
      q: "How long does hair loss treatment take to show results?",
      a: "Hair grows slowly. Most patients notice reduced shedding within 4–8 weeks. Visible new hair growth typically takes 3–6 months, and optimal results may require 6–12 months of consistent treatment and follow-up.",
    },
    {
      q: "Is PRP effective for hair loss?",
      a: "PRP (Platelet-Rich Plasma) therapy has shown good results for androgenetic alopecia and certain types of hair thinning. It uses your own blood platelets to stimulate hair follicles. Our dermatologist can assess whether you are a suitable candidate during your consultation.",
    },
    {
      q: "Which vitamin deficiency causes hair loss?",
      a: "Common deficiencies linked to hair loss include iron (low ferritin), vitamin D, vitamin B12, zinc, and biotin. A simple blood test can identify these deficiencies, and correction through diet or supplements can help reduce hair loss.",
    },
    {
      q: "Does dandruff cause hair loss?",
      a: "Yes, persistent dandruff and scalp inflammation can contribute to hair loss. Itching and scratching weaken hair follicles, and inflammation can disrupt the normal hair growth cycle. Treating dandruff often helps reduce associated hair loss.",
    },
    {
      q: "Can stress increase hair loss?",
      a: "Yes, stress is a common trigger for hair loss. Conditions like telogen effluvium (temporary excessive shedding) often follow stressful events. Managing stress through lifestyle changes, exercise, and relaxation techniques can help improve hair health.",
    },
    {
      q: "When should I see a dermatologist for hair loss?",
      a: "You should consult a dermatologist if you notice sudden or excessive hair shedding, visible thinning, bald patches, a receding hairline, or if hair loss is causing you concern. Early diagnosis leads to more effective treatment.",
    },
    {
      q: "How much does hair loss treatment cost in Armoor?",
      a: `The cost depends on the type and duration of treatment required. At ${CLINIC_NAME}, we offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
    },
    {
      q: "Can hair loss be reversed naturally?",
      a: "Mild, temporary hair loss caused by stress or nutritional issues may improve with lifestyle changes, a balanced diet, and stress management. However, genetic or medical hair loss typically requires professional treatment for meaningful improvement.",
    },
    {
      q: "Is it normal to lose hair after shampooing?",
      a: "Yes, losing 50–100 hairs per day is normal, and many of these shed during washing. However, if you notice clumps of hair or significantly more shedding than usual, it is worth consulting a dermatologist for evaluation.",
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
            Common questions about hair loss treatment at our clinic in Armoor.
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
      name: "Srinivas Reddy",
      location: "Armoor",
      text: "I was losing a lot of hair and tried many products that did not work. Dr. Raghavendhra took the time to understand my condition and ran blood tests that showed I was low on iron and vitamin D. After three months of treatment, my hair loss has reduced significantly, and I can see new growth. Highly recommend.",
      rating: 5,
    },
    {
      name: "Rajeshwari",
      location: "Balkonda",
      text: "I was very anxious about my hair thinning. The doctor explained everything clearly and put together a treatment plan that suited my lifestyle. The PRP sessions were comfortable, and the staff made me feel at ease. I have been coming here for six months and am happy with the progress.",
      rating: 5,
    },
    {
      name: "Kishan Rao",
      location: "Nizamabad",
      text: "After chemotherapy, I was worried my hair would not grow back. Dr. Raghavendhra reassured me and guided me through the recovery process. My hair has started growing back steadily. Grateful for the care and support.",
      rating: 5,
    },
    {
      name: "Anjali",
      location: "Mortad",
      text: "I had dandruff and hair loss for over a year. A friend recommended this clinic, and I am glad I came. The scalp treatment and medicated shampoos helped control the dandruff, and the hair loss has reduced. The doctor advised me on diet changes too. Very satisfied.",
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
            Real experiences from patients who have undergone hair loss treatment at our clinic.
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
            Patients visit {CLINIC_NAME} from across Armoor and surrounding areas for expert hair
            fall treatment. Our clinic is easily accessible and welcomes patients from all nearby
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
    { name: "Dandruff Treatment", to: "/treatments/$slug", params: { slug: "dandruff-treatment" } },
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
    { name: "Eczema Treatment", to: "/treatments/$slug", params: { slug: "eczema-treatment" } },
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
          Ready to Get Healthier Hair?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Book a consultation with {DOCTOR_NAME}, {QUALIFICATION}, at {CLINIC_NAME} in Armoor. Take
          the first step towards fuller, healthier hair.
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
