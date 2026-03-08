import { Metadata } from "next";
import { CompanyPage } from "@/components/pages/CompanyPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  title: "Über MAG",
  description: "Unternehmensprofil, Leistungsbereiche, Werkstoffe und Branchenfokus von MAG.",
  path: "/company",
});

export default function Page() {
  return <CompanyPage locale="de" />;
}
