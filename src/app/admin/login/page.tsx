"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { demoLogin, DEMO_ADMIN_PASSWORD } from "@/lib/demo-auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulated delay so this matches how a real login call would feel.
    await new Promise((r) => setTimeout(r, 500));

    if (demoLogin(password)) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Incorrect password");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-5">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="mx-auto h-12 w-12 rounded-full bg-champagne/15 border border-champagne/40 flex items-center justify-center">
            <Lock className="h-5 w-5 text-champagne" />
          </div>
          <h1 className="font-display text-3xl mt-5">Admin Login</h1>
          <p className="text-sm text-ivory-dim mt-2">
            Halo Noir team access only.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-hairline bg-surface/40 p-6 space-y-5">
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoFocus
            />
          </div>
          {error && <p className="text-sm text-[#e8a2b0]">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign In"}
          </Button>
        </form>

        <div className="mt-6 rounded-xl border border-hairline bg-surface/20 p-4">
          <p className="font-mono-label text-[0.6rem] text-champagne mb-1">
            Demo Mode
          </p>
          <p className="text-xs text-ivory-dim leading-relaxed">
            This is a frontend-only preview with no backend connected yet.
            Password: <span className="text-ivory">{DEMO_ADMIN_PASSWORD}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
