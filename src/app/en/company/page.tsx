import { Metadata } from "next";
import { CompanyPage } from "@/components/pages/CompanyPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  title: "Company | Metall Advancement Group",
  description:
    "Learn more about MAG as a German industrial partner for casting, engineering, metal manufacturing and integrated supply chain solutions.",
  path: "/company",
});

export default function Page() {
  return <CompanyPage locale="en" />;
}
