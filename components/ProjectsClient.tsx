"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Building2, Activity, Home, Briefcase, ArrowRight } from "lucide-react";
import { projects, ProjectSector } from "@/data/projects";
import { SectionWhatsAppCTA } from "@/components/SectionWhatsAppCTA";

const SECTORS: { key: "All" | ProjectSector; label: string }[] = [
  { key: "All", label: "All Projects (29)" },
  { key: "Government", label: "Government & Public (9)" },
  { key: "Hospital", label: "Healthcare & Hospitals (5)" },
  { key: "Residential", label: "Residential Estates (4)" },
  { key: "Corporate", label: "Corporate & Commercial (11)" },
];

function getSectorIcon(sector: ProjectSector) {
  switch (sector) {
    case "Government":
      return <Building2 size={15} className="text-gold" />;
    case "Hospital":
      return <Activity size={15} className="text-gold" />;
    case "Residential":
      return <Home size={15} className="text-gold" />;
    case "Corporate":
      return <Briefcase size={15} className="text-gold" />;
  }
}

export function ProjectsClient() {
  const [activeSector, setActiveSector] = useState<"All" | ProjectSector>("All");

  const filteredProjects = projects.filter(
    (p) => activeSector === "All" || p.sector === activeSector
  );

  return (
    <div className="space-y-16">
      {/* Sector Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto px-6">
        {SECTORS.map((tab) => {
          const isActive = activeSector === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveSector(tab.key)}
              className={`font-ui text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-navy text-white shadow-sm"
                  : "bg-white text-charcoal/70 hover:text-navy hover:bg-navy/5 border border-navy/10"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-6 border border-navy/10 shadow-sm hover:shadow-md hover:border-gold/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {project.image && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl mb-4 bg-navy/5">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <span className="absolute bottom-2.5 right-2.5 bg-navy/85 backdrop-blur-sm text-offwhite text-[10px] font-ui px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                        Verified Site
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 font-ui text-[11px] font-semibold uppercase tracking-wider text-navy bg-offwhite px-2.5 py-1 rounded-full border border-navy/5">
                      {getSectorIcon(project.sector)}
                      {project.sector}
                    </span>
                    <span className="font-ui text-[10px] text-charcoal/40 uppercase tracking-widest font-mono">
                      REF: {project.id.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-lg md:text-xl text-navy group-hover:text-gold transition-colors leading-snug mb-3">
                    {project.name}
                  </h3>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-navy/5 mt-4 font-ui text-xs">
                  <div className="flex items-start gap-2 text-charcoal/70">
                    <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                    <span>{project.location}</span>
                  </div>

                  <div className="flex items-start gap-2 text-charcoal/80">
                    <Building2 size={14} className="text-navy/40 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-navy font-medium">Contractor / Client:</strong>{" "}
                      {project.client}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Transparent Photography Note */}
      <section className="px-6 lg:px-12 max-w-4xl mx-auto w-full">
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-navy/10 text-center">
          <p className="font-ui text-xs uppercase tracking-widest text-gold font-bold mb-2">
            Archival &amp; Site Photography
          </p>
          <h3 className="font-heading font-semibold text-xl text-navy mb-2">
            Verifiable Supply &amp; Installation Record
          </h3>
          <p className="font-ui text-xs md:text-sm text-charcoal/70 max-w-2xl mx-auto leading-relaxed mb-4">
            Barryham International Limited has supplied materials for institutional, state government, healthcare, and private developments across Lagos, Rivers, Delta, Imo, Niger, and Abuja since 2018. Landmark public infrastructure projects feature verified site photography, while sensitive institutional and security sites preserve client confidentiality.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 font-ui text-xs font-semibold text-gold hover:text-navy transition-colors uppercase tracking-wider"
          >
            Request technical references or project documentation <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Strategic Single Closing CTA */}
      <section className="px-6 lg:px-12 max-w-5xl mx-auto w-full">
        <SectionWhatsAppCTA
          title="Procuring Materials for an Institutional or Residential Project?"
          subtitle="Send your Bill of Quantities (BOQ) or fitting schedule to our commercial team for direct manufacturer trade pricing."
          contextLabel="projects_page_cta"
        />
      </section>
    </div>
  );
}
