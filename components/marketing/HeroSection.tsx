"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Asterisk } from "@/components/brand/Asterisk";
import { ButtonLink } from "@/components/ui/button";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="page-shell relative flex min-h-[92vh] flex-col justify-center pb-24 pt-32">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1120px]"
      >
        <p className="eyebrow flex items-center gap-2.5">
          <Asterisk size={14} className="text-sage" />
          India-first job search infrastructure
        </p>

        <h1 className="mt-7 font-display text-[clamp(48px,9vw,124px)] font-normal leading-[0.92] tracking-[-0.045em] text-ink">
          Know which roles
          <br />
          deserve your time
          <span className="text-sage">.</span>
        </h1>

        <p className="mt-8 max-w-[620px] text-lg leading-[1.6] text-muted-foreground">
          MyJobAtlas reads your profile, proof of work, target roles, companies, job posts, applications, and outcomes as
          one system — so you understand fit, improve weak signals, and keep the search moving without the admin work.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/register" size="lg">
            Get started
            <ArrowRight className="size-4" strokeWidth={1.75} />
          </ButtonLink>
          <ButtonLink href="/login" size="lg" variant="outline">
            Login
          </ButtonLink>
        </div>
      </motion.div>
    </section>
  );
}
