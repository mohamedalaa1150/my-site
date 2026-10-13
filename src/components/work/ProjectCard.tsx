import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Play, FileText } from "lucide-react";
import { type Project, accentBg, kindLabel, playUrl } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  size?: "default" | "large";
  priority?: boolean;
}

export default function ProjectCard({ project, size = "default", priority }: ProjectCardProps) {
  const large = size === "large";
  const playable = Boolean(playUrl(project));

  return (
    <Link
      href={`/projects/${project.id}`}
      className="card-pop card-pop-hover group flex h-full flex-col overflow-hidden"
    >
      <div className={`relative border-b-2 border-ink p-3 sm:p-4 ${accentBg[project.accent]}`}>
        <div className={`relative overflow-hidden rounded-2xl border-2 border-ink bg-paper ${large ? "aspect-[16/10]" : "aspect-video"}`}>
          <Image
            src={project.thumbnail}
            alt=""
            fill
            priority={priority}
            sizes={large ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <span className="tag absolute left-5 top-5 bg-paper sm:left-6 sm:top-6">{kindLabel[project.kind]}</span>
        {playable ? (
          <span className="tag absolute right-5 top-5 bg-sun sm:right-6 sm:top-6">
            <Play size={11} fill="currentColor" /> Playable
          </span>
        ) : project.files.length > 0 ? (
          <span className="tag absolute right-5 top-5 bg-paper sm:right-6 sm:top-6">
            <FileText size={11} /> PDF
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className={`font-display font-extrabold leading-tight tracking-tight ${large ? "text-2xl sm:text-3xl" : "text-xl"}`}>
            {project.title}
          </h3>
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-ink bg-paper transition-colors group-hover:bg-coral">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <p className={`mt-2 text-ink-soft ${large ? "text-base sm:text-lg" : "text-[15px]"} leading-relaxed`}>{project.summary}</p>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-5 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={12} /> {project.duration}
          </span>
          <span>{project.team}</span>
          {project.client && project.client !== "Prototype" && project.client !== "Educational Project" && (
            <span className="truncate">{project.client}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
