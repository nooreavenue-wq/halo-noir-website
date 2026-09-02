import { Suspense } from "react";
import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Book a Table",
  description:
    "Submit a VIP nightclub table booking request in London, Paris, Miami, Mykonos or Saint-Tropez.",
};

export default function BookATablePage() {
  return (
    <section className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
      <Reveal>
        <span className="eyebrow">Table Reservations</span>
        <h1 className="font-display text-4xl sm:text-5xl mt-3 text-balance">
          Book a Table
        </h1>
        <p className="mt-4 text-ivory-dim leading-relaxed max-w-xl">
          This form is for table reservations only — guest-list requests and
          concierge services aren&apos;t handled here. Tell us the essentials
          and our bookings team will confirm your table directly.
        </p>
      </Reveal>

      <div className="mt-10 rounded-2xl border border-hairline bg-surface/40 p-6 sm:p-10">
        <Suspense fallback={null}>
          <BookingForm />
        </Suspense>
      </div>
    </section>
  );
}
