import { Metadata } from "next";
import { CompanyPage } from "@/components/pages/CompanyPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  title: "Unternehmen",
  description: "MAG - Werte, Kennzahlen und industrielle Herkunft im deutschen Mittelstand.",
  path: "/company",
});

export default function Page() {
  return <CompanyPage locale="de" />;
}
