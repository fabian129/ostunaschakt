"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "left" | "right";

type MotionSectionProps = {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
};

function getOffset(direction: Direction) {
  if (direction === "left") return { x: 28, y: 0 };
  if (direction === "right") return { x: -28, y: 0 };
  return { x: 0, y: 24 };
}

export function MotionSection({
  children,
  delay = 0,
  direction = "up",
}: MotionSectionProps) {
  const reduceMotion = useReducedMotion();
  const offset = getOffset(direction);

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
