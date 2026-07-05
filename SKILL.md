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
