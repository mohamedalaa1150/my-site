import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Frog from "@/components/ui/Frog";

export default function NotFoundCard({ title, href, cta }: { title: string; href: string; cta: string }) {
  return (
    <section className="grid min-h-[80vh] place-items-center px-4 pt-[var(--header-h)]">
      <div className="card-pop max-w-md p-8 text-center">
        <svg viewBox="0 0 120 70" className="mx-auto h-24 w-auto" aria-hidden>
          <ellipse cx="60" cy="62" rx="52" ry="7" fill="#9FE3D7" />
          <Frog x={60} y={60} size={70} />
        </svg>
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-ink-faint">Error 404</p>
        <h1 className="mt-2 font-display text-3xl font-extrabold">{title}</h1>
        <p className="mt-2 text-ink-soft">This frog jumped somewhere else. Let&apos;s get you back on the path.</p>
        <Link href={href} className="btn btn-primary mt-6">
          <ArrowLeft size={18} /> {cta}
        </Link>
      </div>
    </section>
  );
}
