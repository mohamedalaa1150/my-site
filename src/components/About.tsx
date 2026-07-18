"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, User, Award, Target, X, Circle } from "lucide-react";
import { useGSAP } from "@gsap/react";
import personalInfo from "../data/personalInfo.json";
import SectionHeading from "./ui/SectionHeading";
import Modal from "./ui/Modal";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import { useMagneticGlow } from "@/hooks/useMagneticGlow";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export const STATS = [
  { icon: User, title: "Years\n Experience", value: 3, suffix: "+" },
  { icon: Award, title: "Projects\n Completed", value: 14, suffix: "+" },
  { icon: Target, title: "Companies\n Worked", value: 3, suffix: "+" },
];

const About: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const statsRef = useStaggerReveal<HTMLDivElement>(".stat-card");
  const knowledgeRef = useStaggerReveal<HTMLDivElement>(".knowledge-item");
  const programsRef = useStaggerReveal<HTMLDivElement>(".program-item");
  useMagneticGlow(statsRef);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray<HTMLElement>("[data-stat-value]");
        items.forEach((el) => {
          const target = Number(el.dataset.target ?? "0");
          const counter = { val: 0 };
          ScrollTrigger.create({
            trigger: el,
            start: "top 90%",
            once: true,
            onEnter: () => {
              gsap.to(counter, {
                val: target,
                duration: 1.2,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = Math.round(counter.val).toString();
                },
              });
            },
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.utils.toArray<HTMLElement>("[data-stat-value]").forEach((el) => {
          el.textContent = el.dataset.target ?? "0";
        });
      });

      return () => mm.revert();
    },
    { scope: statsRef }
  );

  return (
    <>
      <section className="section-padding relative">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Who I Am"
            title="About"
            highlight="Me"
            subtitle="A little more about how I approach instructional design"
          />

          <div className="bento-grid">
            {/* Bio cell */}
            <div className="col-span-1 sm:col-span-4 lg:col-span-6 xl:col-span-12 glass-card violet-card space-y-5 lg:p-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl overflow-hidden border border-white/20 flex-shrink-0 rotate-[-3deg]">
                  <Image
                    src="/img/hero.jpg"
                    alt={personalInfo.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-2xl lg:text-4xl leading-tight font-semibold text-white">
                  Transforming Learning Through Innovation
                </h3>
              </div>
              <p className="max-w-3xl text-sm sm:text-base lg:text-lg text-white/75 leading-relaxed">
                {personalInfo.about.summary}
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="btn-gold group w-full sm:w-auto"
              >
                <span>Know More</span>
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
            </div>

            {/* Stat cells — `contents` so each stat becomes its own bento cell */}
            <div ref={statsRef} className="contents">
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-4 glass-card min-h-44 flex flex-col items-start justify-between"
                >
                  <span className="icon-chip"><stat.icon size={20} /></span>
                  <div className="font-display text-4xl lg:text-5xl font-semibold text-ink">
                    <span data-stat-value data-target={stat.value}>
                      0
                    </span>
                    <span className="text-gold">{stat.suffix}</span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.12em] text-ink-muted">{stat.title.split("\n").join(" ")}</div>
                </div>
              ))}
            </div>

            {/* Knowledge cell */}
            <div className="col-span-1 sm:col-span-4 lg:col-span-3 xl:col-span-6 glass-card space-y-5 lg:p-8">
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-ink">
                Knowledge
              </h3>
              <div ref={knowledgeRef} className="flex flex-wrap gap-2.5">
                {personalInfo.about.knowledge.map((knowledge, index) => (
                  <div key={index} className="knowledge-item rounded-full border border-hairline/10 bg-void/20 px-3 py-2">
                    <span className="text-sm text-ink-muted font-semibold flex items-center gap-2">
                      <Circle className="fill-gold text-gold" size={7} absoluteStrokeWidth />
                      {knowledge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Programs & Tools cell */}
            <div className="col-span-1 sm:col-span-4 lg:col-span-3 xl:col-span-6 glass-card space-y-5 lg:p-8">
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-ink">
                Programs & Tools
              </h3>
              <div ref={programsRef} className="flex flex-wrap gap-2.5">
                {personalInfo.about.programs.map((program, index) => (
                  <div key={index} className="program-item rounded-full border border-hairline/10 bg-void/20 px-3 py-2">
                    <span className="text-sm text-ink-muted font-semibold flex items-center gap-2">
                      <Circle className="fill-teal text-teal" size={7} absoluteStrokeWidth />
                      {program}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Modal */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="flex items-center justify-between p-4 lg:p-6 border-b border-hairline/15">
            <h3 className="font-display text-lg lg:text-2xl font-semibold text-ink">
              About Mohamed Alaa
            </h3>
            <button
              onClick={() => setShowModal(false)}
              className="text-ink-muted hover:text-ink transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-4 lg:p-6 space-y-4 lg:space-y-6">
            <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden border-3 lg:border-4 border-gold">
              <Image
                src="/img/hero.jpg"
                alt="Mohamed Alaa"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="text-center">
              <h4 className="text-lg lg:text-xl font-bold text-ink mb-1 lg:mb-2">
                {personalInfo.name}
              </h4>
              <p className="text-sm lg:text-base text-gold font-medium">
                {personalInfo.title}
              </p>
            </div>
            <div className="space-y-3 lg:space-y-4 text-sm lg:text-base text-ink-muted leading-relaxed">
              {personalInfo.about.fullBio
                .split("\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
            <div className="pt-3 lg:pt-4 border-t border-hairline/15">
              <h5 className="text-base lg:text-lg font-bold text-ink mb-2 lg:mb-3">
                Expertise Areas
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {personalInfo.about.knowledge.map((knowledge, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-xs lg:text-sm text-ink-muted">
                      {knowledge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default About;
