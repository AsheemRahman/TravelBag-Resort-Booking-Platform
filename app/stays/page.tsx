"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PropertyCard } from "@/components/cards/property-card";
import { CTABand } from "@/components/sections/cta-band";
import { properties, type StayCategory } from "@/data/properties";
import { destinations } from "@/data/destinations";
import { cn } from "@/lib/utils";

const categories: StayCategory[] = ["Pool Villa", "Resort", "Hotel", "Homestay", "Cottage", "Room"];

function StaysContent() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<StayCategory | "All">(
    (searchParams.get("category") as StayCategory) || "All"
  );
  const [destinationFilter, setDestinationFilter] = useState<string>(searchParams.get("destination") || "All");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const categoryMatch = category === "All" || p.category === category;
      const destinationMatch = destinationFilter === "All" || p.destinationSlug === destinationFilter;
      return categoryMatch && destinationMatch;
    });
  }, [category, destinationFilter]);

  return (
    <>
      <section className="bg-forest pb-16 pt-32 text-white">
        <div className="container">
          <p className="eyebrow text-emerald-light">Where to stay</p>
          <h1 className="mt-2 max-w-2xl text-4xl text-white md:text-5xl">Pool villas, resorts & homestays</h1>
          <p className="mt-3 max-w-xl text-white/75">
            Every property here has been visited and vetted by our team across Wayanad, Ooty, and Munnar.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {(["All", ...categories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  category === c ? "border-forest bg-forest text-white" : "border-forest/20 text-forest hover:bg-mist"
                )}
              >
                {c === "All" ? "All stays" : `${c}s`}
              </button>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {(["All", ...destinations.map((d) => d.slug)] as const).map((slug) => {
              const label = slug === "All" ? "All destinations" : destinations.find((d) => d.slug === slug)?.name;
              return (
                <button
                  key={slug}
                  onClick={() => setDestinationFilter(slug)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors",
                    destinationFilter === slug ? "bg-emerald text-white" : "bg-mist text-forest hover:bg-mist-dark"
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-16 text-center text-ink/60">No stays match those filters yet — try a different combination.</p>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <PropertyCard key={p.slug} property={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABand title="Can't decide? We'll help you pick." subtitle="Tell us your budget and travel style — we'll shortlist the right stay for you." />
    </>
  );
}

export default function StaysPage() {
  return (
    <Suspense fallback={null}>
      <StaysContent />
    </Suspense>
  );
}
