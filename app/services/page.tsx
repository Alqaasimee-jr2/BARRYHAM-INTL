import React from "react";
import type { Metadata } from "next";
import { ServicesClient } from "@/components/ServicesClient";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Plumbing, Sanitary Ware & Electrical Supply and Installation Services | Barryham Int’l Ltd Lagos",
  description:
    "Professional supply and on-site installation of European sanitary ware, plumbing fittings, vitrified tiles, Ariston water heaters, and Coleman electrical cables across Lagos and Nigeria.",
  alternates: {
    canonical: "https://barryham.site/services",
  },
};

export default function ServicesPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-28 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="py-16 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-gold block mb-3">
            Direct Supply + Certified On-Site Fitting
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Building Materials Supply &amp; Installation Services in Lagos
          </h1>
          <p className="font-ui text-base md:text-lg text-offwhite/90 max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive supply <em>and</em> expert installation of sanitary ware, plumbing systems, water heaters, electrical cables, and premium finishings across Lagos and Nigeria.
          </p>
        </div>
      </section>

      <ServicesClient />
    </main>
  );
}
