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
        href: localizePath(locale, "/services"),
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
    <header className="sticky top-0 z-40 border-b border-[color:rgba(138,150,158,0.28)] bg-[color:rgba(24,28,32,0.92)] backdrop-blur-sm">
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
            <div className="max-w-[12rem] border-l border-[color:rgba(231,235,238,0.25)] pl-3">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-on-dark)]">
                MAG
              </p>
              <p className="text-xs text-[color:rgba(231,235,238,0.72)]">
                Metal Advancement Group
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
                    className="text-sm text-[color:rgba(231,235,238,0.9)] transition-colors hover:text-[var(--color-accent)]"
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
                  <div className="inline-flex items-center gap-1">
                    <Link
                      href={item.href}
                      className="text-sm text-[color:rgba(231,235,238,0.9)] transition-colors hover:text-[var(--color-accent)]"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="inline-flex items-center text-sm text-[color:rgba(231,235,238,0.9)] transition-colors hover:text-[var(--color-accent)]"
                      aria-label={`${item.label} menu`}
                      aria-haspopup="menu"
                      aria-expanded={servicesOpen}
                      onClick={() =>
                        setServicesOpen((currentState) => !currentState)
                      }
                    >
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
                  </div>

                  <div
                    className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 border border-[color:rgba(138,150,158,0.28)] bg-[var(--color-surface)] p-2 shadow-[0_14px_36px_rgba(0,0,0,0.3)] transition ${
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
                        className="block px-3 py-2 text-sm text-[var(--color-on-dark)] hover:bg-[color:rgba(231,235,238,0.08)] hover:text-[var(--color-accent)]"
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

          <div className="flex items-center justify-end gap-3 border-l border-[color:rgba(231,235,238,0.2)] pl-6">
            {(["de", "en", "fr"] as Locale[]).map((targetLocale) => {
              const isActive = targetLocale === locale;
              return (
                <Link
                  key={targetLocale}
                  href={translatedPath(targetLocale, pathname)}
                  className={`text-xs font-semibold tracking-[0.12em] ${
                    isActive
                      ? "text-[var(--color-accent)]"
                      : "text-[color:rgba(231,235,238,0.7)] hover:text-[var(--color-on-dark)]"
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
            <div className="min-w-0 border-l border-[color:rgba(231,235,238,0.25)] pl-3">
              <p className="truncate text-xs font-semibold tracking-[0.16em] text-[var(--color-on-dark)]">
                MAG
              </p>
              <p className="hidden truncate text-[11px] text-[color:rgba(231,235,238,0.72)] min-[380px]:block">
                Metal Advancement Group
              </p>
            </div>
          </Link>

          <button
            type="button"
            className="border border-[color:rgba(231,235,238,0.4)] px-3 py-2 text-sm text-[var(--color-on-dark)]"
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
        <div className="absolute inset-x-0 top-full z-50 lg:hidden">
          <div className="bg-[color:rgba(24,28,32,0.72)]">
            <div
              id="mobile-main-menu"
              className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-[color:rgba(138,150,158,0.28)] bg-[var(--color-surface)] px-5 py-4"
            >
            <div className="space-y-1">
              {navItems.map((item, index) => {
                if (index !== 1) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-sm text-[var(--color-on-dark)] hover:text-[var(--color-accent)]"
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
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="block py-2 text-sm text-[var(--color-on-dark)] hover:text-[var(--color-accent)]"
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className="inline-flex items-center py-2 text-[var(--color-on-dark)] hover:text-[var(--color-accent)]"
                        aria-label={`${item.label} submenu`}
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-submenu"
                        onClick={() =>
                          setMobileServicesOpen((currentState) => !currentState)
                        }
                      >
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
                    </div>

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
                            className="block py-2 text-sm text-[color:rgba(231,235,238,0.74)] hover:text-[var(--color-accent)]"
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

              <div className="mt-4 flex items-center gap-3 border-t border-[color:rgba(138,150,158,0.28)] pt-4">
                {(["de", "en", "fr"] as Locale[]).map((targetLocale) => (
                  <Link
                    key={targetLocale}
                    href={translatedPath(targetLocale, pathname)}
                    className={`text-xs font-semibold tracking-[0.12em] ${
                      targetLocale === locale
                        ? "text-[var(--color-accent)]"
                        : "text-[color:rgba(231,235,238,0.72)]"
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
          </div>
        </div>
      ) : null}
    </header>
  );
}
