import Image from "next/image";
import { Download, GraduationCap, Linkedin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { education, experience, profile, toolkit } from "@/data/site";

const TOOL_COLORS = ["bg-coral-light", "bg-sky-light", "bg-teal-light", "bg-lilac-light"];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-site">
        <SectionHeader
          index="05"
          eyebrow="About"
          title={
            <>
              Hi, I&apos;m {profile.firstName}. <span className="bg-[linear-gradient(transparent_58%,#AE9BFF_58%,#AE9BFF_92%,transparent_92%)] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">Nice to meet you.</span>
            </>
          }
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Profile sticker */}
          <div className="lg:sticky lg:top-[calc(var(--header-h)+24px)] lg:self-start">
            <div className="reveal relative mx-auto max-w-sm lg:mx-0">
              {/* Tilted card behind; the front card stays straight so its text renders crisply */}
              <div aria-hidden className="absolute inset-0 rotate-[-5deg] rounded-3xl border-2 border-ink bg-teal" />
              <div className="card-pop relative overflow-hidden">
                <div className="relative aspect-[4/5] border-b-2 border-ink bg-ink">
                  <Image src={profile.avatar} alt={`Illustrated portrait of ${profile.name}`} fill sizes="(min-width: 1024px) 380px, 90vw" className="object-cover object-top" />
                </div>
                <div className="p-5">
                  <p className="font-display text-2xl font-extrabold">{profile.name}</p>
                  <p className="text-ink-soft">{profile.role} · {profile.location}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href={profile.cvUrl} download className="btn btn-primary btn-sm">
                      <Download size={16} /> Download CV
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                      <Linkedin size={16} /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                I studied <strong className="text-ink">Educational Technology at Ain Shams University</strong>, and I&apos;ve
                spent the years since designing courses, games and storyboards for schools, companies and government
                teams.
              </p>
              <p>
                What I care about is simple: <strong className="text-ink">learners who finish, and remember.</strong> So I
                start from what people need to <em>do</em>, write it all down in a storyboard, and only then build. With
                Storyline, with code, and more and more with AI, which lets me take an idea to a playable game in hours
                instead of weeks.
              </p>
            </div>

            {/* Experience */}
            <h3 className="mt-12 font-display text-2xl font-extrabold">Experience</h3>
            <ol className="mt-5 space-y-0 border-l-2 border-ink pl-6">
              {experience.map((job) => (
                <li key={job.org + job.period} className="reveal relative pb-8 last:pb-0">
                  <span className={`absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-ink ${job.current ? "bg-coral" : "bg-paper"}`} />
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                    {job.period}
                    {job.current && <span className="ml-2 rounded-full bg-coral px-2 py-0.5 text-ink">now</span>}
                  </p>
                  <p className="mt-1 font-display text-xl font-bold">
                    {job.role} <span className="font-medium text-ink-soft">@ {job.org}</span>
                  </p>
                  <p className="mt-1 leading-relaxed text-ink-soft">{job.body}</p>
                </li>
              ))}
            </ol>

            {/* Education */}
            <div className="mt-10 flex items-start gap-4 rounded-3xl border-2 border-ink bg-lilac-light p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border-2 border-ink bg-lilac">
                <GraduationCap size={22} />
              </span>
              <div>
                <p className="font-display text-lg font-bold">{education.degree}</p>
                <p className="text-ink-soft">{education.school} · {education.period}</p>
                <p className="mt-1 text-[15px] text-ink-soft">{education.note}</p>
              </div>
            </div>

            {/* Toolkit */}
            <h3 className="mt-12 font-display text-2xl font-extrabold">Toolkit</h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {toolkit.map((g, gi) => (
                <div key={g.group}>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">{g.group}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <li key={t} className={`rounded-full border-2 border-ink px-3 py-1 text-sm font-medium ${TOOL_COLORS[gi % TOOL_COLORS.length]}`}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
