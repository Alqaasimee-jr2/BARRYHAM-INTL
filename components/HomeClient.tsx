"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircle, FileText, MapPin } from "lucide-react";
import { STICKY_WHATSAPP_LINK } from "@/lib/constants";
import { products } from "@/data/products";
import { BrandLogos } from "@/components/BrandLogos";
import { SectionWhatsAppCTA } from "@/components/SectionWhatsAppCTA";
import { WhyBarryham } from "@/components/WhyBarryham";
import { ReviewsSection } from "@/components/ReviewsSection";

const fadeUpStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUpChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
  },
};

const hairline: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.3 },
  },
};

const FEATURED_PRODUCTS = [
  products[0],
  products[1],
  products[2],
  products[3],
  products[14],
].filter(Boolean);

const INSTITUTIONS = [
  { name: "Central Bank of Nigeria", size: "text-2xl md:text-3xl", opacity: "opacity-90" },
  { name: "Nigeria Revenue Service", size: "text-xl md:text-2xl", opacity: "opacity-70" },
  { name: "Polaris Bank", size: "text-3xl md:text-4xl", opacity: "opacity-80" },
  { name: "LSDPC", size: "text-4xl md:text-5xl", opacity: "opacity-60" },
  { name: "CCECC", size: "text-2xl md:text-3xl", opacity: "opacity-75" },
  { name: "CIPM", size: "text-3xl md:text-4xl", opacity: "opacity-85" },
  { name: "West African College of Surgeons", size: "text-xl md:text-2xl", opacity: "opacity-65" },
];

const SERVICES = [
  {
    label: "01",
    title: "Sanitary Ware & Architectural Bathrooms",
    desc: "Wall-hung and close-coupled WCs, concealed cistern frames, washbasins, and thermostatic brassware from European leaders.",
    href: "/sanitary-ware-lagos",
  },
  {
    label: "02",
    title: "Electrical Cables & Power Distribution",
    desc: "SON-certified 99.9% pure copper and armoured cables from Coleman CTIL, water heaters, and commercial distribution boards.",
    href: "/electrical-fittings-lagos",
  },
  {
    label: "03",
    title: "Plumbing Systems & Project Installation",
    desc: "High-pressure PPR piping, uPVC drainage lines, and precision mechanical installation across residential and commercial sites.",
    href: "/plumbing-fittings-lagos",
  },
];

const SEO_HUB_CARDS = [
  {
    title: "Sanitary Ware in Lagos",
    desc: "European WCs, vanity basins, concealed cisterns, and luxury brassware.",
    href: "/sanitary-ware-lagos",
  },
  {
    title: "Plumbing Fittings in Lagos",
    desc: "Heat-fusion PPR pipes, drainage systems, angle valves, and mixers.",
    href: "/plumbing-fittings-lagos",
  },
  {
    title: "Electrical Cables & Fittings",
    desc: "SON-certified Coleman CTIL pure copper and armoured cables.",
    href: "/electrical-fittings-lagos",
  },
  {
    title: "Bathroom Fittings in Nigeria",
    desc: "Complete bathroom fit-out packages for residential estates and hotels.",
    href: "/bathroom-fittings-nigeria",
  },
  {
    title: "Ariston Water Heaters",
    desc: "Genuine 15L to 100L electric storage and instant water heaters.",
    href: "/water-heaters-nigeria",
  },
  {
    title: "Bulk Supply for Contractors",
    desc: "Dedicated trade pricing, BOQ fulfilment, and staged deliveries.",
    href: "/bulk-supply-contractors",
  },
  {
    title: "Delivery & Installation",
    desc: "Fast Lagos dispatch and certified first- and second-fix installation teams.",
    href: "/delivery-installation",
  },
  {
    title: "Visit Our Showrooms",
    desc: "Direct product inspection at our Dopemu-Agege & Alimosho showrooms.",
    href: "/dopemu-showroom",
  },
];

function formatPrice(n: number) {
  return `₦${n.toLocaleString("en-NG")}`;
}

