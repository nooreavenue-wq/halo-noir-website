import Link from "next/link";
import { LogoutButton } from "@/components/admin/logout-button";
import { AdminGuard } from "@/components/admin/admin-guard";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-obsidian">
      <header className="border-b border-hairline sticky top-0 z-40 bg-obsidian/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link href="/admin" className="font-display text-xl">
            HALO <span className="text-champagne">NOIR</span>{" "}
            <span className="font-mono-label text-[0.6rem] text-ivory-dim align-middle">ADMIN</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-mono-label text-[0.65rem] uppercase text-ivory-dim hover:text-champagne"
            >
              View Site
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-5 sm:px-8 py-10">
        <AdminGuard>{children}</AdminGuard>
      </main>
    </div>
  );
}

