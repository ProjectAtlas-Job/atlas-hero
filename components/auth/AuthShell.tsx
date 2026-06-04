"use client";

import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

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

export function AuthShell({
  title,
  description,
  eyebrow,
  children,
  footer,
  className,
}: AuthShellProps) {
  return (
    <main className="flex min-h-[100dvh] bg-background text-foreground">
      <aside className="hidden w-[448px] shrink-0 flex-col justify-between border-r border-border px-10 py-10 lg:flex">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-2xl bg-primary text-[13px] font-semibold text-primary-foreground">
            A
          </span>
          <span className="text-[15px] font-semibold tracking-tight">Atlas</span>
        </Link>

        <div className="space-y-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-[340px] text-[32px] font-semibold leading-[1.05] tracking-[-0.04em]">
              {title}
            </h1>
            <p className="mt-4 max-w-[330px] text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>

          <ul className="space-y-3">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 shrink-0 text-foreground" strokeWidth={1.75} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-flat p-4 text-[13px] leading-5 text-muted-foreground">
          Create an account, confirm your email, and Atlas will open the app after sign in.
        </div>
      </aside>

      <section className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-[420px]">
          <Link href="/" className="mb-8 flex items-center gap-2.5 lg:hidden">
            <span className="flex size-9 items-center justify-center rounded-2xl bg-primary text-[13px] font-semibold text-primary-foreground">
              A
            </span>
            <span className="text-[15px] font-semibold tracking-tight">Atlas</span>
          </Link>

          <div className={cn("surface p-8", className)}>
            {children}
            {footer ? <div className="mt-6 border-t border-border pt-5">{footer}</div> : null}
          </div>
        </div>
      </section>
    </main>
  );
}
