"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageSquare, Menu, X, ArrowRight, Zap } from "lucide-react";
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
    { label: "Contact & Showroom", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2"
          : "bg-white/95 backdrop-blur-sm border-b border-slate-100 py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo Branding */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            {/* Circular Zoomed-out Logo */}
            <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-sky-300 shadow-sm group-hover:shadow-md group-hover:border-sky-400 transition-all bg-[#5CB3E8] p-1 flex items-center justify-center">
              <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/dream-solar-logo.jpg"
                  alt="Dream Solar Energy Logo"
                  fill
                  priority
                  className="object-contain scale-[0.86] group-hover:scale-90 transition-transform duration-300"
                  sizes="(max-width: 640px) 48px, 56px"
                />
              </div>
            </div>

            <div className="leading-tight">
              <span
                className="block font-black text-base sm:text-lg tracking-tight group-hover:opacity-95 transition-opacity"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <span className="text-[#0D2354]">DREAM</span>{" "}
                <span className="text-[#F59E0B]">SOLAR</span>{" "}
                <span className="text-[#16A34A]">ENERGY</span>
              </span>
              <span className="hidden sm:flex items-center gap-1.5 text-[10px] font-bold text-slate-500 tracking-wider uppercase">
                <span>Vehari, Pakistan</span>
                <span className="w-1 h-1 rounded-full bg-[#16A34A]" />
                <span className="text-slate-400">Tariq Mahmood</span>
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
                  className={`text-xs xl:text-sm font-bold py-2 px-3 rounded-lg transition-all ${
                    active
                      ? "text-[#0D2354] bg-sky-50/90 font-extrabold shadow-sm border border-sky-100"
                      : "text-slate-600 hover:text-[#0D2354] hover:bg-slate-50"
                  }`}
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-1.5 bg-[#0D2354] hover:bg-[#163574] text-white font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Get Free Quote</span>
            </button>

            <a
              href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20would%20like%20to%20inquire%20about%20solar%20systems."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs px-3.5 py-2.5 rounded-xl transition-all shadow-sm"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => openModal()}
              className="sm:hidden inline-flex items-center gap-1 bg-[#0D2354] text-white font-bold text-[11px] px-2.5 py-2 rounded-lg"
            >
              <Zap className="w-3 h-3 text-[#F59E0B]" />
              <span>Quote</span>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-800 p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-4 shadow-xl flex flex-col gap-1.5 animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          {navLinks.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-bold py-2.5 px-3.5 rounded-xl transition-all flex items-center justify-between ${
                  active
                    ? "text-[#0D2354] bg-sky-50 font-extrabold border border-sky-100"
                    : "text-slate-700 hover:text-[#0D2354] hover:bg-slate-50"
                }`}
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <span>{label}</span>
                {active && <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />}
              </Link>
            );
          })}

          <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMenuOpen(false);
                openModal();
              }}
              className="flex items-center justify-center gap-2 bg-[#0D2354] text-white font-bold py-2.5 rounded-xl text-xs shadow-sm"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <Zap className="w-4 h-4 text-[#F59E0B]" />
              <span>Request Free Quotation</span>
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="tel:03202200884"
                className="flex items-center justify-center gap-1.5 border border-slate-200 text-[#0D2354] font-bold py-2.5 rounded-xl text-xs hover:bg-slate-50"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>0320-2200884</span>
              </a>
              <a
                href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20would%20like%20to%20inquire%20about%20solar%20systems."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white font-bold py-2.5 rounded-xl text-xs hover:bg-[#1EBE5D]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
