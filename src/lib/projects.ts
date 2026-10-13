import data from "@/data/projects.json";

export type ProjectKind = "game" | "course" | "storyboard";
export type Accent = "coral" | "teal" | "sun" | "lilac" | "sky" | "leaf";

export interface ProjectFile {
  name: string;
  url: string;
  type: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  kind: ProjectKind;
  accent: Accent;
  featured: boolean;
  summary: string;
  thumbnail: string;
  images: string[];
  description: string;
  features: string[];
  tools: string[];
  duration: string;
  team: string;
  client?: string;
  videoUrl?: string;
  gameUrl?: string;
  scormUrl?: string;
  files: ProjectFile[];
}

export const projects = data.projects as Project[];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(id: string | number) {
  return projects.find((p) => String(p.id) === String(id));
}

/** Live, playable link — a hosted game or the published Storyline output. */
export function playUrl(p: Project) {
  return p.gameUrl ?? p.scormUrl;
}

export const kindLabel: Record<ProjectKind, string> = {
  game: "Learning game",
  course: "Interactive course",
  storyboard: "Storyboard",
};

/** Tailwind classes per accent. Written out in full so Tailwind can see them. */
export const accentBg: Record<Accent, string> = {
  coral: "bg-coral",
  teal: "bg-teal",
  sun: "bg-sun",
  lilac: "bg-lilac",
  sky: "bg-sky",
  leaf: "bg-leaf",
};

export const accentSoft: Record<Accent, string> = {
  coral: "bg-coral-light",
  teal: "bg-teal-light",
  sun: "bg-sun-light",
  lilac: "bg-lilac-light",
  sky: "bg-sky-light",
  leaf: "bg-teal-light",
};
