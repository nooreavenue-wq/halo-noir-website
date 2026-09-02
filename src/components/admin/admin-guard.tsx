"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";
import { isDemoLoggedIn } from "@/lib/demo-auth";

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";
  const [checked, setChecked] = useState(false);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (isLoginPage) {
      setChecked(true);
      setAllowed(true);
      return;
    }
    if (isDemoLoggedIn()) {
      setAllowed(true);
    } else {
      router.replace("/admin/login");
    }
    setChecked(true);
  }, [router, isLoginPage]);

  if (!checked || !allowed) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="h-5 w-5 animate-spin text-champagne" />
      </div>
    );
  }

  return <>{children}</>;
}
