import React from "react";
import Link from "next/link";
import {
  MessageCircle,
  FileText,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import { LandingPageConfig } from "@/data/landing-pages";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionWhatsAppCTA } from "@/components/SectionWhatsAppCTA";
import { WhyBarryham } from "@/components/WhyBarryham";
import { BUSINESS_INFO } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getLocalBusinessSchema,
} from "@/lib/schema";

export function LandingPageTemplate({ config }: { config: LandingPageConfig }) {
  const whatsappHref = buildWhatsAppLink(
    BUSINESS_INFO.whatsappNumber,
    [],
    "general",
    config.whatsappCtaMessage
  );

  const matchingProducts = (
    config.productFilterCategory && config.productFilterCategory !== "all"
      ? products.filter((p) => p.category === config.productFilterCategory)
      : products
  ).slice(0, 8);

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: config.h1, url: `/${config.slug}` },
  ]);

  const faqJsonLd = getFAQSchema(config.faqs);
  const localBusinessJsonLd = getLocalBusinessSchema();

  const showroom =
    config.showroomInfo !== undefined
      ? BUSINESS_INFO.showrooms[config.showroomInfo.showroomIndex]
      : null;

  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-24 pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Hero */}
      <section className="py-14 lg:py-16 px-6 lg:px-12 bg-navy text-white">
        <div className="max-w-5xl mx-auto">
          <nav
            aria-label="Breadcrumb"
            className="font-ui text-xs text-offwhite/60 mb-4 flex items-center gap-2"
          >
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold">{config.h1}</span>
          </nav>

          <span className="font-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-gold block mb-3">
            {config.eyebrow}
          </span>

          <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] mb-5 leading-tight">
            {config.h1}
          </h1>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 max-w-2xl">
            <p className="font-ui text-[10px] uppercase tracking-wider text-gold font-semibold mb-1">
              Intended Audience &amp; Project Scope
            </p>
            <p className="font-ui text-xs md:text-sm text-offwhite/90 leading-relaxed">
              {config.whoItIsFor}
            </p>
          </div>

          <div className="space-y-3 max-w-2xl mb-8">
            {config.introParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="font-ui text-xs md:text-sm text-offwhite/80 leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-ui font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm transition-colors min-h-[44px]"
            >
              <MessageCircle size={15} />
              Inquire on WhatsApp
            </a>

            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-gold text-white hover:text-gold font-ui font-semibold text-xs uppercase tracking-wider px-5 py-3.5 rounded-full transition-colors min-h-[44px]"
            >
              <FileText size={15} />
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Showroom Map (for Dopemu & Alimosho) */}
      {showroom && config.showroomInfo && (
        <section className="pt-12 px-6 lg:px-12 max-w-7xl mx-auto w-full">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-navy/10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-ui text-[10px] font-bold uppercase tracking-widest text-gold block">
                Showroom Location
              </span>
              <h2 className="font-heading font-semibold text-2xl text-navy">
                {showroom.name}
              </h2>
              <div className="space-y-2.5 font-ui text-xs text-charcoal/80">
                <p className="flex items-start gap-2">
                  <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                  <span>{showroom.fullAddress}</span>
                </p>
                <p className="flex items-start gap-2">
                  <Clock size={16} className="text-gold shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.openingHours.display}</span>
                </p>
                <p className="text-[11px] text-charcoal/70 bg-offwhite p-3 rounded-lg border border-navy/5">
                  <strong>Landmark:</strong> {config.showroomInfo.landmarks}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={showroom.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-navy hover:bg-gold text-white font-ui text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-full transition-colors"
                >
                  <ExternalLink size={13} />
                  Google Maps Directions
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 w-full aspect-video rounded-xl overflow-hidden border border-navy/10">
              <iframe
                title={`${showroom.name} Google Map`}
                src={showroom.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* Product Categories */}
      <section className="py-14 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-gold mb-1">
            Available Categories
          </p>
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
            Fittings &amp; Materials Supplied
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {config.productCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-xl p-6 border border-navy/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                  {cat.title}
                </h3>
                <p className="font-ui text-xs md:text-sm text-charcoal/75 leading-relaxed mb-4">
                  {cat.description}
                </p>
              </div>
              <Link
                href={cat.href}
                className="font-ui text-xs font-semibold text-gold hover:text-navy uppercase tracking-wider inline-flex items-center gap-1"
              >
                Browse in Catalogue <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stocked Products Grid */}
      <section className="py-10 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-gold mb-1">
              Direct Inventory
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
              Selected In-Stock Items
            </h2>
          </div>
          <Link
            href={
              config.productFilterCategory &&
              config.productFilterCategory !== "all"
                ? `/products?category=${config.productFilterCategory}`
                : "/products"
            }
            className="font-ui text-xs font-semibold uppercase tracking-wider text-navy hover:text-gold inline-flex items-center gap-1"
          >
            All Products <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {matchingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Authorised Brands */}
      <section className="py-12 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-navy/10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-gold mb-1">
                Manufacturer Supply
              </p>
              <h2 className="font-heading font-semibold text-xl md:text-2xl text-navy">
                Authorised Brands
              </h2>
            </div>
            <Link
              href="/brands"
              className="font-ui text-xs font-semibold uppercase tracking-wider text-navy hover:text-gold"
            >
              See All 15 Brands →
            </Link>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {config.brandsSupplied.map((brandName) => (
              <Link
                key={brandName}
                href={`/products?brand=${encodeURIComponent(brandName)}`}
                className="px-4 py-2 rounded-lg bg-offwhite hover:bg-navy text-navy hover:text-white border border-navy/10 font-ui text-xs font-medium transition-colors"
              >
                {brandName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery & Installation Information */}
      <section className="py-10 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="bg-navy text-white rounded-2xl p-6 md:p-10">
          <div className="max-w-2xl">
            <span className="font-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-gold block mb-2">
              Logistics &amp; Installation
            </span>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-3">
              {config.deliveryAndInstallation.heading}
            </h2>
            <p className="font-ui text-offwhite/80 text-xs md:text-sm leading-relaxed mb-6">
              {config.deliveryAndInstallation.summary}
            </p>
            <ul className="space-y-2.5 mb-6">
              {config.deliveryAndInstallation.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 font-ui text-xs md:text-sm text-offwhite/90"
                >
                  <CheckCircle2
                    size={16}
                    className="text-gold shrink-0 mt-0.5"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/delivery-installation"
              className="font-ui text-xs font-semibold text-gold hover:underline inline-flex items-center gap-1"
            >
              Learn more about our site delivery &amp; installation support →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Barryham Section */}
      <WhyBarryham />

      {/* FAQs */}
      <section className="py-14 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        <div className="text-center mb-8">
          <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-gold mb-1">
            Questions &amp; Answers
          </p>
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3.5">
          {config.faqs.map((faq, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="group bg-white rounded-xl border border-navy/10 shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none p-5 font-heading font-medium text-base text-navy hover:text-gold transition-colors gap-4">
                <span>{faq.question}</span>
                <span className="shrink-0 text-gold text-xl font-light transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 pt-1 border-t border-navy/5">
                <p className="font-ui text-xs md:text-sm text-charcoal/75 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Strategic Single Closing CTA */}
      <section className="py-8 px-6 lg:px-12 max-w-5xl mx-auto w-full">
        <SectionWhatsAppCTA
          title={`Inquire or Request Pricing for ${config.h1}`}
          subtitle="Send your material schedule or BOQ to our sales engineers on WhatsApp for verified Lagos availability and trade rates."
          whatsappMessage={config.whatsappCtaMessage}
          contextLabel={`landing_${config.slug}_closing_cta`}
        />
      </section>
    </main>
  );
}
