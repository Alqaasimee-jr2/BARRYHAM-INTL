import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MessageCircle, FileText, Home } from "lucide-react";
import { STICKY_WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Page Not Found (404) | Barryham Int’l Ltd",
  description:
    "Explore Barryham International Limited's main product categories: Sanitary Ware, Plumbing Fittings, Electrical Cables, and Water Heaters in Lagos and Nigeria.",
};

const MAIN_CATEGORY_LINKS = [
  {
    name: "Sanitary Ware in Lagos",
    desc: "Wall-hung & close-coupled WCs, basins, urinals & bidets",
    href: "/sanitary-ware-lagos",
  },
  {
    name: "Plumbing Fittings Lagos",
    desc: "Concealed cisterns, flush plates, mixers, valves & pipes",
    href: "/plumbing-fittings-lagos",
  },
  {
    name: "Electrical Fittings & Cables",
    desc: "Coleman CTIL copper & armoured cables, lighting & accessories",
    href: "/electrical-fittings-lagos",
  },
  {
    name: "Bathroom Fittings Nigeria",
    desc: "Complete luxury & commercial bathroom packages nationwide",
    href: "/bathroom-fittings-nigeria",
  },
  {
    name: "Ariston Water Heaters",
    desc: "10L to 100L residential & commercial water heaters",
    href: "/water-heaters-nigeria",
  },
  {
    name: "Full Product Catalogue",
    desc: "Browse 100+ stocked SKUs with live filters & specifications",
    href: "/products",
  },
];

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-32 pb-28 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto w-full text-center">
        <span className="font-ui text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-3">
          Error 404 • Page Not Found
        </span>
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
          We Couldn&apos;t Find That Page
        </h1>
        <p className="font-ui text-charcoal/80 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          The page you are looking for may have moved. Browse our main product categories below or chat directly with our Lagos sales team on WhatsApp.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href={STICKY_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-ui font-semibold text-sm px-7 py-3.5 rounded-full shadow-md transition-colors min-h-[48px]"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 bg-navy hover:bg-gold text-white font-ui font-semibold text-sm px-7 py-3.5 rounded-full transition-colors min-h-[48px]"
          >
            <FileText size={17} />
            Request a Quote
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-navy/20 text-navy hover:border-gold hover:text-gold font-ui font-semibold text-sm px-6 py-3.5 rounded-full transition-colors min-h-[48px]"
          >
            <Home size={16} />
            Back to Homepage
          </Link>
        </div>

        <div className="text-left">
          <h2 className="font-heading font-semibold text-2xl text-navy mb-6 text-center">
            Explore Our Main Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MAIN_CATEGORY_LINKS.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group bg-white p-6 rounded-2xl border border-navy/10 hover:border-gold shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading font-semibold text-lg text-navy group-hover:text-gold transition-colors mb-1.5">
                    {cat.name}
                  </h3>
                  <p className="font-ui text-xs text-charcoal/70 leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                </div>
                <span className="font-ui text-xs font-semibold text-gold inline-flex items-center gap-1">
                  View Category <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
