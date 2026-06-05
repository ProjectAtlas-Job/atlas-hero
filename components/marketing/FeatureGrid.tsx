import { featureCards } from "@/components/marketing/content";
import { SectionReveal } from "@/components/marketing/SectionReveal";

export function FeatureGrid() {
  return (
    <section id="intelligence" className="page-shell py-24">
      <SectionReveal className="max-w-[680px]">
        <p className="eyebrow">(01) Intelligence layer</p>
        <h2 className="mt-5 font-display text-[clamp(34px,5vw,60px)] font-normal leading-[1.02] tracking-[-0.03em] text-ink">
          Scores that explain themselves.
        </h2>
        <p className="mt-5 text-base leading-7 text-muted-foreground">
          My Job Atlas separates signal extraction from scoring. Profiles, jobs, companies, applications, and outcomes
          become versioned features first; recommendations are built from those features later.
        </p>
      </SectionReveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {featureCards.map((feature) => (
          <SectionReveal key={feature.title}>
            <article className="surface surface-hover group h-full p-8">
              <div className="flex size-11 items-center justify-center rounded-2xl border border-border bg-panel text-ink">
                <feature.icon className="size-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-8 font-display text-2xl font-normal tracking-[-0.02em] text-ink">{feature.title}</h3>
              <p className="mt-3 max-w-[520px] text-sm leading-6 text-muted-foreground">{feature.text}</p>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
