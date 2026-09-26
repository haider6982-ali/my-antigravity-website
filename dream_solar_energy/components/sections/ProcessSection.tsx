"use client";

import React from "react";
import { Radar, Cpu, Wrench, FileCheck, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";

export default function ProcessSection() {
  const { openModal } = useQuoteModal();

  const steps = [
    {
      number: "01",
      title: "Free Site Survey & Bill Audit",
      subtitle: "ENGINEERING FEASIBILITY",
      description: "Our engineers inspect your roof azimuth, orientation, and shadow angles in Vehari, analyzing your previous 12 months of electricity bills to calculate optimum solar capacity.",
      icon: Radar,
      tag: "COMPLIMENTARY SURVEY",
    },
    {
      number: "02",
      title: "Custom System Design & Hardware Sourcing",
      subtitle: "TIER-1 SPECIFICATIONS",
      description: "We prepare a detailed single-line diagram (SLD) and structural blueprint using genuine Tier-1 monocrystalline panels, sized hybrid inverters, and heavy-gauge galvanized framing.",
      icon: Cpu,
      tag: "ZERO COMPROMISE",
    },
    {
      number: "03",
      title: "Precision Turnkey Installation",
      subtitle: "48 TO 72-HOUR TIMELINE",
      description: "Our certified electricians and riggers mount the galvanized structures, run double-insulated copper cables, install DC/AC protection breakers, and commission the inverter with zero power cuts.",
      icon: Wrench,
      tag: "48H DEPLOYMENT",
    },
    {
      number: "04",
      title: "MEPCO Net Metering & Lifetime Support",
      subtitle: "WAPDA GREEN METER ACTIVATION",
      description: "We handle the complete administrative paperwork and technical inspection to install your bidirectional green meter, followed by mobile app telemetry setup and 25-year warranty protection.",
      icon: FileCheck,
      tag: "TURNKEY ACTIVATION",
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest block mb-2">
              Our Process
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D2354] tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Our 4-Step Turnkey Process
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
            From initial shadow audit to turning on your bidirectional green meter, Dream Solar Energy
            makes switching to solar simple, transparent, and completely stress-free.
          </p>
        </div>

        {/* ── Drop Lines Animation Setup ─────────────────────────────────── */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Track */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-slate-200 overflow-hidden z-0">
            <div className="animate-drop-beam-h" />
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center group">
                  {/* Step Top Node with Number */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-white border-2 border-[#0D2354] shadow-xs relative transition-all group-hover:border-[#F59E0B] group-hover:shadow-md">
                    <span
                      className="text-lg font-black text-[#0D2354] group-hover:text-[#F59E0B] transition-colors"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {step.number}
                    </span>
                    {/* Small pulsing indicator on top */}
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
                  </div>

                  {/* Vertical Animated Drop Line connecting node to card */}
                  <div className="relative w-[2px] h-7 bg-slate-200 overflow-hidden my-1">
                    <div
                      className="animate-drop-beam-v left-[-0.5px]"
                      style={{ animationDelay: `${index * 0.45}s` }}
                    />
                  </div>

                  {/* Step Content Card */}
                  <div className="w-full bg-slate-50/70 border border-slate-200/90 rounded-lg p-6 sm:p-7 hover:bg-white hover:border-[#0D2354]/40 hover:shadow-md transition-all flex flex-col justify-between flex-1">
                    <div>
                      {/* Tag & Icon Row */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[#0D2354]/5 border border-[#0D2354]/10 text-[#0D2354] flex items-center justify-center group-hover:bg-[#0D2354] group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-md uppercase tracking-wider">
                          {step.tag}
                        </span>
                      </div>

                      <h3
                        className="text-lg font-black text-[#0D2354] mb-1.5 leading-tight"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-[11px] font-bold text-[#D97706] uppercase tracking-wider mb-3">
                        {step.subtitle}
                      </p>

                      <p className="text-xs text-slate-600 leading-relaxed mb-5">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[#0D2354]">
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                      <span>Guaranteed Execution</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-slate-900 border border-slate-800 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-white">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-[#0D2354] border border-white/10 text-white flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base text-white">Ready to begin step 1 for your home or business?</p>
              <p className="text-xs text-slate-300">Book a free technical site survey anywhere in Vehari and surrounding districts.</p>
            </div>
          </div>

          <button
            onClick={() => openModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-lg transition-colors shadow-xs flex-shrink-0"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <span>Book Free Site Survey</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </section>
  );
}
