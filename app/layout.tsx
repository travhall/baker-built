import "./globals.css";
import type { Metadata } from "next";
import { Zilla_Slab, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

const zillaSlab = Zilla_Slab({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
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
});

export const metadata: Metadata = {
  title: "Baker Built Construction — Minneapolis General Contractor",
  description:
    "Baker Built Construction is Nate Baker — a Minneapolis general contractor handling remodels, roofing, windows, decks, and new builds. Free estimates. Se habla español.",
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
    >
      <body>
        <RevealObserver />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
