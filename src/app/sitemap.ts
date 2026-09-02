import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { clubs } from "@/data/clubs";
import { guides } from "@/data/guides";

const BASE_URL = "https://thehalonoir.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/nightclubs",
    "/book-a-table",
    "/members",
    "/nightlife-guide",
    "/venue-hire",
    "/join-the-team",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const cityRoutes = cities.map((c) => ({
    url: `${BASE_URL}/cities/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const clubRoutes = clubs.map((c) => ({
    url: `${BASE_URL}/nightclubs/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const guideRoutes = guides.map((g) => ({
    url: `${BASE_URL}/nightlife-guide/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...cityRoutes, ...clubRoutes, ...guideRoutes];
}
