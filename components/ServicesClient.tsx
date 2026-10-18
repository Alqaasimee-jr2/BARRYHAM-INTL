"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, FileText, ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { BUSINESS_INFO, PROJECT_TYPES } from "@/lib/constants";
import { SectionWhatsAppCTA } from "./SectionWhatsAppCTA";
import { TrustBadges } from "./TrustBadges";

const SERVICES = [
  {
    id: "s-1",
    title: "Plumbing & Sanitary Ware Supply & Installation",
    description:
      "We handle the complete sourcing and certified installation of genuine European WCs, concealed cisterns, basins, pipes, valves, traps, drains, and Ariston water heaters for your site. By partnering directly with Grohe, Ideal Standard, Villeroy & Boch, and Roca, we guarantee leak-free longevity.",
    features: [
      "Wall-hung & close-coupled WCs, concealed frames & flush plates",
      "Heavy-duty copper, PPR & UPVC piping and pressure valves",
      "Ariston water heaters & thermostatic shower mixer installations",
    ],
    image: "/service-plumbing.webp",
    imageAlt: "Plumbing fittings, copper pipes, valves and sanitary installation by Barryham Int'l Ltd Lagos",
    landingHref: "/plumbing-fittings-lagos",
    landingLabel: "Explore Plumbing Fittings in Lagos →",
  },
  {
    id: "s-2",
    title: "Supply & Installation of Architectural Tiles & Bathroom Finishings",
    description:
      "We provide floor and wall tiling plus complete bathroom fit-outs for residential estates, hotels, hospitals, and corporate builds. We supply and install high-grade ceramic and vitrified tiles from Varmora, Roca, and Reigner engineered for high durability.",
    features: [
      "Vitrified & porcelain tile supply for wet and high-traffic areas",
      "Laser-leveled floor and wall alignment installation",
      "Complete bathroom waterproofing & second-fix trim fitting",
    ],
    image: "/service-tiles.webp",
    imageAlt: "Large-format vitrified bathroom and floor tile installation in Lagos by Barryham Int'l Ltd",
    landingHref: "/bathroom-fittings-nigeria",
    landingLabel: "Explore Bathroom Fittings Nigeria →",
  },
  {
    id: "s-3",
    title: "Electrical Cables, Lighting & Interior Finishings",
    description:
      "We supply SON-certified Coleman CTIL electrical cables, switchgear, architectural lighting, and bespoke interior joinery (kitchen cabinets, vanity units, and fitted wardrobes) tailored for modern Nigerian homes and commercial complexes.",
    features: [
      "Genuine Coleman CTIL single-core, armoured & flexible copper cables",
      "Commercial & residential LED lighting and distribution accessories",
      "Custom moisture-resistant bathroom vanities & kitchen cabinetry",
    ],
    image: "/service-interior.webp",
    imageAlt: "Electrical lighting and bespoke interior finishings installed by Barryham Int'l Ltd",
    landingHref: "/electrical-fittings-lagos",
    landingLabel: "Explore Electrical Fittings in Lagos →",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function ServicesClient() {
  const [selections, setSelections] = useState<Record<string, string>>({
    "s-1": "Home",
    "s-2": "Home",
    "s-3": "Home",
  });

  const handleDropdownChange = (serviceId: string, type: string) => {
    setSelections((prev) => ({ ...prev, [serviceId]: type }));
  };

  const handleServiceRequest = (serviceId: string, title: string) => {
    const projectType = selections[serviceId];
    const link = buildWhatsAppLink(
      BUSINESS_INFO.whatsappNumber,
      [{ name: title }],
      "service",
      undefined,
      undefined,
      projectType
    );
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 px-6 lg:px-12 max-w-[1440px] mx-auto w-full flex flex-col gap-20">
      <TrustBadges />

      {SERVICES.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={service.id} className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 bg-white p-6 md:p-10 rounded-3xl border border-navy/10 shadow-sm ${
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
                <span className="font-ui text-xs font-bold uppercase tracking-[0.2em] text-gold mb-2">
                  Service 0{index + 1} • Supply &amp; Certified Installation
                </span>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-4">
                  {service.title}
                </h2>
                <p className="font-ui text-charcoal/80 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-charcoal font-ui text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.landingHref}
                  className="font-ui text-xs font-semibold text-navy hover:text-gold uppercase tracking-wider mb-6 inline-flex items-center gap-1 w-fit"
                >
                  {service.landingLabel}
                </Link>

                {/* Project Type Dropdown + WhatsApp CTA (Directive 1.2) */}
                <div className="pt-6 border-t border-navy/10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-end gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor={`project-type-${service.id}`}
                      className="font-ui text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-1.5"
                    >
                      Project Type
                    </label>
                    <select
                      id={`project-type-${service.id}`}
                      value={selections[service.id]}
                      onChange={(e) =>
                        handleDropdownChange(service.id, e.target.value)
                      }
                      className="border border-navy/15 rounded-xl px-4 py-3 bg-offwhite/50 font-ui text-sm text-charcoal focus:border-gold outline-none min-h-[46px] min-w-[170px]"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleServiceRequest(service.id, service.title)
                    }
                    className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-ui font-semibold px-6 py-3.5 rounded-xl transition-colors min-h-[46px] text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={17} />
                    Chat on WhatsApp for This Service
                  </button>

                  <Link
                    href="/request-quote"
                    className="bg-navy hover:bg-gold text-white font-ui font-semibold px-6 py-3.5 rounded-xl transition-colors min-h-[46px] text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2"
                  >
                    <FileText size={16} />
                    Request Formal Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}

      {/* Links to Dedicated Service Landing Pages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/bulk-supply-contractors"
          className="group bg-white p-8 rounded-2xl border border-navy/10 hover:border-gold shadow-sm transition-all flex items-center justify-between gap-4"
        >
          <div>
            <span className="font-ui text-xs font-bold uppercase tracking-widest text-gold block mb-1">
              For Developers &amp; MEP Engineers
            </span>
            <h3 className="font-heading font-bold text-2xl text-navy group-hover:text-gold transition-colors">
              Bulk Supply for Contractors
            </h3>
            <p className="font-ui text-xs text-charcoal/70 mt-1">
              Trade discounts, proforma invoices &amp; staged site call-off schedules.
            </p>
          </div>
          <ArrowRight className="text-gold shrink-0" />
        </Link>

        <Link
          href="/delivery-installation"
          className="group bg-white p-8 rounded-2xl border border-navy/10 hover:border-gold shadow-sm transition-all flex items-center justify-between gap-4"
        >
          <div>
            <span className="font-ui text-xs font-bold uppercase tracking-widest text-gold block mb-1">
              Lagos &amp; Nationwide Coverage
            </span>
            <h3 className="font-heading font-bold text-2xl text-navy group-hover:text-gold transition-colors">
              Delivery &amp; Certified Installation
            </h3>
            <p className="font-ui text-xs text-charcoal/70 mt-1">
              24–48hr Lagos delivery and full first/second-fix installation support.
            </p>
          </div>
          <ArrowRight className="text-gold shrink-0" />
        </Link>
      </div>

      {/* Bottom Section WhatsApp CTA */}
      <SectionWhatsAppCTA
        title="Ready to Schedule Material Supply or On-Site Installation?"
        subtitle="Message our engineering team on WhatsApp with your site location and project requirements."
        contextLabel="services_page_bottom_cta"
      />
    </section>
  );
}
