"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Wrench,
  Droplets,
  Zap,
  Layers,
  Truck,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { SectionWhatsAppCTA } from "@/components/SectionWhatsAppCTA";
import { BUSINESS_INFO } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  categoryTag: string;
  description: string;
  capabilities: string[];
  landingHref: string;
  landingLabel: string;
  image: string;
}

const CORE_SERVICES: ServiceItem[] = [
  {
    id: "sanitary-supply",
    icon: Droplets,
    title: "Sanitary Ware Supply & Fitting",
    categoryTag: "Bathrooms & Ceramics",
    description:
      "Direct procurement, inspection, and professional installation of European-engineered vitreous china WCs, concealed cistern frames, vanity basins, and brassware.",
    capabilities: [
      "Wall-hung & back-to-wall WC suites with dual-flush pneumatic actuation",
      "Concealed thermostatic shower valves, rain heads & ceramic disc mixers",
      "Hospital-grade sensor taps, scrub basins & commercial urinals",
    ],
    landingHref: "/sanitary-ware-lagos",
    landingLabel: "Explore Sanitary Ware in Lagos",
    image: "/services/service-sanitary.webp",
  },
  {
    id: "plumbing-engineering",
    icon: Wrench,
    title: "Plumbing Systems & Water Heating",
    categoryTag: "Piping & Valves",
    description:
      "Engineered water supply and drainage solutions using genuine PPR, uPVC, and brass components built to endure local borehole and municipal water pressures.",
    capabilities: [
      "PN20 heat-fusion PPR pipes & fittings for hot and cold distribution",
      "Heavy-duty brass gate valves, ball valves & non-return check valves",
      "Certified Ariston storage & instant water heater mounting with safety valves",
    ],
    landingHref: "/plumbing-fittings-lagos",
    landingLabel: "Explore Plumbing Fittings in Lagos",
    image: "/services/service-plumbing.webp",
  },
  {
    id: "electrical-supply",
    icon: Zap,
    title: "Electrical Cables & Power Distribution",
    categoryTag: "Cables & Lighting",
    description:
      "Certified electrical materials for residential estates, institutional facilities, and commercial developments with zero tolerance for substandard wiring.",
    capabilities: [
      "SON-certified 99.9% pure electrolytic copper cables (Coleman CTIL)",
      "Steel Wire Armoured (SWA) sub-main & underground feeder cables",
      "Industrial & domestic distribution boards, MCBs, and surge protection",
    ],
    landingHref: "/electrical-fittings-lagos",
    landingLabel: "Explore Electrical Cables & Fittings",
    image: "/services/service-electrical.webp",
  },
  {
    id: "tiling-installation",
    icon: Layers,
    title: "Architectural Tiling & Wet-Area Fit-Out",
    categoryTag: "Surfaces & Finishes",
    description:
      "Precision floor and wall tiling for bathrooms, lobbies, and high-traffic areas, executed with laser-levelled alignment and complete wet-area sealing.",
    capabilities: [
      "Large-format porcelain and vitrified floor and wall tiles",
      "Precision laser alignment, anti-slip bathroom flooring & epoxy grouting",
      "Second-fix trim fitting, shower enclosures & bathroom accessories",
    ],
    landingHref: "/bathroom-fittings-nigeria",
    landingLabel: "Explore Bathroom Solutions in Nigeria",
    image: "/services/service-tiling.webp",
  },
  {
    id: "bulk-logistics",
    icon: Truck,
    title: "Contractor Procurement & Site Logistics",
    categoryTag: "Project Supply",
    description:
      "End-to-end supply chain support for developers, main contractors, and MEP consultants, delivering bulk consignments with verified manufacturer certification.",
    capabilities: [
      "Bill of Quantities (BOQ) price reviews and phased delivery scheduling",
      "Direct warehouse dispatches across Lagos and transport to all 36 states",
      "Manufacturer warranty documentation and dedicated account management",
    ],
    landingHref: "/bulk-supply-contractors",
    landingLabel: "Explore Bulk Contractor Supply",
    image: "/services/service-logistics.webp",
  },
];

export function ServicesClient() {
  return (
    <div className="space-y-16 py-12 px-6 lg:px-12 max-w-7xl mx-auto w-full">
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CORE_SERVICES.map((service) => {
          const Icon = service.icon;
          const whatsappHref = buildWhatsAppLink(
            BUSINESS_INFO.whatsappNumber,
            [{ name: service.title }],
            "service"
          );

          return (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-navy/10 shadow-sm hover:shadow-md hover:border-gold/40 transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Hyper-realistic service visual */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl mb-5 bg-navy/5">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <span className="absolute bottom-3 left-3 font-ui text-[10px] font-semibold uppercase tracking-widest text-white bg-navy/85 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                    {service.categoryTag}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-semibold text-xl text-navy group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <div className="w-9 h-9 rounded-xl bg-navy/5 group-hover:bg-navy group-hover:text-gold flex items-center justify-center text-navy transition-colors shrink-0 ml-3">
                    <Icon size={18} />
                  </div>
                </div>

                <p className="font-ui text-xs md:text-sm text-charcoal/70 leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-navy/5">
                  {service.capabilities.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs font-ui text-charcoal/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-navy/5 flex items-center justify-between gap-3 text-xs font-ui">
                <Link
                  href={service.landingHref}
                  className="font-semibold text-navy hover:text-gold transition-colors inline-flex items-center gap-1"
                >
                  {service.landingLabel} <ArrowRight size={13} />
                </Link>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-charcoal/50 hover:text-gold transition-colors"
                  title="Inquire about this service on WhatsApp"
                  aria-label="Inquire on WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Strategic Single Closing CTA */}
      <div className="max-w-4xl mx-auto">
        <SectionWhatsAppCTA
          title="Discuss Your Project's Installation or Procurement Needs"
          subtitle="Whether you need sanitary ware specified for an estate or electrical cables delivered to site, our technical sales engineers respond promptly."
          contextLabel="services_page_cta"
        />
      </div>
    </div>
  );
}
