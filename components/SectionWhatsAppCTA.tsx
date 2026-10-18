"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, FileText } from "lucide-react";
import { BUSINESS_INFO, STICKY_WHATSAPP_LINK } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";
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
  title = "Inquire or Request a Specification Quote",
  subtitle = "Connect directly with our technical desk for stock confirmation, BOQ pricing, and delivery schedules.",
  whatsappMessage,
  contextLabel = "section_cta",
  variant = "navy",
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
      className={`rounded-2xl p-6 md:p-8 transition-all ${
        isNavy
          ? "bg-navy text-white shadow-sm border border-navy/20"
          : "bg-white text-navy border border-navy/10 shadow-sm"
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-xl">
          <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-gold mb-1.5">
            Technical Support &amp; Pricing
          </p>
          <h3
            className={`font-heading font-semibold text-xl md:text-2xl mb-1.5 ${
              isNavy ? "text-white" : "text-navy"
            }`}
          >
            {title}
          </h3>
          <p
            className={`font-ui text-xs md:text-sm leading-relaxed ${
              isNavy ? "text-offwhite/75" : "text-charcoal/70"
            }`}
          >
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackConversion("whatsapp_click", { location: contextLabel })
            }
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-ui font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-colors shadow-sm min-h-[42px]"
          >
            <MessageCircle size={15} />
            Chat on WhatsApp
          </a>

          <Link
            href="/request-quote"
            className={`inline-flex items-center gap-1.5 font-ui font-semibold text-xs uppercase tracking-wider px-4 py-3 rounded-full transition-colors min-h-[42px] ${
              isNavy
                ? "border border-white/20 text-white hover:border-gold hover:text-gold"
                : "border border-navy/20 text-navy hover:border-gold hover:text-gold"
            }`}
          >
            <FileText size={14} />
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
