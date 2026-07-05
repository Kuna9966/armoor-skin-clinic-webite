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

export const Route = createFileRoute("/treatments/mole-removal-armoor")({
  head: () => ({
    meta: [
      {
        title: `Mole Removal in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        name: "description",
        content: `Expert mole removal in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}. Safe removal of raised moles, flat moles, and atypical nevi with dermoscopic evaluation at ${CLINIC_NAME}. Book your consultation.`,
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: `Mole Removal in Armoor | ${CLINIC_NAME} | ${DOCTOR_NAME}`,
      },
      {
        property: "og:description",
        content: `Safe and precise mole removal in Armoor by Dr. Raghavendhra MD, DVL. Surgical excision, shave removal, laser treatment, and mole evaluation at Armoor Skin & Hair Clinic.`,
      },
      { property: "og:url", content: `${SITE_URL}/treatments/mole-removal-armoor` },
      { property: "og:type", content: "website" },
      {
        name: "twitter:title",
        content: `Mole Removal in Armoor | ${CLINIC_NAME}`,
      },
      {
        name: "twitter:description",
        content: `Expert mole removal in Armoor by Dr. Raghavendhra — safe, precise, and caring treatment for all mole types.`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/treatments/mole-removal-armoor` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": `${SITE_URL}/treatments/mole-removal-armoor#clinic`,
              name: CLINIC_NAME,
              description: `Mole removal in Armoor by ${DOCTOR_NAME} ${QUALIFICATION}.`,
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
              "@id": `${SITE_URL}/treatments/mole-removal-armoor#business`,
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
              "@id": `${SITE_URL}/treatments/mole-removal-armoor#breadcrumbs`,
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
                  name: "Mole Removal in Armoor",
                  item: `${SITE_URL}/treatments/mole-removal-armoor`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/treatments/mole-removal-armoor#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is mole removal safe?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, mole removal is a safe procedure when performed by a qualified dermatologist. At our clinic, we follow strict sterilisation protocols, use dermoscopic evaluation before removal, and recommend histopathological examination for suspicious moles to ensure complete safety.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will mole removal leave a scar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most mole removals leave minimal scarring that fades significantly over time. Our techniques are designed to minimise visible marks, and we provide post-procedure care instructions to promote optimal healing. Shave excisions typically leave flatter scars than surgical excisions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "When should I get a mole checked?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You should get any mole checked if it changes in size, shape, or colour, becomes itchy or bleeds, has irregular borders or multiple colours, or if you have a family history of skin cancer. We recommend an annual skin check for everyone, especially those with multiple moles or fair skin.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does mole removal hurt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mole removal is performed under local anaesthesia, so you will not feel pain during the procedure. You may feel a mild pinprick from the anaesthetic injection. After the procedure, mild discomfort or soreness is normal and can be managed with over-the-counter pain relievers if needed.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does mole removal take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The procedure itself typically takes 15 to 30 minutes, depending on the size, depth, and location of the mole. This includes cleaning the area, administering local anaesthesia, removing the mole, and placing sutures if required. You can go home immediately after the procedure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can moles grow back after removal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "If a mole is completely removed, it generally does not grow back. However, some moles, especially those removed by shave excision, may have a small chance of regrowth if a few pigment cells remain. Surgical excision with clear margins has the lowest recurrence rate.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are all moles cancerous?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, the vast majority of moles are benign (non-cancerous). Only a small percentage of moles develop into melanoma or other skin cancers. However, any changing or atypical mole should be evaluated by a dermatologist to rule out malignancy.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the difference between a mole and a skin tag?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Moles (nevi) are growths of pigment-producing cells (melanocytes) and can be flat or raised, brown, black, or flesh-coloured. Skin tags are small, soft, flesh-coloured growths made of loose collagen fibres and blood vessels, usually attached by a thin stalk. Both can be removed for cosmetic or medical reasons.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does mole removal cost in Armoor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `The cost of mole removal at ${CLINIC_NAME} depends on the size, type, and number of moles being removed, as well as the removal technique used. We offer affordable and transparent pricing. Please book a consultation for a personalised evaluation and cost estimate.`,
                  },
                },
              ],
            },
            {
              "@type": "MedicalProcedure",
              name: "Mole Removal in Armoor",
              description:
                "Comprehensive mole removal services including shave excision, surgical excision, laser removal, and cryotherapy for all mole types.",
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
  component: MoleRemovalArmoorPage,
});

