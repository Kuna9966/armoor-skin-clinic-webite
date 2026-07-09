import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  X,
  Phone,
  Calendar,
  MapPin,
  Clock,
  Check,
  Sparkles,
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Microscope,
  Wallet,
  Users,
  User,
  Smile,
  FlaskConical,
  Mail,
  ImageIcon,
  ArrowRight,
  GraduationCap,
  Star,
  Loader2,
  MessageCircle,
  Quote,
} from "lucide-react";
import { Calendar as DatePicker } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
const heroImg = "/images/clinic/hero-exterior.webp";
const clinicExteriorImg = "/images/clinic/exterior.webp";
const consultationRoomImg = "/images/clinic/consultation-room.webp";
const adBannerImg = "/images/banner/ad-banner.webp";
const skinDiseaseImg = "/images/diseases/skin-disease.webp";
const hairDiseaseImg = "/images/diseases/hair-disease.webp";
import {
  CLINIC_NAME,
  DOCTOR_NAME,
  QUALIFICATION,
  PHONE,
  PHONE_TEL,
  WHATSAPP,
  ADDRESS,
  MAP_LINK,
  SOCIAL,
  SITE_URL,
} from "../lib/clinic-data";
import { treatments, treatmentSlugs } from "../lib/treatments";
import { generalFAQs } from "../lib/faq-data";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "preload", as: "image", fetchpriority: "high", href: heroImg }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: generalFAQs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: "Treatments",
              item: `${SITE_URL}/treatments`,
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const WHY_US = [
  { icon: Stethoscope, label: "Experienced Dermatologist" },
  { icon: HeartPulse, label: "Personalized Treatment Plans" },
  { icon: Microscope, label: "Modern Diagnostic Methods" },
  { icon: Wallet, label: "Affordable Consultation" },
  { icon: ShieldCheck, label: "Comprehensive Skin & Hair Care" },
  { icon: Smile, label: "Friendly, Comfortable Environment" },
  { icon: FlaskConical, label: "Evidence-Based Medical Care" },
];

const APPOINTMENT_DEPARTMENTS = [
  "General Dermatology Consultation",
  "Skin Consultation",
  "Hair Consultation",
  "Acne Treatment",
  "Hair Loss Treatment",
  "Pigmentation Treatment",
  "Allergy & Skin Infection",
  "Nail Disorders",
  "Cosmetic Dermatology",
];

const APPOINTMENT_TIMES = [
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
];

const GALLERY = [
  { label: "Clinic Exterior", tag: "Building Front", image: clinicExteriorImg, span: "lg:col-span-2", ratio: "aspect-[4/3]" },
  { label: "Reception Area", tag: "Front Desk", image: "/images/gallery/reception-1.webp", span: "lg:row-span-2", ratio: "aspect-[3/5]" },
  { label: "Consultation Room", tag: "Treatment Room", image: consultationRoomImg, span: "", ratio: "aspect-[4/3]" },
  { label: "Reception Area", tag: "Waiting Area", image: "/images/gallery/reception-3.webp", span: "", ratio: "aspect-[4/3]" },
];

let adDismissed = false;

