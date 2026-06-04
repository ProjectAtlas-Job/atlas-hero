import type { Metadata } from "next";
import { GeistMono, GeistSans } from "geist/font";

import { siteUrl } from "@/components/marketing/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atlas | Job search, organized",
    template: "%s | Atlas",
  },
  description: "India-first job search infrastructure for candidate signals, company intelligence, fit scoring, applications, and referrals.",
  keywords: ["job matching India", "application tracker", "resume scoring", "company intelligence", "referral tracking"],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Atlas",
    title: "Atlas | Job search, organized",
    description: "India-first job search infrastructure for candidate signals, fit scoring, applications, and referrals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas | Job search, organized",
    description: "India-first job search infrastructure for candidate signals, fit scoring, applications, and referrals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Atlas",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteUrl,
    description:
      "India-first job search infrastructure for candidate signals, company intelligence, fit scoring, applications, and referrals.",
  };

  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
