import { workflowSteps } from "@/components/marketing/content";
import { SectionReveal } from "@/components/marketing/SectionReveal";

export function WorkflowTimeline({ compact = false }: { compact?: boolean }) {
  return (
    <section id="workflow" className={compact ? "" : "page-shell py-24"}>
      <SectionReveal className="max-w-[700px]">
        <p className="eyebrow">(02) Workflow</p>
        <h2 className="mt-5 font-display text-[clamp(34px,5vw,60px)] font-normal leading-[1.02] tracking-[-0.03em] text-ink">
          Built around the full search loop.
        </h2>
        <p className="mt-5 text-base leading-7 text-muted-foreground">
          The spec is not a generic tracker. My Job Atlas collects market data, turns it into explainable scores, improves
          the candidate profile, and records outcomes so ranking can improve over time.
        </p>
      </SectionReveal>

      <div className="mt-12 grid gap-4">
        {workflowSteps.map((step, index) => (
          <SectionReveal key={step.title}>
            <article className="surface surface-hover group grid gap-5 p-6 md:grid-cols-[64px_56px_1fr] md:items-start">
              <div className="font-mono text-sm text-soft-muted">0{index + 1}</div>
              <span className="flex size-11 items-center justify-center rounded-2xl border border-border bg-panel text-ink">
                <step.icon className="size-5" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-display text-xl font-normal tracking-[-0.01em] text-ink">{step.title}</h3>
                <p className="mt-2.5 max-w-[760px] text-sm leading-6 text-muted-foreground">{step.text}</p>
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
