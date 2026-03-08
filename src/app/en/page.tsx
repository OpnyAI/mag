import { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  title: "MAG - Industrial Metal Expertise",
  description:
    "Family-owned B2B supplier for casting, weldments, vehicle systems, CNC machining and integrated supply chain operations.",
  path: "/",
});

export default function Page() {
  return <HomePage locale="en" />;
}
