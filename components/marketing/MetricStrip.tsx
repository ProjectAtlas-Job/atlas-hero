import { metricItems } from "@/components/marketing/content";
import { SectionReveal } from "@/components/marketing/SectionReveal";

export function MetricStrip() {
  return (
    <section className="page-shell pb-24">
      <SectionReveal>
        <div className="surface grid gap-px overflow-hidden p-0 md:grid-cols-3">
          {metricItems.map((item) => (
            <div key={item.label} className="bg-transparent p-8">
              <p className="font-display text-4xl font-normal tracking-[-0.03em] text-ink">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
