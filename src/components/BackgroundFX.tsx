"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const BackgroundFX: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Content height changes between routes; the scrub trigger below is
  // created once and won't auto-detect that, so re-measure on navigation.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const blobs = gsap.utils.toArray<HTMLElement>("[data-blob]");
        blobs.forEach((blob, i) => {
          gsap.to(blob, {
            yPercent: i % 2 === 0 ? 18 : -18,
            xPercent: i % 2 === 0 ? -6 : 6,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.2,
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div
        data-blob
        className="absolute -top-56 left-[8%] h-[38rem] w-[38rem] rounded-full opacity-30 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--gold) / 0.62) 0%, transparent 68%)",
        }}
      />
      <div
        data-blob
        className="absolute top-[28%] -right-48 h-[34rem] w-[34rem] rounded-full opacity-20 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--teal) / 0.48) 0%, transparent 70%)",
        }}
      />
      <div
        data-blob
        className="absolute -bottom-32 left-[28%] h-[32rem] w-[32rem] rounded-full opacity-20 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--coral) / 0.42) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default BackgroundFX;
