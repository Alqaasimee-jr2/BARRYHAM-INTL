"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, Download } from "lucide-react";
import { products, ProductCategory } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const CATEGORIES: { id: "All" | ProductCategory; label: string }[] = [
  { id: "All", label: "All Products" },
  { id: "sanitary", label: "Sanitary Wares" },
  { id: "cables-lighting", label: "Cables & Lighting" },
  { id: "plumbing", label: "Plumbing Fittings" },
];

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const initialCategory = (searchParams.get("category") as "All" | ProductCategory) || "All";
  const [activeCategory, setActiveCategory] = useState<"All" | ProductCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  // Sync state when URL changes externally (e.g., via Nav links)
  useEffect(() => {
    const cat = searchParams.get("category") as "All" | ProductCategory;
    if (cat) {
      setActiveCategory(cat);
    } else {
      setActiveCategory("All");
    }
  }, [searchParams]);

  const handleCategoryChange = (catId: "All" | ProductCategory) => {
    setActiveCategory(catId);
    if (catId === "All") {
      router.push("/products");
    } else {
      router.push(`/products?category=${catId}`);
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesSearch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Sticky Filters & Search */}
      <div className="sticky top-20 z-30 bg-offwhite/90 backdrop-blur-md border-b border-navy/5 shadow-sm py-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          
          <div className="flex overflow-x-auto hide-scrollbar gap-3 w-full md:w-auto pb-2 md:pb-0">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`whitespace-nowrap px-5 py-2 rounded-full font-ui text-sm font-medium transition-all duration-300 min-h-[40px] ${
                  activeCategory === category.id
                    ? "bg-navy text-white shadow-md"
                    : "bg-white text-charcoal border border-navy/10 hover:border-gold hover:text-gold"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-charcoal/40" />
            </div>
            <input
              type="text"
              placeholder="Search products or brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-navy/10 rounded-full leading-5 bg-white placeholder-charcoal/40 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold font-ui text-sm transition-all"
            />
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
            <p className="font-ui text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <React.Suspense fallback={<div className="flex justify-center items-center h-screen"><div className="animate-pulse w-8 h-8 rounded-full bg-navy/20"></div></div>}>
      <ProductsPageContent />
    </React.Suspense>
  );
}

function ProductsPageContent() {
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
          
          <div className="mt-8 flex justify-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                alert("Catalog PDF will be available soon. Please check back later!");
              }}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-ui font-semibold py-3 px-6 rounded-full transition-colors shadow-md"
            >
              <Download size={20} />
              Download Full Catalog
            </a>
          </div>
        </div>
      </section>

      <React.Suspense fallback={<div className="flex justify-center items-center py-20"><div className="animate-pulse w-8 h-8 rounded-full bg-navy/20"></div></div>}>
        <ProductsContent />
      </React.Suspense>

      {/* Floating Cart & Drawer */}
      <FloatingCart />
    </main>
  );
}
