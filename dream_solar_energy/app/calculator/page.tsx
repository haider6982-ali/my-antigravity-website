"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Calculator,
  TrendingDown,
  Zap,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";

/* ── tiny hook: triggers when element enters viewport ─────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function CalculatorPage() {
  const [bill, setBill] = useState(35000);
  const { openModal } = useQuoteModal();

  const ratePerUnit = 55; // Average PKR per unit in South Punjab (MEPCO tariffs + fuel adjustments)
  const units = Math.round(bill / ratePerUnit);

  const sizes = [
    { kw: 3, monthlyUnits: 420, approxCost: 550000, bestFor: "Fans, Fridge, Lights & 1 Ton Inverter AC" },
    { kw: 5, monthlyUnits: 700, approxCost: 875000, bestFor: "1.5 Ton AC, Refrigerator, Water Pump, Home Load" },
    { kw: 7, monthlyUnits: 980, approxCost: 1190000, bestFor: "2 Inverter ACs, Washing Machine, Home Load" },
    { kw: 10, monthlyUnits: 1400, approxCost: 1550000, bestFor: "3 Inverter ACs, Deep Freezer, Net Metering" },
    { kw: 15, monthlyUnits: 2100, approxCost: 2250000, bestFor: "4+ ACs, Heavy Commercial / Large 1 Kanal Home" },
    { kw: 20, monthlyUnits: 2800, approxCost: 2950000, bestFor: "Commercial Plaza, Private Clinic, Small Factory" },
  ];

  const recommended = sizes.find((s) => s.monthlyUnits >= units) || sizes[sizes.length - 1];
  const coveredUnits = Math.min(recommended.monthlyUnits, units);
  const estimatedSavings = Math.round(coveredUnits * ratePerUnit);
  const paybackYears = (recommended.approxCost / (estimatedSavings * 12)).toFixed(1);
  const co2SavedTonnes = ((recommended.monthlyUnits * 12 * 0.82) / 1000).toFixed(1);

  const { ref: calcRef, inView: calcVisible } = useInView(0.1);

  return (
    <div className="bg-[#F8F7F4]">

      {/* Hero Header */}
      <section className="pt-32 pb-14 sm:pb-18 px-4 sm:px-6 lg:px-8 bg-[#EFEDE7] border-b border-[#E2DFD6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-[#F7941D]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 left-10 w-[350px] h-[300px] bg-[#22325A]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5B6472] mb-6">
            <Link href="/" className="hover:text-[#1B2A4A] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1B2A4A] font-bold">Solar Savings Calculator</span>
          </div>

          <div className="max-w-3xl">
            <div className="animate-fade-up inline-flex items-center gap-2 bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] px-4 py-1.5 mb-5 shadow-site">
              <Calculator className="w-3.5 h-3.5 text-[#F7941D]" />
              <span className="text-xs font-bold text-[#1B2A4A] uppercase tracking-wider">
                Financial Feasibility &amp; Capacity Estimator
              </span>
            </div>

            <h1
              className="animate-fade-up delay-100 text-3xl sm:text-5xl lg:text-6xl font-black text-[#1B2A4A] leading-[1.12] mb-5 tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Solar Savings &amp; Capacity{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7941D] via-[#F7941D] to-[#3C8C2E]">
                Calculator
              </span>
            </h1>

            <p className="animate-fade-up delay-200 text-[#5B6472] text-base sm:text-lg leading-relaxed mb-6">
              Estimate the exact solar kilowatt capacity you need in Vehari based on your current monthly
              electricity bill, projected bill reduction, and return on investment period.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Body */}
      <section ref={calcRef} className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#EFEDE7]">
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] p-6 sm:p-10 shadow-site transition-all duration-700"
            style={{
              opacity: calcVisible ? 1 : 0,
              transform: calcVisible ? "translateY(0)" : "translateY(24px)",
            }}
          >

            {/* Slider Control */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <label className="text-sm sm:text-base font-bold text-[#14202F]">
                  Select Your Average Monthly Electricity Bill:
                </label>
                <span
                  className="text-2xl sm:text-3xl font-black text-[#1B2A4A]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  PKR {bill.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min={5000}
                max={150000}
                step={2500}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-3 bg-[#E2DFD6] rounded-[8px] appearance-none cursor-pointer accent-[#F7941D]"
              />

              <div className="flex justify-between text-xs text-[#5B6472] mt-2 font-mono">
                <span>PKR 5,000 / mo</span>
                <span>PKR 75,000 / mo</span>
                <span>PKR 150,000+ / mo</span>
              </div>
            </div>

            {/* Quick Bill Metric Pill */}
            <div className="bg-[#EFEDE7] border border-[#E2DFD6] rounded-[8px] p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#F7941D]" />
                <span className="text-[#14202F]">Estimated Monthly Units Consumed:</span>
                <span className="font-bold text-[#1B2A4A]">~{units} Units / month</span>
              </div>
              <span className="text-[#5B6472] text-xs">
                (Calculated at avg MEPCO tariff of Rs. {ratePerUnit}/unit)
              </span>
            </div>

            {/* Recommended System Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#1B2A4A] border border-[#0F1B2E] rounded-[8px] p-5 text-white shadow-site text-center">
                <span className="text-[11px] font-bold text-[#FBB859] uppercase tracking-wider block mb-1">
                  Recommended Capacity
                </span>
                <p
                  className="text-3xl sm:text-4xl font-black text-white"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {recommended.kw} kW
                </p>
                <p className="text-[11px] text-slate-300 mt-1">Tier-1 Solar System</p>
              </div>

              <div className="bg-[#3C8C2E]/10 border border-[#3C8C2E]/30 rounded-[8px] p-5 text-center">
                <span className="text-[11px] font-bold text-[#3C8C2E] uppercase tracking-wider block mb-1">
                  Estimated Monthly Savings
                </span>
                <p
                  className="text-2xl sm:text-3xl font-black text-[#3C8C2E]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  PKR {estimatedSavings.toLocaleString()}
                </p>
                <p className="text-[11px] text-[#3C8C2E] mt-1">Up to 90% Bill Reduction</p>
              </div>

              <div className="bg-[#FBB859]/20 border border-[#F7941D]/30 rounded-[8px] p-5 text-center">
                <span className="text-[11px] font-bold text-[#EE6B00] uppercase tracking-wider block mb-1">
                  Estimated Payback
                </span>
                <p
                  className="text-2xl sm:text-3xl font-black text-[#EE6B00]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  ~{paybackYears} Years
                </p>
                <p className="text-[11px] text-[#F7941D] mt-1">20+ Years Free Energy Afterwards</p>
              </div>
            </div>

            {/* Detailed System Breakdown */}
            <div className="bg-[#EFEDE7] border border-[#E2DFD6] rounded-[8px] p-6 mb-8 space-y-3">
              <h4 className="font-bold text-sm text-[#1B2A4A] uppercase tracking-wider">
                What a {recommended.kw} kW System Delivers:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#14202F]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3C8C2E] flex-shrink-0 mt-0.5" />
                  <span><strong>Monthly Production:</strong> ~{recommended.monthlyUnits} Units generated</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3C8C2E] flex-shrink-0 mt-0.5" />
                  <span><strong>Recommended For:</strong> {recommended.bestFor}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3C8C2E] flex-shrink-0 mt-0.5" />
                  <span><strong>Annual Financial Return:</strong> ~PKR {(estimatedSavings * 12).toLocaleString()} / year</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3C8C2E] flex-shrink-0 mt-0.5" />
                  <span><strong>Carbon Offset:</strong> ~{co2SavedTonnes} Tonnes CO₂ eliminated / year</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => openModal(`${recommended.kw} kW Solar System`)}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#1B2A4A] hover:bg-[#0F1B2E] text-white font-bold text-sm py-3.5 rounded-[8px] shadow-site transition-all cursor-pointer active:scale-98"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <Zap className="w-4 h-4 text-[#F7941D]" />
                <span>Get Free Quotation for {recommended.kw} kW System</span>
              </button>

              <a
                href={`https://wa.me/923202200884?text=${encodeURIComponent(
                  `Hello Dream Solar Energy, my monthly electricity bill is approx Rs. ${bill.toLocaleString()}. The website calculator recommended a ${recommended.kw} kW system. I would like a detailed quote.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm px-6 py-3.5 rounded-[8px] shadow-site transition-all cursor-pointer active:scale-98"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp This Estimate</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
