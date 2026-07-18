import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-padding relative">
      <div className="max-w-lg mx-auto px-4 text-center glass-card">
        <h1 className="font-display text-2xl font-semibold text-ink mb-3">
          Page not found
        </h1>
        <p className="text-ink-muted mb-6">
          This page doesn&apos;t exist or may have been moved.
        </p>
        <Link href="/" className="btn-gold inline-flex items-center gap-2">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>
    </section>
  );
}
