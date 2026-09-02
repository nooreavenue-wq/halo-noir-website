export type City = {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  intro: string;
  heroImage: string;
  bestNights: string;
  dressCode: string;
  avgTableMinimum: string;
};

export const cities: City[] = [
  {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    tagline: "Mayfair glamour meets Shoreditch edge",
    intro:
      "From the members' rooms of Mayfair to the warehouse energy of East London, Halo Noir holds standing relationships with the capital's most selective floors. We place you at the table that matches the night you're after, not just the venue with the best door policy.",
    heroImage: "/images/cities/london.jpg",
    bestNights: "Thursday & Saturday",
    dressCode: "Smart, elevated. No trainers or sportswear at most rooms.",
    avgTableMinimum: "£800 – £3,000+",
  },
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    tagline: "Champs-Élysées grandeur, Pigalle attitude",
    intro:
      "Paris nightlife rewards those who know which door to knock on. Halo Noir works directly with the city's leading maisons de nuit to secure tables for visitors who want the room, the view and the reception that follows a proper introduction.",
    heroImage: "/images/cities/paris.jpg",
    bestNights: "Friday & Saturday",
    dressCode: "Chic, tailored. Elegant footwear expected.",
    avgTableMinimum: "€900 – €4,000+",
  },
  {
    slug: "miami",
    name: "Miami",
    country: "United States",
    tagline: "South Beach heat, Brickell polish",
    intro:
      "Miami moves fast and the best tables move faster. From beachfront terraces to the city's flagship megaclubs, Halo Noir secures placements for the nights that sell out first — with the minimum spend and guest count clear before you land.",
    heroImage: "/images/cities/miami.jpg",
    bestNights: "Friday, Saturday & Sunday",
    dressCode: "Resort elegant. Elevated beach-to-night dress.",
    avgTableMinimum: "$1,000 – $5,000+",
  },
  {
    slug: "mykonos",
    name: "Mykonos",
    country: "Greece",
    tagline: "Sunset beach clubs to sunrise terraces",
    intro:
      "Mykonos nightlife runs on a rhythm of its own — sunset beach clubs feeding into late-night terraces above the Aegean. Halo Noir's relationships across the island mean your table is confirmed before the season's demand takes hold.",
    heroImage: "/images/cities/mykonos.jpg",
    bestNights: "Wednesday, Friday & Saturday",
    dressCode: "Resort chic. Linen and light fabrics after sunset.",
    avgTableMinimum: "€700 – €3,500+",
  },
  {
    slug: "saint-tropez",
    name: "Saint-Tropez",
    country: "France",
    tagline: "Riviera prestige, port-side exclusivity",
    intro:
      "Saint-Tropez remains one of the hardest doors in Europe to open without an introduction. Halo Noir's standing tables across the port and the pinède let you arrive already expected, from lunch service through to last call.",
    heroImage: "/images/cities/saint-tropez.jpg",
    bestNights: "Thursday, Friday & Saturday",
    dressCode: "Riviera elegant. Smart resortwear, no beachwear after 8pm.",
    avgTableMinimum: "€1,200 – €6,000+",
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
