import type { Metadata } from "next";
import Qualification from "@/components/Qualification";

export const metadata: Metadata = {
  title: "Qualification | Mohamed Alaa",
  description: "Education and professional experience timeline.",
};

export default function QualificationPage() {
  return <Qualification />;
}
