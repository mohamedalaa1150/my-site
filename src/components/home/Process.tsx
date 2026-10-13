import { ArrowUpRight, PackageCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/site";
import { accentBg } from "@/lib/projects";

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container-site">
        <SectionHeader
          index="03"
          eyebrow="How I work"
          title={
            <>
              From messy content to a course <span className="text-teal">people finish.</span>
            </>
          }
          aside="The same four steps whether it's a 3-hour game prototype or a month-long government course. You always know what you'll get at each stage."
        />

        <ol className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* connecting line */}
          <span aria-hidden className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-ink/30 lg:block" />
          {processSteps.map((s, i) => (
            <li key={s.title} className="reveal relative flex flex-col">
              <span className={`relative z-10 grid h-14 w-14 place-items-center rounded-full border-2 border-ink font-display text-xl font-extrabold leading-none shadow-pop-sm ${accentBg[s.accent]}`}>
                {i + 1}
              </span>
              <div className="mt-5 flex flex-1 flex-col">
                <h3 className="font-display text-2xl font-extrabold">{s.title}</h3>
                <div className="flex-1">
                  <p className="mt-2 leading-relaxed text-ink-soft">{s.body}</p>
                  {s.link && (
                    <a href={s.link.href} target="_blank" rel="noopener noreferrer" className="link-underline mt-2 inline-flex items-center gap-1 text-sm font-semibold">
                      {s.link.label} <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
                <p className="mt-4 flex items-start gap-2 rounded-xl border-2 border-ink/10 bg-paper px-3 py-2.5 text-sm font-medium">
                  <PackageCheck size={17} className="mt-px shrink-0 text-teal" />
                  <span>
                    <span className="sr-only">You get: </span>
                    {s.output}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
