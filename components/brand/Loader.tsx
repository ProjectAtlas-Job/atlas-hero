"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Asterisk } from "@/components/brand/Asterisk";

const SESSION_KEY = "mja-loader-seen";

/**
 * First-load brand moment: the asterisk enters the stage, then the curtain lifts.
 * Mirrors the design-system loader sequence and shows once per browser session.
 */
export function Loader() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(SESSION_KEY)) return;

    setVisible(true);
    window.sessionStorage.setItem(SESSION_KEY, "1");
    const timeout = window.setTimeout(() => setVisible(false), reduceMotion ? 350 : 1500);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[1000] grid place-items-center bg-paper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <motion.div
            className="text-ink"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.72, rotate: -16 }}
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: [0.72, 1.12, 0.96, 1], rotate: [-16, 10, -4, 0] }
            }
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Asterisk size={92} strokeWidth={2} />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
