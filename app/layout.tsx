import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

const SITE_URL = "https://www.travelbag.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TravelBag | Wayanad, Ooty & Munnar Tour Packages, Resorts & Pool Villas",
    template: "%s | TravelBag",
  },
  description:
    "Plan your Wayanad, Ooty, or Munnar trip with TravelBag. Hand-picked pool villas, resorts & homestays, custom tour packages, and local expertise — book on WhatsApp or by inquiry, no online payment required.",
  keywords: [
    "Wayanad Tour Packages",
    "Wayanad Resorts",
    "Wayanad Pool Villas",
    "Wayanad Homestays",
    "Munnar Tour Packages",
    "Ooty Tour Packages",
    "Kerala Holiday Packages",
    "Luxury Resorts in Kerala",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "TravelBag",
    title: "TravelBag | Wayanad, Ooty & Munnar Tour Packages, Resorts & Pool Villas",
    description:
      "Hand-picked stays and custom tour packages across Wayanad, Ooty, and Munnar. Plan your trip with local experts.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TravelBag" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelBag | Wayanad, Ooty & Munnar Tour Packages",
    description: "Hand-picked stays and custom tour packages across Wayanad, Ooty, and Munnar.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "TravelBag",
    url: SITE_URL,
    areaServed: ["Wayanad", "Ooty", "Munnar"],
    telephone: "+91-99999-99999",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kalpetta",
      addressLocality: "Wayanad",
      addressRegion: "Kerala",
      postalCode: "673121",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
