import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Store,
  Truck,
  Wrench,
  BadgePercent,
  Building2,
} from "lucide-react";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Genuine Manufacturer Stock",
    description:
      "Direct distribution relationships with Grohe, Ideal Standard, Villeroy & Boch, Roca, Geberit, Ariston, and Coleman CTIL. Zero counterfeits—every product carries official warranty backing.",
    href: "/brands",
    linkLabel: "View Partner Brands →",
  },
  {
    icon: Store,
    title: "Physical Lagos Showrooms",
    description:
      "Inspect finishes, ceramic glazes, flush valves, and cable gauges firsthand at our Dopemu-Agege and Alimosho (LASU-Isheri Rd) showrooms, open Monday–Saturday.",
    href: "/dopemu-showroom",
    linkLabel: "Showroom Locations →",
  },
  {
    icon: Truck,
    title: "Scheduled Site Logistics",
    description:
      "24–48 hour dispatch across Lagos Mainland and Island, with secure, insured transit for commercial consignments across Abuja, Port Harcourt, and nationwide.",
    href: "/delivery-installation",
    linkLabel: "Logistics Details →",
  },
  {
    icon: Wrench,
    title: "On-Site Installation Support",
    description:
      "Beyond supply, our qualified technicians undertake full mechanical plumbing, sanitary ware mounting, water heater commissioning, and architectural tiling.",
    href: "/delivery-installation",
    linkLabel: "Installation Services →",
  },
  {
    icon: BadgePercent,
    title: "Contractor Trade Pricing",
    description:
      "Structured volume terms, phased delivery call-offs, and rapid proforma quotes for developers, MEP consultants, and main contractors working against strict budgets.",
    href: "/bulk-supply-contractors",
    linkLabel: "Contractor Supply →",
  },
  {
    icon: Building2,
    title: "30+ Project Deliveries",
    description:
      "Proven supply history spanning state university senate complexes, central bank branches, maternal hospitals, high-rise residential estates, and corporate headquarters.",
    href: "/projects",
    linkLabel: "Project Portfolio →",
  },
];

export function WhyBarryham({ className = "" }: { className?: string }) {
  return (
    <section className={`py-20 px-6 lg:px-12 bg-white border-y border-navy/5 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-gold mb-2">
            Why Work With BIL
          </p>
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy mb-3">
            Distributor Precision &amp; Installation Integrity
          </h2>
          <p className="font-ui text-xs md:text-sm text-charcoal/70 leading-relaxed">
            From luxury private residences to large-scale institutional developments, Barryham provides genuine materials, technical certainty, and accountable on-site delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-offwhite/60 hover:bg-white rounded-xl p-6 border border-navy/5 hover:border-gold/40 shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-navy/5 text-navy flex items-center justify-center mb-4">
                    <Icon size={19} className="text-gold" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-ui text-xs md:text-sm text-charcoal/75 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>
                <Link
                  href={pillar.href}
                  className="font-ui text-xs font-semibold text-gold hover:text-navy uppercase tracking-wider transition-colors inline-block pt-2"
                >
                  {pillar.linkLabel}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
