"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

import personalInfo from "../data/personalInfo.json";
import { downloadCV } from "./downloadCV";
import SectionHeading from "./ui/SectionHeading";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import { useMagneticGlow } from "@/hooks/useMagneticGlow";
import { gsap } from "@/lib/gsap";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const infoRef = useStaggerReveal<HTMLDivElement>(".contact-item");
  useMagneticGlow(infoRef);
  const formRef = useStaggerReveal<HTMLFormElement>(".form-field");

  const handleIconEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.15,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 0 24px rgb(var(--gold) / 0.45)",
    });
  };

  const handleIconLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 0 0px rgb(var(--gold) / 0)",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setIsSubmitting(false), 600);
  };

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Let's Talk"
          title="Get In"
          highlight="Touch"
          subtitle="Ready to start your next e-learning project? Let's discuss how I can help you achieve your goals."
        />

        <div className="bento-grid">
          {/* Info + Socials cell */}
          <div className="col-span-1 sm:col-span-4 lg:col-span-4 xl:col-span-7 glass-card violet-card space-y-7 lg:p-9">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-3">
                {"Let's Connect"}
              </h3>
              <p className="text-white/75 leading-relaxed">
                {
                  "I'm always interested in discussing new opportunities and challenges. Whether you have a project in mind or just want to say hello, feel free to reach out."
                }
              </p>
            </div>

            <div ref={infoRef} className="space-y-4">
              <a href={`mailto:${personalInfo.contact.email}`} className="contact-item flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <span className="icon-chip bg-white/10 border-white/10 text-white"><Mail size={20} /></span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/55">Email</h4>
                  <p className="break-all text-sm font-semibold text-white sm:text-base">{personalInfo.contact.email}</p>
                </div>
              </a>

              <a href={`tel:${personalInfo.contact.phone.replace(/\s/g, "")}`} className="contact-item flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <span className="icon-chip bg-white/10 border-white/10 text-white"><Phone size={20} /></span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/55">Phone</h4>
                  <p className="font-semibold text-white">{personalInfo.contact.phone}</p>
                </div>
              </a>

              <div className="contact-item flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="icon-chip bg-white/10 border-white/10 text-white"><MapPin size={20} /></span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/55">Location</h4>
                  <p className="font-semibold text-white">
                    {personalInfo.contact.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={handleIconEnter}
                  onMouseLeave={handleIconLeave}
                  className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a
                  href={personalInfo.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={handleIconEnter}
                  onMouseLeave={handleIconLeave}
                  className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a
                  href={personalInfo.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={handleIconEnter}
                  onMouseLeave={handleIconLeave}
                  className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center"
                >
                  <Instagram size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* CV / CTA cell */}
          <div className="col-span-1 sm:col-span-4 lg:col-span-2 xl:col-span-5 glass-card signal-card flex flex-col justify-between items-start space-y-4 lg:p-9">
            <Download size={28} className="text-white" />
            <h3 className="font-display text-3xl font-semibold text-ink">
              Prefer a quick read?
            </h3>
            <p className="text-ink-muted">
              Grab my CV for a full rundown of my experience and skills.
            </p>
            <button
              onClick={downloadCV}
              className="btn-gold flex items-center space-x-2 w-full sm:w-auto"
            >
              <Download size={18} />
              <span>Download My CV</span>
            </button>
          </div>

          {/* Contact Form cell */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="col-span-1 sm:col-span-4 lg:col-span-6 xl:col-span-12 glass-card space-y-6"
          >
            <h3 className="form-field font-display text-2xl font-semibold text-ink mb-6">
              Send Me a Message
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="form-field">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-ink mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-glass"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-field">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-ink mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-glass"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="form-field">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-ink mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="input-glass resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="form-field btn-gold w-full sm:w-auto flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-[rgb(var(--btn-gold-ink))] border-t-transparent rounded-full animate-spin" />
                  <span>Opening email...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
