"use client";

import type { CSSProperties } from "react";

const COLORS = ["#FF6A4D", "#FFC73A", "#16A897", "#AE9BFF", "#7CC8FB", "#6CC04A"];

export interface ConfettiBurst {
  id: number;
  pieces: { dx: number; dy: number; rot: number; color: string; w: number; h: number; delay: number }[];
}

/** Built in event handlers only, so random values never reach server render. */
export function makeBurst(count: number): ConfettiBurst {
  return {
    id: Date.now(),
    pieces: Array.from({ length: count }, () => {
      const angle = Math.random() * Math.PI * 2;
      const dist = 70 + Math.random() * 120;
      return {
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist - 40,
        rot: (Math.random() - 0.5) * 720,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        w: 6 + Math.random() * 6,
        h: 8 + Math.random() * 8,
        delay: Math.random() * 80,
      };
    }),
  };
}

export default function Confetti({ burst }: { burst: ConfettiBurst | null }) {
  if (!burst) return null;
  return (
    <div key={burst.id} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {burst.pieces.map((p, i) => (
        <span
          key={i}
          className="confetti-piece absolute left-1/2 top-1/2 rounded-[2px] border border-ink"
          style={
            {
              width: p.w,
              height: p.h,
              background: p.color,
              animationDelay: `${p.delay}ms`,
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
              "--rot": `${p.rot}deg`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
