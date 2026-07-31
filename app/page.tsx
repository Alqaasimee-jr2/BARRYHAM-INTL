"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";

// ─── Animation Variants ────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
};

const fadeUpStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUpChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] } },
};

const hairline: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.3 } },
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const FEATURED_PRODUCTS = [
  products[0], // Classic Pedestal Wash Basin
  products[1], // Wall-Hung Toilet Bowl
  products[2], // Freestanding Soaking Tub
  products[3], // Concealed Shower Mixer
  products[14], // Decorative Pendant Chandelier
];

const INSTITUTIONS = [
  { name: "Central Bank of Nigeria", size: "text-3xl md:text-4xl", opacity: "opacity-90" },
  { name: "Nigeria Revenue Service", size: "text-2xl md:text-3xl", opacity: "opacity-70" },
  { name: "Polaris Bank", size: "text-4xl md:text-5xl", opacity: "opacity-80" },
  { name: "LSDPC", size: "text-5xl md:text-6xl", opacity: "opacity-60" },
  { name: "CCECC", size: "text-3xl md:text-4xl", opacity: "opacity-75" },
  { name: "CIPM", size: "text-4xl md:text-5xl", opacity: "opacity-85" },
  { name: "West African College of Surgeons", size: "text-2xl md:text-3xl", opacity: "opacity-65" },
];

const PRODUCT_BRANDS = [
  { name: "Grohe", style: "font-heading italic text-4xl md:text-5xl opacity-90" },
  { name: "Ideal Standard", style: "font-ui font-light tracking-wider text-xl md:text-2xl opacity-60" },
  { name: "Villeroy & Boch", style: "font-heading text-2xl md:text-3xl opacity-75" },
  { name: "Varmora", style: "font-ui font-semibold uppercase tracking-[0.15em] text-sm opacity-50" },
  { name: "Armitage Shanks", style: "font-heading italic text-3xl md:text-4xl opacity-80" },
  { name: "Twyford", style: "font-ui font-light text-2xl md:text-3xl opacity-65" },
  { name: "Vado", style: "font-heading text-5xl md:text-6xl opacity-55" },
];

const SERVICES = [
  {
    label: "01",
    title: "Sanitary Wares & Fittings",
    desc: "Premium WCs, basins, bathtubs, shower systems, and vanity units from Europe's finest manufacturers.",
    href: "/services",
  },
  {
    label: "02",
    title: "Cables & Lighting Accessories",
    desc: "Copper cables, LED systems, switches, and sockets for residential and commercial electrical works.",
    href: "/services",
  },
  {
    label: "03",
    title: "Plumbing Supply & Installation",
    desc: "End-to-end sourcing and on-site installation of pipes, valves, traps, and drainage systems.",
    href: "/services",
  },
];

// ─── Helpers ───────────────────────────────────────────────────────────────────

function formatPrice(n: number) {
  return `₦${n.toLocaleString("en-NG")}`;
}

