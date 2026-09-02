"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cities } from "@/data/cities";
import { clubsByCityAndDay, days, type Day } from "@/data/clubs";
import { Button } from "@/components/ui/button";

const todayIndex = () => {
  const jsDay = new Date().getDay(); // 0 = Sunday
  return jsDay === 0 ? 6 : jsDay - 1;
};

export function CitySchedule() {
  const [citySlug, setCitySlug] = useState(cities[0].slug);
  const [dayIndex, setDayIndex] = useState(todayIndex());
  const day = days[dayIndex] as Day;

  const clubs = useMemo(
    () => clubsByCityAndDay(citySlug, day),
    [citySlug, day]
  );

  return (
    <div className="rounded-2xl border border-hairline bg-surface/50 overflow-hidden">
      {/* City tabs */}
      <div className="ticket-edge flex gap-1 overflow-x-auto scrollbar-none px-3 sm:px-5 pt-5">
        {cities.map((c) => (
          <button
            key={c.slug}
            onClick={() => setCitySlug(c.slug)}
            className={`relative shrink-0 px-4 py-2.5 font-display text-base sm:text-lg transition-colors ${
              citySlug === c.slug ? "text-champagne" : "text-ivory-dim hover:text-ivory"
            }`}
          >
            {c.name}
            {citySlug === c.slug && (
              <motion.div
                layoutId="city-underline"
                className="absolute left-2 right-2 -bottom-0.5 h-[2px] bg-champagne"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="gold-underline w-full" />

      {/* Day selector */}
      <div className="flex gap-2 overflow-x-auto scrollbar-none px-3 sm:px-5 py-4">
        {days.map((d, i) => (
          <button
            key={d}
            onClick={() => setDayIndex(i)}
            className={`shrink-0 rounded-full border px-4 py-2 font-mono-label text-[0.65rem] uppercase transition-all ${
              dayIndex === i
                ? "border-champagne bg-champagne text-obsidian"
                : "border-hairline text-ivory-dim hover:border-champagne/50 hover:text-ivory"
            }`}
          >
            {d.slice(0, 3)}
          </button>
        ))}
      </div>

      {/* Club cards */}
      <div className="px-3 sm:px-5 pb-6 min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${citySlug}-${day}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {clubs.length === 0 && (
              <div className="col-span-full text-center py-12 text-ivory-dim text-sm">
                No Halo Noir venues are open in{" "}
                <span className="text-champagne">
                  {cities.find((c) => c.slug === citySlug)?.name}
                </span>{" "}
                on {day}s yet. Try another night, or{" "}
                <Link href="/book-a-table" className="text-champagne underline underline-offset-4">
                  send a request
                </Link>{" "}
                and we&apos;ll find you a table.
              </div>
            )}
            {clubs.map((club) => (
              <div
                key={club.slug}
                className="ticket-edge flex items-center gap-4 rounded-lg border border-hairline bg-obsidian-2/60 p-3 sm:p-4 hover:border-champagne/40 transition-colors"
              >
                <div className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-md bg-gradient-to-br from-cherry/40 to-surface-2 border border-hairline" />
                <div className="flex-1 min-w-0">
                  <p className="font-display text-lg truncate">{club.name}</p>
                  <p className="text-xs text-ivory-dim">{club.genre}</p>
                  <p className="font-mono-label text-[0.6rem] text-champagne mt-1">
                    {club.hours}
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 shrink-0">
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/nightclubs/${club.slug}`}>View</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href={`/book-a-table?club=${club.slug}&city=${citySlug}`}>
                      Book
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
