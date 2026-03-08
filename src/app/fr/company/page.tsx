import { Metadata } from "next";
import { CompanyPage } from "@/components/pages/CompanyPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "fr",
  title: "Entreprise",
  description: "Profil de MAG, valeurs, chiffres cles et origine industrielle.",
  path: "/company",
});

export default function Page() {
  return <CompanyPage locale="fr" />;
}
