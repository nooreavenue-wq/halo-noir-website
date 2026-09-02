"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { demoLogout } from "@/lib/demo-auth";

export function LogoutButton() {
  const router = useRouter();
  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => {
        demoLogout();
        router.push("/admin/login");
        router.refresh();
      }}
    >
      <LogOut className="h-3.5 w-3.5" /> Log Out
    </Button>
  );
}
