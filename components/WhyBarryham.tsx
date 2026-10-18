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
    title: "Genuine Products Only",
    description:
      "We are direct manufacturer representatives for Grohe, Ideal Standard, Villeroy & Boch, Roca, Geberit, Ariston, and Coleman CTIL. Zero counterfeits—every item carries authentic manufacturer warranty.",
    href: "/brands",
    linkLabel: "Explore Our Partner Brands →",
  },
  {
    icon: Store,
    title: "Lagos Showroom Access",
    description:
      "Walk into our Dopemu-Agege or Alimosho (LASU-Isheri Road) showrooms Monday–Saturday (8am–6pm) to inspect finishes, flush systems, and cable gauges firsthand before buying.",
    href: "/dopemu-showroom",
    linkLabel: "Visit Our Showrooms →",
  },
  {
    icon: Truck,
    title: "Fast Lagos & Nationwide Delivery",
    description:
      "24–48 hour site delivery across Lagos Mainland and Island (Lekki, Victoria Island, Ikoyi, Ikeja, Agege) and secure nationwide logistics to Abuja, Port Harcourt, Ibadan, and beyond.",
    href: "/delivery-installation",
    linkLabel: "See Delivery Coverage →",
  },
  {
    icon: Wrench,
    title: "Certified Installation Support",
    description:
      "Beyond supplying materials, our experienced plumbing, sanitary, tiling, and electrical technicians handle complete first-fix and second-fix on-site installation.",
    href: "/delivery-installation",
    linkLabel: "Learn About Installation →",
  },
  {
    icon: BadgePercent,
    title: "Trade & Bulk Contractor Pricing",
    description:
      "Dedicated volume discounts, staged site call-off schedules, and rapid proforma invoicing for civil contractors, MEP engineers, estate developers, and procurement teams.",
    href: "/bulk-supply-contractors",
    linkLabel: "Get Contractor Trade Pricing →",
  },
  {
    icon: Building2,
    title: "Proven Project Supply Experience",
    description:
      "Trusted on 30+ major institutional, hospital, commercial, and residential developments—including LASU Senate Building, CBN, FIRS, Lagos HOMS, and Maternal & Child Hospitals.",
    href: "/projects",
    linkLabel: "View 30+ Completed Projects →",
  },
];

export function WhyBarryham({ className = "" }: { className?: string }) {
  return (
    <section className={`py-20 px-6 lg:px-12 bg-white border-y border-navy/5 ${className}`}>
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-ui text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-3">
            Why Choose Barryham Int&apos;l Ltd
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
            Built for Homeowners, Developers &amp; Contractors Who Refuse Substandard Materials
          </h2>
          <p className="font-ui text-charcoal/75 text-base leading-relaxed">
            Whether you are fitting out a single family bathroom in Lagos or procuring sanitary, plumbing, and electrical packages for a 15-floor estate, here is why leading builders choose BIL.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-offwhite/70 hover:bg-white rounded-2xl p-7 border border-navy/10 hover:border-gold/50 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-navy mb-2.5">
                  {pillar.title}
                </h3>
                <p className="font-ui text-sm text-charcoal/80 leading-relaxed mb-5 flex-grow">
                  {pillar.description}
                </p>
                <Link
                  href={pillar.href}
                  className="font-ui text-xs font-semibold text-navy hover:text-gold uppercase tracking-wider transition-colors"
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
