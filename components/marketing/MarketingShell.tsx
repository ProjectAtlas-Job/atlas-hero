import type { ReactNode } from "react";

import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingNav } from "@/components/marketing/MarketingNav";

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-[100dvh] overflow-hidden bg-background text-foreground">
      <MarketingNav />
      {children}
      <MarketingFooter />
    </main>
  );
}
