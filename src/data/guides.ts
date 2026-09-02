export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  citySlug?: string;
  category: "Dress Code" | "Etiquette" | "City Guide" | "Booking Advice";
  readTime: string;
  content: string[];
  image: string;
};

export const guides: Guide[] = [
  {
    slug: "how-nightclub-table-bookings-work",
    title: "How Nightclub Table Bookings Actually Work",
    excerpt:
      "From minimum spend to confirmation windows — a plain-English walkthrough of what happens after you submit a request.",
    category: "Booking Advice",
    readTime: "4 min read",
    image: "/images/guides/booking-advice.jpg",
    content: [
      "A table booking is a reservation of dedicated floor space with host service, tied to a minimum spend rather than a fixed cover charge. When you submit a request through Halo Noir, we check live availability with the venue directly and come back with a confirmed table, a minimum spend figure and any deposit required.",
      "Most venues ask for a deposit against the minimum spend to hold the table on a sold-out night, refundable against your bill on arrival. We'll always tell you the number before you commit to anything.",
      "Confirmation windows vary by city and by night — some rooms confirm within the hour, others (particularly in Saint-Tropez and Mykonos during peak season) take a day or two while allocations are finalised. We keep you updated throughout.",
    ],
  },
  {
    slug: "bottle-service-explained",
    title: "Bottle Service, Explained",
    excerpt:
      "What's actually included in a bottle service table, and how it differs across London, Miami and the Riviera.",
    category: "Booking Advice",
    readTime: "5 min read",
    image: "/images/guides/bottle-service.jpg",
    content: [
      "Bottle service is the standard way minimum spend is delivered at a nightclub table: your spend is redeemed against bottles, mixers and often a presentation — sparklers, LED trays or a server escort, depending on the room.",
      "In London and Paris, service tends to be understated — a bottle arrives, poured discreetly. In Miami and on the Riviera, presentation is part of the night itself, with sparkler walks and music cues common on larger spends.",
      "If you'd rather skip the theatre, let us know when booking — most venues are happy to keep it low-key on request.",
    ],
  },
  {
    slug: "nightclub-dress-code-guide",
    title: "The Nightclub Dress Code Guide",
    excerpt: "What 'smart, elevated' actually means from city to city — and what gets you turned away at the door.",
    category: "Dress Code",
    readTime: "3 min read",
    image: "/images/guides/dress-code.jpg",
    content: [
      "Dress codes are enforced more strictly on table bookings than on general entry — venues expect table guests to set the tone of the room. Trainers, shorts and full sportswear are near-universal no-gos across our five cities.",
      "London and Paris skew formal: tailored jackets and elegant footwear are the safe default. Miami and Mykonos allow more resortwear, but 'elevated' is the operative word — think linen shirts and structured pieces, not beach sandals.",
      "Saint-Tropez sits between the two: relaxed by day, sharply dressed by night. If in doubt, ask us when you book — we know each door's actual policy, not just the official one.",
    ],
  },
  {
    slug: "club-etiquette-for-table-guests",
    title: "Club Etiquette for Table Guests",
    excerpt: "How to be the table the venue wants back — arrival times, host tipping and floor courtesy.",
    category: "Etiquette",
    readTime: "3 min read",
    image: "/images/guides/etiquette.jpg",
    content: [
      "Arrive within your confirmed window. Tables held past 30 minutes without contact are often released on sold-out nights — if you're running late, message your Halo Noir contact and we'll hold the room informed.",
      "Host tipping is customary but not obligatory in most of our cities; 10–15% of the bill is standard where it isn't already included as a service charge.",
      "Respect the boundary of neighbouring tables' space, particularly in smaller rooms like Le Pigalle or La Pinède Noir, where tables sit close together.",
    ],
  },
  {
    slug: "best-nightclubs-in-london",
    title: "Best Nightclubs in London for Table Bookings",
    excerpt: "Where to book this season, from Mayfair house rooms to Soho's late hip-hop floors.",
    category: "City Guide",
    citySlug: "london",
    readTime: "5 min read",
    image: "/images/guides/london-guide.jpg",
    content: [
      "London's table scene splits broadly into two camps: the polished house rooms of Mayfair, and the louder, later hip-hop and R&B floors around Soho. Both reward advance booking, particularly on Thursdays and Saturdays.",
      "The Obsidian Room remains the benchmark for a refined house night, with a horseshoe booth layout that suits groups of six to twelve. For something livelier, Noir Social's compact floor keeps table guests close to the music.",
      "Whichever room you choose, London doors are strict on dress code for table bookings — smart, elevated dress is expected even on a casual night out.",
    ],
  },
  {
    slug: "best-clubs-in-paris-for-international-visitors",
    title: "Best Clubs in Paris for International Visitors",
    excerpt: "A first-timer's guide to booking a table in Paris without wasting a night at the wrong door.",
    category: "City Guide",
    citySlug: "paris",
    readTime: "5 min read",
    image: "/images/guides/paris-guide.jpg",
    content: [
      "Paris nightlife is unforgiving to walk-ins but generous to guests who book ahead. Maison Rouge, near the Champs-Élysées, is the natural first stop for visitors who want grandeur alongside a current afro house and organic house policy.",
      "For a rawer night, Le Pigalle's techno and electro programme and industrial room draw a more local crowd — a good pick for a second night in the city.",
      "Both rooms run later than most visitors expect; don't plan on leaving before 3am if you want to see the room at its best.",
    ],
  },
  {
    slug: "where-to-party-in-miami",
    title: "Where to Party in Miami: A Table Guide",
    excerpt: "South Beach terraces versus Brickell's downtown flagships — how to choose your night.",
    category: "City Guide",
    citySlug: "miami",
    readTime: "4 min read",
    image: "/images/guides/miami-guide.jpg",
    content: [
      "Miami's nightlife map runs along two poles: South Beach's open-air terraces and Brickell's downtown megaclubs. Azure Terrace typifies the former, with an oceanfront layout and a Latin-and-house crossover policy that peaks on weekends.",
      "Brickell Noir represents the latter — a hip-hop and commercial programme built around bottle presentation, popular with groups celebrating a specific occasion.",
      "Weekends book out fastest across the city; if your dates are flexible, a Thursday table is far easier to secure at the room of your choice.",
    ],
  },
  {
    slug: "mykonos-nightlife-guide",
    title: "The Mykonos Nightlife Guide",
    excerpt: "From clifftop sunset venues to the island's late-night finish in town.",
    category: "City Guide",
    citySlug: "mykonos",
    readTime: "4 min read",
    image: "/images/guides/mykonos-guide.jpg",
    content: [
      "A proper Mykonos night has a shape to it: dinner and sunset at a clifftop venue like Cavo Noir, followed by a move into town once the beach clubs wind down.",
      "Town Noir is the island's natural closer, running a Greek-and-commercial-house policy well past 4am. Booking both in the same evening is common, and Halo Noir can coordinate the timing so your table's held at each.",
      "Wednesdays and Fridays have emerged as the island's strongest nights in recent seasons, alongside the expected Saturday peak.",
    ],
  },
  {
    slug: "saint-tropez-nightlife-guide",
    title: "The Saint-Tropez Nightlife Guide",
    excerpt: "Booking a table on the Riviera's hardest door — what to know before you arrive.",
    category: "City Guide",
    citySlug: "saint-tropez",
    readTime: "4 min read",
    image: "/images/guides/st-tropez-guide.jpg",
    content: [
      "Saint-Tropez operates on relationships more than any other city on this list. La Pinède Noir's pine-shaded disco-house sets and Port Royal Noir's harbour-view floor are both booked weeks in advance during peak season.",
      "Dress codes are enforced closely with the venue's overall image in mind — Riviera elegant is the baseline, and casual resortwear that reads as beachwear will be turned away.",
      "If your dates fall in July or August, book as early as possible — tables at both venues are frequently gone a month out.",
    ],
  },
  {
    slug: "best-clubs-for-birthdays-and-celebrations",
    title: "Best Clubs for Birthdays and Celebrations",
    excerpt: "Which rooms handle presentations well, and how to brief us on a special occasion.",
    category: "Booking Advice",
    readTime: "3 min read",
    image: "/images/guides/celebrations.jpg",
    content: [
      "Occasion matters when we place your table — venues with strong presentation cultures, like Brickell Noir and Port Royal Noir, are well suited to milestone birthdays, while quieter rooms like The Obsidian Room suit a low-key celebration better.",
      "Mention the occasion in your booking request and we'll flag it to the venue directly — most will arrange a candle, a sign or a shout-out at no extra cost on a qualifying spend.",
      "For larger groups, let us know your final guest count as early as possible; several rooms require a set minimum spend per head above eight guests.",
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
