import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Playfair_Display } from "next/font/google";

import { Loader } from "@/components/brand/Loader";
import { siteUrl } from "@/components/marketing/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Job Atlas | Job search, organized",
    template: "%s | Job Atlas",
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
    siteName: "Job Atlas",
    title: "Job Atlas | Job search, organized",
    description: "India-first job search infrastructure for candidate signals, fit scoring, applications, and referrals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Atlas | Job search, organized",
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
    name: "Job Atlas",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteUrl,
    description:
      "India-first job search infrastructure for candidate signals, company intelligence, fit scoring, applications, and referrals.",
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${plexMono.variable}`}>
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
