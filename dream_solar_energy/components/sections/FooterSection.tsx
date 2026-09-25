"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, MapPin, Clock, Mail, User, ArrowRight, ShieldCheck } from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  const { openModal } = useQuoteModal();

  const MAPS_URL =
    "https://www.google.com/maps/place/30%C2%B002'30.4%22N+72%C2%B021'07.0%22E/@30.0417733,72.3493651,633m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d30.0417733!4d72.35194?hl=en&entry=ttu";

  return (
    <footer className="bg-[#0B2545] text-slate-300 pt-14 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-sky-400/60 shadow-lg flex items-center justify-center flex-shrink-0 bg-[#5CB3E8] p-1">
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
                  Clean Energy &bull; Brighter Tomorrow
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Vehari&apos;s leading solar engineering company. Authorized sales of Tier-1 solar panels,
              hybrid inverters, lithium batteries, and complete balance-of-system accessories. Turnkey
              installations for homes, commercial shops, factories, and agricultural tube wells.
            </p>

            {/* Owner info */}
            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 max-w-sm">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-amber-400/40 flex-shrink-0 bg-slate-800">
                <Image
                  src="/tariq-mahmood.png"
                  alt="Tariq Mahmood"
                  fill
                  className="object-cover object-top"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Business Owner</p>
                <p className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                  Tariq Mahmood
                </p>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <span>Request Free Survey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Pages */}
          <div className="lg:col-span-2">
            <p
              className="font-bold text-sm text-white uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Company Pages
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Products & Hardware", "/products"],
                ["Services & Installations", "/services"],
                ["Savings Calculator", "/calculator"],
                ["Contact Us", "/contact"],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link href={url} className="text-slate-400 hover:text-amber-400 transition-colors">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Packages */}
          <div className="lg:col-span-3">
            <p
              className="font-bold text-sm text-white uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Solar Solutions
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  4 kW Residential Solar System
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  6 kW & 8 kW Hybrid Solar Systems
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  10 kW – 20 kW On-Grid &amp; Net Metering
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">
                  Commercial Shops &amp; Plaza Solar
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">
                  Industrial Factory Solar Plants
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">
                  Agricultural Solar Tube Wells
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Lithium LiFePO4 &amp; Tubular Batteries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <p
              className="font-bold text-sm text-white uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Visit &amp; Contact
            </p>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 hover:text-amber-400 transition-colors group"
            >
              <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>
                Vehari, Punjab, Pakistan<br />
                <span className="font-mono text-[10px] text-slate-400">30°02&apos;30.4&quot;N 72°21&apos;07.0&quot;E</span>
              </span>
            </a>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <a href="tel:03202200884" className="font-bold text-slate-200 hover:text-amber-400 transition-colors">
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

            <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-2 border-t border-white/10">
              <Clock className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
              <div>
                <p>Sat - Thu: 8:00 AM - 7:00 PM</p>
                <p>Friday: 9:00 AM - 12:30 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>
            &copy; {currentYear} Dream Solar Energy. All rights reserved.
          </span>
          <span>
            Serving: Vehari &bull; Burewala &bull; Mailsi &bull; Lodhran &bull; Sahiwal &bull; South Punjab
          </span>
        </div>
      </div>
    </footer>
  );
}

