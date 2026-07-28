import type { Metadata } from "next";
import { DestinationCard } from "@/components/cards/destination-card";
import { CTABand } from "@/components/sections/cta-band";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Destinations — Wayanad, Ooty & Munnar",
  description: "Explore Wayanad, Ooty, and Munnar with TravelBag — attractions, best time to visit, and hand-picked stays for each hill station.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <>
      <section className="bg-forest pb-20 pt-32 text-white">
        <div className="container">
          <p className="eyebrow text-emerald-light">Where we go</p>
          <h1 className="mt-2 max-w-2xl text-4xl text-white md:text-5xl">Three hill stations, endlessly worth returning to</h1>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container grid gap-6 md:grid-cols-3">
          {destinations.map((d, i) => (
            <DestinationCard key={d.slug} destination={d} index={i} />
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
