import type { Metadata } from "next";
import { Fraunces, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import ScrollContext from "@/context/ScrollContext";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thehalonoir.com"),
  title: {
    default: "Halo Noir | International VIP Nightclub Table Bookings",
    template: "%s | Halo Noir",
  },
  description:
    "Halo Noir arranges VIP nightclub table bookings in London, Paris, Miami, Mykonos and Saint-Tropez. Select your city, choose your night, and book the table.",
  openGraph: {
    title: "Halo Noir | International VIP Nightclub Table Bookings",
    description:
      "Book VIP nightclub tables across London, Paris, Miami, Mykonos and Saint-Tropez.",
    url: "https://thehalonoir.com",
    siteName: "Halo Noir",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${spaceMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <ScrollContext>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
        </ScrollContext>
    
      </body>
    </html>
  );
}
