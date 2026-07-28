"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, CalendarDays, Users, Search } from "lucide-react";
import { destinations } from "@/data/destinations";
import { Button } from "@/components/ui/button";

export function HeroInquiryCard() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (date) params.set("date", date);
    if (guests) params.set("guests", guests);
    router.push(`/packages?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="grid gap-4 rounded-2xl bg-white p-5 shadow-lift sm:grid-cols-[1.4fr_1fr_0.8fr_auto] sm:items-end sm:p-6"
    >
      <div>
        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-forest">
          <MapPin className="h-3.5 w-3.5 text-emerald" /> Destination
        </label>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full rounded-xl border border-forest/15 bg-white px-3 py-3 text-sm text-ink outline-none focus:border-emerald"
        >
          <option value="">Where to?</option>
          {destinations.map((d) => (
            <option key={d.slug} value={d.name}>{d.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-forest">
          <CalendarDays className="h-3.5 w-3.5 text-emerald" /> Travel date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-xl border border-forest/15 bg-white px-3 py-3 text-sm text-ink outline-none focus:border-emerald"
        />
      </div>
      <div>
        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-forest">
          <Users className="h-3.5 w-3.5 text-emerald" /> Guests
        </label>
        <input
          type="number"
          min={1}
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full rounded-xl border border-forest/15 bg-white px-3 py-3 text-sm text-ink outline-none focus:border-emerald"
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Search className="h-4 w-4" /> Explore
      </Button>
    </form>
  );
}
