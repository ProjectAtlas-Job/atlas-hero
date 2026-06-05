"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Asterisk } from "@/components/brand/Asterisk";

const SESSION_KEY = "mja-loader-seen";
const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;

/**
 * Title-card loader (design system §7): the star scales in and breathes,
 * the name fades in beneath it, then the curtain lifts. Once per session.
 */
export function Loader() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(SESSION_KEY)) return;

    setVisible(true);
    window.sessionStorage.setItem(SESSION_KEY, "1");
    const timeout = window.setTimeout(() => setVisible(false), reduceMotion ? 300 : 1700);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[1000] grid place-items-center bg-paper"
          initial={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: "-3%" }}
          transition={{ duration: 0.65, ease: EASE_IN_OUT }}
          aria-hidden="true"
        >
          <div className="grid justify-items-center gap-6">
            <motion.div
              className="text-ink"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.82, rotate: -18, filter: "blur(6px)" }}
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, scale: [0.82, 1.04, 1], rotate: [-18, 4, 0], filter: "blur(0px)" }
              }
              transition={{ duration: 0.8, ease: EASE_OUT }}
            >
              <Asterisk size={84} strokeWidth={1.9} />
            </motion.div>
            <motion.span
              className="font-mono text-[11px] uppercase tracking-[0.32em] text-muted-foreground"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.52, delay: reduceMotion ? 0 : 0.48, ease: "easeOut" }}
            >
              MyJobAtlas
            </motion.span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
