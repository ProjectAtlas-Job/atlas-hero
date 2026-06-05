"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { CrowdCanvas } from "@/components/v1/skiper39";
import { ButtonLink } from "@/components/ui/button";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const LINES = ["Know which roles", "deserve your time."];

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-16">
      {/* Crowd of peeps, drawn behind the type along the bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 h-[66vh] min-h-[500px] overflow-hidden opacity-95 sm:h-[70vh] lg:h-[76vh]">
        <div className="absolute inset-x-[-14vw] bottom-[-2vh] h-[28vh] scale-[1.08] sm:h-[32vh] sm:scale-[1.16] lg:h-[36vh] lg:scale-[1.12]">
          <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--paper)_0%,color-mix(in_srgb,var(--paper)_76%,transparent)_16%,color-mix(in_srgb,var(--paper)_8%,transparent)_44%,color-mix(in_srgb,var(--paper)_48%,transparent)_88%,var(--paper)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[28vw] bg-[linear-gradient(to_right,var(--paper),transparent)]" />
        <div className="absolute inset-y-0 right-0 w-[18vw] bg-[linear-gradient(to_left,var(--paper),transparent)]" />
      </div>

      <div className="page-shell relative z-10 flex min-h-[calc(100dvh-64px)] flex-col justify-start pb-[52vh] pt-20 sm:pt-24 lg:pt-28">
        <h1 className="max-w-[920px] font-display text-[clamp(42px,6.2vw,96px)] font-normal leading-[1.0] tracking-[-0.045em] text-black">
          {LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={reduceMotion ? false : { y: "110%" }}
                animate={reduceMotion ? undefined : { y: "0%" }}
                transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.15 + i * 0.09 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-6 max-w-[560px] text-[15px] leading-[1.65] text-muted-foreground sm:text-base"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.42 }}
        >
          My Job Atlas reads your profile, proof of work, target roles, companies, job posts, applications, and outcomes as
          one system — so you understand fit, improve weak signals, and keep the search moving without the admin work.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.52 }}
        >
          <ButtonLink href="/register" size="lg">
            Get started
            <ArrowRight className="size-4" strokeWidth={1.75} />
          </ButtonLink>
          <ButtonLink href="/login" size="lg" variant="outline">
            Login
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
