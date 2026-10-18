import React from "react";
import type { Metadata } from "next";
import { ContactClient } from "@/components/ContactClient";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Barryham Int’l Ltd | Sanitary Ware & Electrical Fittings Lagos",
  description:
    "Visit Barryham International Limited showrooms in Dopemu-Agege and Alimosho (LASU-Isheri Road), Lagos. Call 0803 475 0270 or chat on WhatsApp for sanitary ware, plumbing, and electrical quotes.",
  alternates: {
    canonical: "https://barryham.site/contact",
  },
  openGraph: {
    title: "Contact Barryham Int’l Ltd | Sanitary Ware & Electrical Fittings Lagos",
    description:
      "Connect with our Dopemu-Agege and Alimosho showrooms in Lagos for genuine European sanitary ware, plumbing fittings, water heaters, and electrical cables.",
    url: "https://barryham.site/contact",
  },
};

export default function ContactPage() {
  const localBusinessJsonLd = getLocalBusinessSchema();
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact" },
  ]);

  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-28 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Header */}
      <section className="py-14 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-gold block mb-3">
            Dopemu-Agege &amp; Alimosho Showrooms • Mon–Sat 8am–6pm
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Contact Barryham Int&apos;l Ltd
          </h1>
          <p className="font-ui text-base md:text-lg text-offwhite/90 leading-relaxed max-w-2xl mx-auto">
            Have an upcoming residential, estate, hotel, or commercial build? Reach our Lagos sales engineers on WhatsApp, by phone, or at our Dopemu and Alimosho showrooms.
          </p>
        </div>
      </section>

      <ContactClient />
    </main>
  );
}
