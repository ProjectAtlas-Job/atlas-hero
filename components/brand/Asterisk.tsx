import { cn } from "@/lib/utils";

type AsteriskProps = {
  className?: string;
  size?: number;
  strokeWidth?: number;
  title?: string;
};

/**
 * The My Job Atlas brand mark: a soft eight-point asterisk/starburst.
 * Rounded caps, slightly organic — a confident signature, not a spinner.
 * Inherits `currentColor`.
 */
export function Asterisk({ className, size = 24, strokeWidth = 2.2, title }: AsteriskProps) {
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
      <line x1="12" y1="2.5" x2="12" y2="21.5" />
      <line x1="2.5" y1="12" x2="21.5" y2="12" />
      <line x1="5.3" y1="5.3" x2="18.7" y2="18.7" />
      <line x1="18.7" y1="5.3" x2="5.3" y2="18.7" />
    </svg>
  );
}
