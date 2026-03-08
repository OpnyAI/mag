import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MAG - Metal Advanced Group",
    template: "%s | MAG - Metal Advanced Group",
  },
  description:
    "MAG ist Ihr B2B-Partner für Guss, Schweißbaugruppen, Fahrzeugsysteme, CNC-Bearbeitung und integrierte Lieferketten.",
  openGraph: {
    type: "website",
    siteName: "MAG - Metal Advanced Group",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="font-sans">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
