import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";

import { Loader } from "@/components/brand/Loader";
import { siteUrl } from "@/components/marketing/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MyJobAtlas | Job search, organized",
    template: "%s | MyJobAtlas",
  },
  description:
    "India-first job search infrastructure for candidate signals, company intelligence, fit scoring, applications, and referrals.",
  keywords: ["job matching India", "application tracker", "resume scoring", "company intelligence", "referral tracking"],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MyJobAtlas",
    title: "MyJobAtlas | Job search, organized",
    description: "India-first job search infrastructure for candidate signals, fit scoring, applications, and referrals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyJobAtlas | Job search, organized",
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
    name: "MyJobAtlas",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteUrl,
    description:
      "India-first job search infrastructure for candidate signals, company intelligence, fit scoring, applications, and referrals.",
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable}`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Loader />
        {children}
      </body>
    </html>
  );
}
