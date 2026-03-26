import { MetadataRoute } from "next";
import { localizePath, serviceOrder } from "@/lib/site-content";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const locales = ["de", "en", "fr"] as const;
  const sharedPaths = ["/", "/company", "/services", "/contact"];
  const servicePaths = serviceOrder.map((slug) => `/services/${slug}`);

  const buildAlternates = (sharedPath: string): NonNullable<MetadataRoute.Sitemap[number]["alternates"]> => ({
    languages: {
      de: absoluteUrl(localizePath("de", sharedPath)),
      en: absoluteUrl(localizePath("en", sharedPath)),
      fr: absoluteUrl(localizePath("fr", sharedPath)),
    },
  });

  const sharedEntries: MetadataRoute.Sitemap = sharedPaths.flatMap((sharedPath) =>
    locales.map((locale) => {
      const localizedPath = localizePath(locale, sharedPath);
      const isHome = sharedPath === "/";

      return {
        url: absoluteUrl(localizedPath),
        lastModified: now,
        changeFrequency: isHome ? "weekly" : "monthly",
        priority: isHome ? 1 : 0.8,
        alternates: buildAlternates(sharedPath),
      };
    }),
  );

  const serviceEntries: MetadataRoute.Sitemap = servicePaths.flatMap((sharedPath) =>
    locales.map((locale) => ({
      url: absoluteUrl(localizePath(locale, sharedPath)),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: buildAlternates(sharedPath),
    })),
  );

  return [...sharedEntries, ...serviceEntries];
}
