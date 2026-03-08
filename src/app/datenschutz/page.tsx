import { Metadata } from "next";
import { PageFrame } from "@/components/PageFrame";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  title: "Datenschutz (vorlaeufig)",
  description: "Vorlaeufiger Datenschutzentwurf fuer die MAG Website.",
  path: "/datenschutz",
});

export default function Page() {
  return (
    <PageFrame locale="de">
      <section className="mx-auto w-full max-w-4xl px-5 pb-16 pt-12 lg:px-8">
        <div className="mb-8 border border-[var(--color-border)] bg-[var(--color-panel)] p-4 text-sm text-[var(--color-muted)]">
          Vorlaeufiger Entwurf - wird rechtlich geprueft und final ergaenzt.
        </div>
        <h1 className="text-4xl font-semibold tracking-tight">Datenschutz</h1>
        <div className="mt-6 space-y-6 text-sm leading-relaxed text-[var(--color-muted)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">1. Verantwortliche Stelle (Platzhalter)</h2>
            <p>MAG - Metal Advanced Group, Musterstrasse 1, 72760 Reutlingen, Deutschland</p>
            <p>E-Mail: info@mag-group.example</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">2. Verarbeitete Daten</h2>
            <p>
              Beim Besuch dieser Website koennen technisch notwendige Daten (z. B. IP-Adresse, Zeitstempel, Browserinformationen) verarbeitet werden.
              Bei Kontaktaufnahme per E-Mail oder Telefon werden uebermittelte Kontaktdaten zur Bearbeitung der Anfrage verwendet.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">3. Zweck und Rechtsgrundlagen</h2>
            <p>
              Die Datenverarbeitung erfolgt zur Bereitstellung der Website, zur Kommunikationsabwicklung und zur Wahrung berechtigter Interessen im B2B-Kontext.
              Die konkrete rechtliche Ausgestaltung wird im finalen Rechtstext ergaenzt.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">4. Speicherdauer und Betroffenenrechte</h2>
            <p>
              Daten werden nur so lange gespeichert, wie dies fuer den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
              Angaben zu Auskunft, Berichtigung, Loeschung und Widerspruch werden im finalen Dokument vervollstaendigt.
            </p>
          </section>
        </div>
      </section>
    </PageFrame>
  );
}
