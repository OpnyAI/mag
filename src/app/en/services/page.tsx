import { Metadata } from "next";
import { ServicesOverviewPage } from "@/components/pages/ServicesOverviewPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  title: "Services",
  description:
    "Overview of casting technologies, welded assemblies, vehicle structures, CNC precision machining, engineering and integrated supply chain solutions.",
  path: "/services",
});

export default function Page() {
  return <ServicesOverviewPage locale="en" />;
}
