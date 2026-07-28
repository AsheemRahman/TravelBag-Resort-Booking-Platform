import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { DestinationCard } from "@/components/cards/destination-card";
import { PropertyCard } from "@/components/cards/property-card";
import { PackageCard } from "@/components/cards/package-card";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { GalleryMasonry } from "@/components/sections/gallery-masonry";
import { FAQ } from "@/components/sections/faq";
import { CTABand } from "@/components/sections/cta-band";
import { ContourDivider } from "@/components/ui/contour-divider";
import { destinations } from "@/data/destinations";
import { properties } from "@/data/properties";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Wayanad, Ooty & Munnar Tour Packages, Resorts & Pool Villas",
  alternates: { canonical: "/" },
};

const poolVillas = properties.filter((p) => p.category === "Pool Villa");
const popularStays = properties.slice(0, 6);
const allGalleryImages = [
  ...destinations.flatMap((d) => d.gallery),
].slice(0, 9);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Spacer to clear the overlapping inquiry card from Hero */}
      <div className="h-24 bg-white md:h-16" />

      {/* Featured Destinations */}
      <section className="section-pad bg-white pt-4">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Three hill stations</p>
              <h2 className="mt-2 text-3xl md:text-4xl">Featured destinations</h2>
            </div>
            <Link href="/destinations" className="flex items-center gap-1 text-sm font-semibold text-clay hover:underline">
              View all destinations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {destinations.map((d, i) => (
              <DestinationCard key={d.slug} destination={d} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Stays */}
      <section className="section-pad bg-mist">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Where to stay</p>
              <h2 className="mt-2 text-3xl md:text-4xl">Popular stays</h2>
            </div>
            <Link href="/stays" className="flex items-center gap-1 text-sm font-semibold text-clay hover:underline">
              Browse all stays <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularStays.map((p, i) => (
              <PropertyCard key={p.slug} property={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Pool Villas */}
      <section className="section-pad bg-white">
        <div className="container">
          <p className="eyebrow">Signature stays</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Luxury pool villas</h2>
          <p className="mt-3 max-w-xl text-ink/70">
            Private plunge pools, estate views, and total privacy — for travelers who want the hills without compromise.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {poolVillas.map((p, i) => (
              <PropertyCard key={p.slug} property={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      {/* <section className="section-pad bg-mist">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Fully planned trips</p>
              <h2 className="mt-2 text-3xl md:text-4xl">Tour packages</h2>
            </div>
            <Link href="/packages" className="flex items-center gap-1 text-sm font-semibold text-clay hover:underline">
              See all packages <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.slug} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section> */}

      <WhyChooseUs />
      <Testimonials />

      {/* Gallery preview */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">A closer look</p>
              <h2 className="mt-2 text-3xl md:text-4xl">Gallery</h2>
            </div>
            <Link href="/gallery" className="flex items-center gap-1 text-sm font-semibold text-clay hover:underline">
              Full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10">
            <GalleryMasonry images={allGalleryImages} />
          </div>
        </div>
      </section>

      <FAQ />
      <CTABand />
      <ContourDivider tone="mist" className="bg-mist" />
    </>
  );
}
