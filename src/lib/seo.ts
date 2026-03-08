import { Metadata } from "next";
import { Locale } from "@/lib/types";
import { localizePath } from "@/lib/site-content";

export const siteUrl = "https://www.mag-group.example";

interface MetadataInput {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  image?: string;
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
}: MetadataInput): Metadata {
  const canonicalPath = localizePath(locale, path);
  const imagePath = image ?? `/images/hero/hero-${locale}.jpg`;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalPath,
      languages: {
        de: localizePath("de", path),
        en: localizePath("en", path),
        fr: localizePath("fr", path),
      },
    },
    openGraph: {
      type: "website",
      locale,
      title,
      description,
      url: absoluteUrl(canonicalPath),
      siteName: "MAG - Metal Advanced Group",
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
