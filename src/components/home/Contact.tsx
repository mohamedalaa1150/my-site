import { Download, Linkedin, Mail } from "lucide-react";
import CopyEmail from "./CopyEmail";
import { profile } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="section pt-0">
      <div className="container-site">
        <div className="card-pop relative overflow-hidden bg-coral px-6 py-14 text-center sm:px-12 sm:py-20 !shadow-pop-lg">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <span className="absolute -left-10 -top-10 h-40 w-40 rounded-full border-2 border-ink bg-sun" />
            <span className="absolute -bottom-12 -right-6 h-44 w-44 rotate-12 rounded-[2.5rem] border-2 border-ink bg-teal" />
            <span className="absolute right-[18%] top-8 hidden h-6 w-6 rounded-full border-2 border-ink bg-paper sm:block" />
          </div>

          <div className="relative">
            <p className="eyebrow justify-center !text-ink">
              <span className="rounded-md bg-ink px-1.5 py-0.5 text-cream">06</span> Contact
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
              Got a course nobody finishes? Let&apos;s fix that.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed">
              Freelance project or full-time role: tell me about your learners and what&apos;s not working.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4">
              <CopyEmail email={profile.email} />
              <div className="flex flex-wrap justify-center gap-3">
                <a href={`mailto:${profile.email}`} className="btn btn-dark">
                  <Mail size={18} /> Write an email
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href={profile.cvUrl} download className="btn btn-secondary">
                  <Download size={18} /> CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
