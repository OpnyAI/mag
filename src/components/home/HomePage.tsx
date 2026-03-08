import Image from "next/image";
import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";
import {
  contentByLocale,
  localizePath,
  servicePath,
  services,
} from "@/lib/site-content";
import { safeImage } from "@/lib/images";
import { Locale } from "@/lib/types";

interface HomePageProps {
  locale: Locale;
}

const detailsLabelByLocale: Record<Locale, string> = {
  de: "Details ansehen",
  en: "View details",
  fr: "Voir les détails",
};

const qualityLinkByLocale: Record<Locale, string> = {
  de: "Mehr zu Qualität und Zertifizierungen",
  en: "More about quality and certifications",
  fr: "Plus sur la qualité et les certifications",
};

const qualityStripTextByLocale: Record<Locale, string> = {
  de: "ISO 9001, ISO 14001, ISO 45001, ISO 3834, EN 1090, EN 15085, DIN EN 10204, ISO 9712 sowie PED / AD 2000 bilden den Rahmen unserer qualitätsgesicherten Produktion.",
  en: "ISO 9001, ISO 14001, ISO 45001, ISO 3834, EN 1090, EN 15085, DIN EN 10204, ISO 9712 and PED / AD 2000 define our quality-assured production framework.",
  fr: "ISO 9001, ISO 14001, ISO 45001, ISO 3834, EN 1090, EN 15085, DIN EN 10204, ISO 9712 et PED / AD 2000 structurent notre production orientée qualité.",
};

const ctaTitleByLocale: Record<Locale, string> = {
  de: "Bereit für die nächste industrielle Lösung?",
  en: "Ready for your next industrial solution?",
  fr: "Prêt pour votre prochaine solution industrielle ?",
};

const ctaTextByLocale: Record<Locale, string> = {
  de: "Wir reagieren kurzfristig auf neue Anfragen und begleiten Sie bis zur Serienreife.",
  en: "We respond quickly to new requests and support your team through serial readiness.",
  fr: "Nous répondons rapidement aux nouvelles demandes et vous accompagnons jusqu'à la production série.",
};

const companyImageAltByLocale: Record<Locale, string> = {
  de: "MAG Fertigungsumgebung",
  en: "MAG production environment",
  fr: "Environnement de production MAG",
};

export function HomePage({ locale }: HomePageProps) {
  const content = contentByLocale[locale];

  const heroSrc = safeImage(
    `/images/hero/hero-${locale}.jpg`,
    "/images/placeholders/placeholder-16x9.jpg",
  );

  const companyTeaserSrc = safeImage(
    "/images/company/company-1.jpg",
    "/images/placeholders/placeholder-4x3.jpg",
  );

  return (
    <PageFrame locale={locale}>
      <section className="relative isolate h-auto min-h-[calc(100svh-72px)] w-full overflow-hidden md:h-[90vh] md:min-h-[680px]">
        <Image
          src={heroSrc}
          alt={companyImageAltByLocale[locale]}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.64)_35%,rgba(0,0,0,0.36)_58%,rgba(0,0,0,0.12)_78%,rgba(0,0,0,0)_100%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.45)_30%,rgba(0,0,0,0.15)_55%,rgba(0,0,0,0)_75%)]" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-start px-5 pb-10 pt-[calc(6rem+env(safe-area-inset-top))] md:items-end md:pb-[120px] md:pt-[160px] lg:px-8">
          <div className="max-w-[700px] text-white">
            <p className="text-xs font-semibold tracking-[0.2em] text-white/85">
              {content.tagline.toUpperCase()}
            </p>
            <h1 className="mt-4 max-w-[20ch] text-[clamp(34px,8vw,44px)] font-bold leading-[1.1] tracking-tight sm:max-w-[15ch] md:text-[clamp(42px,5vw,64px)]">
              {content.heroTitle}
            </h1>
            <p className="mt-6 max-w-[520px] text-[18px] leading-relaxed text-white/90">
              {content.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-4">
              <Link
                href={localizePath(locale, "/contact")}
                className="border border-white bg-white px-5 py-3 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
              >
                {content.ctaPrimary}
              </Link>
              <a
                href="tel:+497121555000"
                className="border border-white/60 px-5 py-3 text-sm font-medium text-white transition hover:border-white"
              >
                {content.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-7 sm:grid-cols-3 lg:px-8">
          {content.stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-[var(--color-border)] bg-white px-5 py-5"
            >
              <p className="text-2xl font-semibold text-[var(--color-text)]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <h2 className="max-w-[28ch] text-3xl font-semibold tracking-tight lg:text-4xl">
          {content.homeIntroTitle}
        </h2>
        <p className="mt-4 max-w-[66ch] text-base leading-relaxed text-[var(--color-muted)]">
          {content.homeIntroText}
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={servicePath(locale, service.slug)}
              className="group flex h-full flex-col border border-[var(--color-border)] bg-white p-6 transition hover:border-[var(--color-accent)] hover:shadow-[0_10px_30px_rgba(10,19,31,0.06)]"
            >
              <p className="text-lg font-semibold leading-tight text-[var(--color-text)]">
                {service.title[locale]}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {service.short[locale]}
              </p>
              <span className="mt-auto pt-6 text-sm font-medium text-[var(--color-accent)]">
                {detailsLabelByLocale[locale]}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
          <h2 className="text-2xl font-semibold lg:text-3xl">{content.nav.quality}</h2>
          <p className="mt-3 max-w-[72ch] text-base leading-relaxed text-[var(--color-muted)]">
            {qualityStripTextByLocale[locale]}
          </p>
          <Link
            href={servicePath(locale, "quality-certifications")}
            className="mt-5 inline-block text-sm font-medium text-[var(--color-accent)]"
          >
            {qualityLinkByLocale[locale]}
          </Link>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
        <div>
          <h2 className="max-w-[20ch] text-3xl font-semibold tracking-tight lg:text-4xl">
            {content.nav.company}
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-[var(--color-muted)]">
            {content.company.intro}
          </p>
          <Link
            href={localizePath(locale, "/company")}
            className="mt-6 inline-block text-sm font-medium text-[var(--color-accent)]"
          >
            {content.nav.company}
          </Link>
        </div>
        <div className="border border-[var(--color-border)] bg-[var(--color-panel)]">
          <Image
            src={companyTeaserSrc}
            alt={companyImageAltByLocale[locale]}
            width={1200}
            height={900}
            className="aspect-[4/3] w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8 lg:py-14">
          <div>
            <h2 className="max-w-[24ch] text-2xl font-semibold tracking-tight lg:text-3xl">
              {ctaTitleByLocale[locale]}
            </h2>
            <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-[var(--color-muted)] lg:text-base">
              {ctaTextByLocale[locale]}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href={localizePath(locale, "/contact")}
              className="border border-[var(--color-text)] bg-[var(--color-text)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)]"
            >
              {content.ctaPrimary}
            </Link>
            <a
              href="mailto:info@mag-group.example"
              className="border border-[var(--color-border)] px-5 py-3 text-sm font-medium transition hover:border-[var(--color-accent)]"
            >
              {content.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
