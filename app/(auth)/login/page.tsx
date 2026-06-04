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
import { getAppBaseUrl } from "@/lib/env";
import type { TokenResponse } from "@/lib/types";

const schema = z.object({
  email: z.email("Enter a valid email address.").trim(),
  password: z.string().min(1, "Password is required."),
});

type FormValues = z.infer<typeof schema>;

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setErrorMessage(null);

    try {
      const params = new URLSearchParams();
      params.set("username", values.email.trim().toLowerCase());
      params.set("password", values.password);

      await api.post<TokenResponse>("/api/v1/auth/login", params, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      window.location.assign(`${getAppBaseUrl()}/dashboard`);
    } catch (error: unknown) {
      const status =
        typeof error === "object" && error && "response" in error
          ? (error as { response?: { status?: number } }).response?.status
          : undefined;
      if (status === 403) {
        setErrorMessage("Email not verified.");
        return;
      }
      if (status === 401) {
        setErrorMessage("Invalid email or password.");
        return;
      }
      setErrorMessage(getApiErrorMessage(error, "Unable to sign in right now."));
    }
  });

  return (
    <AuthShell
      description="Sign in on the root domain. Atlas will open the app on app.myjobatlas.site after the backend refresh cookie is set."
      eyebrow="Account access"
      title="Sign in to Atlas"
      footer={
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <Link className="transition-colors hover:text-foreground" href="/forgot-password">
            Forgot password?
          </Link>
          <Link className="transition-colors hover:text-foreground" href="/register">
            Create account
          </Link>
        </div>
      }
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">Account</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Log in</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Continue to your Atlas account.</p>
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input autoComplete="current-password" placeholder="Your password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {errorMessage ? <FormAlert tone="error">{errorMessage}</FormAlert> : null}
            <Button className="w-full" disabled={form.formState.isSubmitting} type="submit">
              {form.formState.isSubmitting ? "Signing in..." : "Log in"}
            </Button>
          </form>
        </Form>
      </div>
    </AuthShell>
  );
}
