"use client";

import React from "react";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import qualifications from "../data/qualifications.json";
import SectionHeading from "./ui/SectionHeading";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import { useMagneticGlow } from "@/hooks/useMagneticGlow";

interface Education {
  id: string | number;
  year: string;
  degree: string;
  institution: string;
  description: string;
}

interface Experience {
  id: string | number;
  year: string;
  position: string;
  company: string;
  description: string;
}

const EXPERIENCE_FOCUS = [
  ["Learning strategy", "Gamification", "Storyboarding"],
  ["Storyline 360", "Learning theory", "Content review"],
  ["Interactive activities", "Video editing", "Visual design"],
] as const;

const Qualification: React.FC = () => {
  const gridRef = useStaggerReveal<HTMLDivElement>(".qualification-item");
  useMagneticGlow(gridRef);
  const experiences = qualifications.experience as Experience[];

  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Timeline"
          title="My"
          highlight="Journey"
          subtitle="A timeline of my educational background and professional experience"
        />

        <div ref={gridRef} className="bento-grid">
          <div className="col-span-1 sm:col-span-4 lg:col-span-6 xl:col-span-12 flex items-center gap-3 pt-2">
            <span className="icon-chip"><GraduationCap size={21} /></span>
            <h3 className="font-display text-xl font-semibold text-ink">
              Education
            </h3>
          </div>

          {(qualifications.education as Education[]).map((edu, index) => (
            <div
              key={edu.id}
              className="qualification-item col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-6 glass-card min-h-52 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 flex-wrap mb-5">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-gold flex-shrink-0" />
                  <span className="text-xs font-bold text-ink-faint">EDU / 0{index + 1}</span>
                </div>
                <span className="px-3 py-1.5 bg-gold/10 text-gold text-xs font-bold rounded-full flex-shrink-0">
                  {edu.year}
                </span>
              </div>
              <h4 className="font-display text-2xl font-semibold leading-tight text-ink mb-2">{edu.degree}</h4>
              <p className="text-gold font-semibold mb-3">{edu.institution}</p>
              <p className="text-sm leading-relaxed text-ink-muted">{edu.description}</p>
            </div>
          ))}

          <div className="col-span-1 flex items-center justify-between gap-4 pt-7 sm:col-span-4 lg:col-span-6 xl:col-span-12">
            <div className="flex items-center gap-3">
              <span className="icon-chip"><Briefcase size={21} /></span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Experience</h3>
                <p className="text-xs text-ink-faint">A career built around better learning</p>
              </div>
            </div>
            <span className="hidden rounded-full border border-hairline/10 bg-surface/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-ink-faint sm:block">
              03 roles · 2023—Present
            </span>
          </div>

          <div className="col-span-1 grid gap-5 sm:col-span-4 lg:col-span-6 lg:grid-cols-12 xl:col-span-12">
            <article className="qualification-item glass-card violet-card flex min-h-[25rem] flex-col lg:col-span-7 lg:p-9">
              <div className="mb-10 flex flex-wrap items-start justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  Current role
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white">
                  {experiences[0].year}
                </span>
              </div>

              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white/55">EXP / 01</p>
                <h4 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  {experiences[0].position}
                </h4>
                <p className="mt-2 text-base font-bold text-white">{experiences[0].company}</p>
                <p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-base">
                  {experiences[0].description}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {EXPERIENCE_FOCUS[0].map((focus) => (
                  <span key={focus} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/85">
                    {focus}
                  </span>
                ))}
              </div>
            </article>

            <div className="grid gap-5 lg:col-span-5 lg:grid-rows-2">
              {experiences.slice(1).map((exp, index) => (
                <article key={exp.id} className="qualification-item glass-card flex h-full flex-col justify-between lg:p-7">
                  <div>
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-ink-faint">
                        <Calendar size={14} className="text-gold" />
                        EXP / 0{index + 2}
                      </span>
                      <span className="rounded-full bg-gold/10 px-3 py-1.5 text-[10px] font-bold text-gold">
                        {exp.year}
                      </span>
                    </div>
                    <h4 className="font-display text-2xl font-semibold leading-tight text-ink">{exp.position}</h4>
                    <p className="mt-1.5 font-semibold text-gold">{exp.company}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-muted">{exp.description}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {EXPERIENCE_FOCUS[index + 1].slice(0, 2).map((focus) => (
                      <span key={focus} className="rounded-full border border-hairline/10 bg-void/20 px-2.5 py-1 text-[10px] font-semibold text-ink-faint">
                        {focus}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
