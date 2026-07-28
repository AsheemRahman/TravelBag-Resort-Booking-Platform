"use client";

import { useState } from "react";
import { MessageCircle, X, CalendarCheck, Sparkles, MapPinned } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const quickActions = [
  { label: "Book Now", icon: CalendarCheck, intent: { type: "general" as const } },
  { label: "Get a Quote", icon: Sparkles, intent: { type: "quote" as const } },
  { label: "Plan My Trip", icon: MapPinned, intent: { type: "general" as const } },
];

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="mb-1 w-64 overflow-hidden rounded-2xl bg-white shadow-lift animate-fade-up">
          <div className="bg-forest px-4 py-3 text-white">
            <p className="font-display text-base">Talk to TravelBag</p>
            <p className="text-xs text-white/70">Usually replies within minutes</p>
          </div>
          <div className="flex flex-col p-2">
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={getWhatsAppLink(action.intent)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-mist"
              >
                <action.icon className="h-4 w-4 text-emerald" />
                {action.label}
              </a>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp menu" : "Open WhatsApp menu"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
}
