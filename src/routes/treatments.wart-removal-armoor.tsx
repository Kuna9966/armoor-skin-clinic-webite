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
  AREAS_WE_SERVE,
} from "../lib/clinic-data";

export const Route = createFileRoute("/treatments/wart-removal-armoor")({
  head: () => ({
    meta: [
      {
        title: `Wart Removal in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        name: "description",
        content: `Expert wart removal in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}. Safe cryotherapy, laser, and surgical wart removal for all types of warts at ${CLINIC_NAME}. Book your consultation.`,
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: `Wart Removal in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        property: "og:description",
        content: `Safe and effective wart removal in Armoor by Dr. Raghavendhra MD, DVL. Treatment for common warts, plantar warts, flat warts, and genital warts at Armoor Skin & Hair Clinic.`,
      },
      { property: "og:url", content: `${SITE_URL}/treatments/wart-removal-armoor` },
      { property: "og:type", content: "website" },
      {
        name: "twitter:title",
        content: `Wart Removal in Armoor | ${CLINIC_NAME}`,
      },
      {
        name: "twitter:description",
        content: `Expert wart removal in Armoor by Dr. Raghavendhra — safe, quick, and effective treatment for all wart types.`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/treatments/wart-removal-armoor` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": `${SITE_URL}/treatments/wart-removal-armoor#clinic`,
              name: CLINIC_NAME,
              description: `Wart removal in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}.`,
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
              "@id": `${SITE_URL}/treatments/wart-removal-armoor#business`,
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
              "@id": `${SITE_URL}/treatments/wart-removal-armoor#breadcrumbs`,
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
                  name: "Wart Removal in Armoor",
                  item: `${SITE_URL}/treatments/wart-removal-armoor`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/treatments/wart-removal-armoor#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is wart removal painful?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cryotherapy and cautery may cause mild discomfort during the procedure, but it is brief and well-tolerated by most patients. Local anaesthesia can be used when needed for larger or sensitive warts.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do warts come back after removal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "There is a small chance of recurrence as warts are caused by a virus (HPV). Multiple sessions may be needed for complete clearance. We also provide preventive advice to reduce spread and recurrence.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How many sessions are needed for wart removal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most warts resolve in 1–3 sessions. Plantar warts and large warts may require additional treatments. Your dermatologist will recommend a treatment plan based on the type, size, and number of warts.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are warts contagious?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, warts are contagious. HPV can spread through direct skin-to-skin contact or contact with contaminated surfaces. Avoid picking at warts and wash your hands thoroughly after touching them.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can warts go away on their own?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Some warts may resolve on their own over months or years, but this is unpredictable. Treatment is recommended to speed up clearance, prevent spread to other areas, and reduce discomfort.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the best treatment for warts?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The best treatment depends on the type, location, and number of warts. Cryotherapy, laser removal, electrocautery, and topical medications are all effective options. Your dermatologist will recommend the most suitable treatment for you.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can warts spread to other parts of the body?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, warts can spread to other parts of your body through direct contact. Picking or scratching a wart can transfer the virus to other areas. Treatment and good hygiene help prevent spread.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there home remedies for wart removal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Over-the-counter treatments like salicylic acid are available, but professional removal is safer and more effective. Home remedies can cause scarring or incomplete removal. We recommend consulting a dermatologist for proper treatment.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I remove a wart at home?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We do not recommend removing warts at home as it can lead to infection, scarring, and incomplete removal. Professional treatment ensures safe, complete removal with minimal discomfort and lower risk of recurrence.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does wart removal cost in Armoor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `The cost of wart removal at ${CLINIC_NAME} depends on the type, size, number of warts, and treatment method. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
                  },
                },
              ],
            },
            {
              "@type": "MedicalProcedure",
              name: "Wart Removal in Armoor",
              description:
                "Comprehensive wart removal services including cryotherapy, electrocautery, laser treatment, chemical cautery, and topical medications.",
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
  component: WartRemovalArmoorPage,
});

