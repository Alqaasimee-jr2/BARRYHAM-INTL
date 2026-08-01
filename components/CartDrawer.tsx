"use client";

import React, { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, ShoppingCart } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQty, total } = useCart();

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const formattedTotal = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(total);

  const handleCheckout = () => {
    const checkoutItems = items.map(item => ({ name: item.name, qty: item.qty, sku: item.id }));
    const link = buildWhatsAppLink("2348034750270", checkoutItems, "product");
    window.open(link, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-navy/5">
              <div className="flex items-center gap-3 text-navy">
                <ShoppingCart size={24} />
                <h2 className="font-heading font-bold text-xl">Quote Request</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-charcoal/60 hover:text-navy hover:bg-navy/5 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-charcoal/50 gap-4">
                  <ShoppingCart size={48} className="opacity-20" />
                  <p className="font-ui text-center">Your request list is empty.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-start border-b border-navy/5 pb-4 last:border-0">
                    <div className="w-20 h-20 bg-navy/5 rounded-lg flex items-center justify-center text-xs text-navy/30 shrink-0 overflow-hidden relative border border-navy/5">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      ) : (
                        "IMG"
                      )}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-heading font-semibold text-navy line-clamp-2 leading-tight mb-1">
                        {item.name}
                      </h4>
                      <p className="font-ui font-bold text-charcoal mb-3">
                        {new Intl.NumberFormat("en-NG", {
                          style: "currency",
                          currency: "NGN",
                          maximumFractionDigits: 0,
                        }).format(item.price)}
                      </p>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-navy/10 rounded-md">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="p-1 text-charcoal hover:bg-navy/5 min-h-[32px] min-w-[32px] flex items-center justify-center"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-ui text-sm font-medium w-6 text-center">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="p-1 text-charcoal hover:bg-navy/5 min-h-[32px] min-w-[32px] flex items-center justify-center"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs font-ui text-red-500 hover:underline min-h-[44px] px-2 flex items-center"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-navy/5 bg-offwhite/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-ui text-charcoal/70 font-medium uppercase text-sm tracking-wider">
                    Estimated Subtotal
                  </span>
                  <span className="font-heading font-bold text-2xl text-navy">
                    {formattedTotal}
                  </span>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full bg-gold hover:bg-navy text-white font-ui font-medium min-h-[56px] rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  Checkout via WhatsApp
                </button>
                <p className="font-ui text-xs text-charcoal/50 text-center mt-4">
                  Final pricing may vary based on availability and shipping.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
