import { PropsWithChildren } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Locale } from "@/lib/types";

interface PageFrameProps extends PropsWithChildren {
  locale: Locale;
}

export function PageFrame({ locale, children }: PageFrameProps) {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <SiteHeader locale={locale} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
