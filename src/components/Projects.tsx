"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import projects from "../data/projects.json";
import SectionHeading from "./ui/SectionHeading";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import { useMagneticGlow } from "@/hooks/useMagneticGlow";

const Projects: React.FC = () => {
  const gridRef = useStaggerReveal<HTMLDivElement>(".project-card");
  useMagneticGlow(gridRef);

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured"
          highlight="Projects"
          subtitle="A showcase of my recent work in e-learning development and instructional design"
        />

        <div ref={gridRef} className="bento-grid" style={{ alignItems: "stretch" }}>
          {projects.projects.map((project, index) => {
            return (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="project-card col-span-1 flex h-full cursor-pointer flex-col sm:col-span-2 lg:col-span-2 xl:col-span-4 glass-card group"
              >
                <div className="relative mb-4">
                  <div className="relative h-52 overflow-hidden rounded-[1.1rem]">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      priority={false}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-void/65 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100 rounded-[1.1rem]">
                    <span className="absolute bottom-3 right-3 icon-chip bg-surface/90 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 px-3 py-1.5 bg-surface/90 text-ink text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold leading-tight text-ink transition-colors duration-300 group-hover:text-gold">
                      {project.title}
                    </h3>
                    <span className="text-xs font-bold text-ink-faint">0{index + 1}</span>
                  </div>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-muted">
                    {project.description.substring(0, 120)}...
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.tools.slice(0, 3).map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-2.5 py-1.5 bg-gold/10 text-gold text-[10px] font-semibold rounded-full border border-gold/15"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-2 py-1 text-ink-muted text-xs">
                        +{project.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
