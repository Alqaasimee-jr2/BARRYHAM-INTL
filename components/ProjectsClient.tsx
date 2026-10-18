"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, CheckCircle2, Building2, ArrowRight } from "lucide-react";
import { projects, ProjectSector } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionWhatsAppCTA } from "@/components/SectionWhatsAppCTA";
import { ReviewsSection } from "@/components/ReviewsSection";
import { TrustBadges } from "@/components/TrustBadges";

interface FeaturedCaseStudy {
  id: string;
  title: string;
  location: string;
  clientType: string;
  clientName: string;
  productsSupplied: string[];
  photos: { src: string; alt: string }[];
  resultStatement: string;
  relatedHref: string;
  relatedLabel: string;
}

const FEATURED_CASE_STUDIES: FeaturedCaseStudy[] = [
  {
    id: "lasu-senate",
    title: "Lagos State University (LASU) New Senate Building",
    location: "Ojo / Iba, Lagos",
    clientType: "Government / Institutional Infrastructure",
    clientName: "CCECC / Lagos State University",
    productsSupplied: [
      "Ideal Standard & Armitage Shanks commercial wall-hung and close-coupled WCs",
      "Heavy-duty concealed cistern frames, dual-flush plates, and commercial urinals",
      "Grohe self-closing & single-lever basin mixers + high-pressure angle valves",
      "First-fix and second-fix plumbing supply and installation across multiple floors",
    ],
    photos: [
      {
        src: "/bento-foyer.webp",
        alt: "LASU New Senate Building architectural interior finishing supplied by Barryham Int'l Ltd",
      },
      {
        src: "/hero-main.webp",
        alt: "Commercial sanitary ware installation for institutional building in Lagos",
      },
      {
        src: "/service-plumbing.webp",
        alt: "High-pressure plumbing pipes and valves supplied for LASU Senate Building",
      },
      {
        src: "/bento-detail.webp",
        alt: "Precision chrome basin mixer and sanitary fitting detail",
      },
    ],
    resultStatement:
      "Delivered 100% of specified sanitary and plumbing packages on schedule across all senate floors, passing institutional pressure and durability inspections with zero defects.",
    relatedHref: "/sanitary-ware-lagos",
    relatedLabel: "Explore Sanitary Ware in Lagos →",
  },
  {
    id: "centrion-heights",
    title: "Centrion Heights Luxury Terraces",
    location: "Ladoke & Esugbayi Street, Ikeja GRA, Lagos",
    clientType: "Luxury Residential Estate Developer",
    clientName: "Royal Sanderton Groups",
    productsSupplied: [
      "Villeroy & Boch (Avento & Subway 3.0) rimless wall-hung WCs and vanity basins",
      "Grohe Tempesta 250 Cube concealed shower systems & brushed brassware",
      "Ariston Pro1 R 50L & 80L electric water heaters for all ensuite bedrooms",
      "Large-format vitrified floor and wet-area wall tiles with full installation",
    ],
    photos: [
      {
        src: "/hero-main.webp",
        alt: "Luxury bathroom suite at Centrion Heights Ikeja GRA supplied by Barryham Int'l Ltd",
      },
      {
        src: "/bento-detail.webp",
        alt: "Luxury faucet and basin installation at Centrion Heights",
      },
      {
        src: "/service-tiles.webp",
        alt: "Large-format vitrified tile installation in Ikeja GRA residential project",
      },
      {
        src: "/service-interior.webp",
        alt: "Bespoke interior joinery and bathroom vanity finishings",
      },
    ],
    resultStatement:
      "Elevated unit handover value across the Ikeja GRA terrace development with coordinated European bathroom suites and leak-free concealed plumbing.",
    relatedHref: "/bathroom-fittings-nigeria",
    relatedLabel: "Explore Bathroom Fittings Nigeria →",
  },
  {
    id: "alausa-multi-agency",
    title: "Multi-Agency Office Complex & Maternal Healthcare Centres",
    location: "Alausa, Ikeja & Lekki, Lagos",
    clientType: "Commercial & Hospital Developments",
    clientName: "Basscom/Palmyra & Deux Project Ltd.",
    productsSupplied: [
      "SON-certified Coleman CTIL single-core, twin & earth, and 25mm² armoured copper cables",
      "Hospital-grade Armitage Shanks & Ideal Standard sanitary bowls and scrub basins",
      "Sanit & Grohe heavy-traffic concealed flushing mechanisms and isolation valves",
      "Ariston commercial storage water heaters for maternity and surgical wards",
    ],
    photos: [
      {
        src: "/service-plumbing.webp",
        alt: "Commercial plumbing and electrical supply for Alausa Multi-Agency Complex",
      },
      {
        src: "/bento-foyer.webp",
        alt: "Commercial office foyer tiling and lighting installation in Alausa Ikeja",
      },
      {
        src: "/service-interior.webp",
        alt: "Commercial interior and electrical finishing by Barryham Int'l Ltd",
      },
    ],
    resultStatement:
      "Supplied certified electrical cabling and heavy-duty hospital/commercial sanitary ware under strict timeline milestones across Lagos Mainland and Island sites.",
    relatedHref: "/bulk-supply-contractors",
    relatedLabel: "Explore Bulk Contractor Supply →",
  },
];

