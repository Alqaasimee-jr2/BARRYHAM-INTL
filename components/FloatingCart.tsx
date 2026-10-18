"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { CartDrawer } from "./CartDrawer";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingCart() {
  const { itemCount } = useCart();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40"
          >
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="bg-navy text-white px-5 py-3.5 rounded-full shadow-xl hover:bg-gold hover:shadow-2xl transition-all duration-300 relative min-h-[52px] flex items-center justify-center gap-2.5 group border border-white/15"
              aria-label="Open Quote Request List"
            >
              <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-ui font-semibold text-xs uppercase tracking-wider">
                Quote List
              </span>
              <span className="bg-gold text-white font-ui font-bold text-xs h-6 min-w-[24px] px-1.5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
