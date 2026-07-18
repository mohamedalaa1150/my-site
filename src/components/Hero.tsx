"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers3, Sparkles } from "lucide-react";
import { useGSAP } from "@gsap/react";
import TypingAnimation from "./TypingAnimation";
import personalInfo from "../data/personalInfo.json";
import { gsap } from "@/lib/gsap";

const Hero: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from("[data-hero-eyebrow]", { opacity: 0, y: 16, duration: 0.6 })
          .from(
            "[data-hero-name]",
            { opacity: 0, y: 24, duration: 0.8 },
            "-=0.3"
          )
          .from(
            "[data-hero-typing]",
            { opacity: 0, y: 16, duration: 0.6 },
            "-=0.4"
          )
          .from(
            "[data-hero-subtitle]",
            { opacity: 0, y: 16, duration: 0.6 },
            "-=0.4"
          )
          .from(
            "[data-hero-cta] > *",
            {
              opacity: 0,
              y: 16,
              duration: 0.5,
              stagger: 0.12,
            },
            "-=0.3"
          )
          .from(
            imageWrapRef.current,
            { opacity: 0, scale: 0.92, duration: 0.9 },
            "-=0.7"
          );

        // Signature shimmer sweep across the gold name gradient — reserved for the Hero only
        gsap.fromTo(
          "[data-hero-name] .gradient-text",
          { backgroundPosition: "200% center" },
          {
            backgroundPosition: "0% center",
            duration: 1.6,
            ease: "power2.out",
            delay: 0.6,
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          "[data-hero-eyebrow], [data-hero-name], [data-hero-typing], [data-hero-subtitle], [data-hero-cta] > *",
          { opacity: 1, y: 0 }
        );
        gsap.set(imageWrapRef.current, { opacity: 1, scale: 1 });
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
      <div className="lg:col-span-7 space-y-6 text-left">
        <div className="space-y-4">
          <div data-hero-eyebrow className="eyebrow-pill text-xs font-bold tracking-[0.16em] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            Available for selected projects
          </div>

          <h1
            data-hero-name
            className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-ink"
          >
            I design learning people
            <span
              className="gradient-text block"
              style={{ backgroundSize: "200% auto" }}
            >
              want to finish.
            </span>
          </h1>

          <div
            data-hero-typing
            className="flex flex-wrap items-center gap-x-2 text-sm sm:text-base font-semibold text-ink"
          >
            <span>{personalInfo.name}</span>
            <span className="text-ink-faint">/</span>
            <TypingAnimation
              phrases={personalInfo.typingPhrases}
              typeSpeed={90}
              deleteSpeed={45}
              delayBetweenPhrases={1800}
              className="text-gold font-semibold"
            />
          </div>

          <p
            data-hero-subtitle
            className="max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed"
          >
            {personalInfo.heroSubtitle} From the first storyboard to the final
            SCORM package, every interaction has a reason.
          </p>
        </div>

        <div
          data-hero-cta
          className="flex flex-col sm:flex-row gap-3 sm:items-center"
        >
          <Link href="/projects" className="btn-gold group w-full sm:w-auto">
            <span>Explore selected work</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
          <Link href="/contact" className="btn-outline-gold w-full sm:w-auto">
            Start a conversation
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 pt-1 text-xs text-ink-muted">
          {["Learning strategy", "Interactive courses", "Gamification"].map(
            (skill) => (
              <span
                key={skill}
                className="rounded-full border border-hairline/10 bg-surface/50 px-3 py-1.5"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      <div ref={imageWrapRef} className="relative lg:col-span-5 mx-auto w-full max-w-[29rem]">
        <div
          aria-hidden="true"
          className="absolute -inset-5 rounded-[2.5rem] rotate-3 bg-gold/15 border border-gold/20"
        />
        <div className="relative aspect-[4/4.6] overflow-hidden rounded-[2.25rem] border border-hairline/10 bg-surface shadow-2xl">
          <Image
            src="/img/hero.jpg"
            alt={personalInfo.name}
            fill
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            sizes="(max-width: 1024px) 80vw, 36vw"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-void/80 to-transparent" />
        </div>

        <div className="absolute -left-4 top-8 rounded-2xl border border-hairline/10 bg-surface/90 p-3 shadow-xl backdrop-blur-xl sm:-left-10">
          <div className="flex items-center gap-2">
            <span className="icon-chip !h-9 !w-9 !rounded-xl">
              <Layers3 size={17} />
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-ink-faint">Process</p>
              <p className="text-xs font-bold text-ink">Strategy → Experience</p>
            </div>
          </div>
        </div>

        <div className="absolute -right-2 bottom-8 rounded-2xl bg-teal px-4 py-3 text-[rgb(var(--btn-gold-ink))] shadow-xl sm:-right-8">
          <div className="flex items-center gap-2">
            <Sparkles size={17} />
            <div>
              <p className="text-xl font-black leading-none">14+</p>
              <p className="text-[10px] font-bold uppercase tracking-wider">Projects delivered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
