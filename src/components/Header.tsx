import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import logoCircleImg from "@/assets/logocircle.png";
import {
  CLINIC_NAME,
  PHONE,
  PHONE_TEL,
} from "../lib/clinic-data";

export const NAV = [
  { label: "Home", href: "#home", path: "/" },
  { label: "About", href: "#about", path: "/" },
  { label: "Services", href: "#services", path: "/" },
  { label: "Treatments", href: "/treatments", path: "/treatments" },
  { label: "Doctor", href: "#doctor", path: "/" },
  { label: "Gallery", href: "#gallery", path: "/" },
  { label: "Contact", href: "#contact", path: "/" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (navPath: string) => {
    if (navPath === "/") return false;
    return location.pathname.startsWith(navPath);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
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
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {NAV.map((n) =>
            n.href.startsWith("/") ? (
              <Link
                key={n.href}
                to={n.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(n.path) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {n.label}
              </Link>
            ) : (
              <Link
                key={n.href}
                to="/"
                hash={n.href.replace("#", "")}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-primary transition-all hover:border-primary hover:shadow-[var(--shadow-soft)]"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-primary-glow hover:shadow-[var(--shadow-elegant)]"
          >
            <Calendar className="h-4 w-4" /> Book Appointment
          </Link>
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
          <div
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {NAV.map((n) =>
              n.href.startsWith("/") ? (
                <Link
                  key={n.href}
                  to={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
                >
                  {n.label}
                </Link>
              ) : (
                <Link
                  key={n.href}
                  to="/"
                  hash={n.href.replace("#", "")}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
                >
                  {n.label}
                </Link>
              ),
            )}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-primary"
              >
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
              <Link
                to="/"
                hash="contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Calendar className="h-4 w-4" /> Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
