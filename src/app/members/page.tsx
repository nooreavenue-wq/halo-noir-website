import type { Metadata } from "next";
import { MemberForm } from "@/components/member-form";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Apply for Halo Noir Membership — priority tables, first access to sold-out nights and a direct line to our booking team.",
};

const benefits = [
  "Priority table placement on our busiest nights",
  "First access to sold-out venues and last-minute availability",
  "A dedicated contact across every Halo Noir city",
  "Early notice as new cities and clubs are added",
];

export default function MembersPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-14">
        <div>
          <Reveal>
            <Badge>Invitation Only</Badge>
            <h1 className="font-display text-4xl sm:text-5xl mt-4 text-balance">
              Halo Noir Members
            </h1>
            <p className="mt-4 text-ivory-dim leading-relaxed max-w-md">
              Membership is a small, invitation-only programme for guests who
              book with us regularly. Applications are reviewed personally by
              our team — there&apos;s no automatic approval, and no cost to apply.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 space-y-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-champagne/15 border border-champagne/40 flex items-center justify-center">
                  <Check className="h-3 w-3 text-champagne" />
                </div>
                <p className="text-sm text-ivory-dim">{b}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.2} className="mt-10 rounded-xl border border-hairline bg-surface/40 p-5">
            <p className="font-mono-label text-[0.65rem] text-champagne mb-2">
              What Happens Next
            </p>
            <p className="text-sm text-ivory-dim leading-relaxed">
              Our team reviews every application against upcoming availability
              across our five cities. If it&apos;s a fit, you&apos;ll receive an
              invitation with next steps — there&apos;s no fixed timeline, but
              most applicants hear back within two weeks.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-hairline bg-surface/40 p-6 sm:p-10">
            <MemberForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
