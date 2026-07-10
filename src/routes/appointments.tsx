import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  HeartPulse,
  Mail,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  User,
  Users,
  Wallet,
  X,
} from "lucide-react";
import { Calendar as DatePicker } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  CLINIC_NAME,
  DOCTOR_NAME,
  QUALIFICATION,
  PHONE,
  PHONE_TEL,
  WHATSAPP,
  ADDRESS,
  MAP_LINK,
  SITE_URL,
} from "../lib/clinic-data";

export const Route = createFileRoute("/appointments")({
  head: () => ({
    meta: [
      {
        title: `Book Appointment | ${CLINIC_NAME}`,
      },
      {
        name: "description",
        content: `Book an appointment with ${DOCTOR_NAME}, ${QUALIFICATION}, Dermatologist at ${CLINIC_NAME}. Schedule consultations for skin, hair, nail, pediatric dermatology, cosmetic dermatology, and laser treatments.`,
      },
      {
        name: "keywords",
        content:
          "Dermatologist Armoor, Skin Specialist Armoor, Book Appointment Armoor, Hair Specialist Armoor, Skin Clinic Telangana, PRP Treatment, Acne Treatment, Hair Fall Treatment, Cosmetic Dermatology, Laser Hair Removal",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: `Book Appointment | ${CLINIC_NAME}` },
      {
        property: "og:description",
        content: `Schedule your consultation with ${DOCTOR_NAME}, ${QUALIFICATION} at ${CLINIC_NAME}, Armoor. Expert dermatology care for skin, hair, and nail concerns.`,
      },
      { property: "og:url", content: `${SITE_URL}/appointments` },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: CLINIC_NAME },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `Book Appointment | ${CLINIC_NAME}` },
      {
        name: "twitter:description",
        content: `Book an appointment with ${DOCTOR_NAME}, ${QUALIFICATION} at ${CLINIC_NAME} in Armoor, Telangana.`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/appointments` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": `${SITE_URL}/appointments#clinic`,
              name: CLINIC_NAME,
              url: SITE_URL,
              telephone: PHONE_TEL,
              email: "contact@armoorskinclinic.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: ADDRESS.street,
                addressLocality: ADDRESS.city,
                addressRegion: ADDRESS.state,
                postalCode: "503224",
                addressCountry: "IN",
              },
              medicalSpecialty: "Dermatology",
            },
            {
              "@type": "Physician",
              "@id": `${SITE_URL}/appointments#doctor`,
              name: `${DOCTOR_NAME}, ${QUALIFICATION}`,
              description: "Consultant Dermatologist at Armoor Skin & Hair Clinic",
              medicalSpecialty: "Dermatology",
              url: SITE_URL,
            },
          ],
        }),
      },
    ],
  }),
  component: AppointmentsPage,
});

/* ---------- Constants ---------- */

const REASONS = [
  "Acne / Pimples",
  "Hair Fall",
  "Skin Allergy",
  "Pigmentation",
  "Psoriasis",
  "Eczema",
  "Fungal Infection",
  "Vitiligo",
  "Nail Problems",
  "Dandruff",
  "Cosmetic Consultation",
  "PRP",
  "Laser Treatment",
  "Other",
] as const;

const TIME_SLOTS = [
  "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM",
  "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
  "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM",
] as const;

const CONDITIONS = [
  "Acne & Acne Scars", "Hair Fall & Baldness", "Pigmentation & Melasma",
  "Psoriasis", "Eczema", "Vitiligo", "Fungal Infections",
  "Skin Allergies", "Warts", "Nail Disorders", "Dandruff",
  "Pediatric Skin Diseases", "Cosmetic Dermatology", "PRP Therapy", "Laser Treatments",
];

const CONSULT_INCLUDES = [
  "Complete Skin Examination",
  "Hair & Scalp Assessment",
  "Nail Evaluation",
  "Diagnosis",
  "Personalized Treatment Plan",
  "Prescription Guidance",
  "Lifestyle & Skincare Advice",
];

const WHY_US_DATA = [
  { icon: Stethoscope, label: "Experienced Dermatologist" },
  { icon: ShieldCheck, label: "Evidence-Based Treatments" },
  { icon: Sparkles, label: "Advanced Skin & Hair Care" },
  { icon: Microscope, label: "Modern Equipment" },
  { icon: HeartPulse, label: "Patient-Centered Care" },
  { icon: Wallet, label: "Affordable Consultation" },
  { icon: Users, label: "Trusted by Families" },
  { icon: Star, label: "Comfortable Environment" },
];

