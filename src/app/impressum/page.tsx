import { Metadata } from "next";
import { PageFrame } from "@/components/PageFrame";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  title: "Impressum (vorlaeufig)",
  description: "Vorlaeufiger Impressumsentwurf fuer die MAG Website.",
  path: "/impressum",
});

export default function Page() {
  return (
    <PageFrame locale="de">
      <section className="mx-auto w-full max-w-4xl px-5 pb-16 pt-12 lg:px-8">
        <div className="mb-8 border border-[var(--color-border)] bg-[var(--color-panel)] p-4 text-sm text-[var(--color-muted)]">
          Vorlaeufiger Entwurf - wird rechtlich geprueft und final ergaenzt.
        </div>
        <h1 className="text-4xl font-semibold tracking-tight">Impressum</h1>
        <div className="mt-6 space-y-6 text-sm leading-relaxed text-[var(--color-muted)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">Angaben gemaess 5 TMG (Platzhalter)</h2>
            <p>MAG - Metal Advancement Group</p>
            <p>Musterstrasse 1, 72760 Reutlingen, Deutschland</p>
            <p>Vertretungsberechtigte Person: Wird durch den Kunden final ergaenzt</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">Kontakt</h2>
            <p>E-Mail: info@mag-group.example</p>
            <p>Telefon: +49 7121 555 000</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">Haftungshinweis</h2>
            <p>
              Dieser Entwurf dient als technische Platzhalterversion. Inhalte, Rechtsgrundlagen und Pflichtangaben werden nach juristischer Pruefung finalisiert.
            </p>
          </section>
        </div>
      </section>
    </PageFrame>
  );
}