function WartRemovalArmoorPage() {
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
          <span className="text-white/90">Wart Removal in Armoor</span>
        </nav>
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 text-gold" />
              Expert Wart Removal in Armoor
            </div>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Wart Removal in Armoor
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Safe and effective wart removal at {CLINIC_NAME}. Led by {DOCTOR_NAME},{" "}
              {QUALIFICATION} — Armoor's trusted dermatologist for treating all types of warts with
              modern, minimally invasive techniques.
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
                  "Treatment for all types of warts",
                  "Cryotherapy, laser & cautery available",
                  "Minimal discomfort, quick procedure",
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
              Understanding Warts
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              What are Warts?
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Warts are small, benign skin growths caused by the human papillomavirus (HPV). They
                can appear anywhere on the body and vary in appearance depending on the type of HPV
                strain and the location of the growth. Warts are non-cancerous but can be
                uncomfortable, unsightly, and contagious.
              </p>
              <p>
                HPV infects the top layer of skin through tiny cuts or breaks. The virus triggers
                rapid growth of skin cells, resulting in a raised, rough bump. Warts are most common
                in children and young adults but can affect people of all ages.
              </p>
              <p>
                There are several types of warts, each caused by different strains of HPV. Common
                warts, plantar warts, flat warts, filiform warts, and genital warts all require
                specific treatment approaches. A proper diagnosis by a dermatologist is essential
                for effective treatment.
              </p>
              <p>
                Warts are often mistaken for other skin growths like moles, skin tags, or corns.
                While some warts may resolve on their own over months or years, treatment is
                recommended to reduce discomfort, prevent spread, and avoid transmission to others.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-secondary/40">
            <div className="flex aspect-[4/3] items-center justify-center p-8">
              <div className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <AlertCircle className="h-8 w-8" />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">Wart on Skin</p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Replace with an image showing wart-affected skin
                </p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Alt: Illustration showing raised, rough wart growths on skin
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
      title: "Small Rough Bumps",
      desc: "Flesh-coloured, grey, or brown raised bumps with a rough, cauliflower-like surface are the hallmark of common warts. They typically appear on fingers, hands, and knees.",
    },
    {
      title: "Plantar Wart Pain",
      desc: "Plantar warts on the soles of the feet can be painful when walking or standing, as the pressure pushes the wart inward. They often have a hard, thick callus over them.",
    },
    {
      title: "Flat Warts",
      desc: "Smooth, flat-topped, flesh-coloured bumps that appear in clusters on the face, hands, or legs. They are smaller than other warts and may be mistaken for acne.",
    },
    {
      title: "Filiform Warts",
      desc: "Long, narrow, thread-like growths that often appear on the face, especially around the eyes, nose, and mouth. They grow quickly and can be bothersome.",
    },
    {
      title: "Clusters",
      desc: "Warts often appear in groups and can multiply quickly if left untreated. Mosaic warts are clusters of plantar warts that form a larger patch on the foot.",
    },
    {
      title: "Black Dots",
      desc: "Tiny black dots (clotted blood vessels) inside the wart are common, especially with common and plantar warts. These are often called wart seeds.",
    },
    {
      title: "Rough Texture",
      desc: "The surface of a wart is typically rough and scaly to the touch, unlike smooth moles or skin tags. This rough texture helps distinguish warts from other growths.",
    },
    {
      title: "Rapid Growth",
      desc: "Warts can grow quickly, especially in children and people with weakened immune systems. New warts may appear near existing ones through autoinoculation.",
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
            Common Symptoms of Warts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Warts can vary in appearance depending on the type. Recognising the symptoms early helps
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
                Wart Symptoms Illustration
              </p>
              <p className="mt-1 text-xs text-muted-foreground/80">
                Replace with an infographic showing common wart symptoms
              </p>
              <p className="text-xs text-muted-foreground/80">
                Alt: Illustration showing different types of wart growths on skin
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
      title: "HPV Infection",
      desc: "Warts are caused by the human papillomavirus (HPV). Over 100 strains of HPV exist, and different strains cause different types of warts on various parts of the body.",
    },
    {
      title: "Direct Contact",
      desc: "The virus spreads through direct skin-to-skin contact with an infected person. This is the most common mode of transmission for all types of warts.",
    },
    {
      title: "Contaminated Surfaces",
      desc: "HPV can survive on surfaces like public pool floors, gym showers, and changing rooms. Walking barefoot in these areas increases the risk of developing plantar warts.",
    },
    {
      title: "Skin Breaks",
      desc: "Minor cuts, scrapes, or breaks in the skin provide an entry point for the HPV virus. Damaged skin is more susceptible to infection than healthy, intact skin.",
    },
    {
      title: "Weakened Immunity",
      desc: "People with weakened immune systems are more susceptible to HPV infection and may develop more warts that are harder to treat. This includes those on immunosuppressive medications.",
    },
    {
      title: "Nail Biting",
      desc: "Biting nails or picking at hangnails can create small breaks in the skin around the fingers, making it easier for HPV to enter and cause warts around the nails.",
    },
    {
      title: "Sharing Personal Items",
      desc: "Sharing towels, razors, shoes, or socks with an infected person can spread the virus. Avoid sharing personal items to reduce the risk of infection.",
    },
    {
      title: "Age",
      desc: "Children and young adults are more prone to warts because their immune systems are still developing and may not fully recognise and fight the virus.",
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
            What Causes Warts?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Warts are caused by the HPV virus and can be triggered by various environmental and
            personal factors.
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
      title: "Common Warts",
      desc: "Small, rough, flesh-coloured or grey bumps that typically appear on the fingers, hands, elbows, and knees. They have a cauliflower-like surface and may contain tiny black dots (clotted blood vessels).",
    },
    {
      title: "Plantar Warts",
      desc: "Hard, grainy growths on the soles of the feet. They grow inward due to walking pressure and can be painful. Plantar warts often have a small black dot in the centre and may form clusters (mosaic warts).",
    },
    {
      title: "Flat Warts",
      desc: "Small, smooth, flat-topped, flesh-coloured bumps that appear in clusters on the face, neck, hands, or legs. They are much smaller and smoother than common warts and can spread quickly through shaving.",
    },
    {
      title: "Filiform Warts",
      desc: "Long, narrow, thread-like growths that often appear on the face, particularly around the eyes, nose, and mouth. They grow rapidly and have a distinctive finger-like projection appearance.",
    },
    {
      title: "Genital Warts",
      desc: "Flesh-coloured or grey growths that appear in the genital and anal area. They are sexually transmitted and require specialised treatment. Genital warts should always be evaluated by a healthcare professional.",
    },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Types of Warts
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Different Types of Warts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            There are several types of warts, each caused by different strains of HPV and affecting
            different areas of the body.
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
              How We Diagnose Warts
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                At {CLINIC_NAME}, diagnosing warts is typically straightforward. Most warts can be
                identified by their characteristic appearance during a visual examination alone. Our
                dermatologist will assess the size, shape, texture, and location of the growth.
              </p>
              <p>
                We begin by reviewing your medical history and discussing when the wart first
                appeared, whether it has changed or grown, and if you have a history of warts. We
                also check for signs of spread or autoinoculation to nearby skin areas.
              </p>
              <p>
                In most cases, a dermatoscope — a specialised magnifying tool — is used to examine
                the wart in detail. This helps distinguish warts from other skin growths like moles,
                skin tags, corns, or calluses, which can sometimes look similar.
              </p>
              <p>
                In rare cases where the diagnosis is uncertain, a skin biopsy may be performed. This
                involves taking a small sample of the growth for laboratory analysis. The procedure
                is quick, safe, and provides a definitive diagnosis, especially when ruling out
                other skin conditions.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "Detailed visual examination of the growth",
                "Dermatoscopic evaluation for accurate diagnosis",
                "Assessment of wart type, size, and depth",
                "Skin biopsy only when necessary",
                "Differentiation from moles, skin tags, and corns",
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
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Replace with a photo of a dermatologist examining a patient's wart
                </p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Alt: Dermatologist examining a wart at Armoor Skin & Hair Clinic
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
            Wart Removal Treatments Available in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We offer a range of safe and effective wart removal treatments tailored to the type,
            size, and location of your warts.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Cryotherapy",
              items: [
                "Freezing the wart with liquid nitrogen at extreme temperatures",
                "The wart tissue dies and falls off within days to weeks",
                "Quick procedure with minimal discomfort",
                "Effective for common warts, plantar warts, and flat warts",
              ],
            },
            {
              title: "Laser Treatment",
              items: [
                "Pulsed dye laser (PDL) targets blood vessels feeding the wart",
                "CO2 laser vaporises wart tissue for stubborn or resistant warts",
                "Precise and effective for difficult-to-treat warts",
                "Minimal damage to surrounding healthy skin",
              ],
            },
            {
              title: "Topical Medications",
              items: [
                "Salicylic acid preparations for gradual wart removal",
                "Imiquimod cream stimulates immune response against HPV",
                "Trichloroacetic acid (TCA) chemical cautery for controlled removal",
                "Suitable for multiple or clustered warts",
              ],
            },
            {
              title: "Surgical Removal",
              items: [
                "Electrocautery and curettage for quick, effective removal",
                "Surgical excision under local anaesthesia for large warts",
                "Minimally invasive with same-day discharge",
                "Minimal scarring with proper post-procedure care",
              ],
            },
            {
              title: "Home Care & Prevention",
              items: [
                "Proper hygiene to prevent spread to other areas",
                "Avoiding picking or scratching warts",
                "Keeping feet clean and dry to prevent plantar warts",
                "Protective footwear in public pools and gym areas",
              ],
            },
            {
              title: "Immunotherapy",
              items: [
                "Topical immunotherapy for multiple or resistant warts",
                "DPCP application to stimulate local immune response",
                "Intralesional immunotherapy for stubborn warts",
                "Effective for patients with weakened immune systems",
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
      desc: `Led by ${DOCTOR_NAME}, ${QUALIFICATION}, with extensive experience in diagnosing and treating all types of warts using modern, evidence-based techniques.`,
    },
    {
      icon: Microscope,
      title: "Advanced Technology",
      desc: "We use cryotherapy, laser, electrocautery, and other advanced equipment for precise, effective wart removal with minimal discomfort and quick recovery.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Hygienic",
      desc: "All procedures are performed in a sterilised clinical environment following strict infection control protocols. Your safety is our top priority.",
    },
    {
      icon: Sparkles,
      title: "Comprehensive Care",
      desc: "From diagnosis to treatment and follow-up, we provide end-to-end care. We also offer preventive advice to reduce recurrence and spread.",
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
            Why {CLINIC_NAME} for Wart Removal?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We combine medical expertise with modern technology to provide safe and effective wart
            removal.
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
      title: "Wart Assessment",
      desc: `${DOCTOR_NAME} examines your wart, determines its type and extent, and discusses the most suitable treatment options based on your needs.`,
    },
    {
      step: "03",
      title: "Treatment Procedure",
      desc: "The chosen treatment — cryotherapy, laser, cautery, or topical — is performed in the clinic. Most procedures are quick and completed in a single session.",
    },
    {
      step: "04",
      title: "Follow-up & Prevention",
      desc: "We schedule follow-up visits to assess healing, check for recurrence, and provide guidance on preventing spread to other areas or to others.",
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
            From your first visit to complete wart clearance — here is what you can expect.
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
      title: "Don't Pick or Scratch",
      desc: "Avoid picking, scratching, or biting warts. This can spread the virus to other parts of your body and increase the risk of infection and scarring.",
    },
    {
      title: "Keep Hands Clean",
      desc: "Wash your hands thoroughly after touching a wart. This reduces the risk of spreading the virus to other areas of your body or to other people.",
    },
    {
      title: "Cover Warts",
      desc: "Cover warts with a waterproof bandage or tape to prevent contact with others. This is especially important for children to prevent spread at school or during play.",
    },
    {
      title: "Wear Footwear in Public Areas",
      desc: "Always wear flip-flops or water shoes in public pools, gym showers, locker rooms, and changing areas to protect against plantar warts.",
    },
    {
      title: "Don't Share Personal Items",
      desc: "Avoid sharing towels, razors, socks, shoes, nail clippers, or other personal items with others. HPV can survive on surfaces and spread through contaminated items.",
    },
    {
      title: "Keep Feet Dry",
      desc: "Change socks daily and keep feet clean and dry. Moisture creates an environment where the HPV virus can thrive and increase the risk of developing warts.",
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
            Tips for Preventing Warts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Small changes in your daily habits can help prevent wart infection and reduce the risk
            of spreading existing warts.
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
                Prevention Tips Illustration
              </p>
              <p className="mt-1 text-xs text-muted-foreground/80">
                Replace with an image showing hygiene and prevention tips
              </p>
              <p className="text-xs text-muted-foreground/80">
                Alt: Illustration showing wart prevention practices
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
      q: "Is wart removal painful?",
      a: "Cryotherapy and cautery may cause mild discomfort during the procedure, but it is brief and well-tolerated by most patients. Local anaesthesia can be used when needed for larger or more sensitive warts.",
    },
    {
      q: "Do warts come back after removal?",
      a: "There is a small chance of recurrence as warts are caused by a virus (HPV). Multiple sessions may be needed for complete clearance. We provide preventive advice to reduce recurrence and spread.",
    },
    {
      q: "How many sessions are needed for wart removal?",
      a: "Most warts resolve in 1–3 sessions. Plantar warts and large warts may require additional treatments. Your dermatologist will recommend a treatment plan based on the type, size, and number of warts.",
    },
    {
      q: "Are warts contagious?",
      a: "Yes, warts are contagious. HPV can spread through direct skin-to-skin contact or contact with contaminated surfaces. Avoid picking at warts and wash your hands after touching them.",
    },
    {
      q: "Can warts go away on their own?",
      a: "Some warts may resolve on their own over months or years, but this is unpredictable. Treatment is recommended to speed up clearance, prevent spread to other areas, and reduce discomfort.",
    },
    {
      q: "What is the best treatment for warts?",
      a: "The best treatment depends on the type, location, and number of warts. Cryotherapy, laser, electrocautery, and topical medications are all effective. Your dermatologist will recommend the most suitable option.",
    },
    {
      q: "Can warts spread to other parts of the body?",
      a: "Yes, warts can spread through direct contact. Picking or scratching a wart can transfer the virus to other areas. Treatment and good hygiene help prevent spread.",
    },
    {
      q: "Are there home remedies for wart removal?",
      a: "Over-the-counter treatments like salicylic acid are available, but professional removal is safer and more effective. Home remedies can cause scarring or incomplete removal. We recommend consulting a dermatologist.",
    },
    {
      q: "Can I remove a wart at home?",
      a: "We do not recommend removing warts at home as it can lead to infection, scarring, and incomplete removal. Professional treatment ensures safe, complete removal with minimal discomfort.",
    },
    {
      q: "How much does wart removal cost in Armoor?",
      a: `The cost of wart removal at ${CLINIC_NAME} depends on the type, size, number of warts, and treatment method chosen. We offer affordable and transparent pricing. Please book a consultation for a personalised treatment plan and cost estimate.`,
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
            Common questions about wart removal treatment at our clinic in Armoor.
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
      text: "I had a large wart on my finger that I had for over a year. Dr. Raghavendhra recommended cryotherapy and it was over in minutes. The wart fell off within a week and there is no scar. Very happy with the result.",
      rating: 5,
    },
    {
      name: "Laxmi",
      location: "Nizamabad",
      text: "My daughter had multiple flat warts on her face. The doctor prescribed a topical cream and after a few weeks the warts cleared completely. She is so much more confident now. Thank you for the gentle care.",
      rating: 5,
    },
    {
      name: "Venkatesh",
      location: "Balkonda",
      text: "I had painful plantar warts on my feet that made walking difficult. Dr. Raghavendhra treated them with laser and now I can walk without pain. The procedure was comfortable and the recovery was quick.",
      rating: 5,
    },
    {
      name: "Rajeshwari",
      location: "Mortad",
      text: "I developed several warts on my hands that kept spreading. The doctor used electrocautery to remove them all in one session. The healing was smooth and there has been no recurrence. Excellent care.",
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
            Real experiences from patients who have undergone wart removal treatment at our clinic.
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
            Patients visit {CLINIC_NAME} from across Armoor and surrounding areas for expert wart
            removal treatment. Our clinic is easily accessible and welcomes patients from all nearby
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
    { name: "Dandruff Treatment", to: "/treatments/$slug", params: { slug: "dandruff-treatment" } },
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
    { name: "Mole Removal", to: "/treatments/$slug", params: { slug: "mole-removal" } },
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
          Ready to Remove Your Warts?
        </h2>
        <p className="mt-3 text-base text-white/80">
          Book a consultation with {DOCTOR_NAME}, {QUALIFICATION}, at {CLINIC_NAME} in Armoor. Say
          goodbye to warts with safe, effective treatment.
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
