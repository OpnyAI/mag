import Link from "next/link";
import {
  contentByLocale,
  email,
  localizePath,
  phone,
  phoneHref,
} from "@/lib/site-content";
import { Locale } from "@/lib/types";

interface SiteFooterProps {
  locale: Locale;
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const content = contentByLocale[locale];

  return (
    <footer className="border-t border-[color:rgba(138,150,158,0.35)] bg-[var(--color-surface)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12 lg:px-8 lg:py-14">
        <div className="max-w-[34ch]">
          <h2 className="text-sm font-semibold tracking-[0.14em] text-[var(--color-on-dark)]">
            MAG
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[color:rgba(231,235,238,0.78)] lg:text-base">
            {content.tagline}
          </p>
          <div className="mt-5 space-y-2 text-sm lg:text-base">
            <a
              href={`mailto:${email}`}
              className="text-[var(--color-on-dark)] hover:text-[var(--color-accent)]"
            >
              {email}
            </a>
            <a
              href={phoneHref}
              className="block text-[var(--color-on-dark)] hover:text-[var(--color-accent)]"
            >
              {phone}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-on-dark)]">
            {content.footer.quickLinks}
          </h3>
          <div className="mt-3 space-y-2 text-sm text-[color:rgba(231,235,238,0.74)] lg:text-base">
            <Link
              href={localizePath(locale, "/company")}
              className="block hover:text-[var(--color-accent)]"
            >
              {content.nav.company}
            </Link>
            <Link
              href={localizePath(locale, "/services")}
              className="block hover:text-[var(--color-accent)]"
            >
              {content.nav.services}
            </Link>
            <Link
              href={localizePath(locale, "/contact")}
              className="block hover:text-[var(--color-accent)]"
            >
              {content.nav.contact}
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-on-dark)]">
            {content.footer.legal}
          </h3>
          <div className="mt-3 space-y-2 text-sm text-[color:rgba(231,235,238,0.74)] lg:text-base">
            <Link href="/impressum" className="block hover:text-[var(--color-accent)]">
              {content.footer.imprint}
            </Link>
            <Link
              href="/datenschutz"
              className="block hover:text-[var(--color-accent)]"
            >
              {content.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
