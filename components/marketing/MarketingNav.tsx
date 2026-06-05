import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { Wordmark } from "@/components/brand/Wordmark";
import { navItems } from "@/components/marketing/content";

export function MarketingNav() {
  return (
    <header className="fixed inset-x-0 top-4 z-40">
      <div className="page-shell">
        <div className="nav-pill flex h-14 items-center justify-between gap-6 pl-5 pr-2">
          <Wordmark size={16} />

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-all duration-200 hover:-translate-y-px hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href="/login" size="sm" variant="ghost">
              Login
            </ButtonLink>
            <ButtonLink className="hidden sm:inline-flex" href="/register" size="sm">
              Get started
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
