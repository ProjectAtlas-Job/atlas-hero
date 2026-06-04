import type { MetadataRoute } from "next";

import { siteUrl } from "@/components/marketing/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/workflow", "/login", "/register"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
