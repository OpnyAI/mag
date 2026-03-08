import { Metadata } from "next";
import { CompanyPage } from "@/components/pages/CompanyPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "fr",
  title: "À propos de MAG",
  description: "Profil d'entreprise, domaines de compétences, matériaux et secteurs industriels couverts par MAG.",
  path: "/company",
});

export default function Page() {
  return <CompanyPage locale="fr" />;
}
