import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, MessageCircle } from "lucide-react";
import { ProductsClient } from "@/components/ProductsClient";
import { STICKY_WHATSAPP_LINK } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Product Catalogue | Sanitary Ware, Plumbing, Water Heaters & Cables in Lagos | Barryham Int’l Ltd",
  description:
    "Browse 90+ genuine sanitary ware, plumbing fittings, Ariston water heaters, and Coleman CTIL electrical cables stocked in Lagos. Filter by category, brand, price, availability, and project use case.",
  alternates: {
    canonical: "https://barryham.site/products",
  },
};

export default function ProductsPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products Catalogue", url: "/products" },
  ]);

  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-28 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <section className="py-14 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-gold block mb-3">
            No Login Required • Retail &amp; Trade Supply
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Sanitary Ware, Plumbing &amp; Electrical Product Catalogue
          </h1>
          <p className="font-ui text-base md:text-lg text-offwhite/90 leading-relaxed max-w-2xl mx-auto">
            Browse our stocked European sanitary ware, brassware, concealed cisterns, Ariston water heaters, and SON-certified Coleman electrical cables. Filter by brand, price, or project type and enquire directly on WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={STICKY_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-ui font-semibold text-sm py-3.5 px-7 rounded-full transition-colors shadow-md min-h-[48px]"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp for Bulk Pricing
            </a>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-ui font-semibold text-sm py-3.5 px-7 rounded-full transition-colors shadow-md min-h-[48px]"
            >
              <FileText size={18} />
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      <React.Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <div className="animate-pulse w-8 h-8 rounded-full bg-navy/20" />
          </div>
        }
      >
        <ProductsClient />
      </React.Suspense>
    </main>
  );
}
