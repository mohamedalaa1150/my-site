import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services | Mohamed Alaa",
  description: "E-learning development, storyboarding, SCORM packaging and more.",
};

export default function ServicesPage() {
  return <Services />;
}