// ─── Section wrapper with scroll trigger ───────────────────────────────────────

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  const handleWhatsApp = () => {
    window.open(buildWhatsAppLink("2348034750270", [], "general"), "_blank");
  };

  return (
    <main className="flex min-h-screen flex-col bg-offwhite overflow-x-hidden">

      {/* ── HERO ── */}
      <header className="relative w-full min-h-screen flex flex-col lg:flex-row pt-20 overflow-hidden bg-offwhite">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="w-full lg:w-[45%] flex flex-col justify-center px-6 lg:pl-20 lg:pr-12 py-20 z-10"
        >
          <p className="font-ui text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-8">
            Barryham Int&apos;l Ltd
          </p>

          <h1 className="font-heading font-semibold text-navy leading-[1.1] mb-8">
            <span className="block text-4xl md:text-5xl lg:text-[56px] xl:text-[64px]">
              Your Partner for
            </span>
            <span className="block text-4xl md:text-5xl lg:text-[56px] xl:text-[64px]">
              Architectural
            </span>
            <span className="block text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] text-gold">
              Finishings.
            </span>
          </h1>

          <p className="font-ui font-light text-charcoal/80 text-lg leading-relaxed max-w-md mb-12">
            We supply and install premium sanitary fittings, plumbing systems, and electrical accessories for your most demanding projects. Top-tier quality, without the premium headaches.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-ui font-medium text-sm tracking-wide rounded-full hover:bg-gold transition-colors duration-300 min-h-[52px]"
            >
              Browse Products
              <ArrowRight size={16} />
            </Link>
            <button
              onClick={handleWhatsApp}
              className="font-ui text-sm font-medium text-navy hover:text-gold transition-colors flex items-center gap-2 group min-h-[52px]"
            >
              <span className="border-b border-navy/40 group-hover:border-gold pb-0.5 transition-colors">
                Start a Conversation
              </span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="hidden lg:flex items-center gap-4 mt-20">
            <span className="font-ui text-[10px] font-semibold tracking-[0.3em] uppercase text-navy/40">
              Scroll
            </span>
            <div className="w-12 h-px bg-navy/20" />
          </div>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="w-full lg:w-[55%] h-[60vh] lg:h-auto relative"
        >
          <div className="absolute inset-0 m-4 lg:m-8 lg:ml-0 overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/hero-main.webp"
              alt="Premium luxury bathroom interior — BIL supply and installation"
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            {/* Gold corner accent */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-1">Est. Supply Quality</p>
                <p className="font-heading text-white text-lg font-semibold">European Grade</p>
              </div>
              <div className="bg-gold/90 backdrop-blur-md rounded-xl px-4 py-3">
                <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-white/80 mb-1">Projects Completed</p>
                <p className="font-heading text-white text-lg font-semibold">30+</p>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* ── INSTITUTIONAL TRUST — Statement Wall ── */}
      <section className="bg-navy py-24 lg:py-32 px-6 lg:px-20 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpStagger}
          className="max-w-7xl mx-auto"
        >
          <motion.p variants={fadeUpChild} className="font-ui text-[10px] font-semibold tracking-[0.3em] uppercase text-gold mb-6">
            Trusted by Nigeria&apos;s Institutions
          </motion.p>

          {/* Staggered name rows */}
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

          <motion.div variants={hairline} className="mt-16 h-px bg-gold/30 max-w-xs" />
          <motion.p variants={fadeUpChild} className="font-ui text-white/50 text-sm font-light mt-6 max-w-lg leading-relaxed">
            We&apos;ve earned the trust of Nigeria&apos;s most demanding institutions. Let us bring that same uncompromising standard to your next build.
          </motion.p>
        </motion.div>
      </section>

      {/* ── BRAND CLUSTER — Product Partners ── */}
      <Section className="py-24 lg:py-28 px-6 lg:px-20 bg-white border-b border-navy/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-16">
          {/* Label column */}
          <div className="shrink-0 lg:w-1/4">
            <p className="font-ui text-[10px] font-semibold tracking-[0.25em] uppercase text-charcoal/50 mb-3">
              Curated Partners
            </p>
            <h2 className="font-heading text-navy text-2xl font-semibold leading-snug">
              Global Standards,<br />Local Excellence.
            </h2>
            <div className="w-8 h-px bg-gold mt-6" />
          </div>

          {/* Brand constellation */}
          <div className="w-full lg:w-3/4">
            <div className="flex flex-wrap gap-x-8 gap-y-3 items-baseline">
              {PRODUCT_BRANDS.map((brand) => (
                <span
                  key={brand.name}
                  className={`text-navy ${brand.style} cursor-default hover:opacity-100 hover:scale-105 transition-all duration-300 inline-block`}
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── WHAT WE DO — Asymmetric Grid ── */}
      <section className="py-28 lg:py-40 px-6 lg:px-20 bg-offwhite relative overflow-hidden">
        {/* Architectural background layer */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/60 -z-10 rounded-bl-[100px]" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpStagger}
            className="lg:col-span-5"
          >
            <motion.div variants={hairline} className="w-12 h-px bg-gold mb-8" />
            <motion.h2 variants={fadeUpChild} className="font-heading text-navy text-3xl md:text-4xl font-semibold leading-[1.15] mb-6">
              Mastering the Art of Spatial Design
            </motion.h2>
            <motion.p variants={fadeUpChild} className="font-ui text-charcoal/70 text-base font-light leading-relaxed mb-10">
              We partner with you to deliver bespoke sanitary ware and premium fittings that set the standard for high-end living in West Africa. Our focus is ensuring every piece you select offers unmatched quality, longevity, and elevates your space.
            </motion.p>

            {/* Services list */}
            <motion.div variants={fadeUpStagger} className="space-y-5 mb-12">
              {SERVICES.map((svc) => (
                <motion.div key={svc.label} variants={fadeUpChild}>
                  <Link
                    href={svc.href}
                    className="group flex gap-5 items-start p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300"
                  >
                    <span className="font-ui text-[10px] font-semibold tracking-[0.2em] text-gold pt-1 shrink-0">
                      {svc.label}
                    </span>
                    <div>
                      <p className="font-ui font-semibold text-navy text-sm mb-1 group-hover:text-gold transition-colors">
                        {svc.title}
                      </p>
                      <p className="font-ui text-charcoal/60 text-xs font-light leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUpChild}>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 font-ui text-sm font-semibold text-navy group"
              >
                <span className="border-b border-navy/30 group-hover:border-gold pb-0.5 transition-colors group-hover:text-gold">
                  View All Services
                </span>
                <div className="w-8 h-px bg-navy/30 group-hover:w-12 group-hover:bg-gold transition-all duration-400" />
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
            {/* Large top image — full width */}
            <motion.div
              variants={fadeUpChild}
              className="col-span-2 relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-md"
            >
              <Image
                src="/bento-foyer.webp"
                alt="Grand foyer with premium travertine tiles and architectural lighting"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-all duration-500" />
            </motion.div>

            {/* Bottom left: texture detail */}
            <motion.div
              variants={fadeUpChild}
              className="relative h-52 md:h-64 rounded-2xl overflow-hidden group shadow-md"
            >
              <Image
                src="/bento-detail.webp"
                alt="Close-up of brushed gold faucet on Carrara marble"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                unoptimized
              />
            </motion.div>

            {/* Bottom right: dark accent card */}
            <motion.div
              variants={fadeUpChild}
              className="relative h-52 md:h-64 bg-navy rounded-2xl flex flex-col justify-end p-6 shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-8 h-8 border border-gold/40 rounded-lg flex items-center justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-gold" />
              </div>
              <h3 className="font-heading text-white text-xl font-semibold leading-snug mb-1">
                Precision<br />Installation
              </h3>
              <p className="font-ui text-white/50 text-xs font-light">
                Supply + on-site fitting.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-28 bg-white" id="products">
        <div className="px-6 lg:px-20 mb-12 flex flex-col sm:flex-row justify-between items-end gap-6 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpStagger}
          >
            <motion.p variants={fadeUpChild} className="font-ui text-[10px] font-semibold tracking-[0.25em] uppercase text-gold mb-3">
              Curated Collection
            </motion.p>
            <motion.h2 variants={fadeUpChild} className="font-heading text-navy text-3xl md:text-4xl font-semibold">
              Featured Fixtures
            </motion.h2>
          </motion.div>
          <Link
            href="/products"
            className="font-ui text-sm font-semibold text-navy hover:text-gold transition-colors flex items-center gap-2 shrink-0 min-h-[44px]"
          >
            View all products <ArrowRight size={14} />
          </Link>
        </div>

        {/* Horizontal scroll track */}
        <div className="px-6 lg:px-20 flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide max-w-[100vw]">
          {FEATURED_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href="/products"
              className="shrink-0 w-[78vw] sm:w-[48vw] lg:w-[28vw] xl:w-[22vw] snap-start group"
            >
              {/* Image area */}
              <div className="relative w-full aspect-[4/5] bg-offwhite rounded-2xl overflow-hidden mb-5 shadow-sm border border-navy/5 group-hover:border-gold/30 group-hover:shadow-md transition-all duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                  <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-navy/10" />
                  </div>
                  <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-navy/30">
                    {product.brand}
                  </p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="font-ui text-[10px] font-semibold tracking-wider uppercase bg-white border border-navy/10 text-navy/60 px-2 py-1 rounded-full">
                    {product.category === "sanitary"
                      ? "Sanitary"
                      : product.category === "plumbing"
                      ? "Plumbing"
                      : "Cables & Lighting"}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start px-1">
                <div>
                  <h3 className="font-heading text-navy text-lg font-semibold mb-1 group-hover:text-gold transition-colors leading-snug">
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
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 px-6 lg:px-20 bg-offwhite" id="testimonials">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpStagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUpChild} className="font-ui text-[10px] font-semibold tracking-[0.25em] uppercase text-gold mb-4">
              Testimonials
            </motion.p>
            <motion.h2 variants={fadeUpChild} className="font-heading text-navy text-3xl md:text-4xl font-semibold">
              Voices of Excellence
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpStagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                variants={fadeUpChild}
                className={`group p-8 rounded-2xl border border-navy/5 hover:border-gold/20 transition-all duration-400 shadow-sm hover:shadow-md hover:-translate-y-1 ${
                  i === 0
                    ? "bg-white"
                    : i === 1
                    ? "bg-offwhite"
                    : "bg-white"
                }`}
              >
                {/* Large opening quote mark */}
                <p className="font-heading text-gold/30 text-6xl leading-none mb-4 select-none">&ldquo;</p>

                <blockquote className="font-ui text-charcoal/80 text-sm font-light leading-relaxed mb-8">
                  {t.quote}
                </blockquote>

                <div>
                  {/* Expanding gold hairline */}
                  <div className="w-8 h-px bg-gold mb-4 group-hover:w-16 transition-all duration-400" />
                  <p className="font-ui text-[10px] font-semibold tracking-[0.15em] uppercase text-navy">
                    {t.name}
                  </p>
                  <p className="font-ui text-xs text-charcoal/50 mt-1">{t.role}</p>
                  {t.project && (
                    <p className="font-ui text-xs text-gold/70 mt-0.5">{t.project}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FULL-WIDTH CTA BAND ── */}
      <section className="bg-navy py-24 px-6 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpStagger}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.p variants={fadeUpChild} className="font-ui text-[10px] font-semibold tracking-[0.3em] uppercase text-gold mb-6">
            Let&apos;s Build Together
          </motion.p>
          <motion.h2 variants={fadeUpChild} className="font-heading text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] mb-8 max-w-3xl mx-auto">
            Your great space starts with a conversation.
          </motion.h2>
          <motion.p variants={fadeUpChild} className="font-ui text-white/60 font-light text-base mb-12 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re an architect, contractor, or homeowner — our team
            is ready to source exactly what your project needs.
          </motion.p>
          <motion.div variants={fadeUpChild} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold hover:bg-white hover:text-navy text-white font-ui font-semibold text-sm tracking-wide rounded-full transition-all duration-300 min-h-[52px]"
            >
              Start a Conversation
              <ArrowRight size={16} />
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-gold text-white hover:text-gold font-ui font-semibold text-sm tracking-wide rounded-full transition-all duration-300 min-h-[52px]"
            >
              View Contact Details
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}
