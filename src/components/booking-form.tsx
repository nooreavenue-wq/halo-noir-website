"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { submitBooking } from "@/lib/api";
import { Check, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cities } from "@/data/cities";
import { clubs } from "@/data/clubs";

export function BookingForm() {
  const params = useSearchParams();
  const [city, setCity] = useState(params.get("city") || "");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const filteredClubs = city ? clubs.filter((c) => c.citySlug === city) : clubs;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await submitBooking(payload as never);
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
        <h3 className="font-display text-2xl mt-5">Request received</h3>
        <p className="text-ivory-dim mt-2 max-w-sm mx-auto">
          Your table request has been sent to our bookings team. We&apos;ll be
          in touch shortly to confirm availability and minimum spend.
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
          <Label htmlFor="preferredContact">Preferred Contact Method</Label>
          <Select id="preferredContact" name="preferredContact" defaultValue="WhatsApp" required>
            <option>WhatsApp</option>
            <option>Phone Call</option>
            <option>Email</option>
          </Select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="city">City</Label>
          <Select
            id="city"
            name="city"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select a city</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="nightclub">Nightclub</Label>
          <Select
            id="nightclub"
            name="nightclub"
            required
            defaultValue={params.get("club") || ""}
          >
            <option value="">Select a nightclub</option>
            {filteredClubs.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="bookingDate">Booking Date</Label>
          <Input id="bookingDate" name="bookingDate" type="date" required />
        </div>
        <div>
          <Label htmlFor="guests">Number of Guests</Label>
          <Input id="guests" name="guests" type="number" min={1} required placeholder="8" />
        </div>
        <div>
          <Label htmlFor="budget">Estimated Budget</Label>
          <Input id="budget" name="budget" placeholder="£1,500" />
        </div>
      </div>

      <div>
        <Label htmlFor="occasion">Occasion</Label>
        <Input id="occasion" name="occasion" placeholder="Birthday, celebration, corporate..." />
      </div>

      <div>
        <Label htmlFor="notes">Additional Requirements</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Anything else we should know — seating preference, dietary notes, arrival time..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-[#e8a2b0]">
          Something went wrong sending your request. Please try again, or
          message us directly on WhatsApp.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending Request...
          </>
        ) : (
          "Submit Booking Request"
        )}
      </Button>
    </form>
  );
}
