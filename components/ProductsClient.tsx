"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, RotateCcw, Filter } from "lucide-react";
import {
  products,
  PRODUCT_BRANDS,
  ProductCategory,
  ProductAvailability,
  ProductUseCase,
} from "@/data/products";
import { PROJECT_TYPES } from "@/lib/constants";
import { ProductCard } from "@/components/ProductCard";
import { SectionWhatsAppCTA } from "@/components/SectionWhatsAppCTA";

const CATEGORIES: { id: "All" | ProductCategory; label: string }[] = [
  { id: "All", label: "All Categories" },
  { id: "sanitary", label: "Sanitary Ware" },
  { id: "plumbing", label: "Plumbing Fittings" },
  { id: "cables-lighting", label: "Electrical & Cables" },
  { id: "water-heaters", label: "Water Heaters" },
];

type PriceRangeFilter =
  | "All"
  | "under-100k"
  | "100k-300k"
  | "300k-600k"
  | "above-600k"
  | "request";

const PRICE_RANGES: { id: PriceRangeFilter; label: string }[] = [
  { id: "All", label: "All Price Ranges" },
  { id: "under-100k", label: "Under ₦100,000" },
  { id: "100k-300k", label: "₦100,000 – ₦300,000" },
  { id: "300k-600k", label: "₦300,000 – ₦600,000" },
  { id: "above-600k", label: "Above ₦600,000" },
  { id: "request", label: "Request Price Items" },
];

