"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, FileText, Phone } from "lucide-react";
import { BUSINESS_INFO, STICKY_WHATSAPP_LINK } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { TrustBadges } from "./TrustBadges";
import { trackConversion } from "@/lib/analytics";

interface SectionWhatsAppCTAProps {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
  contextLabel?: string;
  variant?: "navy" | "light";
  showTrustBadges?: boolean;
}

export function SectionWhatsAppCTA({
  title = "Need Pricing, Stock Availability, or a Project Quote?",
  subtitle = "Send your list or BOQ directly to our sales engineers on WhatsApp for fast Lagos & nationwide pricing.",
  whatsappMessage,
  contextLabel = "section_cta",
  variant = "navy",
  showTrustBadges = true,
}: SectionWhatsAppCTAProps) {
  const href = whatsappMessage
    ? buildWhatsAppLink(
        BUSINESS_INFO.whatsappNumber,
        [],
        "general",
        whatsappMessage
      )
    : STICKY_WHATSAPP_LINK;

  const isNavy = variant === "navy";

  return (
    <div
      className={`rounded-3xl p-6 md:p-10 border transition-all ${
        isNavy
          ? "bg-navy text-white border-navy shadow-xl"
          : "bg-white text-navy border-navy/10 shadow-sm"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-gold block mb-2">
            Direct Trade &amp; Retail Supply • {BUSINESS_INFO.openingHours.shortDisplay}
          </span>
          <h3
            className={`font-heading font-bold text-2xl md:text-3xl mb-2 ${
              isNavy ? "text-white" : "text-navy"
            }`}
          >
            {title}
          </h3>
          <p
            className={`font-ui text-sm md:text-base leading-relaxed ${
              isNavy ? "text-offwhite/80" : "text-charcoal/80"
            }`}
          >
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 shrink-0">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackConversion("whatsapp_click", { location: contextLabel })
            }
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-ui font-semibold text-sm px-6 py-3.5 rounded-full shadow-md transition-colors min-h-[48px]"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>

          <Link
            href="/request-quote"
            className={`inline-flex items-center justify-center gap-2 font-ui font-semibold text-sm px-6 py-3.5 rounded-full transition-colors min-h-[48px] ${
              isNavy
                ? "bg-gold hover:bg-gold/90 text-white"
                : "bg-navy hover:bg-gold text-white"
            }`}
          >
            <FileText size={17} />
            Request a Quote
          </Link>

          <a
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            onClick={() =>
              trackConversion("call_click", { location: contextLabel })
            }
            className={`inline-flex items-center justify-center gap-2 font-ui font-medium text-sm px-5 py-3.5 rounded-full border transition-colors min-h-[48px] ${
              isNavy
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-navy/20 text-navy hover:border-gold hover:text-gold"
            }`}
          >
            <Phone size={16} />
            {BUSINESS_INFO.primaryPhoneDisplay}
          </a>
        </div>
      </div>

      {showTrustBadges && (
        <div className="mt-8 pt-6 border-t border-current/10">
          <TrustBadges variant={isNavy ? "dark" : "light"} compact />
        </div>
      )}
    </div>
  );
}
