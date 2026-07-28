import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Property } from "@/data/properties";
import { Card } from "@/components/ui/card";

export function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  return (
    <Link href={`/stays/${property.slug}`}>
      <Card
        className="group overflow-hidden opacity-0 animate-fade-up"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-forest shadow-soft">
            {property.category}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg text-forest">{property.name}</h3>
          <p className="mt-1 flex items-center gap-1 text-xs text-ink/60">
            <MapPin className="h-3.5 w-3.5" /> {property.location}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <p className="font-mono text-sm text-emerald">
              From ₹{property.startingPrice.toLocaleString("en-IN")}
              <span className="text-ink/50">/night</span>
            </p>
            <span className="text-xs font-semibold text-clay group-hover:underline">View details</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
