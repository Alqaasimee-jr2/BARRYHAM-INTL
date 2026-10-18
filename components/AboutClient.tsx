"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { StatCounter } from "@/components/StatCounter";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, ProjectSector } from "@/data/projects";
import { BrandLogos } from "@/components/BrandLogos";
import { WhyBarryham } from "@/components/WhyBarryham";
import { SectionWhatsAppCTA } from "@/components/SectionWhatsAppCTA";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const SECTORS: ("All" | ProjectSector)[] = [
  "All",
  "Government",
  "Hospital",
  "Residential",
  "Corporate",
];

export function AboutClient() {
  const [activeSector, setActiveSector] = useState<"All" | ProjectSector>("All");

  const filteredProjects = projects.filter(
    (p) => activeSector === "All" || p.sector === activeSector
  );

  const uniqueStates = new Set(
    projects.map((p) => {
      const parts = p.location.split(",");
      return parts[parts.length - 1].trim();
    })
  ).size;

  return (
    <>
      {/* Vision & Mission */}
      <section className="py-20 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-center md:text-right md:pr-8"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
              Our Vision
            </h2>
            <p className="font-ui text-charcoal/90 text-lg leading-relaxed">
              To become your ultimate one-stop partner for mechanical, sanitary, plumbing, and electrical building materials in Nigeria—delivering genuine global brands and certified installation that add measurable value to every development.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-center md:text-left md:pl-8"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
              Our Mission
            </h2>
            <p className="font-ui text-charcoal/90 text-lg leading-relaxed">
              To deliver authentic manufacturer-backed products at competitive retail and trade rates from our Dopemu-Agege and Alimosho showrooms, ensuring your projects never compromise on quality or timeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Barryham 6 Pillars */}
      <WhyBarryham />

      {/* StatCounter */}
      <section className="py-16 bg-white border-b border-navy/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-wrap justify-center gap-16 md:gap-32">
          <StatCounter endValue={projects.length} label="Completed Projects" suffix="+" />
          <StatCounter endValue={uniqueStates} label="Nigerian States Served" />
          <StatCounter endValue={15} label="Authorised Global Brands" />
        </div>
      </section>

      {/* Partner Brand Logos */}
      <BrandLogos />

      {/* Past Projects */}
      <section className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
            30+ Institutional, Commercial &amp; Residential Projects Delivered
          </h2>
          <p className="font-ui text-charcoal/80 max-w-2xl mx-auto">
            Explore our track record of sanitary, plumbing, and electrical supplies across government, hospital, residential, and corporate projects.
          </p>
        </div>

        {/* Filters */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-4 mb-12 justify-start md:justify-center">
          {SECTORS.map((sector) => (
            <button
              key={sector}
              onClick={() => setActiveSector(sector)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-ui text-sm font-medium transition-all duration-300 min-h-[44px] ${
                activeSector === sector
                  ? "bg-navy text-white shadow-md"
                  : "bg-white text-charcoal border border-navy/10 hover:border-gold"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16">
          <SectionWhatsAppCTA
            title="Partner With Barryham on Your Next Building Project"
            subtitle="Speak with our trade & project supply desk on WhatsApp for BOQ pricing, product submittals, and showroom appointments."
            contextLabel="about_page_cta"
          />
        </div>
      </section>
    </>
  );
}
