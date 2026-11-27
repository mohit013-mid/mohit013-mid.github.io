import type { ReactNode } from "react";
import { m } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Subtle scroll reveal: runs once, only animates opacity and a short translate. */
export function AnimatedSection({ children, className, delay = 0 }: Props) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}
