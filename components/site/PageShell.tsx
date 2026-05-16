"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="pt-24 sm:pt-28"
    >
      {children}
    </motion.main>
  );
}

/**
 * Scroll-triggered fade-up reveal. Animates when the element enters the viewport.
 */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  amount = 0.2,
  className,
}: { children: ReactNode; delay?: number; y?: number; amount?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Wraps a grid or row of children that should cascade in on scroll.
 * Use with <StaggerItem> children.
 */
export function StaggerGroup({
  children,
  amount = 0.15,
  className,
}: { children: ReactNode; amount?: number; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual item inside a <StaggerGroup>. Each one fades up in cascade.
 */
export function StaggerItem({
  children,
  y = 40,
  className,
}: { children: ReactNode; y?: number; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Reveals a block of text (paragraph, subheading) as one unit on scroll.
 * Use for body copy, eyebrows, secondary headings.
 */
export function RevealText({
  children,
  delay = 0,
  className,
}: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Reveals a heading word-by-word in cascade. Use for hero h1s and section h2s
 * where extra polish is worth the visual weight.
 */
export function RevealHeading({
  text,
  className,
  as: Tag = "h1",
}: { text: string; className?: string; as?: "h1" | "h2" | "h3" }) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
        }}
        className="inline"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="inline-block"
            style={{ marginRight: "0.25em" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      {children}
    </span>
  );
}