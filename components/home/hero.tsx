import Image from "next/image";
import { ContourDivider } from "@/components/ui/contour-divider";
import { HeroInquiryCard } from "@/components/home/hero-inquiry-card";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-forest-dark">
      <Image src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2400&auto=format&fit=crop" alt="Misty tea-covered hills of the Western Ghats"
        fill priority className="object-cover" sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

      <div className="container relative z-10 flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between ">
        <div className="max-w-3xl">
          <span className="eyebrow text-white/70">Wayanad · Ooty · Munnar</span>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl">
            Three hill stations. One trip worth remembering.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            Hand-picked pool villas, resorts, and homestays across the Western Ghats — planned by people who know every trail, tea garden, and back road.
          </p>
        </div>
        <div className="max-w-2xl mt-10 lg:mt-0 lg:ml-10">
          <HeroInquiryCard />
        </div>
      </div>


      <ContourDivider tone="white" className="absolute bottom-0 left-0 z-0 opacity-60" />
    </section >
  );
}
