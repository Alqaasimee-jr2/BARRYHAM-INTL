"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  ExternalLink,
  FileText,
} from "lucide-react";
import { BUSINESS_INFO, STICKY_WHATSAPP_LINK } from "@/lib/constants";
import { buildContactSubmissionWhatsAppLink } from "@/lib/whatsapp";
import { trackConversion } from "@/lib/analytics";

function InstagramIcon({
  className = "",
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState<string | null>(
    null
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappUrl = buildContactSubmissionWhatsAppLink(formData);

    trackConversion("quote_submitted", {
      source: "contact_page_form",
    });

    setSubmittedWhatsappUrl(whatsappUrl);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* Left Column: Showrooms, Opening Hours & Maps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col gap-8"
        >
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-3 flex items-center gap-3">
              <MapPin className="text-gold shrink-0" />
              Visit Our Lagos Showrooms
            </h2>
            <p className="font-ui text-sm text-charcoal/80 mb-6">
              Inspect genuine sanitary ware, taps, concealed cisterns, water heaters, and cables in person at either of our Lagos locations.
            </p>

            {/* Opening Hours Banner */}
            <div className="bg-navy text-white p-5 rounded-2xl mb-8 flex items-start gap-4">
              <Clock className="text-gold shrink-0 mt-0.5" size={22} />
              <div>
                <h3 className="font-heading font-semibold text-base text-gold">
                  Showroom Opening Hours
                </h3>
                <p className="font-ui text-sm text-offwhite/90 mt-1">
                  {BUSINESS_INFO.openingHours.days}: {BUSINESS_INFO.openingHours.time}
                </p>
                <p className="font-ui text-xs text-offwhite/70 mt-1">
                  Same-day showroom pickup &amp; 24–48hr delivery across Lagos Island &amp; Mainland.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {BUSINESS_INFO.showrooms.map((showroom, index) => (
                <div
                  key={showroom.id}
                  className="bg-white p-6 rounded-2xl border border-navy/10 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-lg text-navy">
                      Showroom {index + 1} — {showroom.name}
                    </h3>
                    <Link
                      href={showroom.slug}
                      className="font-ui text-xs font-semibold text-gold hover:underline"
                    >
                      View Showroom Page →
                    </Link>
                  </div>
                  <p className="font-ui text-sm text-charcoal/80 mb-3">
                    {showroom.fullAddress}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <a
                      href={showroom.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-ui font-semibold text-navy hover:text-gold transition-colors"
                    >
                      <ExternalLink size={14} />
                      Open in Google Maps
                    </a>
                  </div>
                  <div className="w-full aspect-video rounded-xl overflow-hidden border border-navy/10">
                    <iframe
                      title={`${showroom.name} Map`}
                      src={showroom.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Direct Contact Details, WhatsApp & Enquiry Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col gap-6 bg-white p-8 rounded-3xl border border-navy/10 shadow-md h-fit"
        >
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-2">
              Direct Contact &amp; WhatsApp Desk
            </h2>
            <p className="font-ui text-sm text-charcoal/75">
              Call, WhatsApp, or send your project requirements directly to our sales team.
            </p>
          </div>

          <div className="space-y-4">
            {/* Primary WhatsApp CTA */}
            <a
              href={STICKY_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-4 p-4 border-2 border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/15 rounded-2xl transition-all font-ui text-sm text-navy font-semibold text-left min-h-[56px]"
            >
              <div className="p-2.5 rounded-full bg-[#25D366] text-white shrink-0">
                <MessageCircle size={22} />
              </div>
              <div className="flex-grow">
                <span className="text-base font-bold block text-navy">
                  Chat on WhatsApp ({BUSINESS_INFO.whatsappDisplay})
                </span>
                <span className="text-xs text-charcoal/70 font-normal">
                  Fastest response • Instant price checks &amp; proforma invoices
                </span>
              </div>
            </a>

            {/* Phone Numbers */}
            <div className="flex items-start gap-4 p-4 border border-navy/10 rounded-2xl">
              <Phone className="text-gold shrink-0 mt-1" size={20} />
              <div className="flex flex-col gap-1.5 w-full">
                <span className="font-ui text-xs font-semibold text-charcoal/50 uppercase tracking-wider">
                  Telephone Lines ({BUSINESS_INFO.openingHours.shortDisplay})
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                  {BUSINESS_INFO.phones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:${phone.raw}`}
                      className="font-ui text-sm font-semibold text-navy hover:text-gold transition-colors bg-offwhite px-3 py-2 rounded-lg text-center"
                    >
                      {phone.display}
                      <span className="block text-[10px] font-normal text-charcoal/60">
                        {phone.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email & Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-3 p-4 border border-navy/10 rounded-2xl hover:border-gold hover:text-gold transition-all font-ui text-sm text-charcoal min-h-[48px]"
              >
                <Mail className="text-gold shrink-0" size={18} />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-charcoal/50 block">
                    Email Address
                  </span>
                  <span className="font-semibold text-navy">{BUSINESS_INFO.email}</span>
                </div>
              </a>

              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-pink-500/20 bg-pink-500/5 hover:bg-pink-500/10 rounded-2xl transition-all font-ui text-sm text-charcoal min-h-[48px]"
              >
                <InstagramIcon className="text-pink-500 shrink-0" size={18} />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-charcoal/50 block">
                    Instagram
                  </span>
                  <span className="font-semibold text-navy">
                    {BUSINESS_INFO.socials.instagramHandle}
                  </span>
                </div>
              </a>
            </div>

            <Link
              href="/request-quote"
              className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-gold/10 hover:bg-gold/20 text-navy font-ui font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <FileText size={16} className="text-gold" />
              Have a full project BOQ? Use our Request a Quote page →
            </Link>
          </div>

          <div className="border-t border-navy/10 my-2" />

          {/* Direct WhatsApp Inquiry Form */}
          {submittedWhatsappUrl ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center flex flex-col items-center gap-3">
              <CheckCircle2 size={36} className="text-emerald-600" />
              <h3 className="font-heading text-xl font-bold text-emerald-950">
                Thank you. Our team will contact you shortly.
              </h3>
              <p className="font-ui text-xs text-emerald-800 leading-relaxed max-w-md">
                Your message has been formatted for our WhatsApp sales desk. Click below if WhatsApp did not open automatically.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mt-2">
                <a
                  href={submittedWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy hover:bg-gold text-white font-ui font-semibold text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle size={15} className="text-gold" />
                  Open WhatsApp Chat
                </a>
                <button
                  type="button"
                  onClick={() => setSubmittedWhatsappUrl(null)}
                  className="text-xs font-ui font-semibold text-emerald-800 underline px-3 py-2"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <h3 className="font-heading font-semibold text-xl text-navy">
                Send a Quick Message via WhatsApp
              </h3>
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-ui text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5"
                >
                  Full Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="w-full border border-navy/15 rounded-xl px-4 py-3 bg-white font-ui text-sm text-charcoal focus:border-gold outline-none min-h-[46px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block font-ui text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5"
                  >
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+234..."
                    className="w-full border border-navy/15 rounded-xl px-4 py-3 bg-white font-ui text-sm text-charcoal focus:border-gold outline-none min-h-[46px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-ui text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5"
                  >
                    Email Address (Optional)
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="client@example.com"
                    className="w-full border border-navy/15 rounded-xl px-4 py-3 bg-white font-ui text-sm text-charcoal focus:border-gold outline-none min-h-[46px]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-ui text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5"
                >
                  Message / Required Fittings *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us the products, brands, or installation support you need..."
                  className="w-full border border-navy/15 rounded-xl px-4 py-3 bg-white font-ui text-sm text-charcoal focus:border-gold outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-navy hover:bg-gold text-white font-ui font-semibold py-4 rounded-xl transition-colors min-h-[48px] uppercase text-xs tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Send Message to Our Team on WhatsApp
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