const FAQ_DATA = [
  {
    q: "How do I book an appointment?",
    a: "You can book an appointment by filling the online form on this page, calling us directly, or sending a message on WhatsApp. Our team will confirm your preferred date and time.",
  },
  {
    q: "Do I need prior registration?",
    a: "No prior registration is needed. You can walk in during consultation hours or book online for a faster experience.",
  },
  {
    q: "Can I walk in without an appointment?",
    a: "Yes, walk-ins are welcome. However, appointments are recommended to minimize waiting time and ensure you get a slot at your preferred time.",
  },
  {
    q: "What conditions do you treat?",
    a: "We treat a wide range of skin, hair, and nail conditions including acne, hair fall, pigmentation, psoriasis, eczema, fungal infections, vitiligo, allergies, dandruff, and nail disorders. We also offer cosmetic dermatology, PRP therapy, and laser treatments.",
  },
  {
    q: "How long does a consultation take?",
    a: "A standard consultation takes approximately 15–30 minutes. Complex cases or procedures may require additional time.",
  },
  {
    q: "Do you provide cosmetic treatments?",
    a: "Yes, we offer cosmetic dermatology services including chemical peels, PRP therapy, laser treatments, and other advanced aesthetic procedures.",
  },
  {
    q: "Do you treat children?",
    a: "Yes, we provide pediatric dermatology care for children with skin conditions like eczema, allergies, infections, and birthmarks.",
  },
  {
    q: "Is follow-up consultation available?",
    a: "Yes, follow-up consultations are available to monitor your progress and adjust your treatment plan as needed.",
  },
];

/* ---------- Helpers ---------- */

function getFirstAvailableDate() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-IN", {
    weekday: "short", day: "numeric", month: "short", year: "numeric",
  });
}

/* ---------- Page Component ---------- */

function AppointmentsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {submitted ? (
        <SuccessScreen onHome={() => setSubmitted(false)} />
      ) : (
        <>
          <AppointmentHero />
          <AppointmentInfo />
          <AppointmentForm onSuccess={() => setSubmitted(true)} />
          <ContactSection />
          <WhyChooseUs />
          <AppointmentFAQ />
          <PatientPreparation />
          <EmergencyNotice />
          <TrustStats />
        </>
      )}
      <Footer />
    </div>
  );
}

/* ---------- Hero ---------- */

