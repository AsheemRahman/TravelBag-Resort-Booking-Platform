import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Packages — Wayanad, Ooty & Munnar",
  description: "Day-wise tour packages for Wayanad, Ooty, and Munnar, with hand-picked stays, local guides, and fully customizable itineraries.",
  alternates: { canonical: "/packages" },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
