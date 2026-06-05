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

/** MyJobAtlas lockup: organic asterisk + editorial serif wordmark. */
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
        size={size + 4}
        className={cn(
          "text-sage transition-transform duration-500 ease-out-soft group-hover:rotate-180",
          starClassName,
        )}
      />
      {markOnly ? null : (
        <span
          className="font-display font-medium tracking-[-0.01em]"
          style={{ fontSize: size }}
        >
          MyJobAtlas
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label="MyJobAtlas home" className="inline-flex">
        {content}
      </Link>
    );
  }
  return content;
}
