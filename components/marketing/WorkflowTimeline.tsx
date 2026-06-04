import { workflowSteps } from "@/components/marketing/content";
import { SectionReveal } from "@/components/marketing/SectionReveal";

export function WorkflowTimeline({ compact = false }: { compact?: boolean }) {
  return (
    <section id="workflow" className={compact ? "" : "page-shell py-24"}>
      <SectionReveal className="max-w-[680px]">
        <p className="text-sm font-medium text-muted-foreground">Workflow</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          Built around the full search loop.
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          The spec is not a generic tracker. Atlas collects market data, turns it into explainable scores, improves the candidate profile, and records outcomes so ranking can improve over time.
        </p>
      </SectionReveal>

      <div className="mt-10 grid gap-4">
        {workflowSteps.map((step, index) => (
          <SectionReveal key={step.title}>
            <article className="group grid gap-5 rounded-[1.5rem] border border-border bg-card p-5 transition duration-200 hover:-translate-y-0.5 hover:bg-muted md:grid-cols-[120px_1fr_48px] md:items-center">
              <div className="font-mono text-sm text-muted-foreground">0{index + 1}</div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-muted transition-colors group-hover:bg-card">
                    <step.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">{step.title}</h3>
                </div>
                <p className="mt-3 max-w-[720px] text-sm leading-6 text-muted-foreground">{step.text}</p>
              </div>
              <div className="hidden size-2 rounded-full bg-foreground md:block" />
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
