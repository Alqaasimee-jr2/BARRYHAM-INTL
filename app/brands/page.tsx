import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  MessageCircle,
  FileText,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { PARTNER_BRANDS } from "@/data/brands";
import { TrustBadges } from "@/components/TrustBadges";
import { SectionWhatsAppCTA } from "@/components/SectionWhatsAppCTA";
import { WhyBarryham } from "@/components/WhyBarryham";
import { STICKY_WHATSAPP_LINK } from "@/lib/constants";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Authorised Sanitary Ware, Plumbing & Electrical Brands in Nigeria | Barryham Int’l Ltd",
  description:
    "Official distributor & direct representative in Lagos & Nigeria for Grohe, Ideal Standard, Villeroy & Boch, Roca, Armitage Shanks, Geberit, Vado, Hansgrohe, Ariston Water Heaters & Coleman CTIL.",
  alternates: {
    canonical: "https://barryham.site/brands",
  },
};

const BRAND_DETAILS: Record<
  string,
  {
    origin: string;
    categories: string;
    filterBrand?: string;
    landingHref: string;
  }
> = {
  "Ideal Standard": {
    origin: "European Sanitary Engineering",
    categories: "Wall-hung & close-coupled WCs, washbasins, basin/bath mixers & concealed frames",
    filterBrand: "Ideal Standard",
    landingHref: "/sanitary-ware-lagos",
  },
  "Armitage Shanks": {
    origin: "UK Commercial & Healthcare Sanitaryware",
    categories: "Hospital, school, and institutional WCs, urinals, and sensor fittings",
    landingHref: "/bulk-supply-contractors",
  },
  Geberit: {
    origin: "Swiss Concealed Flushing & Piping Technology",
    categories: "Concealed cistern frames, actuator flush plates, and drainage systems",
    landingHref: "/plumbing-fittings-lagos",
  },
  GROHE: {
    origin: "German Engineered Brassware & Water Systems",
    categories: "Basin/sink mixers, Tempesta shower systems, Uniset concealed tanks & accessories",
    filterBrand: "Grohe",
    landingHref: "/plumbing-fittings-lagos",
  },
  Kohler: {
    origin: "Global Luxury Kitchen & Bath",
    categories: "Designer sanitary ware, freestanding bathtubs, and architectural faucets",
    landingHref: "/bathroom-fittings-nigeria",
  },
  Reigner: {
    origin: "Architectural Bathrooms & Vitrified Tiles",
    categories: "Floor & wall tiles, modern sanitary suites, and wet-room fittings",
    landingHref: "/bathroom-fittings-nigeria",
  },
  Roca: {
    origin: "Spanish Sanitary Ware & Bathroom Solutions",
    categories: "Vitreous china toilets, vanity basins, bathtubs, and brassware",
    landingHref: "/sanitary-ware-lagos",
  },
  VADO: {
    origin: "British Luxury Brassware",
    categories: "Concealed thermostatic shower valves, brushed gold & chrome basin mixers",
    landingHref: "/bathroom-fittings-nigeria",
  },
  hansgrohe: {
    origin: "German Shower & Tap Innovation",
    categories: "Raindance overhead showers, thermostatic mixers, and EcoSmart taps",
    landingHref: "/plumbing-fittings-lagos",
  },
  "Ariston Water Heater": {
    origin: "Italian Water Heating Systems",
    categories: "15L, 30L, 50L, 80L, 100L electric storage & instant water heaters",
    filterBrand: "Ariston",
    landingHref: "/water-heaters-nigeria",
  },
  "Coleman CTIL": {
    origin: "SON-Certified Nigerian Copper Wires & Cables",
    categories: "1.5mm²–16mm² single-core, twin & earth, flexible, and 25mm² armoured cables",
    filterBrand: "Coleman CTIL",
    landingHref: "/electrical-fittings-lagos",
  },
  "Villeroy & Boch": {
    origin: "German Ceramic Mastery Since 1748",
    categories: "Avento, Subway 3.0, Venticello, Architectura & O.novo WCs, basins & mixers",
    filterBrand: "Villeroy & Boch",
    landingHref: "/sanitary-ware-lagos",
  },
  Varmora: {
    origin: "Vitrified Tiles & Sanitaryware",
    categories: "One-piece WCs, wall-hung toilets, tabletop basins, urinals & division plates",
    filterBrand: "Varmora",
    landingHref: "/sanitary-ware-lagos",
  },
  Twyford: {
    origin: "British Bathroom Suites",
    categories: "Water-efficient commercial and residential toilets and washbasins",
    landingHref: "/sanitary-ware-lagos",
  },
  SANIT: {
    origin: "German Concealed Cisterns & Flushing Systems",
    categories: "In-wall WC tanks, push flush plates, and universal filling valves",
    filterBrand: "Sanit",
    landingHref: "/plumbing-fittings-lagos",
  },
};

const BRAND_FAQS = [
  {
    question: "Are all brands supplied by Barryham International Limited 100% genuine?",
    answer:
      "Yes. We are direct manufacturer representatives and authorised distributors. Every product we sell comes in original factory packaging with serialised model codes and full manufacturer warranty.",
  },
  {
    question: "Can I mix brands across a single project quote (e.g., Villeroy & Boch WCs with Grohe mixers)?",
    answer:
      "Absolutely. Our technical sales team ensures full mechanical and aesthetic compatibility when combining concealed tanks (such as Grohe or Sanit) with wall-hung pans (such as Ideal Standard, Villeroy & Boch, or Varmora).",
  },
  {
    question: "Do you stock spare parts for the brands you distribute?",
    answer:
      "Yes. Unlike grey-market sellers, we stock original filling valves, flush plates, concealed mechanisms, angle valves, and cartridges at our Dopemu-Agege and Alimosho showrooms.",
  },
];

