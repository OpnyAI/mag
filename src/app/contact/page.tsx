import { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  title: "Kontakt",
  description: "Direkter Kontakt zu MAG via E-Mail oder Telefon für neue Industrieprojekte.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage locale="de" />;
}
