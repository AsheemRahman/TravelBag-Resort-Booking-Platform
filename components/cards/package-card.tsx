import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import type { TourPackage } from "@/data/packages";
import { destinations } from "@/data/destinations";
import { Card } from "@/components/ui/card";

export function PackageCard({ pkg, index = 0 }: { pkg: TourPackage; index?: number }) {
  const destination = destinations.find((d) => d.slug === pkg.destinationSlug);

  return (
    <Link href={`/packages/${pkg.slug}`}>
      <Card
        className="group overflow-hidden opacity-0 animate-fade-up"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={pkg.heroImage}
            alt={pkg.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-forest/90 px-3 py-1 text-xs font-semibold text-white">
            <Clock className="h-3.5 w-3.5" /> {pkg.durationDays}D/{pkg.durationNights}N
          </span>
        </div>
        <div className="p-5">
          <p className="flex items-center gap-1 text-xs text-emerald">
            <MapPin className="h-3.5 w-3.5" /> {destination?.name}
          </p>
          <h3 className="mt-1 font-display text-lg text-forest">{pkg.name}</h3>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {pkg.highlights.slice(0, 2).map((h) => (
              <li key={h} className="rounded-full bg-mist px-2.5 py-1 text-[11px] text-forest">{h}</li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <p className="font-mono text-sm text-emerald">
              From ₹{pkg.startingPrice.toLocaleString("en-IN")}
              <span className="text-ink/50"> / person</span>
            </p>
            <span className="text-xs font-semibold text-clay group-hover:underline">View itinerary</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
