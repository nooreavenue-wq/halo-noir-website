"use client";

import { AdminDashboard } from "@/components/admin/admin-dashboard";
import {
  dummyBookings,
  dummyMembers,
  dummyVenueHire,
  dummyPromoters,
} from "@/data/dummy-admin";

export default function AdminPage() {
  const counts = {
    bookings: dummyBookings.length,
    members: dummyMembers.length,
    "venue-hire": dummyVenueHire.length,
    promoters: dummyPromoters.length,
  };

  return (
    <div>
      <div className="mb-2 rounded-lg border border-champagne/30 bg-champagne/5 px-4 py-2.5 inline-block">
        <p className="font-mono-label text-[0.6rem] text-champagne uppercase">
          Demo Mode — showing sample data, not connected to a live backend
        </p>
      </div>

      <div className="mb-8 mt-4">
        <span className="eyebrow">Dashboard</span>
        <h1 className="font-display text-3xl sm:text-4xl mt-2">
          Bookings &amp; Enquiries
        </h1>
        <p className="text-sm text-ivory-dim mt-2">
          All table bookings, membership applications, venue hire enquiries
          and promoter applications submitted through the website will
          appear here once connected to the backend.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {Object.entries(counts).map(([key, value]) => (
          <div key={key} className="rounded-xl border border-hairline bg-surface/40 p-5">
            <p className="font-mono-label text-[0.6rem] text-champagne uppercase">
              {key.replace("-", " ")}
            </p>
            <p className="font-display text-3xl mt-2">{value}</p>
          </div>
        ))}
      </div>

      <AdminDashboard
        counts={counts}
        data={{
          bookings: dummyBookings,
          members: dummyMembers,
          "venue-hire": dummyVenueHire,
          promoters: dummyPromoters,
        }}
      />
    </div>
  );
}
