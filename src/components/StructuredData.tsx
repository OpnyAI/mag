import { email, phone } from "@/lib/site-content";
import { absoluteUrl } from "@/lib/seo";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Metall Advancement Group",
    legalName: "MAG - Metall Advancement Group GmbH",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/images/brand/logo.png"),
    email,
    telephone: phone,
    vatID: "DE288082662",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tränkestraße 1",
      postalCode: "70597",
      addressLocality: "Stuttgart",
      addressCountry: "DE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: phone,
      email,
      availableLanguage: ["de", "en", "fr"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
