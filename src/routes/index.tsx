import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  Calendar,
  MapPin,
  Clock,
  Check,
  Sparkles,
  Scissors,
  Baby,
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Microscope,
  Wallet,
  Users,
  User,
  Smile,
  FlaskConical,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  ImageIcon,
  ArrowRight,
  GraduationCap,
  Award,
  Star,
} from "lucide-react";
import { Calendar as DatePicker } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import heroImg from "@/assets/Clinic Exterior.jpg";
import logoCircleImg from "@/assets/logocircle.png";
import profileImg from "@/assets/Profile.jpg";
import clinicExteriorImg from "@/assets/Clinic Exterior.webp";
import consultationRoomImg from "@/assets/Clinic Interior Consultation Room.webp";
import adBannerImg from "@/assets/AdBanner.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const PHONE = "9603 752 752";
const PHONE_TEL = "+919603752752";
const CLINIC_MAP_LINK = "https://maps.app.goo.gl/fKuVMvEnVS5Pjtne8?g_st=aw";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctor", href: "#doctor" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Skin Diseases",
    desc: "Comprehensive medical treatment for a full range of dermatological conditions.",
    items: [
      "Acne & Pimples",
      "Psoriasis",
      "Eczema",
      "Chronic Urticaria",
      "Fungal Infections",
      "Skin Allergies",
      "Pigmentation Disorders",
      "Vitiligo",
      "Melasma",
      "Skin Rashes",
      "Bacterial & Viral Skin Infections",
      "Warts, Corns & Calluses",
      "Nail Disorders",
    ],
  },
  {
    icon: Scissors,
    title: "Hair Treatments",
    desc: "Evidence-based diagnosis and treatment for hair and scalp concerns.",
    items: [
      "Hair Fall Treatment",
      "Baldness Evaluation",
      "Dandruff Treatment",
      "Alopecia",
      "Scalp Disorders",
      "Hair Growth Management",
    ],
  },
  {
    icon: Baby,
    title: "Pediatric Dermatology",
    desc: "Gentle, specialised skin care for infants and children.",
    items: [
      "Skin disorders in infants & children",
      "Eczema",
      "Birthmarks",
      "Allergic skin conditions",
      "Childhood skin infections",
    ],
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dermatology",
    desc: "Advanced cosmetic procedures to restore and rejuvenate your skin.",
    items: [
      "Acne Scar Treatment",
      "Chemical Peels",
      "Skin Rejuvenation",
      "Pigmentation Treatment",
      "Mole & Wart Removal",
      "Anti-Aging Skin Care",
      "Laser Procedures",
    ],
  },
];

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
  { label: "Clinic Exterior", tag: "Building Front", image: clinicExteriorImg },
  { label: "Clinic Interior", tag: "Waiting Area" },
  { label: "Clinic Interior", tag: "Consultation Room", image: consultationRoomImg },
  { label: "Clinic Interior", tag: "Treatment Room" },
];

