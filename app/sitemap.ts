import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { properties } from "@/data/properties";
import { packages } from "@/data/packages";

const SITE_URL = "https://www.travelbag.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/destinations", "/stays", "/packages", "/gallery", "/about", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const destinationRoutes = destinations.map((d) => ({
    url: `${SITE_URL}/destinations/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const stayRoutes = properties.map((p) => ({
    url: `${SITE_URL}/stays/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const packageRoutes = packages.map((p) => ({
    url: `${SITE_URL}/packages/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...destinationRoutes, ...stayRoutes, ...packageRoutes];
}
