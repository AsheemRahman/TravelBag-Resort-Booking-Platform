import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, CheckCircle2, Sparkles, MessageCircle } from "lucide-react";
import { properties, getPropertyBySlug } from "@/data/properties";
import { getDestinationBySlug } from "@/data/destinations";
import { GalleryMasonry } from "@/components/sections/gallery-masonry";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};
  return {
    title: `${property.name} — ${property.location}`,
    description: property.description,
    alternates: { canonical: `/stays/${property.slug}` },
    openGraph: { title: property.name, description: property.description, images: [{ url: property.images[0] }] },
  };
}

export default async function StayDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const destination = getDestinationBySlug(property.destinationSlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: property.name,
    description: property.description,
    address: property.location,
    priceRange: `From ₹${property.startingPrice}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="Breadcrumb" className="container pt-28 text-xs text-ink/50">
        <ol className="flex items-center gap-1.5">
          <li><Link href="/" className="hover:text-forest">Home</Link></li>
          <li>/</li>
          <li><Link href="/stays" className="hover:text-forest">Stays</Link></li>
          <li>/</li>
          <li className="text-forest">{property.name}</li>
        </ol>
      </nav>

      <section className="mt-6">
        <div className="container">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-forest">{property.category}</span>
              <h1 className="mt-3 text-3xl md:text-4xl">{property.name}</h1>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/60">
                <MapPin className="h-4 w-4" /> {property.location}
                {destination && (
                  <>
                    {" · "}
                    <Link href={`/destinations/${destination.slug}`} className="text-emerald hover:underline">
                      {destination.name}
                    </Link>
                  </>
                )}
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-2xl text-emerald">₹{property.startingPrice.toLocaleString("en-IN")}</p>
              <p className="text-xs text-ink/50">starting per night</p>
            </div>
          </div>

          <div className="mt-8">
            <GalleryMasonry images={property.images.length > 1 ? property.images : [...property.images, ...property.images]} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl">About this stay</h2>
            <p className="mt-3 leading-relaxed text-ink/75">{property.description}</p>

            <h3 className="mt-8 flex items-center gap-2 font-display text-xl text-forest">
              <Sparkles className="h-5 w-5 text-emerald" /> Highlights
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {property.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-ink/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" /> {h}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-xl text-forest">Amenities</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {property.amenities.map((a) => (
                <li key={a} className="rounded-full bg-mist px-3 py-1.5 text-xs text-forest">{a}</li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-xl text-forest">Nearby attractions</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {property.nearbyAttractions.map((a) => (
                <li key={a} className="rounded-full border border-forest/15 px-3 py-1.5 text-xs text-ink/70">{a}</li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-2xl bg-mist p-6">
            <p className="font-display text-lg text-forest">Ready to book?</p>
            <p className="mt-1 text-sm text-ink/70">Send an inquiry or message us directly for availability.</p>
            <div className="mt-4 flex flex-col gap-2">
              <a href={getWhatsAppLink({ type: "stay", stayName: property.name, location: property.location })} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" className="w-full">
                  <MessageCircle className="h-4 w-4" /> Book via WhatsApp
                </Button>
              </a>
            </div>
            <div className="mt-6 border-t border-forest/10 pt-6">
              <InquiryForm defaultDestination={destination?.name} defaultContext={property.name} compact />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
