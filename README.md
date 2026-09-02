# Halo Noir — Frontend (Dummy Data)

This is the **frontend only**. There is no backend, no database, and
nothing to compile natively — `npm install` should work cleanly on any
OS (Windows included), since this version has zero native dependencies.

All content (cities, clubs, weekly schedule, guide articles) is
hardcoded sample data. All forms and the admin dashboard run in a
self-contained **demo mode** described below, ready for a backend
developer to wire up.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## What "demo mode" means

### Public forms (Book a Table, Members, Venue Hire, Join the Team)

Every form submit goes through **`src/lib/api.ts`** — a single file that
either:

- **simulates** the submission (logs the payload to the browser console,
  waits ~1 second, then shows the success state) — this is the default
  with no backend connected, or
- **calls your real backend** automatically, the moment you set
  `NEXT_PUBLIC_API_BASE_URL` in `.env.local` (copy `.env.example`).

No other file needs to change to go from demo → live. See the **API
Contract** section below for the exact request shape each form sends.

### Admin dashboard (`/admin`)

- Login is a **client-side-only** placeholder (`src/lib/demo-auth.ts`) —
  not real security, just enough to gate the page for a demo. Password
  is shown directly on the login screen.
- The dashboard tables show **hardcoded sample rows** from
  `src/data/dummy-admin.ts`, not real submissions (since there's no
  database yet, nothing actually persists — a demo submission through
  the public site won't show up here).
- Status dropdowns update in local state only (resets on refresh).

**When your backend is ready**, the admin dashboard will need real
work beyond just setting the env var — see "Backend developer checklist"
below.

## API Contract (for the backend developer)

The frontend expects 4 POST endpoints, called as
`${NEXT_PUBLIC_API_BASE_URL}/api/...`:

### `POST /api/bookings`
```jsonc
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "preferredContact": "WhatsApp | Phone Call | Email",
  "city": "london | paris | miami | mykonos | saint-tropez",
  "nightclub": "string (club slug, see src/data/clubs.ts)",
  "bookingDate": "YYYY-MM-DD",
  "guests": "string (number as string)",
  "budget": "string (optional)",
  "occasion": "string (optional)",
  "notes": "string (optional)"
}
```

### `POST /api/members`
```jsonc
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "location": "string",
  "socialProfile": "string (optional)",
  "occupation": "string (optional)",
  "preferredCities": "string (optional)",
  "reason": "string (optional)",
  "referral": "string (optional)"
}
```

### `POST /api/venue-hire`
```jsonc
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "city": "string",
  "eventType": "string",
  "eventDate": "YYYY-MM-DD (optional)",
  "guestCount": "string (optional)",
  "budget": "string (optional)",
  "notes": "string (optional)"
}
```

### `POST /api/promoters`
```jsonc
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "city": "string",
  "experience": "string (optional)",
  "socialProfile": "string (optional)",
  "notes": "string (optional)"
}
```

All four should respond `200 OK` with `{ "ok": true, "id": <number> }`
on success (the frontend only checks `res.ok`, so extra fields are fine).
Any non-2xx response is treated as a failure and shows the form's error
state.

## Backend developer checklist

To fully connect this frontend to a real backend:

1. Build the 4 POST endpoints above (any stack — the frontend doesn't
   care, it just does `fetch`).
2. Set `NEXT_PUBLIC_API_BASE_URL` in `.env.local` — public forms will
   immediately start hitting your real API (see `src/lib/api.ts`).
3. Replace `src/lib/demo-auth.ts` and the admin login page/guard with
   real authentication (a login endpoint + secure session, e.g. an
   httpOnly cookie), and add server-side route protection (Next.js
   middleware/proxy checking that session) instead of the current
   client-side-only localStorage check.
4. Replace `src/data/dummy-admin.ts` in `src/app/admin/page.tsx` with
   real `fetch` calls to your admin data endpoints (e.g.
   `GET /api/admin/bookings`), keeping the same row shape so
   `src/components/admin/data-table.tsx` doesn't need changes.
5. Wire the status dropdown in the admin table to a real
   `PATCH`/`PUT` endpoint (there's a comment marking exactly where in
   `src/components/admin/data-table.tsx`).

## Editing content (cities, clubs, schedule, guides)

All business content lives in plain TypeScript files:

- `src/data/cities.ts` — the 5 cities (add more here to expand)
- `src/data/clubs.ts` — every nightclub, including which days it's open
  (`openDays`) — this powers the weekly schedule automatically
- `src/data/guides.ts` — Nightlife Guide articles
- `src/data/dummy-admin.ts` — sample rows for the admin dashboard demo

Images referenced in this data (e.g. `/images/clubs/...`) are
placeholders — drop real images into `/public/images/...` using the
same filenames, or update the paths.

To add a new city: add an entry to `cities.ts`, then add its clubs to
`clubs.ts` with `citySlug` matching the new city's `slug`. A new page at
`/cities/your-city` is generated automatically.

## WhatsApp number

Update the placeholder WhatsApp number in:

- `src/components/whatsapp-button.tsx`
- `src/app/page.tsx` (hero button)

## Analytics & tracking

Google Analytics 4, Google Search Console and Google Tag Manager are not
wired up — add your GA4/GTM snippet to `src/app/layout.tsx` when ready.

## Tech stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide icons
- No database, no native dependencies — pure frontend
