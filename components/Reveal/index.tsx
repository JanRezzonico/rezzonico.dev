"use client";

import { useEffect, useState } from "react";
import { motion, Transition } from "motion/react";

export function Reveal({
  children,
  className = "",
  preset = "fromLeft",
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  preset?: keyof typeof presets;
  index?: number;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    // SSR / JS disabled: completely normal, visible content
    // rendered at the final position, without any animation
    return <div className={className}>{children}</div>;
  }

  const { initial, whileInView, viewport, transition } = presets[preset];

  const resolvedTransition: Transition =
    typeof transition === "function" ? transition(index) : transition;

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={resolvedTransition}
    >
      {children}
    </motion.div>
  );
}

const presets = {
  fromTop: {
    initial: { opacity: 0, y: -40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" } as Transition,
  },
  fromLeft: {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" } as Transition,
  },
  fromRight: {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" } as Transition,
  },
  fromBottom: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" } as Transition,
  },
  card: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: (i: number): Transition => ({
      delay: Math.min(i * 0.12, 0.6), // cap at 0.6s max (after 5 items, all subsequent items will have the same delay)
      duration: 0.5,
      ease: "easeOut",
    }),
  },
};
