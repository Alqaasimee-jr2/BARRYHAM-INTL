"use client";

import React, { useState, useEffect } from "react";
import { ShoppingCart, Check, MessageCircle, FileText } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { trackConversion } from "@/lib/analytics";

interface ProductDetailActionsProps {
  product: Product;
  formattedPrice: string;
}

export function ProductDetailActions({
  product,
  formattedPrice,
}: ProductDetailActionsProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1,
      image: product.image,
    });
    trackConversion("product_enquiry", {
      action: "add_to_quote_from_detail",
      sku: product.id,
      productName: product.name,
      brand: product.brand,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsAppClick = () => {
    trackConversion("product_enquiry", {
      action: "whatsapp_order_click",
      sku: product.id,
      productName: product.name,
      brand: product.brand,
    });
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 w-full">
        <a
          href={product.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex-1 inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-ui font-semibold text-sm tracking-wide rounded-full shadow-md transition-colors duration-300 text-center min-h-[52px]"
        >
          <MessageCircle size={19} />
          Chat on WhatsApp to order
        </a>

        <button
          type="button"
          onClick={handleAdd}
          disabled={added}
          className={`flex-1 inline-flex items-center justify-center gap-2.5 px-7 py-4 font-ui font-semibold text-sm tracking-wide rounded-full transition-colors duration-300 min-h-[52px] ${
            added
              ? "bg-gold text-white"
              : "bg-navy text-white hover:bg-gold"
          }`}
        >
          {added ? "Added to Quote List" : "Add to Quote List"}
          {added ? <Check size={17} /> : <ShoppingCart size={17} />}
        </button>

        <Link
          href="/request-quote"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-navy/20 text-navy hover:border-gold hover:text-gold font-ui font-semibold text-xs uppercase tracking-wider rounded-full transition-colors min-h-[48px]"
        >
          <FileText size={16} />
          Request Bulk Quote
        </Link>
      </div>

      {/* Sticky Bottom Product Bar */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-navy/10 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] px-4 sm:px-6 py-3 flex justify-center"
          >
            <div className="max-w-[1440px] w-full flex items-center justify-between gap-4 pr-44 sm:pr-52">
              <div className="hidden sm:flex items-center gap-3">
                {product.image && (
                  <div className="w-11 h-11 relative rounded-lg overflow-hidden border border-navy/10 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="font-heading font-semibold text-navy text-sm line-clamp-1">
                    {product.name}
                  </span>
                  <span className="font-ui text-xs font-semibold text-gold">
                    {formattedPrice}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href={product.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-ui font-semibold text-xs rounded-full whitespace-nowrap min-h-[42px]"
                >
                  <MessageCircle size={15} />
                  Chat on WhatsApp to order
                </a>
                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={added}
                  className={`hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 font-ui font-semibold text-xs rounded-full transition-colors whitespace-nowrap min-h-[42px] ${
                    added
                      ? "bg-gold text-white"
                      : "bg-navy text-white hover:bg-gold"
                  }`}
                >
                  {added ? "Added" : "Add to Quote"}
                  {added ? <Check size={15} /> : <ShoppingCart size={15} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
