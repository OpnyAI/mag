import { Metadata } from "next";
import { CompanyPage } from "@/components/pages/CompanyPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  title: "Unternehmen | Metall Advancement Group",
  description:
    "Erfahren Sie mehr über Metall Advancement Group: industrieller Metallguss, Engineering-Kompetenz, internationale Fertigungspartner und integrierte Wertschöpfung.",
  path: "/company",
});

export default function Page() {
  return <CompanyPage locale="de" />;
}
