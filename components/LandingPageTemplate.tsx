import React from "react";
import Link from "next/link";
import {
  MessageCircle,
  FileText,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Clock,
  Phone,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { LandingPageConfig } from "@/data/landing-pages";
import { products } from "@/data/products";
import { PARTNER_BRANDS } from "@/data/brands";
import { ProductCard } from "@/components/ProductCard";
import { TrustBadges } from "@/components/TrustBadges";
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

  // Select up to 8 matching products for this landing page
  const matchingProducts = (
    config.productFilterCategory && config.productFilterCategory !== "all"
      ? products.filter((p) => p.category === config.productFilterCategory)
      : products
  ).slice(0, 8);

  const matchingBrands = PARTNER_BRANDS.filter((b) =>
    config.brandsSupplied.some(
      (name) => b.name.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(b.name.toLowerCase())
    )
  );

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
    <main className="flex min-h-screen flex-col bg-offwhite pt-28 pb-32">
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

      {/* 1. Hero with Single Clear H1 & Audience Intro */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 bg-navy text-white">
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

          <span className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-gold block mb-3">
            {config.eyebrow}
          </span>

          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            {config.h1}
          </h1>

          {/* Who it is for badge box */}
          <div className="bg-white/10 border border-white/15 rounded-2xl p-4 md:p-5 mb-6 max-w-3xl">
            <p className="font-ui text-xs uppercase tracking-wider text-gold font-semibold mb-1">
              Who This Is For
            </p>
            <p className="font-ui text-sm md:text-base text-white leading-relaxed">
              {config.whoItIsFor}
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mb-8">
            {config.introParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="font-ui text-sm md:text-base text-offwhite/85 leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-ui font-semibold text-sm px-7 py-4 rounded-full shadow-lg transition-colors min-h-[52px]"
            >
              <MessageCircle size={19} />
              Chat on WhatsApp for Pricing
            </a>

            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-ui font-semibold text-sm px-7 py-4 rounded-full shadow-md transition-colors min-h-[52px]"
            >
              <FileText size={18} />
              Request a Formal Quote
            </Link>

            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="inline-flex items-center gap-2 border border-white/25 hover:border-gold text-white hover:text-gold font-ui font-semibold text-sm px-6 py-4 rounded-full transition-colors min-h-[52px]"
            >
              <Phone size={16} />
              Call {BUSINESS_INFO.primaryPhoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 -mt-6 z-10">
        <TrustBadges />
      </section>

      {/* Optional Showroom Map & Local Area Details (for Dopemu & Alimosho pages) */}
      {showroom && config.showroomInfo && (
        <section className="pt-16 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-navy/10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="font-ui text-xs font-bold uppercase tracking-widest text-gold block">
                Showroom Address &amp; Directions
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy">
                {showroom.name}
              </h2>
              <div className="space-y-3 font-ui text-sm text-charcoal/85">
                <p className="flex items-start gap-2.5">
                  <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                  <span>{showroom.fullAddress}</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <Clock size={18} className="text-gold shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.openingHours.display}</span>
                </p>
                <p className="text-xs text-charcoal/70 bg-offwhite p-3.5 rounded-xl border border-navy/5">
                  <strong>Landmark:</strong> {config.showroomInfo.landmarks}
                </p>
              </div>

              <div>
                <h3 className="font-ui text-xs font-bold uppercase tracking-wider text-navy mb-2">
                  Neighbourhoods &amp; Corridors Served:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {config.showroomInfo.areasServed.map((area) => (
                    <span
                      key={area}
                      className="font-ui text-xs bg-offwhite text-navy px-3 py-1 rounded-full border border-navy/10"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={showroom.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy hover:bg-gold text-white font-ui text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-full transition-colors"
                >
                  <ExternalLink size={14} />
                  Get Directions on Google Maps
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 w-full aspect-video rounded-2xl overflow-hidden border border-navy/10">
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

      {/* 2. Product Categories Section */}
      <section className="py-16 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="mb-10">
          <span className="font-ui text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-2">
            What We Stock &amp; Supply
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy">
            Product Categories Available
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.productCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl p-7 border border-navy/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading font-semibold text-xl text-navy mb-2.5">
                  {cat.title}
                </h3>
                <p className="font-ui text-sm text-charcoal/80 leading-relaxed mb-5">
                  {cat.description}
                </p>
              </div>
              <Link
                href={cat.href}
                className="font-ui text-xs font-semibold text-gold hover:text-navy uppercase tracking-wider inline-flex items-center gap-1.5"
              >
                Browse Category in Catalogue <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured In-Stock Products Grid + WhatsApp CTA */}
      <section className="py-12 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-ui text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-2">
              Direct Showroom Inventory
            </span>
            <h2 className="font-heading font-bold text-3xl text-navy">
              Popular Stocked Products
            </h2>
          </div>
          <Link
            href={
              config.productFilterCategory &&
              config.productFilterCategory !== "all"
                ? `/products?category=${config.productFilterCategory}`
                : "/products"
            }
            className="font-ui text-sm font-semibold text-navy hover:text-gold inline-flex items-center gap-1.5"
          >
            View All in Catalogue <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {matchingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <SectionWhatsAppCTA
          title={`Need a Quote for ${config.h1}?`}
          subtitle="Send your list or BOQ to our Lagos sales desk on WhatsApp for immediate retail or bulk contractor pricing."
          whatsappMessage={config.whatsappCtaMessage}
          contextLabel={`landing_${config.slug}_products_cta`}
        />
      </section>

      {/* 4. Authorised Brands Supplied */}
      <section className="py-16 px-6 lg:px-12 bg-white border-y border-navy/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-ui text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-2">
                100% Genuine Manufacturer Supply
              </span>
              <h2 className="font-heading font-bold text-3xl text-navy">
                Authorised Brands We Supply
              </h2>
            </div>
            <Link
              href="/brands"
              className="font-ui text-xs font-semibold uppercase tracking-wider text-navy hover:text-gold"
            >
              See All 15 Partner Brands →
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {config.brandsSupplied.map((brandName) => (
              <Link
                key={brandName}
                href={`/products?brand=${encodeURIComponent(brandName)}`}
                className="px-5 py-3 rounded-xl bg-offwhite hover:bg-navy text-navy hover:text-white border border-navy/10 font-ui text-sm font-semibold transition-colors"
              >
                {brandName}
              </Link>
            ))}
          </div>
          {matchingBrands.length > 0 && (
            <p className="font-ui text-xs text-charcoal/65 mt-4">
              Click any brand above to filter stocked {config.h1.toLowerCase()} items in our online catalogue.
            </p>
          )}
        </div>
      </section>

      {/* 5. Delivery & Installation Information */}
      <section className="py-16 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="bg-navy text-white rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl">
            <span className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-gold block mb-2">
              Logistics &amp; Technical Support
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              {config.deliveryAndInstallation.heading}
            </h2>
            <p className="font-ui text-offwhite/85 text-sm md:text-base leading-relaxed mb-6">
              {config.deliveryAndInstallation.summary}
            </p>
            <ul className="space-y-3 mb-8">
              {config.deliveryAndInstallation.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-ui text-sm text-offwhite/90"
                >
                  <CheckCircle2
                    size={18}
                    className="text-gold shrink-0 mt-0.5"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-ui font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors"
              >
                <MessageCircle size={16} />
                Confirm Delivery &amp; Installation on WhatsApp
              </a>
              <Link
                href="/delivery-installation"
                className="inline-flex items-center gap-2 border border-white/25 hover:border-gold text-white hover:text-gold font-ui font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors"
              >
                Learn More About Our Installation Service →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Barryham Section */}
      <WhyBarryham />

      {/* 7. FAQ Section with FAQPage Schema */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        <div className="text-center mb-10">
          <span className="font-ui text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-2">
            Common Questions
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {config.faqs.map((faq, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="group bg-white rounded-2xl border border-navy/10 shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none p-6 font-heading font-semibold text-lg text-navy hover:text-gold transition-colors gap-4">
                <span>{faq.question}</span>
                <span className="shrink-0 text-gold text-2xl font-light transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t border-navy/5">
                <p className="font-ui text-sm text-charcoal/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* 8. Internal Links to Related Categories & Blog Guides */}
      <section className="py-12 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Related Blog Buying Guides */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-navy/10 shadow-sm">
            <h2 className="font-heading font-bold text-2xl text-navy mb-6 flex items-center gap-2.5">
              <BookOpen size={20} className="text-gold" />
              Related Buying &amp; Technical Guides
            </h2>
            <div className="space-y-4">
              {config.relatedBlogGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/blog/${guide.slug}`}
                  className="group block p-4 rounded-2xl bg-offwhite/70 hover:bg-offwhite border border-navy/5 hover:border-gold transition-all"
                >
                  <h3 className="font-heading font-semibold text-lg text-navy group-hover:text-gold transition-colors mb-1">
                    {guide.title}
                  </h3>
                  <p className="font-ui text-xs text-charcoal/75">
                    {guide.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Service & Location Pages */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-navy/10 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-4">
                Explore Related Pages
              </h2>
              <p className="font-ui text-xs text-charcoal/70 mb-6">
                Browse our other specialist supply categories and Lagos showrooms:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {config.relatedLandingLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2.5 rounded-xl bg-offwhite hover:bg-navy text-navy hover:text-white font-ui text-xs font-semibold border border-navy/10 transition-colors"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-navy/10">
              <Link
                href="/projects"
                className="font-ui text-xs font-semibold text-gold hover:underline inline-flex items-center gap-1"
              >
                See 30+ Nigerian Projects Supplied by Barryham →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
