import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Portfolio | Barryham Int'l Ltd",
  description: "Explore our portfolio of over 30 completed commercial and residential projects across Nigeria, featuring our premium sanitary, electrical, and plumbing installations.",
};

const INITIAL_PROJECTS = [
  {
    id: "lasu-senate",
    name: "LASU New Senate Building",
    client: "Lagos State University",
    location: "Ojo, Lagos",
    description: "Complete supply and installation of premium sanitary wares and plumbing fittings for the modern university senate complex.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    category: "Institutional",
  },
  {
    id: "centrion-heights",
    name: "Centrion Heights",
    client: "Private Developer",
    location: "Ikoyi, Lagos",
    description: "High-end luxury bathroom fixtures, bespoke lighting, and premium interior finishes for a luxury residential high-rise.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    category: "Residential",
  },
  {
    id: "alausa-complex",
    name: "Multi Agency Office Complex",
    client: "Lagos State Government",
    location: "Alausa, Ikeja",
    description: "Commercial-grade sanitary installations, heavy-duty electrical cabling, and widespread plumbing for a major government hub.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    category: "Commercial",
  }
];

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-24 pb-32">
      {/* Header */}
      <section className="py-16 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Our Projects
          </h1>
          <p className="font-ui text-lg text-offwhite/90 leading-relaxed max-w-2xl mx-auto">
            A showcase of our precision curation and supply. We have successfully delivered over 30 high-profile installations across institutional, commercial, and luxury residential sectors.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pt-20 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {INITIAL_PROJECTS.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-navy/5 group flex flex-col">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-ui text-xs font-semibold tracking-wider uppercase bg-white/90 backdrop-blur-sm text-navy px-3 py-1.5 rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-heading font-semibold text-2xl text-navy mb-2">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2 text-charcoal/60 font-ui text-sm mb-4">
                  <MapPin size={16} />
                  <span>{project.location}</span>
                </div>
                <p className="font-ui text-charcoal/80 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-navy/5">
                  <span className="font-ui text-sm font-bold text-navy uppercase tracking-wider">Client:</span>
                  <span className="font-ui text-sm text-charcoal ml-2">{project.client}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action for more projects */}
        <div className="mt-24 text-center bg-white rounded-3xl p-12 border border-navy/5 shadow-sm max-w-3xl mx-auto">
          <h2 className="font-heading font-semibold text-3xl text-navy mb-4">
            More Projects Coming Soon
          </h2>
          <p className="font-ui text-charcoal/70 mb-8 max-w-lg mx-auto">
            We are currently compiling photography for the rest of our 30+ completed projects. Check back soon for more updates.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-white font-ui font-semibold text-sm tracking-wide rounded-full hover:bg-gold/90 transition-colors"
          >
            Work With Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
