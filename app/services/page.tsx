"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const SERVICES = [
  {
    id: "s-1",
    title: "Plumbing Fittings Supply & Installation",
    description:
      "We handle the complete sourcing and professional installation of premium pipes, valves, traps, drains, and sanitary accessories for your site. By partnering with top European brands, we guarantee you leak-free longevity.",
    features: [
      "Heavy-duty copper & PPR piping",
      "Industrial and residential pressure valves",
      "Modern aesthetic bottle traps & floor drains",
    ],
    image: "/service-plumbing.webp",
    imageAlt: "Premium plumbing fittings and pipes — copper pipes, valves and connectors",
  },
  {
    id: "s-2",
    title: "Supply and Installation of Tiles",
    description:
      "We provide expert floor and wall tiling solutions for your residential, corporate, or public builds. We supply and install high-grade ceramic and vitrified tiles designed to give your space high durability and sophisticated modern aesthetics.",
    features: [
      "Vitrified & ceramic tile supply",
      "Perfect leveling & alignment installation",
      "Slip-resistant bathroom & wet area tiling",
    ],
    image: "/service-tiles.webp",
    imageAlt: "Elegant large-format vitrified tile installation in a modern interior",
  },
  {
    id: "s-3",
    title: "Interior Finishings",
    description:
      "We craft premium carpentry and bespoke joinery for your kitchen cabinets, wardrobes, and storage systems. Every piece is tailored to maximize your space and elevate the visual luxury of your interiors.",
    features: [
      "Custom kitchen cabinets",
      "Luxury fitted wardrobes",
      "High-quality soft-close hinges & runners",
    ],
    image: "/service-interior.webp",
    imageAlt: "Bespoke fitted kitchen cabinets and luxury wardrobe joinery",
  },
];

const PROJECT_TYPES = ["Residential", "Commercial", "Government", "Other"];

// Fade up animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ServicesPage() {
  const [selections, setSelections] = useState<Record<string, string>>({
    "s-1": "Residential",
    "s-2": "Residential",
    "s-3": "Residential",
  });

  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowMobileCta(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownChange = (serviceId: string, type: string) => {
    setSelections((prev) => ({ ...prev, [serviceId]: type }));
  };

  const handleServiceRequest = (serviceId: string, title: string) => {
    const projectType = selections[serviceId];
    const link = buildWhatsAppLink(
      "2348034750270",
      [{ name: title }],
      "service",
      undefined,
      projectType
    );
    window.open(link, "_blank");
  };

  const handleGeneralRequest = () => {
    const link = buildWhatsAppLink("2348034750270", [], "general");
    window.open(link, "_blank");
  };

  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-24 pb-32">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Our Services to You
          </h1>
          <p className="font-ui text-lg md:text-xl text-offwhite/90 max-w-2xl mx-auto leading-relaxed">
            We provide you with comprehensive supply <em>and</em> expert installation of building
            fittings, plumbing systems, and premium finishings. We aren&apos;t just a retailer —
            we partner with you and stay on-site until your vision is perfectly realized.
          </p>
        </div>
      </section>

      {/* Services Alternating Blocks */}
      <section className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto w-full flex flex-col gap-24">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden relative shadow-md">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Text Block */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <h2 className="font-heading font-bold text-3xl text-navy mb-6">
                  {service.title}
                </h2>
                <p className="font-ui text-charcoal/80 text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features Checklist */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-charcoal font-ui text-sm">
                      <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Project Type Dropdown + CTA */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <div className="flex flex-col">
                    <label className="font-ui text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      value={selections[service.id]}
                      onChange={(e) => handleDropdownChange(service.id, e.target.value)}
                      className="border border-navy/10 rounded-lg px-4 py-3 bg-white font-ui text-sm text-charcoal focus:border-gold outline-none min-h-[44px] min-w-[160px]"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={() => handleServiceRequest(service.id, service.title)}
                    className="sm:mt-6 bg-gold hover:bg-navy text-white font-ui font-semibold px-8 py-3.5 rounded-lg transition-colors min-h-[44px] text-sm tracking-wider uppercase"
                  >
                    Request This Service
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Sticky Mobile CTA Bar */}
      {showMobileCta && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-gold text-white p-4 flex items-center justify-between shadow-2xl md:hidden">
          <span className="font-heading font-semibold text-sm">Need a service quote?</span>
          <button
            onClick={handleGeneralRequest}
            className="bg-navy hover:bg-navy/90 text-white font-ui font-bold text-xs uppercase px-4 py-2.5 rounded-md min-h-[44px]"
          >
            Request Quote
          </button>
        </div>
      )}
    </main>
  );
}
