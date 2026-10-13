import { ArrowDown, Gamepad2, MapPin } from "lucide-react";
import BalanceToy from "./BalanceToy";
import { heroFacts, profile } from "@/data/site";
import { getProject } from "@/lib/projects";

function Squiggle() {
  return (
    <svg viewBox="0 0 200 18" preserveAspectRatio="none" aria-hidden className="absolute -bottom-2 left-0 h-3 w-full sm:-bottom-3 sm:h-4">
      <path d="M3 12 C 25 2, 45 2, 62 10 S 100 18, 120 9 S 160 1, 197 8" fill="none" stroke="#FF6A4D" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  const frog = getProject(9);

  return (
    <section className="relative overflow-hidden pb-16 pt-[calc(var(--header-h)+2.5rem)] sm:pb-24 lg:pt-[calc(var(--header-h)+4rem)]">
      {/* floating shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="animate-float absolute left-[3%] top-[30%] hidden h-7 w-7 rounded-full border-2 border-ink bg-sun 2xl:block" />
        <span className="animate-float absolute left-[46%] top-[16%] hidden h-0 w-0 border-x-[14px] border-b-[24px] border-x-transparent border-b-lilac lg:block" style={{ animationDelay: "-2s", ["--r" as string]: "12deg" }} />
        <span className="animate-float absolute bottom-[6%] right-[3%] hidden h-6 w-6 rotate-12 rounded-md border-2 border-ink bg-teal lg:block" style={{ animationDelay: "-4s" }} />
      </div>

      <div className="container-site relative grid items-center gap-12 lg:grid-cols-[1.08fr_1fr] lg:gap-14">
        <div>
          <p className="eyebrow mb-6">
            <span className="tag bg-sun">{profile.role}</span>
            <span className="inline-flex items-center gap-1 normal-case tracking-normal">
              <MapPin size={14} /> {profile.location}
            </span>
          </p>

          <h1 className="font-display text-[2.75rem] font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.6rem]">
            I design learning people actually{" "}
            <span className="relative inline-block">
              want
              <Squiggle />
            </span>{" "}
            to finish.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            {profile.currentRole}. I turn dry content into games, scenarios and interactive courses — from the first
            storyboard to the final SCORM package. Lately, I build playable learning games in hours with AI as my
            co-developer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn btn-primary">
              See my work <ArrowDown size={18} />
            </a>
            <a href="#playground" className="btn btn-secondary">
              <Gamepad2 size={18} /> Play a 30-second lesson
            </a>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {heroFacts.map((f) => (
              <div key={f.label} className="rounded-2xl border-2 border-ink/10 bg-paper/70 p-3 sm:p-4">
                <dt className="sr-only">{f.label}</dt>
                <dd className="font-display text-2xl font-extrabold sm:text-3xl">{f.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-ink-soft sm:text-sm">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:rotate-[1.5deg]">
          <span aria-hidden className="absolute -right-3 -top-4 z-10 rotate-6 rounded-full border-2 border-ink bg-coral px-3 py-1 font-display text-sm font-bold shadow-pop-sm">
            try me!
          </span>
          <BalanceToy gameUrl={frog?.gameUrl} />
        </div>
      </div>
    </section>
  );
}
