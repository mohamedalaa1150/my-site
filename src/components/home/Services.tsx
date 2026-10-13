import { ArrowRight, Check, FileText, Gamepad2, MonitorPlay, Package, Settings2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { services, type Service } from "@/data/site";
import { accentBg } from "@/lib/projects";

const ICONS: Record<Service["icon"], typeof FileText> = { FileText, Gamepad2, MonitorPlay, Package, Settings2 };

export default function Services() {
  return (
    <section id="services" className="section border-y-2 border-ink bg-sun-light">
      <div className="container-site">
        <SectionHeader
          index="04"
          eyebrow="Services"
          title={
            <>
              What I can build <span className="text-coral">for you.</span>
            </>
          }
          aside="Hire me for the whole journey, or just the part you're stuck on. Freelance projects and full-time roles both welcome."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <article key={s.title} className="card-pop reveal flex flex-col p-6">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink ${accentBg[s.accent]}`}>
                  <Icon size={22} strokeWidth={2.4} />
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.pitch}</p>
                <ul className="mt-4 space-y-1.5 text-[15px]">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={16} strokeWidth={3} className="mt-1 shrink-0 text-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-5 font-mono text-[11px] uppercase tracking-wider text-ink-faint">{s.tools.join(" · ")}</p>
              </article>
            );
          })}

          <a href="#contact" className="card-pop card-pop-hover group reveal flex flex-col justify-between bg-coral p-6">
            <p className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">
              Not sure what you need? Tell me the problem.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 font-display font-bold">
              Start a conversation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
