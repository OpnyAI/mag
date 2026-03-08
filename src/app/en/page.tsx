import { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  title: "MAG - Industrial Casting, Engineering & Metal Solutions",
  description:
    "German industrial company delivering advanced casting technologies, metal manufacturing, engineering and integrated supply chain solutions.",
  path: "/",
});

export default function Page() {
  return <HomePage locale="en" />;
}
