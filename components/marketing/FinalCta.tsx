import { ArrowRight } from "lucide-react";

import { SectionReveal } from "@/components/marketing/SectionReveal";
import { ButtonLink } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="page-shell pb-24">
      <SectionReveal>
        <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-border bg-primary p-8 text-primary-foreground shadow-[var(--shadow-float)] sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="text-sm text-primary-foreground/70">Start with a cleaner search system</p>
            <h2 className="mt-3 max-w-[620px] text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              Open Atlas when the search needs structure, context, and momentum.
            </h2>
          </div>
          <ButtonLink className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" href="/register" size="lg">
            Get started
            <ArrowRight className="size-4" strokeWidth={1.75} />
          </ButtonLink>
        </div>
      </SectionReveal>
    </section>
  );
}
