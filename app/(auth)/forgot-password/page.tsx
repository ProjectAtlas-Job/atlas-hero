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

export default function ForgotPasswordPage() {
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
      await api.post("/api/v1/auth/forgot-password", { email: values.email.trim().toLowerCase() });
      setMessage("If that email is registered, you will receive a reset link.");
    } catch (error) {
      setErrorMessage(getApiErrorMessage(error, "Unable to send a reset link right now."));
    }
  });

  return (
    <AuthShell
      description="Enter your email and Job Atlas will send a reset link if the account is eligible for recovery."
      eyebrow="Account recovery"
      title="Request a password reset"
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
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">Password</p>
        <h2 className="mt-3 font-display text-[clamp(28px,4vw,44px)] font-normal tracking-[-0.025em]">Forgot password</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">We will send a reset link if the account exists.</p>
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
              {form.formState.isSubmitting ? "Sending..." : "Send reset link"}
            </Button>
          </form>
        </Form>
      </div>
    </AuthShell>
  );
}
