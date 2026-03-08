import { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "fr",
  title: "Contact",
  description: "Contactez MAG directement par e-mail ou telephone pour votre projet.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage locale="fr" />;
}