export default function BrandsPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Authorised Brands", url: "/brands" },
  ]);

  const faqJsonLd = getFAQSchema(BRAND_FAQS);

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

      {/* Hero */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-gold block mb-3">
            Direct Manufacturer Representatives • Anti-Counterfeit Guarantee
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Authorised Sanitary Ware, Plumbing &amp; Electrical Brands in Nigeria
          </h1>
          <p className="font-ui text-base md:text-lg text-offwhite/90 leading-relaxed max-w-2xl mx-auto mb-8">
            For homeowners, architects, MEP engineers, and contractors who refuse counterfeit building materials: Barryham International Limited supplies 15 globally certified manufacturers directly from our Dopemu and Alimosho showrooms.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={STICKY_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-ui font-semibold text-sm px-7 py-4 rounded-full shadow-md transition-colors min-h-[50px]"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp for Brand Price List
            </a>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-ui font-semibold text-sm px-7 py-4 rounded-full shadow-md transition-colors min-h-[50px]"
            >
              <FileText size={18} />
              Request a Brand Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 -mt-6 z-10">
        <TrustBadges />
      </section>

      {/* Brand Directory Grid */}
      <section className="py-16 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="mb-10">
          <span className="font-ui text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-2">
            Official Distribution Portfolio
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy">
            15 Global &amp; Certified Brands We Supply
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNER_BRANDS.map((brand) => {
            const meta = BRAND_DETAILS[brand.name] || {
              origin: brand.tagline,
              categories: "Sanitary ware, plumbing fittings & building accessories",
              landingHref: "/products",
            };
            const catalogueHref = meta.filterBrand
              ? `/products?brand=${encodeURIComponent(meta.filterBrand)}`
              : meta.landingHref;

            return (
              <div
                key={brand.name}
                className="bg-white rounded-2xl p-7 border border-navy/10 hover:border-gold shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-5 mb-5 border-b border-navy/10">
                    <div className="relative w-36 h-12">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} authorised distributor in Lagos Nigeria — Barryham Int'l Ltd`}
                        fill
                        className="object-contain object-left"
                        unoptimized
                      />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-ui font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full shrink-0">
                      <ShieldCheck size={12} />
                      Authorised
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-navy mb-1">
                    {brand.name}
                  </h3>
                  <p className="font-ui text-xs font-semibold text-gold uppercase tracking-wider mb-3">
                    {meta.origin}
                  </p>
                  <p className="font-ui text-sm text-charcoal/80 leading-relaxed mb-6">
                    {meta.categories}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3 pt-4 border-t border-navy/5">
                  <Link
                    href={catalogueHref}
                    className="font-ui text-xs font-semibold text-navy hover:text-gold uppercase tracking-wider inline-flex items-center gap-1"
                  >
                    Browse {brand.name} <ArrowRight size={13} />
                  </Link>
                  <Link
                    href={meta.landingHref}
                    className="font-ui text-[11px] text-charcoal/60 hover:text-navy underline"
                  >
                    Category Guide
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Delivery & Authenticity Guarantee */}
      <section className="py-12 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-navy/10 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="font-ui text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-2">
              Zero Counterfeit Policy
            </span>
            <h2 className="font-heading font-bold text-3xl text-navy mb-4">
              Why Sourcing From an Authorised Distributor Protects Your Project
            </h2>
            <p className="font-ui text-sm md:text-base text-charcoal/80 leading-relaxed mb-6">
              Open markets in Lagos are flooded with imitation taps, fake cisterns, and sub-gauge copper cables that fail pressure tests or peel within months. Barryham International Limited sources directly from certified manufacturer supply chains.
            </p>
            <ul className="space-y-2.5 font-ui text-sm text-charcoal/85">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={17} className="text-gold shrink-0" />
                Verified manufacturer SKU codes and factory-sealed packaging
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={17} className="text-gold shrink-0" />
                24–48hr delivery across Lagos and crated nationwide waybill
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 size={17} className="text-gold shrink-0" />
                Professional installation by technicians trained on European systems
              </li>
            </ul>
          </div>

          <div>
            <SectionWhatsAppCTA
              title="Need a Specific Brand Model or Bulk Trade Price List?"
              subtitle="Send the brand and model code on WhatsApp for instant stock confirmation."
              contextLabel="brands_page_cta"
              showTrustBadges={false}
            />
          </div>
        </div>
      </section>

      <WhyBarryham />

      {/* FAQ Section */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        <h2 className="font-heading font-bold text-3xl text-navy text-center mb-10">
          Brand &amp; Distribution FAQs
        </h2>
        <div className="space-y-4">
          {BRAND_FAQS.map((faq, i) => (
            <details
              key={i}
              open={i === 0}
              className="group bg-white rounded-2xl border border-navy/10 p-6 shadow-sm"
            >
              <summary className="font-heading font-semibold text-lg text-navy cursor-pointer list-none flex items-center justify-between gap-4">
                <span>{faq.question}</span>
                <span className="text-gold text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="font-ui text-sm text-charcoal/80 leading-relaxed mt-4 pt-4 border-t border-navy/5">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog/roca-vs-local-brands"
            className="font-ui text-sm font-semibold text-navy hover:text-gold underline"
          >
            Read our guide: European Brands vs Local Alternatives — Is the Premium Worth It? →
          </Link>
        </div>
      </section>
    </main>
  );
}
