"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TypingAnimation from "./TypingAnimation";
import personalInfo from "../data/personalInfo.json";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProject = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-14 sm:pt-16"
    >
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-left text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-responsive-xl font-bold leading-tight text-primary">
                {"Hi, I'm "}
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <div className="text-lg sm:text-xl lg:text-2xl font-medium">
                <TypingAnimation
                  phrases={personalInfo.typingPhrases}
                  typeSpeed={100}
                  deleteSpeed={50}
                  delayBetweenPhrases={2000}
                  className="text-white font-medium"
                />
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0">
                {personalInfo.heroSubtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-center lg:items-start justify-center text-center lg:justify-start sm:w:auto mx-4 lg:mx-0">
              <button
                onClick={scrollToAbout}
                className="btn-primary group w-full sm:w-auto"
              >
                <span>Know More</span>
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
              <button
                onClick={scrollToProject}
                className="btn-outline w-full sm:w-auto"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in-right order-first lg:order-last">
            <div className="relative z-10">
              <div className="w-64 h-64 sm:w-[500px] sm:h-[500px] mx-auto">
                <div className="w-full h-full overflow-hidden shadow-xl rounded-2xl">
                  <Image
                    src="/img/hero.jpg"
                    alt="Mohamed Alaa"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Background decorations
            <div className="hidden sm:block absolute top-8 right-8 w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full animate-pulse" />
            <div
              className="hidden sm:block absolute bottom-8 left-8 w-12 h-12 lg:w-16 lg:h-16 bg-primary/20 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="hidden lg:block absolute top-1/2 left-0 w-10 h-10 lg:w-12 lg:h-12 bg-primary/15 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
