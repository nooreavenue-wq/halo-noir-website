"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitPromoter } from "@/lib/api";
import { Check, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cities } from "@/data/cities";

export function PromoterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await submitPromoter(payload as never);
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-champagne/40 bg-champagne/5 p-10 text-center"
      >
        <div className="mx-auto h-12 w-12 rounded-full bg-champagne text-obsidian flex items-center justify-center">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl mt-5">Application received</h3>
        <p className="text-ivory-dim mt-2 max-w-sm mx-auto">
          Thanks for your interest in working with Halo Noir. Our team will
          review your application and reach out if it&apos;s a fit.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" name="fullName" required placeholder="Jane Doe" />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" required placeholder="jane@email.com" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" required placeholder="+44 7000 000000" />
        </div>
        <div>
          <Label htmlFor="city">City You'd Work In</Label>
          <Select id="city" name="city" required defaultValue="">
            <option value="">Select a city</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="socialProfile">Social Media / Portfolio</Label>
        <Input id="socialProfile" name="socialProfile" placeholder="@instagram handle" />
      </div>

      <div>
        <Label htmlFor="experience">Relevant Experience</Label>
        <Textarea
          id="experience"
          name="experience"
          placeholder="Tell us about your nightlife or promotions experience."
        />
      </div>

      <div>
        <Label htmlFor="notes">Anything else?</Label>
        <Textarea id="notes" name="notes" placeholder="Availability, network size, preferred venues..." />
      </div>

      {status === "error" && (
        <p className="text-sm text-[#e8a2b0]">
          Something went wrong submitting your application. Please try again.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  );
}
