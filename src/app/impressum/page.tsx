import { Metadata } from "next";
import { PageFrame } from "@/components/PageFrame";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  title: "Impressum | MAG - Metall Advancement Group GmbH",
  description: "Impressum der MAG - Metall Advancement Group GmbH",
  path: "/impressum",
});

export default function Page() {
  return (
    <PageFrame locale="de">
      <section className="mx-auto w-full max-w-4xl px-5 pb-16 pt-12 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight">Impressum</h1>
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-[var(--color-muted)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">1. Angaben gemäß § 5 TMG</h2>
            <p className="mt-3">MAG - Metall Advancement Group GmbH</p>
            <p>Tränkestraße 1</p>
            <p>70597 Stuttgart</p>
            <p>Deutschland</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">2. Vertreten durch</h2>
            <p className="mt-3">Geschäftsführer:</p>
            <p>Zekeriya Kabakulak</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">3. Kontakt</h2>
            <p className="mt-3">Telefon: +49 176 741 88 448</p>
            <p>E-Mail: info@mag-group.eu</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">4. Handelsregister</h2>
            <p className="mt-3">Registergericht: Amtsgericht Stuttgart</p>
            <p>Registernummer: HRB 779569</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">5. Umsatzsteuer-ID</h2>
            <p className="mt-3">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            </p>
            <p>DE288082662</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              6. Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-3">Zekeriya Kabakulak</p>
            <p>Tränkestraße 1</p>
            <p>70597 Stuttgart</p>
            <p>Deutschland</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">7. Verbraucherstreitbeilegung</h2>
            <p className="mt-3">
              Die MAG - Metall Advancement Group GmbH ist nicht verpflichtet und nicht bereit, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </section>
    </PageFrame>
  );
}
