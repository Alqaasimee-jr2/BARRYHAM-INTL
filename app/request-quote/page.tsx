import React from "react";
import type { Metadata } from "next";
import { RequestQuoteClient } from "@/components/RequestQuoteClient";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Request a Quote | Sanitary Ware, Plumbing & Electrical Fittings | Barryham Int’l Ltd",
  description:
    "Request a fast retail, trade, or bulk project quote for genuine Grohe, Ideal Standard, Villeroy & Boch, Roca, Ariston water heaters, and Coleman cables in Lagos & Nigeria.",
  alternates: {
    canonical: "https://barryham.site/request-quote",
  },
};

export default function RequestQuotePage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Request a Quote", url: "/request-quote" },
  ]);

  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-28 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="py-14 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-gold block mb-3">
            Retail • Trade • Bulk Contractor Pricing
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Request a Quote
          </h1>
          <p className="font-ui text-base md:text-lg text-offwhite/90 leading-relaxed">
            Tell us what you need for your home, estate, hotel, school, office, or construction project. Our sales team will send you competitive pricing and stock confirmation directly on WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <RequestQuoteClient />
      </section>
    </main>
  );
}
