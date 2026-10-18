"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircle, FileText, MapPin } from "lucide-react";
import { STICKY_WHATSAPP_LINK } from "@/lib/constants";
import { products } from "@/data/products";
import { BrandLogos } from "@/components/BrandLogos";
import { TrustBadges } from "@/components/TrustBadges";
import { SectionWhatsAppCTA } from "@/components/SectionWhatsAppCTA";
import { WhyBarryham } from "@/components/WhyBarryham";
import { ReviewsSection } from "@/components/ReviewsSection";

const fadeUpStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUpChild: Variants = {
  hidden: { opacity: 0, y: 24 },
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
  { name: "Central Bank of Nigeria", size: "text-3xl md:text-4xl", opacity: "opacity-90" },
  { name: "Nigeria Revenue Service", size: "text-2xl md:text-3xl", opacity: "opacity-70" },
  { name: "Polaris Bank", size: "text-4xl md:text-5xl", opacity: "opacity-80" },
  { name: "LSDPC", size: "text-5xl md:text-6xl", opacity: "opacity-60" },
  { name: "CCECC", size: "text-3xl md:text-4xl", opacity: "opacity-75" },
  { name: "CIPM", size: "text-4xl md:text-5xl", opacity: "opacity-85" },
  { name: "West African College of Surgeons", size: "text-2xl md:text-3xl", opacity: "opacity-65" },
];

const SERVICES = [
  {
    label: "01",
    title: "Sanitary Ware & Bathroom Fittings in Lagos",
    desc: "Genuine European WCs, basins, bathtubs, concealed cisterns, shower systems, and luxury brassware from Grohe, Ideal Standard, Villeroy & Boch, and Roca.",
    href: "/sanitary-ware-lagos",
  },
  {
    label: "02",
    title: "Electrical Cables, Water Heaters & Lighting",
    desc: "SON-certified Coleman CTIL copper & armoured cables, Ariston water heaters, switches, sockets, and architectural lighting for residential & commercial builds.",
    href: "/electrical-fittings-lagos",
  },
  {
    label: "03",
    title: "Plumbing Fittings, Delivery & Installation",
    desc: "End-to-end sourcing and certified on-site installation of pipes, valves, traps, concealed frames, and drainage systems across Lagos and Nigeria.",
    href: "/plumbing-fittings-lagos",
  },
];

