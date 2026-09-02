import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ClubCard } from "@/components/club-card";
import { clubs } from "@/data/clubs";
import { cities } from "@/data/cities";

export const metadata: Metadata = {
  title: "Nightclubs",
  description:
    "Browse Halo Noir's partner nightclubs across London, Paris, Miami, Mykonos and Saint-Tropez, with music style, hours and table information.",
};

export default function NightclubsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24">
      <Reveal>
        <span className="eyebrow">All Venues</span>
        <h1 className="font-display text-4xl sm:text-5xl mt-3 text-balance">
          Nightclubs
        </h1>
        <p className="mt-4 text-ivory-dim leading-relaxed max-w-xl">
          Every room Halo Noir places tables at, across our five cities.
          Filter by destination below or view a city&apos;s full weekly schedule.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mt-8 flex flex-wrap gap-2">
        {cities.map((c) => (
          <a
            key={c.slug}
            href={`#${c.slug}`}
            className="rounded-full border border-hairline px-4 py-2 text-xs font-mono-label uppercase text-ivory-dim hover:border-champagne hover:text-champagne transition-colors"
          >
            {c.name}
          </a>
        ))}
      </Reveal>

      <div className="mt-14 space-y-16">
        {cities.map((city) => {
          const cityClubs = clubs.filter((c) => c.citySlug === city.slug);
          if (cityClubs.length === 0) return null;
          return (
            <div key={city.slug} id={city.slug} className="scroll-mt-24">
              <div className="flex items-baseline justify-between gap-4 flex-wrap mb-6">
                <h2 className="font-display text-2xl sm:text-3xl">{city.name}</h2>
                <a
                  href={`/cities/${city.slug}`}
                  className="font-mono-label text-[0.65rem] text-champagne uppercase"
                >
                  View {city.name} Page →
                </a>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cityClubs.map((club, i) => (
                  <Reveal key={club.slug} delay={i * 0.05}>
                    <ClubCard club={club} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
