"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
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
              mobileMenuOpen ? "text-white" : isScrolled ? "text-navy" : "text-white md:text-navy",
              // We'll make it navy on desktop if not scrolled, actually wait:
              // The hero is navy gradient. So if not scrolled, text should probably be white on desktop and mobile.
              // Let's use white when not scrolled, navy when scrolled.
              isScrolled ? "text-navy" : "text-white"
            )}
          >
            BIL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "font-ui text-sm uppercase tracking-wider transition-colors hover:text-gold relative",
                  isScrolled ? "text-charcoal" : "text-white/90",
                  isActive && "font-semibold"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="desktop-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </Link>
            );
          })}
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
            className="fixed inset-0 bg-navy z-40 flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative text-white font-heading text-3xl tracking-wide min-h-[44px] flex items-center"
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
