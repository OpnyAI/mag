import { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "fr",
  title: "Fonderie industrielle, ingénierie et fabrication métallique | MAG",
  description:
    "MAG propose des solutions industrielles en fonderie, ingénierie et fabrication métallique, y compris usinage CNC, assemblages soudés et intégration logistique.",
  path: "/",
});

export default function Page() {
  return <HomePage locale="fr" />;
}