function AppointmentHero() {
  return (
    <section
      data-header-theme="dark"
      className="relative isolate min-h-[80svh] overflow-hidden flex items-center"
      style={{
        background: "linear-gradient(135deg, oklch(0.16 0.06 265) 0%, oklch(0.20 0.07 265) 55%, oklch(0.24 0.08 265) 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
        <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-teal blur-3xl" />
        <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-primary blur-3xl" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Schedule Your Visit
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Book Your Appointment
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/80 sm:text-xl">
            Experience expert dermatology care with personalized treatment plans for healthy skin,
            beautiful hair, and long-lasting confidence.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Trusted Dermatologist", "Personalized Care", "Modern Treatments", "Comfortable Consultation"].map(
              (item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur"
                >
                  <Check className="h-3 w-3 text-gold" /> {item}
                </span>
              ),
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#appointment-form"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <Calendar className="h-4 w-4" /> Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
            >
              <Phone className="h-4 w-4" /> Call Now: {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Appointment Info ---------- */

function AppointmentInfo() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Consultation Hours */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-card)]">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-foreground">Consultation Hours</h3>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday – Saturday</span>
                <span className="font-semibold text-foreground">11:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between border-t border-border pt-2">
                <span className="text-muted-foreground">Sunday</span>
                <span className="font-semibold text-red-500">Closed</span>
              </div>
            </div>
          </div>

          {/* Consultation Includes */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-card)]">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Stethoscope className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-foreground">Consultation Includes</h3>
            <ul className="mt-4 space-y-2">
              {CONSULT_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions Treated */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-card)]">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <HeartPulse className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-foreground">Conditions Treated</h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {CONDITIONS.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Appointment Form ---------- */

function AppointmentForm({ onSuccess }: { onSuccess: () => void }) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [dateOpen, setDateOpen] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [agreed, setAgreed] = useState(false);
  const firstAvailableDate = getFirstAvailableDate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const hasDateError = !selectedDate;
    setDateError(hasDateError);

    if (!form.checkValidity() || hasDateError || !agreed) {
      form.reportValidity();
      if (!agreed) setSubmitError("Please agree to be contacted regarding your appointment.");
      return;
    }

    const firstName = String(formData.get("first-name") ?? "").trim();
    const lastName = String(formData.get("last-name") ?? "").trim();
    const mobile = String(formData.get("mobile-number") ?? "").trim();
    const email = String(formData.get("email-address") ?? "").trim() || "Not provided";
    const age = String(formData.get("age") ?? "").trim() || "Not provided";
    const gender = String(formData.get("gender") ?? "").trim() || "Not provided";
    const reason = String(formData.get("reason") ?? "").trim();
    const preferredTime = String(formData.get("preferred-time") ?? "").trim();
    const notes = String(formData.get("notes") ?? "").trim() || "None";
    const preferredDate = formatDate(selectedDate);

    setIsSaving(true);

    const message = [
      "🏥 *New Appointment Request*",
      "",
      `👤 *Name:* ${firstName}${lastName ? ` ${lastName}` : ""}`,
      `📞 *Mobile:* ${mobile}`,
      `📧 *Email:* ${email}`,
      `🎂 *Age:* ${age}`,
      `⚤ *Gender:* ${gender}`,
      `🩺 *Reason:* ${reason}`,
      `📅 *Date:* ${preferredDate}`,
      `🕒 *Time:* ${preferredTime}`,
      `📝 *Notes:* ${notes}`,
      "",
      "Please confirm my appointment.",
    ].join("\n");

    setIsSaving(false);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
    onSuccess();
  };

  return (
    <section id="appointment-form" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Book Online
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Schedule Your Consultation
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Fill in your details below and our team will confirm your appointment with{" "}
            {DOCTOR_NAME}.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(37,99,235,0.12)] sm:p-8"
          >
            <div className="flex items-start gap-3 border-b border-blue-50 pb-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#2563EB]">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Patient Information
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  All fields marked with <span className="text-[#2563EB]">*</span> are required.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <FormField label="First Name" name="first-name" required icon={User} placeholder="Enter first name" autoComplete="given-name" />
              <FormField label="Last Name" name="last-name" icon={User} placeholder="Enter last name" autoComplete="family-name" />
              <FormField label="Mobile Number" name="mobile-number" required type="tel" icon={Phone} placeholder="10-digit mobile number" inputMode="numeric" pattern="[0-9]{10}" autoComplete="tel" />
              <FormField label="Email Address" name="email-address" type="email" icon={Mail} placeholder="your@email.com" autoComplete="email" />
              <FormField label="Age" name="age" type="number" icon={User} placeholder="Your age" min={1} max={150} />

              <div>
                <label htmlFor="gender" className="mb-1.5 block text-xs font-semibold text-foreground">
                  Gender
                </label>
                <div className="group flex min-h-12 items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2563EB]/45 hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] focus-within:border-[#2563EB] focus-within:ring-4 focus-within:ring-blue-100">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2563EB] transition-colors group-hover:bg-blue-100">
                    <User className="h-4 w-4" />
                  </span>
                  <select
                    id="gender"
                    name="gender"
                    className="min-w-0 flex-1 appearance-none bg-transparent text-sm text-foreground focus:outline-none"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-blue-50 pt-6">
              <h4 className="font-display text-base font-bold text-foreground">Appointment Details</h4>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferred-date" className="mb-1.5 block text-xs font-semibold text-foreground">
                    Preferred Consultation Date <span className="text-[#2563EB]">*</span>
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
                          {selectedDate ? formatDate(selectedDate) : "Select preferred date"}
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
                        modifiersClassNames={{ available: "text-[#2563EB] hover:bg-blue-50" }}
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

                {/* Preferred Time */}
                <div>
                  <label htmlFor="preferred-time" className="mb-1.5 block text-xs font-semibold text-foreground">
                    Preferred Time <span className="text-[#2563EB]">*</span>
                  </label>
                  <div className="group flex min-h-12 items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2563EB]/45 hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] focus-within:border-[#2563EB] focus-within:ring-4 focus-within:ring-blue-100">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2563EB] transition-colors group-hover:bg-blue-100">
                      <Clock className="h-4 w-4" />
                    </span>
                    <select
                      id="preferred-time"
                      name="preferred-time"
                      required
                      className="min-w-0 flex-1 appearance-none bg-transparent text-sm text-foreground focus:outline-none"
                    >
                      <option value="">Choose time slot</option>
                      {TIME_SLOTS.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Reason for Visit */}
                <div className="sm:col-span-2">
                  <label htmlFor="reason" className="mb-1.5 block text-xs font-semibold text-foreground">
                    Reason for Visit <span className="text-[#2563EB]">*</span>
                  </label>
                  <div className="group flex min-h-12 items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2563EB]/45 hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] focus-within:border-[#2563EB] focus-within:ring-4 focus-within:ring-blue-100">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2563EB] transition-colors group-hover:bg-blue-100">
                      <Stethoscope className="h-4 w-4" />
                    </span>
                    <select
                      id="reason"
                      name="reason"
                      required
                      className="min-w-0 flex-1 appearance-none bg-transparent text-sm text-foreground focus:outline-none"
                    >
                      <option value="">Select reason for visit</option>
                      {REASONS.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="sm:col-span-2">
                  <label htmlFor="notes" className="mb-1.5 block text-xs font-semibold text-foreground">
                    Additional Notes <span className="font-medium text-muted-foreground">(Optional)</span>
                  </label>
                  <div className="group flex items-start gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2563EB]/45 hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] focus-within:border-[#2563EB] focus-within:ring-4 focus-within:ring-blue-100">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2563EB] transition-colors group-hover:bg-blue-100">
                      <Stethoscope className="h-4 w-4" />
                    </span>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      placeholder="Describe your concern or any additional information..."
                      className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/80 focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Agreement Checkbox */}
            <div className="mt-5 flex items-start gap-3">
              <input
                id="agree"
                type="checkbox"
                checked={agreed}
                onChange={(e) => { setAgreed(e.target.checked); setSubmitError(""); }}
                className="mt-1 h-4 w-4 shrink-0 rounded border-blue-200 text-[#2563EB] focus:ring-[#2563EB]"
              />
              <label htmlFor="agree" className="text-xs leading-relaxed text-muted-foreground">
                I agree to be contacted regarding my appointment. <span className="text-[#2563EB]">*</span>
              </label>
            </div>

            {submitError && (
              <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">
                {submitError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSaving}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(37,99,235,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_20px_45px_rgba(37,99,235,0.34)] focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-[#2563EB]"
            >
              {isSaving ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Booking your appointment...
                </>
              ) : (
                <>
                  <Calendar className="h-4 w-4" />
                  Book My Appointment
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Success Screen ---------- */

function SuccessScreen({ onHome }: { onHome: () => void }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center py-20">
      <div className="mx-auto max-w-lg px-4 text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-green-100 text-green-600">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Thank You!
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Your appointment request has been received successfully. Our team will contact you shortly
          to confirm your preferred consultation time.
        </p>

        <div className="mt-8 space-y-3 rounded-2xl border border-border bg-card p-6 text-left">
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">Phone</p>
              <p className="text-sm text-muted-foreground">{PHONE}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">Clinic Address</p>
              <p className="text-sm text-muted-foreground">{ADDRESS.full}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">Consultation Hours</p>
              <p className="text-sm text-muted-foreground">Monday – Saturday: 11:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-glow"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}

/* ---------- Contact Section ---------- */

function ContactSection() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Reach Us
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-base font-bold text-foreground">{CLINIC_NAME}</p>
                <p className="mt-1 text-sm text-muted-foreground">{ADDRESS.full}</p>
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-2 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  <MapPin className="h-3.5 w-3.5" /> Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-base font-bold text-foreground">{DOCTOR_NAME}</p>
                <p className="text-sm text-muted-foreground">{QUALIFICATION} — Skin Specialist & Dermatologist</p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3.5 py-2 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-gold-foreground"
                >
                  <Phone className="h-3.5 w-3.5" /> Call Clinic
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:col-span-2 lg:col-span-1">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-base font-bold text-foreground">Contact Info</p>
                <a href="mailto:info@armoorskinclinic.com" className="mt-1 block text-sm text-primary hover:underline">
                  info@armoorskinclinic.com
                </a>
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-sm text-primary hover:underline"
                >
                  {SITE_URL.replace("https://", "")}
                </a>
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-2 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Choose Us ---------- */

function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Care you can trust, results you can see
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US_DATA.map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-[var(--shadow-card)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-sm font-semibold text-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function AppointmentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Have Questions?
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Find answers to common questions about booking and consultations at {CLINIC_NAME}.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
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
                  <span className="text-sm font-semibold text-foreground leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-border/50 px-5 pb-4 pt-3">
                    <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Patient Preparation ---------- */

function PatientPreparation() {
  const tips = [
    "Bring previous prescriptions if available",
    "Carry medical reports related to your condition",
    "Avoid makeup before skin consultation if possible",
    "Bring details of medications currently being used",
    "Arrive 10–15 minutes early for your appointment",
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Stethoscope className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  Preparing for Your Visit
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Make the most of your consultation with these suggestions
                </p>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Emergency Notice ---------- */

function EmergencyNotice() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "var(--gradient-navy)" }}
          >
            <p className="text-sm leading-relaxed text-white/80">
              <span className="font-semibold text-gold">Important:</span> This page is intended for
              routine dermatology appointments. For medical emergencies, please visit your nearest
              emergency healthcare facility immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust Stats ---------- */

function TrustStats() {
  return (
    <section className="py-16 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { value: "Thousands", label: "Happy Patients" },
            { value: "6+ Years", label: "Trusted Care" },
            { value: "Advanced", label: "Dermatology Services" },
            { value: "Personalized", label: "Treatment Plans" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card px-8 py-5 text-center shadow-[var(--shadow-soft)]"
            >
              <p className="font-display text-xl font-bold text-primary sm:text-2xl">{s.value}</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Form Field ---------- */

function FormField({
  icon: Icon,
  label,
  required,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ElementType;
  label: string;
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
