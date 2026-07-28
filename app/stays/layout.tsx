import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stays — Pool Villas, Resorts, Hotels & Homestays",
  description: "Browse hand-picked pool villas, resorts, hotels, homestays, cottages, and rooms across Wayanad, Ooty, and Munnar.",
  alternates: { canonical: "/stays" },
};

export default function StaysLayout({ children }: { children: React.ReactNode }) {
  return children;
}
