"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { STICKY_WHATSAPP_LINK } from "@/lib/constants";
import { trackConversion } from "@/lib/analytics";

export function StickyWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <a
        href={STICKY_WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackConversion("whatsapp_click", {
            location: "sticky_floating_button",
          })
        }
        aria-label="Chat with Barryham on WhatsApp"
        className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-navy text-white hover:bg-gold transition-all duration-300 shadow-lg border border-gold/40 hover:border-gold"
      >
        <MessageCircle size={22} className="text-gold group-hover:text-white transition-colors" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
