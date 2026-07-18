"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  User,
  GraduationCap,
  Mail,
  Briefcase,
} from "lucide-react";
import Hero from "./Hero";
import { STATS } from "./About";
import personalInfo from "../data/personalInfo.json";
import projects from "../data/projects.json";
import services from "../data/services.json";
import { downloadCV } from "./downloadCV";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import { useMagneticGlow } from "@/hooks/useMagneticGlow";

const QUICK_LINKS = [
  { href: "/about", label: "About Me", icon: User },
  { href: "/qualification", label: "Qualification", icon: GraduationCap },
  { href: "/contact", label: "Get In Touch", icon: Mail },
] as const;

const Home: React.FC = () => {
  const gridRef = useStaggerReveal<HTMLDivElement>(".dash-cell");
  useMagneticGlow(gridRef);

  const featuredProject = projects.projects[0];

  return (
    <section className="section-padding relative pt-24 sm:pt-28">
      <div className="container-custom">
        <div className="bento-grid">
          {/* Hero cell — manages its own entrance animation, excluded from stagger reveal */}
          <div className="col-span-1 sm:col-span-4 lg:col-span-6 xl:col-span-12 glass-card hero-shell p-6 sm:p-9 lg:p-12">
            <Hero />
          </div>

          <div ref={gridRef} className="contents">
            {/* Stat cells */}
            {STATS.map((stat, index) => (
              <div
                key={index}
                className="dash-cell col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-4 glass-card min-h-40 flex items-end justify-between gap-4"
              >
                <div>
                  <div className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
                    {stat.value}
                    <span className="text-gold">{stat.suffix}</span>
                  </div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                    {stat.title.split("\n").join(" ")}
                  </div>
                </div>
                <span className="icon-chip flex-shrink-0">
                  <stat.icon size={20} />
                </span>
              </div>
            ))}

            {/* Featured project teaser */}
            <Link
              href={`/projects/${featuredProject.id}`}
              className="dash-cell col-span-1 sm:col-span-4 lg:col-span-4 xl:col-span-7 glass-card group cursor-pointer block"
            >
              <div className="relative h-56 sm:h-72 rounded-[1.1rem] overflow-hidden mb-5">
                <Image
                  src={featuredProject.thumbnail}
                  alt={featuredProject.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-gold text-xs font-bold tracking-[0.16em] uppercase mb-2">
                    Selected case study
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink group-hover:text-gold transition-colors duration-300">
                    {featuredProject.title}
                  </h3>
                </div>
                <span className="icon-chip group-hover:bg-teal group-hover:text-void transition-colors duration-300">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </Link>

            {/* Services teaser */}
            <Link
              href="/services"
              className="dash-cell col-span-1 sm:col-span-4 lg:col-span-2 xl:col-span-5 glass-card violet-card group cursor-pointer flex min-h-[17rem] self-start flex-col justify-between"
            >
              <div className="icon-chip bg-white/10 border-white/10 text-white">
                <Briefcase size={22} />
              </div>
              <div className="mt-7">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-white/65">Capabilities</p>
                <h3 className="font-display text-3xl font-semibold text-white mb-3">
                  Ideas, built into learning experiences.
                </h3>
                <p className="text-sm text-white/75 leading-relaxed mb-5">
                  {services.services.length} services spanning strategy,
                  storyboarding, development and delivery.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-white">
                  Explore services
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </div>
            </Link>

            {/* Quick links */}
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`dash-cell col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-4 glass-card group cursor-pointer flex items-center justify-between gap-4 ${
                  link.href === "/contact" ? "signal-card" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="icon-chip">
                    <link.icon size={20} />
                  </span>
                  <span className="text-sm font-bold text-ink">{link.label}</span>
                </div>
                <ArrowUpRight size={18} className="text-ink-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            ))}

            {/* CV download CTA */}
            <div className="dash-cell col-span-1 sm:col-span-4 lg:col-span-6 xl:col-span-12 glass-card flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-gold">The full picture</p>
                <h3 className="font-display text-2xl font-semibold text-ink mb-1">
                  Experience, tools and selected achievements.
                </h3>
                <p className="text-sm text-ink-muted">Download {personalInfo.name}&apos;s current CV.</p>
              </div>
              <button
                onClick={downloadCV}
                className="btn-gold flex items-center gap-2 w-full sm:w-auto"
              >
                <Download size={18} />
                <span>Download My CV</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
