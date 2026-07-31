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
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40"
          >
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="bg-navy text-white p-4 rounded-full shadow-xl hover:bg-gold hover:shadow-2xl transition-all duration-300 relative min-h-[64px] min-w-[64px] flex items-center justify-center group"
              aria-label="Open Quote Request"
            >
              <ShoppingCart size={28} className="group-hover:scale-110 transition-transform" />
              
              {/* Badge */}
              <div className="absolute -top-2 -right-2 bg-gold text-white font-ui font-bold text-xs h-6 w-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                {itemCount}
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
