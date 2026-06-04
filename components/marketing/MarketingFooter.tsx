import Link from "next/link";

import { navItems } from "@/components/marketing/content";

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="page-shell flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-2xl bg-primary text-xs font-semibold text-primary-foreground">
              A
            </span>
            <span className="text-sm font-semibold tracking-tight">Atlas</span>
          </Link>
          <p className="mt-3 max-w-[420px] text-sm leading-6 text-muted-foreground">
            Candidate signals, company intelligence, fit scoring, applications, and referrals in one job search system.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Crowd component by Skiper UI. Illustration by OpenPeeps.
          </p>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm text-muted-foreground" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.href} className="transition-colors hover:text-foreground" href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="transition-colors hover:text-foreground" href="/login">
            Login
          </Link>
        </nav>
      </div>
    </footer>
  );
}
