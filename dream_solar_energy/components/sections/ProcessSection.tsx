"use client";

import React from "react";
import Link from "next/link";
import { Radar, Cpu, Wrench, Activity, CheckCircle2, ArrowRight, Zap, FileCheck } from "lucide-react";
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
    <section id="process" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/80 rounded-full px-3.5 py-1 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                Seamless Deployment
              </span>
            </div>
            <h2
              className="text-2xl sm:text-4xl font-black text-[#0D2354] tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Our 4-Step Turnkey Process
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            From initial shadow audit to turning on your bidirectional green meter, Dream Solar Energy
            makes switching to solar simple, transparent, and completely stress-free.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-slate-50/80 border border-slate-200/80 rounded-3xl p-6 sm:p-7 hover:bg-white hover:border-amber-300 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-3xl font-black text-[#0D2354] group-hover:text-amber-600 transition-colors"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {step.number}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {step.tag}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-[#0D2354]/5 border border-[#0D2354]/10 text-[#0D2354] flex items-center justify-center mb-4 group-hover:bg-[#0D2354] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3
                    className="text-lg font-black text-[#0D2354] mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[11px] font-bold text-amber-700 uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-[#0D2354]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>Guaranteed Execution</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-sky-50/80 border border-sky-200/80 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0D2354] text-white flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div>
              <p className="font-bold text-sm text-[#0D2354]">Ready to begin step 1 for your home or business?</p>
              <p className="text-xs text-slate-500">Book a free technical site survey anywhere in Vehari and surrounding districts.</p>
            </div>
          </div>

          <button
            onClick={() => openModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D2354] hover:bg-[#163574] text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-sm flex-shrink-0"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <span>Book Free Site Survey</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
          </button>
        </div>
      </div>
    </section>
  );
}
