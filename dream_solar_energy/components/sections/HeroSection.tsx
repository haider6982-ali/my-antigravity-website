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
    <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/50 via-white to-white relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-200/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[220px] bg-amber-200/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[#0D2354] text-xs font-bold mb-3 sm:mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span>Tier-1 Certified Solar Systems</span>
            </div>

            <h1
              className="animate-fade-up delay-100 text-2xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black text-[#0D2354] leading-[1.15] mb-3 sm:mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Complete Solar Energy
              <br />
              Solutions for{" "}
              <span className="shimmer-text">
                Every Need
              </span>
            </h1>

            <p className="animate-fade-up delay-200 text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mb-4 sm:mb-5 leading-relaxed font-normal">
              <strong className="text-[#0D2354]">Dream Solar Energy</strong> delivers reliable, high-efficiency
              clean power solutions — Tier-1 panels, smart inverters, lithium storage batteries,
              and turnkey installations for{" "}
              <span className="font-semibold text-[#0D2354]">homes, shops, factories &amp; farms</span>.
            </p>

            {/* Offer chips */}
            <div className="animate-fade-up delay-200 flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
              {[
                { label: "Solar Panels", color: "bg-amber-50 border-amber-200/80 text-amber-800" },
                { label: "Hybrid Inverters", color: "bg-sky-50 border-sky-200/80 text-sky-800" },
                { label: "Battery Storage", color: "bg-emerald-50 border-emerald-200/80 text-emerald-800" },
                { label: "Accessories", color: "bg-slate-50 border-slate-200/80 text-slate-700" },
                { label: "Turnkey Installation", color: "bg-purple-50 border-purple-200/80 text-purple-800" },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className={`inline-flex items-center text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 sm:py-1 rounded-full border ${chip.color}`}
                >
                  {chip.label}
                </span>
              ))}
            </div>

            {/* Feature Points */}
            <div className="animate-fade-up delay-300 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-5 sm:mb-6 w-full max-w-xl">
              {[
                "Tier-1 Solar Panels (Jinko, Longi, JA Solar)",
                "Smart Inverters (Knox, Inverex, Huawei)",
                "Lithium & Deep-Cycle Batteries",
                "Heavy-Duty Galvanized Structures",
                "Net Metering Green Meter Setup",
                "Lifetime Technical Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="animate-fade-up delay-400 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto mb-4 sm:mb-5">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-[#0D2354] hover:bg-[#163574] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </Link>
              <a
                href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20would%20like%20to%20inquire%20about%20a%20solar%20system."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust strip */}
            <div className="animate-fade-up delay-500 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-500">
              <a href="tel:03202200884" className="flex items-center gap-1.5 hover:text-[#0D2354] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span className="font-semibold text-slate-700">0320-2200884</span>
              </a>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                <span>Sat–Thu: 8AM–7PM</span>
              </span>
            </div>
          </div>

          {/* Right Column — Visual Showcase */}
          <div className="animate-slide-right delay-200 lg:col-span-5 w-full flex flex-col gap-3">
            {/* Solar Photo Card */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-md hover:shadow-lg transition-all duration-300 group animate-glow-pulse">
              <div className="relative w-full overflow-hidden bg-slate-100" style={{ height: 250 }}>
                <Image
                  src="/solar-rooftop.jpg"
                  alt="Modern Rooftop Solar System Installation"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />

                {/* Overlays */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm text-slate-800 text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                    <Award className="w-3 h-3 text-amber-500" />
                    Tier-1 Hardware
                  </span>
                  <span className="inline-flex items-center gap-1 bg-emerald-600/95 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                    <ShieldCheck className="w-3 h-3" />
                    25-Year Warranty
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <p className="text-xs sm:text-sm font-bold drop-shadow-sm">Professional Installation Team</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-200">Homes • Shops • Factories • Tube Wells</p>
                </div>
              </div>

              {/* Stats strip */}
              <div className="p-3 sm:p-3.5 bg-white grid grid-cols-4 gap-1.5 border-t border-slate-100">
                {[
                  { val: "500+", label: "Systems" },
                  { val: "90%", label: "Bill Cut" },
                  { val: "4–20kW", label: "Packages" },
                  { val: "0", label: "Load Shed" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-sm sm:text-base font-black text-[#0D2354]" style={{ fontFamily: "var(--font-outfit)" }}>
                      {stat.val}
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 font-semibold uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Categories */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: "🏠", title: "Residential", desc: "Homes & Societies" },
                { icon: "🏪", title: "Commercial", desc: "Shops & Plazas" },
                { icon: "🏭", title: "Industrial", desc: "Factories & Mills" },
                { icon: "🌾", title: "Agriculture", desc: "Solar Tube Wells" },
              ].map((cat, i) => (
                <div
                  key={cat.title}
                  className={`flex items-center gap-2.5 bg-slate-50/80 border border-slate-100 rounded-xl p-2.5 hover:border-sky-200 hover:bg-white transition-all animate-scale-up delay-${(i + 4) * 100}`}
                >
                  <span className="text-lg flex-shrink-0">{cat.icon}</span>
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
