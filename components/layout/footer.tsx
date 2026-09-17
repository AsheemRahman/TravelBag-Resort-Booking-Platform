import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { destinations } from "@/data/destinations";
import { ContourDivider } from "@/components/ui/contour-divider";

export function Footer() {
  return (
    <footer className="relative bg-forest text-white">
      <ContourDivider tone="white" className="absolute -top-16 left-0" />
      <div className="container grid gap-10 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl">TravelBag</p>
          <p className="mt-3 text-sm text-white/70">
            Your local partner for unforgettable trips across Wayanad, Ooty, and Munnar.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-white/60">Destinations</p>
          <ul className="mt-4 space-y-2 text-sm">
            {destinations.map((d) => (
              <li key={d.slug}>
                <Link href={`/destinations/${d.slug}`} className="text-white/80 hover:text-white">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-white/60">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/stays" className="text-white/80 hover:text-white">Stays</Link></li>
            {/* <li><Link href="/packages" className="text-white/80 hover:text-white">Tour Packages</Link></li> */}
            <li><Link href="/gallery" className="text-white/80 hover:text-white">Gallery</Link></li>
            <li><Link href="/about" className="text-white/80 hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-white/60">Get in touch</p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-light" /> +91 80753 89443</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-light" /> +91 86067 68884</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-light" /> travelbag.travellingcouple@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-light" /> Kalpetta, Wayanad, Kerala 673121</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} TravelBag. All rights reserved.
      </div>
    </footer>
  );
}
