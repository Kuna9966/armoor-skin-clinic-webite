# Armoor Skin & Hair Clinic — Project Guide

## Tech Stack
- **Framework**: React + TanStack Router (file-based routing)
- **Build**: Vite → Nitro (SSR)
- **Styling**: Tailwind CSS with CSS variables (oklch colors)
- **Icons**: lucide-react
- **Deployment**: Cloudflare Workers (via nitro)

## Key Commands
```bash
npm run dev        # local dev server
npm run build      # production build (route tree + client + SSR)
npx prettier --write "src/**/*.{ts,tsx}"   # format code
```

## Project Structure
```
src/
  components/       # Shared components (Header, Footer, etc.)
  routes/           # File-based routes (TanStack Router)
    index.tsx       # Home page (all sections)
    treatments.tsx  # Treatments listing
    treatments.$slug.tsx  # Catch-all treatment page (strips -armoor)
    treatments.*-armoor.tsx  # Dedicated city treatment pages
  lib/              # Data & utilities
  assets/           # Images
```

## Header Nav (src/components/Header.tsx)
- Sliding pill indicator that follows scroll position on home page
- `scrolled` state: `true` after 8px scroll — toggles header backdrop and pill/button colors
- **At top (`!scrolled`)**: pill white, pill text `#142146`, nav text white — all items visible on dark hero
- **Scrolled**: pill `#142146`, pill text white, nav text `#3A3A3A` — visible on white header backdrop
- `displayIdx` = scroll spy index on home page, URL-based index on other pages
- Scroll spy: `SECTION_TO_NAV` maps section IDs to nav indices; rAF-throttled scroll detection using `offset=120`
- Pill uses inline `transform: translateX(...) translateY(-50%)` — must combine both transforms (inline overrides Tailwind classes)
- Active nav uses both `aria-current="page"` (for accessibility/SEO) and `shouldHighlight` (for visual pill)

## Home Page Sections (src/routes/index.tsx)
| Section | Component | Background |
|---------|-----------|------------|
| Hero | `<section id="home">` | Dark navy gradient |
| About | `<Section>` | Light (default) |
| Timings | `<Section tone="muted">` | Light muted |
| Doctor | `<Section tone="muted">` | Light muted |
| Treatments | `<Section>` | Light |
| Why Us | `<section>` | Dark gradient |
| Gallery | `<Section>` | Light |
| Reviews | `<section>` | Dark gradient |
| FAQ | `<section>` | Light gradient |
| Contact | `<Section>` | Light |

## Treatment Pages
- 12 dedicated city pages (`treatments.*-armoor.tsx`) with 15-section rich template
- `treatments.$slug.tsx`: catch-all that strips `-armoor` suffix, redirects old slugs
- `treatments.tsx`: listing page linking all treatments to armoor routes

## Color System
- Primary navy: `#142146`
- Gold accent: `var(--gold)` / `text-gold`
- Dark backgrounds: `var(--gradient-hero)`, `var(--gradient-navy)`, oklch gradients
- Header adaptive colors controlled via `!scrolled` conditional classes

## Important Patterns
- Pill `transform` must include BOTH `translateX` and `translateY(-50%)` in inline style
- Nav hover temporarily moves pill; mouse leave returns to scroll-active section
- Mobile nav is separate from desktop nav — no pill on mobile
- All durations: 300ms for most transitions

## Image Optimization Standard

This is a permanent project standard. Apply to every new page, component, blog post, gallery, treatment page, or feature added in the future without requiring additional prompts.

### Format Rules
- **Photographs** → WebP at ~80% quality (75–85% acceptable)
- **Vector graphics, logos, icons, illustrations** → SVG whenever possible
- **Favicons** → SVG primary, PNG fallback for older browsers
- **Open Graph / Social images** → JPEG (best cross-platform support)
- Never introduce PNG or JPEG photos unless a technical reason prevents WebP

### Optimization
- Export WebP at ~80% quality using `cwebp -q 80`
- Strip unnecessary metadata
- Use sRGB color profile
- Keep file sizes as small as possible without noticeable quality loss

### Responsive Images
- Use `srcset` and `sizes` for responsive breakpoints where practical
- Serve appropriately sized images for desktop, tablet, and mobile

### Lazy Loading
- `loading="lazy"` on all non-critical images
- Do NOT lazy-load hero / LCP images — use `loading="eager"`

### Layout Shift (CLS) Prevention
- Every `<img>` must include explicit `width` and `height` attributes

### Folder Structure
```
public/images/
├── doctor/           # Doctor profile photos
├── clinic/           # Clinic exterior, interior photos
├── treatments/       # Treatment-specific images per subfolder
│   ├── acne/
│   ├── hair-loss/
│   ├── psoriasis/
│   └── vitiligo/
├── diseases/         # Disease card listing images
├── gallery/          # Gallery photos
├── blog/             # Blog post images
├── banner/           # Promotional banners
├── logo/             # Logo assets
└── favicon/          # Favicon SVG + PNG variants
```

### SEO
- Maintain descriptive, kebab-case filenames
- Keep meaningful alt attributes on every image
- Do not change existing alt text unless necessary

### Adding New Treatment Images
When adding images from `Special-Images/` to a treatment page:

1. Convert to WebP: `cwebp -q 80 "input.png" -o "public/images/treatments/<condition>/<name>.webp"`
2. Update `src/routes/treatments.*.tsx`:
   - Replace the placeholder div with `<img src="/images/treatments/<condition>/<name>.webp" alt="..." width={800} height={600} loading="lazy" />`
   - Remove unused icon imports from the import block
3. Four images per page: WhatIsSection (1st), SymptomsSection (2nd), DiagnosisSection (3rd), TipsSection (4th)
