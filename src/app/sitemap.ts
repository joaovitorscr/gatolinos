import type { MetadataRoute } from "next";

import { catsForAdoption } from "@/content/gatolinos-content";
import { absoluteUrl } from "@/lib/seo";

const lastModified = new Date("2026-05-10");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl("/gatolinos/hero-art.png"), absoluteUrl("/gatolinos/logo.png")],
    },
    {
      url: absoluteUrl("/gatos"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: Array.from(new Set(catsForAdoption.map((cat) => absoluteUrl(cat.image)))),
    },
    ...catsForAdoption.map((cat) => ({
      url: absoluteUrl(`/gatos/${cat.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      images: [absoluteUrl(cat.image)],
    })),
  ];
}
