"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, profile } from "@/data/site";

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label={`${profile.name}, home`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl border-2 border-ink bg-sun font-display text-base font-extrabold shadow-pop-sm transition-transform group-hover:-rotate-6">
        ma
      </span>
      <span className="whitespace-nowrap font-display text-lg font-extrabold tracking-tight">{profile.name}</span>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-200 ${
        scrolled || open ? "border-b-2 border-ink bg-cream/95 backdrop-blur" : "border-b-2 border-transparent"
      }`}
    >
      <div className="container-site flex h-[var(--header-h)] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="rounded-full px-3.5 py-2 font-medium text-ink-soft transition-colors hover:bg-ink hover:text-cream">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#contact" className="btn btn-primary btn-sm hidden whitespace-nowrap sm:inline-flex">
            Let&apos;s talk <ArrowRight size={16} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-xl border-2 border-ink bg-paper shadow-pop-sm lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="animate-pop-in border-t-2 border-ink bg-cream lg:hidden">
          <ul className="container-site flex flex-col py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block border-b border-ink/10 py-3.5 font-display text-2xl font-bold">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-5">
              <Link href="/#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Let&apos;s talk <ArrowRight size={18} />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
