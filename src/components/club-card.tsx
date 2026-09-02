import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Club } from "@/data/clubs";
import { getCity } from "@/data/cities";

export function ClubCard({ club, showCity = false }: { club: Club; showCity?: boolean }) {
  const city = getCity(club.citySlug);
  return (
    <div className="group rounded-xl border border-hairline bg-surface/50 overflow-hidden hover:border-champagne/40 transition-colors">
      <div className="relative h-44 bg-gradient-to-br from-cherry/30 via-surface-2 to-obsidian-2 flex items-end p-4">
        <div className="absolute inset-0 grain-overlay" />
        {showCity && (
          <Badge className="absolute top-3 left-3">{city?.name}</Badge>
        )}
        <h3 className="font-display text-2xl relative z-10">{club.name}</h3>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <Badge variant="outline">{club.genre}</Badge>
          <span className="font-mono-label text-[0.65rem] text-champagne">
            {club.hours}
          </span>
        </div>
        <p className="text-sm text-ivory-dim leading-relaxed line-clamp-2">
          {club.description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <Button asChild size="sm" variant="outline" className="flex-1">
            <Link href={`/nightclubs/${club.slug}`}>View Club</Link>
          </Button>
          <Button asChild size="sm" className="flex-1">
            <Link href={`/book-a-table?club=${club.slug}&city=${club.citySlug}`}>
              Book a Table
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