export function ProductsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const normalizeCategoryParam = (raw: string | null): "All" | ProductCategory => {
    if (!raw) return "All";
    if (raw === "electricals") return "cables-lighting";
    if (
      raw === "sanitary" ||
      raw === "plumbing" ||
      raw === "cables-lighting" ||
      raw === "water-heaters"
    ) {
      return raw;
    }
    return "All";
  };

  const [activeCategory, setActiveCategory] = useState<"All" | ProductCategory>(
    () => normalizeCategoryParam(searchParams.get("category"))
  );
  const [selectedBrand, setSelectedBrand] = useState<string>(
    () => searchParams.get("brand") || "All"
  );
  const [selectedPriceRange, setSelectedPriceRange] =
    useState<PriceRangeFilter>("All");
  const [selectedAvailability, setSelectedAvailability] = useState<
    "All" | ProductAvailability
  >("All");
  const [selectedUseCase, setSelectedUseCase] = useState<
    "All" | ProductUseCase
  >("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setActiveCategory(normalizeCategoryParam(searchParams.get("category")));
    const brandParam = searchParams.get("brand");
    if (brandParam) {
      setSelectedBrand(brandParam);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId: "All" | ProductCategory) => {
    setActiveCategory(catId);
    if (catId === "All") {
      router.push("/products", { scroll: false });
    } else {
      router.push(`/products?category=${catId}`, { scroll: false });
    }
  };

  const resetFilters = () => {
    setActiveCategory("All");
    setSelectedBrand("All");
    setSelectedPriceRange("All");
    setSelectedAvailability("All");
    setSelectedUseCase("All");
    setSearchQuery("");
    router.push("/products", { scroll: false });
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesBrand =
        selectedBrand === "All" ||
        p.brand.toLowerCase() === selectedBrand.toLowerCase();

      let matchesPrice = true;
      if (selectedPriceRange === "under-100k") {
        matchesPrice = p.price < 100000;
      } else if (selectedPriceRange === "100k-300k") {
        matchesPrice = p.price >= 100000 && p.price <= 300000;
      } else if (selectedPriceRange === "300k-600k") {
        matchesPrice = p.price > 300000 && p.price <= 600000;
      } else if (selectedPriceRange === "above-600k") {
        matchesPrice = p.price > 600000;
      } else if (selectedPriceRange === "request") {
        matchesPrice = p.priceMode === "request";
      }

      const matchesAvailability =
        selectedAvailability === "All" ||
        p.availability === selectedAvailability;

      const matchesUseCase =
        selectedUseCase === "All" || p.useCases.includes(selectedUseCase);

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q);

      return (
        matchesCategory &&
        matchesBrand &&
        matchesPrice &&
        matchesAvailability &&
        matchesUseCase &&
        matchesSearch
      );
    });
  }, [
    activeCategory,
    selectedBrand,
    selectedPriceRange,
    selectedAvailability,
    selectedUseCase,
    searchQuery,
  ]);

  return (
    <>
      {/* Sticky 5-Filter Bar (Directive 4.2) */}
      <div className="sticky top-[88px] z-30 bg-offwhite/95 backdrop-blur-md border-b border-navy/10 shadow-sm py-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-4">
          {/* Row 1: Category Pills + Search */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            <div className="flex overflow-x-auto hide-scrollbar gap-2.5 pb-1 lg:pb-0">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryChange(category.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full font-ui text-xs md:text-sm font-semibold transition-all duration-200 min-h-[40px] ${
                    activeCategory === category.id
                      ? "bg-navy text-white shadow-sm"
                      : "bg-white text-charcoal border border-navy/10 hover:border-gold hover:text-gold"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-80">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search size={17} className="text-charcoal/40" />
              </div>
              <input
                type="text"
                aria-label="Search products, brands, or SKU"
                placeholder="Search product name, brand, or SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-2.5 border border-navy/15 rounded-full bg-white placeholder-charcoal/40 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold font-ui text-xs md:text-sm min-h-[40px]"
              />
            </div>
          </div>

          {/* Row 2: Brand, Price Range, Availability & Use Case Dropdowns */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-center pt-1">
            <div>
              <label htmlFor="filter-brand" className="sr-only">
                Filter by Brand
              </label>
              <select
                id="filter-brand"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full border border-navy/15 rounded-xl px-3 py-2 bg-white font-ui text-xs text-charcoal focus:border-gold outline-none min-h-[38px]"
              >
                <option value="All">All Brands ({PRODUCT_BRANDS.length})</option>
                {PRODUCT_BRANDS.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="filter-price" className="sr-only">
                Filter by Price Range
              </label>
              <select
                id="filter-price"
                value={selectedPriceRange}
                onChange={(e) =>
                  setSelectedPriceRange(e.target.value as PriceRangeFilter)
                }
                className="w-full border border-navy/15 rounded-xl px-3 py-2 bg-white font-ui text-xs text-charcoal focus:border-gold outline-none min-h-[38px]"
              >
                {PRICE_RANGES.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="filter-availability" className="sr-only">
                Filter by Availability
              </label>
              <select
                id="filter-availability"
                value={selectedAvailability}
                onChange={(e) =>
                  setSelectedAvailability(
                    e.target.value as "All" | ProductAvailability
                  )
                }
                className="w-full border border-navy/15 rounded-xl px-3 py-2 bg-white font-ui text-xs text-charcoal focus:border-gold outline-none min-h-[38px]"
              >
                <option value="All">All Availability</option>
                <option value="In Stock">In Stock</option>
                <option value="Available on Order">Available on Order</option>
              </select>
            </div>

            <div>
              <label htmlFor="filter-usecase" className="sr-only">
                Filter by Project Use Case
              </label>
              <select
                id="filter-usecase"
                value={selectedUseCase}
                onChange={(e) =>
                  setSelectedUseCase(e.target.value as "All" | ProductUseCase)
                }
                className="w-full border border-navy/15 rounded-xl px-3 py-2 bg-white font-ui text-xs text-charcoal focus:border-gold outline-none min-h-[38px]"
              >
                <option value="All">All Project Use Cases</option>
                {PROJECT_TYPES.map((useCase) => (
                  <option key={useCase} value={useCase}>
                    For {useCase}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-2 md:col-span-1 flex items-center justify-between md:justify-end gap-2">
              <span className="font-ui text-xs text-charcoal/70 flex items-center gap-1">
                <Filter size={13} className="text-gold" />
                <strong>{filteredProducts.length}</strong> items
              </span>
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-xs font-ui font-semibold text-navy hover:text-gold px-2.5 py-1.5 rounded-lg border border-navy/10 bg-white transition-colors"
              >
                <RotateCcw size={12} />
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="pt-8 px-6 lg:px-12 max-w-7xl mx-auto w-full">

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
                transition={{ duration: 0.25 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-navy/10 my-8 p-8">
            <p className="font-heading text-2xl text-navy mb-2">
              No matching SKU found in the online filter
            </p>
            <p className="font-ui text-sm text-charcoal/70 mb-6 max-w-md mx-auto">
              We stock over 130+ additional models at our Dopemu and Alimosho showrooms. Send your item name or photo on WhatsApp for an instant stock check.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-6 py-3 rounded-full bg-navy text-white font-ui text-xs font-semibold uppercase tracking-wider hover:bg-gold transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Directive 1.2: Second WhatsApp CTA after Product Section */}
        <div className="mt-16">
          <SectionWhatsAppCTA
            title="Don't See the Exact Model or Quantity You Need?"
            subtitle="Send your Bill of Quantities (BOQ) or specification list to our Lagos sales desk on WhatsApp for wholesale & retail pricing."
            contextLabel="catalogue_bottom_cta"
          />
        </div>
      </section>
    </>
  );
}
