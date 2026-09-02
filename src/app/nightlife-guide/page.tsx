import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Nightlife Guide",
  description:
    "Dress codes, club etiquette, city guides and table-booking advice from Halo Noir — covering London, Paris, Miami, Mykonos and Saint-Tropez.",
};

export default function NightlifeGuidePage() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
      <Reveal>
        <span className="eyebrow">Read</span>
        <h1 className="font-display text-4xl sm:text-5xl mt-3 text-balance">
          The Nightlife Guide
        </h1>
        <p className="mt-4 text-ivory-dim leading-relaxed max-w-xl">
          Dress codes, etiquette, booking advice and city-by-city
          recommendations — everything you need to book your table with
          confidence.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {guides.map((g, i) => (
          <Reveal key={g.slug} delay={i * 0.05}>
            <Link
              href={`/nightlife-guide/${g.slug}`}
              className="group block rounded-xl border border-hairline bg-surface/40 overflow-hidden h-full hover:border-champagne/40 transition-colors"
            >
              <div className="h-36 bg-gradient-to-br from-cherry/20 via-surface-2 to-obsidian-2 relative">
                <div className="absolute inset-0 grain-overlay" />
              </div>
              <div className="p-6">
                <Badge variant="outline">{g.category}</Badge>
                <h3 className="font-display text-xl mt-4 group-hover:text-champagne transition-colors">
                  {g.title}
                </h3>
                <p className="text-sm text-ivory-dim mt-2 leading-relaxed line-clamp-3">
                  {g.excerpt}
                </p>
                <p className="font-mono-label text-[0.6rem] text-champagne mt-4">
                  {g.readTime}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
