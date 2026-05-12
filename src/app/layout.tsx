import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Metall Advancement Group",
    template: "%s | Metall Advancement Group",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  description:
    "MAG ist ein deutsches Industrieunternehmen für Gießereitechnologien, Metallverarbeitung, Engineering und Supply-Chain-Integration.",
  openGraph: {
    type: "website",
    siteName: "Metall Advancement Group",
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
