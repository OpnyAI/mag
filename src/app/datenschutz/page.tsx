import { Metadata } from "next";
import { PageFrame } from "@/components/PageFrame";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  title: "Datenschutz | MAG - Metall Advancement Group GmbH",
  description: "Datenschutzhinweise der MAG - Metall Advancement Group GmbH",
  path: "/datenschutz",
});

export default function Page() {
  return (
    <PageFrame locale="de">
      <section className="mx-auto w-full max-w-4xl px-5 pb-16 pt-12 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight">Datenschutz</h1>
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-[var(--color-muted)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              1. Allgemeine Hinweise
            </h2>
            <p className="mt-3">
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges
              Anliegen. Diese Datenschutzerklärung erläutert, wie
              personenbezogene Daten beim Besuch dieser Website verarbeitet
              werden.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              2. Verantwortliche Stelle
            </h2>
            <p className="mt-3">MAG - Metall Advancement Group GmbH</p>
            <p>Tränkestraße 1</p>
            <p>70597 Stuttgart</p>
            <p>Deutschland</p>
            <p className="mt-3">Telefon: +49 176 741 88 448</p>
            <p>E-Mail: info@mag-group.eu</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              3. Hosting und technische Bereitstellung der Website
            </h2>
            <p className="mt-3">
              Diese Website wird über moderne Webinfrastruktur bereitgestellt.
              Das technische Deployment erfolgt über Vercel. Der Domain- und
              Provider-Kontext erfolgt über Strato. Im Rahmen des technischen
              Betriebs können Server-Logfiles zur Sicherstellung von Stabilität
              und Sicherheit verarbeitet werden.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              4. Server-Logfiles
            </h2>
            <p className="mt-3">
              Beim Aufruf der Website können durch den Server automatisch
              folgende Daten erfasst werden:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>IP-Adresse</li>
              <li>Browsertyp</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Zugriffszeit</li>
            </ul>
            <p>
              Diese Daten werden ausschließlich zur Gewährleistung von
              Systemstabilität und Sicherheit verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              5. Kontaktaufnahme
            </h2>
            <p className="mt-3">
              Wenn Sie per E-Mail oder telefonisch Kontakt mit uns aufnehmen,
              werden die von Ihnen übermittelten personenbezogenen Daten zum
              Zweck der Bearbeitung Ihrer Anfrage gespeichert und verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              6. Cookies und technische Speicherung
            </h2>
            <p className="mt-3">
              Diese Website nutzt nur technisch notwendige Prozesse, die für
              eine stabile und sichere Bereitstellung der Website erforderlich
              sein können.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              7. Keine Analyse- oder Trackingtools
            </h2>
            <p className="mt-3">
              Diese Website verwendet derzeit keine Webanalyse- oder
              Trackingdienste wie Google Analytics, Google Tag Manager oder
              vergleichbare Tools.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              8. Rechte betroffener Personen
            </h2>
            <p className="mt-3">
              Ihnen stehen insbesondere folgende Rechte zu:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Recht auf Auskunft</li>
              <li>Recht auf Berichtigung</li>
              <li>Recht auf Löschung</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Recht auf Widerspruch</li>
            </ul>
            <p>
              Zudem haben Sie das Recht, sich bei einer zuständigen
              Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen
              Daten zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              9. Datenschutzverantwortlicher
            </h2>
            <p className="mt-3">Ali Kabakulak</p>
            <p className="mt-3">Kontakt:</p>
            <p>E-Mail: a.kabakulak@mag-group.eu</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              10. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p className="mt-3">
              Diese Datenschutzerklärung kann angepasst werden, um sie an
              geänderte gesetzliche oder technische Rahmenbedingungen
              anzupassen.
            </p>
          </section>
        </div>
      </section>
    </PageFrame>
  );
}
