// ---------------------------------------------------------------------
// DUMMY DATA — for frontend demo purposes only.
// The real admin dashboard should fetch this from your backend once it
// exists (e.g. GET /api/admin/bookings, /api/admin/members, etc).
// The shape of each row here matches what the DataTable component
// expects — keep the same field names when wiring up real data so
// src/components/admin/admin-dashboard.tsx doesn't need to change.
// ---------------------------------------------------------------------

export const dummyBookings = [
  {
    id: 1,
    created_at: "2026-08-01T18:12:00Z",
    full_name: "Isabella Grant",
    email: "isabella.grant@example.com",
    phone: "+44 7700 900123",
    preferred_contact: "WhatsApp",
    city: "london",
    nightclub: "the-obsidian-room-london",
    booking_date: "2026-08-14",
    guests: "8",
    budget: "£1,500",
    occasion: "Birthday",
    notes: "Booth near the DJ if possible.",
    status: "confirmed",
  },
  {
    id: 2,
    created_at: "2026-08-02T09:45:00Z",
    full_name: "Marcus Delacroix",
    email: "marcus.d@example.com",
    phone: "+33 6 12 34 56 78",
    preferred_contact: "Phone Call",
    city: "paris",
    nightclub: "maison-rouge-paris",
    booking_date: "2026-08-16",
    guests: "6",
    budget: "€1,200",
    occasion: "Corporate celebration",
    notes: "",
    status: "new",
  },
  {
    id: 3,
    created_at: "2026-08-03T21:03:00Z",
    full_name: "Sofia Reyes",
    email: "sofia.reyes@example.com",
    phone: "+1 305 555 0192",
    preferred_contact: "Email",
    city: "miami",
    nightclub: "azure-terrace-miami",
    booking_date: "2026-08-22",
    guests: "10",
    budget: "$3,000",
    occasion: "Bachelorette",
    notes: "Group flying in from NYC, arriving 11pm.",
    status: "contacted",
  },
  {
    id: 4,
    created_at: "2026-08-05T13:20:00Z",
    full_name: "Elias Kovač",
    email: "elias.k@example.com",
    phone: "+30 694 123 4567",
    preferred_contact: "WhatsApp",
    city: "mykonos",
    nightclub: "scorpios-adjacent-mykonos",
    booking_date: "2026-08-28",
    guests: "4",
    budget: "€900",
    occasion: "",
    notes: "",
    status: "new",
  },
];

export const dummyMembers = [
  {
    id: 1,
    created_at: "2026-07-28T10:00:00Z",
    full_name: "Charlotte Wren",
    email: "charlotte.wren@example.com",
    phone: "+44 7911 123456",
    location: "London, UK",
    social_profile: "@charlotte.wren",
    occupation: "Finance",
    preferred_cities: "London, Saint-Tropez",
    reason: "Book regularly for client entertaining and want priority access.",
    referral: "",
    status: "reviewing",
  },
  {
    id: 2,
    created_at: "2026-07-30T16:30:00Z",
    full_name: "Julien Moreau",
    email: "julien.moreau@example.com",
    phone: "+33 6 98 76 54 32",
    location: "Paris, France",
    social_profile: "@julien.moreau",
    occupation: "Hospitality",
    preferred_cities: "Paris, Mykonos",
    reason: "Travel frequently for work and nightlife.",
    referral: "Referred by an existing member",
    status: "pending",
  },
];

export const dummyVenueHire = [
  {
    id: 1,
    created_at: "2026-08-04T11:15:00Z",
    full_name: "Amelia Ford",
    email: "amelia.ford@example.com",
    phone: "+1 786 555 0143",
    city: "miami",
    event_type: "Corporate Event",
    event_date: "2026-09-12",
    guest_count: "120",
    budget: "$25,000",
    notes: "Product launch, need full room by 9pm.",
    status: "new",
  },
];

export const dummyPromoters = [
  {
    id: 1,
    created_at: "2026-08-01T08:40:00Z",
    full_name: "Théo Laurent",
    email: "theo.laurent@example.com",
    phone: "+33 7 11 22 33 44",
    city: "saint-tropez",
    social_profile: "@theolaurent",
    status: "reviewing",
  },
];
