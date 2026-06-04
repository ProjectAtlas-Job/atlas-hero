import { metricItems } from "@/components/marketing/content";
import { SectionReveal } from "@/components/marketing/SectionReveal";

export function MetricStrip() {
  return (
    <section className="page-shell pb-24">
      <SectionReveal>
        <div className="grid gap-3 rounded-[2rem] border border-border bg-card p-4 shadow-[var(--shadow-soft)] md:grid-cols-3">
          {metricItems.map((item) => (
            <div key={item.label} className="group rounded-[1.5rem] bg-muted p-6 transition duration-200 hover:-translate-y-0.5 hover:bg-background">
              <p className="font-mono text-2xl font-semibold tracking-[-0.04em]">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