export function HomeClient() {
  return (
    <main className="flex min-h-screen flex-col bg-offwhite overflow-x-hidden">
      {/* ── HERO ── */}
      <header className="relative w-full min-h-[90vh] flex flex-col lg:flex-row pt-28 pb-16 overflow-hidden bg-offwhite">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="w-full lg:w-[50%] flex flex-col justify-center px-6 lg:pl-20 lg:pr-12 py-10 lg:py-16 z-10"
        >
          <p className="font-ui text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-4">
            Barryham International Limited • Lagos
          </p>

          <h1 className="font-heading font-semibold text-navy leading-[1.15] mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] break-words">
            Premium Sanitary Ware, Plumbing &amp; Electrical Fittings in{" "}
            <span className="text-gold">Lagos.</span>
          </h1>

          <p className="font-ui font-light text-charcoal/80 text-sm md:text-base leading-relaxed max-w-xl mb-8">
            Direct distributor and certified installer for Grohe, Ideal Standard, Villeroy &amp; Boch, Roca, Armitage Shanks, Ariston, and Coleman CTIL. Genuine products, competitive trade pricing, and reliable project delivery.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy hover:bg-gold text-white font-ui font-semibold text-xs uppercase tracking-wider rounded-full transition-colors duration-300 min-h-[46px] shadow-sm"
            >
              Browse Catalogue
              <ArrowRight size={14} />
            </Link>

            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-navy/25 hover:border-gold text-navy hover:text-gold font-ui font-semibold text-xs uppercase tracking-wider rounded-full transition-colors duration-300 min-h-[46px]"
            >
              <FileText size={15} />
              Request a Quote
            </Link>

            <a
              href={STICKY_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-navy hover:text-gold font-ui font-semibold text-xs uppercase tracking-wider transition-colors duration-300 min-h-[46px]"
            >
              <MessageCircle size={15} className="text-gold" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="w-full lg:w-[50%] h-[45vh] lg:h-auto relative px-6 lg:px-8"
        >
          <div className="w-full h-full relative overflow-hidden rounded-3xl shadow-xl border border-navy/10 min-h-[360px]">
            <Image
              src="/hero-main.webp"
              alt="Luxury bathroom sanitary ware and brushed gold fittings supplied by Barryham International Limited"
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3 text-white">
              <div className="bg-navy/80 backdrop-blur-md rounded-xl px-4 py-2.5 border border-white/10">
                <p className="font-ui text-[9px] uppercase tracking-widest text-gold font-semibold">Established</p>
                <p className="font-heading text-sm md:text-base font-semibold">2018 (8+ Years)</p>
              </div>
              <div className="bg-navy/80 backdrop-blur-md rounded-xl px-4 py-2.5 border border-white/10">
                <p className="font-ui text-[9px] uppercase tracking-widest text-gold font-semibold">Completed Projects</p>
                <p className="font-heading text-sm md:text-base font-semibold">30+ Across Nigeria</p>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* ── INSTITUTIONAL TRUST ── */}
      <section className="bg-navy py-16 lg:py-20 px-6 lg:px-20 overflow-hidden text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpStagger}
          className="max-w-7xl mx-auto"
        >
          <motion.p
            variants={fadeUpChild}
            className="font-ui text-[10px] font-semibold tracking-[0.25em] uppercase text-gold mb-6"
          >
            Trusted by Nigeria&apos;s Leading Institutions &amp; Contractors
          </motion.p>

          <div className="flex flex-wrap gap-x-8 gap-y-3 items-baseline">
            {INSTITUTIONS.map((inst, i) => (
              <motion.span
                key={inst.name}
                variants={fadeUpChild}
                custom={i}
                className={`font-heading text-white ${inst.size} ${inst.opacity} leading-none`}
              >
                {inst.name}
              </motion.span>
            ))}
          </div>

          <motion.div variants={hairline} className="mt-8 h-px bg-gold/30 max-w-xs" />
          <motion.p
            variants={fadeUpChild}
            className="font-ui text-white/60 text-xs md:text-sm font-light mt-4 max-w-lg leading-relaxed"
          >
            From the LASU Senate Building to major financial institutions and residential developments across Lagos, Rivers, Delta, and Abuja.
          </motion.p>
        </motion.div>
      </section>

      {/* ── BRAND LOGOS ── */}
      <BrandLogos />

      {/* ── CATEGORY DIRECTORY ── */}
      <section className="py-20 px-6 lg:px-20 bg-white border-y border-navy/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-gold mb-2">
                Procurement Categories
              </p>
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy">
                Specialist Supply &amp; Installation Hubs
              </h2>
            </div>
            <Link
              href="/products"
              className="font-ui text-xs font-semibold uppercase tracking-wider text-navy hover:text-gold transition-colors inline-flex items-center gap-1"
            >
              All Products <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {SEO_HUB_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-offwhite hover:bg-white rounded-xl p-5 border border-navy/5 hover:border-gold/40 shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading font-semibold text-base md:text-lg text-navy group-hover:text-gold transition-colors mb-1.5 break-words">
                    {card.title}
                  </h3>
                  <p className="font-ui text-xs text-charcoal/70 leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>
                <span className="font-ui text-[11px] font-semibold text-gold inline-flex items-center gap-1 uppercase tracking-wider">
                  View Range <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO — Services ── */}
      <section className="py-20 lg:py-28 px-6 lg:px-20 bg-offwhite">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-gold mb-3">
              Capabilities
            </p>
            <h2 className="font-heading text-navy text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-5">
              Supply, Trade Logistics &amp; Certified Installation
            </h2>
            <p className="font-ui text-charcoal/75 text-sm font-light leading-relaxed mb-8">
              We partner with architects, developers, MEP contractors, and homeowners to specify and supply genuine materials engineered for long-term reliability.
            </p>

            <div className="space-y-4 mb-8">
              {SERVICES.map((svc) => (
                <Link
                  key={svc.label}
                  href={svc.href}
                  className="group flex gap-4 items-start p-4 rounded-xl bg-white hover:border-gold/40 shadow-sm border border-navy/5 transition-all"
                >
                  <span className="font-ui text-[11px] font-semibold tracking-widest text-gold shrink-0 mt-0.5">
                    {svc.label}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-navy text-sm md:text-base mb-1 group-hover:text-gold transition-colors">
                      {svc.title}
                    </h3>
                    <p className="font-ui text-charcoal/70 text-xs leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-ui text-xs font-semibold uppercase tracking-wider text-navy hover:text-gold transition-colors"
            >
              Explore All Services <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right: Clean Bento Details */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="col-span-2 relative h-56 md:h-64 rounded-2xl overflow-hidden shadow-sm border border-navy/10">
              <Image
                src="/bento-foyer.webp"
                alt="Architectural interior finishing and tiling supplied by Barryham"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="relative h-44 md:h-52 rounded-2xl overflow-hidden shadow-sm border border-navy/10">
              <Image
                src="/bento-detail.webp"
                alt="Brushed gold luxury faucet detail"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="relative h-44 md:h-52 bg-navy rounded-2xl p-6 flex flex-col justify-end text-white border border-navy/20">
              <MapPin size={18} className="text-gold mb-2" />
              <h3 className="font-heading font-semibold text-base md:text-lg mb-1">
                2 Lagos Showrooms
              </h3>
              <p className="font-ui text-[11px] text-offwhite/70">
                Dopemu-Agege &amp; Alimosho (LASU-Isheri Rd)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-20 bg-white" id="products">
        <div className="px-6 lg:px-20 mb-8 flex flex-col sm:flex-row justify-between items-end gap-4 max-w-7xl mx-auto">
          <div>
            <p className="font-ui text-[10px] font-semibold tracking-[0.25em] uppercase text-gold mb-2">
              Stock Catalogue
            </p>
            <h2 className="font-heading text-navy text-2xl md:text-3xl font-semibold">
              Selected In-Stock Products
            </h2>
          </div>
          <Link
            href="/products"
            className="font-ui text-xs font-semibold uppercase tracking-wider text-navy hover:text-gold transition-colors inline-flex items-center gap-1.5"
          >
            View Full Catalogue <ArrowRight size={14} />
          </Link>
        </div>

        <div className="px-6 lg:px-20 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide max-w-[100vw]">
          {FEATURED_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/products/${encodeURIComponent(product.id)}`}
              className="shrink-0 w-[72vw] sm:w-[42vw] lg:w-[24vw] xl:w-[20vw] snap-start group"
            >
              <div className="relative w-full aspect-[4/5] bg-offwhite rounded-xl overflow-hidden mb-3.5 shadow-sm border border-navy/5 group-hover:border-gold/30 transition-all">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <p className="font-ui text-[10px] font-semibold uppercase text-navy/40">
                      {product.brand}
                    </p>
                  </div>
                )}
                <div className="absolute top-3 right-3 z-10">
                  <span className="font-ui text-[9px] font-semibold uppercase tracking-wider bg-white/90 text-navy px-2 py-0.5 rounded-full border border-navy/10">
                    {product.brand}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start gap-2">
                <div>
                  <h3 className="font-heading text-navy text-sm md:text-base font-semibold group-hover:text-gold transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="font-ui text-gold text-xs font-semibold mt-0.5">
                    {formatPrice(product.price)}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full border border-navy/10 flex items-center justify-center text-navy shrink-0 group-hover:bg-navy group-hover:text-white transition-colors">
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHY BARRYHAM ── */}
      <WhyBarryham />

      {/* ── REVIEWS ── */}
      <ReviewsSection />

      {/* ── STRATEGIC SINGLE CLOSING CTA ── */}
      <section className="py-16 px-6 lg:px-20 max-w-5xl mx-auto w-full">
        <SectionWhatsAppCTA
          title="Looking for Specific Fittings, Trade Quantities, or a Quote?"
          subtitle="Send your material schedule or inquiry to our sales team for verified stock availability and prompt pricing."
          contextLabel="home_closing_cta"
        />
      </section>
    </main>
  );
}
