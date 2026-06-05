"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { Asterisk } from "@/components/brand/Asterisk";
import { Wordmark } from "@/components/brand/Wordmark";
import { navItems } from "@/components/marketing/content";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

function Column({ kicker, children, index }: { kicker: string; children: React.ReactNode; index: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.nav
      className="flex flex-col gap-3 border-border-soft pt-6 md:border-l md:pl-8 md:pt-0 [&:first-of-type]:border-l-0 [&:first-of-type]:pl-0"
      aria-label={kicker}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.12 + index * 0.08 }}
    >
      <p className="section-kicker mb-1">({kicker})</p>
      {children}
    </motion.nav>
  );
}

export function MarketingFooter() {
  const reduceMotion = useReducedMotion();
  return (
    <footer className="page-shell pb-10 pt-24">
      <div className="rounded-[22px] border border-border bg-paper-warm/60 p-8 sm:p-12 lg:p-16">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <motion.h2
            className="max-w-[760px] font-display text-[clamp(40px,6vw,104px)] font-normal leading-[0.96] tracking-[-0.05em] text-black"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
          >
            Let&rsquo;s build something meaningful together.
          </motion.h2>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.2 }}
          >
            <Link href="/register" aria-label="Get started" className="icon-button size-[88px]">
              <Asterisk size={38} strokeWidth={1.8} />
            </Link>
          </motion.div>
        </div>

        <hr className="section-rule my-12" />

        <div className="grid gap-8 md:grid-cols-3">
          <Column kicker="Explore" index={0}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-foreground/90 transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </Column>
          <Column kicker="Account" index={1}>
            <Link href="/login" className="text-sm text-foreground/90 transition-colors hover:text-foreground">Login</Link>
            <Link href="/register" className="text-sm text-foreground/90 transition-colors hover:text-foreground">Create account</Link>
            <Link href="/contact-support" className="text-sm text-foreground/90 transition-colors hover:text-foreground">Contact support</Link>
          </Column>
          <Column kicker="Note" index={2}>
            <Wordmark size={15} />
            <p className="mt-1 max-w-[260px] text-sm leading-6 text-muted-foreground">
              India-first job-search infrastructure. Built for candidate signals, fit scoring, and referrals.
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              © {new Date().getFullYear()} MyJobAtlas
            </p>
          </Column>
        </div>
      </div>
    </footer>
  );
}
