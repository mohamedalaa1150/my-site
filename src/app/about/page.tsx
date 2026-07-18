import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Mohamed Alaa",
  description: "Instructional Designer & E-learning Specialist — about Mohamed Alaa.",
};

export default function AboutPage() {
  return <About />;
}
