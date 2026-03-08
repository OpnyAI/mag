import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";
import {
  contentByLocale,
  email,
  localizePath,
  phone,
} from "@/lib/site-content";
import { Locale } from "@/lib/types";

interface ContactPageProps {
  locale: Locale;
}

export function ContactPage({ locale }: ContactPageProps) {
  const content = contentByLocale[locale];
  const phoneLabel =
    locale === "de" ? "Telefon" : locale === "en" ? "Phone" : "Téléphone";

  return (
    <PageFrame locale={locale}>
      <section className="mx-auto w-full max-w-4xl px-5 pb-16 pt-12 lg:px-8 lg:pt-16">
        <h1 className="text-4xl font-semibold tracking-tight">
          {content.contact.title}
        </h1>
        <p className="mt-4 text-[var(--color-muted)]">
          {content.contact.subtitle}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${email}`}
            className="border border-[var(--color-border)] bg-white p-5 transition hover:border-[var(--color-accent)]"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">
              Email
            </p>
            <p className="mt-2 text-lg font-semibold">{email}</p>
          </a>

          <a
            href={`tel:${phone.replaceAll(" ", "")}`}
            className="border border-[var(--color-border)] bg-white p-5 transition hover:border-[var(--color-accent)]"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">
              {phoneLabel}
            </p>
            <p className="mt-2 text-lg font-semibold">{phone}</p>
          </a>
        </div>

        <div className="mt-8 border border-[var(--color-border)] bg-[var(--color-panel)] p-6">
          <p className="text-sm text-[var(--color-muted)]">
            {content.contact.openingHours}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="rounded-sm bg-[var(--color-text)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent)]"
            >
              {content.ctaPrimary}
            </a>
            <a
              href={`tel:${phone.replaceAll(" ", "")}`}
              className="rounded-sm border border-[var(--color-border)] px-5 py-3 text-sm font-medium hover:border-[var(--color-accent)]"
            >
              {content.ctaSecondary}
            </a>
            <Link
              href={localizePath(locale, "/services/casting-materials")}
              className="rounded-sm border border-[var(--color-border)] px-5 py-3 text-sm font-medium hover:border-[var(--color-accent)]"
            >
              {content.nav.services}
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
