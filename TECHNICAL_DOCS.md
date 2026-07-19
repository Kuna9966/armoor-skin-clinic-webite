# Armoor Skin & Hair Clinic — Technical Documentation

**Website:** [https://armoorskinclinic.com](https://armoorskinclinic.com)
**Last Updated:** July 19, 2026

---

## 1. Project Overview

| Field | Value |
|---|---|
| Site Name | Armoor Skin & Hair Clinic |
| Domain | `armoorskinclinic.com` |
| Language | `en-IN` (English, India) |
| Direction | LTR |
| Primary Purpose | Dermatology clinic website with appointment booking, treatment pages, review management system |
| Build Tool | Lovable platform (lovable.dev) |

---

## 2. Tech Stack

### Core Framework

| Technology | Version | Purpose |
|---|---|---|
| React | 19.2.0 | UI library |
| TypeScript | 5.8.3 | Type-safe JavaScript |
| TanStack Start | 1.168.26 | Full-stack React framework (SSR) |
| TanStack Router | 1.170.16 | File-based routing with SSR support |
| Vite | 8.0.16 | Build tool & dev server |
| Nitro | 3.0.260603-beta | Server engine (Cloudflare Workers target) |

### Styling

| Technology | Purpose |
|---|---|
| Tailwind CSS 4.2.1 | Utility-first CSS framework |
| `tw-animate-css` 1.3.4 | Animation utilities |
| Custom CSS variables | `oklch` color palette in `src/styles.css` |
| Glass morphism utilities | Custom `glass-card`, `gradient-text`, `hero-glow` utilities |

### UI Component Library

| Library | Purpose |
|---|---|
| shadcn/ui (New York style) | Pre-built accessible components (46 components in `src/components/ui/`) |
| Radix UI | Headless component primitives (dialog, dropdown, tabs, accordion, etc.) |
| Lucide React 0.575.0 | Icon library |

### Form Handling

| Library | Purpose |
|---|---|
| React Hook Form 7.71.2 | Form state management |
| Zod 3.24.2 | Schema validation |
| @hookform/resolvers 5.2.2 | Zod + React Hook Form integration |

### Data & API

| Library | Purpose |
|---|---|
| TanStack React Query 5.101.1 | Server state management, caching |

### Animation & Interaction

| Library | Purpose |
|---|---|
| Framer Motion 12.42.2 | Animations and transitions |
| Embla Carousel React 8.6.0 | Carousel/slider component |
| React Resizable Panels 4.6.5 | Resizable panel layouts |
| Vaul 1.1.2 | Drawer component |
| Sonner 2.0.7 | Toast notifications |

### Other Libraries

| Library | Purpose |
|---|---|
| `date-fns` 4.1.0 | Date formatting/manipulation |
| `cmdk` 1.1.1 | Command palette component |
| `input-otp` 1.4.2 | OTP input component |
| `react-day-picker` 9.14.0 | Calendar/date picker |
| `recharts` 2.15.4 | Charting library (review dashboard) |
| `class-variance-authority` 0.7.1 | Component variant utility |
| `clsx` + `tailwind-merge` | Conditional class merging |

---

## 3. Project Structure

```
armoor-skin-clinic-website/
├── public/                         # Static assets (served as-is)
│   ├── images/                     # Organized image directories
│   │   ├── banner/                 # Promotional banners
│   │   ├── blog/                   # Blog images
│   │   ├── clinic/                 # Clinic exterior/interior photos
│   │   ├── diseases/               # Disease condition images
│   │   ├── doctor/                 # Doctor photos
│   │   ├── gallery/                # Gallery section images
│   │   ├── logo/                   # Logo assets
│   │   └── treatments/             # Treatment-related images
│   ├── favicon.ico, favicon-*.png  # Multi-resolution favicons
│   ├── android-chrome-*.png        # PWA icons
│   ├── apple-touch-icon.png        # iOS icon
│   ├── og-image.jpg                # Open Graph social preview
│   ├── sitemap.xml                 # XML Sitemap
│   ├── robots.txt                  # Crawler directives
│   ├── site.webmanifest            # PWA manifest
│   ├── llms.txt, llms-full.txt     # AI/LLM metadata
│   └── Review-QR.png               # QR code for Google reviews
│
├── src/
│   ├── routes/                     # File-based route definitions (TanStack Router)
│   │   ├── __root.tsx              # Root layout (HTML shell, meta, scripts)
│   │   ├── index.tsx               # Homepage (/)
│   │   ├── treatments.tsx          # Treatments listing (/treatments)
│   │   ├── treatments.$slug.tsx    # Dynamic treatment pages (/treatments/:slug)
│   │   ├── treatments.acne-treatment-armoor.tsx   # SEO-specific treatment pages
│   │   ├── treatments.hair-loss-treatment-armoor.tsx
│   │   ├── treatments.psoriasis-treatment-armoor.tsx
│   │   ├── treatments.eczema-treatment-armoor.tsx
│   │   ├── treatments.fungal-infection-treatment-armoor.tsx
│   │   ├── treatments.dandruff-treatment-armoor.tsx
│   │   ├── treatments.vitiligo-treatment-armoor.tsx
│   │   ├── treatments.pigmentation-treatment-armoor.tsx
│   │   ├── treatments.skin-allergy-treatment-armoor.tsx
│   │   ├── treatments.nail-disorders-armoor.tsx
│   │   ├── treatments.wart-removal-armoor.tsx
│   │   ├── treatments.mole-removal-armoor.tsx
│   │   ├── appointments.tsx        # Appointment booking page
│   │   ├── blog.tsx                # Blog listing
│   │   ├── blog.$slug.tsx          # Dynamic blog posts
│   │   ├── review.tsx              # Google review redirect page
│   │   └── manage-reviews.tsx      # Admin review management dashboard
│   │
│   ├── components/
│   │   ├── Header.tsx              # Site header/navigation
│   │   ├── Footer.tsx              # Site footer
│   │   ├── DiseaseExplorer.tsx     # Interactive disease browser
│   │   └── ui/                     # 46 shadcn/ui components
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── popover.tsx
│   │       ├── sheet.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── toast.tsx
│   │       └── ... (46 total)
│   │
│   ├── hooks/
│   │   └── use-mobile.tsx          # Mobile detection hook
│   │
│   ├── lib/                        # Utility modules & data
│   │   ├── clinic-data.ts          # Clinic info, contacts, addresses, geo coordinates
│   │   ├── treatments.ts           # Treatment catalog data
│   │   ├── disease-data.ts         # Disease encyclopedia data
│   │   ├── faq-data.ts             # FAQ content
│   │   ├── api-handlers.ts         # Server-side API route handler
│   │   ├── utils.ts                # Utility functions (cn, etc.)
│   │   ├── error-capture.ts        # SSR error capture
│   │   ├── error-page.ts           # Error page renderer
│   │   └── lovable-error-reporting.ts  # Lovable error telemetry
│   │
│   ├── services/
│   │   └── mockApi.ts              # Client-side API wrapper (fetch to /api/*)
│   │
│   ├── assets/                     # Source images (bundled by Vite)
│   │   ├── AdBanner.jpg
│   │   ├── Clinic Exterior.jpg / .webp
│   │   ├── Clinic Interior Consultation Room.webp
│   │   ├── Hairdisease.jpg
│   │   ├── Profile.jpg
│   │   ├── SkinDisease.png
│   │   └── logocircle.png
│   │
│   ├── routeTree.gen.ts            # Auto-generated route tree
│   ├── router.tsx                  # Router configuration
│   ├── start.ts                    # TanStack Start entry (middleware)
│   ├── server.ts                   # Custom Cloudflare Worker server entry
│   └── styles.css                  # Global styles & Tailwind config
│
├── lib/
│   └── db.ts                       # D1 database helper class (ReviewDB)
│
├── migrations/
│   └── 0001_create_reviews.sql     # D1 database migration
│
├── types/                          # Shared TypeScript type definitions
├── .lovable/                       # Lovable platform config
├── .tanstack/                      # TanStack generated files
├── .wrangler/                      # Wrangler local state
├── components.json                 # shadcn/ui configuration
├── vite.config.ts                  # Vite + Lovable plugin config
├── wrangler.jsonc                  # Cloudflare Workers config
├── tsconfig.json                   # TypeScript config
├── eslint.config.js                # ESLint + Prettier config
├── .prettierrc                     # Prettier config
└── package.json
```

---

## 4. Routing Architecture

The site uses **TanStack Router** with file-based routing and automatic route tree generation.

### Public Routes

| Route | File | Description |
|---|---|---|
| `/` | `index.tsx` | Homepage — hero, about, doctor, treatments, gallery, reviews, FAQ, contact |
| `/treatments` | `treatments.tsx` | Treatment listing with DiseaseExplorer |
| `/treatments/:slug` | `treatments.$slug.tsx` | Dynamic treatment detail pages |
| `/treatments/acne-treatment-armoor` | `treatments.acne-treatment-armoor.tsx` | SEO-specific treatment page |
| `/treatments/hair-loss-treatment-armoor` | `treatments.hair-loss-treatment-armoor.tsx` | SEO-specific treatment page |
| `/treatments/psoriasis-treatment-armoor` | `treatments.psoriasis-treatment-armoor.tsx` | SEO-specific treatment page |
| `/treatments/eczema-treatment-armoor` | `treatments.eczema-treatment-armoor.tsx` | SEO-specific treatment page |
| `/treatments/fungal-infection-treatment-armoor` | `treatments.fungal-infection-treatment-armoor.tsx` | SEO-specific treatment page |
| `/treatments/dandruff-treatment-armoor` | `treatments.dandruff-treatment-armoor.tsx` | SEO-specific treatment page |
| `/treatments/vitiligo-treatment-armoor` | `treatments.vitiligo-treatment-armoor.tsx` | SEO-specific treatment page |
| `/treatments/pigmentation-treatment-armoor` | `treatments.pigmentation-treatment-armoor.tsx` | SEO-specific treatment page |
| `/treatments/skin-allergy-treatment-armoor` | `treatments.skin-allergy-treatment-armoor.tsx` | SEO-specific treatment page |
| `/treatments/nail-disorders-armoor` | `treatments.nail-disorders-armoor.tsx` | SEO-specific treatment page |
| `/treatments/wart-removal-armoor` | `treatments.wart-removal-armoor.tsx` | SEO-specific treatment page |
| `/treatments/mole-removal-armoor` | `treatments.mole-removal-armoor.tsx` | SEO-specific treatment page |
| `/appointments` | `appointments.tsx` | Dedicated appointment page |
| `/blog` | `blog.tsx` | Blog listing |
| `/blog/:slug` | `blog.$slug.tsx` | Dynamic blog post pages |
| `/review` | `review.tsx` | Google review redirect page |

### Admin Routes

| Route | File | Description |
|---|---|---|
| `/manage-reviews` | `manage-reviews.tsx` | Review management dashboard (blocked from crawlers in robots.txt) |

### Route Layout

```
__root.tsx (HTML shell, <HeadContent>, <Scripts>, QueryClientProvider)
├── index.tsx          → Header + Hero/About/Doctor/Treatments/Gallery/Reviews/FAQ/Contact + Footer
├── treatments.tsx     → Header + [DiseaseExplorer | Outlet] + Footer
├── appointments.tsx   → Header + AppointmentForm + Footer
├── blog.tsx           → Header + BlogList + Footer
├── review.tsx         → Header + ReviewRedirect + Footer
└── manage-reviews.tsx → Admin Dashboard
```

---

## 5. Server Architecture

### Entry Point: `src/server.ts`

The server entry is a **Cloudflare Worker** that:

1. **API Routing** — Intercepts `/api/*` requests and routes them to `handleApiRoute()`
2. **SSR Rendering** — Delegates all other requests to TanStack Start's server entry
3. **Security Headers** — Adds security headers to all non-static responses
4. **Caching** — Sets immutable cache headers for static assets, no-cache for HTML
5. **Error Handling** — Catches h3 swallowed errors and renders a fallback error page

### Security Headers

```typescript
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), geolocation=(), microphone=(), payment=(), usb=()
Content-Security-Policy: (restrictive CSP with Google Analytics allowlists)
```

### Middleware (`src/start.ts`)

TanStack Start request middleware catches unhandled SSR errors and renders the custom error page.

---

## 6. Database

### Technology: Cloudflare D1 (SQLite)

| Property | Value |
|---|---|
| Database Name | `review-db` |
| Binding Name | `DB` |
| Database ID | `30d06106-e731-4c49-8af6-6a857da36ad9` |
| Access | Server-side only via `lib/db.ts` (`ReviewDB` class) |

### Schema (`migrations/0001_create_reviews.sql`)

```sql
CREATE TABLE IF NOT EXISTS reviews (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  review      TEXT NOT NULL,
  status      TEXT NOT NULL DEFAULT 'unused'
              CHECK (status IN ('unused', 'assigned', 'used')),
  assigned_at TEXT,
  copied_at   TEXT,
  created_at  TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Indexes
CREATE INDEX idx_reviews_status     ON reviews(status);
CREATE INDEX idx_reviews_created_at ON reviews(created_at);
CREATE INDEX idx_reviews_assigned_at ON reviews(assigned_at);
CREATE INDEX idx_reviews_copied_at   ON reviews(copied_at);
```

### Review Status Lifecycle

```
unused → assigned → used
```

1. **unused** — Review imported into the queue
2. **assigned** — Review given to a visitor (next in queue)
3. **used** — Review copied to clipboard by visitor

---

## 7. API Endpoints

All endpoints are handled server-side via `src/lib/api-handlers.ts` and are prefixed with `/api/`.

| Endpoint | Method | Description |
|---|---|---|
| `/api/health` | GET | Database health check |
| `/api/stats` | GET | Dashboard statistics (total, remaining, used, assigned, imported today, queue health) |
| `/api/review` | GET | Get next unassigned review from queue |
| `/api/charts` | GET | Chart data for dashboard (daily imports, usage trends, remaining trend) |
| `/api/import` | POST | Import reviews (body: `{ reviews: string[] }`, max 1000) |
| `/api/copy` | POST | Mark review as copied (body: `{ reviewId: number }`) |
| `/api/reset` | POST | Reset assigned reviews back to unused |
| `/api/all` | DELETE | Delete all reviews |
| `/api/reset-ids` | POST | Reset auto-increment ID sequence |
| `/api/export` | GET | Export all reviews as CSV download |
| `/api/history` | GET | Get review event history (query: `?limit=1-200`) |
| `/api/queue` | GET | Paginated review queue (query: `?search=&status=&page=&pageSize=`) |

---

## 8. Image Strategy

### Asset Locations

| Location | Type | Handling |
|---|---|---|
| `public/images/` | Static images | Served as-is, referenced by path |
| `src/assets/` | Source images | Bundled by Vite, content-hashed |
| `public/og-image.jpg` | Open Graph image | Static, referenced in meta tags |
| `public/Review-QR.png` | QR code | Static |

### Image Formats

- **WebP** — Primary format for clinic/gallery/disease images (`.webp`)
- **JPEG** — OG image, some source assets
- **PNG** — Logos, icons, disease illustrations
- **SVG** — Inline icons (via Lucide)

### Image Loading

- **Hero image** — `loading="eager"` + `fetchpriority="high"` (LCP optimization)
- **All other images** — `loading="lazy"` (default browser behavior)
- **Font preloading** — Google Fonts preloaded via `<link rel="preload" as="style">` with JS-based onload stylesheet switch

### Image Directory Structure

```
public/images/
├── banner/          # Promotional banners (ad-banner.webp)
├── blog/            # Blog post images
├── clinic/          # Hero, exterior, interior photos
├── diseases/        # Skin/hair disease reference images
├── doctor/          # Doctor profile images
├── gallery/         # Clinic gallery photos
├── logo/            # Brand logos
└── treatments/      # Treatment category images
```

---

## 9. SEO Implementation

### Meta Tags (per route)

Every route defines its own `head()` function returning:
- `title` — Keyword-optimized with clinic name and doctor credentials
- `description` — Route-specific meta description
- `robots` — `index, follow` (or `max-image-preview:large` on root)
- `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`, `og:locale`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- `canonical` — Per-page canonical URL

### Geo Tags

```html
<meta name="geo.region" content="IN-TG">
<meta name="geo.placename" content="Armoor, Nizamabad, Telangana">
<meta name="geo.position" content="18.796;78.289">
<meta name="ICBM" content="18.796, 78.289">
```

### Structured Data (JSON-LD)

The site implements extensive **Schema.org** structured data:

| Schema Type | Description |
|---|---|
| `MedicalClinic` | Full clinic info — name, address, geo, hours, services, social links |
| `Physician` | Dr. Raghavendhra — specialty, qualifications, works-for reference |
| `LocalBusiness` | Business listing — price range, hours, address |
| `Organization` | Organization with contact point (multilingual: English, Telugu, Hindi, Urdu) |
| `WebSite` | Website with SearchAction |
| `BreadcrumbList` | Breadcrumb navigation schema |
| `FAQPage` | FAQ structured data (homepage) |

### Sitemap (`public/sitemap.xml`)

- 16 URLs indexed (homepage, treatments hub, 12 individual treatment pages, appointments, blog)
- Priority: 1.0 (homepage), 0.9 (treatments hub, appointments), 0.8 (treatment pages), 0.6 (blog)
- Change frequency: weekly (hub pages), monthly (treatment detail pages)

### Robots (`public/robots.txt`)

```
User-agent: *
Disallow: /admin/
Disallow: /manage-reviews
Sitemap: https://armoorskinclinic.com/sitemap.xml
```

### LLM Metadata

- `public/llms.txt` — AI-readable site summary
- `public/llms-full.txt` — Extended AI-readable site content

### PWA Support (`public/site.webmanifest`)

```json
{
  "name": "Armoor Skin & Hair Clinic",
  "short_name": "Armoor Skin Clinic",
  "icons": [192x192, 512x512],
  "display": "standalone"
}
```

---

## 10. Analytics & Tracking

### Google Analytics 4

- **Measurement ID:** `G-137R4392R4`
- Loaded via Google Tag Manager (`gtag.js`)
- Configured in root layout `<head>` scripts
- CSP headers whitelist Google Analytics domains

---

## 11. Styling System

### Design Tokens (`src/styles.css`)

The project uses **Tailwind CSS v4** with CSS custom properties in `oklch` color space:

| Token | Value | Usage |
|---|---|---|
| `--primary` | `oklch(0.24 0.08 265)` | Navy blue (#0A1F44) — brand primary |
| `--gold` | `oklch(0.78 0.12 82)` | Warm gold accent |
| `--teal` | `oklch(0.62 0.09 195)` | Calm teal accent |
| `--destructive` | `oklch(0.577 0.245 27.325)` | Error/danger red |
| `--success` | `oklch(0.68 0.18 155)` | Success green |

### Typography

| Font | Weights | Usage |
|---|---|---|
| Inter | 400, 500, 600, 700 | Body text (`--font-sans`) |
| Poppins | 500, 600, 700, 800 | Headlines (`--font-display`) |

### Custom Utilities

| Utility | Description |
|---|---|
| `glass-card` | Glassmorphism card with blur and semi-transparent background |
| `gradient-text` | Gradient text effect |
| `gradient-bg` | Gradient background |
| `hero-glow` | Radial gradient background for hero sections |
| `shadow-glow` | Elevated glow shadow |

### Gradients & Shadows

```css
--gradient-hero:    linear-gradient(135deg, navy → dark navy)
--gradient-navy:    linear-gradient(180deg, navy shades)
--gradient-primary: linear-gradient(135deg, primary → primary glow)
--gradient-glass:   linear-gradient(135deg, white/70 → white/40)
--shadow-soft:      Subtle card shadow
--shadow-card:      Medium card shadow
--shadow-elegant:   Elevated shadow
--shadow-glow:      Maximum glow shadow
```

---

## 12. Appointment System

The appointment system is **client-side only** — form submissions redirect to WhatsApp:

1. User fills form (name, mobile, email, department, date, time)
2. Form data is formatted as a WhatsApp message
3. User is redirected to `https://wa.me/919603752752?text=...`
4. No backend API call — WhatsApp serves as the booking channel

### Date Picker

- Uses `react-day-picker` via shadcn/ui `Calendar` component
- Minimum selectable date is tomorrow
- Weekends/Sundays can be selected (no server validation)

### Department Options

General Dermatology, Skin Consultation, Hair Consultation, Acne Treatment, Hair Loss Treatment, Pigmentation Treatment, Allergy & Skin Infection, Nail Disorders, Cosmetic Dermatology

---

## 13. Review Management System

### Client-Side (`src/services/mockApi.ts`)

The review system provides:

- **Review Queue** — FIFO queue of imported reviews
- **Assignment** — Visitors get next available review
- **Copy & Redirect** — Review copied to clipboard + user redirected to Google review page
- **Dashboard** — Admin stats (total, remaining, used, assigned, queue health, charts)
- **History** — Full audit trail of review actions
- **Import/Export** — Bulk import (text, max 1000) + CSV export
- **Queue Reset** — Reset assigned reviews back to unused
- **ID Reset** — Reset auto-increment sequence

### Google Review URL

```
https://g.page/r/CWYmHRHhqTqnEAE/review
```

---

## 14. Error Handling

### SSR Error Capture (`src/lib/error-capture.ts`)

- Global error listener captures uncaught errors during SSR
- Errors are stored in memory and consumed by the server entry

### Error Page (`src/lib/error-page.ts`)

- Renders a static HTML error page for 500 errors
- Used by both the server entry and TanStack Start middleware

### h3 Error Normalization (`src/server.ts`)

- Detects h3's swallowed error pattern (`{"unhandled":true,"message":"HTTPError"}`)
- Converts to a rendered HTML error page instead of raw JSON

### Lovable Error Reporting (`src/lib/lovable-error-reporting.ts`)

- Reports client-side errors to Lovable's error tracking

---

## 15. Build & Deployment

### Build Process

```bash
# Development
npm run dev          # Vite dev server

# Production
npm run build        # Vite build + Cloudflare Worker config fixup
npm run build:dev    # Development build
npm run preview      # Preview production build

# Code Quality
npm run lint         # ESLint
npm run format       # Prettier
```

### Build Script

The `build` script runs Vite build, then patches `.output/server/wrangler.json`:
- Removes `pages_build_output_dir` (for Workers compatibility)
- Sets `assets.directory` to `../public`
- Sets `assets.binding` to `ASSETS`

### Deployment Target: Cloudflare Workers

| Config | Value |
|---|---|
| Worker Name | `armoor-skin-clinic-website` |
| Entry | `.output/server/index.mjs` |
| Assets | `.output/public` |
| Compatibility Date | `2024-09-23` |
| Platform | Lovable → Cloudflare Workers |

### Lovable Integration

- `@lovable.dev/vite-tanstack-config` plugin handles:
  - TanStack Start, React, Tailwind, TypeScript paths, Nitro (Cloudflare target)
  - Component tagger (dev-only), env injection, React/TanStack deduplication
  - Error logging, sandbox detection

---

## 16. TypeScript Configuration

| Setting | Value |
|---|---|
| Target | ES2022 |
| Module | ESNext |
| JSX | react-jsx |
| Module Resolution | Bundler |
| Strict Mode | Enabled |
| Path Alias | `@/*` → `./src/*` |
| Lib | ES2022, DOM, DOM.Iterable |

---

## 17. Linting & Formatting

### ESLint

- TypeScript-ESLint recommended rules
- React Hooks rules
- React Refresh rules
- Prettier integration
- Custom rule: No `server-only` imports (TanStack Start uses `*.server.ts` convention)

### Prettier

- Configured via `.prettierrc`
- Integrated into ESLint via `eslint-plugin-prettier`

---

## 18. Third-Party Integrations

| Service | Integration Point | Purpose |
|---|---|---|
| Google Analytics 4 | `G-137R4392R4` | Traffic analytics |
| Google Maps | Embedded iframe + link | Clinic location |
| Google Reviews | `g.page/r/CWYmHRHhqTqnEAE/review` | Patient review collection |
| WhatsApp Business | `wa.me/919603752752` | Appointment booking channel |
| Facebook | Social link | Clinic social presence |
| Instagram | Social link | Clinic social presence |
| Twitter/X | Social link | Clinic social presence |

---

## 19. Content Architecture

### Treatment Pages

12 dedicated SEO treatment pages targeting "Armoor" keyword:

- Acne Treatment
- Hair Loss Treatment
- Psoriasis Treatment
- Eczema Treatment
- Fungal Infection Treatment
- Dandruff Treatment
- Vitiligo Treatment
- Pigmentation Treatment
- Skin Allergy Treatment
- Nail Disorders
- Wart Removal
- Mole Removal

Each page has:
- Unique `<title>` and meta description
- Canonical URL
- Open Graph tags
- JSON-LD structured data (inherited from root)

### Disease Encyclopedia

`src/lib/disease-data.ts` contains structured data for:
- Skin diseases (conditions, symptoms, treatments)
- Hair diseases (conditions, symptoms, treatments)

Exposed via `DiseaseExplorer` component on the `/treatments` page.

### FAQ Data

`src/lib/faq-data.ts` contains frequently asked questions rendered as:
- Visual FAQ accordion on homepage
- JSON-LD `FAQPage` structured data for search engines

### Clinic Data (`src/lib/clinic-data.ts`)

Central source of truth for:
- Clinic name, doctor name, qualifications
- Phone numbers (formatted and tel: format)
- WhatsApp number
- Full address with components
- Geo coordinates (latitude: 18.796, longitude: 78.289)
- Operating hours
- Social media links
- Site URL and description
- Mandals and villages served (7 mandals, 100+ villages)

---

## 20. Performance Considerations

| Technique | Implementation |
|---|---|
| SSR | Full server-side rendering via TanStack Start + Nitro |
| Font Preloading | Google Fonts preloaded via `<link rel="preload">` with JS onload swap |
| Image Lazy Loading | `loading="lazy"` on all non-hero images |
| Hero Image Priority | `loading="eager"` + `fetchpriority="high"` |
| Static Asset Caching | `Cache-Control: immutable, max-age=31536000` for JS/CSS/images |
| HTML Caching | `Cache-Control: must-revalidate` for HTML pages |
| Font Loading | `font-display: swap` equivalent via preloaded stylesheet |
| CSS | Tailwind CSS v4 with content-based purging |
| Code Splitting | File-based route splitting (TanStack Router) |

---

## 21. Accessibility

| Feature | Implementation |
|---|---|
| Language | `lang="en-IN"` on `<html>` |
| Semantic HTML | `<section>`, `<main>`, `<header>`, `<footer>`, `<nav>` |
| ARIA Labels | `role="dialog"`, `aria-modal`, `aria-label` on modals |
| Form Labels | Proper `<label htmlFor>` associations |
| Focus Management | Focus rings via Tailwind `focus:` utilities |
| Keyboard Navigation | Radix UI primitives provide keyboard support |
| Color Contrast | OKLCh color system with WCAG-aware token design |
| Screen Reader | `aria-hidden` on decorative elements, `sr-only` class for hidden inputs |
| Alt Text | Descriptive alt attributes on all content images |

---

## 22. Key Files Reference

| File | Purpose |
|---|---|
| `src/server.ts` | Cloudflare Worker entry — API routing, security headers, error handling |
| `src/routes/__root.tsx` | HTML shell, meta tags, JSON-LD, Google Analytics, QueryClient provider |
| `src/routes/index.tsx` | Homepage with all sections |
| `src/lib/clinic-data.ts` | Single source of truth for all clinic information |
| `src/lib/api-handlers.ts` | All API route handlers |
| `src/lib/disease-data.ts` | Disease encyclopedia data |
| `src/services/mockApi.ts` | Client-side API wrapper for review system |
| `lib/db.ts` | D1 database class (`ReviewDB`) |
| `wrangler.jsonc` | Cloudflare Workers & D1 configuration |
| `components.json` | shadcn/ui component configuration |
| `src/styles.css` | Global styles, design tokens, custom utilities |

---

*Document generated automatically from codebase analysis.*
