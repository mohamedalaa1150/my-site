import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Download, Play } from "lucide-react";
import Gallery from "./Gallery";
import { type Project, accentBg, accentSoft, kindLabel, playUrl, projects } from "@/lib/projects";

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b-2 border-dashed border-ink/15 py-3 last:border-0">
      <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">{label}</dt>
      <dd className="mt-1 font-medium">{children}</dd>
    </div>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const live = playUrl(project);
  const pdf = project.files.find((f) => f.type === "pdf");
  const index = projects.findIndex((p) => p.id === project.id);
  const next = projects[(index + 1) % projects.length];
  const isStoryboard = project.kind === "storyboard";

  return (
    <article className="pb-24 pt-[calc(var(--header-h)+2rem)] sm:pt-[calc(var(--header-h)+3rem)]">
      <div className="container-site">
        <Link href="/projects" className="inline-flex items-center gap-2 font-medium text-ink-soft transition-colors hover:text-ink">
          <ArrowLeft size={18} /> All work
        </Link>

        {/* Intro */}
        <header className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div>
            <span className={`tag ${accentBg[project.accent]}`}>{kindLabel[project.kind]}</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-ink-soft">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {live && (
                <a href={live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <Play size={18} fill="currentColor" /> {project.gameUrl ? "Play the game" : "Launch the course"}
                  <ArrowUpRight size={16} />
                </a>
              )}
              {pdf && (
                <a href={pdf.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <Download size={18} /> {isStoryboard ? "Open the storyboard" : "Download storyboard"}
                </a>
              )}
            </div>
          </div>

          <dl className={`card-pop p-5 sm:p-6 ${accentSoft[project.accent]}`}>
            {project.client && <Fact label="Client / context">{project.client}</Fact>}
            <Fact label="Time to build">{project.duration}</Fact>
            <Fact label="Team">{project.team}</Fact>
            <Fact label="Tools">
              <ul className="mt-1 flex flex-wrap gap-1.5">
                {project.tools.map((t) => (
                  <li key={t} className="rounded-full border-2 border-ink bg-paper px-2.5 py-0.5 text-sm">
                    {t}
                  </li>
                ))}
              </ul>
            </Fact>
          </dl>
        </header>

        {/* Media */}
        <div className={`card-pop mt-12 overflow-hidden p-3 sm:p-5 ${accentBg[project.accent]}`}>
          <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-ink">
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                poster={project.thumbnail}
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-ink"
              >
              </video>
            ) : (
              <div className="relative aspect-video">
                <Image src={project.thumbnail} alt={`${project.title} cover`} fill priority sizes="(min-width: 1152px) 1100px, 100vw" className="object-cover" />
              </div>
            )}
          </div>
        </div>

        {/* Story + features */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <section>
            <h2 className="font-display text-3xl font-extrabold">The project</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{project.description}</p>
          </section>
          <section className="card-pop p-6">
            <h2 className="font-display text-2xl font-extrabold">{isStoryboard ? "What's inside" : "What learners do"}</h2>
            <ul className="mt-4 space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-ink bg-teal">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="leading-relaxed">{f.replace(/\.$/, "")}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Storyboard preview */}
        {isStoryboard && pdf && (
          <section className="mt-14 hidden lg:block">
            <h2 className="font-display text-3xl font-extrabold">Flip through the storyboard</h2>
            <div className="card-pop mt-6 overflow-hidden">
              <iframe src={pdf.url} title={`${project.title} storyboard`} className="h-[80vh] w-full" />
            </div>
          </section>
        )}

        {project.images.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-3xl font-extrabold">Screens</h2>
            <Gallery images={project.images} title={project.title} />
          </section>
        )}

        {/* Next */}
        <Link href={`/projects/${next.id}`} className="card-pop card-pop-hover group mt-20 flex items-center justify-between gap-6 bg-ink p-6 text-cream sm:p-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-cream/50">Next project</p>
            <p className="mt-1 font-display text-2xl font-extrabold sm:text-4xl">{next.title}</p>
          </div>
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-cream bg-coral text-ink transition-transform group-hover:translate-x-1">
            <ArrowRight size={24} />
          </span>
        </Link>
      </div>
    </article>
  );
}
