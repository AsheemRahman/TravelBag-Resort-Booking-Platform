import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, XCircle, MapPin, Clock, BedDouble, MessageCircle } from "lucide-react";
import { packages, getPackageBySlug } from "@/data/packages";
import { getDestinationBySlug } from "@/data/destinations";
import { GalleryMasonry } from "@/components/sections/gallery-masonry";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};
  return {
    title: `${pkg.name} — ${pkg.durationDays}D/${pkg.durationNights}N Package`,
    description: `${pkg.highlights.join(", ")}. Starting from ₹${pkg.startingPrice.toLocaleString("en-IN")} per person.`,
    alternates: { canonical: `/packages/${pkg.slug}` },
    openGraph: { title: pkg.name, images: [{ url: pkg.heroImage }] },
  };
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const destination = getDestinationBySlug(pkg.destinationSlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.name,
    description: pkg.highlights.join(", "),
    itinerary: pkg.itinerary.map((d) => ({ "@type": "Action", name: d.title, description: d.description })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="Breadcrumb" className="container pt-28 text-xs text-ink/50">
        <ol className="flex items-center gap-1.5">
          <li><Link href="/" className="hover:text-forest">Home</Link></li>
          <li>/</li>
          <li><Link href="/packages" className="hover:text-forest">Packages</Link></li>
          <li>/</li>
          <li className="text-forest">{pkg.name}</li>
        </ol>
      </nav>

      <section className="relative mt-6">
        <div className="container">
          <div className="relative h-[50vh] min-h-[360px] overflow-hidden rounded-3xl">
            <Image src={pkg.heroImage} alt={pkg.name} fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-8 md:p-10">
              <div>
                {destination && (
                  <span className="flex items-center gap-1 text-sm text-white/80">
                    <MapPin className="h-4 w-4" /> {destination.name}
                  </span>
                )}
                <h1 className="mt-2 max-w-xl text-3xl text-white md:text-4xl">{pkg.name}</h1>
              </div>
              <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur">
                <Clock className="h-4 w-4" /> {pkg.durationDays} Days / {pkg.durationNights} Nights
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2">
              {pkg.highlights.map((h) => (
                <span key={h} className="rounded-full bg-mist px-3 py-1.5 text-xs font-semibold text-forest">{h}</span>
              ))}
            </div>

            <h2 className="mt-8 text-2xl">Day-wise itinerary</h2>
            <ol className="mt-4 space-y-4">
              {pkg.itinerary.map((day) => (
                <li key={day.day} className="flex gap-4 rounded-2xl bg-mist p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest font-mono text-sm text-white">
                    {String(day.day).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-lg text-forest">{day.title}</p>
                    <p className="mt-1 text-sm text-ink/70">{day.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 font-display text-lg text-forest">
                  <CheckCircle2 className="h-5 w-5 text-emerald" /> Inclusions
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-ink/75">
                  {pkg.inclusions.map((i) => <li key={i}>• {i}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="flex items-center gap-2 font-display text-lg text-forest">
                  <XCircle className="h-5 w-5 text-clay" /> Exclusions
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-ink/75">
                  {pkg.exclusions.map((i) => <li key={i}>• {i}</li>)}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-2 rounded-2xl border border-forest/10 p-5">
              <BedDouble className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
              <div>
                <p className="font-display text-base text-forest">Accommodation</p>
                <p className="mt-1 text-sm text-ink/70">{pkg.accommodation}</p>
              </div>
            </div>

            <h3 className="mt-10 font-display text-xl text-forest">Places covered</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {pkg.placesCovered.map((p) => (
                <span key={p} className="rounded-full border border-forest/15 px-3 py-1.5 text-xs text-ink/70">{p}</span>
              ))}
            </div>

            <h3 className="mt-8 font-display text-xl text-forest">Activities</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {pkg.activities.map((a) => (
                <span key={a} className="rounded-full bg-sky/10 px-3 py-1.5 text-xs text-sky">{a}</span>
              ))}
            </div>

            <div className="mt-10">
              <GalleryMasonry images={pkg.gallery} />
            </div>
          </div>

          <aside className="h-fit rounded-2xl bg-mist p-6">
            <p className="font-mono text-3xl text-emerald">₹{pkg.startingPrice.toLocaleString("en-IN")}</p>
            <p className="text-xs text-ink/50">starting per person</p>
            <a
              href={getWhatsAppLink({ type: "package", packageName: pkg.name, destination: destination?.name })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block"
            >
              <Button variant="whatsapp" className="w-full">
                <MessageCircle className="h-4 w-4" /> Inquire on WhatsApp
              </Button>
            </a>
            <div className="mt-6 border-t border-forest/10 pt-6">
              <InquiryForm defaultDestination={destination?.name} defaultContext={pkg.name} compact />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
