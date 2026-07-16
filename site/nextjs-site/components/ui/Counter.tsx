"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "motion/react";

interface CounterProps {
  to: number;
  sufixo?: string;
  className?: string;
  duracao?: number;
}

export function Counter({
  to,
  sufixo = "",
  className,
  duracao = 1.8,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const value = useMotionValue(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      if (ref.current) ref.current.textContent = `${to}${sufixo}`;
      return;
    }
    const controls = animate(value, to, {
      duration: duracao,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${sufixo}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, sufixo, duracao, value, reduce]);

  return (
    <span ref={ref} className={className}>
      0{sufixo}
    </span>
  );
}
