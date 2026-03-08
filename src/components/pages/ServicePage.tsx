import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/PageFrame";
import {
  contentByLocale,
  getServiceBySlug,
  localizePath,
} from "@/lib/site-content";
import { Locale } from "@/lib/types";

interface ServicePageProps {
  locale: Locale;
  slug: string;
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

  const galleryTitle =
    locale === "de"
      ? "Galerie (Platzhalter)"
      : locale === "en"
        ? "Gallery (placeholder)"
        : "Galerie (placeholder)";

  const ctaTitle =
    locale === "de"
      ? "Projektstart mit MAG"
      : locale === "en"
        ? "Project kick-off with MAG"
        : "Lancement de projet avec MAG";

  const ctaText =
    locale === "de"
      ? "Erhalten Sie eine direkte Rückmeldung zu Machbarkeit, Timing und industrieller Skalierung."
      : locale === "en"
        ? "Get direct feedback on feasibility, timing and industrial scaling."
        : "Obtenez un retour direct sur la faisabilité, le planning et l'industrialisation.";

  return (
    <PageFrame locale={locale}>
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 pb-14 pt-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)]">
            {content.nav.services.toUpperCase()}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            {service.title[locale]}
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--color-muted)]">
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

      <section className="border-y border-[var(--color-border)] bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-14 md:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold">{capabilitiesTitle}</h2>
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
            <h2 className="text-2xl font-semibold">{useCasesTitle}</h2>
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

      <section className="mx-auto w-full max-w-7xl px-5 py-14 lg:px-8">
        <h2 className="text-2xl font-semibold">{galleryTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((imageNumber) => (
            <div
              key={imageNumber}
              className="overflow-hidden border border-[var(--color-border)] bg-[var(--color-panel)]"
            >
              <Image
                src={service.image}
                alt={`${service.title[locale]} ${imageNumber}`}
                width={1200}
                height={800}
                className="aspect-[4/3] w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-5 py-12 sm:flex-row sm:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold">{ctaTitle}</h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{ctaText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={localizePath(locale, "/contact")}
              className="rounded-sm bg-[var(--color-text)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent)]"
            >
              {content.ctaPrimary}
            </Link>
            <a
              href="mailto:info@mag-group.example"
              className="rounded-sm border border-[var(--color-border)] px-5 py-3 text-sm font-medium hover:border-[var(--color-accent)]"
            >
              {content.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
