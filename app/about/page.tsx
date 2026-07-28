import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Heart, ShieldCheck } from "lucide-react";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CTABand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description: "TravelBag is a local tour operator specializing in Wayanad, Ooty, and Munnar — get to know our story and approach.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest pb-16 pt-32 text-white">
        <div className="container">
          <p className="eyebrow text-emerald-light">About TravelBag</p>
          <h1 className="mt-2 max-w-2xl text-4xl text-white md:text-5xl">Built by people who grew up in these hills</h1>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-2 text-3xl">From a family homestay to a hill-country tour operator</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              TravelBag started as a single family-run homestay in Wayanad. Over the years, as more travelers
              asked us to help plan their whole trip — not just the stay — we built relationships with trusted
              resorts, guides, and drivers across Wayanad, Ooty, and Munnar. Today, that network is TravelBag:
              a small team that plans hill-country trips the way we&apos;d plan one for family.
            </p>
            <p className="mt-4 leading-relaxed text-ink/75">
              We don&apos;t list a property we haven&apos;t visited, and we don&apos;t build an itinerary we
              wouldn&apos;t take ourselves. That&apos;s the whole philosophy.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-3xl lg:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1600&auto=format&fit=crop"
              alt="TravelBag team in the hills"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container grid gap-8 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <Compass className="h-7 w-7 text-emerald" />
            <h3 className="mt-4 font-display text-lg text-forest">Mission</h3>
            <p className="mt-2 text-sm text-ink/70">Make it effortless to experience Wayanad, Ooty, and Munnar the way locals do.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <Heart className="h-7 w-7 text-emerald" />
            <h3 className="mt-4 font-display text-lg text-forest">Vision</h3>
            <p className="mt-2 text-sm text-ink/70">To be the most trusted local travel partner in the Western Ghats.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <ShieldCheck className="h-7 w-7 text-emerald" />
            <h3 className="mt-4 font-display text-lg text-forest">Customer-first</h3>
            <p className="mt-2 text-sm text-ink/70">No online payment required to start planning — talk to us first, decide after.</p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CTABand />
    </>
  );
}
