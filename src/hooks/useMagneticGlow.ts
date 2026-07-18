"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Adds a pointer-following gold glow to every `.glass-card` inside `containerRef`.
 * Pass extra `deps` to re-scan the container (e.g. when a grid's item count changes).
 */
export function useMagneticGlow(
  containerRef: RefObject<HTMLElement | null>,
  deps: unknown[] = []
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>(".glass-card")
    );
    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      const glow = document.createElement("div");
      glow.setAttribute("aria-hidden", "true");
      Object.assign(glow.style, {
        position: "absolute",
        inset: "0",
        opacity: "0",
        pointerEvents: "none",
        borderRadius: "inherit",
        overflow: "hidden",
        transition: "opacity 0.3s ease",
        background:
          "radial-gradient(320px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgb(var(--gold) / 0.18), transparent 65%)",
      });
      card.appendChild(glow);

      const pos = { x: 0, y: 0 };
      const setX = gsap.quickTo(pos, "x", {
        duration: 0.4,
        ease: "power2",
        onUpdate: () => glow.style.setProperty("--glow-x", `${pos.x}px`),
      });
      const setY = gsap.quickTo(pos, "y", {
        duration: 0.4,
        ease: "power2",
        onUpdate: () => glow.style.setProperty("--glow-y", `${pos.y}px`),
      });

      const handleMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        setX(e.clientX - rect.left);
        setY(e.clientY - rect.top);
        glow.style.opacity = "1";
      };
      const handleLeave = () => {
        glow.style.opacity = "0";
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);

      cleanups.push(() => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
        glow.remove();
      });
    });

    return () => cleanups.forEach((fn) => fn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
