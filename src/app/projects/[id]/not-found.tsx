import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <section className="section-padding relative">
      <div className="max-w-lg mx-auto px-4 text-center glass-card">
        <h1 className="font-display text-2xl font-semibold text-ink mb-3">
          Project not found
        </h1>
        <p className="text-ink-muted mb-6">
          This project doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/projects"
          className="btn-gold inline-flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </Link>
      </div>
    </section>
  );
}
