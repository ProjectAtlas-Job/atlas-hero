import type { Metadata } from "next";

import { LandingPage } from "@/components/landing/LandingPage";
import { siteUrl } from "@/components/marketing/content";

export const metadata: Metadata = {
  title: "Job Atlas | Job search, organized",
  description: "Connect candidate signals, company intelligence, fit scoring, applications, and referrals in one job search system.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Job Atlas | Job search, organized",
    description: "Connect candidate signals, company intelligence, fit scoring, applications, and referrals in one job search system.",
    url: siteUrl,
  },
};

export default function Page() {
  return <LandingPage />;
}
