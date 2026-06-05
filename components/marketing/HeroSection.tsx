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
      <div className="pointer-events-none absolute inset-x-0 bottom-20 h-[54vh] min-h-[390px] overflow-hidden opacity-95 sm:h-[58vh] lg:h-[64vh]">
        <div className="absolute inset-x-[-10vw] bottom-[0vh] h-[15vh] scale-[1.1] sm:scale-[1.22] lg:scale-[1.18]">
          <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--paper)_0%,color-mix(in_srgb,var(--paper)_82%,transparent)_18%,color-mix(in_srgb,var(--paper)_18%,transparent)_45%,color-mix(in_srgb,var(--paper)_72%,transparent)_88%,var(--paper)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[28vw] bg-[linear-gradient(to_right,var(--paper),transparent)]" />
        <div className="absolute inset-y-0 right-0 w-[18vw] bg-[linear-gradient(to_left,var(--paper),transparent)]" />
      </div>

      <div className="page-shell relative z-10 flex min-h-[calc(100dvh-64px)] flex-col justify-start pt-24 pb-[42vh] sm:pt-28 lg:pt-32">
        <h1 className="font-display text-[clamp(56px,9vw,148px)] font-normal leading-[0.94] tracking-[-0.055em] text-black">
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
          className="mt-7 max-w-[600px] text-base leading-[1.65] text-muted-foreground sm:text-lg"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.42 }}
        >
          MyJobAtlas reads your profile, proof of work, target roles, companies, job posts, applications, and outcomes as
          one system — so you understand fit, improve weak signals, and keep the search moving without the admin work.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row"
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
