import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import {
  CLINIC_NAME,
  DOCTOR_NAME,
  QUALIFICATION,
  SITE_URL,
  SITE_DESCRIPTION,
  ADDRESS,
  PHONE_TEL,
  PHONE,
  HOURS,
  COORDINATES,
  WHATSAPP,
} from "../lib/clinic-data";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: `Best Skin & Hair Clinic in Armoor | ${DOCTOR_NAME} ${QUALIFICATION} | Dermatologist`,
      },
      {
        name: "description",
        content: SITE_DESCRIPTION,
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "googlebot", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#0A1F44" },
      { name: "geo.region", content: "IN-TG" },
      { name: "geo.placename", content: "Armoor, Nizamabad, Telangana" },
      { name: "geo.position", content: `${COORDINATES.latitude};${COORDINATES.longitude}` },
      { name: "ICBM", content: `${COORDINATES.latitude}, ${COORDINATES.longitude}` },
      {
        property: "og:title",
        content: `Best Skin & Hair Clinic in Armoor | ${DOCTOR_NAME} ${QUALIFICATION}`,
      },
      {
        property: "og:description",
        content: SITE_DESCRIPTION,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: CLINIC_NAME },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: `Best Skin & Hair Clinic in Armoor | ${DOCTOR_NAME} ${QUALIFICATION}`,
      },
      {
        name: "twitter:description",
        content: SITE_DESCRIPTION,
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/og-image.jpg`,
      },
      {
        property: "og:image",
        content: `${SITE_URL}/og-image.jpg`,
      },
      {
        property: "og:image:type",
        content: "image/jpeg",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "alternate icon", href: "/images/favicon/favicon-32.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/images/favicon/favicon-256.png" },
    ],
    scripts: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-137R4392R4",
        async: true,
      },
      {
        children:
          "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-137R4392R4');",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "@id": `${SITE_URL}/#clinic`,
              name: CLINIC_NAME,
              alternateName: "Armoor Skin & Hair Clinic",
              description: SITE_DESCRIPTION,
              url: SITE_URL,
              telephone: PHONE_TEL,
              email: "contact@armoorskinclinic.com",
              logo: `${SITE_URL}/favicon.svg`,
              image: `${SITE_URL}/og-image.jpg`,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Opposite VR Hospital, Beside LK Hospital, Mahalaxmi Colony",
                addressLocality: "Armoor",
                addressRegion: "Telangana",
                postalCode: "503224",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: COORDINATES.latitude,
                longitude: COORDINATES.longitude,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "11:00",
                  closes: "18:00",
                },
              ],
              medicalSpecialty: "Dermatology",
              availableService: [
                "Acne Treatment",
                "Hair Loss Treatment",
                "Psoriasis Treatment",
                "Vitiligo Treatment",
                "Pigmentation Treatment",
                "Eczema Treatment",
                "Skin Allergy Treatment",
                "Fungal Infection Treatment",
                "Dandruff Treatment",
                "Nail Disorders Treatment",
                "Wart Removal",
                "Mole Removal",
                "Chemical Peels",
                "PRP Therapy",
                "Phototherapy",
                "Pediatric Dermatology",
                "Cosmetic Dermatology",
              ],
              founder: {
                "@type": "Person",
                name: DOCTOR_NAME,
              },
              sameAs: [
                "https://facebook.com/armoorskinclinic",
                "https://instagram.com/armoorskinclinic",
                "https://twitter.com/armoorskinclinic",
              ],
            },
            {
              "@type": "Physician",
              "@id": `${SITE_URL}/#doctor`,
              name: `${DOCTOR_NAME}, ${QUALIFICATION}`,
              description: "Consultant Dermatologist at Armoor Skin & Hair Clinic",
              medicalSpecialty: "Dermatology",
              url: `${SITE_URL}/#doctor`,
              image: `${SITE_URL}/og-image.jpg`,
              knowsAbout: [
                "Acne Treatment",
                "Hair Loss Treatment",
                "Psoriasis",
                "Eczema",
                "Vitiligo",
                "Pigmentation",
                "Skin Allergies",
                "Fungal Infections",
                "Pediatric Dermatology",
                "Cosmetic Dermatology",
              ],
              worksFor: {
                "@id": `${SITE_URL}/#clinic`,
              },
            },
            {
              "@type": "LocalBusiness",
              "@id": `${SITE_URL}/#business`,
              name: CLINIC_NAME,
              url: SITE_URL,
              telephone: PHONE_TEL,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Opposite VR Hospital, Beside LK Hospital, Mahalaxmi Colony",
                addressLocality: "Armoor",
                addressRegion: "Telangana",
                addressCountry: "IN",
              },
              priceRange: "₹",
              openingHours: "Mo-Sa 11:00-18:00",
              image: `${SITE_URL}/og-image.jpg`,
            },
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: CLINIC_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/favicon.svg`,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: PHONE_TEL,
                contactType: "appointment",
                availableLanguage: ["English", "Telugu", "Hindi", "Urdu"],
              },
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              name: CLINIC_NAME,
              url: SITE_URL,
              description: SITE_DESCRIPTION,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${SITE_URL}/?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${SITE_URL}/#breadcrumbs`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: SITE_URL,
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" dir="ltr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
