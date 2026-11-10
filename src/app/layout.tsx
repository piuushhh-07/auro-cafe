import type { Metadata } from "next";
import "./globals.css";
import { Shell } from "@/components/site-shell";
import { siteConfig } from "@/data/site-config";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "AURO CAFE | A Mediterranean-Inspired Café in Ambernath", template: "%s | AURO CAFE" },
  description: siteConfig.description,
  openGraph: { type: "website", locale: "en_IN", siteName: siteConfig.name, title: "AURO CAFE — Your Little Mediterranean Escape", description: siteConfig.description },
  twitter: { card: "summary_large_image", title: "AURO CAFE", description: siteConfig.description }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org", "@type": "Restaurant", name: siteConfig.name, description: siteConfig.description,
    address: { "@type": "PostalAddress", streetAddress: "Pale Rd, next to Royal Flora, behind Anand Sagar Resort & water park, Pale Gaon", addressLocality: "Ambernath", addressRegion: "Maharashtra", postalCode: "421506", addressCountry: "IN" },
    url: siteConfig.url, ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}), ...(siteConfig.openingHours ? { openingHours: siteConfig.openingHours } : {})
  };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Shell>{children}</Shell></body></html>;
}