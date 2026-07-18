"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import Logo from "./Logo";
import personalInfo from "../data/personalInfo.json";
import { gsap } from "@/lib/gsap";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/qualification", label: "Qualification" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(rootRef.current, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 92%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <footer ref={rootRef} className="bg-footer border-t border-hairline/10">
      <div className="container-custom py-8 sm:py-12">
        <div className="glass-card violet-card mb-12 flex flex-col items-start justify-between gap-8 p-7 sm:p-10 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/65">
              Have a learning challenge?
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Let&apos;s turn it into an experience people remember.
            </h2>
          </div>
          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="btn-gold group flex-shrink-0"
          >
            Start a project
            <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid gap-10 border-b border-hairline/10 pb-10 md:grid-cols-12">
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-3">
              <Logo size="md" />
              <div>
                <p className="font-display text-lg font-semibold text-ink">{personalInfo.name}</p>
                <p className="text-xs text-ink-faint">{personalInfo.title}</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-muted">
              Learner-centered strategy, interactive development and thoughtful
              visual design — brought together in one practical process.
            </p>
            <div className="flex gap-2">
              {[
                { href: personalInfo.contact.social.linkedin, label: "LinkedIn", icon: Linkedin },
                { href: personalInfo.contact.social.facebook, label: "Facebook", icon: Facebook },
                { href: personalInfo.contact.social.instagram, label: "Instagram", icon: Instagram },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="icon-chip !h-10 !w-10 !rounded-xl transition-colors hover:bg-gold hover:text-white"
                >
                  <social.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-ink-faint">Explore</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-1">
              {QUICK_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-ink-muted transition-colors hover:text-gold">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-faint">Contact</p>
            <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-gold">
              <Mail size={16} /> {personalInfo.contact.email}
            </a>
            <a href={`tel:${personalInfo.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-gold">
              <Phone size={16} /> {personalInfo.contact.phone}
            </a>
            <p className="flex items-center gap-3 text-sm text-ink-muted">
              <MapPin size={16} /> {personalInfo.contact.location}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
          <span>Designed around better learning experiences.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
