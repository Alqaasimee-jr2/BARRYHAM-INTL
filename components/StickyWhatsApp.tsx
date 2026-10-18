"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { STICKY_WHATSAPP_LINK } from "@/lib/constants";
import { trackConversion } from "@/lib/analytics";

export function StickyWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
      <a
        href={STICKY_WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackConversion("whatsapp_click", {
            location: "sticky_floating_button",
          })
        }
        aria-label="Chat on WhatsApp with Barryham International Limited"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-ui font-semibold text-sm px-5 py-3.5 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_36px_rgba(37,211,102,0.55)] transition-all duration-300 min-h-[52px]"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageCircle size={20} className="shrink-0 fill-white/20" />
        <span className="tracking-wide">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
