import { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  title: "Metallguss, Engineering & Metallverarbeitung | Metall Advancement Group",
  description:
    "MAG ist Ihr Partner für industriellen Metallguss, Engineering und Metallverarbeitung. Gießereitechnologien, CNC-Fertigung, Schweißbaugruppen und Supply-Chain-Integration für internationale Industrieprojekte.",
  path: "/",
});

export default function Page() {
  return <HomePage locale="de" />;
}
