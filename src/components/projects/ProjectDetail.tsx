"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import {
  Download,
  Play,
  ArrowLeft,
  ArrowRight,
  MessageCircleWarning,
} from "lucide-react";
import projects from "@/data/projects.json";
import { gsap } from "@/lib/gsap";

type Project = (typeof projects.projects)[number];

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          rootRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(rootRef.current, { opacity: 1, y: 0 });
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section className="section-padding relative">
      <div
        ref={rootRef}
        className="max-w-6xl mx-auto glass-panel overflow-hidden"
      >
        <div className="flex flex-col-reverse items-start justify-between gap-5 p-5 sm:flex-row sm:items-center sm:p-8 border-b border-hairline/10">
          <div>
            <span className="eyebrow-pill mb-3 text-[10px] font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <h1 className="font-display text-3xl sm:text-5xl leading-tight tracking-tight font-semibold text-ink">
              {project.title}
            </h1>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-ink-muted hover:text-gold transition-colors duration-200"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Back to Projects</span>
          </Link>
        </div>

        <div className="p-4 sm:p-8 space-y-10">
          {/* Image Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="relative">
              <div className="relative h-64 sm:h-[30rem] rounded-2xl overflow-hidden bg-void/30">
                <Image
                  src={project.images[currentImageIndex]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-[rgb(var(--overlay-scrim))]/50 text-ink p-2 rounded-full hover:bg-[rgb(var(--overlay-scrim))]/70 transition-all duration-200"
                  >
                    <span className="sr-only">Previous image</span>
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-[rgb(var(--overlay-scrim))]/50 text-ink p-2 rounded-full hover:bg-[rgb(var(--overlay-scrim))]/70 transition-all duration-200"
                  >
                    <span className="sr-only">Next image</span>
                    <ArrowRight size={20} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Show image ${index + 1}`}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? "bg-gold"
                            : "bg-ink/40"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Project Details */}
            <div className="space-y-8 lg:col-span-7">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink mb-3">
                  {project.category === "Storyboarding"
                    ? "Storyboard Overview"
                    : "Project Overview"}
                </h2>

                <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-ink mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 rounded-xl border border-hairline/10 bg-void/15 p-3">
                      <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-ink-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-ink mb-4">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gold/10 text-gold rounded-full text-xs font-semibold border border-gold/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Info & Actions */}
            <div className="space-y-6 lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {project.duration && (
                  <div className="glass-card signal-card">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gold">
                        {project.duration}
                      </div>
                      <div className="text-sm text-ink-muted">Duration</div>
                    </div>
                  </div>
                )}
                {project.team && (
                  <div className="glass-card">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gold">
                        {project.team}
                      </div>
                      <div className="text-sm text-ink-muted">Team Size</div>
                    </div>
                  </div>
                )}
              </div>
              {project.client && (
                <div className="glass-card violet-card">
                  <h3 className="font-bold text-ink mb-2">Client</h3>
                  <p className="text-gold">{project.client}</p>
                </div>
              )}

              {/* Video Preview */}
              {project.videoUrl && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-ink">Preview</h3>
                  <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-hairline/10">
                    <video
                      src={project.videoUrl}
                      className="w-full h-full object-contain"
                      controls
                      preload="metadata"
                    >
                      Your browser does not support the video element.
                    </video>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                {project.scormUrl && (
                  <a
                    href={project.scormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full flex items-center justify-center space-x-2"
                  >
                    <Play size={16} />
                    <span>Launch SCORM Package</span>
                  </a>
                )}

                {project.files && project.files.length > 0 && (
                  <>
                    <h3 className="font-bold text-ink">Download Files</h3>
                    <div className="space-y-2">
                      {project.files.map((file, index) => (
                        <a
                          key={index}
                          href={file.url}
                          download
                          className="w-full flex items-center justify-between p-3 bg-surface/60 border border-hairline/15 rounded-lg hover:border-gold transition-colors duration-200"
                        >
                          <span className="text-ink">{file.name}</span>
                          <Download size={16} className="text-gold" />
                        </a>
                      ))}
                    </div>
                    <p className="text-sm text-ink-faint mt-2 flex items-center gap-2">
                      <MessageCircleWarning
                        size={26}
                        className="icon-pulse-gold"
                      />
                      <span>
                        This storyboard is a sample version for demonstration
                        purposes only. All rights reserved.
                      </span>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