function Home() {
  const [showAd, setShowAd] = useState(!adDismissed);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {showAd && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Advertisement"
        >
          <div className="relative w-full max-w-[90vw] sm:max-w-[1000px]">
            <button
              onClick={() => {
                adDismissed = true;
                setShowAd(false);
              }}
              className="absolute -top-3 right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
              aria-label="Close advertisement"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={adBannerImg}
              alt="Armoor Skin & Hair Clinic promotional banner - Book your dermatology consultation"
              width={1774}
              height={887}
              className="w-full h-auto rounded-lg shadow-2xl object-contain"
              loading="lazy"
            />
          </div>
        </div>
      )}
      <Header />
      <Hero />
      <Timings />
      <About />
      <Doctor />
      <Treatments />
      <WhyUs />
      <Gallery />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <StickyCTA />
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section
      id="home"
      data-header-theme="dark"
      className="relative isolate min-h-[100svh] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.16 0.06 265) 0%, oklch(0.20 0.07 265) 55%, oklch(0.24 0.08 265) 100%)",
      }}
    >
      <div className="absolute inset-0 mx-auto max-w-[1905px] max-h-[1000px]">
        <img
          src={heroImg}
          alt="Armoor Skin & Hair Clinic exterior - dermatology clinic in Armoor"
          width={1344}
          height={1170}
          className="h-full w-full object-cover mix-blend-multiply"
          loading="eager"
          fetchpriority="high"
        />
      </div>
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Trusted Dermatology Care in Armoor
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Best Skin & Hair Clinic in Armoor
          </h1>
          <p className="mt-4 text-2xl font-semibold text-white/90 sm:text-3xl lg:text-4xl">
            Your Trusted Destination for <span className="text-gold">Healthy Skin</span> &{" "}
            <span className="text-gold">Beautiful Hair</span>
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Advanced, safe, and effective dermatology care for patients of all ages — delivered with
            precision, compassion, and modern medical expertise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <Calendar className="h-4 w-4" /> Book an Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
            >
              <Phone className="h-4 w-4" /> Call Now: {PHONE}
            </a>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/15 pt-8">
            {[
              { k: "6+", v: "Years Experience" },
              { k: "50k+", v: "Happy Patients" },
              { k: "16k+", v: "Treatments Offered" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-white sm:text-3xl">{s.k}</div>
                <div className="mt-1 text-xs text-white/70 sm:text-sm">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <Section id="about" eyebrow="About Us" title="Care rooted in expertise & empathy">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">Armoor Skin & Hair Clinic</span> is a
            dedicated dermatology practice serving the Armoor community and surrounding regions of
            Telangana. We combine advanced medical dermatology with modern cosmetic care, offering
            personalised treatment plans for every patient.
          </p>
          <p>
            Our clinic is designed to feel calm, safe, and welcoming — where clinical excellence
            meets a comfortable patient experience. From common skin concerns to complex chronic
            conditions, we bring evidence-based expertise to every consultation.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { icon: ShieldCheck, t: "Medical-Grade Care" },
              { icon: HeartPulse, t: "Patient-First Approach" },
              { icon: Microscope, t: "Modern Diagnostics" },
              { icon: Sparkles, t: "Advanced Cosmetology" },
            ].map((f) => (
              <div
                key={f.t}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-3.5"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/5 text-primary">
                  <f.icon className="h-4.5 w-4.5" />
                </div>
                <span className="text-sm font-medium text-foreground">{f.t}</span>
              </div>
            ))}
          </div>
        </div>
        <ImagePlaceholder
          label="Clinic Exterior"
          image={clinicExteriorImg}
          className="aspect-[4/3] lg:aspect-[5/4]"
        />
      </div>
    </Section>
  );
}

