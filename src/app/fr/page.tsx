import { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "fr",
  title: "MAG - Fonderie industrielle, ingénierie et solutions métalliques",
  description:
    "Entreprise industrielle allemande combinant fonderie, fabrication métallique, ingénierie et intégration de la chaîne logistique.",
  path: "/",
});

export default function Page() {
  return <HomePage locale="fr" />;
}
