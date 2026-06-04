"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { FormAlert } from "@/components/ui/form-alert";
import { api } from "@/lib/api";
import { getApiErrorMessage } from "@/lib/api-error";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const emailQuery = searchParams.get("email") ?? "";
  const [linkStatus, setLinkStatus] = useState<"idle" | "loading" | "success" | "error">(token ? "loading" : "idle");
  const [linkMessage, setLinkMessage] = useState<string | null>(token ? "Verifying your email link..." : null);

  useEffect(() => {
    async function verifyEmailLink() {
      if (!token) {
        setLinkStatus("idle");
        setLinkMessage(null);
        return;
      }

      setLinkStatus("loading");
      setLinkMessage("Verifying your email link...");

      try {
        await api.post("/api/v1/auth/verify-email", { token });
        setLinkStatus("success");
        setLinkMessage("Email verified. You can now log in.");
      } catch (error) {
        setLinkStatus("error");
        setLinkMessage(getApiErrorMessage(error, "That verification link is invalid or expired."));
      }
    }

    void verifyEmailLink();
  }, [token]);

  return (
    <AuthShell
      description={emailQuery ? `Complete activation for ${emailQuery}.` : "Open the verification link from your inbox to activate the account."}
      eyebrow="Email verification"
      title="Confirm your email"
      footer={
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <Link className="font-medium text-foreground transition-colors hover:text-muted-foreground" href="/resend-verification">
            Resend verification
          </Link>
          <Link className="transition-colors hover:text-foreground" href="/login">
            Back to login
          </Link>
        </div>
      }
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">Activation</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Verify email</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Activate the account before the first login.</p>
      </div>
      <div className="mt-8 space-y-5">
        {linkMessage ? (
          <FormAlert tone={linkStatus === "error" ? "error" : linkStatus === "success" ? "success" : "neutral"}>
            {linkMessage}
          </FormAlert>
        ) : null}
        {linkStatus === "success" ? (
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/login">Go to login</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/forgot-password">Need password help?</Link>
            </Button>
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-muted px-5 py-4 text-sm leading-6 text-muted-foreground">
            <p className="font-medium text-foreground">If the link no longer works</p>
            <p className="mt-2">Request a new verification email, then reopen the latest message.</p>
          </div>
        )}
      </div>
    </AuthShell>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<main className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">Loading...</main>}>
      <VerifyEmailContent />
    </Suspense>
  );
}
