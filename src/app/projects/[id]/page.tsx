import type { Metadata } from "next";
import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import ProjectDetail from "@/components/projects/ProjectDetail";

type Project = (typeof projects.projects)[number];

export async function generateStaticParams() {
  return projects.projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.projects.find((p) => String(p.id) === id);
  if (!project) return {};

  return {
    title: `${project.title} | Mohamed Alaa`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.projects.find((p) => String(p.id) === id) as
    | Project
    | undefined;

  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
