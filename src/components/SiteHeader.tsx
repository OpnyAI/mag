"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  contentByLocale,
  localizePath,
  servicePath,
  services,
} from "@/lib/site-content";
import { safeImage } from "@/lib/images";
import { Locale } from "@/lib/types";
import { useEffect, useMemo, useRef, useState } from "react";

interface SiteHeaderProps {
  locale: Locale;
}

function translatedPath(targetLocale: Locale, currentPath: string): string {
  let normalized = currentPath;

  if (normalized.startsWith("/en/")) {
    normalized = normalized.slice(3);
  } else if (normalized === "/en") {
    normalized = "/";
  }

  if (normalized.startsWith("/fr/")) {
    normalized = normalized.slice(3);
  } else if (normalized === "/fr") {
    normalized = "/";
  }

  const legalPage =
    normalized === "/impressum" || normalized === "/datenschutz";
  if (legalPage && targetLocale !== "de") {
    return targetLocale === "en" ? "/en" : "/fr";
  }

  return localizePath(targetLocale, normalized);
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const content = contentByLocale[locale];
  const menuLabel = locale === "de" ? "Menü" : "Menu";

  const navItems = useMemo(
    () => [
      { label: content.nav.company, href: localizePath(locale, "/company") },
      {
        label: content.nav.services,
        href: localizePath(locale, "/services/casting-materials"),
      },
      {
        label: content.nav.quality,
        href: servicePath(locale, "quality-certifications"),
      },
      { label: content.nav.contact, href: localizePath(locale, "/contact") },
    ],
    [
      content.nav.company,
      content.nav.contact,
      content.nav.quality,
      content.nav.services,
      locale,
    ],
  );

  const logoSrc = safeImage(
    "/images/brand/logo.png",
    "/images/placeholders/placeholder-16x9.jpg",
  );

  function clearCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function openServicesMenu() {
    clearCloseTimer();
    setServicesOpen(true);
  }

  function closeServicesMenuWithDelay() {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  }

  function closeServicesMenuNow() {
    clearCloseTimer();
    setServicesOpen(false);
  }

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      setMobileServicesOpen(false);
    }
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:rgba(10,19,31,0.1)] bg-[color:rgba(248,249,251,0.9)] backdrop-blur-sm">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="hidden h-20 grid-cols-[auto_1fr_auto] items-center gap-8 lg:grid">
          <Link
            href={localizePath(locale, "/")}
            className="flex items-center gap-3"
          >
            <Image
              src={logoSrc}
              alt="MAG Logo"
              width={132}
              height={32}
              className="h-8 w-auto"
              sizes="132px"
              priority
            />
            <div className="max-w-[12rem] border-l border-[var(--color-border)] pl-3">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-text)]">
                MAG
              </p>
              <p className="text-xs text-[var(--color-muted)]">
                Metal Advanced Group
              </p>
            </div>
          </Link>

          <nav className="flex items-center justify-center gap-9">
            {navItems.map((item, index) => {
              if (index !== 1) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={closeServicesMenuWithDelay}
                  onFocus={openServicesMenu}
                  onBlur={closeServicesMenuWithDelay}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      closeServicesMenuNow();
                    }
                  }}
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                    onClick={() =>
                      setServicesOpen((currentState) => !currentState)
                    }
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className={`transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M2.2 4.5L6 8.3l3.8-3.8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </button>

                  <div
                    className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 border border-[var(--color-border)] bg-white p-2 shadow-sm transition ${
                      servicesOpen
                        ? "pointer-events-auto mt-2 opacity-100"
                        : "pointer-events-none mt-1 opacity-0"
                    }`}
                    role="menu"
                    onMouseEnter={openServicesMenu}
                    onMouseLeave={closeServicesMenuWithDelay}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={servicePath(locale, service.slug)}
                        className="block px-3 py-2 text-sm text-[var(--color-text)] hover:bg-[var(--color-panel)]"
                        onClick={closeServicesMenuNow}
                      >
                        {service.title[locale]}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-3 border-l border-[var(--color-border)] pl-6">
            {(["de", "en", "fr"] as Locale[]).map((targetLocale) => {
              const isActive = targetLocale === locale;
              return (
                <Link
                  key={targetLocale}
                  href={translatedPath(targetLocale, pathname)}
                  className={`text-xs font-semibold tracking-[0.12em] ${
                    isActive
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {targetLocale.toUpperCase()}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex h-16 items-center justify-between lg:hidden">
          <Link
            href={localizePath(locale, "/")}
            className="flex min-w-0 items-center gap-3"
          >
            <Image
              src={logoSrc}
              alt="MAG Logo"
              width={112}
              height={28}
              className="h-7 w-auto"
              sizes="112px"
              priority
            />
            <div className="min-w-0 border-l border-[var(--color-border)] pl-3">
              <p className="truncate text-xs font-semibold tracking-[0.16em] text-[var(--color-text)]">
                MAG
              </p>
              <p className="hidden truncate text-[11px] text-[var(--color-muted)] min-[380px]:block">
                Metal Advanced Group
              </p>
            </div>
          </Link>

          <button
            type="button"
            className="border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text)]"
            onClick={() => {
              setMobileOpen((value) => {
                const next = !value;
                if (!next) {
                  setMobileServicesOpen(false);
                }
                return next;
              });
            }}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-main-menu"
          >
            {menuLabel}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-main-menu"
          className="border-t border-[var(--color-border)] bg-white px-5 py-4 lg:hidden"
        >
          <div className="space-y-1">
            {navItems.map((item, index) => {
              if (index !== 1) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-sm text-[var(--color-text)]"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-2 text-left text-sm text-[var(--color-text)]"
                    aria-expanded={mobileServicesOpen}
                    aria-controls="mobile-services-submenu"
                    onClick={() =>
                      setMobileServicesOpen((currentState) => !currentState)
                    }
                  >
                    <span>{item.label}</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className={`transition-transform ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M2.2 4.5L6 8.3l3.8-3.8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </button>

                  <div
                    id="mobile-services-submenu"
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-1 pl-4 pt-1">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={servicePath(locale, service.slug)}
                          className="block py-2 text-sm text-[var(--color-muted)]"
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                          }}
                        >
                          {service.title[locale]}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-3 border-t border-[var(--color-border)] pt-4">
            {(["de", "en", "fr"] as Locale[]).map((targetLocale) => (
              <Link
                key={targetLocale}
                href={translatedPath(targetLocale, pathname)}
                className={`text-xs font-semibold tracking-[0.12em] ${
                  targetLocale === locale
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-muted)]"
                }`}
                onClick={() => {
                  setMobileOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                {targetLocale.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
