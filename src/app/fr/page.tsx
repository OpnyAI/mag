import { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "fr",
  title: "MAG - Expertise Metallique Industrielle",
  description:
    "Fournisseur B2B familial pour fonderie, assemblages soudes, structures vehicules, usinage CNC et supply chain integree.",
  path: "/",
});

export default function Page() {
  return <HomePage locale="fr" />;
}
