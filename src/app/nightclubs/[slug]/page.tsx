import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClubCard } from "@/components/club-card";
import { clubs, getClub, clubsByCity } from "@/data/clubs";
import { getCity } from "@/data/cities";

export function generateStaticParams() {
  return clubs.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const club = getClub(slug);
  if (!club) return {};
  const city = getCity(club.citySlug);
  return {
    title: `Book a Table at ${club.name}`,
    description: `${club.name} in ${city?.name} — ${club.genre}, open ${club.openDays.join(", ")}. ${club.tableInfo} Book your table with Halo Noir.`,
  };
}

export default async function NightclubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const club = getClub(slug);
  if (!club) notFound();
  const city = getCity(club.citySlug);
  const related = clubsByCity(club.citySlug).filter((c) => c.slug !== club.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="h-72 sm:h-96 bg-gradient-to-br from-cherry/30 via-surface-2 to-obsidian-2 relative">
          <div className="absolute inset-0 grain-overlay" />
        </div>
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="-mt-16 sm:-mt-20 relative rounded-2xl border border-hairline bg-obsidian/90 backdrop-blur p-6 sm:p-10">
            <Reveal>
              <Badge>{city?.name}</Badge>
              <h1 className="font-display text-3xl sm:text-5xl mt-3 text-balance">
                {club.name}
              </h1>
              <p className="mt-3 text-ivory-dim">{club.location}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Badge variant="outline">{club.genre}</Badge>
                <Badge variant="outline" className="font-mono-label">
                  {club.hours}
                </Badge>
                <Badge variant="outline">{club.openDays.join(" · ")}</Badge>
              </div>
              <Button asChild size="lg" className="mt-7">
                <Link href={`/book-a-table?club=${club.slug}&city=${club.citySlug}`}>
                  Book a Table Here <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl mb-4">About {club.name}</h2>
              <p className="text-ivory-dim leading-relaxed">{club.longDescription}</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-hairline bg-surface/40 p-6 space-y-5">
              <div>
                <p className="font-mono-label text-[0.6rem] text-champagne">Music Style</p>
                <p className="text-sm mt-1">{club.genre}</p>
              </div>
              <div>
                <p className="font-mono-label text-[0.6rem] text-champagne">Opening Hours</p>
                <p className="text-sm mt-1">{club.hours}</p>
              </div>
              <div>
                <p className="font-mono-label text-[0.6rem] text-champagne">Open Days</p>
                <p className="text-sm mt-1">{club.openDays.join(", ")}</p>
              </div>
              <div>
                <p className="font-mono-label text-[0.6rem] text-champagne">Dress Code</p>
                <p className="text-sm mt-1">{club.dressCode}</p>
              </div>
              <div>
                <p className="font-mono-label text-[0.6rem] text-champagne">Table Information</p>
                <p className="text-sm mt-1">{club.tableInfo}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-hairline">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
            <h2 className="font-display text-2xl mb-8">
              Related Clubs in {city?.name}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.06}>
                  <ClubCard club={c} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
