export interface Destination {
  slug: string;
  name: string;
  state: string;
  tagline: string;
  elevationMeters: number;
  heroImage: string;
  gallery: string[];
  overview: string;
  bestTimeToVisit: string;
  attractions: { name: string; description: string }[];
  thingsToDo: string[];
  keywordFocus: string[];
}

export const destinations: Destination[] = [
  {
    slug: "wayanad",
    name: "Wayanad",
    state: "Kerala",
    tagline: "Misty forests, spice-scented hills, and the wild heart of the Western Ghats",
    elevationMeters: 2100,
    heroImage:
      "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580889240911-e024ee7e6fcc?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
    ],
    overview:
      "Wayanad is Kerala's green heartland — a plateau of coffee and spice plantations folded into the Western Ghats, where wildlife sanctuaries meet ancient caves and waterfalls tumble through evergreen forest. It's the pick for travelers who want their hill station wild rather than manicured.",
    bestTimeToVisit: "October to May, with the post-monsoon months (Oct–Dec) at their greenest.",
    attractions: [
      { name: "Chembra Peak", description: "Home to the heart-shaped Hridaya Lake, a moderate trek with sweeping ridge views." },
      { name: "Edakkal Caves", description: "Prehistoric rock engravings inside a natural cleft, among the oldest markers of human settlement in India." },
      { name: "Banasura Sagar Dam", description: "India's largest earthen dam, ringed by hills that can be explored by boat." },
      { name: "Soochipara Falls", description: "A three-tiered waterfall reached through a short forest trail, popular for a cliffside dip." },
    ],
    thingsToDo: [
      "Trek to Chembra Peak at sunrise",
      "Spot elephants and bison on a jeep safari through Muthanga Wildlife Sanctuary",
      "Walk a working spice plantation and learn how cardamom and pepper are grown",
      "Kayak across Pookode Lake at dusk",
      "Explore the Edakkal Caves' Stone Age carvings",
    ],
    keywordFocus: ["Wayanad Tour Packages", "Wayanad Resorts", "Wayanad Pool Villas", "Wayanad Homestays"],
  },
  {
    slug: "ooty",
    name: "Ooty",
    state: "Tamil Nadu",
    tagline: "The Queen of Hill Stations — colonial charm above a sea of tea gardens",
    elevationMeters: 2240,
    heroImage:
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544969813-1195c2c99f4a?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602208101804-3ab8d3fb6bd6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622540031975-2eea9cc4e2d0?q=80&w=1600&auto=format&fit=crop",
    ],
    overview:
      "Perched in the Nilgiris, Ooty has been drawing hill-country travelers since the days of the British Raj. Rolling tea estates, a toy train that hairpins up the mountainside, and a climate that stays cool year-round make it one of South India's most enduring retreats.",
    bestTimeToVisit: "April to June for pleasant weather; September to November for clear skies and fewer crowds.",
    attractions: [
      { name: "Nilgiri Mountain Railway", description: "A UNESCO World Heritage toy train that climbs from Mettupalayam to Ooty through 16 tunnels." },
      { name: "Doddabetta Peak", description: "The highest point in the Nilgiris, with a telescope house looking over the entire range." },
      { name: "Ooty Botanical Gardens", description: "Terraced Raj-era gardens with a fossil tree trunk over 20 million years old." },
      { name: "Pykara Lake & Falls", description: "A boating lake framed by eucalyptus forest, with falls just downstream." },
    ],
    thingsToDo: [
      "Ride the Nilgiri toy train up the mountain",
      "Walk through a working tea factory and sample fresh brews",
      "Cycle along the shola forest trails near Avalanche Lake",
      "Watch sunset from Doddabetta Peak",
      "Browse the Ooty Sunday market for homemade chocolate and eucalyptus oil",
    ],
    keywordFocus: ["Ooty Tour Packages", "Ooty Resorts", "Nilgiris Homestays"],
  },
  {
    slug: "munnar",
    name: "Munnar",
    state: "Kerala",
    tagline: "Endless tea-carpeted hills where the clouds settle in for the afternoon",
    elevationMeters: 1600,
    heroImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622540031975-2eea9cc4e2d0?q=80&w=1600&auto=format&fit=crop",
    ],
    overview:
      "Munnar is three valleys of tea — Nallathanni, Mudupatti, and Kannan Devan — stitched together by switchback roads and cool, thin air. Once a British summer retreat, it's now Kerala's signature hill escape, best known for its impossibly manicured tea estates and the rare Neelakurinji bloom.",
    bestTimeToVisit: "September to March, when the mist clears and views stretch for miles.",
    attractions: [
      { name: "Eravikulam National Park", description: "Home to the endangered Nilgiri tahr and rolling grasslands at over 2,000m." },
      { name: "Mattupetty Dam", description: "A scenic reservoir with boating and views over the surrounding tea slopes." },
      { name: "Top Station", description: "A former transhipment point offering the widest panorama of the Western Ghats in the region." },
      { name: "Tea Museum", description: "Traces Munnar's plantation history and the process from leaf to cup." },
    ],
    thingsToDo: [
      "Walk the tea gardens at Kolukkumalai, one of the world's highest tea estates",
      "Spot the Nilgiri tahr in Eravikulam National Park",
      "Go on a spice and waterfall trail toward Top Station",
      "Try a short trek through shola forest with a local guide",
      "Watch the sunrise over the valley from a plantation-edge viewpoint",
    ],
    keywordFocus: ["Munnar Tour Packages", "Luxury Resorts in Kerala", "Munnar Pool Villas"],
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
