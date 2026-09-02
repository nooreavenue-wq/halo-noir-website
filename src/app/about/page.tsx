import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { cities } from "@/data/cities";

export const metadata: Metadata = {
  title: "About",
  description:
    "Halo Noir specialises exclusively in international nightclub table bookings across London, Paris, Miami, Mykonos and Saint-Tropez.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-24 bg-amber-50/5 rounded-3xl my-5">
        <Reveal>
          <span className="eyebrow">About Halo Noir</span>
          <h1 className="font-display text-4xl sm:text-6xl mt-3 text-balance">
            One focus. The right table, every time.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-ivory-dim text-base sm:text-lg leading-relaxed">
            Halo Noir specialises exclusively in international nightclub
            table bookings. We don&apos;t sell guest-list entry, tours or
            unrelated concierge services — our entire platform exists to make
            one thing simple: getting the right table, at the right room, on
            the right night, in the cities that matter most in nightlife.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-4 text-ivory-dim leading-relaxed">
            We work directly with venue teams across London, Paris, Miami,
            Mykonos and Saint-Tropez, which means real availability, honest
            minimum spend figures, and a booking that&apos;s actually confirmed
            before you arrive — not just requested.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-hairline ">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
          <SectionHeading
            eyebrow="How We Work"
            title="Direct relationships, no middlemen"
            description="Every venue on Halo Noir is one we work with directly — not scraped listings or third-party resale."
          />
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { title: "We know the rooms", body: "Every club on Halo Noir has been vetted by our team — genre, dress code, crowd and table layout." },
              { title: "We confirm, not just request", body: "Your table is checked against live availability before we come back to you." },
              { title: "We stay reachable", body: "From the moment you book to the night itself, there's a real person handling your request." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="rounded-xl border border-hairline bg-surface/40 p-6 h-full">
                  <h3 className="font-display text-xl">{f.title}</h3>
                  <p className="text-sm text-ivory-dim mt-2 leading-relaxed">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
          <SectionHeading eyebrow="Where We Operate" title="Five cities, growing" />
          <div className="mt-10 flex flex-wrap gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/cities/${c.slug}`}
                className="rounded-full border border-hairline px-5 py-2.5 text-sm text-ivory-dim hover:border-champagne hover:text-champagne transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
          <Reveal delay={0.1}>
            <Button asChild size="lg" className="mt-10">
              <Link href="/book-a-table">
                Book a Table <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
