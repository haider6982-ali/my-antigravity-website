"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, Menu, X, Zap } from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useQuoteModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products & Packages", href: "/products" },
    { label: "Services & Installations", href: "/services" },
    { label: "Savings Calculator", href: "/calculator" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F7F4]/95 backdrop-blur-md shadow-site border-b border-[#E2DFD6] py-2.5"
          : "bg-[#F8F7F4]/90 backdrop-blur-sm border-b border-[#E2DFD6]/70 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">

          {/* Logo Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink min-w-0 pr-1">
            <div className="relative flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-[8px] overflow-hidden border border-[#E2DFD6] bg-white p-0.5 flex items-center justify-center shadow-site">
              <div className="relative w-full h-full rounded-[6px] overflow-hidden flex items-center justify-center">
                <Image
                  src="/dream-solar-logo.jpg"
                  alt="Dream Solar Energy Logo"
                  fill
                  priority
                  className="object-contain scale-[0.90]"
                  sizes="48px"
                />
              </div>
            </div>

            <div className="leading-tight min-w-0">
              <span
                className="block font-black text-base sm:text-lg tracking-tight group-hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <span className="text-[#1B2A4A]">DREAM</span>{" "}
                <span className="text-[#F7941D]">SOLAR</span>{" "}
                <span className="text-[#3C8C2E]">ENERGY</span>
              </span>
              <span className="hidden sm:block text-[10px] font-semibold text-[#5B6472] tracking-wider uppercase">
                Solar Energy Specialists
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <Link
                  key={label}
                  href={href}
                  className={`relative text-xs xl:text-sm font-bold py-2 px-3 rounded-[8px] transition-colors ${
                    active
                      ? "text-[#1B2A4A] bg-[#EFEDE7]"
                      : "text-[#5B6472] hover:text-[#1B2A4A] hover:bg-[#EFEDE7]/70"
                  }`}
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#F7941D] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Primary Action Button */}
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-1.5 bg-[#F7941D] hover:bg-[#EE6B00] text-[#0F1B2E] font-bold text-xs px-4 py-2.5 rounded-[8px] transition-colors shadow-site"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <Zap className="w-3.5 h-3.5 fill-[#0F1B2E] text-[#0F1B2E]" />
              <span>Get Free Quote</span>
            </button>

            {/* Secondary WhatsApp Action */}
            <a
              href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20would%20like%20to%20inquire%20about%20solar%20systems."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#1B2A4A] hover:bg-[#1B2A4A] text-[#1B2A4A] hover:text-[#F8F7F4] font-bold text-xs px-3.5 py-2.5 rounded-[8px] transition-colors"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-1 bg-[#F7941D] hover:bg-[#EE6B00] text-[#0F1B2E] font-bold text-xs px-3 py-1.5 rounded-[8px] transition-colors shadow-site"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <Zap className="w-3 h-3 fill-[#0F1B2E] text-[#0F1B2E]" />
              <span>Quote</span>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#14202F] p-1.5 rounded-[8px] hover:bg-[#EFEDE7] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden bg-[#F8F7F4] border-b border-[#E2DFD6] px-4 py-4 shadow-site overflow-hidden"
          >
            <div className="flex flex-col gap-1 max-h-[75vh] overflow-y-auto">
              {navLinks.map(({ label, href }) => {
                const active = isActive(href);
                return (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm font-bold py-2.5 px-3 rounded-[8px] transition-colors flex items-center justify-between ${
                      active
                        ? "text-[#1B2A4A] bg-[#EFEDE7] border-l-2 border-[#F7941D]"
                        : "text-[#5B6472] hover:text-[#1B2A4A] hover:bg-[#EFEDE7]/70"
                    }`}
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    <span>{label}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#F7941D]" />}
                  </Link>
                );
              })}

              {/* Mobile WhatsApp Action */}
              <div className="pt-3 border-t border-[#E2DFD6] mt-2 flex flex-col gap-2">
                <a
                  href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20would%20like%20to%20inquire%20about%20solar%20systems."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 border border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-[#F8F7F4] font-bold text-xs py-2.5 rounded-[8px] transition-colors"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (0320 2200884)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
