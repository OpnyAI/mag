import Image from "next/image";
import { PageFrame } from "@/components/PageFrame";
import { safeImage } from "@/lib/images";
import { contentByLocale } from "@/lib/site-content";
import { Locale } from "@/lib/types";

interface CompanyPageProps {
  locale: Locale;
}

const valuesImageAltByLocale: Record<Locale, string> = {
  de: "MAG Produktionshalle und Team",
  en: "MAG production hall and team",
  fr: "Hall de production et équipe MAG",
};

export function CompanyPage({ locale }: CompanyPageProps) {
  const content = contentByLocale[locale];
  const valuesImageSrc = safeImage(
    "/images/company/company-2.jpg",
    "/images/placeholders/placeholder-4x3.jpg",
  );

  return (
    <PageFrame locale={locale}>
      <section className="surface-dark mx-auto w-full max-w-7xl px-5 pb-14 pt-12 lg:px-8 lg:pb-16 lg:pt-20">
        <h1 className="max-w-[20ch] text-4xl font-semibold tracking-tight lg:text-5xl">
          {content.company.title}
        </h1>
        <div className="section-muted mt-5 max-w-[74ch] space-y-4 text-base leading-relaxed">
          {content.company.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="surface-light border-y border-[var(--color-border)] bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-14 md:grid-cols-2 md:items-center lg:px-8 lg:py-16">
          <div>
            <h2 className="text-2xl font-semibold lg:text-3xl">
              {content.company.valuesTitle}
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--color-muted)] lg:text-base">
              {content.company.values.map((value) => (
                <li
                  key={value}
                  className="border-l border-[var(--color-border)] pl-4"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden border border-[var(--color-border)] bg-[var(--color-panel)]">
            <Image
              src={valuesImageSrc}
              alt={valuesImageAltByLocale[locale]}
              width={1400}
              height={900}
              className="aspect-[4/3] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="surface-dark mx-auto w-full max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <h2 className="text-2xl font-semibold lg:text-3xl">
          {content.company.factsTitle}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.company.facts.map((fact) => (
            <div
              key={fact.label}
              className="border border-[var(--color-border)] bg-white p-5"
            >
              <p className="text-xs uppercase tracking-[0.1em] text-[var(--color-muted)]">
                {fact.label}
              </p>
              <p className="mt-2 text-xl font-semibold leading-tight text-[var(--color-text)]">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="surface-light border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
          <h2 className="text-2xl font-semibold lg:text-3xl">
            {content.company.locationsTitle}
          </h2>
          <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-[var(--color-muted)]">
            {content.company.locationsText}
          </p>
        </div>
      </section>

      <section className="surface-dark border-t border-[var(--color-border)]">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
          <h2 className="text-2xl font-semibold lg:text-3xl">
            {content.company.whyMagTitle}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.company.whyMagItems.map((item) => (
              <div
                key={item}
                className="border border-[var(--color-border)] bg-white p-5"
              >
                <p className="text-sm font-medium leading-relaxed text-[var(--color-text)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-light border-y border-[var(--color-border)] bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
          <h2 className="text-2xl font-semibold lg:text-3xl">
            {content.company.successStoriesTitle}
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {content.company.successStories.map((story) => (
              <article
                key={story.label}
                className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-text)]">
                  {story.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {story.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
