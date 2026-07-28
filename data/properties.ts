export type StayCategory = "Pool Villa" | "Resort" | "Hotel" | "Homestay" | "Cottage" | "Room";

export interface Property {
  slug: string;
  name: string;
  category: StayCategory;
  destinationSlug: "wayanad" | "ooty" | "munnar";
  location: string;
  startingPrice: number;
  images: string[];
  description: string;
  amenities: string[];
  highlights: string[];
  nearbyAttractions: string[];
}

export const properties: Property[] = [
  {
    slug: "misty-ridge-pool-villa-wayanad",
    name: "Misty Ridge Pool Villa",
    category: "Pool Villa",
    destinationSlug: "wayanad",
    location: "Vythiri, Wayanad",
    startingPrice: 12500,
    images: [
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A private glass-walled villa with its own infinity-edge pool overlooking a coffee estate, ten minutes from Chembra Peak.",
    amenities: ["Private pool", "Estate view", "Breakfast included", "Free WiFi", "Air conditioning", "Parking"],
    highlights: ["Private plunge pool", "Floor-to-ceiling estate views", "Dedicated butler service"],
    nearbyAttractions: ["Chembra Peak", "Soochipara Falls", "Edakkal Caves"],
  },
  {
    slug: "banasura-hill-resort",
    name: "Banasura Hill Resort",
    category: "Resort",
    destinationSlug: "wayanad",
    location: "Padinjarathara, Wayanad",
    startingPrice: 6200,
    images: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1600&auto=format&fit=crop",
    ],
    description: "A tiered hillside resort facing Banasura Sagar Dam, with cottages spread across a landscaped slope.",
    amenities: ["Multi-cuisine restaurant", "Bonfire deck", "Free WiFi", "Trekking desk", "Parking"],
    highlights: ["Dam-facing rooms", "In-house nature guide", "Bonfire every evening"],
    nearbyAttractions: ["Banasura Sagar Dam", "Kuruva Island", "Pookode Lake"],
  },
  {
    slug: "greenwoods-homestay-wayanad",
    name: "Greenwoods Estate Homestay",
    category: "Homestay",
    destinationSlug: "wayanad",
    location: "Meppadi, Wayanad",
    startingPrice: 3200,
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
    ],
    description: "A family-run homestay inside a working cardamom and coffee estate, with home-cooked Malabar meals.",
    amenities: ["Home-cooked meals", "Estate walks", "Free WiFi", "Parking"],
    highlights: ["Home-cooked Malabar cuisine", "Guided plantation walk", "Warm family hospitality"],
    nearbyAttractions: ["Chembra Peak", "Meenmutty Falls"],
  },
  {
    slug: "nilgiri-heritage-hotel",
    name: "Nilgiri Heritage Hotel",
    category: "Hotel",
    destinationSlug: "ooty",
    location: "Charing Cross, Ooty",
    startingPrice: 5400,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1600&auto=format&fit=crop",
    ],
    description: "A Raj-era colonial building in the centre of town, restored with period furniture and a fireplace lounge.",
    amenities: ["Fireplace lounge", "In-house restaurant", "Free WiFi", "Room service", "Parking"],
    highlights: ["Colonial architecture", "Walking distance to Ooty Lake", "Fireplace in every room"],
    nearbyAttractions: ["Ooty Lake", "Botanical Gardens", "Ooty Market"],
  },
  {
    slug: "tea-valley-cottages-ooty",
    name: "Tea Valley Cottages",
    category: "Cottage",
    destinationSlug: "ooty",
    location: "Coonoor Road, Ooty",
    startingPrice: 4100,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
    ],
    description: "Stone cottages set directly inside a tea estate, each with a private balcony over the rows of tea.",
    amenities: ["Estate view balcony", "Bonfire on request", "Free WiFi", "Parking"],
    highlights: ["Sleeps inside a working tea estate", "Sunrise-facing balconies", "Quiet, no-traffic setting"],
    nearbyAttractions: ["Doddabetta Peak", "Sim's Park", "Tea Factory"],
  },
  {
    slug: "cloudline-pool-villa-munnar",
    name: "Cloudline Pool Villa",
    category: "Pool Villa",
    destinationSlug: "munnar",
    location: "Pallivasal, Munnar",
    startingPrice: 14000,
    images: [
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1600&auto=format&fit=crop",
    ],
    description: "A hillside villa above a tea valley with a heated pool that catches the sunset over the ridgeline.",
    amenities: ["Heated private pool", "Valley view", "Breakfast included", "Free WiFi", "Air conditioning"],
    highlights: ["Heated infinity pool", "Panoramic valley views", "In-villa dining"],
    nearbyAttractions: ["Eravikulam National Park", "Mattupetty Dam", "Top Station"],
  },
  {
    slug: "tea-country-resort-munnar",
    name: "Tea Country Resort",
    category: "Resort",
    destinationSlug: "munnar",
    location: "Chinnakanal, Munnar",
    startingPrice: 7800,
    images: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1600&auto=format&fit=crop",
    ],
    description: "A large plantation-style resort with terraced gardens, a spa, and views toward Anamudi peak.",
    amenities: ["Spa", "Multi-cuisine restaurant", "Free WiFi", "Bonfire deck", "Parking", "Trekking desk"],
    highlights: ["Ayurvedic spa on-site", "Anamudi peak views", "Kids' play area"],
    nearbyAttractions: ["Anamudi Peak", "Chinnakanal Waterfalls", "Top Station"],
  },
  {
    slug: "kannan-devan-rooms-munnar",
    name: "Kannan Devan Rooms",
    category: "Room",
    destinationSlug: "munnar",
    location: "Munnar Town",
    startingPrice: 2400,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop",
    ],
    description: "Simple, well-kept rooms in the centre of Munnar town, an easy base for exploring by day.",
    amenities: ["Free WiFi", "Room service", "Parking"],
    highlights: ["Central location", "Budget-friendly", "Walk to local market"],
    nearbyAttractions: ["Tea Museum", "Munnar Town Market"],
  },
];

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function getPropertiesByCategory(category: StayCategory) {
  return properties.filter((p) => p.category === category);
}

export function getPropertiesByDestination(destinationSlug: string) {
  return properties.filter((p) => p.destinationSlug === destinationSlug);
}
