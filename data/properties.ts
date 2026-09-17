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
    slug: "english-scottish-bungalow-wayanad",
    name: "English Scottish bungalow",
    category: "Resort",
    destinationSlug: "wayanad",
    location: "Chunda , wayanad",
    startingPrice: 5500,
    images: [
      "/images/Properties-English-Scottish-Bungalow.jpeg",
      "/images/Properties-English-Scottish-Bungalow1.jpeg",
      "/images/Properties-English-Scottish-Bungalow2.jpeg",
      "/images/Properties-English-Scottish-Bungalow3.jpeg",
      "/images/Properties-English-Scottish-Bungalow4.jpeg",
      "/images/Properties-English-Scottish-Bungalow5.jpeg",
    ],
    description:
      "A charming English Scottish bungalow in Chunda, Wayanad, offering a peaceful stay surrounded by greenery. Conveniently located around 10 km from Vythiri, Meppadi, and Kalpetta towns.",
    amenities: ["Garden ", "Board games", "Free WiFi", "Parking", "BBQ facilities (extra cost)", "Outdoor seating area"],
    highlights: ["Welcome drink", "Breakfast included", "Evening tea", "Campfire", "Peaceful garden surroundings", "Convenient location near major towns",],
    nearbyAttractions: ["Vythiri Town - 10 km", "Meppadi Town - 10 km", "Kalpetta Town - 10 km",],
  },
  {
    slug: "indivera-retreat-vythiri",
    name: "Indivera retreat vythiri",
    category: "Resort",
    destinationSlug: "wayanad",
    location: "Vythiri, Wayanad",
    startingPrice: 4500,
    images: [
      "/images/Properties-Indivera-Retreat-Vythiri.jpeg",
      "/images/Properties-Indivera-Retreat-Vythiri1.jpeg",
      "/images/Properties-Indivera-Retreat-Vythiri2.jpeg",
      "/images/Properties-Indivera-Retreat-Vythiri3.jpeg",
      "/images/Properties-Indivera-Retreat-Vythiri4.jpeg",
      "/images/Properties-Indivera-Retreat-Vythiri5.jpeg",
    ],
    description: "A peaceful hillside retreat in Vythiri, Wayanad, offering comfortable AC rooms, cottages, and a private two-bedroom pool villa surrounded by lush greenery.",
    amenities: ["Garden", "Board games", "Wi-Fi", "BBQ facilities (extra cost)", "Outdoor seating area", "Parking"],
    highlights: ["AC rooms and cottages", "Private 2-bedroom pool villa", "Welcome drink", "Breakfast included", "Evening tea and snacks", "Campfire", "Peaceful hillside location"],
    nearbyAttractions: ["Vythiri Town - 3 km", "Kalpetta Town - 10 km",],
  },
  {
    slug: "lands-end-wayanad",
    name: "Lands End Wayanad",
    category: "Homestay",
    destinationSlug: "wayanad",
    location: "Rippon, Wayanad",
    startingPrice: 6000,
    images: [
      "/images/Properties-Lands-End-Wayanad.jpeg",
      "/images/Properties-Lands-End-Wayanad1.jpeg",
      "/images/Properties-Lands-End-Wayanad2.jpeg",
      "/images/Properties-Lands-End-Wayanad3.jpeg",
      "/images/Properties-Lands-End-Wayanad4.jpeg",
      "/images/Properties-Lands-End-Wayanad5.jpeg",
    ],
    description: "A peaceful hillside stay at Rippon, Wayanad, offering bungalow rooms, forest-view rooms, a unique wooden cottage, and valley-view rooms surrounded by nature.",
    amenities: ["Garden", "Board games", "Wi-Fi", "BBQ facilities (extra cost)", "Outdoor seating area", "Parking"],
    highlights: ["Forest and valley views", "Arayum Puraym wooden cottage", "Welcome drink", "Breakfast included", "Evening tea", "Campfire"],
    nearbyAttractions: ["Meppadi Town - 6 km", "Kalpetta Town - 16 km", "Vythiri - 16 km",],
  },
  {
    slug: "kurichiyar-bungalow-wayanad",
    name: "Kurichiyar Bungalow",
    category: "Pool Villa",
    destinationSlug: "wayanad",
    location: "Pozhuthana, Wayanad",
    startingPrice: 28000,
    images: [
      "/images/Properties-Kurichiyar-Bungalow-Wayanad.jpeg",
      "/images/Properties-Kurichiyar-Bungalow-Wayanad1.jpeg",
      "/images/Properties-Kurichiyar-Bungalow-Wayanad2.jpeg",
      "/images/Properties-Kurichiyar-Bungalow-Wayanad3.jpeg",
      "/images/Properties-Kurichiyar-Bungalow-Wayanad4.jpeg",
      "/images/Properties-Kurichiyar-Bungalow-Wayanad5.jpeg",
    ],
    description: "A spacious five-bedroom private pool villa in Pozhuthana, Wayanad, offering a peaceful getaway with a private pool, garden, kitchen facilities, and comfortable accommodation for groups and families.",
    amenities: ["Private pool", "Garden", "Board games", "Wi-Fi", "BBQ facilities (extra cost)",],
    highlights: ["5-bedroom private pool villa", "Entire property for private stays", "Kitchen facilities", "Welcome drink", "Breakfast included", "Campfire",],
    nearbyAttractions: ["Kalpetta Town - 12 km", "Vythiri - 12 km",],
  },
  {
    slug: "eleven-degree-pool-villa-wayanad",
    name: "Eleven Degree Pool Villa",
    category: "Pool Villa",
    destinationSlug: "wayanad",
    location: "Karapuzha, Wayanad",
    startingPrice: 23000,
    images: [
      "/images/Properties-Eleven-Degree-Pool-Villa-Wayanad.jpeg",
      "/images/Properties-Eleven-Degree-Pool-Villa-Wayanad1.jpeg",
      "/images/Properties-Eleven-Degree-Pool-Villa-Wayanad2.jpeg",
      "/images/Properties-Eleven-Degree-Pool-Villa-Wayanad3.jpeg",
      "/images/Properties-Eleven-Degree-Pool-Villa-Wayanad4.jpeg",
      "/images/Properties-Eleven-Degree-Pool-Villa-Wayanad5.jpeg",
      "/images/Properties-Eleven-Degree-Pool-Villa-Wayanad6.jpeg",
      "/images/Properties-Eleven-Degree-Pool-Villa-Wayanad7.jpeg",
      "/images/Properties-Eleven-Degree-Pool-Villa-Wayanad8.jpeg",
    ],
    description: "An exclusive one-room private pool villa in Karapuzha, Wayanad, offering a luxurious and intimate stay for couples with breakfast included.",
    amenities: ["Private pool", "Wi-Fi", "Breakfast included",],
    highlights: ["Exclusive one-room villa", "Ideal for couples", "Private pool", "Breakfast included",],
    nearbyAttractions: ["Karapuzha, Wayanad",],
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
