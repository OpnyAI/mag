import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { PageFrame } from "@/components/PageFrame";
import { ServiceMediaGallery } from "@/components/services/ServiceMediaGallery";
import {
  contentByLocale,
  getServiceBySlug,
  localizePath,
  serviceGalleryExcludedFiles,
  serviceGalleryFolders,
  serviceGallerySections,
  serviceGalleryVariant,
} from "@/lib/site-content";
import { Locale, ServiceSlug } from "@/lib/types";

interface ServicePageProps {
  locale: Locale;
  slug: string;
}

interface GallerySection {
  images: string[];
  variant: "projects" | "certificates";
  title?: string;
}

function getImagesFromFolders(
  folderNames: string[],
  excludedFileNames: string[] = [],
  includedFileNames?: string[],
): string[] {
  if (folderNames.length === 0) {
    return [];
  }
  const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
  const excludedFiles = new Set(excludedFileNames);
  const includeSet = includedFileNames ? new Set(includedFileNames) : null;
  const includeOrder = includedFileNames
    ? new Map(includedFileNames.map((fileName, index) => [fileName, index]))
    : null;

  const imagePaths = folderNames.flatMap((folderName) => {
    const absoluteFolder = path.join(
      process.cwd(),
      "public",
      "images",
      "services",
      folderName,
    );

    if (!existsSync(absoluteFolder)) {
      return [];
    }

    const fileNames = readdirSync(absoluteFolder).filter(
      (fileName) =>
        allowedExtensions.has(path.extname(fileName).toLowerCase()) &&
        !excludedFiles.has(fileName) &&
        (includeSet === null || includeSet.has(fileName)),
    );

    if (includeOrder) {
      fileNames.sort(
        (a, b) => (includeOrder.get(a) ?? Number.MAX_SAFE_INTEGER) - (includeOrder.get(b) ?? Number.MAX_SAFE_INTEGER),
      );
    } else {
      fileNames.sort((a, b) => a.localeCompare(b, "de", { numeric: true }));
    }

    return fileNames.map((fileName) => `/images/services/${folderName}/${fileName}`);
  });

  return Array.from(new Set(imagePaths));
}

function getGallerySections(locale: Locale, slug: ServiceSlug): GallerySection[] {
  const configuredSections = serviceGallerySections[slug];

  if (configuredSections && configuredSections.length > 0) {
    return configuredSections
      .map((section) => ({
        images: getImagesFromFolders(
          section.folders,
          section.excludedFiles,
          section.includeFiles,
        ),
        variant: section.variant,
        title: section.title?.[locale],
      }))
      .filter((section) => section.images.length > 0);
  }

  const folderNames = serviceGalleryFolders[slug];
  if (!folderNames || folderNames.length === 0) {
    return [];
  }

  return [
    {
      images: getImagesFromFolders(folderNames, serviceGalleryExcludedFiles[slug] ?? []),
      variant: serviceGalleryVariant[slug],
    },
  ].filter((section) => section.images.length > 0);
}

export function ServicePage({ locale, slug }: ServicePageProps) {
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  const content = contentByLocale[locale];

  const capabilitiesTitle =
    locale === "de"
      ? "Fähigkeiten & Prozess"
      : locale === "en"
        ? "Capabilities & Process"
        : "Capacités & Processus";

  const useCasesTitle =
    locale === "de"
      ? "Branchen & Anwendungsfälle"
      : locale === "en"
        ? "Industries & Use Cases"
        : "Secteurs & Cas d'usage";

  const ctaTitle =
    locale === "de"
      ? "Projektstart mit MAG"
      : locale === "en"
        ? "Project kick-off with MAG"
        : "Lancement de projet avec MAG";

  const ctaText =
    locale === "de"
      ? "Wir begleiten Ihr Projekt von der Konzeptphase über Engineering bis zur Serienproduktion und Logistik."
      : locale === "en"
        ? "We support your project from concept development and engineering to serial production and logistics."
        : "Nous accompagnons votre projet de la conception et de l'ingénierie jusqu'à la production série et la logistique.";

  const gallerySections = getGallerySections(locale, service.slug);
  const galleryAltTexts = service.galleryAlts?.map((item) => item[locale]) ?? [];
  const isLogisticsService = service.slug === "logistics-supply-chain";
  const heroImageClass =
    service.slug === "quality-certifications"
      ? "h-full w-full bg-white object-contain"
      : "h-full w-full object-cover";
  const heroSectionClass = isLogisticsService
    ? "surface-dark mx-auto grid w-full max-w-7xl gap-8 px-5 pb-14 pt-12 lg:grid-cols-[42%_58%] lg:items-center lg:px-8"
    : "surface-dark mx-auto grid w-full max-w-7xl gap-8 px-5 pb-14 pt-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8";

  return (
    <PageFrame locale={locale}>
      <section className={heroSectionClass}>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)]">
            {content.nav.services.toUpperCase()}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-on-dark)]">
            {service.title[locale]}
          </h1>
          <p className="section-muted mt-4 max-w-2xl">
            {service.intro[locale]}
          </p>
        </div>

        {isLogisticsService ? (
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src="/images/services/logistics/logistics_1.jpeg"
                alt={service.heroAlt[locale]}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="overflow-hidden border border-[var(--color-border)]">
            <Image
              src={service.image}
              alt={service.heroAlt[locale]}
              width={1400}
              height={900}
              className={heroImageClass}
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        )}
      </section>

      <section className="surface-light border-y border-[var(--color-border)] bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-14 md:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">{capabilitiesTitle}</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
              {service.capabilities[locale].map((item) => (
                <li
                  key={item}
                  className="border-l border-[var(--color-border)] pl-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">{useCasesTitle}</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
              {service.useCases[locale].map((item) => (
                <li
                  key={item}
                  className="border-l border-[var(--color-border)] pl-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {gallerySections.map((section, index) => (
        <ServiceMediaGallery
          key={`${service.slug}-${section.variant}-${index}`}
          locale={locale}
          serviceTitle={service.title[locale]}
          images={section.images}
          altTexts={galleryAltTexts}
          variant={section.variant}
          titleOverride={section.title}
        />
      ))}

      <section className="surface-light border-y border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-5 py-12 sm:flex-row sm:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">{ctaTitle}</h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{ctaText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={localizePath(locale, "/contact")}
              className="bg-[var(--color-text)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-accent)] focus-visible:outline-offset-2"
            >
              {content.ctaPrimary}
            </Link>
            <Link
              href={localizePath(locale, "/contact")}
              className="border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-text)] focus-visible:outline-offset-2"
            >
              {content.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
