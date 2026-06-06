"use client";

import { GitHubIcon, GoogleIcon } from "@/components/brand/ProviderIcons";
import { getPublicApiBaseUrl } from "@/lib/env";

/**
 * Icon-only social sign-in. Full-page navigations to the backend OAuth
 * "connect" endpoints, which redirect to the provider, handle the callback,
 * set the refresh cookie, and bounce the user to the app.
 */
export function SocialAuthButtons() {
  const apiBase = getPublicApiBaseUrl();
  const providers = [
    { name: "Google", href: `${apiBase}/api/v1/auth/google/connect`, Icon: GoogleIcon },
    { name: "GitHub", href: `${apiBase}/api/v1/auth/github/connect`, Icon: GitHubIcon },
  ];

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-center gap-3">
        {providers.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            aria-label={`Continue with ${name}`}
            title={`Continue with ${name}`}
            className="grid size-12 place-items-center rounded-full border border-border bg-card text-ink transition-all duration-300 ease-out-soft hover:border-black hover:bg-black hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
        <span className="h-px flex-1 bg-border" />
        or
        <span className="h-px flex-1 bg-border" />
      </div>
    </div>
  );
}
