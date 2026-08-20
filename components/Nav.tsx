"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { buildWhatsAppLink } from "@/lib/whatsapp";

function InstagramIcon({ className = "", size = 18 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "FAQs", href: "/faq" },
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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50">
          <span
            className={clsx(
              "font-heading font-bold text-2xl tracking-wide",
              isScrolled ? "text-navy" : "text-white"
            )}
          >
            BIL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.name === "Products" && pathname.startsWith("/products"));
            
            if (link.name === "Products") {
              return (
                <div key={link.name} className="relative group py-4">
                  <Link
                    href={link.href}
                    className={clsx(
                      "font-ui text-sm uppercase tracking-wider transition-colors hover:text-gold relative block",
                      isScrolled ? "text-charcoal" : "text-white/90",
                      isActive && "font-semibold"
                    )}
                  >
                    {link.name}
                  </Link>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden flex flex-col py-2 border border-navy/5">
                    <Link href="/products?category=sanitary" className="px-4 py-3 text-sm font-ui text-charcoal hover:bg-offwhite hover:text-gold transition-colors">Sanitary Wares & Fittings</Link>
                    <Link href="/products?category=electricals" className="px-4 py-3 text-sm font-ui text-charcoal hover:bg-offwhite hover:text-gold transition-colors">Cables & Lighting Accessories</Link>
                    <Link href="/products?category=plumbing" className="px-4 py-3 text-sm font-ui text-charcoal hover:bg-offwhite hover:text-gold transition-colors">Plumbing Supply & Installation</Link>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "font-ui text-sm uppercase tracking-wider transition-colors hover:text-gold relative py-4",
                  isScrolled ? "text-charcoal" : "text-white/90",
                  isActive && "font-semibold"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="desktop-active"
                    className="absolute bottom-2 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </Link>
            );
          })}

          <div className="flex items-center gap-3 pl-4 border-l border-white/20">
            <a
              href="https://www.instagram.com/barryhamintl/"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "p-2 rounded-full transition-colors flex items-center justify-center min-h-[40px] min-w-[40px]",
                isScrolled ? "text-navy hover:text-gold hover:bg-offwhite" : "text-white/90 hover:text-white hover:bg-white/10"
              )}
              title="Instagram @barryhamintl"
            >
              <InstagramIcon size={19} />
            </a>
            <a
              href={buildWhatsAppLink("+2348034750270", [], "general")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold/90 text-white px-4 py-2 rounded-full font-ui text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 min-h-[40px]"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={clsx(
            "lg:hidden z-50 p-2 -mr-2 flex items-center justify-center min-h-[44px] min-w-[44px]",
            mobileMenuOpen ? "text-white" : isScrolled ? "text-navy" : "text-white"
          )}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-navy z-40 flex flex-col justify-center items-center px-6 overflow-y-auto pt-20 pb-10"
          >
            <nav className="flex flex-col items-center gap-6 w-full max-w-sm">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.name === "Products" && pathname.startsWith("/products"));
                
                if (link.name === "Products") {
                  return (
                    <div key={link.name} className="flex flex-col items-center w-full">
                      <Link
                        href={link.href}
                        className="relative text-white font-heading text-3xl tracking-wide min-h-[44px] flex items-center mb-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="mobile-active"
                            className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gold"
                          />
                        )}
                      </Link>
                      <div className="flex flex-col items-center gap-3 bg-white/5 w-full max-w-xs rounded-2xl p-4">
                        <Link href="/products?category=sanitary" className="text-white/80 hover:text-white font-ui text-base" onClick={() => setMobileMenuOpen(false)}>Sanitary Wares</Link>
                        <Link href="/products?category=electricals" className="text-white/80 hover:text-white font-ui text-base" onClick={() => setMobileMenuOpen(false)}>Cables & Lighting</Link>
                        <Link href="/products?category=plumbing" className="text-white/80 hover:text-white font-ui text-base" onClick={() => setMobileMenuOpen(false)}>Plumbing Supply</Link>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative text-white font-heading text-3xl tracking-wide min-h-[44px] flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="mobile-active"
                        className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gold"
                      />
                    )}
                  </Link>
                );
              })}

              <div className="flex items-center gap-4 pt-6 border-t border-white/10 w-full justify-center">
                <a
                  href="https://www.instagram.com/barryhamintl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-white font-ui text-sm bg-white/10 px-4 py-2.5 rounded-full"
                >
                  <InstagramIcon size={18} className="text-pink-400" />
                  Instagram
                </a>
                <a
                  href={buildWhatsAppLink("+2348034750270", [], "general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-navy font-semibold font-ui text-sm bg-gold px-4 py-2.5 rounded-full"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
