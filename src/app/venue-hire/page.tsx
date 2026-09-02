import type { Metadata } from "next";
import { VenueHireForm } from "@/components/venue-hire-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Venue Hire",
  description:
    "Enquire about full venue hire for corporate events, private parties and celebrations across Halo Noir's partner nightclubs.",
};

const useCases = [
  { title: "Corporate Events", body: "Product launches, client entertaining and end-of-year celebrations, handled discreetly." },
  { title: "Private Parties", body: "Full room buyouts for milestone birthdays, engagements and reunions." },
  { title: "Celebrations", body: "Anniversaries, promotions or any night that deserves the whole room." },
];

export default function VenueHirePage() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24 bg-surface rounded-3xl my-5">
      <Reveal>
        <span className="eyebrow">Private &amp; Corporate</span>
        <h1 className="font-display text-4xl sm:text-5xl mt-3 text-balance max-w-2xl">
          Full venue hire, arranged like a single table.
        </h1>
        <p className="mt-4 text-ivory-dim leading-relaxed max-w-xl">
          For events that call for the whole room, Halo Noir arranges
          exclusive hire across our partner venues in London, Paris, Miami,
          Mykonos and Saint-Tropez.
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-3 gap-5">
        {useCases.map((u, i) => (
          <Reveal key={u.title} delay={i * 0.08}>
            <div className="rounded-xl border border-hairline bg-surface/40 p-6 h-full">
              <h3 className="font-display text-xl">{u.title}</h3>
              <p className="text-sm text-ivory-dim mt-2 leading-relaxed">{u.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-14 rounded-2xl border border-hairline bg-surface/40 p-6 sm:p-10 max-w-3xl">
        <h2 className="font-display text-2xl mb-6">Enquire About Venue Hire</h2>
        <VenueHireForm />
      </Reveal>
    </section>
  );
}
