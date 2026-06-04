import { useCases } from "@/components/marketing/content";
import { SectionReveal } from "@/components/marketing/SectionReveal";

export function UseCasePanel() {
  return (
    <section className="page-shell pb-24">
      <div className="grid gap-8 rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[0.75fr_1fr] lg:p-10">
        <SectionReveal>
          <p className="text-sm font-medium text-muted-foreground">Who it is for</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Built for people who need a repeatable system.
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Atlas works best when the search has multiple moving parts: roles, documents, people, deadlines, and follow-ups.
          </p>
        </SectionReveal>

        <div className="grid gap-3">
          {useCases.map((useCase) => (
            <SectionReveal key={useCase.title}>
              <article className="group rounded-[1.5rem] border border-border bg-background p-5 transition duration-200 hover:-translate-y-0.5 hover:bg-muted">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-muted transition-colors group-hover:bg-card">
                    <useCase.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.02em]">{useCase.title}</h3>
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
