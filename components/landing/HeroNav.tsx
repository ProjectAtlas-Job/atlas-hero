import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { getAppBaseUrl } from "@/lib/env";

const NAV_ITEMS = [
  { href: "#features", label: "Features" },
  { href: "#workflow", label: "Workflow" },
  { href: "#auth", label: "Sign in" },
];

export function HeroNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/82 backdrop-blur-xl">
      <div className="page-shell flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-2xl bg-primary text-[13px] font-semibold text-primary-foreground">
            A
          </span>
          <span className="text-[15px] font-semibold tracking-tight">Atlas</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-card p-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/login" size="sm" variant="outline">
            Login
          </ButtonLink>
          <ButtonLink className="hidden sm:inline-flex" href={`${getAppBaseUrl()}/dashboard`} size="sm">
            Open app
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
