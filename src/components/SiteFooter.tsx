import Link from "next/link";
import { contentByLocale, email, localizePath, phone } from "@/lib/site-content";
import { Locale } from "@/lib/types";

interface SiteFooterProps {
  locale: Locale;
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const content = contentByLocale[locale];

  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12 lg:px-8 lg:py-14">
        <div className="max-w-[34ch]">
          <h2 className="text-sm font-semibold tracking-[0.14em] text-[var(--color-text)]">
            MAG
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)] lg:text-base">
            {content.tagline}
          </p>
          <div className="mt-5 space-y-2 text-sm lg:text-base">
            <a
              href={`mailto:${email}`}
              className="text-[var(--color-text)] hover:text-[var(--color-accent)]"
            >
              {email}
            </a>
            <a
              href={`tel:${phone.replaceAll(" ", "")}`}
              className="block text-[var(--color-text)] hover:text-[var(--color-accent)]"
            >
              {phone}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-text)]">
            {content.footer.quickLinks}
          </h3>
          <div className="mt-3 space-y-2 text-sm text-[var(--color-muted)] lg:text-base">
            <Link
              href={localizePath(locale, "/company")}
              className="block hover:text-[var(--color-text)]"
            >
              {content.nav.company}
            </Link>
            <Link
              href={localizePath(locale, "/services/casting-materials")}
              className="block hover:text-[var(--color-text)]"
            >
              {content.nav.services}
            </Link>
            <Link
              href={localizePath(locale, "/contact")}
              className="block hover:text-[var(--color-text)]"
            >
              {content.nav.contact}
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-text)]">
            {content.footer.legal}
          </h3>
          <div className="mt-3 space-y-2 text-sm text-[var(--color-muted)] lg:text-base">
            <Link href="/impressum" className="block hover:text-[var(--color-text)]">
              {content.footer.imprint}
            </Link>
            <Link
              href="/datenschutz"
              className="block hover:text-[var(--color-text)]"
            >
              {content.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
