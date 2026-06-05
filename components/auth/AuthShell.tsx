"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Asterisk } from "@/components/brand/Asterisk";
import { Wordmark } from "@/components/brand/Wordmark";

type AuthShellProps = {
  title: string;
  description: string;
  eyebrow: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
};

const FEATURES = [
  "Resume-aware job matching",
  "Explainable fit and company signals",
  "Application, outreach, and referral history",
];

export function AuthShell({ title, description, eyebrow, children, footer, className }: AuthShellProps) {
  return (
    <main className="flex min-h-[100dvh] text-foreground">
      <aside className="hidden w-[460px] shrink-0 flex-col justify-between border-r border-border px-12 py-12 lg:flex">
        <Wordmark size={17} />

        <div className="space-y-8">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-5 max-w-[360px] font-display text-[clamp(34px,3vw,46px)] font-normal leading-[1.02] tracking-[-0.03em] text-ink">
              {title}
            </h1>
            <p className="mt-5 max-w-[340px] text-sm leading-6 text-muted-foreground">{description}</p>
          </div>

          <ul className="space-y-3">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                <Asterisk size={14} className="shrink-0 text-sage" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-flat p-5 text-[13px] leading-5 text-muted-foreground">
          Create an account, confirm your email, and MyJobAtlas opens your workspace right after sign in.
        </div>
      </aside>

      <section className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-[440px]">
          <div className="mb-8 lg:hidden">
            <Wordmark size={16} />
          </div>

          <div className={cn("surface p-8", className)}>
            {children}
            {footer ? <div className="mt-6 border-t border-border pt-5">{footer}</div> : null}
          </div>
        </div>
      </section>
    </main>
  );
}
