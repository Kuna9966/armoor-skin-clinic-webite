import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState, useRef, useCallback } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
const logoCircleImg = "/images/logo/logocircle.webp";
import { CLINIC_NAME, PHONE, PHONE_TEL } from "../lib/clinic-data";

export const NAV = [
  { label: "Home", href: "#home", path: "/" },
  { label: "About", href: "#about", path: "/" },
  { label: "Treatments", href: "/treatments", path: "/treatments" },
  { label: "Doctor", href: "#doctor", path: "/" },
  { label: "Gallery", href: "#gallery", path: "/" },
  { label: "Contact", href: "#contact", path: "/" },
];

const SECTION_TO_NAV: Record<string, number> = {
  home: 0,
  about: 1,
  doctor: 3,
  gallery: 4,
  contact: 5,
};

function getActiveIndex(pathname: string) {
  return NAV.findIndex((n) => {
    if (n.path === "/") return pathname === "/";
    return pathname.startsWith(n.path);
  });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({ width: 0, x: 0 });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [scrollIdx, setScrollIdx] = useState<number>(0);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const isHome = location.pathname === "/";

  const activeIdx = getActiveIndex(location.pathname);
  const displayIdx = isHome ? scrollIdx : activeIdx;

  const movePill = useCallback((idx: number) => {
    const el = itemRefs.current[idx];
    if (!el || !navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setPillStyle({
      width: elRect.width,
      x: elRect.left - navRect.left,
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    let ticking = false;
    const detectSection = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const offset = 120;
        const sections = document.querySelectorAll<HTMLElement>("section[id]");
        let found = 0;
        sections.forEach((el) => {
          const top = el.getBoundingClientRect().top;
          if (top <= offset && top > -el.offsetHeight) {
            const idx = SECTION_TO_NAV[el.id];
            if (idx !== undefined) found = idx;
          }
        });
        setScrollIdx(found);
        ticking = false;
      });
    };
    detectSection();
    window.addEventListener("scroll", detectSection, { passive: true });
    return () => window.removeEventListener("scroll", detectSection);
  }, [isHome]);

  useEffect(() => {
    if (displayIdx !== -1) {
      requestAnimationFrame(() => movePill(displayIdx));
    } else {
      setPillStyle({ width: 0, x: 0 });
    }
  }, [displayIdx, movePill]);

  useEffect(() => {
    const onResize = () => {
      const idx = hoveredIdx !== null ? hoveredIdx : displayIdx;
      if (idx !== -1) movePill(idx);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [hoveredIdx, displayIdx, movePill]);

  const handleNavHover = (idx: number) => {
    setHoveredIdx(idx);
    movePill(idx);
  };

  const handleNavLeave = () => {
    setHoveredIdx(null);
    if (displayIdx !== -1) {
      movePill(displayIdx);
    } else {
      setPillStyle({ width: 0, x: 0 });
    }
  };

  const shouldHighlight = (idx: number) =>
    hoveredIdx !== null ? hoveredIdx === idx : idx === displayIdx;

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
              width={192}
              height={192}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="min-w-0 leading-tight">
            <div
              className={`truncate font-display text-sm font-bold sm:text-base transition-colors duration-300 ${
                !scrolled ? "text-white" : "text-primary"
              }`}
            >
              Armoor Skin & Hair Clinic
            </div>
            <div
              className={`truncate text-[11px] transition-colors duration-300 ${
                !scrolled ? "text-white/70" : "text-muted-foreground"
              }`}
            >
              Dermatology · Trichology · Cosmetology
            </div>
          </div>
        </Link>

        <nav
          ref={navRef}
          className="relative hidden items-center lg:flex"
          aria-label="Main navigation"
          onMouseLeave={handleNavLeave}
        >
          <div
            className={`pointer-events-none absolute top-1/2 rounded-full transition-all duration-300 ease-in-out ${
              !scrolled
                ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                : "bg-[#142146] shadow-[0_4px_12px_rgba(20,33,70,0.18)]"
            }`}
            style={{
              width: pillStyle.width,
              height: "36px",
              transform: `translateX(${pillStyle.x}px) translateY(-50%)`,
            }}
          />
          {NAV.map((n, idx) => (
            <Link
              key={n.href}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              to={n.href.startsWith("/") ? n.href : "/"}
              hash={n.href.startsWith("/") ? undefined : n.href.replace("#", "")}
              onMouseEnter={() => handleNavHover(idx)}
              onFocus={() => handleNavHover(idx)}
              aria-current={idx === activeIdx ? "page" : undefined}
              className={`relative z-10 rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                shouldHighlight(idx)
                  ? `font-semibold ${!scrolled ? "text-[#142146]" : "text-white"}`
                  : `font-medium ${!scrolled ? "text-white/80 hover:text-white" : "text-[#3A3A3A] hover:text-primary"}`
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
              !scrolled
                ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
                : "border-border bg-background text-primary hover:border-primary hover:shadow-[var(--shadow-soft)]"
            }`}
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <Link
            to="/"
            hash="contact"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-[var(--shadow-soft)] transition-all ${
              !scrolled
                ? "bg-white text-[#142146] hover:brightness-95"
                : "bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-[var(--shadow-elegant)]"
            }`}
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
