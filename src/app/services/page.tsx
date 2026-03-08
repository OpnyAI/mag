import { Metadata } from "next";
import { ServicesOverviewPage } from "@/components/pages/ServicesOverviewPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  title: "Leistungen",
  description:
    "Überblick über Gießereitechnologien, Schweißbaugruppen, Fahrzeugstrukturen, CNC-Präzisionsfertigung, Engineering sowie Supply-Chain-Integration.",
  path: "/services",
});

export default function Page() {
  return <ServicesOverviewPage locale="de" />;
}