function Home() {
  const [showAd, setShowAd] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {showAd && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-[90vw] sm:max-w-[1000px]">
            <button
              onClick={() => setShowAd(false)}
              className="absolute -top-3 right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
              aria-label="Close ad"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={adBannerImg}
              alt="Advertisement"
              className="w-full h-auto rounded-lg shadow-2xl object-contain"
            />
          </div>
        </div>
      )}
      <Header />
      <Hero />
      <Timings />
      <About />
      <Doctor />
      <Services />
      <WhyUs />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white shadow-[var(--shadow-soft)]">
            <img
              src={logoCircleImg}
              alt="Armoor Skin & Hair Clinic logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-sm font-bold text-primary sm:text-base">
              Armoor Skin & Hair Clinic
            </div>
            <div className="truncate text-[11px] text-muted-foreground">
              Dermatology · Trichology · Cosmetology
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-primary transition-all hover:border-primary hover:shadow-[var(--shadow-soft)]"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-primary-glow hover:shadow-[var(--shadow-elegant)]"
          >
            <Calendar className="h-4 w-4" /> Book Appointment
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-border text-primary lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-primary"
              >
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Calendar className="h-4 w-4" /> Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.16 0.06 265) 0%, oklch(0.20 0.07 265) 55%, oklch(0.24 0.08 265) 100%)",
      }}
    >
      <div className="absolute inset-0 mx-auto max-w-[1905px] max-h-[1000px]">
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover mix-blend-multiply"
        />
      </div>
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Trusted Dermatology Care in Armoor
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            <span className="mb-4 block text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl">
              Armoor Skin & Hair Clinic
            </span>
            <span className="text-2xl font-semibold text-white/90 sm:text-3xl lg:text-4xl">
              Your Trusted Destination for <span className="text-gold">Healthy Skin</span> &{" "}
              <span className="text-gold">Beautiful Hair</span>
            </span>
          </h1>
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
              { k: "15k+", v: "Treatments Offered" },
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
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_1.3fr]">
        {/* Left: Photo */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-4 -top-4 h-72 w-72 rounded-3xl bg-gradient-to-br from-teal-400/20 to-blue-400/10 md:h-80 md:w-80" />
          <div className="absolute -bottom-3 -right-3 h-48 w-48 rounded-full bg-primary/[0.04]" />
          <div className="relative overflow-hidden rounded-3xl border-2 border-white/50 shadow-[0_20px_60px_-15px_oklch(0.16_0.06_265/0.3)]">
            <div
              className="absolute inset-0"
              style={{ background: "var(--gradient-navy)" }}
            />
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={profileImg}
                alt="Dr. Raghavendhra"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          {/* Floating Credential Badge */}
          <div className="absolute -right-3 -top-3 flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 shadow-[var(--shadow-card)]">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/5 text-primary">
              <Award className="h-4 w-4" />
            </div>
            <div className="leading-tight">
              <p className="text-xs font-bold text-foreground">MD, DVL</p>
              <p className="text-[10px] text-muted-foreground">Dermatologist</p>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Meet Your Dermatologist
          </p>
          <h3 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Dr. Raghavendhra
          </h3>
          <p className="mt-2 text-sm font-medium text-primary">
            MD, DVL (Osmania Medical College)
          </p>
          <p className="text-xs text-muted-foreground">
            Skin Specialist <span className="mx-1.5 text-primary/30">•</span> Consultant Dermatologist
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

/* ---------------- Services ---------------- */
function Services() {
  const [active, setActive] = useState(0);
  return (
    <Section id="services" eyebrow="Our Services" title="Comprehensive skin, hair & cosmetic care">
      <div className="mb-8 flex flex-wrap gap-2">
        {SERVICES.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setActive(i)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              active === i
                ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                : "border-border bg-card text-foreground/80 hover:border-primary/40 hover:text-primary"
            }`}
          >
            <s.icon className="h-4 w-4" /> {s.title}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => {
          const isActive = i === active;
          return (
            <div
              key={s.title}
              onClick={() => setActive(i)}
              className={`group relative cursor-pointer rounded-2xl border p-6 transition-all ${
                isActive
                  ? "border-primary bg-card shadow-[var(--shadow-elegant)]"
                  : "border-border bg-card hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
              }`}
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-xl transition-colors ${
                  isActive ? "bg-primary text-primary-foreground" : "bg-primary/5 text-primary"
                }`}
              >
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-4 h-px w-full bg-border" />
              <ul className="mt-4 space-y-2">
                {s.items.slice(0, isActive ? s.items.length : 4).map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{it}</span>
                  </li>
                ))}
                {!isActive && s.items.length > 4 && (
                  <li className="pt-1 text-xs font-medium text-primary">
                    +{s.items.length - 4} more · tap to view
                  </li>
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------- Why Us ---------------- */
function WhyUs() {
  return (
    <section
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY.map((g, i) => (
          <ImagePlaceholder
            key={i}
            label={g.label}
            sublabel={g.tag}
            image={g.image}
            className={i === 0 ? "aspect-[4/3] lg:col-span-2 lg:aspect-[16/9]" : "aspect-[4/3]"}
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
                <p className="mt-2 text-base font-medium text-white/80">
                  Monday – Saturday
                </p>
              </div>
            </div>
            <div className="shrink-0 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-center backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Walk-ins Welcome
              </p>
              <p className="text-sm font-semibold text-white">
                Appointments Recommended
              </p>
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
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.desc}
              </p>
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
                  Monday – Saturday: <span className="font-medium text-foreground">11:00 AM – 6:00 PM</span>
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
  const firstAvailableDate = getFirstAvailableDate();

  const handleAppointmentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
                  href={CLINIC_MAP_LINK}
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
              title="Armoor Skin & Hair Clinic Location"
              src="https://www.google.com/maps?q=Armoor,Telangana,India&output=embed"
              width="100%"
              height="280"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[280px] w-full border-0"
            />
          </div>
        </div>

        <form
          onSubmit={handleAppointmentSubmit}
          className="rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(37,99,235,0.12)] transition-all hover:shadow-[0_24px_70px_rgba(37,99,235,0.16)] sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#2563EB]">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Book Your Consultation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Choose your preferred date and time, and our team will contact you to confirm your
                appointment with Dr. Raghavendhra.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
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
                    <span className={selectedDate ? "" : "text-muted-foreground/70"}>
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

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(37,99,235,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_20px_45px_rgba(37,99,235,0.34)] focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            <Calendar className="h-4 w-4" />
            Book Appointment
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
          className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
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

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 text-white"
      style={{ background: "var(--gradient-navy)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                <img
                  src={logoCircleImg}
                  alt="Armoor Skin & Hair Clinic logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="font-display text-base font-bold">Armoor Skin & Hair Clinic</div>
                <div className="text-xs text-white/60">Dermatology · Trichology · Cosmetology</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Advanced dermatology care led by Dr. Raghavendhra — medical, pediatric, and cosmetic
              skin & hair treatments for patients of all ages.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition-all hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Quick Links</div>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-white/70 hover:text-gold">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Reach Us</div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  Opposite VR Hospital, Beside LK Hospital, Mahalaxmi Colony, Armoor, Telangana
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${PHONE_TEL}`} className="hover:text-gold">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Morning 11:00 AM · Evening 6:00 PM onwards</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <div>© 2026 Armoor Skin & Hair Clinic. All rights reserved.</div>
          <div>Designed with care for our patients.</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Primitives ---------------- */
function Section({
  id,
  eyebrow,
  title,
  children,
  tone = "default",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  tone?: "default" | "muted";
}) {
  return (
    <section
      id={id}
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
      className={`relative overflow-hidden rounded-2xl border border-border bg-secondary/60 ${className}`}
    >
      {image && (
        <img
          src={image}
          alt={`${label} - ${sublabel}`}
          className="absolute inset-0 h-full w-full object-cover"
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
            <div className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground/70">
              Image placeholder
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
