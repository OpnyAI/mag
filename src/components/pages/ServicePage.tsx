import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { PageFrame } from "@/components/PageFrame";
import {
  contentByLocale,
  getServiceBySlug,
  localizePath,
  serviceGalleryFolders,
} from "@/lib/site-content";
import { Locale, ServiceSlug } from "@/lib/types";

interface ServicePageProps {
  locale: Locale;
  slug: string;
}

function getGalleryImages(slug: ServiceSlug): string[] {
  const folderNames = serviceGalleryFolders[slug];
  if (!folderNames || folderNames.length === 0) {
    return [];
  }

  const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

  return folderNames.flatMap((folderName) => {
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

    const fileNames = readdirSync(absoluteFolder).filter((fileName) =>
      allowedExtensions.has(path.extname(fileName).toLowerCase()),
    );

    fileNames.sort((a, b) => a.localeCompare(b, "de", { numeric: true }));

    return fileNames.map((fileName) => `/images/services/${folderName}/${fileName}`);
  });
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

  const galleryTitle =
    locale === "de"
      ? "Projektbeispiele"
      : locale === "en"
        ? "Project Examples"
        : "Exemples de projets";

  const galleryImages = getGalleryImages(service.slug);

  return (
    <PageFrame locale={locale}>
      <section className="surface-dark mx-auto grid w-full max-w-7xl gap-8 px-5 pb-14 pt-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8">
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

        <div className="overflow-hidden border border-[var(--color-border)]">
          <Image
            src={service.image}
            alt={service.title[locale]}
            width={1400}
            height={900}
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
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

      {galleryImages.length > 0 ? (
        <section className="surface-light border-y border-[var(--color-border)] bg-white">
          <div className="mx-auto w-full max-w-7xl px-5 py-14 lg:px-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">{galleryTitle}</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {galleryImages.map((imagePath, index) => (
                <div
                  key={imagePath}
                  className="overflow-hidden border border-[var(--color-border)] bg-[var(--color-panel)]"
                >
                  <Image
                    src={imagePath}
                    alt={`${service.title[locale]} ${index + 1}`}
                    width={1400}
                    height={1000}
                    className="aspect-[4/3] w-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="surface-light border-y border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-5 py-12 sm:flex-row sm:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">{ctaTitle}</h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{ctaText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={localizePath(locale, "/contact")}
              className="rounded-sm bg-[var(--color-text)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-accent)] focus-visible:outline-offset-2"
            >
              {content.ctaPrimary}
            </Link>
            <a
              href="mailto:info@mag-group.example"
              className="rounded-sm border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-text)] focus-visible:outline-offset-2"
            >
              {content.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
