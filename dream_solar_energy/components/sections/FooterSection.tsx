"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageSquare, MapPin, Clock, Mail, User } from "lucide-react";

interface FooterSectionProps {
  onOpenModal: () => void;
}

export default function FooterSection({ onOpenModal }: FooterSectionProps) {
  const currentYear = new Date().getFullYear();

  const MAPS_URL =
    "https://www.google.com/maps/place/30%C2%B002'30.4%22N+72%C2%B021'07.0%22E/@30.0417733,72.3493651,633m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d30.0417733!4d72.35194?hl=en&entry=ttu";

  return (
    <footer className="bg-[#0B2545] text-slate-300 pt-14 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-sky-400/60 shadow-lg flex items-center justify-center flex-shrink-0 bg-[#5CB3E8] p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="/dream-solar-logo.jpg"
                    alt="Dream Solar Energy"
                    fill
                    className="object-contain scale-[0.86]"
                    sizes="64px"
                  />
                </div>
              </div>
              <div>
                <span
                  className="block font-black text-lg text-white tracking-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <span>DREAM</span>{" "}
                  <span className="text-[#F59E0B]">SOLAR</span>{" "}
                  <span className="text-[#22C55E]">ENERGY</span>
                </span>
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Clean Energy • Brighter Tomorrow
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Authorized sales and professional installation of Tier-1 solar panels, hybrid inverters,
              lithium/tubular batteries, and mounting accessories. Serving Vehari and surrounding districts
              with sustainable solar energy solutions.
            </p>

            {/* Owner info */}
            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <div className="w-8 h-8 rounded-lg bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Business Owner</p>
                <p className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                  Tariq Mahmood
                </p>
              </div>
            </div>

            <div className="pt-1">
              <span className="inline-block text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-md">
                Vehari, Punjab, Pakistan
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <p
              className="font-bold text-sm text-white uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                ["Home", "#"],
                ["Solar Packages", "#products"],
                ["Hardware Catalog", "#products"],
                ["Savings Calculator", "#calculator"],
                ["Customer Reviews", "#reviews"],
                ["Contact & Showroom", "#contact"],
              ].map(([title, url]) => (
                <li key={title}>
                  <a href={url} className="text-slate-400 hover:text-amber-400 transition-colors">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solar Solutions */}
          <div className="lg:col-span-3">
            <p
              className="font-bold text-sm text-white uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Our Solutions
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>4 kW Residential Solar System</li>
              <li>6 kW Hybrid Solar System</li>
              <li>8 kW Solar System</li>
              <li>10 kW On-Grid / Hybrid System</li>
              <li>Agricultural Solar Tube Wells</li>
              <li>Lithium Battery Energy Storage</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3.5">
            <p
              className="font-bold text-sm text-white uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Get In Touch
            </p>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 hover:text-amber-400 transition-colors group"
            >
              <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>Vehari, Punjab, Pakistan<br />
                <span className="font-mono text-[10px] text-slate-500">30°02′30.4″N 72°21′07.0″E</span>
              </span>
            </a>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <a href="tel:03202200884" className="font-bold text-slate-300 hover:text-amber-400 transition-colors">
                0320-2200884
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <MessageSquare className="w-4 h-4 text-[#25D366] flex-shrink-0" />
              <a
                href="https://wa.me/923202200884"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                WhatsApp: 0320-2200884
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <a
                href="mailto:tariqdp36@gmail.com"
                className="font-bold text-sky-400 hover:text-sky-300 transition-colors"
              >
                tariqdp36@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-500 pt-2 border-t border-white/10">
              <Clock className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
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
            © {currentYear} Dream Solar Energy — Tariq Mahmood. All rights reserved.
          </span>
          <span>
            Serving: Vehari • Burewala • Mailsi • Lodhran • Sahiwal • South Punjab
          </span>
        </div>
      </div>
    </footer>
  );
}
