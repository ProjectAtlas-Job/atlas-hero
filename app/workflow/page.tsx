import type { Metadata } from "next";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { SectionReveal } from "@/components/marketing/SectionReveal";
import { WorkflowTimeline } from "@/components/marketing/WorkflowTimeline";
import { siteUrl, workflowSteps } from "@/components/marketing/content";

export const metadata: Metadata = {
  title: "MyJobAtlas Workflow | Discovery, scoring, applications, outcomes",
  description: "See how MyJobAtlas moves from job and company discovery to explainable matching, resume improvement, applications, and outcome learning.",
  alternates: {
    canonical: `${siteUrl}/workflow`,
  },
  openGraph: {
    title: "MyJobAtlas Workflow",
    description: "Job discovery, candidate scoring, company intelligence, applications, and outcome learning in one flow.",
    url: `${siteUrl}/workflow`,
  },
};

export default function WorkflowPage() {
  return (
    <MarketingShell>
      <section className="page-shell pt-40 pb-16">
        <SectionReveal className="max-w-[760px]">
          <p className="eyebrow">Workflow</p>
          <h1 className="mt-5 font-display text-[clamp(40px,6vw,72px)] font-normal leading-[1.0] tracking-[-0.035em]">
            The loop: collect signals, score fit, act, learn.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            The v2 architecture separates raw signal extraction from scoring. That means MyJobAtlas can work on day one with transparent expert weights, then improve as applications, replies, interviews, offers, and rejections produce outcome data.
          </p>
        </SectionReveal>
      </section>

      <section className="page-shell pb-12">
        <div className="grid gap-4 md:grid-cols-5">
          {workflowSteps.map((step, index) => (
            <SectionReveal key={step.title}>
              <div className="group h-full rounded-[1.5rem] border border-border bg-card p-5 transition duration-200 hover:-translate-y-1 hover:bg-muted">
                <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                <step.icon className="mt-8 size-5" strokeWidth={1.75} />
                <h2 className="mt-4 text-base font-semibold tracking-[-0.02em]">{step.title}</h2>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <div className="page-shell pb-24">
        <WorkflowTimeline compact />
      </div>

      <section className="page-shell pb-24">
        <SectionReveal>
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <p className="eyebrow">What changes after the first application</p>
            <h2 className="mt-4 max-w-[720px] font-display text-[clamp(28px,4vw,44px)] font-normal tracking-[-0.025em]">
              Outcomes become training data without changing the product flow.
            </h2>
            <p className="mt-4 max-w-[780px] text-sm leading-6 text-muted-foreground">
              When a role is applied to, replied to, interviewed for, offered, rejected, or closed, MyJobAtlas can reconstruct the feature snapshot that existed at the time. That is what makes later learned ranking possible: the interface stays calm, while the scoring layer becomes more accurate.
            </p>
          </div>
        </SectionReveal>
      </section>
    </MarketingShell>
  );
}
