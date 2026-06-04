import type { Metadata } from "next";

import { FinalCta } from "@/components/marketing/FinalCta";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { SectionReveal } from "@/components/marketing/SectionReveal";
import { UseCasePanel } from "@/components/marketing/UseCasePanel";
import { siteUrl } from "@/components/marketing/content";

export const metadata: Metadata = {
  title: "About Atlas | India-first job search infrastructure",
  description: "Learn how Atlas connects candidate profiles, job discovery, company intelligence, applications, referrals, and outcome learning.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Atlas",
    description: "India-first job search infrastructure for profiles, matching, applications, and referrals.",
    url: `${siteUrl}/about`,
  },
};

const principles = [
  "India-first at launch, but structured so sources, regions, and providers can be swapped later.",
  "Every score should be decomposable into signals a candidate can understand and improve.",
  "LLM work belongs in enrichment and drafting, not in the hot path for every ranking decision.",
  "Applications, contacts, emails, and outcomes should produce learning data without exposing private user context.",
];

export default function AboutPage() {
  return (
    <MarketingShell>
      <section className="page-shell pt-40 pb-20">
        <SectionReveal className="max-w-[760px]">
          <p className="text-sm font-medium text-muted-foreground">About Atlas</p>
          <h1 className="mt-5 text-[44px] font-semibold leading-[1.02] tracking-[-0.055em] sm:text-[64px]">
            A practical system for the parts of a job search that usually drift apart.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Atlas starts with the Indian job market: roles from major boards, internships, startup listings, company intelligence, resume evidence, contacts, cold outreach, applications, and inbox-detected progress. The product surface is simple because the underlying system is doing the organising.
          </p>
        </SectionReveal>
      </section>

      <section className="page-shell pb-24">
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionReveal>
            <div className="surface-flat h-full p-8">
              <p className="text-sm font-medium text-muted-foreground">Mission</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                Turn scattered career signals into decisions.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                A candidate should know which roles fit, which companies are worth attention, what their profile is missing, and what follow-up should happen next. Atlas is designed around that decision loop.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal>
            <div className="surface p-8">
              <p className="text-sm font-medium text-muted-foreground">Design principles</p>
              <div className="mt-6 grid gap-3">
                {principles.map((principle, index) => (
                  <div key={principle} className="flex items-start gap-4 rounded-2xl bg-muted p-4">
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    <p className="text-sm leading-6">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="page-shell pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Data", "Jobs, companies, resumes, GitHub evidence, LinkedIn profile data, contacts, applications, and outcomes are captured as structured signals."],
            ["Scoring", "Candidate strength, company quality, and match fit are separate scores so recommendations are explainable instead of opaque."],
            ["Control", "Manual override stays available for applications, outreach, profile edits, and follow-ups. Automation supports the user; it does not hide the process."],
          ].map(([title, text]) => (
            <SectionReveal key={title}>
              <article className="h-full rounded-[1.5rem] border border-border bg-card p-6 transition duration-200 hover:-translate-y-1 hover:bg-muted">
                <h2 className="text-xl font-semibold tracking-[-0.03em]">{title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>

      <UseCasePanel />
      <FinalCta />
    </MarketingShell>
  );
}
