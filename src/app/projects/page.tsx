import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects | Mohamed Alaa",
  description: "A showcase of e-learning development and instructional design projects.",
};

export default function ProjectsPage() {
  return <Projects />;
}
