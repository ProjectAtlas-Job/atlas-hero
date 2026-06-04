import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type FormAlertProps = {
  children: ReactNode;
  tone?: "error" | "success" | "neutral";
};

export function FormAlert({ children, tone = "neutral" }: FormAlertProps) {
  return (
    <div
      className={cn(
        "rounded-xl border px-4 py-3 text-sm leading-6",
        tone === "error" && "border-destructive/30 bg-destructive/5 text-destructive",
        tone === "success" && "border-foreground/10 bg-muted text-foreground",
        tone === "neutral" && "border-border bg-muted text-muted-foreground",
      )}
    >
      {children}
    </div>
  );
}
