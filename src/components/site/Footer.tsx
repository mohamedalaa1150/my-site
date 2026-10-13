import Link from "next/link";
import { navLinks, profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-cream">
      <div className="container-site flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl font-extrabold">{profile.name}</p>
          <p className="mt-1 text-cream/60">{profile.role} · {profile.location}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream/70 transition-colors hover:text-sun">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-cream/70 transition-colors hover:text-sun">
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-cream/10">
        <p className="container-site py-5 font-mono text-[11px] uppercase tracking-wider text-cream/40">
          © {new Date().getFullYear()} {profile.name} · Designed for learners, built with a few frogs
        </p>
      </div>
    </footer>
  );
}
