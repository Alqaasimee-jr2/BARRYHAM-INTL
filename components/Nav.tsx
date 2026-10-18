"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  MessageCircle,
  ChevronDown,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { BUSINESS_INFO, STICKY_WHATSAPP_LINK } from "@/lib/constants";

function InstagramIcon({ size = 16 }: { size?: number }) {
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
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const PRODUCT_DROPDOWN_LINKS = [
  { name: "All Products Catalogue", href: "/products" },
  { name: "Sanitary Ware in Lagos", href: "/sanitary-ware-lagos" },
  { name: "Bathroom Fittings Nigeria", href: "/bathroom-fittings-nigeria" },
  { name: "Plumbing Fittings in Lagos", href: "/plumbing-fittings-lagos" },
  { name: "Electrical Cables & Fittings", href: "/electrical-fittings-lagos" },
  { name: "Ariston Water Heaters", href: "/water-heaters-nigeria" },
  { name: "Authorised Brands", href: "/brands" },
];

const SERVICE_DROPDOWN_LINKS = [
  { name: "All Services Overview", href: "/services" },
  { name: "Bulk Supply for Contractors", href: "/bulk-supply-contractors" },
  { name: "Delivery & Installation", href: "/delivery-installation" },
  { name: "Dopemu Showroom (Agege)", href: "/dopemu-showroom" },
  { name: "Alimosho Showroom (LASU-Isheri)", href: "/alimosho-showroom" },
];

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products", dropdown: PRODUCT_DROPDOWN_LINKS },
  { name: "Services", href: "/services", dropdown: SERVICE_DROPDOWN_LINKS },
  { name: "Brands", href: "/brands" },
  { name: "Projects", href: "/projects" },
  { name: "Guides", href: "/blog" },
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={clsx(
          "transition-all duration-300 border-b border-navy/5",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3.5"
            : "bg-white/90 backdrop-blur-sm py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="z-50 flex items-center gap-3 group">
            <span className="font-heading font-bold text-2xl tracking-wide text-navy group-hover:text-gold transition-colors">
              BIL
            </span>
            <span className="hidden sm:inline-block font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 border-l border-navy/15 pl-3">
              Barryham Int&apos;l Ltd
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
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
                        "font-ui text-xs uppercase tracking-wider transition-colors hover:text-gold inline-flex items-center gap-1",
                        isActive
                          ? "font-semibold text-navy"
                          : "text-charcoal/80"
                      )}
                    >
                      {link.name}
                      <ChevronDown size={13} className="opacity-50" />
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-60 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden flex flex-col py-2 border border-navy/10">
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="px-4 py-2 text-xs font-ui text-charcoal/80 hover:bg-offwhite hover:text-gold transition-colors"
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
                    "font-ui text-xs uppercase tracking-wider transition-colors hover:text-gold relative py-2",
                    isActive ? "font-semibold text-navy" : "text-charcoal/80"
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

            <div className="flex items-center gap-3 pl-4 border-l border-navy/10">
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/60 hover:text-gold p-1 transition-colors"
                title="Instagram @barryhamintl"
                aria-label="Instagram"
              >
                <InstagramIcon size={17} />
              </a>

              <Link
                href="/request-quote"
                className="border border-navy/20 hover:border-navy text-navy font-ui text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-colors flex items-center gap-1.5"
              >
                <FileText size={13} />
                Quote
              </Link>

              <a
                href={STICKY_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy hover:bg-gold text-white font-ui text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <MessageCircle size={14} className="text-gold" />
                WhatsApp
              </a>
            </div>
          </nav>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-3 lg:hidden z-50">
            <Link
              href="/request-quote"
              className="border border-navy/20 text-navy font-ui text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-navy flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-navy z-40 flex flex-col justify-between px-6 pt-24 pb-8 overflow-y-auto"
          >
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="border-b border-white/10 pb-3">
                  <Link
                    href={link.href}
                    className="text-white font-heading text-xl font-medium tracking-wide flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                  </Link>
                  {link.dropdown && (
                    <div className="flex flex-col gap-2 mt-2 pl-3">
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="text-offwhite/60 hover:text-gold text-xs font-ui py-1"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href={STICKY_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-navy font-ui text-xs font-bold uppercase tracking-wider py-3 rounded-full text-center flex items-center justify-center gap-2"
              >
                <MessageCircle size={15} />
                Chat on WhatsApp
              </a>
              <p className="text-center text-[11px] font-ui text-offwhite/50">
                {BUSINESS_INFO.primaryPhoneDisplay} · {BUSINESS_INFO.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
