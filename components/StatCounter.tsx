"use client";

import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface StatCounterProps {
  endValue: number;
  label: string;
  suffix?: string;
}

export function StatCounter({ endValue, label, suffix = "" }: StatCounterProps) {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(0, endValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toString() + suffix;
        },
      });

      return () => controls.stop();
    }
  }, [endValue, isInView, suffix]);

  return (
    <div className="flex flex-col items-center">
      <p ref={nodeRef} className="font-heading font-bold text-4xl md:text-5xl text-gold mb-2">
        0{suffix}
      </p>
      <p className="font-ui font-semibold text-charcoal tracking-wide uppercase text-sm">
        {label}
      </p>
    </div>
  );
}
