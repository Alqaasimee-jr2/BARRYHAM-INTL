"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { StatCounter } from "@/components/StatCounter";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, ProjectSector } from "@/data/projects";

// Fade up animation variants
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

export default function AboutPage() {
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
    <main className="flex min-h-screen flex-col bg-offwhite pt-24">
      {/* 1. Company Overview Hero */}
      <section className="py-20 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-8">
            Your Trusted Partner
          </h1>
          <p className="font-ui text-lg md:text-xl text-offwhite/90 leading-relaxed">
            Barryham International Limited (BIL) bridges the gap between global manufacturing excellence and your local infrastructure needs. We provide you with top-tier building materials, industrial equipment, and innovative operational solutions designed to elevate your projects.
          </p>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          {/* Gold Divider for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-center md:text-right md:pr-8"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">Our Vision</h2>
            <p className="font-ui text-charcoal/90 text-lg leading-relaxed">
              To become your ultimate one-stop shop for all mechanical and electrical needs, providing you with dynamic services and premium products that add measurable value to your developments.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-center md:text-left md:pl-8"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">Our Mission</h2>
            <p className="font-ui text-charcoal/90 text-lg leading-relaxed">
              To deliver excellence directly to you. We source and supply quality products at competitive rates, ensuring your projects never compromise on standard or timeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Statement of Credibility */}
      <section className="py-20 bg-charcoal text-offwhite relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="font-heading font-bold text-3xl mb-12 text-gold">Our Promise to You</h2>
          <blockquote className="font-heading text-2xl md:text-3xl leading-relaxed italic mb-8">
            &quot;Excellence isn&apos;t an option; it&apos;s our baseline. We bring you professional service built on integrity, experience, and efficiency. As direct manufacturers&apos; representatives, we guarantee you highly competitive rates and swift deliveries. Because you and your projects deserve nothing less.&quot;
          </blockquote>
          <p className="font-ui font-semibold tracking-wide text-gold uppercase">
            When you partner with BIL, you secure excellence.
          </p>
        </div>
      </section>

      {/* 4. StatCounter */}
      <section className="py-16 bg-white border-b border-navy/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-wrap justify-center gap-16 md:gap-32">
          <StatCounter endValue={projects.length} label="Projects" suffix="+" />
          <StatCounter endValue={uniqueStates} label="States" />
        </div>
      </section>

      {/* 5. Past Projects */}
      <section className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">Past Projects</h2>
          <p className="font-ui text-charcoal/80 max-w-2xl mx-auto">
            Explore our extensive portfolio of successful installations and supplies across various sectors.
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
      </section>
    </main>
  );
}
