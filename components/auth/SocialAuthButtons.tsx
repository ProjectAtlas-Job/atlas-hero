"use client";

import { GitHubIcon, GoogleIcon } from "@/components/brand/ProviderIcons";
import { getPublicApiBaseUrl } from "@/lib/env";

/**
 * Social sign-in. These are full-page navigations to the backend OAuth
 * "connect" endpoints, which 302-redirect to Google / GitHub, handle the
 * callback, set the refresh cookie, and bounce the user to the app.
 */
export function SocialAuthButtons({ label = "Continue" }: { label?: string }) {
  const apiBase = getPublicApiBaseUrl();
  const providers = [
    { name: "Google", href: `${apiBase}/api/v1/auth/google/connect`, Icon: GoogleIcon },
    { name: "GitHub", href: `${apiBase}/api/v1/auth/github/connect`, Icon: GitHubIcon },
  ];

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        {providers.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            className="inline-flex h-11 items-center justify-center gap-2.5 rounded-full border border-border bg-card text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-px hover:border-foreground/30 hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
          >
            <Icon size={18} />
            {label} with {name}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        <span className="h-px flex-1 bg-border" />
        or
        <span className="h-px flex-1 bg-border" />
      </div>
    </div>
  );
}
