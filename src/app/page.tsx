import { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  title: "MAG - Industrieller Metallguss, Engineering und Metalllösungen",
  description:
    "Deutsches Industrieunternehmen für Gießereitechnologien, Metallverarbeitung, Engineering und integrierte Supply-Chain-Lösungen.",
  path: "/",
});

export default function Page() {
  return <HomePage locale="de" />;
}
