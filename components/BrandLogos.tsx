"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface Brand {
  name: string;
  tagline: string;
  logo: string;
}

export const PARTNER_BRANDS: Brand[] = [
  { name: "GROHE", tagline: "German Engineered Water Systems", logo: "/brands/grohe.svg" },
  { name: "Ideal Standard", tagline: "Together for Better Bathrooms", logo: "/brands/ideal-standard.png" },
  { name: "Roca", tagline: "European Sanitary Wares & Tiles", logo: "/brands/roca.svg" },
  { name: "Villeroy & Boch", tagline: "Timeless Quality Since 1748", logo: "/brands/villeroy-boch.svg" },
  { name: "hansgrohe", tagline: "Premium Taps & Shower Innovation", logo: "/brands/hansgrohe.svg" },
  { name: "Varmora", tagline: "Architectural Tiles & Sanitaryware", logo: "/brands/varmora.svg" },
  { name: "Armitage Shanks", tagline: "Institutional & Commercial Sanitary", logo: "/brands/armitage-shanks.svg" },
  { name: "Twyford", tagline: "British Bathroom Engineering", logo: "/brands/twyford.svg" },
  { name: "VADO", tagline: "High-End Taps & Brassware", logo: "/brands/vado.svg" },
  { name: "SANIT", tagline: "Concealed Flushing Technology", logo: "/brands/sanit.svg" },
  { name: "Geberit", tagline: "Swiss Sanitary & Piping Systems", logo: "/brands/geberit.svg" },
  { name: "Coleman CTIL", tagline: "Wires & Cables Solutions", logo: "/brands/coleman-ctil.png" },
  { name: "Reigner", tagline: "Bathrooms, Tiles & Specialist Products", logo: "/brands/reigner.png" },
];

interface BrandLogosProps {
  title?: string;
  subtitle?: string;
  variant?: "grid" | "marquee";
  className?: string;
}

export function BrandLogos({
  title = "Official Partner Brands & Manufacturers",
  subtitle = "Direct representatives for leading European & global sanitary, electrical, and plumbing manufacturers.",
  variant = "grid",
  className = "",
}: BrandLogosProps) {
  return (
    <section className={`py-20 bg-white border-y border-navy/5 ${className}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {title && (
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-ui text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3 block">
              Direct Supply &amp; Distribution
            </span>
            <h2 className="font-heading text-navy text-3xl md:text-4xl font-semibold mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="font-ui text-charcoal/70 text-base leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {variant === "grid" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-8 items-center justify-center">
            {PARTNER_BRANDS.map((brand) => (
              <motion.div
                key={brand.name}
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col items-center justify-center p-6 bg-offwhite/70 rounded-2xl border border-navy/5 hover:border-gold/50 hover:shadow-md hover:bg-white transition-all duration-300 min-h-[120px]"
              >
                <div className="relative w-36 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} official logo`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span className="font-ui text-[10px] text-charcoal/50 group-hover:text-gold uppercase tracking-wider mt-3 text-center transition-colors">
                  {brand.tagline}
                </span>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="relative overflow-hidden py-4">
            <div className="flex space-x-12 animate-marquee whitespace-nowrap">
              {PARTNER_BRANDS.concat(PARTNER_BRANDS).map((brand, i) => (
                <div
                  key={`${brand.name}-${i}`}
                  className="inline-flex flex-col items-center justify-center px-8 py-4 bg-offwhite rounded-xl border border-navy/5 text-navy/70 hover:text-navy hover:border-gold transition-all"
                >
                  <div className="relative w-32 h-10">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
