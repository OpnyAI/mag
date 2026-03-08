import { Metadata } from "next";
import { CompanyPage } from "@/components/pages/CompanyPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  title: "About MAG",
  description: "Company profile, core industrial capabilities, materials and industries served by MAG.",
  path: "/company",
});

export default function Page() {
  return <CompanyPage locale="en" />;
}
