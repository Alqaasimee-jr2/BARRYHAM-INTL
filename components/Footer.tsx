import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, Clock, FileText } from "lucide-react";
import { BUSINESS_INFO, STICKY_WHATSAPP_LINK } from "@/lib/constants";

function InstagramIcon({
  className = "",
  size = 18,
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

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Column 1: Brand, NAP Summary & Primary CTAs (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="font-heading font-semibold text-2xl mb-2 text-white">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-gold font-ui text-[11px] uppercase tracking-widest mb-4 font-semibold">
              Authorised Sanitary, Plumbing &amp; Electrical Distributor
            </p>
            <p className="text-offwhite/75 font-ui text-xs md:text-sm mb-6 leading-relaxed">
              Direct distributor and certified installer for Grohe, Ideal Standard, Villeroy &amp; Boch, Roca, Armitage Shanks, Geberit, Varmora, Ariston Water Heaters, and Coleman CTIL cables across Lagos and Nigeria.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={STICKY_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-gold hover:bg-gold/90 text-white px-4 py-2.5 rounded-full transition-colors font-ui font-semibold text-xs uppercase tracking-wider min-h-[40px]"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-1.5 border border-white/20 hover:border-gold hover:text-gold text-white px-4 py-2.5 rounded-full transition-colors font-ui font-semibold text-xs uppercase tracking-wider min-h-[40px]"
              >
                <FileText size={15} />
                Request Quote
              </Link>
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-offwhite hover:text-white px-4 py-2.5 rounded-full transition-colors font-ui text-xs min-h-[44px] border border-white/10"
              >
                <InstagramIcon size={16} className="text-pink-400" />
                {BUSINESS_INFO.socials.instagramHandle}
              </a>
            </div>
          </div>

          {/* Column 2: Showrooms & Opening Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-lg mb-5 tracking-wide text-gold">
              Lagos Showrooms &amp; Hours
            </h4>
            <div className="space-y-4">
              {BUSINESS_INFO.showrooms.map((showroom) => (
                <div key={showroom.id} className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold shrink-0 mt-1" />
                  <div className="font-ui text-xs text-offwhite/85 leading-relaxed">
                    <Link
                      href={showroom.slug}
                      className="font-semibold text-white hover:text-gold underline-offset-2 hover:underline block mb-0.5"
                    >
                      {showroom.name}
                    </Link>
                    <p>{showroom.fullAddress}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                <Clock size={18} className="text-gold shrink-0 mt-0.5" />
                <div className="font-ui text-xs text-offwhite/90">
                  <span className="font-semibold text-white block">Opening Hours:</span>
                  <span>{BUSINESS_INFO.openingHours.display}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Direct Contact Details (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-lg mb-5 tracking-wide text-gold">
              Direct Contact
            </h4>
            <div className="space-y-4 font-ui text-xs">
              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-gold shrink-0 mt-1" />
                <div className="flex flex-col gap-1.5">
                  <span className="text-offwhite/60 uppercase tracking-wider text-[10px]">
                    Phone &amp; WhatsApp
                  </span>
                  {BUSINESS_INFO.phones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:${phone.raw}`}
                      className="text-offwhite/90 hover:text-gold transition-colors font-medium py-0.5"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle size={16} className="text-[#25D366] shrink-0 mt-1" />
                <div>
                  <span className="text-offwhite/60 uppercase tracking-wider text-[10px] block">
                    WhatsApp Desk
                  </span>
                  <a
                    href={STICKY_WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-offwhite/90 hover:text-[#25D366] transition-colors font-medium"
                  >
                    {BUSINESS_INFO.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail size={16} className="text-gold shrink-0 mt-1" />
                <div>
                  <span className="text-offwhite/60 uppercase tracking-wider text-[10px] block">
                    Sales Email
                  </span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-offwhite/90 hover:text-gold transition-colors break-all"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Products, Locations & Company Links (3 cols) */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-heading font-semibold text-base mb-4 tracking-wide text-gold">
                Categories
              </h4>
              <ul className="space-y-2 font-ui text-xs">
                <li>
                  <Link href="/sanitary-ware-lagos" className="text-offwhite/80 hover:text-white transition-colors">
                    Sanitary Ware Lagos
                  </Link>
                </li>
                <li>
                  <Link href="/plumbing-fittings-lagos" className="text-offwhite/80 hover:text-white transition-colors">
                    Plumbing Fittings Lagos
                  </Link>
                </li>
                <li>
                  <Link href="/electrical-fittings-lagos" className="text-offwhite/80 hover:text-white transition-colors">
                    Electrical Fittings Lagos
                  </Link>
                </li>
                <li>
                  <Link href="/bathroom-fittings-nigeria" className="text-offwhite/80 hover:text-white transition-colors">
                    Bathroom Fittings Nigeria
                  </Link>
                </li>
                <li>
                  <Link href="/water-heaters-nigeria" className="text-offwhite/80 hover:text-white transition-colors">
                    Water Heaters Nigeria
                  </Link>
                </li>
                <li>
                  <Link href="/bulk-supply-contractors" className="text-offwhite/80 hover:text-white transition-colors">
                    Bulk Contractor Supply
                  </Link>
                </li>
                <li>
                  <Link href="/delivery-installation" className="text-offwhite/80 hover:text-white transition-colors">
                    Delivery &amp; Installation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-base mb-4 tracking-wide text-gold">
                Company
              </h4>
              <ul className="space-y-2 font-ui text-xs">
                <li>
                  <Link href="/products" className="text-offwhite/80 hover:text-white transition-colors">
                    Product Catalogue
                  </Link>
                </li>
                <li>
                  <Link href="/brands" className="text-offwhite/80 hover:text-white transition-colors">
                    Partner Brands
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-offwhite/80 hover:text-white transition-colors">
                    Completed Projects
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-offwhite/80 hover:text-white transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-offwhite/80 hover:text-white transition-colors">
                    About Barryham
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-offwhite/80 hover:text-white transition-colors">
                    Buying Guides &amp; Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-offwhite/80 hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-offwhite/80 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-ui text-xs text-offwhite/60">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p className="font-ui text-xs text-offwhite/60">
            Showrooms in Dopemu-Agege &amp; Alimosho, Lagos • Nationwide Delivery across Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
