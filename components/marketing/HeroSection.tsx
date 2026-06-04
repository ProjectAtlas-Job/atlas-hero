"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { CrowdCanvas } from "@/components/v1/skiper39";
import { ButtonLink } from "@/components/ui/button";



export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-x-0 bottom-20 h-[54vh] min-h-[390px] overflow-hidden opacity-95 sm:h-[58vh] lg:h-[64vh]">
        <div className="absolute inset-x-[-10vw] bottom-[0vh] h-[15vh] scale-[1.1] sm:scale-[1.22] lg:scale-[1.18]">
          <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--background)_0%,rgba(249,249,247,0.82)_18%,rgba(249,249,247,0.18)_45%,rgba(249,249,247,0.72)_88%,var(--background)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[28vw] bg-[linear-gradient(to_right,var(--background),rgba(249,249,247,0))]" />
        <div className="absolute inset-y-0 right-0 w-[18vw] bg-[linear-gradient(to_left,var(--background),rgba(249,249,247,0))]" />
      </div>

      <div className="page-shell relative z-10 flex min-h-[calc(100dvh-64px)] flex-col justify-start pt-20 pb-[42vh] sm:pt-24 lg:pt-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1000px]"
        >
          <p className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span className="inline-block size-1.5 rounded-full bg-foreground/60" aria-hidden="true" />
            India-first job search infrastructure
          </p>
          <h1 className="mt-5 text-[46px] font-semibold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-[64px] lg:text-[78px]">
            Know which opportunities deserve your time.
          </h1>
          <p className="mt-6 max-w-[680px] text-base leading-7 text-muted-foreground sm:text-lg">
            Atlas reads your profile, proof of work, target roles, companies, job posts, applications, and outcomes as one system. It helps you understand fit, improve weak signals, and keep the search moving without turning it into admin work.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/register" size="lg">
              Get started
              <ArrowRight className="size-4" strokeWidth={1.75} />
            </ButtonLink>
            <ButtonLink href="/login" size="lg" variant="outline">
              Login
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 max-w-[760px]"
        >
        </motion.div>
      </div>
    </section>
  );
}
