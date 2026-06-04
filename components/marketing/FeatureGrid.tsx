import { featureCards } from "@/components/marketing/content";
import { SectionReveal } from "@/components/marketing/SectionReveal";

export function FeatureGrid() {
  return (
    <section id="intelligence" className="page-shell py-24">
      <SectionReveal className="max-w-[660px]">
        <p className="text-sm font-medium text-muted-foreground">Intelligence layer</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          Scores that explain themselves.
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Atlas separates signal extraction from scoring. Profiles, jobs, companies, applications, and outcomes become versioned features first; recommendations are built from those features later.
        </p>
      </SectionReveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {featureCards.map((feature) => (
          <SectionReveal key={feature.title}>
            <article className="group h-full rounded-[1.5rem] border border-border bg-card p-7 transition duration-200 hover:-translate-y-1 hover:bg-muted focus-within:ring-4 focus-within:ring-ring">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-muted transition-colors group-hover:bg-card">
                <feature.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em]">{feature.title}</h3>
              <p className="mt-3 max-w-[520px] text-sm leading-6 text-muted-foreground">{feature.text}</p>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