const SEO_HUB_CARDS = [
  {
    title: "Sanitary Ware in Lagos",
    desc: "Wall-hung & close-coupled WCs, washbasins, urinals, and bidets.",
    href: "/sanitary-ware-lagos",
  },
  {
    title: "Plumbing Fittings Lagos",
    desc: "Concealed tanks, flush plates, angle valves, traps & mixers.",
    href: "/plumbing-fittings-lagos",
  },
  {
    title: "Electrical Fittings Lagos",
    desc: "Coleman CTIL single-core, armoured & flex cables + accessories.",
    href: "/electrical-fittings-lagos",
  },
  {
    title: "Bathroom Fittings Nigeria",
    desc: "Complete luxury & commercial bathroom packages nationwide.",
    href: "/bathroom-fittings-nigeria",
  },
  {
    title: "Water Heaters Nigeria",
    desc: "Ariston 10L–100L storage & instant water heaters in stock.",
    href: "/water-heaters-nigeria",
  },
  {
    title: "Bulk Contractor Supply",
    desc: "Trade discounts, BOQ fulfilment & staged site deliveries.",
    href: "/bulk-supply-contractors",
  },
  {
    title: "Delivery & Installation",
    desc: "24–48hr Lagos dispatch & professional first/second-fix teams.",
    href: "/delivery-installation",
  },
  {
    title: "Visit Our Showrooms",
    desc: "Inspect stock in Dopemu-Agege or Alimosho (LASU-Isheri Rd).",
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
      <header className="relative w-full min-h-screen flex flex-col lg:flex-row pt-28 overflow-hidden bg-offwhite">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="w-full lg:w-[50%] flex flex-col justify-center px-6 lg:pl-20 lg:pr-12 py-12 lg:py-20 z-10"
        >
          <p className="font-ui text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-5">
            Barryham International Limited • Dopemu &amp; Alimosho, Lagos
          </p>

          <h1 className="font-heading font-semibold text-navy leading-[1.12] mb-6 text-4xl md:text-5xl lg:text-[52px] xl:text-[58px]">
            Premium Sanitary Ware, Plumbing &amp; Electrical Fittings in{" "}
            <span className="text-gold">Lagos.</span>
          </h1>

          <p className="font-ui font-light text-charcoal/85 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            Direct distributor and certified installer for Grohe, Ideal Standard, Villeroy &amp; Boch, Roca, Armitage Shanks, Ariston Water Heaters, and Coleman CTIL Cables. Genuine products, trade pricing, and fast site delivery across Lagos and Nigeria.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 mb-8">
            <a
              href={STICKY_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-ui font-semibold text-sm tracking-wide rounded-full shadow-md transition-colors duration-300 min-h-[52px]"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-navy hover:bg-gold text-white font-ui font-semibold text-sm tracking-wide rounded-full transition-colors duration-300 min-h-[52px]"
            >
              <FileText size={17} />
              Request a Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-navy/30 text-navy hover:border-gold hover:text-gold font-ui font-medium text-sm tracking-wide rounded-full transition-colors duration-300 min-h-[52px]"
            >
              Browse Catalogue
              <ArrowRight size={16} />
            </Link>
          </div>

          <TrustBadges compact />
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="w-full lg:w-[50%] h-[52vh] lg:h-auto relative"
        >
          <div className="absolute inset-0 m-4 lg:m-8 lg:ml-0 overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/hero-main.webp"
              alt="Luxury bathroom sanitary ware and brushed gold fittings supplied and installed by Barryham International Limited in Lagos"
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end gap-2 justify-between">
              <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-white/80 mb-1">
                  Years in Business
                </p>
                <p className="font-heading text-white text-lg font-semibold">8+</p>
              </div>
              <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 hidden sm:block">
                <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-white/80 mb-1">
                  Lagos Showrooms
                </p>
                <p className="font-heading text-white text-lg font-semibold">
                  Dopemu &amp; Alimosho
                </p>
              </div>
              <div className="bg-gold/90 backdrop-blur-md rounded-xl px-4 py-3">
                <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-white/90 mb-1">
                  Projects Completed
                </p>
                <p className="font-heading text-white text-lg font-semibold">30+</p>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* ── INSTITUTIONAL TRUST — Statement Wall ── */}
      <section className="bg-navy py-20 lg:py-28 px-6 lg:px-20 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpStagger}
          className="max-w-7xl mx-auto"
        >
          <motion.p
            variants={fadeUpChild}
            className="font-ui text-[10px] font-semibold tracking-[0.3em] uppercase text-gold mb-6"
          >
            Trusted by Nigeria&apos;s Leading Institutions &amp; Developers
          </motion.p>

          <div className="flex flex-wrap gap-x-10 gap-y-4 items-baseline">
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

          <motion.div variants={hairline} className="mt-12 h-px bg-gold/30 max-w-xs" />
          <motion.p
            variants={fadeUpChild}
            className="font-ui text-white/60 text-sm font-light mt-6 max-w-xl leading-relaxed"
          >
            From the LASU Senate Building and Central Bank refurbishments to luxury residential estates in Ikoyi, Ikeja GRA, and Lekki—we deliver certified materials on schedule.
          </motion.p>
        </motion.div>
      </section>

      {/* ── BRAND CLUSTER — Official Partner Logos ── */}
      <BrandLogos />

      {/* ── DEDICATED CATEGORY & LOCATION HUB ── */}
      <section className="py-20 px-6 lg:px-20 bg-offwhite border-b border-navy/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-ui text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-2">
                Shop &amp; Source by Category
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy">
                Complete Building Finishing Solutions in Lagos &amp; Nigeria
              </h2>
            </div>
            <Link
              href="/brands"
              className="font-ui text-xs font-semibold uppercase tracking-wider text-navy hover:text-gold transition-colors"
            >
              View All 15 Partner Brands →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SEO_HUB_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-white rounded-2xl p-6 border border-navy/10 hover:border-gold shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading font-semibold text-xl text-navy group-hover:text-gold transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="font-ui text-xs text-charcoal/75 leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>
                <span className="font-ui text-xs font-semibold text-gold inline-flex items-center gap-1">
                  Explore <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO — Services Section ── */}
      <section className="py-24 lg:py-32 px-6 lg:px-20 bg-offwhite relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpStagger}
            className="lg:col-span-5"
          >
            <motion.div variants={hairline} className="w-12 h-px bg-gold mb-8" />
            <motion.h2
              variants={fadeUpChild}
              className="font-heading text-navy text-3xl md:text-4xl font-semibold leading-[1.15] mb-6"
            >
              Supply, Trade Distribution &amp; Certified Installation
            </motion.h2>
            <motion.p
              variants={fadeUpChild}
              className="font-ui text-charcoal/75 text-base font-light leading-relaxed mb-10"
            >
              We partner with homeowners, architects, MEP engineers, and civil contractors to supply and install genuine sanitary ware, plumbing fittings, water heaters, and electrical cables that stand the test of Nigerian water and power conditions.
            </motion.p>

            <motion.div variants={fadeUpStagger} className="space-y-5 mb-10">
              {SERVICES.map((svc) => (
                <motion.div key={svc.label} variants={fadeUpChild}>
                  <Link
                    href={svc.href}
                    className="group flex gap-5 items-start p-4 rounded-xl bg-white/70 hover:bg-white shadow-sm transition-all duration-300 border border-navy/5"
                  >
                    <span className="font-ui text-[10px] font-semibold tracking-[0.2em] text-gold pt-1 shrink-0">
                      {svc.label}
                    </span>
                    <div>
                      <h3 className="font-ui font-semibold text-navy text-sm mb-1 group-hover:text-gold transition-colors">
                        {svc.title}
                      </h3>
                      <p className="font-ui text-charcoal/70 text-xs font-light leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUpChild} className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-ui text-sm font-semibold text-navy hover:text-gold transition-colors"
              >
                <span>View All Services</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/delivery-installation"
                className="inline-flex items-center gap-2 font-ui text-sm font-semibold text-gold hover:underline"
              >
                <span>Delivery &amp; Installation Guide →</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Bento image grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpStagger}
            className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6"
          >
            <motion.div
              variants={fadeUpChild}
              className="col-span-2 relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-md"
            >
              <Image
                src="/bento-foyer.webp"
                alt="Grand commercial foyer with premium vitrified tiles and architectural lighting installed by Barryham Int'l Ltd"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-all duration-500" />
            </motion.div>

            <motion.div
              variants={fadeUpChild}
              className="relative h-52 md:h-64 rounded-2xl overflow-hidden group shadow-md"
            >
              <Image
                src="/bento-detail.webp"
                alt="Brushed gold basin mixer faucet on marble countertop — Barryham Lagos showroom"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                unoptimized
              />
            </motion.div>

            <motion.div
              variants={fadeUpChild}
              className="relative h-52 md:h-64 bg-navy rounded-2xl flex flex-col justify-end p-6 shadow-lg"
            >
              <div className="w-8 h-8 border border-gold/40 rounded-lg flex items-center justify-center mb-4">
                <MapPin size={16} className="text-gold" />
              </div>
              <h3 className="font-heading text-white text-xl font-semibold leading-snug mb-1">
                2 Lagos<br />Showrooms
              </h3>
              <p className="font-ui text-white/70 text-xs font-light">
                Dopemu-Agege &amp; Alimosho (LASU-Isheri Rd)
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Directive 1.2: WhatsApp CTA after Service Section */}
        <div className="max-w-7xl mx-auto mt-16">
          <SectionWhatsAppCTA
            title="Need Supply & On-Site Installation for Your Project?"
            subtitle="Chat with our technical sales desk on WhatsApp for bathroom, plumbing, tiling, or electrical installation quotes in Lagos and across Nigeria."
            contextLabel="home_after_services_cta"
          />
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-24 bg-white" id="products">
        <div className="px-6 lg:px-20 mb-12 flex flex-col sm:flex-row justify-between items-end gap-6 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpStagger}
          >
            <motion.p
              variants={fadeUpChild}
              className="font-ui text-[10px] font-semibold tracking-[0.25em] uppercase text-gold mb-3"
            >
              In-Stock Showroom Catalogue
            </motion.p>
            <motion.h2
              variants={fadeUpChild}
              className="font-heading text-navy text-3xl md:text-4xl font-semibold"
            >
              Featured Sanitary, Plumbing &amp; Electrical Products
            </motion.h2>
          </motion.div>
          <Link
            href="/products"
            className="font-ui text-sm font-semibold text-navy hover:text-gold transition-colors flex items-center gap-2 shrink-0 min-h-[44px]"
          >
            Browse Full Catalogue (100+ SKUs) <ArrowRight size={14} />
          </Link>
        </div>

        <div className="px-6 lg:px-20 flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide max-w-[100vw]">
          {FEATURED_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/products/${encodeURIComponent(product.id)}`}
              className="shrink-0 w-[78vw] sm:w-[48vw] lg:w-[28vw] xl:w-[22vw] snap-start group"
            >
              <div className="relative w-full aspect-[4/5] bg-offwhite rounded-2xl overflow-hidden mb-5 shadow-sm border border-navy/5 group-hover:border-gold/30 group-hover:shadow-md transition-all duration-300">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={`${product.name} — ${product.brand} supplied by Barryham Int'l Ltd Lagos`}
                    fill
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                    <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-navy/30">
                      {product.brand}
                    </p>
                  </div>
                )}
                <div className="absolute top-4 right-4 z-10">
                  <span className="font-ui text-[10px] font-semibold tracking-wider uppercase bg-white border border-navy/10 text-navy/80 px-2.5 py-1 rounded-full">
                    {product.brand}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start px-1">
                <div>
                  <h3 className="font-heading text-navy text-lg font-semibold mb-1 group-hover:text-gold transition-colors leading-snug line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="font-ui text-gold text-sm font-semibold">
                    {formatPrice(product.price)}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-navy/10 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white group-hover:border-navy transition-all duration-300 shrink-0 mt-1">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Directive 1.2: WhatsApp CTA after Product Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 mt-14">
          <SectionWhatsAppCTA
            title="Looking for Specific Models, Bulk Quantities, or Trade Prices?"
            subtitle="Send your product list or SKU numbers on WhatsApp to confirm stock at our Dopemu or Alimosho showrooms."
            contextLabel="home_after_products_cta"
          />
        </div>
      </section>

      {/* ── WHY BARRYHAM (Directive 5.4) ── */}
      <WhyBarryham />

      {/* ── REVIEWS SECTION (Directive 5.2) ── */}
      <ReviewsSection />
    </main>
  );
}
