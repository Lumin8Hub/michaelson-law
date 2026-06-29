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
import { Header } from "@/components/site/Header";
import { Footer, CallBar } from "@/components/site/Footer";

const FIRM_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "Attorney"],
  "@id": "/#firm",
  name: "DM Counsel",
  alternateName: "Daniel Michaelson — Personal Injury & Medical Malpractice Lawyer",
  description:
    "Boutique Toronto personal injury and medical malpractice practice led directly by Daniel Michaelson, with nearly two decades of catastrophic-injury, motor vehicle, occupiers' liability, fire-loss, disability and medical-negligence litigation across the Ontario courts and tribunals — including for clients in northern Ontario and Indigenous communities.",
  url: "/",
  telephone: "+1-416-555-0147",
  email: "daniel@dmcounsel.ca",
  priceRange: "Contingency fee — no fees unless your case succeeds",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Ontario, Canada" },
    { "@type": "AdministrativeArea", name: "Northern Ontario" },
    { "@type": "City", name: "Toronto" },
    { "@type": "City", name: "Timmins" },
    { "@type": "City", name: "Sudbury" },
    { "@type": "City", name: "North Bay" },
    { "@type": "City", name: "Cochrane" },
    { "@type": "City", name: "Kenora" },
    { "@type": "City", name: "Fort Frances" },
  ],
  knowsLanguage: ["en-CA", "he"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "111 Peter Street, Suite 700",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  founder: { "@id": "/#daniel" },
  employee: { "@id": "/#daniel" },
};

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "/#daniel",
  name: "Daniel Michaelson",
  jobTitle: "Personal Injury & Medical Malpractice Lawyer",
  worksFor: { "@id": "/#firm" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "York University" },
    { "@type": "CollegeOrUniversity", name: "University of Western Ontario, Faculty of Law" },
  ],
  award: [
    "The Best Lawyers in Canada — Personal Injury Litigation (2024)",
    "Recognized in the Canadian Legal Lexpert Directory",
  ],
  memberOf: [
    { "@type": "Organization", name: "Law Society of Ontario" },
    { "@type": "Organization", name: "The Advocates' Society" },
  ],
  knowsLanguage: ["English", "Hebrew"],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "var(--parchment)" }}>
      <div className="max-w-md text-center">
        <h1 style={{ fontSize: "5rem", color: "var(--navy)" }}>404</h1>
        <h2 style={{ marginTop: "0.5rem" }}>Page not found</h2>
        <p style={{ marginTop: "0.75rem", color: "var(--slate)" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <Link to="/" className="btn btn-navy">Go home</Link>
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
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "var(--parchment)" }}>
      <div className="max-w-md text-center">
        <h1 className="h3">This page didn't load</h1>
        <p style={{ marginTop: "0.75rem", color: "var(--slate)" }}>
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn btn-navy"
          >Try again</button>
          <a href="/" className="btn btn-ghost">Go home</a>
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
      { title: "DM Counsel | Daniel Michaelson — Personal Injury & Medical Malpractice Lawyer, Toronto" },
      { name: "description", content: "Daniel Michaelson is a Toronto personal injury and medical malpractice lawyer with nearly two decades building catastrophic-injury, motor vehicle, medical-negligence and fire-loss cases across Ontario — including in northern and Indigenous communities. Free, confidential consultation. No fees unless your case succeeds." },
      { name: "author", content: "DM Counsel" },
      { property: "og:site_name", content: "DM Counsel" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Hanken+Grotesk:wght@400;500;600;700&family=Spline+Sans+Mono:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(FIRM_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(PERSON_JSONLD) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA">
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
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <CallBar />
    </QueryClientProvider>
  );
}
