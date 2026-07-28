import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import { Card } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="section-pad bg-mist">
      <div className="container">
        <p className="eyebrow">Traveler notes</p>
        <h2 className="mt-2 max-w-xl text-3xl md:text-4xl">Trips people still talk about</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Card
              key={t.name}
              className="p-6 opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote className="h-6 w-6 text-clay" />
              <p className="mt-4 text-ink/80 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="font-display text-base text-forest">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.trip}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-clay text-clay" />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