function MoleRemovalArmoorPage() {
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
          <span className="text-white/90">Mole Removal in Armoor</span>
        </nav>
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 text-gold" />
              Expert Mole Removal in Armoor
            </div>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Mole Removal in Armoor
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Safe and precise mole removal at {CLINIC_NAME}. Led by {DOCTOR_NAME}, {QUALIFICATION}{" "}
              — Armoor's trusted dermatologist for mole evaluation, removal, and skin cancer
              screening.
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
                  "Dermoscopic evaluation of all moles",
                  "Safe removal with minimal scarring",
                  "Histopathology for suspicious moles",
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
              Understanding Moles
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              What are Moles?
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Moles, medically known as nevi, are common skin growths that develop when
                pigment-producing cells called melanocytes grow in clusters rather than being spread
                evenly throughout the skin. They can appear anywhere on the body, alone or in
                groups, and vary widely in colour, size, and shape.
              </p>
              <p>
                Most moles develop during childhood and adolescence, and the average adult has
                between 10 and 40 moles. They can be flat or raised, smooth or rough, and range in
                colour from pink and tan to brown, blue, or black. Some moles are present at birth
                (congenital nevi), while others develop later in life.
              </p>
              <p>
                The vast majority of moles are harmless. However, some moles — particularly atypical
                or dysplastic nevi — have a higher risk of developing into melanoma, a serious form
                of skin cancer. This is why regular skin checks and mole evaluation by a
                dermatologist are important, especially if you have many moles or a family history
                of skin cancer.
              </p>
              <p>
                Mole removal may be recommended for medical reasons (suspicious or changing moles),
                cosmetic reasons (unwanted appearance), or functional reasons (moles that are
                irritated by clothing, jewellery, or shaving). At {CLINIC_NAME}, we perform thorough
                dermoscopic evaluation before recommending any removal procedure.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-secondary/40">
            <div className="flex aspect-[4/3] items-center justify-center p-8">
              <div className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <AlertCircle className="h-8 w-8" />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">Mole on Skin</p>
                <p className="mt-1 text-xs text-muted-foreground/60">
                  Replace with an image showing different types of moles
                </p>
                <p className="mt-1 text-xs text-muted-foreground/60">
                  Alt: Illustration of various mole types on skin
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
      title: "Brown or Black Spots",
      desc: "Moles typically appear as brown, black, or flesh-coloured spots on the skin. They may be flat or slightly raised and can vary in size from a pinpoint to several centimetres across.",
    },
    {
      title: "Raised Growths",
      desc: "Some moles are raised above the skin surface. These may have a smooth, dome-shaped appearance or a rough, wart-like texture. Raised moles are common on the face, neck, and trunk.",
    },
    {
      title: "Changes in Size or Shape",
      desc: "Moles that change in size, shape, or colour — especially those that become asymmetric or develop irregular borders — require immediate evaluation by a dermatologist.",
    },
    {
      title: "Itching or Bleeding",
      desc: "A mole that becomes itchy, painful, tender, or starts bleeding or crusting may indicate underlying changes and should be examined promptly. This can be a sign of irritation or, in some cases, malignancy.",
    },
    {
      title: "Multiple Colours",
      desc: "Moles that contain multiple colours — such as tan, brown, black, red, white, or blue — are considered atypical and warrant a thorough dermoscopic evaluation to rule out melanoma.",
    },
    {
      title: "Irregular Borders",
      desc: "Moles with irregular, notched, or blurred borders are characteristic of dysplastic nevi and may require biopsy. Normal moles typically have smooth, round, or oval borders.",
    },
    {
      title: "Large Diameter",
      desc: "Moles larger than 6 millimetres in diameter (about the size of a pencil eraser) should be evaluated. Larger moles, especially congenital nevi, have a higher risk of malignant transformation.",
    },
    {
      title: "New Moles in Adulthood",
      desc: "While new moles commonly appear in childhood, the appearance of a new mole after age 30 should be evaluated by a dermatologist to ensure it is benign.",
    },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Recognising Moles
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Signs and Appearance of Moles
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Moles can vary widely in appearance. Knowing what to look for helps in early detection
            of potentially problematic moles.
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
                ABCDE Mole Check Guide
              </p>
              <p className="mt-1 text-xs text-muted-foreground/60">
                Replace with an ABCDE mole self-examination infographic
              </p>
              <p className="text-xs text-muted-foreground/60">
                Alt: ABCDE rule for mole self-examination — Asymmetry, Border, Colour, Diameter,
                Evolving
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
      title: "Genetics",
      desc: "Family history plays a significant role in the number and type of moles you develop. People with a family history of many moles or atypical moles (dysplastic nevi) are at higher risk.",
    },
    {
      title: "Sun Exposure",
      desc: "Ultraviolet radiation from the sun can stimulate melanocytes to produce more pigment and form new moles. Sun exposure also increases the risk of existing moles becoming atypical or malignant.",
    },
    {
      title: "Hormonal Changes",
      desc: "Hormonal fluctuations during puberty, pregnancy, and menopause can cause existing moles to darken, enlarge, or become more prominent. New moles may also appear during these periods.",
    },
    {
      title: "Melanocyte Clustering",
      desc: "Moles form when melanocytes grow in clusters rather than evenly distributing in the skin. The reason this occurs is not fully understood, but it is believed to involve both genetic and environmental factors.",
    },
    {
      title: "Fair Skin",
      desc: "People with fair skin, light hair, and light eyes tend to develop more moles than those with darker skin. They are also at higher risk for sun damage and melanoma.",
    },
    {
      title: "Age",
      desc: "Moles commonly appear during childhood and adolescence. Most people develop their full set of moles by early adulthood. New moles appearing after age 30 warrant evaluation.",
    },
    {
      title: "Immune Suppression",
      desc: "Individuals with weakened immune systems — due to medications, organ transplantation, or medical conditions — may develop more moles and have a higher risk of mole-related skin cancers.",
    },
    {
      title: "Congenital Factors",
      desc: "Some moles are present at birth (congenital nevi). Larger congenital nevi, particularly those over 20 cm, carry a higher risk of developing into melanoma and require regular monitoring.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Causes
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            What Causes Moles?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Moles develop due to a combination of genetic, environmental, and hormonal factors.
            Understanding these can help you assess your risk.
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
      title: "Junction Nevus",
      desc: "A flat, brown to black mole where the nests of melanocytes are located at the junction of the epidermis and dermis. These are typically benign and common in childhood. They may evolve into compound nevi over time.",
    },
    {
      title: "Compound Nevus",
      desc: "A raised, light to dark brown mole where melanocyte nests are present in both the epidermis and dermis. Compound nevi are very common in adults and often have a dome-shaped appearance with a smooth or slightly rough surface.",
    },
    {
      title: "Intradermal Nevus",
      desc: "A flesh-coloured to light brown, dome-shaped mole where melanocyte nests are located entirely within the dermis. These are common on the face and neck in adults and often have a soft, rubbery texture with hair growing from them.",
    },
    {
      title: "Dysplastic Nevus",
      desc: "An atypical mole that is larger than normal moles and has irregular borders, uneven colour distribution, and a mixture of tan, brown, black, and sometimes pink hues. Dysplastic nevi have a higher risk of developing into melanoma and require regular monitoring.",
    },
    {
      title: "Congenital Nevus",
      desc: "A mole present at birth, ranging from small to very large. Small congenital nevi are common and generally low risk. Large or giant congenital nevi (over 20 cm) carry a significantly higher risk of melanoma and need lifelong monitoring.",
    },
  ];

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Types of Moles
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Different Types of Moles (Nevi)
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Moles are classified based on their location in the skin layers and their microscopic
            features. Each type has distinct characteristics and risk profiles.
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
              How We Evaluate Moles
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                At {CLINIC_NAME}, we use a comprehensive approach to evaluate every mole before
                recommending any treatment. Our goal is to accurately identify benign moles while
                detecting any suspicious or potentially malignant lesions early.
              </p>
              <p>
                The evaluation begins with a thorough medical history and a full-body skin
                examination. We assess each mole's size, shape, colour, border, and evolution over
                time — following the ABCDE rule (Asymmetry, Border irregularity, Colour variation,
                Diameter, Evolving).
              </p>
              <p>
                We use dermoscopy, a non-invasive technique that allows us to examine the
                microscopic structures of moles using a specialised magnifying device with polarised
                light. Dermoscopy significantly improves diagnostic accuracy and helps us identify
                moles that require biopsy or removal.
              </p>
              <p>
                For moles that appear suspicious on dermoscopic examination, we recommend excision
                biopsy with histopathological analysis. This involves removing the mole and sending
                it to a laboratory for microscopic examination to rule out or confirm malignancy.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "Comprehensive full-body skin examination",
                "Dermoscopic evaluation of every mole",
                "ABCDE mole assessment for skin cancer screening",
                "Photographic documentation for mole mapping",
                "Excision biopsy with histopathology when indicated",
                "Accurate diagnosis before any treatment decision",
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
                  <Microscope className="h-8 w-8" />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  Dermoscopic Evaluation
                </p>
                <p className="mt-1 text-xs text-muted-foreground/60">
                  Replace with a photo of dermoscopic mole examination
                </p>
                <p className="mt-1 text-xs text-muted-foreground/60">
                  Alt: Dermatologist using a dermoscope to examine a mole at Armoor Skin & Hair
                  Clinic
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
            Mole Removal Treatments Available in Armoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We offer several mole removal techniques tailored to the type, size, and location of the
            mole, as well as your cosmetic preferences.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Surgical Excision",
              items: [
                "Removal of the entire mole along with a small margin of healthy skin",
                "Closed with fine sutures for optimal healing",
                "Ideal for deep, suspicious, or large moles",
                "Tissue can be sent for histopathological examination",
                "Minimal recurrence rate",
              ],
            },
            {
              title: "Shave Excision",
              items: [
                "Raised moles are shaved off at the skin surface level",
                "No sutures required — heals naturally",
                "Quick procedure with minimal discomfort",
                "Suitable for benign raised or dome-shaped moles",
                "May leave a flat scar that fades over time",
              ],
            },
            {
              title: "Laser Removal",
              items: [
                "Targeted laser energy breaks down pigment in flat moles",
                "Minimal downtime and no surgical incision",
                "Suitable for small, flat, benign moles",
                "May require multiple sessions for complete clearance",
                "Less scarring compared to surgical methods",
              ],
            },
            {
              title: "Cryotherapy",
              items: [
                "Liquid nitrogen is used to freeze and destroy mole tissue",
                "Quick, in-office procedure with no anaesthesia",
                "Suitable for small, superficial, benign moles",
                "The mole crusts and falls off within 1–2 weeks",
                "May leave a small white or light scar",
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
      desc: `Led by ${DOCTOR_NAME}, ${QUALIFICATION}, with extensive experience in mole evaluation, dermoscopy, and skin cancer screening — ensuring accurate diagnosis and safe removal.`,
    },
    {
      icon: Microscope,
      title: "Dermoscopic Evaluation",
      desc: "We examine every mole using a high-resolution dermoscope, allowing us to see structures beneath the skin surface and detect suspicious moles that may not be visible to the naked eye.",
    },
    {
      icon: ShieldCheck,
      title: "Safe Removal",
      desc: "All removal procedures are performed under strict sterile conditions. We prioritise safety, minimal scarring, and histopathological examination of any suspicious tissue.",
    },
    {
      icon: Sparkles,
      title: "Cosmetic Excellence",
      desc: "We understand that cosmetic outcome matters. Our techniques are chosen to minimise visible scarring, and we provide comprehensive aftercare instructions for optimal healing.",
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
            Why {CLINIC_NAME} for Mole Removal?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            We combine medical precision with cosmetic care to deliver safe and satisfying mole
            removal outcomes.
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
      title: "Mole Evaluation",
      desc: `${DOCTOR_NAME} examines your mole(s) using dermoscopy, assess them using the ABCDE criteria, and discusses your concerns and goals.`,
    },
    {
      step: "03",
      title: "Personalised Removal Plan",
      desc: "Based on the mole type, size, location, and your preferences, we recommend the most suitable removal technique and explain the procedure in detail.",
    },
    {
      step: "04",
      title: "Procedure & Aftercare",
      desc: "The mole removal is performed under local anaesthesia. You receive detailed aftercare instructions and a follow-up schedule for wound care and suture removal if needed.",
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
            Our Mole Removal Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            From your first consultation to post-procedure care — here is what you can expect.
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
      title: "Perform Regular Self-Exams",
      desc: "Check your skin monthly for new moles or changes in existing ones. Use the ABCDE rule to spot warning signs and visit your dermatologist if you notice anything unusual.",
    },
    {
      title: "Protect Your Skin from the Sun",
      desc: "UV exposure can increase mole formation and the risk of melanoma. Use a broad-spectrum sunscreen with SPF 30+, wear protective clothing, and avoid tanning beds.",
    },
    {
      title: "Don't Pick at Moles",
      desc: "Picking, scratching, or attempting to remove moles at home can cause infection, bleeding, scarring, and may mask important diagnostic features. Always consult a dermatologist.",
    },
    {
      title: "Keep a Mole Diary",
      desc: "If you have many moles or atypical moles, keep a photographic record to track changes over time. Your dermatologist can use this information during regular check-ups.",
    },
    {
      title: "Know Your Family History",
      desc: "A family history of melanoma or atypical moles significantly increases your risk. Inform your dermatologist about any family history so they can plan an appropriate screening schedule.",
    },
    {
      title: "Follow Post-Removal Care Instructions",
      desc: "After mole removal, keep the area clean and dry, apply any prescribed ointments, avoid sun exposure, and attend follow-up appointments for suture removal and wound assessment.",
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
            Tips for Healthy Moles and Skin
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Simple habits can help you monitor your moles and maintain healthy skin.
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
                Skin Self-Examination Guide
              </p>
              <p className="mt-1 text-xs text-muted-foreground/60">
                Replace with an illustration showing monthly skin self-examination steps
              </p>
              <p className="text-xs text-muted-foreground/60">
                Alt: Step-by-step guide for performing a monthly skin self-examination
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
      q: "Is mole removal safe?",
      a: "Yes, mole removal is a safe procedure when performed by a qualified dermatologist. We follow strict sterilisation protocols, use dermoscopic evaluation before removal, and recommend histopathological examination for suspicious moles to ensure complete safety.",
    },
    {
      q: "Will mole removal leave a scar?",
      a: "Most mole removals leave minimal scarring that fades significantly over time. Our techniques are designed to minimise visible marks. Shave excisions typically produce flatter scars than surgical excisions. We provide comprehensive aftercare to promote optimal healing.",
    },
    {
      q: "When should I get a mole checked?",
      a: "You should get any mole checked if it changes in size, shape, or colour, becomes itchy or bleeds, has irregular borders or multiple colours, or if you have a family history of skin cancer. We recommend an annual skin check for everyone.",
    },
    {
      q: "Does mole removal hurt?",
      a: "Mole removal is performed under local anaesthesia, so you will not feel pain during the procedure. You may feel a mild pinprick from the anaesthetic injection. Mild discomfort after the procedure is normal and can be managed with simple pain relievers.",
    },
    {
      q: "How long does mole removal take?",
      a: "The procedure typically takes 15 to 30 minutes depending on the size, depth, and location of the mole. This includes cleaning, anaesthesia, removal, and sutures if needed. You can go home immediately after the procedure.",
    },
    {
      q: "Can moles grow back after removal?",
      a: "If a mole is completely removed, it generally does not grow back. Shave excisions have a small chance of regrowth if pigment cells remain. Surgical excision with clear margins has the lowest recurrence rate.",
    },
    {
      q: "Are all moles cancerous?",
      a: "No, the vast majority of moles are benign. Only a small percentage develop into melanoma or other skin cancers. However, any changing or atypical mole should be evaluated by a dermatologist to rule out malignancy.",
    },
    {
      q: "What is the difference between a mole and a skin tag?",
      a: "Moles are growths of pigment-producing cells and can be flat or raised, brown or black. Skin tags are small, soft, flesh-coloured growths made of collagen fibres, usually attached by a thin stalk. Both can be removed for cosmetic or medical reasons.",
    },
    {
      q: "Can I remove a mole at home?",
      a: "No, you should never attempt to remove a mole at home. Home removal methods can cause infection, bleeding, scarring, and may prevent proper diagnosis of potentially malignant tissue. Always consult a dermatologist for safe removal.",
    },
    {
      q: "How much does mole removal cost in Armoor?",
      a: `The cost of mole removal at ${CLINIC_NAME} depends on the size, type, number of moles, and the removal technique used. We offer affordable and transparent pricing. Please book a consultation for a personalised cost estimate.`,
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
            Common questions about mole removal at our clinic in Armoor.
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
      text: "I had a raised mole on my cheek that I wanted removed for cosmetic reasons. Dr. Raghavendhra examined it with a dermoscope and explained that it was benign. The shave excision was quick and painless. The scar has faded beautifully. I am very happy with the result.",
      rating: 5,
    },
    {
      name: "Lakshmi",
      location: "Nizamabad",
      text: "I had a large mole on my back that kept getting irritated by my saree blouse. The doctor recommended surgical excision and it was done in about 20 minutes. Healing was smooth thanks to the clear aftercare instructions. So glad I finally got it done.",
      rating: 5,
    },
    {
      name: "Rajesh",
      location: "Balkonda",
      text: "I noticed a mole on my arm changing colour and shape. I was worried it might be something serious. Dr. Raghavendhra examined it immediately, did a dermoscopic evaluation, and removed it for biopsy. Thankfully it was benign. The professional care put my mind at ease.",
      rating: 5,
    },
    {
      name: "Anita",
      location: "Mortad",
      text: "My daughter had a mole on her face that she was very self-conscious about. The doctor was very gentle and reassuring with her. The removal went smoothly and the healing has been excellent. The confidence my daughter has gained is priceless.",
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
            Real experiences from patients who have undergone mole removal at our clinic.
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
            Patients visit {CLINIC_NAME} from across Armoor and surrounding areas for expert mole
            removal. Our clinic is easily accessible and welcomes patients from all nearby towns and
            villages.
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
    { name: "Nail Disorders", to: "/treatments/nail-disorders-armoor" },
    { name: "Wart Removal", to: "/treatments/wart-removal-armoor" },
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
          Ready to Get That Mole Checked?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Book a consultation with {DOCTOR_NAME}, {QUALIFICATION}, at {CLINIC_NAME} in Armoor. Get
          professional mole evaluation and safe removal you can trust.
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
