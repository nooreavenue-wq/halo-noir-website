"use client";

import { useState } from "react";
import { DataTable } from "./data-table";

const TABS = [
  { key: "bookings", label: "Bookings" },
  { key: "members", label: "Members" },
  { key: "venue-hire", label: "Venue Hire" },
  { key: "promoters", label: "Promoters" },
] as const;

const COLUMNS: Record<string, { key: string; label: string }[]> = {
  bookings: [
    { key: "full_name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "city", label: "City" },
    { key: "nightclub", label: "Nightclub" },
    { key: "booking_date", label: "Date" },
    { key: "guests", label: "Guests" },
    { key: "budget", label: "Budget" },
  ],
  members: [
    { key: "full_name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "location", label: "Location" },
    { key: "occupation", label: "Occupation" },
    { key: "preferred_cities", label: "Preferred Cities" },
  ],
  "venue-hire": [
    { key: "full_name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "city", label: "City" },
    { key: "event_type", label: "Event Type" },
    { key: "event_date", label: "Date" },
    { key: "guest_count", label: "Guests" },
    { key: "budget", label: "Budget" },
  ],
  promoters: [
    { key: "full_name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "city", label: "City" },
    { key: "social_profile", label: "Social" },
  ],
};

type Row = Record<string, unknown> & { id: number; status: string; created_at: string };

export function AdminDashboard({
  counts,
  data,
}: {
  counts: Record<string, number>;
  data: Record<string, Row[]>;
}) {
  const [active, setActive] = useState<(typeof TABS)[number]["key"]>("bookings");

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`rounded-full border px-4 py-2 text-xs font-mono-label uppercase transition-colors flex items-center gap-2 ${
              active === tab.key
                ? "border-champagne bg-champagne text-obsidian"
                : "border-hairline text-ivory-dim hover:border-champagne/50 hover:text-ivory"
            }`}
          >
            {tab.label}
            <span
              className={`rounded-full px-1.5 text-[0.6rem] ${
                active === tab.key ? "bg-obsidian/20" : "bg-surface-2"
              }`}
            >
              {counts[tab.key] ?? 0}
            </span>
          </button>
        ))}
      </div>

      <DataTable table={active} columns={COLUMNS[active]} rows={data[active] || []} />
    </div>
  );
}
