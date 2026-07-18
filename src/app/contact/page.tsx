import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Mohamed Alaa",
  description: "Get in touch about your next e-learning project.",
};

export default function ContactPage() {
  return <Contact />;
}
