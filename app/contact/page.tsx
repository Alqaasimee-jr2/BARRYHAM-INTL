"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, MessageSquare, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

function InstagramIcon({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Fade up animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Also trigger mailto as fallback/direct client action
      const subject = encodeURIComponent("Website Contact Inquiry from " + formData.name);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:bihl.sales@gmail.com?subject=${subject}&body=${body}`;

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleWhatsAppGeneral = () => {
    const link = buildWhatsAppLink("2348034750270", [], "general");
    window.open(link, "_blank");
  };

  return (
    <main className="flex min-h-screen flex-col bg-offwhite pt-24 pb-32">
      {/* Hero Header */}
      <section className="py-16 px-6 lg:px-12 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Start a Conversation
          </h1>
          <p className="font-ui text-lg text-offwhite/90 leading-relaxed max-w-xl mx-auto">
            Have an upcoming build or renovation project? Connect with our experts today for
            your custom material supply quotes and installation services. We&apos;re here to help you build better.
          </p>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column: Map & Addresses */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col gap-10"
          >
            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-8 flex items-center gap-3">
                <MapPin className="text-gold" />
                Our Locations
              </h2>

              <div className="space-y-8">
                {/* Location 1 */}
                <div className="bg-white p-6 rounded-xl border border-navy/5 shadow-sm">
                  <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                    Address 1 — Main Showroom
                  </h3>
                  <p className="font-ui text-sm text-charcoal/80 mb-4">
                    Block B, Suite 3, Association Plaza, Cement Bus Stop,
                    Lagos-Abeokuta Express Way, Dopemu-Agege, Lagos.
                  </p>
                  <div className="w-full aspect-video rounded-lg overflow-hidden border border-navy/10">
                    <iframe
                      title="BIL Dopemu-Agege Showroom Map"
                      src="https://maps.google.com/maps?q=6.6072661,3.318393&z=17&output=embed"
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

                {/* Location 2 */}
                <div className="bg-white p-6 rounded-xl border border-navy/5 shadow-sm">
                  <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                    Address 2 — Alimosho Office
                  </h3>
                  <p className="font-ui text-sm text-charcoal/80 mb-4">
                    Suite 1, Petrocam Gas Station, Odo Eran/Hotel Bus-stop,
                    Along LASU-Isheri/Igando Road, Alimosho, Lagos.
                  </p>
                  <div className="w-full aspect-video rounded-lg overflow-hidden border border-navy/10">
                    <iframe
                      title="BIL Alimosho Office Map"
                      src="https://maps.google.com/maps?q=6.5734884,3.2559822&z=17&output=embed"
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
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Details, WhatsApp & Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col gap-8 bg-white p-8 rounded-2xl border border-navy/5 shadow-md h-fit"
          >
            <h2 className="font-heading font-bold text-2xl text-navy mb-4">
              Get In Touch
            </h2>

            {/* Quick CTAs */}
            <div className="space-y-4">
              {/* Phone Numbers */}
              <div className="flex items-start gap-4 p-4 border border-navy/5 rounded-xl">
                <Phone className="text-gold shrink-0 mt-1" size={20} />
                <div className="flex flex-col gap-1">
                  <span className="font-ui text-xs font-semibold text-charcoal/50 uppercase tracking-wider mb-1">
                    Call Us
                  </span>
                  <a
                    href="tel:+2348034750270"
                    className="font-ui text-sm text-charcoal hover:text-gold transition-colors min-h-[44px] flex items-center"
                  >
                    0803 475 0270
                  </a>
                  <a
                    href="tel:+2348084446319"
                    className="font-ui text-sm text-charcoal hover:text-gold transition-colors min-h-[44px] flex items-center"
                  >
                    0808 444 6319
                  </a>
                  <a
                    href="tel:+2349090381508"
                    className="font-ui text-sm text-charcoal hover:text-gold transition-colors min-h-[44px] flex items-center"
                  >
                    0909 038 1508
                  </a>
                </div>
              </div>

              <a
                href="mailto:bihl.sales@gmail.com"
                className="flex items-center gap-4 p-4 border border-navy/5 rounded-xl hover:border-gold hover:text-gold transition-all font-ui text-sm text-charcoal min-h-[44px]"
              >
                <Mail className="text-gold shrink-0" size={20} />
                <span>bihl.sales@gmail.com</span>
              </a>

              <a
                href="https://www.instagram.com/barryhamintl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-pink-500/20 bg-pink-500/5 hover:bg-pink-500/10 rounded-xl transition-all font-ui text-sm text-charcoal min-h-[44px]"
              >
                <InstagramIcon className="text-pink-500 shrink-0" size={20} />
                <div>
                  <span className="font-semibold block text-navy">Follow us on Instagram</span>
                  <span className="text-xs text-charcoal/60">@barryhamintl — See our latest projects & catalog</span>
                </div>
              </a>

              <button
                onClick={handleWhatsAppGeneral}
                className="w-full flex items-center gap-4 p-4 border border-[#B08D57] bg-gold/5 hover:bg-gold/10 rounded-xl transition-all font-ui text-sm text-gold font-semibold text-left min-h-[44px]"
              >
                <MessageSquare className="shrink-0" size={20} />
                <div className="flex-grow">
                  <span>Chat directly via WhatsApp</span>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-charcoal/60 font-normal">
                    <Clock size={12} />
                    <span>Typically responds within 1 hour.</span>
                  </div>
                </div>
              </button>
            </div>

            <div className="border-t border-navy/5 my-4" />

            {/* Email Inquiry Form */}
            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center flex flex-col items-center gap-3">
                <CheckCircle2 size={36} className="text-emerald-600" />
                <h3 className="font-heading text-lg font-bold text-emerald-900">Inquiry Sent Successfully</h3>
                <p className="font-ui text-xs text-emerald-800 leading-relaxed">
                  Thank you! Your message has been routed to our sales team at bihl.sales@gmail.com. We will respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-ui font-semibold text-emerald-700 underline hover:text-emerald-900"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block font-ui text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full border border-navy/10 rounded-lg px-4 py-3 bg-white font-ui text-sm text-charcoal focus:border-gold outline-none min-h-[44px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-ui text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234..."
                      className="w-full border border-navy/10 rounded-lg px-4 py-3 bg-white font-ui text-sm text-charcoal focus:border-gold outline-none min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block font-ui text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="client@example.com"
                      className="w-full border border-navy/10 rounded-lg px-4 py-3 bg-white font-ui text-sm text-charcoal focus:border-gold outline-none min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-ui text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2">
                    Message / Specifications
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Detail your request or required fittings..."
                    className="w-full border border-navy/10 rounded-lg px-4 py-3 bg-white font-ui text-sm text-charcoal focus:border-gold outline-none min-h-[44px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-navy hover:bg-gold text-white font-ui font-semibold py-4 rounded-lg transition-colors min-h-[44px] uppercase text-sm tracking-wider flex items-center justify-center gap-2"
                >
                  {submitting ? "Sending Inquiry..." : "Send Inquiry Email"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
