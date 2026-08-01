"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProductDetailActionsProps {
  product: Product;
  formattedPrice: string;
}

export function ProductDetailActions({ product, formattedPrice }: ProductDetailActionsProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky banner after scrolling down 400px
      if (window.scrollY > 400) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, price: product.price, qty: 1, image: product.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const whatsappMessage = `Hello Barryham, I would like to request a quote for the following product:\n\n*${product.name}*\nBrand: ${product.brand}\nSKU: ${product.id}\nLink: https://barryham.site/products/${product.id}`;
  const whatsappUrl = buildWhatsAppLink("2348034750270", [], "product", whatsappMessage);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <button
          onClick={handleAdd}
          disabled={added}
          className={`flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 font-ui font-semibold text-sm tracking-wide rounded-full transition-colors duration-300 ${
            added
              ? "bg-gold text-white"
              : "bg-navy text-white hover:bg-gold"
          }`}
        >
          {added ? "Added to Quote Request" : "Add to Quote Request"}
          {added ? <Check size={16} /> : <ShoppingCart size={16} />}
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-navy border-2 border-navy hover:bg-navy/5 font-ui font-semibold text-sm tracking-wide rounded-full transition-colors duration-300 text-center"
        >
          Buy Now via WhatsApp
          <ArrowRight size={16} />
        </a>
      </div>

      {/* Sticky Bottom Banner */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-navy/10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] px-6 py-4 md:py-4 flex justify-center"
          >
            <div className="max-w-[1440px] w-full flex items-center justify-between gap-6 pr-24 md:pr-0">
              {/* Product Info (Hidden on very small screens) */}
              <div className="hidden sm:flex items-center gap-4">
                {product.image && (
                  <div className="w-12 h-12 relative rounded-md overflow-hidden border border-navy/10 flex-shrink-0">
                    <Image src={product.image} alt={product.name} fill className="object-cover" unoptimized />
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="font-heading font-semibold text-navy line-clamp-1">{product.name}</span>
                  <span className="font-ui text-sm text-charcoal/70">{formattedPrice}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex w-full sm:w-auto items-center gap-3 ml-auto">
                <button
                  onClick={handleAdd}
                  disabled={added}
                  className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 font-ui font-semibold text-sm tracking-wide rounded-full transition-colors duration-300 whitespace-nowrap ${
                    added
                      ? "bg-gold text-white"
                      : "bg-navy text-white hover:bg-gold"
                  }`}
                >
                  {added ? "Added" : "Add to Request"}
                  {added ? <Check size={16} /> : <ShoppingCart size={16} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
