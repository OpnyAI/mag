import { Metadata } from "next";
import { CompanyPage } from "@/components/pages/CompanyPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  title: "Company",
  description: "MAG company profile, values, figures and industrial background.",
  path: "/company",
});

export default function Page() {
  return <CompanyPage locale="en" />;
}
