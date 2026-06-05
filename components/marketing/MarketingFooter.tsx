import Link from "next/link";

import { Wordmark } from "@/components/brand/Wordmark";
import { navItems } from "@/components/marketing/content";

export function MarketingFooter() {
  return (
    <footer className="page-shell pb-10 pt-4">
      <div className="surface-flat grid gap-10 rounded-[2rem] p-8 sm:p-10 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
        <div>
          <Wordmark size={17} />
          <p className="mt-4 max-w-[420px] text-sm leading-6 text-muted-foreground">
            Candidate signals, company intelligence, fit scoring, applications, and referrals in one quiet job-search
            system.
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            © {new Date().getFullYear()} MyJobAtlas
          </p>
        </div>

        <nav className="flex flex-col gap-2.5" aria-label="Explore">
          <p className="eyebrow mb-1">Explore</p>
          {navItems.map((item) => (
            <Link key={item.href} className="text-sm text-foreground/90 transition-colors hover:text-foreground" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col gap-2.5" aria-label="Account">
          <p className="eyebrow mb-1">Account</p>
          <Link className="text-sm text-foreground/90 transition-colors hover:text-foreground" href="/login">
            Login
          </Link>
          <Link className="text-sm text-foreground/90 transition-colors hover:text-foreground" href="/register">
            Create account
          </Link>
          <Link className="text-sm text-foreground/90 transition-colors hover:text-foreground" href="/contact-support">
            Contact support
          </Link>
        </nav>
      </div>
    </footer>
  );
}
