import { Metadata } from "next";
import { CompanyPage } from "@/components/pages/CompanyPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "fr",
  title: "Entreprise | Metall Advancement Group",
  description:
    "Découvrez MAG, partenaire industriel allemand spécialisé en fonderie, ingénierie, fabrication métallique et chaîne logistique intégrée.",
  path: "/company",
});

export default function Page() {
  return <CompanyPage locale="fr" />;
}
