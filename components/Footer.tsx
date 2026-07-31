import React from "react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const whatsappUrl = buildWhatsAppLink("+2348034750270", [], "general");

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & WhatsApp */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-6">BIL</h3>
            <p className="text-offwhite/80 font-ui text-sm mb-6 leading-relaxed">
              Top-tier fittings and sanitary ware without premium headaches.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold/10 hover:bg-gold/20 text-gold px-4 py-2 rounded-full transition-colors font-ui text-sm min-h-[44px]"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 tracking-wide">Locations</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-gold shrink-0 mt-0.5" />
                <p className="font-ui text-sm text-offwhite/80 leading-relaxed">
                  Dopemu-Agege<br />
                  Association Plaza
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-gold shrink-0 mt-0.5" />
                <p className="font-ui text-sm text-offwhite/80 leading-relaxed">
                  LASU-Isheri/Igando<br />
                  Petrocam Gas Station
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 tracking-wide">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <a href="tel:+2348034750270" className="font-ui text-sm text-offwhite/80 hover:text-white min-h-[44px] md:min-h-0 flex items-center md:items-start transition-colors">
                    0803 475 0270
                  </a>
                  <a href="tel:+2348084446319" className="font-ui text-sm text-offwhite/80 hover:text-white min-h-[44px] md:min-h-0 flex items-center md:items-start transition-colors">
                    0808 444 6319
                  </a>
                  <a href="tel:+2349090381508" className="font-ui text-sm text-offwhite/80 hover:text-white min-h-[44px] md:min-h-0 flex items-center md:items-start transition-colors">
                    0909 038 1508
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-gold shrink-0 mt-0.5" />
                <a
                  href="mailto:bihl.sales@gmail.com"
                  className="font-ui text-sm text-offwhite/80 hover:text-white transition-colors min-h-[44px] flex items-center"
                >
                  bihl.sales@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Products", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="font-ui text-sm text-offwhite/80 hover:text-white transition-colors min-h-[44px] flex items-center"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="font-ui text-xs text-offwhite/60">
            &copy; {new Date().getFullYear()} Barryham Int&apos;l Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
