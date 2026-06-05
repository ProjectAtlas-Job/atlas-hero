"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FormAlert } from "@/components/ui/form-alert";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/lib/api";
import { getApiErrorMessage } from "@/lib/api-error";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(120, "Keep your name under 120 characters."),
  email: z.email("Enter a valid email address.").trim(),
  subject: z.string().trim().min(1, "Subject is required.").max(180, "Keep the subject under 180 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more detail.")
    .max(4000, "Keep your message under 4000 characters."),
});

type FormValues = z.infer<typeof schema>;

export default function ContactSupportPage() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      await api.post("/api/v1/auth/contact-support", {
        name: values.name.trim(),
        email: values.email.trim().toLowerCase(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      });
      setSuccessMessage("Your message was sent. Support will follow up by email.");
      form.reset();
    } catch (error) {
      setErrorMessage(getApiErrorMessage(error, "Unable to send your message right now."));
    }
  });

  return (
    <AuthShell
      className="max-w-none"
      description="Send a message if you are blocked on verification, password recovery, or account access."
      eyebrow="Support"
      title="Contact My Job Atlas support"
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
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">Support</p>
        <h2 className="mt-3 font-display text-[clamp(28px,4vw,44px)] font-normal tracking-[-0.025em]">Send a message</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Share the account issue and a reachable email.</p>
      </div>
      <div className="mt-8">
        <Form {...form}>
          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
            </div>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="What do you need help with?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Share the issue, what you expected, and what happened instead." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {successMessage ? <FormAlert tone="success">{successMessage}</FormAlert> : null}
            {errorMessage ? <FormAlert tone="error">{errorMessage}</FormAlert> : null}
            <Button className="w-full" disabled={form.formState.isSubmitting} type="submit">
              {form.formState.isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </form>
        </Form>
      </div>
    </AuthShell>
  );
}
