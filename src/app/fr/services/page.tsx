import { Metadata } from "next";
import { ServicesOverviewPage } from "@/components/pages/ServicesOverviewPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "fr",
  title: "Services",
  description:
    "Vue d'ensemble des technologies de fonderie, assemblages soudés, structures de véhicules, usinage CNC, ingénierie et intégration de la chaîne logistique.",
  path: "/services",
});

export default function Page() {
  return <ServicesOverviewPage locale="fr" />;
}
