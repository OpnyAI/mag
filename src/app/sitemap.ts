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

  return [...basePages, ...servicePages].map((path) => {
    const isHome = path === "/" || path === "/en" || path === "/fr";
    const isServiceDetail = path.includes("/services/") && path !== "/services" && path !== "/en/services" && path !== "/fr/services";

    return {
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: isHome ? "weekly" : isServiceDetail ? "monthly" : "monthly",
      priority: isHome ? 1 : isServiceDetail ? 0.7 : 0.8,
    };
  });
}
