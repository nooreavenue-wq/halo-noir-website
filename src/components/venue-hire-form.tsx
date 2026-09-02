"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitVenueHire } from "@/lib/api";
import { Check, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cities } from "@/data/cities";

export function VenueHireForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await submitVenueHire(payload as never);
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
        <h3 className="font-display text-2xl mt-5">Enquiry received</h3>
        <p className="text-ivory-dim mt-2 max-w-sm mx-auto">
          Thank you — our events team will be in touch to discuss your venue
          hire enquiry.
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
          <Label htmlFor="city">City</Label>
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

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="eventType">Event Type</Label>
          <Select id="eventType" name="eventType" required defaultValue="">
            <option value="">Select event type</option>
            <option>Corporate Event</option>
            <option>Private Party</option>
            <option>Birthday Celebration</option>
            <option>Full Venue Hire</option>
            <option>Other</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="eventDate">Preferred Date</Label>
          <Input id="eventDate" name="eventDate" type="date" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="guestCount">Estimated Guest Count</Label>
          <Input id="guestCount" name="guestCount" placeholder="50" />
        </div>
        <div>
          <Label htmlFor="budget">Estimated Budget</Label>
          <Input id="budget" name="budget" placeholder="£10,000+" />
        </div>
      </div>

      <div>
        <Label htmlFor="notes">Tell us about the event</Label>
        <Textarea id="notes" name="notes" placeholder="Event details, venue preferences, timings..." />
      </div>

      {status === "error" && (
        <p className="text-sm text-[#e8a2b0]">
          Something went wrong submitting your enquiry. Please try again.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Submit Enquiry"
        )}
      </Button>
    </form>
  );
}
