import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { guides, getGuide } from "@/data/guides";
import { getCity } from "@/data/cities";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.excerpt };
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const city = guide.citySlug ? getCity(guide.citySlug) : undefined;
  const more = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
        <Reveal>
          <div className="flex items-center gap-3">
            <Badge>{guide.category}</Badge>
            <span className="font-mono-label text-[0.65rem] text-ivory-dim">
              {guide.readTime}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl mt-4 text-balance">
            {guide.title}
          </h1>
          <p className="mt-4 text-ivory-dim text-lg leading-relaxed">{guide.excerpt}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 h-64 rounded-2xl border border-hairline bg-gradient-to-br from-cherry/25 via-surface-2 to-obsidian-2 relative overflow-hidden">
          <div className="absolute inset-0 grain-overlay" />
        </Reveal>

        <Reveal delay={0.16} className="mt-10 space-y-6">
          {guide.content.map((para, i) => (
            <p key={i} className="text-ivory-dim leading-relaxed">
              {para}
            </p>
          ))}
        </Reveal>

        {city && (
          <Reveal delay={0.22} className="mt-10 rounded-xl border border-champagne/30 bg-champagne/5 p-6 flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm">
              Ready to book a table in <span className="text-champagne">{city.name}</span>?
            </p>
            <Button asChild size="sm">
              <Link href={`/book-a-table?city=${city.slug}`}>
                Book a Table <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        )}
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <h2 className="font-display text-2xl mb-8">More from the Nightlife Guide</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {more.map((g) => (
              <Link
                key={g.slug}
                href={`/nightlife-guide/${g.slug}`}
                className="group block rounded-xl border border-hairline bg-surface/40 p-6 hover:border-champagne/40 transition-colors"
              >
                <Badge variant="outline">{g.category}</Badge>
                <h3 className="font-display text-lg mt-4 group-hover:text-champagne transition-colors">
                  {g.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