/* ---------------- Doctor ---------------- */
function Doctor() {
  return (
    <Section
      id="doctor"
      eyebrow="Meet the Specialist"
      title="Led by an experienced dermatologist"
      tone="muted"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Meet Your Dermatologist
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Dr. Raghavendhra
          </h2>
          <p className="mt-2 text-sm font-medium text-primary">MD, DVL (Osmania Medical College)</p>
          <p className="text-xs text-muted-foreground">
            Skin Specialist <span className="mx-1.5 text-primary/30">•</span> Consultant
            Dermatologist
          </p>

          {/* Trust Cards */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: GraduationCap,
                title: "MD, DVL",
                desc: "Specialized in Dermatology, Venereology & Leprosy",
              },
              {
                icon: Clock,
                title: "20+ Years Experience",
                desc: "Providing trusted dermatology care",
              },
              {
                icon: Stethoscope,
                title: "Skin • Hair • Nail",
                desc: "Comprehensive treatment for all age groups",
              },
              {
                icon: HeartPulse,
                title: "Personalized Care",
                desc: "Modern treatments with patient-focused consultation",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <c.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{c.title}</p>
                    <p className="text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bio */}
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            Dr. Raghavendhra is dedicated to helping patients achieve healthy skin and confident
            living through accurate diagnosis, modern treatments, and compassionate care. Every
            consultation is personalized to understand your concerns and provide the most effective
            treatment plan for long-term skin, hair, and nail health.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Treatments ---------------- */
function Treatments() {
  return (
    <Section
      id="treatments"
      eyebrow="Our Treatments"
      title="Healthy Skin. Healthy Hair. Expert Care."
    >
      <p className="mx-auto -mt-8 mb-10 max-w-2xl text-center text-[15px] leading-relaxed text-muted-foreground">
        Explore our comprehensive dermatology treatments for skin, hair, and cosmetic concerns.
        Click below to discover every condition we diagnose and treat.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Link
          to="/treatments"
          hash="skin-diseases"
          className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
        >
          <div className="relative aspect-[3/2] sm:aspect-[600/420] overflow-hidden">
            <img
              src={skinDiseaseImg}
              alt="Skin disease diagnosis and treatment"
              width={600}
              height={420}
              loading="lazy"
              className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-all duration-500 ease-out group-hover:from-black/85 group-hover:via-black/40" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                Skin Care
              </p>
              <h3 className="mt-1.5 font-display text-2xl font-bold text-white sm:text-3xl">
                Skin Diseases
              </h3>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-white/80 transition-all duration-400 ease-out group-hover:translate-x-1">
                Explore 100+ Skin Conditions
                <ArrowRight className="h-4 w-4 transition-transform duration-400 ease-out group-hover:translate-x-1" />
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/treatments"
          hash="hair-diseases"
          className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
        >
          <div className="relative aspect-[3/2] sm:aspect-[600/420] overflow-hidden">
            <img
              src={hairDiseaseImg}
              alt="Hair treatment and scalp diagnosis"
              width={740}
              height={492}
              loading="lazy"
              className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-all duration-500 ease-out group-hover:from-black/85 group-hover:via-black/40" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                Hair Care
              </p>
              <h3 className="mt-1.5 font-display text-2xl font-bold text-white sm:text-3xl">
                Hair Treatments
              </h3>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-white/80 transition-all duration-400 ease-out group-hover:translate-x-1">
                Explore Hair &amp; Scalp Disorders
                <ArrowRight className="h-4 w-4 transition-transform duration-400 ease-out group-hover:translate-x-1" />
              </p>
            </div>
          </div>
        </Link>
      </div>
    </Section>
  );
}

/* ---------------- Why Us ---------------- */
function WhyUs() {
  return (
    <section
      data-header-theme="dark"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-teal blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Care you can trust, results you can see
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w) => (
            <div
              key={w.label}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white/10"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                <w.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-white">{w.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  return (
    <Section id="gallery" eyebrow="Gallery" title="Inside our clinic">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
        {GALLERY.map((g, i) => (
          <ImagePlaceholder
            key={i}
            label={g.label}
            sublabel={g.tag}
            image={g.image}
            className={`${g.ratio} ${g.span} overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] transition-all duration-500 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5`}
          />
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Timings ---------------- */
function Timings() {
  return (
    <Section
      id="timings"
      eyebrow="Consultation Hours"
      title="Doctor Consultation Hours"
      tone="muted"
    >
      <div className="mx-auto max-w-5xl">
        {/* Main Highlight Card */}
        <div className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary via-primary to-[oklch(0.18_0.07_265)] p-8 shadow-[var(--shadow-elegant)] transition-all hover:shadow-[0_30px_60px_-20px_oklch(0.16_0.06_265/0.5)] sm:p-12">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/[0.03]" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/[0.02]" />
          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/10 text-white">
                <Clock className="h-8 w-8" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
                  Consultation Available
                </p>
                <p className="mt-1 font-display text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
                  11:00 AM – 6:00 PM
                </p>
                <p className="mt-2 text-base font-medium text-white/80">Monday – Saturday</p>
              </div>
            </div>
            <div className="shrink-0 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-center backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Walk-ins Welcome
              </p>
              <p className="text-sm font-semibold text-white">Appointments Recommended</p>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-relaxed text-muted-foreground">
          Meet with our dermatologist during convenient consultation hours. Walk-ins are welcome,
          and appointments are recommended for faster service.
        </p>

        {/* Info Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: Stethoscope,
              title: "Expert Consultation",
              desc: "Receive personalized diagnosis and treatment for skin, hair, and nail conditions.",
            },
            {
              icon: Calendar,
              title: "Easy Appointments",
              desc: "Book online or contact us directly via WhatsApp or phone for quick confirmation.",
            },
            {
              icon: Check,
              title: "Minimal Waiting",
              desc: "Patients with appointments receive priority consultation whenever possible.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group/card rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[var(--shadow-card)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary transition-colors group-hover/card:bg-primary group-hover/card:text-white">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-secondary/70 p-6 text-center sm:flex-row sm:justify-center sm:gap-8 sm:text-left">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Clinic Hours</p>
                <p className="text-sm text-muted-foreground">
                  Monday – Saturday:{" "}
                  <span className="font-medium text-foreground">11:00 AM – 6:00 PM</span>
                </p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-red-400" />
              <div>
                <p className="text-sm font-semibold text-foreground">Sunday</p>
                <p className="text-sm text-muted-foreground">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [dateOpen, setDateOpen] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const firstAvailableDate = getFirstAvailableDate();
  const handleAppointmentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const hasDateError = !selectedDate;
    setDateError(hasDateError);

    if (!form.checkValidity() || hasDateError) {
      form.reportValidity();
      return;
    }

    const fullName = String(formData.get("full-name") ?? "").trim();
    const mobile = String(formData.get("mobile-number") ?? "").trim();
    const email = String(formData.get("email-address") ?? "").trim() || "Not provided";
    const department = String(formData.get("select-department") ?? "").trim();
    const preferredTime = String(formData.get("preferred-time") ?? "").trim();
    const preferredDate = formatAppointmentDate(selectedDate);

    setIsSaving(true);

    const message = [
      "🏥 *New Appointment Request*",
      "",
      `👤 *Full Name:* ${fullName}`,
      "",
      `📞 *Mobile:* ${mobile}`,
      "",
      `📧 *Email:* ${email}`,
      "",
      `🩺 *Department:* ${department}`,
      "",
      `📅 *Preferred Date:* ${preferredDate}`,
      "",
      `🕒 *Preferred Time:* ${preferredTime}`,
      "",
      "Please confirm my appointment.",
    ].join("\n");

    setIsSaving(false);
    window.location.href = `https://wa.me/919603752752?text=${encodeURIComponent(message)}`;
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Visit us or book a consultation">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Clinic Address</div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Opposite VR Hospital, Beside LK Hospital, Mahalaxmi Colony, Armoor, Telangana,
                  India
                </p>
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-2 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  Open in Google Maps <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Call Us</div>
              <div className="mt-0.5 font-display text-lg font-bold text-primary">{PHONE}</div>
            </div>
          </a>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Armoor Skin and Hair Clinic - Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.65572520099533!2d78.29268087788058!3d18.788069622388445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcdc12ba7e05a7f%3A0xa73aa9e1111d2666!2sArmoor%20skin%20and%20hair%20clinic!5e0!3m2!1sen!2sin!4v1783178474466!5m2!1sen!2sin"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="block h-[450px] w-full border-0"
            />
          </div>
        </div>

        <form
          onSubmit={handleAppointmentSubmit}
          className="rounded-2xl border border-blue-100 bg-white p-4 shadow-[0_20px_60px_rgba(37,99,235,0.12)] transition-all hover:shadow-[0_24px_70px_rgba(37,99,235,0.16)] sm:p-5"
        >
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#2563EB]">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Book Your Consultation
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Choose your preferred date and time, and our team will contact you to confirm your
                appointment with Dr. Raghavendhra.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <AppointmentField
              icon={User}
              label="Full Name"
              name="full-name"
              required
              placeholder="Enter your full name"
              autoComplete="name"
            />
            <AppointmentField
              icon={Phone}
              label="Mobile Number"
              name="mobile-number"
              required
              type="tel"
              placeholder="10-digit mobile number"
              inputMode="numeric"
              pattern="[0-9]{10}"
              autoComplete="tel"
            />
            <AppointmentField
              icon={Mail}
              label="Email Address"
              name="email-address"
              optional
              type="email"
              placeholder="your@email.com"
              autoComplete="email"
            />
            <AppointmentSelect
              icon={Stethoscope}
              label="Select Department"
              name="select-department"
              required
            >
              <option value="">Choose department</option>
              {APPOINTMENT_DEPARTMENTS.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </AppointmentSelect>

            <div>
              <label
                htmlFor="preferred-date"
                className="mb-1.5 block text-xs font-semibold text-foreground"
              >
                Preferred Date <span className="text-[#2563EB]">*</span>
              </label>
              <Popover open={dateOpen} onOpenChange={setDateOpen}>
                <PopoverTrigger asChild>
                  <button
                    id="preferred-date"
                    type="button"
                    aria-invalid={dateError}
                    aria-describedby={dateError ? "preferred-date-error" : undefined}
                    className="group flex min-h-12 w-full items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 text-left text-sm text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2563EB]/45 hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-blue-100"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2563EB] transition-colors group-hover:bg-blue-100">
                      <Calendar className="h-4 w-4" />
                    </span>
                    <span className={selectedDate ? "" : "text-muted-foreground"}>
                      {selectedDate ? formatAppointmentDate(selectedDate) : "Select preferred date"}
                    </span>
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="w-auto rounded-2xl border-blue-100 bg-white p-3 shadow-[0_24px_70px_rgba(37,99,235,0.18)]"
                >
                  <DatePicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      setSelectedDate(date);
                      setDateError(false);
                      setDateOpen(false);
                    }}
                    disabled={{ before: firstAvailableDate }}
                    modifiers={{ available: (date) => date >= firstAvailableDate }}
                    modifiersClassNames={{
                      available: "text-[#2563EB] hover:bg-blue-50",
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <input
                name="preferredDate"
                tabIndex={-1}
                aria-hidden="true"
                value={selectedDate ? selectedDate.toISOString().slice(0, 10) : ""}
                readOnly
                className="sr-only"
              />
              {dateError && (
                <p id="preferred-date-error" className="mt-1.5 text-xs font-medium text-red-600">
                  Please select a future appointment date.
                </p>
              )}
            </div>

            <AppointmentSelect icon={Clock} label="Preferred Time" name="preferred-time" required>
              <option value="">Choose time slot</option>
              {APPOINTMENT_TIMES.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </AppointmentSelect>
          </div>

          {submitError && (
            <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">
              {submitError}
            </p>
          )}
          <button
            type="submit"
            disabled={isSaving}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(37,99,235,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_20px_45px_rgba(37,99,235,0.34)] focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-[#2563EB]"
          >
            {isSaving ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving your appointment...
              </>
            ) : (
              <>
                <Calendar className="h-4 w-4" />
                Book Appointment
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
}

function AppointmentField({
  icon: Icon,
  label,
  optional,
  required,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ElementType;
  label: string;
  optional?: boolean;
}) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-foreground">
        {label} {required && <span className="text-[#2563EB]">*</span>}
        {optional && <span className="font-medium text-muted-foreground"> (Optional)</span>}
      </label>
      <div className="group flex min-h-12 items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2563EB]/45 hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] focus-within:border-[#2563EB] focus-within:ring-4 focus-within:ring-blue-100">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2563EB] transition-colors group-hover:bg-blue-100">
          <Icon className="h-4 w-4" />
        </span>
        <input
          id={id}
          name={rest.name ?? id}
          required={required}
          {...rest}
          className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/80 focus:outline-none"
        />
      </div>
    </div>
  );
}

function AppointmentSelect({
  icon: Icon,
  label,
  name,
  required,
  children,
}: {
  icon: React.ElementType;
  label: string;
  name?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-foreground">
        {label} {required && <span className="text-[#2563EB]">*</span>}
      </label>
      <div className="group flex min-h-12 items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2563EB]/45 hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] focus-within:border-[#2563EB] focus-within:ring-4 focus-within:ring-blue-100">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2563EB] transition-colors group-hover:bg-blue-100">
          <Icon className="h-4 w-4" />
        </span>
        <select
          id={id}
          name={name ?? id}
          required={required}
          className="min-w-0 flex-1 appearance-none bg-transparent text-sm text-foreground focus:outline-none"
        >
          {children}
        </select>
      </div>
    </div>
  );
}

function getFirstAvailableDate() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

function formatAppointmentDate(date: Date) {
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/* ---------------- Reviews ---------------- */
function Reviews() {
  const reviews = [
    {
      name: "Srinivas Reddy",
      location: "Armoor",
      text: "I was struggling with hair fall for months and tried everything. Dr. Raghavendhra diagnosed the root cause and put me on a treatment plan that actually worked. After three months, my hair fall reduced by 80%. Truly grateful!",
      rating: 5,
    },
    {
      name: "Rajeshwari",
      location: "Kotha Armur",
      text: "The acne scar treatment at this clinic changed my confidence completely. The chemical peels and microneedling sessions were comfortable and the results are amazing. My skin has never looked this good.",
      rating: 5,
    },
    {
      name: "Venkatesh",
      location: "Nizamabad",
      text: "I had a stubborn fungal infection that wouldn't go away with over-the-counter creams. The doctor prescribed the right medication, and it cleared up within weeks. Professional and thorough care.",
      rating: 5,
    },
    {
      name: "Anjali",
      location: "Mortad",
      text: "My daughter's eczema was causing her so much discomfort. The paediatric dermatology care here is wonderful — gentle, effective, and the doctor explained everything so well. Highly recommended for children.",
      rating: 5,
    },
    {
      name: "Prakash",
      location: "Bheemgal",
      text: "I was worried about a mole on my back. The doctor examined it carefully, assured me it was benign, and explained what to watch for. The thoroughness and transparency really put my mind at ease.",
      rating: 5,
    },
    {
      name: "Laxmi",
      location: "Balkonda",
      text: "Psoriasis was affecting my daily life. The treatment plan at this clinic has given me months of clear skin. The doctor is compassionate and takes time to answer all my questions. Best dermatologist in Armoor.",
      rating: 5,
    },
    {
      name: "Ravi Kumar",
      location: "Kammarpalle",
      text: "The PRP treatment for my hair loss has been remarkable. I was sceptical at first but after four sessions, I can see visible regrowth in my crown area. The staff is very supportive throughout the process.",
      rating: 5,
    },
    {
      name: "Swetha",
      location: "Mupkal",
      text: "I came in for pigmentation on my face and the treatment exceeded my expectations. The doctor customised the plan for my skin type and the results started showing within weeks. Very professional clinic.",
      rating: 5,
    },
  ];

  return (
    <section data-header-theme="dark" className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.16 0.06 265) 0%, oklch(0.20 0.07 265) 55%, oklch(0.24 0.08 265) 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-gold blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-primary blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Patient Reviews
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70">
            Real experiences from real patients at {CLINIC_NAME} in Armoor. We are proud to have
            helped thousands achieve healthier skin and hair.
          </p>
        </div>

        <div className="mx-auto mt-6 flex flex-wrap justify-center gap-6">
          {[
            { label: "Overall Rating", value: "4.9/5", sub: "500+ Reviews" },
            { label: "Happy Patients", value: "50k+", sub: "And Growing" },
            { label: "Years of Trust", value: "6+", sub: "in Armoor" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center backdrop-blur"
            >
              <p className="font-display text-2xl font-bold text-gold">{stat.value}</p>
              <p className="mt-0.5 text-xs font-semibold text-white/80">{stat.label}</p>
              <p className="text-[10px] text-white/50">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.10]"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <Quote className="mt-3 h-6 w-6 text-white/20" />
              <p className="mt-2 text-sm leading-relaxed text-white/80 line-clamp-4">
                "{review.text}"
              </p>
              <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/20 text-xs font-bold text-gold">
                  {review.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-white/60">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const categories = [
    { label: "Appointments", icon: Calendar, faqs: [12, 13, 14] },
    { label: "Skin Care", icon: Sparkles, faqs: [1, 3, 5, 8] },
    { label: "Hair Care", icon: Users, faqs: [2, 6, 10] },
    { label: "General", icon: HeartPulse, faqs: [0, 4, 7, 9, 11] },
  ] as const;
  const getCategory = (idx: number) =>
    categories.find((c) => c.faqs.includes(idx))?.label ?? "General";

  return (
    <section data-header-theme="light" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Have Questions?
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Find answers to common questions about our dermatology services at {CLINIC_NAME} in
            Armoor.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <span
                key={cat.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
              >
                <Icon className="h-3 w-3 text-primary" />
                {cat.label}
              </span>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {generalFAQs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const cat = getCategory(idx);
            return (
              <div
                key={idx}
                className={`rounded-2xl border bg-card transition-all duration-300 ${
                  isOpen
                    ? "border-primary/30 shadow-[var(--shadow-soft)]"
                    : "border-border hover:border-primary/15"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                      <Stethoscope className="h-3 w-3" />
                    </span>
                    <span className="text-sm font-semibold text-foreground leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 grid h-6 w-6 place-items-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-primary bg-primary text-primary-foreground rotate-45"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="2" x2="7" y2="12" />
                      <line x1="2" y1="7" x2="12" y2="7" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-border/50 px-5 pb-4 pt-3">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-[10px] font-medium uppercase tracking-wider text-primary/60">
                        {cat}
                      </span>
                      <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mx-auto mt-10 max-w-2xl">
          <div
            className="rounded-2xl p-8 text-center"
            style={{ background: "var(--gradient-navy)" }}
          >
            <h3 className="font-display text-xl font-bold text-white">Still have questions?</h3>
            <p className="mt-2 text-sm text-white/70">
              We are here to help. Reach out to {DOCTOR_NAME} directly.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                hash="contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-all hover:brightness-110"
              >
                <Calendar className="h-4 w-4" /> Book an Appointment
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
              >
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sticky CTA ---------------- */
function StickyCTA() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-lg p-3 md:hidden">
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm font-semibold text-primary transition-all hover:border-primary"
            aria-label={`Call ${CLINIC_NAME} at ${PHONE}`}
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hi, I want to book an appointment at Armoor Skin & Hair Clinic.`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700"
            aria-label={`Send WhatsApp message to ${CLINIC_NAME}`}
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="#contact"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-glow"
          >
            <Calendar className="h-4 w-4" /> Book
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <a
          href={`https://wa.me/${WHATSAPP}?text=Hi, I want to book an appointment at Armoor Skin & Hair Clinic.`}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-green-600 text-white shadow-[0_8px_25px_rgba(22,163,74,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(22,163,74,0.5)]"
          aria-label={`Chat with ${CLINIC_NAME} on WhatsApp`}
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </div>
    </>
  );
}

/* ---------------- Primitives ---------------- */
function Section({
  id,
  eyebrow,
  title,
  children,
  tone = "default",
  headerTheme = "light",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  tone?: "default" | "muted";
  headerTheme?: "dark" | "light";
}) {
  return (
    <section
      id={id}
      data-header-theme={headerTheme}
      className={`scroll-mt-24 py-20 sm:py-28 ${tone === "muted" ? "bg-secondary/40" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function ImagePlaceholder({
  label,
  sublabel,
  image,
  className = "",
}: {
  label: string;
  sublabel?: string;
  image?: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-secondary/60 ${className}`}
    >
      {image && (
        <img
          src={image}
          alt={`${label}${sublabel ? ` - ${sublabel}` : ""} at Armoor Skin & Hair Clinic, Armoor`}
          width={800}
          height={600}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      )}
      <div
        className={`absolute inset-0 grid place-items-center text-center ${image ? "bg-gradient-to-t from-primary/75 via-primary/15 to-transparent text-white" : ""}`}
      >
        <div>
          {!image && (
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-background text-primary shadow-[var(--shadow-soft)]">
              <ImageIcon className="h-5 w-5" />
            </div>
          )}
          <div className={`mt-3 text-sm font-semibold ${image ? "text-white" : "text-foreground"}`}>
            {label}
          </div>
          {sublabel && (
            <div className={`mt-1 text-xs ${image ? "text-white/85" : "text-muted-foreground"}`}>
              {sublabel}
            </div>
          )}
          {!image && (
            <div className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground">
              Image placeholder
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
