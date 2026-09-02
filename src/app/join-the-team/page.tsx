import type { Metadata } from "next";
import { PromoterForm } from "@/components/promoter-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Join the Team",
  description:
    "Apply to work with Halo Noir as a promoter or nightlife professional across London, Paris, Miami, Mykonos and Saint-Tropez.",
};

export default function JoinTheTeamPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
      <Reveal>
        <span className="eyebrow">Careers &amp; Promoters</span>
        <h1 className="font-display text-4xl sm:text-5xl mt-3 text-balance">
          Join the Team
        </h1>
        <p className="mt-4 text-ivory-dim leading-relaxed max-w-xl">
          Halo Noir works with promoters and nightlife professionals across
          every city we operate in. If you have a network and want to work
          with us, tell us a little about yourself below.
        </p>
      </Reveal>

      <div className="mt-10 rounded-2xl border border-hairline bg-surface/40 p-6 sm:p-10">
        <PromoterForm />
      </div>
    </section>
  );
}
