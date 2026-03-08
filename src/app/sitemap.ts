import { MetadataRoute } from "next";
import { serviceOrder } from "@/lib/site-content";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const basePages = [
    "/",
    "/company",
    "/services",
    "/contact",
    "/impressum",
    "/datenschutz",
    "/en",
    "/en/company",
    "/en/services",
    "/en/contact",
    "/fr",
    "/fr/company",
    "/fr/services",
    "/fr/contact",
  ];

  const servicePages = serviceOrder.flatMap((slug) => [
    `/services/${slug}`,
    `/en/services/${slug}`,
    `/fr/services/${slug}`,
  ]);

  return [...basePages, ...servicePages].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
