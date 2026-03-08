import { companyAddress, email, phone } from "@/lib/site-content";
import { absoluteUrl } from "@/lib/seo";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MAG - Metal Advanced Group",
    legalName: "MAG - Metal Advanced Group",
    url: absoluteUrl("/"),
    email,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyAddress,
      addressCountry: "DE",
    },
    sameAs: [],
    department: {
      "@type": "Organization",
      name: "Manufacturer",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
