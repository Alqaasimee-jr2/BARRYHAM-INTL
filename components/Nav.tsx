"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { BUSINESS_INFO, STICKY_WHATSAPP_LINK } from "@/lib/constants";

const PRODUCT_DROPDOWN_LINKS = [
  { name: "All Products Catalogue", href: "/products" },
  { name: "Sanitary Ware in Lagos", href: "/sanitary-ware-lagos" },
  { name: "Bathroom Fittings Nigeria", href: "/bathroom-fittings-nigeria" },
  { name: "Plumbing Fittings in Lagos", href: "/plumbing-fittings-lagos" },
  { name: "Electrical Fittings & Cables", href: "/electrical-fittings-lagos" },
  { name: "Ariston Water Heaters", href: "/water-heaters-nigeria" },
  { name: "Authorised Brands Supplied", href: "/brands" },
];

const SERVICE_DROPDOWN_LINKS = [
  { name: "All Supply & Installation Services", href: "/services" },
  { name: "Bulk Supply for Contractors", href: "/bulk-supply-contractors" },
  { name: "Delivery & Installation Support", href: "/delivery-installation" },
  { name: "Dopemu-Agege Showroom", href: "/dopemu-showroom" },
  { name: "Alimosho (LASU-Isheri) Showroom", href: "/alimosho-showroom" },
];

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products", dropdown: PRODUCT_DROPDOWN_LINKS },
  { name: "Services", href: "/services", dropdown: SERVICE_DROPDOWN_LINKS },
  { name: "Brands", href: "/brands" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHomeTop = pathname === "/" && !isScrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top NAP & Hours Bar (Directive 1.5) */}
      <div className="bg-navy text-offwhite/90 border-b border-white/10 text-[11px] font-ui">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12 py-1.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="inline-flex items-center gap-1.5 hover:text-gold transition-colors font-medium"
            >
              <Phone size={12} className="text-gold shrink-0" />
              <span>{BUSINESS_INFO.primaryPhoneDisplay}</span>
            </a>
            <a
              href={STICKY_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle size={12} className="text-[#25D366] shrink-0" />
              <span>WhatsApp: {BUSINESS_INFO.whatsappDisplay}</span>
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Mail size={12} className="text-gold shrink-0" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>

          <div className="hidden xl:flex items-center gap-5 text-offwhite/80">
            <Link
              href="/dopemu-showroom"
              className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
              title={BUSINESS_INFO.showrooms[0].fullAddress}
            >
              <MapPin size={12} className="text-gold shrink-0" />
              <span>Dopemu: Cement Bus Stop, Agege</span>
            </Link>
            <Link
              href="/alimosho-showroom"
              className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
              title={BUSINESS_INFO.showrooms[1].fullAddress}
            >
              <MapPin size={12} className="text-gold shrink-0" />
              <span>Alimosho: Petrocam, LASU-Isheri Rd</span>
            </Link>
            <span className="inline-flex items-center gap-1.5 text-gold font-medium">
              <Clock size={12} className="shrink-0" />
              <span>{BUSINESS_INFO.openingHours.shortDisplay}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={clsx(
          "transition-all duration-300",
          isHomeTop
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-white/95 backdrop-blur-md shadow-sm py-3"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="z-50 flex items-center gap-2.5">
            <span className="font-heading font-bold text-2xl tracking-wide text-navy">
              BIL
            </span>
            <span className="hidden sm:inline-block font-ui text-[11px] font-semibold uppercase tracking-widest text-charcoal/70 border-l border-navy/15 pl-2.5">
              Barryham Int&apos;l Ltd
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.dropdown &&
                  link.dropdown.some((d) => pathname === d.href));

              if (link.dropdown) {
                return (
                  <div key={link.name} className="relative group py-2">
                    <Link
                      href={link.href}
                      className={clsx(
                        "font-ui text-xs xl:text-sm uppercase tracking-wider transition-colors hover:text-gold inline-flex items-center gap-1 text-charcoal",
                        isActive && "font-semibold text-navy"
                      )}
                    >
                      {link.name}
                      <ChevronDown size={14} className="opacity-60" />
                    </Link>
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden flex flex-col py-2 border border-navy/10">
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="px-4 py-2.5 text-xs font-ui text-charcoal hover:bg-offwhite hover:text-gold transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "font-ui text-xs xl:text-sm uppercase tracking-wider transition-colors hover:text-gold relative py-2 text-charcoal",
                    isActive && "font-semibold text-navy"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="desktop-active"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    />
                  )}
                </Link>
              );
            })}

            <div className="flex items-center gap-2.5 pl-3 border-l border-navy/10">
              <Link
                href="/request-quote"
                className="bg-navy hover:bg-gold text-white px-4 py-2.5 rounded-full font-ui text-xs font-semibold uppercase tracking-wider transition-all shadow-sm inline-flex items-center gap-1.5 min-h-[40px]"
              >
                <FileText size={14} />
                Request Quote
              </Link>
              <a
                href={STICKY_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-2.5 rounded-full font-ui text-xs font-semibold uppercase tracking-wider transition-all shadow-sm inline-flex items-center gap-1.5 min-h-[40px]"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
          </nav>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden z-50">
            <Link
              href="/request-quote"
              className="bg-navy text-white px-3 py-2 rounded-full font-ui text-[11px] font-semibold uppercase tracking-wider min-h-[38px] flex items-center"
            >
              Get Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={clsx(
                "p-2 -mr-2 flex items-center justify-center min-h-[44px] min-w-[44px]",
                mobileMenuOpen ? "text-white" : "text-navy"
              )}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-navy z-40 flex flex-col justify-between px-6 overflow-y-auto pt-28 pb-10"
          >
            <nav className="flex flex-col gap-4 w-full max-w-md mx-auto">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="border-b border-white/10 pb-3">
                  <Link
                    href={link.href}
                    className="text-white font-heading text-2xl tracking-wide flex items-center justify-between py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                  </Link>
                  {link.dropdown && (
                    <div className="grid grid-cols-1 gap-1.5 mt-2 pl-3 border-l border-gold/40">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="text-offwhite/80 hover:text-gold font-ui text-xs py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <Link
                  href="/request-quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-gold text-white font-ui font-semibold text-sm uppercase tracking-wider py-3.5 rounded-full text-center flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <FileText size={16} />
                  Request a Quote
                </Link>
                <a
                  href={STICKY_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white font-ui font-semibold text-sm uppercase tracking-wider py-3.5 rounded-full text-center flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp ({BUSINESS_INFO.primaryPhoneDisplay})
                </a>
              </div>

              {/* Mobile NAP Info Block */}
              <div className="mt-4 bg-white/5 rounded-2xl p-4 text-xs font-ui text-offwhite/80 space-y-2.5 border border-white/10">
                <div className="flex items-start gap-2">
                  <Phone size={14} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:+2348034750270" className="underline mr-2">0803 475 0270</a>
                    <a href="tel:+2348084446319" className="underline mr-2">0808 444 6319</a>
                    <a href="tel:+2349090381508" className="underline">0909 038 1508</a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail size={14} className="text-gold shrink-0 mt-0.5" />
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="underline">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Dopemu Showroom:</p>
                    <p>{BUSINESS_INFO.showrooms[0].fullAddress}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Alimosho Showroom:</p>
                    <p>{BUSINESS_INFO.showrooms[1].fullAddress}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gold font-medium pt-1">
                  <Clock size={14} className="shrink-0" />
                  <span>{BUSINESS_INFO.openingHours.display}</span>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
