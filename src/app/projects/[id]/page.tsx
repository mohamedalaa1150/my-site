import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/work/ProjectDetail";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return {};

  return {
    title: `${project.title} | Mohamed Alaa`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
