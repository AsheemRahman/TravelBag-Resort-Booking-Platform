"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { destinations } from "@/data/destinations";
import { Button } from "@/components/ui/button";

const stayCategories = ["Pool Villas", "Resorts", "Hotels", "Homestays", "Cottages", "Rooms"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState<"destinations" | "stays" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 z-40 w-full transition-all duration-300 backdrop-blur-xl", scrolled ? "bg-white/95 shadow-soft  border-b border-gray-200/50" : "bg-black/20 border-b border-white/10")}
      onMouseLeave={() => setMegaMenu(null)}
    >
      <div className="container flex h-20 items-center justify-between text-ink">
        <Link href="/" className="flex items-center gap-2">
          <span className={cn("font-display text-2xl font-semibold", scrolled ? "text-forest" : "text-white")}>
            TravelBag
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div onMouseEnter={() => setMegaMenu("destinations")} className="relative">
            <button
              className={cn(
                "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                scrolled ? "text-ink hover:bg-mist" : " text-white hover:bg-white/10"
              )}
            >
              Destinations <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div onMouseEnter={() => setMegaMenu("stays")} className="relative">
            <button
              className={cn(
                "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                scrolled ? "text-ink hover:bg-mist" : "text-white hover:bg-white/10"
              )}
            >
              Stays <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          {/* <Link
            href="/packages"
            onMouseEnter={() => setMegaMenu(null)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              scrolled ? "text-ink hover:bg-mist" : "text-white hover:bg-white/10"
            )}
          >
            Packages
          </Link> */}
          <Link
            href="/gallery"
            onMouseEnter={() => setMegaMenu(null)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              scrolled ? "text-ink hover:bg-mist" : "text-white hover:bg-white/10"
            )}
          >
            Gallery
          </Link>
          <Link
            href="/about"
            onMouseEnter={() => setMegaMenu(null)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              scrolled ? "text-ink hover:bg-mist" : "text-white hover:bg-white/10"
            )}
          >
            About
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+918281366884"
            className={cn(
              "flex items-center gap-2 text-sm font-semibold",
              scrolled ? "text-forest" : "text-white"
            )}
          >
            <Phone className="h-4 w-4" /> +91 82813 66884
          </a>
          <Link href="/contact">
            <Button size="sm">Plan My Trip</Button>
          </Link>
        </div>

        <button
          className={cn("lg:hidden", scrolled ? "text-forest" : "text-white")}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mega menu */}
      {megaMenu && (
        <div className="absolute left-0 top-full w-full border-t border-forest/10 bg-white shadow-lift animate-fade-up">
          <div className="container grid grid-cols-3 gap-6 py-8 md:grid-cols-4">
            {megaMenu === "destinations"
              ? destinations.map((d) => (
                <Link
                  key={d.slug}
                  href={`/destinations/${d.slug}`}
                  onClick={() => setMegaMenu(null)}
                  className="group"
                >
                  <p className="font-display text-lg text-forest group-hover:text-emerald">{d.name}</p>
                  <p className="mt-1 text-xs text-ink/60">{d.tagline}</p>
                </Link>
              ))
              : stayCategories.map((cat) => (
                <Link
                  key={cat}
                  href={`/stays?category=${encodeURIComponent(cat)}`}
                  onClick={() => setMegaMenu(null)}
                  className="font-display text-lg text-forest hover:text-emerald"
                >
                  {cat}
                </Link>
              ))}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-forest/10 bg-white lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            <Link href="/destinations" className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>Destinations</Link>
            <Link href="/stays" className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>Stays</Link>
            <Link href="/packages" className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>Packages</Link>
            <Link href="/gallery" className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>Gallery</Link>
            <Link href="/about" className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>Contact</Link>
            <a href="tel:+918281366884" className="mt-2 flex items-center gap-2 rounded-lg bg-mist px-3 py-2.5 text-sm font-semibold text-forest">
              <Phone className="h-4 w-4" /> +91 82813 66884
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
