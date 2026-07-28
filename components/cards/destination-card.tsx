import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Destination } from "@/data/destinations";
import { Card } from "@/components/ui/card";

export function DestinationCard({ destination, index = 0 }: { destination: Destination; index?: number }) {
  return (
    <Link href={`/destinations/${destination.slug}`}>
      <Card
        className="group relative h-[420px] overflow-hidden opacity-0 animate-fade-up"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
        <div className="absolute left-0 top-0 p-5">
          <span className="rounded-full bg-white/15 px-3 py-1 font-mono text-xs tracking-wide text-white backdrop-blur">
            {destination.elevationMeters.toLocaleString()} m elevation
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="font-display text-2xl text-white">{destination.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-white/80">{destination.tagline}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white">
            Explore {destination.name} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </Card>
    </Link>
  );
}
