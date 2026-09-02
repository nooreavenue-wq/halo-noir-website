"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/nightclubs", label: "Nightclubs" },
  { href: "/members", label: "Members" },
  { href: "/nightlife-guide", label: "Nightlife Guide" },
  { href: "/venue-hire", label: "Venue Hire" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-[#701705]/40 backdrop-blur-md border-b border-hairline"
          : "bg-[#701705]/65 border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-18 flex items-center justify-between py-4">
        <Link href="/" className="flex items-baseline gap-2 shrink-0">
          <span className="font-display text-xl sm:text-2xl tracking-wide">
            <Image src="/images/thehalonoirLogo.png" alt="Halo Noir" width={1000} height={1000} priority className="!w-50" />
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-mono-label text-[0.7rem] uppercase text-ivory-dim hover:text-champagne transition-colors",
                pathname === item.href && "text-champagne"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild size="sm" variant="outline">
            <Link href="/join-the-team">Join the Team</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/book-a-table">Book a Table</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-ivory p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-obsidian/97 backdrop-blur-md border-b border-hairline"
          >
            <div className="px-5 sm:px-8 py-6 flex flex-col gap-5">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-mono-label text-sm uppercase text-ivory-dim hover:text-champagne"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-3 border-t border-hairline">
                <Button asChild variant="outline">
                  <Link href="/join-the-team">Join the Team</Link>
                </Button>
                <Button asChild>
                  <Link href="/book-a-table">Book a Table</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
