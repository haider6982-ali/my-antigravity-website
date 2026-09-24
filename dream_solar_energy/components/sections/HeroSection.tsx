"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Zap, ShieldCheck, Award, Phone, MessageSquare } from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";

interface HeroSectionProps {
  onOpenModal?: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const { openModal } = useQuoteModal();
  const handleOpen = onOpenModal || openModal;
  return (
    <section className="pt-24 sm:pt-28 md:pt-36 pb-14 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/60 via-white to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-sky-200/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[350px] h-[280px] bg-amber-200/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-emerald-200/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Professional pre-title */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#F59E0B] to-[#16A34A]" />
              <span className="text-[11px] font-bold text-[#0D2354] uppercase tracking-[0.18em]">
                Vehari, Punjab, Pakistan
              </span>
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#16A34A] to-[#5CB3E8]" />
            </div>

            <h1
              className="text-3xl sm:text-5xl lg:text-[3.4rem] font-black text-[#0D2354] leading-[1.12] mb-5 tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Complete Solar Energy
              <br />
              Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#16A34A]">
                Every Need
              </span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mb-5 leading-relaxed">
              <strong className="text-[#0D2354]">Dream Solar Energy</strong> — Vehari&apos;s trusted solar specialists.
              We sell Tier-1 solar panels, hybrid inverters, lithium batteries, and all accessories.
              We professionally install solar systems for{" "}
              <span className="font-semibold text-[#0D2354]">homes, shops, factories, and tube wells</span> across South Punjab.
            </p>

            {/* What we offer quick chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { label: "Solar Panels", color: "bg-amber-50 border-amber-200 text-amber-800" },
                { label: "Hybrid Inverters", color: "bg-sky-50 border-sky-200 text-sky-800" },
                { label: "Batteries", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
                { label: "Accessories", color: "bg-slate-50 border-slate-200 text-slate-700" },
                { label: "Turnkey Installation", color: "bg-purple-50 border-purple-200 text-purple-800" },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className={`inline-flex items-center text-[11px] font-bold px-3 py-1 rounded-full border ${chip.color}`}
                >
                  {chip.label}
                </span>
              ))}
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7 w-full max-w-xl">
              {[
                "Jinko, Longi & JA Solar Panels",
                "Knox, Inverex & Huawei Inverters",
                "Lithium & Deep-Cycle Batteries",
                "Galvanized Mounting Structures",
                "MEPCO Net Metering Setup",
                "After-Sale Support & Maintenance",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-[#0D2354] hover:bg-[#163574] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <span>View Solar Packages</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </Link>
              <a
                href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20need%20a%20solar%20system%20quote."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <a href="tel:03202200884" className="flex items-center gap-1.5 hover:text-[#0D2354] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span className="font-semibold text-slate-700">0320-2200884</span>
              </a>
              <span className="text-slate-200">|</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                <span>Open: Sat–Thu 8AM–7PM</span>
              </span>
              <span className="text-slate-200">|</span>
              <span>Tariq Mahmood</span>
            </div>
          </div>

          {/* Right Column — Visual Showcase */}
          <div className="lg:col-span-5 w-full flex flex-col gap-4">
            {/* Main Solar Photo */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-2xl group">
              <div className="relative w-full overflow-hidden bg-slate-100" style={{ height: 280 }}>
                <Image
                  src="/solar-rooftop.jpg"
                  alt="Modern Rooftop Solar System Installation"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/10 to-transparent" />

                {/* Photo overlays */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    Tier-1 Hardware Only
                  </span>
                  <span className="inline-flex items-center gap-1 bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    25-Year Warranty
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-sm font-bold drop-shadow-sm">Professional Installation Team</p>
                  <p className="text-[11px] text-slate-200 drop-shadow-sm">Homes • Shops • Factories • Tube Wells</p>
                </div>
              </div>

              {/* Stats strip */}
              <div className="p-4 bg-white grid grid-cols-4 gap-2 border-t border-slate-100">
                {[
                  { val: "500+", label: "Systems" },
                  { val: "90%", label: "Bill Cut" },
                  { val: "4–10kW", label: "Packages" },
                  { val: "0", label: "Load Shed" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-sm sm:text-base font-black text-[#0D2354]" style={{ fontFamily: "var(--font-outfit)" }}>
                      {stat.val}
                    </p>
                    <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business categories strip */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🏠", title: "Residential", desc: "Homes & housing societies" },
                { icon: "🏪", title: "Commercial", desc: "Shops, offices & malls" },
                { icon: "🏭", title: "Industrial", desc: "Factories & warehouses" },
                { icon: "🌾", title: "Agriculture", desc: "Tube wells & farms" },
              ].map((cat) => (
                <div key={cat.title} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-3 hover:border-sky-200 transition-colors">
                  <span className="text-xl flex-shrink-0">{cat.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-[#0D2354]" style={{ fontFamily: "var(--font-outfit)" }}>{cat.title}</p>
                    <p className="text-[10px] text-slate-500">{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


