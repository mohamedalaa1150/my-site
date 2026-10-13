import type { ReactNode } from "react";

interface SectionHeaderProps {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  tone?: "light" | "dark";
}

export default function SectionHeader({ index, eyebrow, title, aside, tone = "light" }: SectionHeaderProps) {
  const dark = tone === "dark";
  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
      <div>
        <p className={`eyebrow mb-4 ${dark ? "text-cream/60" : ""}`}>
          {index && <span className={`rounded-md px-1.5 py-0.5 ${dark ? "bg-cream text-ink" : "bg-ink text-cream"}`}>{index}</span>}
          {eyebrow}
        </p>
        <h2 className={`h-section ${dark ? "!text-cream" : ""}`}>{title}</h2>
      </div>
      {aside && <p className={`max-w-md text-lg leading-relaxed ${dark ? "text-cream/70" : "text-ink-soft"}`}>{aside}</p>}
    </div>
  );
}
