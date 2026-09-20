"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Zap, ShieldCheck, Award } from "lucide-react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="pt-24 sm:pt-28 md:pt-36 pb-14 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50/30 via-white to-slate-50 relative overflow-hidden">
      {/* Subtle solar illumination backdrop */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-300/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Headline - Removed the Authorized Solar Sales badge as requested */}
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0B2545] leading-[1.15] mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Clean Energy For A{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-amber-500 to-[#F7931E]">
                Brighter Tomorrow
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mb-6 leading-relaxed font-normal">
              Empowering homes, commercial facilities, and agricultural tube wells with
              high-efficiency Tier-1 solar systems. Enjoy zero load-shedding, protect against
              rising electricity tariffs, and generate your own reliable, clean solar power.
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-7 w-full max-w-xl">
              {[
                "Tier-1 Solar Panels (Jinko, Longi, JA Solar)",
                "Smart Inverters (Knox, Inverex, Huawei)",
                "Lithium & Deep-Cycle Storage Batteries",
                "Full Mounting Hardware & Turnkey Setup",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Clean Action Buttons (No address, No contact number, No WhatsApp) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#133966] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-sm transition-all active:scale-98"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <span>Explore Solar Products</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>

              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#F59E0B] text-slate-800 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all shadow-xs"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <Zap className="w-4 h-4 text-[#F59E0B]" />
                <span>Calculate Solar Savings</span>
              </a>
            </div>
          </div>

          {/* Right Column: Light Background Solar System Showcase Image (Replaced the repeated logo card) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md group">
              {/* Solar Installation Photo */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/solar-rooftop.jpg"
                  alt="Modern Rooftop Solar System Installation"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  priority
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />

                {/* Light gradient highlight on the photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

                {/* Badges on photo */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm border border-white/60">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    Tier-1 Hardware
                  </span>
                  <span className="inline-flex items-center gap-1 bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    25-Year Warranty
                  </span>
                </div>

                {/* Caption at bottom of photo */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs sm:text-sm font-bold drop-shadow-sm">
                    Residential &amp; Commercial Solar Projects
                  </p>
                  <p className="text-[11px] text-slate-200 drop-shadow-sm">
                    High-efficiency photovoltaic systems installed across South Punjab
                  </p>
                </div>
              </div>

              {/* Bottom Quick Facts Strip */}
              <div className="p-3.5 sm:p-4 bg-white grid grid-cols-2 gap-3 text-center border-t border-slate-100">
                <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100">
                  <p className="text-base sm:text-lg font-black text-[#0B2545]" style={{ fontFamily: "var(--font-outfit)" }}>
                    Up to 90%
                  </p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Bill Reduction</p>
                </div>
                <div className="bg-amber-50/70 rounded-xl p-2.5 border border-amber-100">
                  <p className="text-base sm:text-lg font-black text-amber-700" style={{ fontFamily: "var(--font-outfit)" }}>
                    Zero Cuts
                  </p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Continuous Power</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
