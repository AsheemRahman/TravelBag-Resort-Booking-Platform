import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Sun, ArrowRight } from "lucide-react";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { getPropertiesByDestination } from "@/data/properties";
import { getPackagesByDestination } from "@/data/packages";
import { PropertyCard } from "@/components/cards/property-card";
import { PackageCard } from "@/components/cards/package-card";
import { GalleryMasonry } from "@/components/sections/gallery-masonry";
import { CTABand } from "@/components/sections/cta-band";
import { ContourDivider } from "@/components/ui/contour-divider";
import { InquiryForm } from "@/components/forms/inquiry-form";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};

  return {
    title: `${destination.name} Tour Packages, Resorts & Pool Villas`,
    description: `${destination.overview.slice(0, 150)}...`,
    keywords: destination.keywordFocus,
    alternates: { canonical: `/destinations/${destination.slug}` },
    openGraph: {
      title: `${destination.name} Tour Packages & Stays | TravelBag`,
      description: destination.tagline,
      images: [{ url: destination.heroImage }],
    },
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const stays = getPropertiesByDestination(destination.slug);
  const destinationPackages = getPackagesByDestination(destination.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.overview,
    touristType: "Leisure",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="container pt-28 text-xs text-ink/50">
        <ol className="flex items-center gap-1.5">
          <li><Link href="/" className="hover:text-forest">Home</Link></li>
          <li>/</li>
          <li><Link href="/destinations" className="hover:text-forest">Destinations</Link></li>
          <li>/</li>
          <li className="text-forest">{destination.name}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative mt-6 overflow-hidden">
        <div className="container">
          <div className="relative h-[60vh] min-h-[420px] overflow-hidden rounded-3xl">
            <Image src={destination.heroImage} alt={destination.name} fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
              <span className="rounded-full bg-white/15 px-3 py-1 font-mono text-xs text-white backdrop-blur">
                {destination.state} · {destination.elevationMeters.toLocaleString()} m elevation
              </span>
              <h1 className="mt-4 max-w-2xl text-4xl text-white md:text-5xl">{destination.name}</h1>
              <p className="mt-2 max-w-xl text-white/85">{destination.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Best time */}
      <section className="section-pad bg-white">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="eyebrow">Overview</p>
            <h2 className="mt-2 text-3xl">Why visit {destination.name}</h2>
            <p className="mt-4 leading-relaxed text-ink/75">{destination.overview}</p>

            <p className="eyebrow mt-10">Things to do</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {destination.thingsToDo.map((item) => (
                <li key={item} className="flex items-start gap-2 rounded-xl bg-mist p-3 text-sm text-ink/80">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl bg-forest p-6 text-white h-fit">
            <div className="flex items-center gap-2">
              <Sun className="h-5 w-5 text-emerald-light" />
              <p className="font-display text-lg">Best time to visit</p>
            </div>
            <p className="mt-2 text-sm text-white/80">{destination.bestTimeToVisit}</p>
            <div className="mt-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-emerald-light" />
              <p className="font-display text-lg">Region</p>
            </div>
            <p className="mt-2 text-sm text-white/80">{destination.state}, India</p>
          </aside>
        </div>
      </section>

      {/* Attractions */}
      <section className="section-pad bg-mist">
        <div className="container">
          <p className="eyebrow">Not to miss</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Top attractions</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {destination.attractions.map((a) => (
              <div key={a.name} className="rounded-2xl bg-white p-6 shadow-soft">
                <h3 className="font-display text-xl text-forest">{a.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended stays */}
      {stays.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Where to stay</p>
                <h2 className="mt-2 text-3xl md:text-4xl">Recommended stays in {destination.name}</h2>
              </div>
              <Link href={`/stays?destination=${destination.slug}`} className="flex items-center gap-1 text-sm font-semibold text-clay hover:underline">
                All {destination.name} stays <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stays.map((p, i) => (
                <PropertyCard key={p.slug} property={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular packages */}
      {destinationPackages.length > 0 && (
        <section className="section-pad bg-mist">
          <div className="container">
            <p className="eyebrow">Fully planned</p>
            <h2 className="mt-2 text-3xl md:text-4xl">Popular {destination.name} tour packages</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {destinationPackages.map((pkg, i) => (
                <PackageCard key={pkg.slug} pkg={pkg} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="section-pad bg-white">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-2 text-3xl md:text-4xl">{destination.name} in pictures</h2>
          <div className="mt-10">
            <GalleryMasonry images={destination.gallery} />
          </div>
        </div>
      </section>

      {/* Booking inquiry CTA */}
      <section className="section-pad bg-mist">
        <div className="container max-w-2xl">
          <p className="eyebrow text-center">Plan this trip</p>
          <h2 className="mt-2 text-center text-3xl md:text-4xl">Get a custom {destination.name} itinerary</h2>
          <div className="mt-10 rounded-3xl bg-white p-6 shadow-soft md:p-10">
            <InquiryForm defaultDestination={destination.name} />
          </div>
        </div>
      </section>

      <CTABand destination={destination.name} />
      <ContourDivider tone="mist" className="bg-mist" />
    </>
  );
}
