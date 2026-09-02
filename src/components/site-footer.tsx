import Link from "next/link";
import { cities } from "@/data/cities";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline mt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <span className="font-display text-2xl">
              HALO <span className="text-champagne">NOIR</span>
            </span>
            <p className="mt-4 text-sm text-ivory-dim max-w-xs leading-relaxed">
              International VIP nightclub table bookings across the world&apos;s
              most selective rooms — London, Paris, Miami, Mykonos and
              Saint-Tropez.
            </p>
            <div className="mt-6 space-y-1 font-mono-label text-[0.7rem] text-ivory-dim">
              <p>
                <a href="mailto:info@thehalonoir.com" className="hover:text-champagne">
                  info@thehalonoir.com
                </a>
              </p>
              <p>
                <a href="mailto:bookings@thehalonoir.com" className="hover:text-champagne">
                  bookings@thehalonoir.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Cities</p>
            <ul className="space-y-2.5 text-sm text-ivory-dim">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/cities/${c.slug}`} className="hover:text-champagne">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Platform</p>
            <ul className="space-y-2.5 text-sm text-ivory-dim">
              <li><Link href="/nightclubs" className="hover:text-champagne">Nightclubs</Link></li>
              <li><Link href="/book-a-table" className="hover:text-champagne">Book a Table</Link></li>
              <li><Link href="/members" className="hover:text-champagne">Members</Link></li>
              <li><Link href="/venue-hire" className="hover:text-champagne">Venue Hire</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Company</p>
            <ul className="space-y-2.5 text-sm text-ivory-dim">
              <li><Link href="/about" className="hover:text-champagne">About</Link></li>
              <li><Link href="/nightlife-guide" className="hover:text-champagne">Nightlife Guide</Link></li>
              <li><Link href="/join-the-team" className="hover:text-champagne">Join the Team</Link></li>
              <li><Link href="/admin/login" className="hover:text-champagne">Admin</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-hairline flex flex-col sm:flex-row justify-between gap-4 text-xs text-ivory-dim/70">
          <p>© {new Date().getFullYear()} Halo Noir. All rights reserved.</p>
          <p>Table bookings are subject to venue availability, minimum spend and dress code.</p>
        </div>
      </div>
    </footer>
  );
}
