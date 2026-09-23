"use client";

import React, { useState } from "react";
import { TrendingDown, Zap, Clock, Calculator, ArrowRight } from "lucide-react";

interface SavingsCalculatorProps {
  onOpenModal: () => void;
}

export default function SavingsCalculator({ onOpenModal }: SavingsCalculatorProps) {
  const [bill, setBill] = useState(25000);

  const ratePerUnit = 55; // Average PKR per unit in Pakistan (MEPCO / LESCO inclusive of surcharges)
  const units = Math.round(bill / ratePerUnit);

  const sizes = [
    { kw: 3, monthlyUnits: 420, approxCost: 550000 },
    { kw: 5, monthlyUnits: 700, approxCost: 875000 },
    { kw: 10, monthlyUnits: 1400, approxCost: 1550000 },
    { kw: 15, monthlyUnits: 2100, approxCost: 2250000 },
  ];

  const recommended = sizes.find((s) => s.monthlyUnits >= units) || sizes[sizes.length - 1];
  const coveredUnits = Math.min(recommended.monthlyUnits, units);
  const estimatedSavings = Math.round(coveredUnits * ratePerUnit);
  const paybackYears = (recommended.approxCost / (estimatedSavings * 12)).toFixed(1);

  return (
    <section id="calculator" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3.5 py-1 mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wide">
              Financial Estimator
            </span>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-black text-[#0D2354] tracking-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Solar Savings &amp; Capacity Calculator
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Adjust your current monthly electricity bill to calculate the ideal system capacity,
            estimated bill reduction, and projected return on investment.
          </p>
        </div>

        {/* Calculator Body Card */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
          {/* Slider Control */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <label className="text-sm font-bold text-slate-800">
                Current Monthly Electricity Bill (PKR):
              </label>
              <span
                className="text-2xl sm:text-3xl font-black text-[#0B2545]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                PKR {bill.toLocaleString()}
              </span>
            </div>

            <input
              type="range"
              min={5000}
              max={150000}
              step={1000}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#F59E0B]"
              aria-label="Electricity Bill Slider"
            />

            <div className="flex justify-between text-xs font-semibold text-slate-400 mt-2">
              <span>PKR 5,000 / mo</span>
              <span>PKR 75,000 / mo</span>
              <span>PKR 150,000+ / mo</span>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {/* Monthly Savings */}
            <div className="bg-white border border-emerald-200 rounded-2xl p-5 text-center shadow-xs">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <TrendingDown className="w-5 h-5" />
              </div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Estimated Monthly Savings
              </p>
              <p
                className="text-2xl font-black text-emerald-600"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                PKR {estimatedSavings.toLocaleString()}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">~{coveredUnits} units offset / mo</p>
            </div>

            {/* Recommended Capacity */}
            <div className="bg-white border border-amber-300 rounded-2xl p-5 text-center shadow-xs">
              <div className="w-10 h-10 mx-auto rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Recommended System
              </p>
              <p
                className="text-2xl font-black text-[#0D2354]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {recommended.kw} kW
              </p>
              <p className="text-[11px] text-slate-400 mt-1">~PKR {recommended.approxCost.toLocaleString()}</p>
            </div>

            {/* Payback Period */}
            <div className="bg-white border border-sky-200 rounded-2xl p-5 text-center shadow-xs">
              <div className="w-10 h-10 mx-auto rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Payback Period
              </p>
              <p
                className="text-2xl font-black text-[#0D2354]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                ~{paybackYears} Years
              </p>
              <p className="text-[11px] text-slate-400 mt-1">Free electricity thereafter</p>
            </div>
          </div>

          {/* Action CTA within Calculator */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center sm:text-left max-w-md leading-relaxed">
              * Calculations are based on prevailing NEPRA / DISCO average tariff rates (~Rs. 55/unit).
              Exact system output varies with rooftop shade, orientation, and inverter specifications.
            </p>

            <a
              href={`https://wa.me/923202200884?text=${encodeURIComponent(
                `Hello Dream Solar Energy, based on the calculator, my monthly bill is PKR ${bill.toLocaleString()}. I would like to get a formal quotation for a ${recommended.kw} kW solar system.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#0D2354] hover:bg-[#163574] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all flex-shrink-0"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <span>Get Formal Quote for {recommended.kw} kW</span>
              <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
