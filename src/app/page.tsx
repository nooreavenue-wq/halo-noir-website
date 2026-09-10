import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CitySchedule } from "@/components/city-schedule";
import { ClubCard } from "@/components/club-card";
import { cities } from "@/data/cities";
import { clubs } from "@/data/clubs";
import { guides } from "@/data/guides";
import { Badge } from "@/components/ui/badge";

const featuredClubs = clubs.filter((c) =>
  ["the-obsidian-room-london", "maison-rouge-paris", "azure-terrace-miami", "la-pinede-saint-tropez"].includes(c.slug)
);

const steps = [
  {
    mark: "Step One",
    title: "Select your city and venue",
    body: "Choose from London, Paris, Miami, Mykonos or Saint-Tropez, then browse which rooms are open on your night.",
  },
  {
    mark: "Step Two",
    title: "Submit your table request",
    body: "Tell us your date, guest count and budget. No account, no sign-up — just the details we need to secure your table.",
  },
  {
    mark: "Step Three",
    title: "Halo Noir confirms and manages it",
    body: "We liaise directly with the venue, confirm your table and minimum spend, and stay reachable through the night.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden  transition-all h-screen  bg-[url('/images/herosection.jpg')] bg-cover bg-center">
         {/* Black overlay */}
  <div className="absolute inset-0 bg-black/70 z-0" />

  {/* Grain overlay */}
  <div className="absolute inset-0 grain-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(111,18,38,0.18),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 sm:pt-24 pb-20  h-screen flex flex-col justify-center">
          <Reveal>
            <span className="eyebrow">International Table Bookings · By Request Only</span>
          </Reveal>
          <Reveal delay={0.08}>
           <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[1.05] mt-5 max-w-5xl text-balance">
  We lost our Fiverr profile.{" "}
  <span className="italic text-champagne">
    Contact us on WhatsApp (+880 1817-017901).
  </span>
</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-ivory-dim text-base sm:text-lg leading-relaxed">
              Halo Noir arranges VIP nightclub table bookings across five of the
              world&apos;s leading nightlife capitals. Select a city, see who&apos;s
              open tonight, and submit a request — we handle the rest.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" variant="outline" className="bg-champagne text-black hover:text-white">
                <Link href="/book-a-table">
                  Book a Table <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-green-600">
                <a href="https://wa.me/447000000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32} className="mt-16">
            <div className="gold-underline w-full mb-6" />
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cities/${c.slug}`}
                  className="font-mono-label text-xs uppercase text-ivory-dim hover:text-champagne transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* City + Weekly Schedule */}
      <section id="schedule" className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24">
        <SectionHeading
          eyebrow="This Week"
          title="Select a city. Choose a night. See who's open."
          description="Our schedule updates as venues confirm availability — pick a city and a day to see which Halo Noir rooms are running."
        />
        <div className="mt-10">
          <CitySchedule />
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24 border-t border-hairline">
        <SectionHeading eyebrow="The Process" title="Three steps to your table" align="center" />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="ticket-edge pt-6">
                <p className="font-mono-label text-[0.65rem] text-champagne">{s.mark}</p>
                <h3 className="font-display text-2xl mt-3">{s.title}</h3>
                <p className="mt-3 text-sm text-ivory-dim leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Cities */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24 border-t border-hairline">
        <SectionHeading
          eyebrow="Destinations"
          title="Our nightlife capitals"
          description="Five cities today, more to follow as Halo Noir expands into new destinations."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {cities.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <Link
                href={`/cities/${c.slug}`}
                className="group block rounded-xl border border-hairline overflow-hidden h-64 relative bg-gradient-to-b from-surface-2 to-obsidian-2 hover:border-champagne/40 transition-colors"
              >
                <div className="absolute inset-0 grain-overlay" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent">
                  <span className="font-mono-label text-[0.6rem] text-champagne">
                    {c.country}
                  </span>
                  <h3 className="font-display text-2xl mt-1">{c.name}</h3>
                  <p className="text-xs text-ivory-dim mt-1 line-clamp-1">{c.tagline}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Nightclubs */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24 border-t border-hairline">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <SectionHeading
            eyebrow="On the List"
            title="Featured nightclubs"
            description="A selection of the rooms Halo Noir places most often — each with its own dedicated page."
          />
          <Reveal>
            <Button asChild variant="ghost" className="mb-1">
              <Link href="/nightclubs">
                View all nightclubs <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredClubs.map((club, i) => (
            <Reveal key={club.slug} delay={i * 0.08}>
              <ClubCard club={club} showCity />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Members */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24">
          <div className="rounded-2xl border border-champagne/30 bg-gradient-to-br from-cherry/10 via-surface to-obsidian-2 p-8 sm:p-14 relative overflow-hidden">
            <div className="absolute inset-0 grain-overlay" />
            <div className="relative max-w-2xl">
              <Reveal>
                <Badge>Invitation Only</Badge>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display text-3xl sm:text-5xl mt-5 text-balance">
                  Halo Noir Members
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-4 text-ivory-dim leading-relaxed">
                  Priority tables, first access to sold-out nights, and a direct
                  line to our booking team across every Halo Noir city.
                  Membership is by application — every request is reviewed
                  personally before an invitation is extended.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <Button asChild size="lg" className="mt-8">
                  <Link href="/members">
                    Apply for Membership <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Nightlife Guide */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24 border-t border-hairline">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <SectionHeading
            eyebrow="Read"
            title="The Nightlife Guide"
            description="Dress codes, etiquette and city-by-city advice for booking your table with confidence."
          />
          <Reveal>
            <Button asChild variant="ghost" className="mb-1">
              <Link href="/nightlife-guide">
                Browse the guide <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {guides.slice(0, 3).map((g, i) => (
            <Reveal key={g.slug} delay={i * 0.08}>
              <Link
                href={`/nightlife-guide/${g.slug}`}
                className="group block rounded-xl border border-hairline bg-surface/40 p-6 h-full hover:border-champagne/40 transition-colors"
              >
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
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Venue Hire */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24 border-t border-hairline">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="eyebrow">Private &amp; Corporate</span>
            <h2 className="font-display text-3xl sm:text-4xl mt-3 text-balance">
              Full venue hire, for the night you don&apos;t want to share.
            </h2>
            <p className="mt-4 text-ivory-dim leading-relaxed max-w-lg">
              Corporate events, private parties and milestone celebrations —
              Halo Noir arranges exclusive venue hire across our partner
              rooms, handled with the same discretion as a single table.
            </p>
            <Button asChild size="lg" className="mt-7">
              <Link href="/venue-hire">
                Enquire About Venue Hire <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-72 rounded-2xl border border-hairline bg-gradient-to-br from-cherry/20 via-surface-2 to-obsidian-2 relative overflow-hidden">
              <div className="absolute inset-0 grain-overlay" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-20 sm:py-28 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl text-balance">
              Your table is one request away.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ivory-dim max-w-lg mx-auto">
              Tell us your city, your night and your guest count — Halo Noir
              will confirm the room and the reservation.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/book-a-table">Book a Table</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://wa.me/447000000000" target="_blank" rel="noopener noreferrer">
                  Message on WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
