import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClubCard } from "@/components/club-card";
import { cities, getCity } from "@/data/cities";
import { clubsByCity, days } from "@/data/clubs";
import { guides } from "@/data/guides";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};
  return {
    title: `${city.name} Nightclub Table Bookings`,
    description: `Book a VIP nightclub table in ${city.name}. ${city.tagline}. Browse the weekly schedule, featured clubs and booking advice for ${city.name}.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const cityClubs = clubsByCity(citySlug);
  const cityGuides = guides.filter((g) => g.citySlug === citySlug);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(111,18,38,0.18),transparent)]" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 pt-16 sm:pt-24 pb-16">
          <Reveal>
            <span className="eyebrow">{city.country}</span>
            <h1 className="font-display text-4xl sm:text-6xl mt-3 text-balance">
              {city.name} Table Bookings
            </h1>
            <p className="mt-5 text-ivory-dim text-base sm:text-lg leading-relaxed max-w-2xl">
              {city.intro}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={`/book-a-table?city=${city.slug}`}>
                Book a Table in {city.name} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.16} className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <p className="font-mono-label text-[0.6rem] text-champagne">Best Nights</p>
              <p className="text-sm mt-1">{city.bestNights}</p>
            </div>
            <div>
              <p className="font-mono-label text-[0.6rem] text-champagne">Dress Code</p>
              <p className="text-sm mt-1">{city.dressCode}</p>
            </div>
            <div>
              <p className="font-mono-label text-[0.6rem] text-champagne">Table Minimum</p>
              <p className="text-sm mt-1">{city.avgTableMinimum}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Weekly schedule */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 border-t border-hairline">
        <SectionHeading
          eyebrow="This Week"
          title={`${city.name}'s weekly club schedule`}
          description={`Every Halo Noir venue in ${city.name}, with the nights each room runs.`}
        />
        <div className="mt-10 overflow-x-auto scrollbar-none">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="border-b border-hairline">
                <th className="text-left py-3 font-mono-label text-[0.6rem] text-champagne uppercase">
                  Club
                </th>
                {days.map((d) => (
                  <th
                    key={d}
                    className="text-center py-3 font-mono-label text-[0.6rem] text-ivory-dim uppercase"
                  >
                    {d.slice(0, 3)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cityClubs.map((club) => (
                <tr key={club.slug} className="border-b border-hairline/60">
                  <td className="py-3.5">
                    <Link
                      href={`/nightclubs/${club.slug}`}
                      className="hover:text-champagne transition-colors"
                    >
                      {club.name}
                    </Link>
                    <p className="text-xs text-ivory-dim">{club.genre}</p>
                  </td>
                  {days.map((d) => (
                    <td key={d} className="text-center py-3.5">
                      {club.openDays.includes(d) ? (
                        <span className="inline-block h-2 w-2 rounded-full bg-champagne" />
                      ) : (
                        <span className="inline-block h-2 w-2 rounded-full bg-hairline" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Featured clubs */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 border-t border-hairline">
        <SectionHeading eyebrow="Featured" title={`Nightclubs in ${city.name}`} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cityClubs.map((club, i) => (
            <Reveal key={club.slug} delay={i * 0.06}>
              <ClubCard club={club} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Guides */}
      {cityGuides.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 border-t border-hairline">
          <SectionHeading eyebrow="Read" title={`${city.name} nightlife guides`} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {cityGuides.map((g, i) => (
              <Reveal key={g.slug} delay={i * 0.06}>
                <Link
                  href={`/nightlife-guide/${g.slug}`}
                  className="group block rounded-xl border border-hairline bg-surface/40 p-6 hover:border-champagne/40 transition-colors"
                >
                  <Badge variant="outline">{g.category}</Badge>
                  <h3 className="font-display text-xl mt-4 group-hover:text-champagne transition-colors">
                    {g.title}
                  </h3>
                  <p className="text-sm text-ivory-dim mt-2 leading-relaxed">{g.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl text-balance">
              Ready to book your table in {city.name}?
            </h2>
            <Button asChild size="lg" className="mt-8">
              <Link href={`/book-a-table?city=${city.slug}`}>Book a Table</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
