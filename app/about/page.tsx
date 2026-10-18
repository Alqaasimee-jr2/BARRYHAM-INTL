import React from "react";
import type { Metadata } from "next";
import { AboutClient } from "@/components/AboutClient";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "About Barryham International Limited | Authorised Sanitary, Plumbing & Electrical Supplier Lagos",
  description:
    "Established in 2018 with showrooms in Dopemu-Agege and Alimosho, Lagos. Direct distributor for Grohe, Ideal Standard, Villeroy & Boch, Roca, Ariston, and Coleman CTIL across 30+ major Nigerian projects.",
  alternates: {
    canonical: "https://barryham.site/about",
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="py-16 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-gold block mb-3">
            Established 2018 • Dopemu-Agege &amp; Alimosho, Lagos
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            About Barryham International Limited
          </h1>
          <p className="font-ui text-base md:text-lg text-offwhite/90 leading-relaxed">
            Barryham International Limited (BIL) bridges the gap between global manufacturing excellence and Nigerian building projects—supplying and installing genuine European sanitary ware, plumbing fittings, water heaters, and electrical cables.
          </p>
        </div>
      </section>

      <AboutClient />
    </main>
  );
}
