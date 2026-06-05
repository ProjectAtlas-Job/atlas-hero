import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { Wordmark } from "@/components/brand/Wordmark";
import { navItems } from "@/components/marketing/content";

export function MarketingNav() {
  return (
    <header className="fixed inset-x-0 top-4 z-40">
      <div className="page-shell">
        <div className="nav-pill grid min-h-[56px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-5">
          <Wordmark size={16} />

          <nav className="hidden items-center justify-center gap-[clamp(20px,4vw,52px)] md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link py-2">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
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
