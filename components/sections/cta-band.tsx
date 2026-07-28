import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function CTABand({
  title = "Ready to plan your hill-country escape?",
  subtitle = "Tell us your dates and we'll shape a trip around them — no online payment needed to get started.",
  destination,
}: {
  title?: string;
  subtitle?: string;
  destination?: string;
}) {
  return (
    <section className="section-pad bg-gradient-to-br from-emerald to-forest">
      <div className="container flex flex-col items-center gap-6 text-center text-white">
        <h2 className="max-w-2xl text-3xl text-white md:text-4xl">{title}</h2>
        <p className="max-w-xl text-white/80">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contact">
            <Button variant="primary" size="lg">Send an Inquiry</Button>
          </Link>
          <a
            href={getWhatsAppLink(destination ? { type: "destination", destination } : { type: "general" })}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="lg">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
