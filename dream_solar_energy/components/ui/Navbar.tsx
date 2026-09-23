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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md shadow-lg border-b border-amber-100 py-1.5"
          : "bg-white border-b border-slate-100 py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo Branding — prominent real logo */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            {/* Circular Zoomed-out Logo */}
            <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-sky-300 shadow-md group-hover:shadow-lg group-hover:border-sky-400 transition-all bg-[#5CB3E8] p-1 flex items-center justify-center">
              <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/dream-solar-logo.jpg"
                  alt="Dream Solar Energy Logo"
                  fill
                  priority
                  className="object-contain scale-[0.86] group-hover:scale-90 transition-transform duration-300"
                  sizes="(max-width: 640px) 56px, 64px"
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
                <span>Clean Energy</span>
                <span className="w-1 h-1 rounded-full bg-[#16A34A]" />
                <span>Brighter Tomorrow</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {[
              ["Home", "#"],
              ["Products", "#products"],
              ["Calculator", "#calculator"],
              ["Reviews", "#reviews"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-semibold text-slate-600 hover:text-[#0B2545] hover:bg-amber-50 transition-all py-2 px-3.5 rounded-lg"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="tel:03202200884"
              className="flex items-center gap-2 border border-slate-200 hover:border-amber-400 text-[#0B2545] font-bold text-xs px-4 py-2.5 rounded-lg transition-all hover:bg-amber-50"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>0320-2200884</span>
            </a>
            <a
              href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20would%20like%20to%20inquire%20about%20solar%20systems."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-all shadow-sm active:scale-95"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
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
        <div className="md:hidden bg-white border-b border-slate-200 px-5 py-4 shadow-xl flex flex-col gap-1 animate-in slide-in-from-top-2 duration-200">
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
              className="text-base font-semibold text-slate-700 hover:text-amber-600 hover:bg-amber-50 py-2.5 px-3 rounded-lg transition-all"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {label}
            </a>
          ))}

          <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="tel:03202200884"
              className="flex items-center justify-center gap-2 border border-slate-200 text-[#0B2545] font-bold py-2.5 rounded-lg text-sm hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 text-amber-500" /> Call: 0320-2200884
            </a>
            <a
              href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20would%20like%20to%20inquire%20about%20solar%20systems."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-2.5 rounded-lg text-sm hover:bg-[#1EBE5D]"
            >
              <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
