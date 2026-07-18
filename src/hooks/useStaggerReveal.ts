"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useStaggerReveal<T extends HTMLElement>(itemSelector: string) {
  const containerRef = useRef<T>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray<HTMLElement>(
          itemSelector,
          containerRef.current
        );
        if (!items.length) return;

        gsap.set(items, { opacity: 0, y: 32 });
        ScrollTrigger.batch(items, {
          start: "top 85%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.1,
              // Release the inline transform once revealed so CSS-driven
              // hover effects (e.g. .glass-card's hover lift) aren't
              // permanently overridden by GSAP's leftover inline style.
              clearProps: "transform",
            }),
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(itemSelector, { opacity: 1, y: 0, clearProps: "transform" });
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [itemSelector] }
  );

  return containerRef;
}
