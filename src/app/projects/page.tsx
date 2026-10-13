import type { Metadata } from "next";
import WorkGrid from "@/components/work/WorkGrid";

export const metadata: Metadata = {
  title: "Work | Mohamed Alaa",
  description: "Learning games, interactive e-learning courses and storyboards by instructional designer Mohamed Alaa.",
};

export default function ProjectsPage() {
  return (
    <section className="pb-24 pt-[calc(var(--header-h)+3rem)] sm:pt-[calc(var(--header-h)+4.5rem)]">
      <div className="container-site">
        <p className="eyebrow mb-4">
          <span className="rounded-md bg-ink px-1.5 py-0.5 text-cream">All work</span>
        </p>
        <h1 className="h-section max-w-3xl">
          Every project, <span className="text-coral">ready to explore.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
          Games and courses you can play in the browser, plus the storyboards behind them.
        </p>
        <div className="mt-10">
          <WorkGrid />
        </div>
      </div>
    </section>
  );
}
