"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";
import { Label, Input, Textarea, Select } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { sendInquiryEmail, type InquiryFormData } from "@/lib/emailjs";
import { buildWhatsAppMessage, TRAVELBAG_WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { destinations } from "@/data/destinations";

type Status = "idle" | "loading" | "success" | "error";

export function InquiryForm({
  defaultDestination,
  defaultContext,
  compact = false,
}: {
  defaultDestination?: string;
  defaultContext?: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<InquiryFormData>({
    fullName: "",
    phone: "",
    email: "",
    destination: defaultDestination ?? "",
    travelDate: "",
    guests: "",
    preferredStay: "",
    message: defaultContext ? `Regarding: ${defaultContext}` : "",
  });

  function update<K extends keyof InquiryFormData>(key: K, value: InquiryFormData[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await sendInquiryEmail(form);
      setStatus("success");
    } catch (err) {
      console.error("EmailJS submission failed:", err);
      setStatus("error");
    }
  }

  function whatsappFallbackLink() {
    const message = buildWhatsAppMessage({
      type: "custom",
      message: [
        `Hi TravelBag! I'd like to make an inquiry.`,
        `Name: ${form.fullName || "-"}`,
        `Phone: ${form.phone || "-"}`,
        form.destination && `Destination: ${form.destination}`,
        form.travelDate && `Travel date: ${form.travelDate}`,
        form.guests && `Guests: ${form.guests}`,
        form.preferredStay && `Preferred stay: ${form.preferredStay}`,
        form.message && `Message: ${form.message}`,
      ]
        .filter(Boolean)
        .join("\n"),
    });
    return `https://wa.me/${TRAVELBAG_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-emerald/10 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald" />
        <p className="font-display text-xl text-forest">Thank you, {form.fullName.split(" ")[0] || "there"}!</p>
        <p className="text-sm text-ink/70">
          Your inquiry has been sent. Our team will reach out within a few hours — or message us on WhatsApp for an instant reply.
        </p>
        <a href={whatsappFallbackLink()} target="_blank" rel="noopener noreferrer">
          <Button variant="whatsapp" size="sm">
            <MessageCircle className="h-4 w-4" /> Continue on WhatsApp
          </Button>
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" required placeholder="Your name" value={form.fullName} onChange={(e) => update("fullName", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" required type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" required type="email" placeholder="you@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="destination">Destination</Label>
          <Select id="destination" value={form.destination} onChange={(e) => update("destination", e.target.value)}>
            <option value="">Select destination</option>
            {destinations.map((d) => (
              <option key={d.slug} value={d.name}>{d.name}</option>
            ))}
            <option value="Multiple / Not sure">Multiple / Not sure yet</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="travelDate">Travel date</Label>
          <Input id="travelDate" type="date" value={form.travelDate} onChange={(e) => update("travelDate", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="guests">Number of guests</Label>
          <Input id="guests" type="number" min={1} placeholder="2" value={form.guests} onChange={(e) => update("guests", e.target.value)} />
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <Label htmlFor="preferredStay">Preferred stay</Label>
          <Select id="preferredStay" value={form.preferredStay} onChange={(e) => update("preferredStay", e.target.value)}>
            <option value="">Select stay type</option>
            <option>Pool Villa</option>
            <option>Resort</option>
            <option>Hotel</option>
            <option>Homestay</option>
            <option>Cottage</option>
            <option>Room</option>
            <option>Not sure yet</option>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={4} placeholder="Tell us about your trip..." value={form.message} onChange={(e) => update("message", e.target.value)} />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-xl bg-clay/10 p-3 text-sm text-clay-dark">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            We couldn&apos;t send that automatically. Tap below to send it on WhatsApp instead — it&apos;ll reach us instantly.
          </span>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <Button type="submit" disabled={status === "loading"} className="flex-1 sm:flex-none">
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {status === "loading" ? "Sending..." : "Send Inquiry"}
        </Button>
        <a href={whatsappFallbackLink()} target="_blank" rel="noopener noreferrer">
          <Button type="button" variant="whatsapp">
            <MessageCircle className="h-4 w-4" /> Send via WhatsApp instead
          </Button>
        </a>
      </div>
    </form>
  );
}
