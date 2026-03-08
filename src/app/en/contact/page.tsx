import { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  title: "Contact",
  description: "Reach MAG directly via email or phone for your project request.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage locale="en" />;
}
