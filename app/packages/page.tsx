"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PackageCard } from "@/components/cards/package-card";
import { CTABand } from "@/components/sections/cta-band";
import { packages } from "@/data/packages";
import { destinations } from "@/data/destinations";
import { cn } from "@/lib/utils";

function PackagesContent() {
  const searchParams = useSearchParams();
  const destinationParam = searchParams.get("destination");
  const preselected = destinations.find((d) => d.name === destinationParam)?.slug;
  const [destinationFilter, setDestinationFilter] = useState<string>(preselected || "All");

  const filtered = useMemo(
    () => packages.filter((p) => destinationFilter === "All" || p.destinationSlug === destinationFilter),
    [destinationFilter]
  );

  return (
    <>
      <section className="bg-forest pb-16 pt-32 text-white">
        <div className="container">
          <p className="eyebrow text-emerald-light">Fully planned trips</p>
          <h1 className="mt-2 max-w-2xl text-4xl text-white md:text-5xl">Tour packages across the Western Ghats</h1>
          <p className="mt-3 max-w-xl text-white/75">
            Day-wise itineraries, hand-picked stays, and local guides included — every package can be customized at no extra cost.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {(["All", ...destinations.map((d) => d.slug)] as const).map((slug) => {
              const label = slug === "All" ? "All destinations" : destinations.find((d) => d.slug === slug)?.name;
              return (
                <button
                  key={slug}
                  onClick={() => setDestinationFilter(slug)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                    destinationFilter === slug ? "border-forest bg-forest text-white" : "border-forest/20 text-forest hover:bg-mist"
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-16 text-center text-ink/60">No packages match that destination yet — ask us for a custom itinerary.</p>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {filtered.map((pkg, i) => (
                <PackageCard key={pkg.slug} pkg={pkg} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABand title="Don't see the trip you want?" subtitle="Every package can be reshaped around your dates and pace — just tell us what you have in mind." />
    </>
  );
}

export default function PackagesPage() {
  return (
    <Suspense fallback={null}>
      <PackagesContent />
    </Suspense>
  );
}
