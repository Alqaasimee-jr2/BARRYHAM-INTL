"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, MessageCircle, Upload, Phone, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import {
  BUSINESS_INFO,
  PROJECT_TYPES,
  STICKY_WHATSAPP_LINK,
} from "@/lib/constants";
import { buildQuoteSubmissionWhatsAppLink } from "@/lib/whatsapp";
import { TrustBadges } from "./TrustBadges";
import { trackConversion } from "@/lib/analytics";

const BUDGET_RANGES = [
  "",
  "Under ₦500,000",
  "₦500,000 – ₦2,000,000",
  "₦2,000,000 – ₦10,000,000",
  "₦10,000,000 – ₦50,000,000",
  "Above ₦50,000,000 (Commercial / Estate Bulk)",
];

export function RequestQuoteClient() {
  const { items } = useCart();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState<string>("Home");
  const [productsNeeded, setProductsNeeded] = useState("");
  const [location, setLocation] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [message, setMessage] = useState("");
  const [attachmentName, setAttachmentName] = useState("");

  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  // Pre-fill Products Needed if user added items to Quote Cart
  useEffect(() => {
    if (items.length > 0 && !productsNeeded) {
      const prefilled = items
        .map((item) => `${item.qty}x ${item.name} (SKU: ${item.id})`)
        .join(", ");
      setProductsNeeded(prefilled);
    }
  }, [items, productsNeeded]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachmentName(file.name);
    } else {
      setAttachmentName("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappUrl = buildQuoteSubmissionWhatsAppLink({
      fullName,
      phone,
      projectType,
      productsNeeded,
      location,
      budgetRange: budgetRange || undefined,
      message: message || undefined,
      attachmentName: attachmentName || undefined,
    });

    trackConversion("quote_submitted", {
      projectType,
      location,
      hasBudget: Boolean(budgetRange),
      hasAttachment: Boolean(attachmentName),
    });

    setSubmittedUrl(whatsappUrl);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      {submittedUrl ? (
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-emerald-200 shadow-lg text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>
          <h2 className="font-heading font-bold text-3xl text-navy">
            Thank you. Our team will contact you shortly.
          </h2>
          <p className="font-ui text-charcoal/80 max-w-xl mx-auto leading-relaxed">
            Your quote details have been prepared for our sales desk on WhatsApp ({BUSINESS_INFO.whatsappDisplay}). If WhatsApp did not open automatically, click the button below to send your enquiry immediately.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={submittedUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackConversion("whatsapp_click", {
                  location: "quote_confirmation_screen",
                })
              }
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-ui font-semibold text-sm px-8 py-4 rounded-full shadow-md transition-colors min-h-[52px]"
            >
              <MessageCircle size={20} />
              Send Quote on WhatsApp Now
            </a>
            <button
              type="button"
              onClick={() => setSubmittedUrl(null)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-full border border-navy/20 text-navy font-ui font-semibold text-sm hover:border-gold hover:text-gold transition-colors min-h-[52px]"
            >
              Edit or Submit Another Quote
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-6 md:p-12 border border-navy/10 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-navy/10">
            <div>
              <span className="font-ui text-xs font-bold uppercase tracking-[0.2em] text-gold block mb-1">
                Fast Response Within 1 Hour ({BUSINESS_INFO.openingHours.shortDisplay})
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy">
                Project &amp; Product Quote Form
              </h2>
            </div>
            <a
              href={STICKY_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-ui font-semibold text-[#1ebe5d] bg-[#25D366]/10 hover:bg-[#25D366]/20 px-4 py-2.5 rounded-full transition-colors w-fit"
            >
              <MessageCircle size={16} />
              Prefer instant chat? Message us on WhatsApp
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. Full Name */}
              <div>
                <label
                  htmlFor="quote-fullName"
                  className="block font-ui text-xs font-semibold text-navy uppercase tracking-wider mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="quote-fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Engr. Tunde Bakare"
                  className="w-full border border-navy/15 rounded-xl px-4 py-3.5 bg-offwhite/40 focus:bg-white font-ui text-sm text-charcoal focus:border-gold outline-none min-h-[48px]"
                />
              </div>

              {/* 2. Phone / WhatsApp Number */}
              <div>
                <label
                  htmlFor="quote-phone"
                  className="block font-ui text-xs font-semibold text-navy uppercase tracking-wider mb-2"
                >
                  Phone / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0803 000 0000"
                  className="w-full border border-navy/15 rounded-xl px-4 py-3.5 bg-offwhite/40 focus:bg-white font-ui text-sm text-charcoal focus:border-gold outline-none min-h-[48px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 3. Project Type */}
              <div>
                <label
                  htmlFor="quote-projectType"
                  className="block font-ui text-xs font-semibold text-navy uppercase tracking-wider mb-2"
                >
                  Project Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="quote-projectType"
                  required
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full border border-navy/15 rounded-xl px-4 py-3.5 bg-offwhite/40 focus:bg-white font-ui text-sm text-charcoal focus:border-gold outline-none min-h-[48px]"
                >
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* 5. Location */}
              <div>
                <label
                  htmlFor="quote-location"
                  className="block font-ui text-xs font-semibold text-navy uppercase tracking-wider mb-2"
                >
                  Project / Delivery Location <span className="text-red-500">*</span>
                </label>
                <input
                  id="quote-location"
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Lekki Phase 1, Ikeja GRA, Ikoyi, Abuja..."
                  className="w-full border border-navy/15 rounded-xl px-4 py-3.5 bg-offwhite/40 focus:bg-white font-ui text-sm text-charcoal focus:border-gold outline-none min-h-[48px]"
                />
              </div>
            </div>

            {/* 4. Products Needed */}
            <div>
              <label
                htmlFor="quote-productsNeeded"
                className="block font-ui text-xs font-semibold text-navy uppercase tracking-wider mb-2"
              >
                Products Needed <span className="text-red-500">*</span>
              </label>
              <textarea
                id="quote-productsNeeded"
                required
                rows={3}
                value={productsNeeded}
                onChange={(e) => setProductsNeeded(e.target.value)}
                placeholder="e.g. 12x Wall-Hung WCs (Grohe or Ideal Standard), 12x Basin Mixers, Coleman 4mm & 2.5mm Cables, 6x Ariston 30L Water Heaters..."
                className="w-full border border-navy/15 rounded-xl px-4 py-3.5 bg-offwhite/40 focus:bg-white font-ui text-sm text-charcoal focus:border-gold outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 6. Budget Range (Optional) */}
              <div>
                <label
                  htmlFor="quote-budget"
                  className="block font-ui text-xs font-semibold text-navy uppercase tracking-wider mb-2"
                >
                  Budget Range <span className="text-charcoal/40">(Optional)</span>
                </label>
                <select
                  id="quote-budget"
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full border border-navy/15 rounded-xl px-4 py-3.5 bg-offwhite/40 focus:bg-white font-ui text-sm text-charcoal focus:border-gold outline-none min-h-[48px]"
                >
                  <option value="">Select estimated budget (optional)</option>
                  {BUDGET_RANGES.filter(Boolean).map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* 7a. File Upload Reference (Optional) */}
              <div>
                <label
                  htmlFor="quote-upload"
                  className="block font-ui text-xs font-semibold text-navy uppercase tracking-wider mb-2"
                >
                  Attach BOQ / Specification List{" "}
                  <span className="text-charcoal/40">(Optional)</span>
                </label>
                <label
                  htmlFor="quote-upload"
                  className="w-full border border-dashed border-navy/25 hover:border-gold rounded-xl px-4 py-3 bg-offwhite/40 cursor-pointer flex items-center gap-3 min-h-[48px] transition-colors"
                >
                  <Upload size={18} className="text-gold shrink-0" />
                  <span className="font-ui text-xs text-charcoal/80 truncate">
                    {attachmentName || "Select BOQ PDF, Excel, or site list..."}
                  </span>
                  <input
                    id="quote-upload"
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* 7b. Message (Optional) */}
            <div>
              <label
                htmlFor="quote-message"
                className="block font-ui text-xs font-semibold text-navy uppercase tracking-wider mb-2"
              >
                Additional Message / Installation Needs{" "}
                <span className="text-charcoal/40">(Optional)</span>
              </label>
              <textarea
                id="quote-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Let us know if you also require installation, preferred brands, or delivery timeline..."
                className="w-full border border-navy/15 rounded-xl px-4 py-3.5 bg-offwhite/40 focus:bg-white font-ui text-sm text-charcoal focus:border-gold outline-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="w-full sm:flex-1 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-ui font-semibold py-4 px-8 rounded-full shadow-lg transition-colors min-h-[54px] text-sm uppercase tracking-wider flex items-center justify-center gap-2.5"
              >
                <MessageCircle size={20} />
                Submit Quote Request via WhatsApp
              </button>

              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-navy/20 text-navy hover:border-gold hover:text-gold font-ui font-semibold text-sm transition-colors min-h-[54px]"
              >
                <Phone size={17} />
                Call {BUSINESS_INFO.primaryPhoneDisplay}
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs font-ui text-charcoal/60 pt-1">
              <ShieldCheck size={15} className="text-gold shrink-0" />
              <span>
                Direct manufacturer pricing • No obligation • Typically responds in under 30 minutes
              </span>
            </div>
          </form>
        </div>
      )}

      <div className="mt-10">
        <TrustBadges />
      </div>
    </div>
  );
}
