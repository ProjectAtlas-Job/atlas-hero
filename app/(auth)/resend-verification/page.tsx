"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FormAlert } from "@/components/ui/form-alert";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";
import { getApiErrorMessage } from "@/lib/api-error";

const schema = z.object({
  email: z.email("Enter a valid email address.").trim(),
});

type FormValues = z.infer<typeof schema>;

export default function ResendVerificationPage() {
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setMessage(null);
    setErrorMessage(null);

    try {
      await api.post("/api/v1/auth/resend-verification", { email: values.email.trim().toLowerCase() });
      setMessage("If that account needs verification, a new email is on the way.");
    } catch (error) {
      setErrorMessage(getApiErrorMessage(error, "Unable to send a verification email right now."));
    }
  });

  return (
    <AuthShell
      description="Request a fresh verification email if your first link expired or never arrived."
      eyebrow="Email verification"
      title="Resend verification"
      footer={
        <p className="text-sm text-muted-foreground">
          Back to{" "}
          <Link className="font-medium text-foreground transition-colors hover:text-muted-foreground" href="/login">
            login
          </Link>
          .
        </p>
      }
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">Verification</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Send a new link</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Use the latest email to activate your account.</p>
      </div>
      <div className="mt-8">
        <Form {...form}>
          <form className="space-y-5" onSubmit={onSubmit}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input autoComplete="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {message ? <FormAlert tone="success">{message}</FormAlert> : null}
            {errorMessage ? <FormAlert tone="error">{errorMessage}</FormAlert> : null}
            <Button className="w-full" disabled={form.formState.isSubmitting} type="submit">
              {form.formState.isSubmitting ? "Sending..." : "Send verification email"}
            </Button>
          </form>
        </Form>
      </div>
    </AuthShell>
  );
}
