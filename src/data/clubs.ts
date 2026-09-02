export type Day =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export const days: Day[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export type Club = {
  slug: string;
  name: string;
  citySlug: string;
  genre: string;
  hours: string;
  openDays: Day[];
  location: string;
  description: string;
  longDescription: string;
  dressCode: string;
  tableInfo: string;
  image: string;
  gallery: string[];
};

export const clubs: Club[] = [
  {
    slug: "the-obsidian-room-london-test",
    name: "The Obsidian Room-test",
    citySlug: "london",
    genre: "House / Commercial-test",
    hours: "11:00 PM – 4:00 AM",
    openDays: ["Thursday", "Friday", "Saturday" , "Wednesday"],
    location: "Mayfair, London",
    description: "A members'-calibre room known for its horseshoe booths and resident house sets.",
    longDescription:
      "Tucked behind an unmarked Mayfair door, The Obsidian Room has built its reputation on discretion and sound. Horseshoe booths wrap a sunken dancefloor, with a resident selector running deep, vocal house from midnight. Expect a well-dressed, largely 25–40 crowd and a door team that takes table bookings seriously.",
    dressCode: "Smart tailored. Jacket recommended for gentlemen.",
    tableInfo: "Minimum spend from £800 (side booth) to £3,500 (DJ booth).",
    image: "/images/clubs/obsidian-room.jpg",
    gallery: ["/images/clubs/obsidian-room.jpg", "/images/clubs/obsidian-room-2.jpg"],
  },
  {
    slug: "the-obsidian-room-london",
    name: "The Obsidian Room",
    citySlug: "london",
    genre: "House / Commercial",
    hours: "11:00 PM – 4:00 AM",
    openDays: ["Thursday", "Friday", "Saturday" ,"Monday", "Tuesday", "Wednesday"],
    location: "Mayfair, London",
    description: "A members'-calibre room known for its horseshoe booths and resident house sets.",
    longDescription:
      "Tucked behind an unmarked Mayfair door, The Obsidian Room has built its reputation on discretion and sound. Horseshoe booths wrap a sunken dancefloor, with a resident selector running deep, vocal house from midnight. Expect a well-dressed, largely 25–40 crowd and a door team that takes table bookings seriously.",
    dressCode: "Smart tailored. Jacket recommended for gentlemen.",
    tableInfo: "Minimum spend from £800 (side booth) to £3,500 (DJ booth).",
    image: "/images/clubs/obsidian-room.jpg",
    gallery: ["/images/clubs/obsidian-room.jpg", "/images/clubs/obsidian-room-2.jpg"],
  },
  {
    slug: "noir-social-london",
    name: "Noir Social",
    citySlug: "london",
    genre: "Hip-Hop / R&B",
    hours: "10:00 PM – 3:00 AM",
    openDays: ["Wednesday", "Friday", "Saturday"],
    location: "Soho, London",
    description: "High-energy hip-hop and R&B on one of Soho's best-known dancefloors.",
    longDescription:
      "Noir Social pulls one of Soho's liveliest late crowds with a hip-hop and R&B policy that rarely misses. The room is compact and loud in the best way — tables sit close to the floor, so it suits guests who want to be in the middle of the night rather than watching from the side.",
    dressCode: "Smart casual, no sportswear.",
    tableInfo: "Minimum spend from £600.",
    image: "/images/clubs/noir-social.jpg",
    gallery: ["/images/clubs/noir-social.jpg"],
  },
  {
    slug: "maison-rouge-paris",
    name: "Maison Rouge",
    citySlug: "paris",
    genre: "House / Afro House",
    hours: "12:00 AM – 6:00 AM",
    openDays: ["Friday", "Saturday"],
    location: "8th Arrondissement, Paris",
    description: "Red-velvet grandeur near the Champs-Élysées with an afro-house-leaning residency.",
    longDescription:
      "A short walk from the Champs-Élysées, Maison Rouge trades on old-world grandeur — red velvet, gilt mirrors, a chandelier over the floor — paired with a forward-thinking afro house and organic house residency that keeps the room current. Tables surround the floor on two tiers.",
    dressCode: "Chic, elegant. No trainers.",
    tableInfo: "Minimum spend from €1,000.",
    image: "/images/clubs/maison-rouge.jpg",
    gallery: ["/images/clubs/maison-rouge.jpg"],
  },
  {
    slug: "le-pigalle-paris",
    name: "Le Pigalle",
    citySlug: "paris",
    genre: "Techno / Electro",
    hours: "11:30 PM – 7:00 AM",
    openDays: ["Thursday", "Friday", "Saturday"],
    location: "Pigalle, Paris",
    description: "Industrial-leaning techno room with one of the best sound systems in the city.",
    longDescription:
      "Le Pigalle draws a crowd that comes for the sound system first. Exposed concrete, low lighting and a techno-and-electro booking policy make it the room of choice for guests who want the night to run long — service continues well past sunrise on weekends.",
    dressCode: "Smart casual, all-black welcome.",
    tableInfo: "Minimum spend from €900.",
    image: "/images/clubs/le-pigalle.jpg",
    gallery: ["/images/clubs/le-pigalle.jpg"],
  },
  {
    slug: "azure-terrace-miami",
    name: "Azure Terrace",
    citySlug: "miami",
    genre: "Reggaeton / Latin / House",
    hours: "10:00 PM – 5:00 AM",
    openDays: ["Friday", "Saturday", "Sunday"],
    location: "South Beach, Miami",
    description: "Open-air oceanfront terrace with a Latin and house crossover policy.",
    longDescription:
      "Azure Terrace sits open to the sky on South Beach, with a sound and booking policy that swings between reggaeton, Latin house and commercial house across the night. Tables closest to the rail get the ocean breeze and the best view of the room.",
    dressCode: "Resort elegant. No flip-flops or beachwear.",
    tableInfo: "Minimum spend from $1,200.",
    image: "/images/clubs/azure-terrace.jpg",
    gallery: ["/images/clubs/azure-terrace.jpg"],
  },
  {
    slug: "brickell-noir-miami",
    name: "Brickell Noir",
    citySlug: "miami",
    genre: "Hip-Hop / Commercial",
    hours: "11:00 PM – 4:00 AM",
    openDays: ["Thursday", "Friday", "Saturday"],
    location: "Brickell, Miami",
    description: "Miami's downtown flagship for hip-hop tables and bottle presentations.",
    longDescription:
      "Brickell Noir is Miami's downtown answer to the South Beach megaclubs — a hip-hop and commercial policy, a sizeable dancefloor and a presentation culture built around bottle service. It suits groups who want to be seen as much as heard.",
    dressCode: "Upscale streetwear to smart. No athletic wear.",
    tableInfo: "Minimum spend from $1,000.",
    image: "/images/clubs/brickell-noir.jpg",
    gallery: ["/images/clubs/brickell-noir.jpg"],
  },
  {
    slug: "scorpios-adjacent-mykonos",
    name: "Cavo Noir",
    citySlug: "mykonos",
    genre: "Deep House / Organic House",
    hours: "9:00 PM – 3:00 AM",
    openDays: ["Wednesday", "Friday", "Saturday"],
    location: "Psarou, Mykonos",
    description: "Clifftop sunset venue transitioning from dinner service into deep house sets.",
    longDescription:
      "Perched above Psarou, Cavo Noir runs a full evening arc — dinner service at sunset gives way to a deep and organic house set as the terrace fills. The table layout favours the cliff edge, and those seats are the first to go each week.",
    dressCode: "Resort chic. Linen encouraged.",
    tableInfo: "Minimum spend from €700.",
    image: "/images/clubs/cavo-noir.jpg",
    gallery: ["/images/clubs/cavo-noir.jpg"],
  },
  {
    slug: "town-noir-mykonos",
    name: "Town Noir",
    citySlug: "mykonos",
    genre: "Commercial / Greek / House",
    hours: "12:00 AM – 5:00 AM",
    openDays: ["Friday", "Saturday", "Sunday"],
    location: "Mykonos Town",
    description: "The island's late-night finish, mixing Greek anthems with commercial house.",
    longDescription:
      "Town Noir is where Mykonos nights end up — a mixed policy of Greek anthems and commercial house that keeps the room full until sunrise. It's a livelier, less formal room than the beach clubs it follows.",
    dressCode: "Smart resortwear.",
    tableInfo: "Minimum spend from €600.",
    image: "/images/clubs/town-noir.jpg",
    gallery: ["/images/clubs/town-noir.jpg"],
  },
  {
    slug: "la-pinede-saint-tropez",
    name: "La Pinède Noir",
    citySlug: "saint-tropez",
    genre: "House / Disco",
    hours: "12:00 AM – 5:00 AM",
    openDays: ["Thursday", "Friday", "Saturday"],
    location: "La Pinède, Saint-Tropez",
    description: "Pine-shaded open-air club with a disco-inflected house residency.",
    longDescription:
      "Set beneath the pines outside town, La Pinède Noir keeps a disco-inflected house policy that has made it a fixture of the Saint-Tropez season. The layout is intimate by Riviera standards, which makes advance table booking essential.",
    dressCode: "Riviera elegant.",
    tableInfo: "Minimum spend from €1,500.",
    image: "/images/clubs/la-pinede.jpg",
    gallery: ["/images/clubs/la-pinede.jpg"],
  },
  {
    slug: "port-royal-saint-tropez",
    name: "Port Royal Noir",
    citySlug: "saint-tropez",
    genre: "Commercial / Hip-Hop / House",
    hours: "11:30 PM – 5:00 AM",
    openDays: ["Wednesday", "Friday", "Saturday"],
    location: "Vieux Port, Saint-Tropez",
    description: "Port-side room overlooking the yachts, mixing commercial and hip-hop sets.",
    longDescription:
      "Overlooking the superyachts of the Vieux Port, Port Royal Noir runs a commercial and hip-hop policy that draws one of the port's busiest late crowds. Tables on the upper tier overlook both the floor and the harbour.",
    dressCode: "Riviera elegant, upscale.",
    tableInfo: "Minimum spend from €1,800.",
    image: "/images/clubs/port-royal.jpg",
    gallery: ["/images/clubs/port-royal.jpg"],
  },
];

export function getClub(slug: string) {
  return clubs.find((c) => c.slug === slug);
}

export function clubsByCity(citySlug: string) {
  return clubs.filter((c) => c.citySlug === citySlug);
}

export function clubsByCityAndDay(citySlug: string, day: Day) {
  return clubs.filter((c) => c.citySlug === citySlug && c.openDays.includes(day));
}
