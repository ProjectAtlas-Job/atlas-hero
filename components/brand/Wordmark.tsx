import Link from "next/link";

import { cn } from "@/lib/utils";
import { Asterisk } from "@/components/brand/Asterisk";

type WordmarkProps = {
  href?: string;
  className?: string;
  starClassName?: string;
  size?: number;
  /** Hide the text label and show only the asterisk mark. */
  markOnly?: boolean;
};

/** My Job Atlas lockup: eight-point asterisk + editorial Playfair wordmark. */
export function Wordmark({
  href = "/",
  className,
  starClassName,
  size = 18,
  markOnly = false,
}: WordmarkProps) {
  const content = (
    <span className={cn("group inline-flex items-center gap-2 text-ink", className)}>
      <Asterisk
        size={size + 3}
        className={cn(
          "text-ink transition-transform duration-500 ease-out-soft group-hover:rotate-[22.5deg] group-hover:scale-105",
          starClassName,
        )}
      />
      {markOnly ? null : (
        <span className="brand-wordmark" style={{ fontSize: size + 1 }}>
          My Job Atlas
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label="My Job Atlas home" className="inline-flex outline-none focus-visible:opacity-70">
        {content}
      </Link>
    );
  }
  return content;
}
