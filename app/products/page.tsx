"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, ProductCategory } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { FloatingCart } from "@/components/FloatingCart";

const CATEGORIES: { id: "All" | ProductCategory; label: string }[] = [
  { id: "All", label: "All Products" },
  { id: "sanitary", label: "Sanitary Wares" },
  { id: "cables-lighting", label: "Cables & Lighting" },
  { id: "plumbing", label: "Plumbing Fittings" },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProductCategory>("All");

  const filteredProducts = products.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-24 pb-32">
      {/* Header */}
      <section className="py-16 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Product Catalog
          </h1>
          <p className="font-ui text-lg text-offwhite/90 leading-relaxed max-w-2xl mx-auto">
            Explore our curated selection of high-quality building materials designed for your projects. From premium sanitary wares to industrial-grade cables, find exactly what you need and build your custom quote with us today.
          </p>
        </div>
      </section>

      {/* Sticky Filters */}
      <div className="sticky top-20 z-30 bg-offwhite/90 backdrop-blur-md border-b border-navy/5 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex overflow-x-auto hide-scrollbar gap-4 py-4 justify-start md:justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-ui text-sm font-medium transition-all duration-300 min-h-[44px] ${
                  activeCategory === category.id
                    ? "bg-gold text-white shadow-md"
                    : "bg-white text-charcoal border border-navy/10 hover:border-gold hover:text-gold"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="pt-12 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24 text-charcoal/50">
            <p className="font-ui text-lg">No products found for this category.</p>
          </div>
        )}
      </section>

      {/* Floating Cart & Drawer */}
      <FloatingCart />
    </main>
  );
}