const SECTORS: ("All" | ProjectSector)[] = [
  "All",
  "Government",
  "Hospital",
  "Residential",
  "Corporate",
];

export function ProjectsClient() {
  const [activeSector, setActiveSector] = useState<"All" | ProjectSector>("All");

  const filteredProjects = projects.filter(
    (p) => activeSector === "All" || p.sector === activeSector
  );

  return (
    <div className="space-y-24">
      {/* 1. Featured Case Studies with 3–6 Photos, Products Supplied & Result Statement (Directive 5.1) */}
      <section className="pt-12 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="mb-12">
          <TrustBadges />
        </div>

        <div className="mb-10">
          <span className="font-ui text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-2">
            Detailed Case Studies
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy">
            Featured Project Deliveries &amp; Installations
          </h2>
        </div>

        <div className="space-y-12">
          {FEATURED_CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-3xl p-6 md:p-10 border border-navy/10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left: 3–4 Photo Grid */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-3.5">
                {cs.photos.map((photo, idx) => (
                  <div
                    key={idx}
                    className={`relative rounded-2xl overflow-hidden border border-navy/10 bg-offwhite ${
                      idx === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>

              {/* Right: Project Details */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-ui text-xs font-semibold uppercase tracking-wider bg-navy text-gold px-3 py-1 rounded-full">
                      {cs.clientType}
                    </span>
                    <span className="font-ui text-xs text-charcoal/70 inline-flex items-center gap-1">
                      <MapPin size={14} className="text-gold" />
                      {cs.location}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-2">
                    {cs.title}
                  </h3>

                  <p className="font-ui text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-5 flex items-center gap-1.5">
                    <Building2 size={14} className="text-gold" />
                    Client / Main Contractor: <span className="text-navy">{cs.clientName}</span>
                  </p>

                  <div className="mb-5">
                    <h4 className="font-ui text-xs font-bold uppercase tracking-wider text-navy mb-2.5">
                      Products Supplied &amp; Scope:
                    </h4>
                    <ul className="space-y-2">
                      {cs.productsSupplied.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 font-ui text-sm text-charcoal/85"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-gold shrink-0 mt-0.5"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4">
                    <span className="font-ui text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                      Project Result
                    </span>
                    <p className="font-ui text-xs md:text-sm text-emerald-950 leading-relaxed">
                      {cs.resultStatement}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-navy/10">
                  <Link
                    href={cs.relatedHref}
                    className="font-ui text-xs font-semibold text-navy hover:text-gold uppercase tracking-wider"
                  >
                    {cs.relatedLabel}
                  </Link>
                  <Link
                    href="/request-quote"
                    className="inline-flex items-center gap-1.5 font-ui text-xs font-semibold text-white bg-navy hover:bg-gold px-5 py-2.5 rounded-full transition-colors"
                  >
                    Request Similar Project Quote <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Complete Directory of All 30 Real Completed Projects */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-ui text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-2">
            Full Track Record Across Nigeria
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-3">
            All 30+ Completed Institutional, Hospital, Residential &amp; Corporate Projects
          </h2>
          <p className="font-ui text-sm md:text-base text-charcoal/75">
            Filter our verified project deliveries across Lagos, Abuja, Port Harcourt, Warri, and Owerri by sector.
          </p>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-4 mb-10 justify-start md:justify-center">
          {SECTORS.map((sector) => (
            <button
              key={sector}
              type="button"
              onClick={() => setActiveSector(sector)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-ui text-xs md:text-sm font-semibold transition-all duration-200 min-h-[42px] ${
                activeSector === sector
                  ? "bg-navy text-white shadow-md"
                  : "bg-white text-charcoal border border-navy/10 hover:border-gold"
              }`}
            >
              {sector} (
              {sector === "All"
                ? projects.length
                : projects.filter((p) => p.sector === sector).length}
              )
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16">
          <SectionWhatsAppCTA
            title="Planning an Estate, Hotel, School, Hospital, or Commercial Build?"
            subtitle="Send your project BOQ to our engineering procurement team on WhatsApp for contractor trade pricing."
            contextLabel="projects_page_cta"
          />
        </div>
      </section>

      {/* 3. Verified Reviews Section */}
      <ReviewsSection />
    </div>
  );
}
