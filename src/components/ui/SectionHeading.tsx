"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight: string;
  subtitle?: string;
  align?: "center" | "left";
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "left",
}) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        gsap.set(targets, { opacity: 0, y: 24 });
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
            once: true,
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-reveal]", { opacity: 1, y: 0 });
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <div
      ref={rootRef}
      className={`mb-9 lg:mb-14 ${align === "center" ? "text-center" : ""}`}
    >
      {eyebrow && (
        <p
          data-reveal
          className="eyebrow-pill mb-4 text-[11px] font-bold tracking-[0.16em] uppercase"
        >
          {eyebrow}
        </p>
      )}
      <h2
        data-reveal
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02] text-ink mb-4"
      >
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && (
        <p
          data-reveal
          className={`text-sm sm:text-base lg:text-lg leading-relaxed text-ink-muted ${
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
