"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { type ProjectKind, projects } from "@/lib/projects";

const FILTERS: { value: ProjectKind | "all"; label: string }[] = [
  { value: "all", label: "Everything" },
  { value: "game", label: "Learning games" },
  { value: "course", label: "Interactive courses" },
  { value: "storyboard", label: "Storyboards" },
];

export default function WorkGrid() {
  const [filter, setFilter] = useState<ProjectKind | "all">("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.kind === filter);

  return (
    <>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const count = f.value === "all" ? projects.length : projects.filter((p) => p.kind === f.value).length;
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.value)}
              className={`rounded-full border-2 border-ink px-4 py-2 text-sm font-semibold transition-all ${
                active ? "bg-ink text-cream shadow-pop-sm" : "bg-paper hover:-translate-y-0.5 hover:shadow-pop-sm"
              }`}
            >
              {f.label} <span className={`ml-1 font-mono text-xs ${active ? "text-sun" : "text-ink-faint"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <div key={p.id} className="animate-pop-in" style={{ animationDelay: `${i * 40}ms` }}>
            <ProjectCard project={p} priority={i < 3} />
          </div>
        ))}
      </div>
    </>
  );
}
