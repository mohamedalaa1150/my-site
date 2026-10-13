import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/work/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { featuredProjects, projects } from "@/lib/projects";

// Zig-zag bento: wide, narrow / narrow, wide
const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export default function SelectedWork() {
  return (
    <section id="work" className="section">
      <div className="container-site">
        <SectionHeader
          index="01"
          eyebrow="Selected work"
          title={
            <>
              Projects you can <span className="text-coral">actually play.</span>
            </>
          }
          aside={
            <>
              Most of this work is live. Open a project and press Play. Games, scenario-based courses and storyboards
              for schools, companies and government teams.
            </>
          }
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-7">
          {featuredProjects.slice(0, 4).map((p, i) => (
            <div key={p.id} className={`reveal ${SPANS[i]}`}>
              <ProjectCard project={p} size={i === 0 || i === 3 ? "large" : "default"} priority={i === 0} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/projects" className="btn btn-dark">
            See all {projects.length} projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
