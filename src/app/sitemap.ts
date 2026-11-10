import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/menu", "/about", "/gallery", "/contact", "/privacy", "/terms"].map((path) => ({
    url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : 0.7
  }));
}