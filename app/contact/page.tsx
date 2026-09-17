import type { Metadata } from "next";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { InquiryForm } from "@/components/forms/inquiry-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with TravelBag — call, WhatsApp, email, or send an inquiry to start planning your Wayanad, Ooty, or Munnar trip.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-forest pb-16 pt-32 text-white">
        <div className="container">
          <p className="eyebrow text-emerald-light">Let&apos;s plan your trip</p>
          <h1 className="mt-2 max-w-2xl text-4xl text-white md:text-5xl">Contact TravelBag</h1>
          <p className="mt-3 max-w-xl text-white/75">
            Call, WhatsApp, or send an inquiry — we typically reply within a few hours.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-3xl bg-mist p-6 shadow-soft md:p-10">
            <h2 className="text-2xl">Send an inquiry</h2>
            <p className="mt-1 text-sm text-ink/60">Fill this out and we&apos;ll get back to you with a custom plan.</p>
            <div className="mt-6">
              <InquiryForm />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg text-forest">Reach us directly</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mist"><Phone className="h-4 w-4 text-emerald" /></span>
                  <a href="tel:+918075389443" className="text-ink/80 hover:text-forest">+91 80753 89443</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mist"><Phone className="h-4 w-4 text-emerald" /></span>
                  <a href="tel:+918606768884" className="text-ink/80 hover:text-forest">+91 86067 68884</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mist"><Mail className="h-4 w-4 text-emerald" /></span>
                  <a href="mailto:hello@travelbag.co.in" className="text-ink/80 hover:text-forest">hello@travelbag.co.in</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist"><MapPin className="h-4 w-4 text-emerald" /></span>
                  <span className="text-ink/80">TravelBag House, Main Road, Kalpetta, Wayanad, Kerala 673121</span>
                </li>
              </ul>
              <div className="mt-5 flex gap-3">
                <a href="#" aria-label="Instagram" className="rounded-full bg-mist p-2 text-forest hover:bg-forest hover:text-white"><Instagram className="h-4 w-4" /></a>
                <a href="#" aria-label="Facebook" className="rounded-full bg-mist p-2 text-forest hover:bg-forest hover:text-white"><Facebook className="h-4 w-4" /></a>
                <a href="#" aria-label="YouTube" className="rounded-full bg-mist p-2 text-forest hover:bg-forest hover:text-white"><Youtube className="h-4 w-4" /></a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-soft">
              <iframe
                title="TravelBag office location"
                src="https://www.google.com/maps?q=Kalpetta,Wayanad,Kerala&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
