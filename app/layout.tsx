import "./globals.css";
import type { Metadata } from "next";
import { Zilla_Slab, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import RouteFocus from "@/components/RouteFocus";

const zillaSlab = Zilla_Slab({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: false,
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

const description =
  "Baker Built Construction is Nate Baker — a Minneapolis general contractor handling remodels, roofing, windows, decks, and new builds. Free estimates. Se habla español.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bakerbuiltconstruction.com"),
  title: {
    default: "Baker Built Construction — Minneapolis General Contractor",
    template: "%s — Baker Built Construction",
  },
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Baker Built Construction",
    title: "Baker Built Construction — Minneapolis General Contractor",
    description,
    images: [{ url: "/hero-cabin.jpg", width: 1800, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baker Built Construction — Minneapolis General Contractor",
    description,
    images: ["/hero-cabin.jpg"],
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Baker Built Construction",
  image: "https://bakerbuiltconstruction.com/hero-cabin.jpg",
  url: "https://bakerbuiltconstruction.com",
  telephone: "+16129643505",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2636 Thomas Ave N",
    addressLocality: "Minneapolis",
    addressRegion: "MN",
    postalCode: "55411",
    addressCountry: "US",
  },
  areaServed: "Twin Cities Metro",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  foundingDate: "2017",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${zillaSlab.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* One-time shell entrance: runs before first paint, once per session,
            never under reduced motion. Content stays visible without it. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&!sessionStorage.getItem('bb-intro')){document.documentElement.setAttribute('data-intro','play');sessionStorage.setItem('bb-intro','1')}}catch(e){}",
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <a className="skip-link" href="#main">Skip to main content</a>
        <RevealObserver />
        <RouteFocus />
        <Navigation />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
