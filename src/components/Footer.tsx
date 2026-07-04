import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Clock } from "lucide-react";
import logoCircleImg from "@/assets/logocircle.png";
import {
  CLINIC_NAME,
  PHONE,
  PHONE_TEL,
  SOCIAL,
} from "../lib/clinic-data";
import { NAV } from "./Header";

export function Footer() {
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
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Armoor Skin & Hair Clinic on Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition-all hover:border-gold hover:text-gold"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Armoor Skin & Hair Clinic on Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition-all hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Armoor Skin & Hair Clinic on Twitter"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition-all hover:border-gold hover:text-gold"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={`mailto:contact@armoorskinclinic.com`}
                aria-label="Email Armoor Skin & Hair Clinic"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition-all hover:border-gold hover:text-gold"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Quick Links</div>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  {n.href.startsWith("/") ? (
                    <Link to={n.href} className="text-sm text-white/70 hover:text-gold">
                      {n.label}
                    </Link>
                  ) : (
                    <a href={n.href} className="text-sm text-white/70 hover:text-gold">
                      {n.label}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <Link to="/blog" className="text-sm text-white/70 hover:text-gold">
                  Blog
                </Link>
              </li>
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
          <div>&copy; 2026 Armoor Skin & Hair Clinic. All rights reserved.</div>
          <div>Designed with care for our patients.</div>
        </div>
      </div>
    </footer>
  );
}
