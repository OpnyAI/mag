import { Metadata } from "next";
import { Locale } from "@/lib/types";
import { localizePath } from "@/lib/site-content";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://www.mag-group.example";

interface MetadataInput {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  image?: string;
  includeLanguageAlternates?: boolean;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) {
    return path;
  }
  return `${siteUrl}${path}`;
}

export function buildPageMetadata({
  locale,
  title,
  description,
  path,
  image,
  includeLanguageAlternates = true,
}: MetadataInput): Metadata {
  const canonicalPath = localizePath(locale, path);
  const imagePath = image ?? `/images/hero/hero-${locale}.jpg`;
  const languageAlternates = includeLanguageAlternates
    ? {
        de: localizePath("de", path),
        en: localizePath("en", path),
        fr: localizePath("fr", path),
      }
    : undefined;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalPath,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      locale,
      title,
      description,
      url: absoluteUrl(canonicalPath),
      siteName: "MAG - Metal Advancement Group",
      images: [
        {
          url: absoluteUrl(imagePath),
          width: 1600,
          height: 900,
          alt: title,
        },
      ],
    },
  };
}
