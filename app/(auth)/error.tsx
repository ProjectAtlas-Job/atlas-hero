"use client";

import Link from "next/link";

import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { FormAlert } from "@/components/ui/form-alert";

export default function AuthErrorPage() {
  return (
    <AuthShell
      description="The account page could not be loaded. Return to login and try the flow again."
      eyebrow="Account"
      title="Authentication page error"
    >
      <FormAlert tone="error">This authentication page could not be loaded.</FormAlert>
      <div className="mt-6">
        <Button asChild>
          <Link href="/login">Back to login</Link>
        </Button>
      </div>
    </AuthShell>
  );
}
