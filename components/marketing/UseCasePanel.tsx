import { useCases } from "@/components/marketing/content";
import { SectionReveal } from "@/components/marketing/SectionReveal";

export function UseCasePanel() {
  return (
    <section className="page-shell pb-24">
      <div className="surface grid gap-10 p-8 lg:grid-cols-[0.8fr_1fr] lg:p-12">
        <SectionReveal>
          <p className="eyebrow">(03) Who it is for</p>
          <h2 className="mt-5 font-display text-[clamp(30px,4vw,48px)] font-normal leading-[1.04] tracking-[-0.03em] text-ink">
            Built for people who need a repeatable system.
          </h2>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            My Job Atlas works best when the search has multiple moving parts: roles, documents, people, deadlines, and
            follow-ups.
          </p>
        </SectionReveal>

        <div className="grid gap-3">
          {useCases.map((useCase) => (
            <SectionReveal key={useCase.title}>
              <article className="surface-flat surface-hover group p-6">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-border bg-panel text-ink">
                    <useCase.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-normal tracking-[-0.01em] text-ink">{useCase.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{useCase.text}</p>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
