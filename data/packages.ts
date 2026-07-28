export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface TourPackage {
  slug: string;
  name: string;
  destinationSlug: "wayanad" | "ooty" | "munnar";
  durationDays: number;
  durationNights: number;
  startingPrice: number;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  placesCovered: string[];
  activities: string[];
  accommodation: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
}

export const packages: TourPackage[] = [
  {
    slug: "wayanad-wild-trails",
    name: "Wayanad Wild Trails",
    destinationSlug: "wayanad",
    durationDays: 4,
    durationNights: 3,
    startingPrice: 16999,
    heroImage:
      "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580889240911-e024ee7e6fcc?q=80&w=1600&auto=format&fit=crop",
    ],
    highlights: ["Chembra Peak trek", "Wildlife safari", "Spice plantation walk", "Edakkal Caves"],
    placesCovered: ["Vythiri", "Chembra", "Muthanga", "Edakkal"],
    activities: ["Trekking", "Jeep safari", "Cave exploration", "Kayaking"],
    accommodation: "3 nights at a plantation resort or pool villa",
    inclusions: ["Accommodation", "Daily breakfast", "All transfers", "Safari & trek permits", "Local guide"],
    exclusions: ["Airfare/train fare", "Lunch & dinner (unless specified)", "Personal expenses", "Entry tickets not listed"],
    itinerary: [
      { day: 1, title: "Arrival & Banasura Dam", description: "Check in, evening visit to Banasura Sagar Dam for sunset boating." },
      { day: 2, title: "Chembra Peak Trek", description: "Early trek to Chembra Peak and Hridaya Lake, afternoon at leisure by the pool." },
      { day: 3, title: "Wildlife & Caves", description: "Morning jeep safari at Muthanga Wildlife Sanctuary, afternoon at Edakkal Caves." },
      { day: 4, title: "Plantation Walk & Departure", description: "Guided spice plantation walk, check out and departure transfer." },
    ],
  },
  {
    slug: "ooty-toy-train-getaway",
    name: "Ooty Toy Train Getaway",
    destinationSlug: "ooty",
    durationDays: 3,
    durationNights: 2,
    startingPrice: 12499,
    heroImage:
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544969813-1195c2c99f4a?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602208101804-3ab8d3fb6bd6?q=80&w=1600&auto=format&fit=crop",
    ],
    highlights: ["Nilgiri toy train ride", "Tea factory visit", "Doddabetta sunset", "Botanical Gardens"],
    placesCovered: ["Ooty town", "Coonoor", "Doddabetta", "Pykara"],
    activities: ["Toy train ride", "Tea tasting", "Boating", "Nature walk"],
    accommodation: "2 nights at a heritage hotel or tea-estate cottage",
    inclusions: ["Accommodation", "Daily breakfast", "Toy train tickets", "All transfers", "Local guide"],
    exclusions: ["Airfare/train fare to Coimbatore", "Lunch & dinner", "Personal expenses"],
    itinerary: [
      { day: 1, title: "Arrival & Botanical Gardens", description: "Check in, visit Ooty Botanical Gardens and Ooty Lake at sunset." },
      { day: 2, title: "Toy Train & Tea Estate", description: "Morning Nilgiri Mountain Railway ride to Coonoor, tea factory tour and tasting." },
      { day: 3, title: "Doddabetta & Departure", description: "Sunrise at Doddabetta Peak, Pykara Lake stop, departure transfer." },
    ],
  },
  {
    slug: "munnar-tea-trails",
    name: "Munnar Tea Trails",
    destinationSlug: "munnar",
    durationDays: 5,
    durationNights: 4,
    startingPrice: 21999,
    heroImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622540031975-2eea9cc4e2d0?q=80&w=1600&auto=format&fit=crop",
    ],
    highlights: ["Eravikulam National Park", "Kolukkumalai tea estate", "Top Station panorama", "Mattupetty Dam"],
    placesCovered: ["Munnar town", "Eravikulam", "Top Station", "Chinnakanal"],
    activities: ["Wildlife spotting", "Plantation trek", "Boating", "Waterfall visit"],
    accommodation: "4 nights at a tea-country resort or pool villa",
    inclusions: ["Accommodation", "Daily breakfast", "National park entry", "All transfers", "Local guide"],
    exclusions: ["Airfare/train fare to Kochi", "Lunch & dinner", "Personal expenses", "Optional Kolukkumalai jeep ride"],
    itinerary: [
      { day: 1, title: "Arrival & Tea Museum", description: "Check in, evening visit to the Tea Museum and Munnar town." },
      { day: 2, title: "Eravikulam National Park", description: "Morning safari through Eravikulam to spot the Nilgiri tahr." },
      { day: 3, title: "Top Station & Waterfalls", description: "Drive to Top Station for panoramic views, stop at Chinnakanal Waterfalls." },
      { day: 4, title: "Kolukkumalai Sunrise", description: "Early start for sunrise over the Kolukkumalai tea estate, afternoon at Mattupetty Dam." },
      { day: 5, title: "Leisure & Departure", description: "Morning at leisure by the resort, check out and departure transfer." },
    ],
  },
];

export function getPackageBySlug(slug: string) {
  return packages.find((p) => p.slug === slug);
}

export function getPackagesByDestination(destinationSlug: string) {
  return packages.filter((p) => p.destinationSlug === destinationSlug);
}
