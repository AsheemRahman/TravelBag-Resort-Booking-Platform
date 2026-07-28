# TravelBag — Wayanad, Ooty & Munnar Travel Website

A premium, fully static, frontend-only travel brochure & lead-generation site for **TravelBag**, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer-motion-ready animation classes, and Radix-based UI primitives.

No backend, no database, no auth, no payments — every "book now" ends in a WhatsApp chat or an email inquiry.

---

## 1. Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # run the production build locally
```

The project deploys to **Vercel** with zero configuration — just connect the repo.

---

## 2. Wiring up the inquiry forms

Forms use **EmailJS** first, with an automatic **WhatsApp fallback** if EmailJS isn't configured or fails, so no inquiry is ever lost.

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add an Email Service (e.g. Gmail) and a Template with these variables:
   `full_name, phone, email, destination, travel_date, guests, preferred_stay, message`
3. Copy `.env.example` to `.env.local` and fill in your Service ID, Template ID, and Public Key.
4. Update the real WhatsApp number in `lib/whatsapp.ts` (`TRAVELBAG_WHATSAPP_NUMBER`).

Until you do this, forms will gracefully fall back to opening a pre-filled WhatsApp chat — the site is fully usable out of the box.

---

## 3. Where the content lives

Everything is data-driven so you can update the site without touching components:

| File | Controls |
|---|---|
| `data/destinations.ts` | Wayanad / Ooty / Munnar overview, attractions, best time to visit, gallery |
| `data/properties.ts` | All stays — pool villas, resorts, hotels, homestays, cottages, rooms |
| `data/packages.ts` | Tour packages with full day-wise itineraries |
| `data/content.ts` | Testimonials, FAQs, "Why Choose Us" copy |

**To add a new stay or package:** add one object to the relevant array — a new card and a new `/stays/[slug]` or `/packages/[slug]` detail page are generated automatically (statically, at build time) because the routes are dynamic (`generateStaticParams`).

**To add a 4th destination:** add an entry to `data/destinations.ts`. A new `/destinations/[slug]` page, nav entry, and footer link are generated automatically.

---

## 4. Project structure

```
app/
  layout.tsx              Root layout — fonts, global metadata, JSON-LD, Navbar/Footer/WhatsApp
  page.tsx                Home page
  destinations/            listing + [slug] dynamic detail page
  stays/                   listing (filterable) + [slug] dynamic detail page
  packages/                listing (filterable) + [slug] dynamic detail page (itinerary)
  gallery/, about/, contact/
  sitemap.ts, robots.ts
components/
  layout/                 Navbar, Footer, WhatsAppFloat
  home/                   Hero, HeroInquiryCard
  cards/                  DestinationCard, PropertyCard, PackageCard
  sections/               Testimonials, FAQ, WhyChooseUs, GalleryMasonry, CTABand
  forms/                  InquiryForm (EmailJS + WhatsApp fallback)
  ui/                     Button, Card, form fields, Accordion, Lightbox, ContourDivider
data/                     All static content (see above)
lib/                      whatsapp.ts, emailjs.ts, utils.ts
```

---

## 5. Design system

- **Palette:** deep forest (`#123B2E`), emerald (`#1F7A5C`), sky blue (`#4F9DC4`), warm clay-orange CTA (`#E2793D`), a cool sage "mist" background (`#EAF0EC`) instead of plain gray.
- **Type:** Fraunces (display serif) for headings, Plus Jakarta Sans for body copy, IBM Plex Mono for small data labels (elevation, price, duration) — a nod to route markers and trail signage.
- **Signature element:** a topographic **contour-line divider** (`components/ui/contour-divider.tsx`) used between sections instead of a generic wave — it echoes the elevation maps of the three hill stations the site is built around.

---

## 6. Still to do before launch

- [ ] Replace placeholder Unsplash images with TravelBag's own licensed photography.
- [ ] Add a real `public/og-image.jpg` (1200×630) for social sharing.
- [ ] Set the real phone number / WhatsApp number everywhere (`lib/whatsapp.ts`, Navbar, Footer, Contact page).
- [ ] Fill in real EmailJS credentials (see section 2).
- [ ] Swap the Contact page's Google Maps embed query for TravelBag's real office address/coordinates.
- [ ] Run `npm run build` once and fix any type errors surfaced by your exact dependency versions (this project was authored without network access to run a live build — see note below).

> **Note:** this project was generated in an offline environment, so `npm install` / `npm run build` could not be executed to verify compilation. The code has been manually checked for import-path correctness and balanced JSX, but please run a build locally before deploying and report anything that needs a fix.
