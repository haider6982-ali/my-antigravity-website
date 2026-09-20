"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageSquare, MapPin, Clock } from "lucide-react";

interface FooterSectionProps {
  onOpenModal: () => void;
}

export default function FooterSection({ onOpenModal }: FooterSectionProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-700 pt-14 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white rounded-lg p-0.5 border border-slate-200 shadow-xs flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Dream Solar Energy"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span
                  className="block font-black text-lg text-[#0B2545] tracking-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  DREAM <span className="text-[#F59E0B]">SOLAR ENERGY</span>
                </span>
                <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Clean Energy • Brighter Tomorrow
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Authorized sales and professional installation of Tier-1 solar panels, hybrid inverters,
              lithium/tubular batteries, and mounting accessories. Serving Vehari and surrounding districts
              with sustainable solar energy solutions.
            </p>

            <div className="pt-2">
              <span className="inline-block text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                Vehari, Punjab, Pakistan
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <p
              className="font-bold text-sm text-[#0B2545] uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                ["Home", "#"],
                ["Solar Packages", "#products"],
                ["Hardware Catalog", "#products"],
                ["Savings Calculator", "#calculator"],
                ["Customer Reviews", "#reviews"],
                ["Contact & Showroom", "#contact"],
              ].map(([title, url]) => (
                <li key={title}>
                  <a href={url} className="text-slate-600 hover:text-[#0B2545] transition-colors">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solar Solutions */}
          <div className="lg:col-span-3">
            <p
              className="font-bold text-sm text-[#0B2545] uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Our Solutions
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>Residential On-Grid &amp; Hybrid Systems</li>
              <li>Commercial &amp; Industrial Solar Plants</li>
              <li>Agricultural Solar Tube Well Setups</li>
              <li>Tier-1 Panels (Jinko, Longi, JA Solar)</li>
              <li>Hybrid Inverters (Knox, Inverex, Huawei)</li>
              <li>Lithium Battery Energy Storage</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <p
              className="font-bold text-sm text-[#0B2545] uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Get In Touch
            </p>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>Allama Iqbal Road, Near Bank of Punjab, Vehari</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <a href="tel:03202200884" className="font-bold text-slate-800 hover:text-amber-600">
                0320-2200884
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <MessageSquare className="w-4 h-4 text-[#25D366] flex-shrink-0" />
              <a
                href="https://wa.me/923202200884"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-emerald-700 hover:text-emerald-800"
              >
                WhatsApp: 0320-2200884
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-500 pt-2 border-t border-slate-200">
              <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
              <div>
                <p>Sat – Thu: 8:00 AM – 7:00 PM</p>
                <p>Friday: 9:00 AM – 12:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>
            © {currentYear} Dream Solar Energy. All rights reserved.
          </span>
          <span>
            Serving: Vehari • Burewala • Mailsi • Lodhran • Sahiwal • South Punjab
          </span>
        </div>
      </div>
    </footer>
  );
}
