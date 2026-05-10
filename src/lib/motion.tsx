"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export const easeOut = [0.22, 1, 0.36, 1] as const;

type RevealProps = ComponentProps<typeof motion.div> & {
  delay?: number;
  distance?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
  transition,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: distance }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24, margin: "0px 0px -12% 0px" }}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 0.72,
              delay,
              ease: easeOut,
              ...transition,
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

type RevealStaggerProps = ComponentProps<typeof motion.div> & {
  amount?: number;
  delayChildren?: number;
  staggerChildren?: number;
};

export function RevealStagger({
  children,
  className,
  amount = 0.18,
  delayChildren = 0,
  staggerChildren = 0.14,
  ...props
}: RevealStaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount, margin: "0px 0px -10% 0px" }}
      variants={
        shouldReduceMotion
          ? undefined
          : {
              hidden: {},
              visible: {
                transition: {
                  delayChildren,
                  staggerChildren,
                },
              },
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = ComponentProps<typeof motion.div> & {
  distance?: number;
};

export function RevealItem({ children, className, distance = 28, ...props }: RevealItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={
        shouldReduceMotion
          ? undefined
          : {
              hidden: { opacity: 0, y: distance },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.72,
                  ease: easeOut,
                },
              },
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const Motion = {
  h1: motion.h1,
  p: motion.p,
  section: motion.section,
  useScroll,
  useTransform,
};
