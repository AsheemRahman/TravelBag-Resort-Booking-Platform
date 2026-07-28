import { Compass, ShieldCheck, Wallet, MapPin } from "lucide-react";
import { whyChooseUs } from "@/data/content";

const icons = [MapPin, ShieldCheck, Wallet, Compass];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-forest text-white">
      <div className="container">
        <p className="eyebrow text-emerald-light">Why TravelBag</p>
        <h2 className="mt-2 max-w-xl text-3xl text-white md:text-4xl">
          Planned by people who&apos;ve actually walked the trail
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={item.title} className="opacity-0 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Icon className="h-6 w-6 text-emerald-light" />
                </div>
                <h3 className="mt-4 font-display text-lg text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
