"use client";

import React, { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import services from "../data/services.json";
import SectionHeading from "./ui/SectionHeading";
import Modal from "./ui/Modal";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import { useMagneticGlow } from "@/hooks/useMagneticGlow";

type Service = (typeof services.services)[number];

const getIcon = (iconName: string): LucideIcon => {
  const dict = Icons as unknown as Record<string, LucideIcon>;
  return dict[iconName] ?? dict["Monitor"];
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(
    null
  );

  const gridRef = useStaggerReveal<HTMLDivElement>(".service-card");
  useMagneticGlow(gridRef);

  return (
    <>
      <section className="section-padding relative">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What I Offer"
            title="My"
            highlight="Services"
            subtitle="Comprehensive e-learning solutions tailored to your unique needs"
          />

          <div ref={gridRef} className="bento-grid">
            {services.services.map((service, index) => {
              const IconComponent = getIcon(service.icon);
              return (
                <div
                  key={service.id}
                  className={`service-card glass-card group cursor-pointer min-h-[19rem] flex flex-col justify-between ${
                    service.featured
                      ? "col-span-1 sm:col-span-4 lg:col-span-3 xl:col-span-6 violet-card"
                      : "col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-4"
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="icon-chip">
                      <IconComponent
                        size={24}
                        className="lg:w-7 lg:h-7"
                      />
                    </div>
                    <span className="font-display text-sm font-semibold text-ink-faint">0{index + 1}</span>
                  </div>
                  <div className="mt-10">
                    <h3 className="font-display text-2xl lg:text-3xl leading-tight font-semibold text-ink group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm lg:text-base text-ink-muted leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <button className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ink group">
                      <span>Learn More</span>
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <Modal onClose={() => setSelectedService(null)}>
          <div className="flex items-center justify-between p-4 lg:p-6 border-b border-hairline/15">
            <div className="flex items-center space-x-3">
              {React.createElement(getIcon(selectedService.icon), {
                size: 24,
                className: "text-gold",
              })}
              <h3 className="font-display text-lg lg:text-2xl font-semibold text-ink">
                {selectedService.title}
              </h3>
            </div>
            <button
              onClick={() => setSelectedService(null)}
              className="text-ink-muted hover:text-ink transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-4 lg:p-6 space-y-4 lg:space-y-6">
            <p className="text-sm lg:text-lg text-ink-muted leading-relaxed">
              {selectedService.fullDescription}
            </p>

            <div>
              <h4 className="text-base lg:text-lg font-bold text-ink mb-3 lg:mb-4">
                Key Features
              </h4>
              <div className="grid gap-2 lg:gap-3">
                {selectedService.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm lg:text-base text-ink-muted">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-base lg:text-lg font-bold text-ink mb-3 lg:mb-4">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-2 lg:px-3 py-1 bg-gold/20 text-gold rounded-full text-xs lg:text-sm border border-gold/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Services;
