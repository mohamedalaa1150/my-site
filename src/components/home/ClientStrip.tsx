import { clients } from "@/data/site";

const DOTS = ["bg-coral", "bg-sun", "bg-teal", "bg-lilac", "bg-sky"];

export default function ClientStrip() {
  const row = [...clients, ...clients];
  return (
    <section aria-label="Organisations I've designed learning for" className="border-y-2 border-ink bg-ink py-4 text-cream">
      <div className="flex items-center gap-6 overflow-hidden">
        <p className="hidden shrink-0 pl-6 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/60 md:block lg:pl-10">
          Learning built for
        </p>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <ul className="animate-marquee flex w-max items-center gap-10 pr-10">
            {row.map((c, i) => (
              <li key={i} aria-hidden={i >= clients.length} className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-bold sm:text-xl">
                {c}
                <span className={`h-2.5 w-2.5 rounded-full ${DOTS[i % DOTS.length]}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
