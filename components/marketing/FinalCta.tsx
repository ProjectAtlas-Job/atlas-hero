import Link from "next/link";

import { Asterisk } from "@/components/brand/Asterisk";
import { SectionReveal } from "@/components/marketing/SectionReveal";
import { ButtonLink } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="page-shell pb-20">
      <SectionReveal>
        <div className="surface flex flex-col items-start gap-10 p-10 sm:p-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[620px]">
            <p className="eyebrow">Start with a cleaner search</p>
            <h2 className="mt-5 font-display text-[clamp(34px,5.4vw,72px)] font-normal leading-[0.98] tracking-[-0.035em] text-ink">
              Open MyJobAtlas when the search needs structure.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-5">
            <Link
              href="/register"
              aria-label="Get started"
              className="group grid size-[72px] place-items-center rounded-full border border-border bg-paper text-ink transition-all duration-500 ease-out-soft hover:rotate-180 hover:scale-105 hover:bg-sage focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
            >
              <Asterisk size={32} strokeWidth={2} />
            </Link>
            <ButtonLink href="/register" size="lg">
              Get started
            </ButtonLink>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
