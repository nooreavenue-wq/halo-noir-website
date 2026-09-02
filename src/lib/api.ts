/**
 * ---------------------------------------------------------------------
 * FRONTEND-ONLY DEMO MODE
 * ---------------------------------------------------------------------
 * This project currently ships with NO backend. Every form on the site
 * (Book a Table, Members, Venue Hire, Join the Team) submits through the
 * functions below.
 *
 * Right now, with no NEXT_PUBLIC_API_BASE_URL set, submissions are only
 * simulated: they log to the browser console and resolve after a short
 * delay so the UI (loading / success states) can be reviewed as-is.
 *
 * TO CONNECT A REAL BACKEND:
 * 1. Set NEXT_PUBLIC_API_BASE_URL in .env.local to your API's base URL,
 *    e.g. NEXT_PUBLIC_API_BASE_URL=https://api.thehalonoir.com
 * 2. That's it for the simple case — postJSON() below will automatically
 *    start sending real POST requests to `${API_BASE_URL}${path}` instead
 *    of simulating them, using the same payload shapes.
 * 3. If your backend expects different field names, a different auth
 *    header, etc., adjust `postJSON` (or the individual submit* functions)
 *    accordingly — this file is the single place that talks to the
 *    outside world.
 *
 * See README.md for the full expected payload/response shape of each
 * endpoint (the "API Contract" section) so your backend can match it.
 * ---------------------------------------------------------------------
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function postJSON<T extends Record<string, unknown>>(
  path: string,
  payload: T
): Promise<{ ok: boolean; id?: number }> {
  if (!API_BASE_URL) {
    // ---- DEMO MODE: no backend connected yet ----
    console.info(`[Halo Noir demo] would POST ${path} with:`, payload);
    await sleep(700 + Math.random() * 400);
    return { ok: true, id: Math.floor(Math.random() * 100000) };
  }

  // ---- LIVE MODE: real backend connected ----
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Request to ${path} failed with status ${res.status}`);
  }

  return res.json();
}

export type BookingPayload = {
  fullName: string;
  email: string;
  phone: string;
  preferredContact: string;
  city: string;
  nightclub: string;
  bookingDate: string;
  guests: string;
  budget?: string;
  occasion?: string;
  notes?: string;
};

export type MemberPayload = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  socialProfile?: string;
  occupation?: string;
  preferredCities?: string;
  reason?: string;
  referral?: string;
};

export type VenueHirePayload = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  eventType: string;
  eventDate?: string;
  guestCount?: string;
  budget?: string;
  notes?: string;
};

export type PromoterPayload = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  experience?: string;
  socialProfile?: string;
  notes?: string;
};

export const submitBooking = (payload: BookingPayload) =>
  postJSON("/api/bookings", payload);

export const submitMembership = (payload: MemberPayload) =>
  postJSON("/api/members", payload);

export const submitVenueHire = (payload: VenueHirePayload) =>
  postJSON("/api/venue-hire", payload);

export const submitPromoter = (payload: PromoterPayload) =>
  postJSON("/api/promoters", payload);

export const isLiveApiConnected = () => Boolean(API_BASE_URL);
