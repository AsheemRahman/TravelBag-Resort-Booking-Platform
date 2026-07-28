import type { Metadata } from "next";
import { GalleryMasonry } from "@/components/sections/gallery-masonry";
import { destinations } from "@/data/destinations";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Gallery — Resorts, Villas & Nature",
  description: "A visual tour of resorts, pool villas, nature, and tourist attractions across Wayanad, Ooty, and Munnar.",
  alternates: { canonical: "/gallery" },
};

const destinationImages = destinations.flatMap((d) => d.gallery);
const stayImages = properties.flatMap((p) => p.images);

export default function GalleryPage() {
  return (
    <>
      <section className="bg-forest pb-16 pt-32 text-white">
        <div className="container">
          <p className="eyebrow text-emerald-light">A closer look</p>
          <h1 className="mt-2 max-w-2xl text-4xl text-white md:text-5xl">Gallery</h1>
          <p className="mt-3 max-w-xl text-white/75">Resorts, villas, nature, and everything in between.</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container">
          <h2 className="text-2xl">Nature &amp; attractions</h2>
          <div className="mt-6">
            <GalleryMasonry images={destinationImages} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container">
          <h2 className="text-2xl">Resorts &amp; villas</h2>
          <div className="mt-6">
            <GalleryMasonry images={stayImages} />
          </div>
        </div>
      </section>
    </>
  );
}
