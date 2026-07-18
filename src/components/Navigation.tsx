"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { useGSAP } from "@gsap/react";
import Logo from "./Logo";
import personalInfo from "../data/personalInfo.json";
import { downloadCV } from "./downloadCV";
import { gsap } from "@/lib/gsap";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/qualification", label: "Qualification" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  // { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
] as const;

const isActivePath = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navRef = useRef<HTMLElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const activeItem = NAV_ITEMS.find((item) =>
      isActivePath(pathname, item.href)
    );
    const activeLink = activeItem ? linkRefs.current[activeItem.href] : null;
    const container = navLinksRef.current;
    const indicator = indicatorRef.current;
    if (!activeLink || !container || !indicator) return;

    const linkRect = activeLink.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    gsap.to(indicator, {
      x: linkRect.left - containerRect.left,
      width: linkRect.width,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  }, [pathname]);

  useGSAP(
    () => {
      gsap.fromTo(
        navRef.current,
        { y: -24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.1 }
      );
    },
    { scope: navRef }
  );

  return (
    <nav
      ref={navRef}
      className="fixed top-3 left-0 right-0 z-50"
    >
      <div className="container-custom">
        <div
          className={`rounded-[1.35rem] border px-3 sm:px-4 transition-all duration-300 ${
            scrolled
              ? "border-hairline/10 bg-surface/90 shadow-2xl backdrop-blur-2xl"
              : "border-hairline/10 bg-surface/65 backdrop-blur-xl"
          }`}
        >
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo and Name */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 cursor-pointer"
          >
            <Logo size="md" />
            <span className="hidden sm:block font-display text-base font-semibold tracking-tight text-ink">
              {personalInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div
            ref={navLinksRef}
            className="relative hidden items-center gap-2 overflow-hidden rounded-full border border-hairline/5 bg-void/20 p-1 lg:flex"
          >
            <div
              ref={indicatorRef}
              className="pointer-events-none absolute bottom-1 left-0 h-[2px] rounded-full opacity-0"
              style={{ background: "var(--gradient-gold)" }}
            />
            {NAV_ITEMS.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => {
                    linkRefs.current[item.href] = el;
                  }}
                  className={`relative z-10 px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                    active ? "text-gold" : "text-ink-muted hover:text-ink"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="ml-2 flex items-center border-l border-hairline/10 pl-3">
              <button onClick={downloadCV} className="btn-gold text-xs !px-3 !py-2">
                <Download size={14} />
                <span className="ms-2">Download CV</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="rounded-full p-2 text-ink hover:bg-gold/10 hover:text-gold transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-hairline/10">
            <div className="py-3 space-y-1">
              {NAV_ITEMS.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors duration-200 ${
                      active ? "text-gold" : "text-ink-muted hover:text-ink"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <button
                onClick={downloadCV}
                className="btn-gold w-full mt-3 text-sm py-2"
              >
                <Download size={14} />
                <span className="ms-2">Download CV</span>
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
