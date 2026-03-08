import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";
import { contentByLocale, servicePath, services } from "@/lib/site-content";
import { Locale } from "@/lib/types";

interface ServicesOverviewPageProps {
  locale: Locale;
}

const detailsLabelByLocale: Record<Locale, string> = {
  de: "Details ansehen",
  en: "View details",
  fr: "Voir les détails",
};

export function ServicesOverviewPage({ locale }: ServicesOverviewPageProps) {
  const content = contentByLocale[locale];

  return (
    <PageFrame locale={locale}>
      <section className="surface-dark mx-auto w-full max-w-7xl px-5 pb-14 pt-12 lg:px-8 lg:pb-16 lg:pt-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)]">
          {content.nav.services.toUpperCase()}
        </p>
        <h1 className="mt-4 max-w-[24ch] text-4xl font-semibold tracking-tight text-[var(--color-on-dark)] lg:text-5xl">
          {content.nav.services}
        </h1>
        <p className="section-muted mt-5 max-w-[72ch] text-base leading-relaxed">
          {content.homeIntroText}
        </p>
      </section>

      <section className="surface-light border-y border-[var(--color-border)] bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={servicePath(locale, service.slug)}
                className="group flex h-full flex-col border border-[var(--color-border)] bg-white p-6 transition hover:border-[var(--color-accent)] hover:shadow-[0_10px_30px_rgba(24,28,32,0.12)]"
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
        </div>
      </section>
    </PageFrame>
  );
}
