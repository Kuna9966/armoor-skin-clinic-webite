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
} from "../lib/clinic-data";

export const Route = createFileRoute("/treatments/acne-treatment-armoor")({
  head: () => ({
    meta: [
      {
        title: `Best Acne Treatment in Armoor | Pimple & Scar Removal | ${DOCTOR_NAME}`,
      },
      {
        name: "description",
        content: `Expert acne treatment in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}. Advanced solutions for pimples, cystic acne, acne scars, and hormonal breakouts. Book your consultation at ${CLINIC_NAME}.`,
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: `Acne Treatment in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        property: "og:description",
        content: `Effective acne and pimple treatment in Armoor by Dr. Raghavendhra MD, DVL. Advanced therapies for acne scars, cystic acne, and hormonal breakouts.`,
      },
      { property: "og:url", content: `${SITE_URL}/treatments/acne-treatment-armoor` },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: `Acne Treatment in Armoor | ${CLINIC_NAME}` },
      {
        name: "twitter:description",
        content: `Expert acne treatment in Armoor by Dr. Raghavendhra — advanced therapies for clear, healthy skin.`,
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
              "@type": "MedicalProcedure",
              name: "Acne Treatment in Armoor",
              description:
                "Comprehensive acne treatment services including medication, chemical peels, and scar management.",
              provider: {
                "@type": "MedicalClinic",
                name: CLINIC_NAME,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Opposite VR Hospital, Beside LK Hospital, Mahalaxmi Colony",
                  addressLocality: "Armoor",
                  addressRegion: "Telangana",
                  postalCode: "503224",
                  addressCountry: "IN",
                },
              },
              relevantSpecialty: "Dermatology",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Acne Treatment Armoor",
                  item: `${SITE_URL}/treatments/acne-treatment-armoor`,
                },
              ],
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
      <WhyChooseSection />
      <TreatmentApproachSection />
      <AcneTypesSection />
      <ProcessSection />
      <FAQSection />
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
          <span className="text-white/90">Acne Treatment in Armoor</span>
        </nav>
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 text-gold" />
              Trusted Dermatology Care in Armoor
            </div>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Acne Treatment in Armoor
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Get clear, healthy skin with expert acne treatment at {CLINIC_NAME}. Led by{" "}
              {DOCTOR_NAME}, {QUALIFICATION} — Armoor's trusted dermatologist for advanced acne
              care, pimple removal, and scar treatment.
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
                  "Expert dermatologist with advanced training",
                  "Customised treatment for all skin types",
                  "Chemical peels & scar management",
                  "Affordable consultation in Armoor",
                  "Monday – Saturday, 11 AM – 6 PM",
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

function WhyChooseSection() {
  const reasons = [
    {
      icon: Stethoscope,
      title: `Expert Dermatologist`,
      desc: `Led by ${DOCTOR_NAME}, ${QUALIFICATION}, with years of experience in treating all types of acne — from mild breakouts to severe cystic acne.`,
    },
    {
      icon: Microscope,
      title: "Advanced Therapies",
      desc: "Access to medical-grade chemical peels, laser therapy, microneedling for scars, and prescription medications tailored to your skin.",
    },
    {
      icon: ShieldCheck,
      title: "Personalised Care",
      desc: "Every treatment plan is customised based on your skin type, acne severity, and lifestyle for the best possible results.",
    },
    {
      icon: Sparkles,
      title: "Proven Results",
      desc: "Hundreds of satisfied patients in Armoor and surrounding areas have achieved clear skin through our comprehensive approach.",
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
            Best Acne Treatment in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            At {CLINIC_NAME}, we combine expert medical knowledge with advanced technology to
            deliver the most effective acne treatment in Armoor.
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

function TreatmentApproachSection() {
  const approaches = [
    {
      title: "Thorough Diagnosis",
      items: [
        "Detailed skin assessment and acne grading",
        "Identification of acne type and underlying causes",
        "Evaluation of skin type, oil production, and sensitivity",
        "Discussion of lifestyle, diet, and skincare routine",
      ],
    },
    {
      title: "Medical Treatments",
      items: [
        "Topical retinoids, antibiotics, and benzoyl peroxide",
        "Oral medications for moderate to severe acne",
        "Hormonal therapy for hormone-related breakouts",
        "Isotretinoin for resistant cystic acne under supervision",
      ],
    },
    {
      title: "Advanced Procedures",
      items: [
        "Medical-grade chemical peels for active acne",
        "Microneedling for acne scar reduction",
        "Laser therapy for pigmentation and scarring",
        "Extraction and drainage of large cysts when needed",
      ],
    },
    {
      title: "Maintenance & Prevention",
      items: [
        "Personalised skincare regimen recommendations",
        "Dietary and lifestyle guidance for clear skin",
        "Regular follow-ups to monitor progress",
        "Sun protection and scar prevention strategies",
      ],
    },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Approach
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Comprehensive Acne Care in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            From diagnosis to long-term maintenance — our four-step approach ensures lasting results
            for every patient.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {approaches.map((approach, i) => (
            <div
              key={approach.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="mb-4 grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                {i + 1}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{approach.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {approach.items.map((item) => (
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

function AcneTypesSection() {
  const types = [
    {
      title: "Whiteheads & Blackheads",
      desc: "Non-inflammatory comedones caused by clogged pores. Effectively treated with topical retinoids and gentle exfoliation.",
    },
    {
      title: "Papules & Pustules",
      desc: "Inflamed red bumps and pus-filled pimples. Treated with prescription medications and anti-inflammatory agents.",
    },
    {
      title: "Cystic Acne",
      desc: "Deep, painful lumps beneath the skin that require professional intervention including oral medications and drainage.",
    },
    {
      title: "Acne Scars & Pigmentation",
      desc: "Post-acne dark spots and textural scars treated with chemical peels, microneedling, and laser therapy for smoother skin.",
    },
    {
      title: "Hormonal Acne",
      desc: "Breakouts related to hormonal fluctuations, commonly along the jawline and chin. Managed with targeted hormonal therapy.",
    },
    {
      title: "Adult Acne",
      desc: "Persistent or late-onset acne in adults. Requires careful evaluation of triggers including stress, diet, and skincare products.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Conditions We Treat
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Types of Acne We Treat in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Whatever type of acne you're dealing with, our clinic has the expertise and technology
            to help you achieve clear skin.
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

function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Book a Consultation",
      desc: "Schedule your visit at our clinic in Armoor. Consultations available Monday to Saturday, 11 AM to 6 PM.",
    },
    {
      step: "02",
      title: "Skin Assessment",
      desc: `Dr. Raghavendhra evaluates your skin, identifies the type and severity of acne, and discusses your medical history and concerns.`,
    },
    {
      step: "03",
      title: "Customised Treatment Plan",
      desc: "A personalised treatment plan is created — combining medications, in-clinic procedures, and skincare recommendations.",
    },
    {
      step: "04",
      title: "Treatment & Follow-up",
      desc: "Begin your treatment with regular follow-ups to track progress, adjust medications, and ensure optimal results.",
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
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Getting started with acne treatment at {CLINIC_NAME} is simple.
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

function FAQSection() {
  const faqs = [
    {
      q: "How long does acne treatment take to show results?",
      a: "Most patients notice visible improvement within 4–6 weeks of starting treatment. Complete clearance typically takes 3–6 months depending on the severity of your acne.",
    },
    {
      q: "Can acne scars be removed completely?",
      a: "While complete removal may not always be possible, modern treatments like microneedling, chemical peels, and laser therapy can significantly reduce the appearance of acne scars by up to 70–80%.",
    },
    {
      q: "Is acne treatment painful?",
      a: "Most treatments are well-tolerated. Chemical peels may cause mild tingling, and microneedling is performed under numbing cream for your comfort. Oral medications involve no discomfort.",
    },
    {
      q: "How much does acne treatment cost in Armoor?",
      a: `We offer affordable acne treatment at ${CLINIC_NAME}. The cost depends on the type and duration of treatment. Please book a consultation for a personalised quote.`,
    },
    {
      q: "Do you treat hormonal acne?",
      a: "Yes, we specialise in treating hormonal acne. Dr. Raghavendhra evaluates hormonal factors and may recommend appropriate therapy alongside topical treatments.",
    },
    {
      q: "What should I avoid during acne treatment?",
      a: "We recommend avoiding harsh scrubs, picking/poping pimples, excessive sun exposure, and oil-based skincare products. Your dermatologist will provide complete guidance.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
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
        </div>
      </div>
    </section>
  );
}
