"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, MessageSquare, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white ${
        scrolled
          ? "shadow-sm border-b border-slate-200/80 py-2.5"
          : "border-b border-slate-100 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding - Clean & compact on mobile */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-white rounded-lg p-0.5 border border-slate-100 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Dream Solar Energy"
                width={48}
                height={48}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <div className="leading-tight">
              <span
                className="block font-black text-base sm:text-lg text-[#0B2545] tracking-tight group-hover:text-amber-600 transition-colors"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                DREAM <span className="text-[#F59E0B]">SOLAR</span>
              </span>
              <span className="hidden sm:block text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
                Clean Energy • Brighter Tomorrow
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              ["Home", "#"],
              ["Products", "#products"],
              ["Savings Calculator", "#calculator"],
              ["Reviews", "#reviews"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-semibold text-slate-700 hover:text-[#0B2545] transition-colors py-1 hover:border-b-2 hover:border-[#F59E0B]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:03202200884"
              className="flex items-center gap-2 border border-slate-300 hover:border-[#0B2545] text-[#0B2545] font-bold text-xs px-3.5 py-2.5 rounded-lg transition-all hover:bg-slate-50"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <Phone className="w-3.5 h-3.5 text-[#0B2545]" />
              <span>0320-2200884</span>
            </a>
            <a
              href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20would%20like%20to%20inquire%20about%20solar%20systems."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-all shadow-xs active:scale-95"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Hamburger Menu button - Clean, uncrowded */}
          <div className="flex md:hidden items-center">
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

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 py-5 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {[
            ["Home", "#"],
            ["Products", "#products"],
            ["Savings Calculator", "#calculator"],
            ["Reviews", "#reviews"],
            ["Contact & Location", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-bold text-slate-800 hover:text-amber-600 py-2 border-b border-slate-100"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {label}
            </a>
          ))}

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="tel:03202200884"
              className="flex items-center justify-center gap-2 border border-slate-300 text-[#0B2545] font-bold py-2.5 rounded-xl text-sm hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 text-amber-500" /> Call: 0320-2200884
            </a>
            <a
              href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20would%20like%20to%20inquire%20about%20solar%20systems."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-2.5 rounded-xl text-sm hover:bg-[#1EBE5D]"
            >
              <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
