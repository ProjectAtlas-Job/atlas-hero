import { cn } from "@/lib/utils";

type AsteriskProps = {
  className?: string;
  size?: number;
  strokeWidth?: number;
  title?: string;
};

/**
 * The MyJobAtlas brand mark: a soft, slightly organic six-point asterisk.
 * Rounded caps, hand-made feel — not a geometric spinner. Inherits `currentColor`.
 */
export function Asterisk({ className, size = 24, strokeWidth = 2.4, title }: AsteriskProps) {
  return (
    <svg
      className={cn("inline-block", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="3.8" y1="7.5" x2="20.2" y2="16.5" />
      <line x1="3.8" y1="16.5" x2="20.2" y2="7.5" />
    </svg>
  );
}
