import { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  title: "Industrial Casting, Engineering & Metal Manufacturing | MAG",
  description:
    "MAG delivers industrial casting, engineering and metal manufacturing solutions including foundry technologies, CNC machining, welded assemblies and integrated supply chain support.",
  path: "/",
});

export default function Page() {
  return <HomePage locale="en" />;
}
