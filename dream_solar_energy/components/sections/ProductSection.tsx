"use client";

import React, { useState } from "react";
import { MessageSquare, Check, Sun, Zap, Battery, Wrench, ShieldCheck, ArrowRight } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/923202200884";

const categories = [
  { key: "panels", icon: <Sun className="w-4 h-4" />, label: "Solar Panels" },
  { key: "inverters", icon: <Zap className="w-4 h-4" />, label: "Inverters" },
  { key: "batteries", icon: <Battery className="w-4 h-4" />, label: "Batteries" },
  { key: "accessories", icon: <Wrench className="w-4 h-4" />, label: "Accessories" },
];

const products: Record<
  string,
  { name: string; specs: string; warranty: string; badge?: string }[]
> = {
  panels: [
    {
      name: "Jinko Solar Tiger Neo",
      specs: "575W – 590W • N-Type TOPCon Technology • Ultra-High Efficiency",
      warranty: "25-Year Linear Power Warranty",
      badge: "Top Seller",
    },
    {
      name: "Longi Hi-MO 6",
      specs: "580W – 595W • HPBC Advanced Cell Architecture • Heat Tolerant",
      warranty: "25-Year Product & Performance Warranty",
      badge: "High Efficiency",
    },
    {
      name: "JA Solar DeepBlue Bifacial",
      specs: "570W – 585W • Dual-Glass Solar Generation • Rear-Side Power Boost",
      warranty: "30-Year Performance Warranty",
    },
    {
      name: "Canadian Solar HiKu7",
      specs: "545W – 580W • Mono PERC Technology • Robust Heavy-Duty Frame",
      warranty: "25-Year Output Warranty",
    },
  ],
  inverters: [
    {
      name: "Knox Hybrid Inverter Series",
      specs: "3kW – 10kW • Pure Sine Wave • Dual MPPT • Smart Mobile App Tracking",
      warranty: "5-Year Official Warranty",
      badge: "Most Popular",
    },
    {
      name: "Inverex Nitrox Hybrid",
      specs: "3kW – 12kW • High PV Input • Touch Display • IP65 Weatherproof",
      warranty: "5-Year Official Warranty",
    },
    {
      name: "Huawei SUN2000 On-Grid",
      specs: "3kW – 20kW • 98.6% European Efficiency • Smart I-V Curve Diagnosis",
      warranty: "5 to 10-Year Warranty",
      badge: "Premium Grade",
    },
    {
      name: "Growatt Hybrid Series",
      specs: "3kW – 15kW • Flexible Grid Support • Integrated WiFi Monitoring",
      warranty: "5-Year Standard Warranty",
    },
  ],
  batteries: [
    {
      name: "Pylontech Lithium (LFP)",
      specs: "48V 100Ah (US3000C / US5000) • 6,000+ Deep Cycles • Smart BMS",
      warranty: "10-Year Warranty",
      badge: "Zero Maintenance",
    },
    {
      name: "Inverex Lithium Wall-Mount",
      specs: "5.12 kWh High-Density LFP • Compact Space-Saving Wall Installation",
      warranty: "5-Year Official Warranty",
    },
    {
      name: "AGS Deep-Cycle Tubular Gel",
      specs: "Heavy-Duty Deep Discharge • Optimized for Extended Night Power",
      warranty: "Standard Manufacturer Warranty",
    },
    {
      name: "Osaka Tubular Deep-Cycle",
      specs: "Specially Designed for South Punjab Climate • Reliable Cyclic Life",
      warranty: "Standard Manufacturer Warranty",
    },
  ],
  accessories: [
    {
      name: "Certified Solar DC & AC Cables",
      specs: "4mm² to 16mm² Pure Tinned Copper • Double Insulation • TÜV Rheinland",
      warranty: "UV & Flame Retardant",
    },
    {
      name: "Galvanized Mounting Structures",
      specs: "L2 & L3 Heavy-Duty Galvanized Iron Framing • Custom Elevation",
      warranty: "Wind & Storm Resistant",
    },
    {
      name: "AC & DC Distribution Boards",
      specs: "Original Circuit Breakers, Surge Protection (SPD) & Changeovers",
      warranty: "Comprehensive Electrical Safety",
    },
    {
      name: "Earthing & Lightning Arrestors",
      specs: "Pure Copper Earthing Rods, Chemical Compound & Lightning Spikes",
      warranty: "Complete System Grounding",
    },
  ],
};

const packages = [
  {
    size: "3 kW System",
    type: "Hybrid / On-Grid",
    price: "~PKR 550,000",
    coverage: "Small Residence (1 Inverter AC, refrigerator, fans, lighting)",
    generation: "360 – 450 Units / Month",
    features: [
      "Tier-1 580W Solar Panels",
      "3kW Pure Sine Wave Inverter",
      "Custom Galvanized Framing",
      "DC Cables & Protection Switchgear",
      "Turnkey Installation Included",
    ],
  },
  {
    size: "5 kW System",
    type: "Hybrid / On-Grid",
    price: "~PKR 875,000",
    coverage: "Medium Residence (1–2 Inverter ACs, water pump, appliances)",
    generation: "600 – 750 Units / Month",
    popular: true,
    features: [
      "Tier-1 580W–590W Solar Panels",
      "5kW Hybrid Dual MPPT Inverter",
      "Optional Lithium / Tubular Storage",
      "AC/DC Distribution Protection Box",
      "Turnkey Installation & Net Metering Ready",
    ],
  },
  {
    size: "10 kW System",
    type: "On-Grid / Hybrid",
    price: "~PKR 1,550,000",
    coverage: "Large Residence or Commercial Shop (3–4 ACs, full heavy load)",
    generation: "1,200 – 1,500 Units / Month",
    features: [
      "High-Capacity Tier-1 Solar Array",
      "10kW Three-Phase / Single-Phase Inverter",
      "Heavy-Duty Galvanized Structure",
      "Complete Surge & Earthing Kit",
      "Full Net Metering Green Meter Setup",
    ],
  },
  {
    size: "15 kW – 25 kW+",
    type: "Commercial & Agricultural",
    price: "Custom Quotation",
    coverage: "Commercial Buildings, Schools, Flour Mills & Agricultural Tube Wells",
    generation: "1,800 – 3,500+ Units / Month",
    features: [
      "Engineered High-Yield Solar Array",
      "Industrial Three-Phase Inverters (Huawei/Knox)",
      "High-Clearance Robust Mounting",
      "Remote SCADA & Generation Tracking",
      "Dedicated Turnkey Engineering Team",
    ],
  },
];

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState<"packages" | "hardware">("packages");
  const [activeCategory, setActiveCategory] = useState("panels");

  return (
    <section id="products" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              Hardware &amp; Turnkey Packages
            </span>
            <h2
              className="text-2xl sm:text-4xl font-black text-[#0B2545] tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Solar Systems &amp; Equipment
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Authentic Tier-1 solar equipment with official warranty support, tailored for residential,
              commercial, and agricultural setups.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="mt-6 md:mt-0 flex bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
            <button
              onClick={() => setActiveTab("packages")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === "packages"
                  ? "bg-[#0B2545] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              System Packages
            </button>
            <button
              onClick={() => setActiveTab("hardware")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === "hardware"
                  ? "bg-[#0B2545] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Individual Hardware
            </button>
          </div>
        </div>

        {/* Packages Tab Content */}
        {activeTab === "packages" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.size}
                className={`rounded-2xl p-6 flex flex-col justify-between bg-white border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  pkg.popular
                    ? "border-amber-400 ring-2 ring-amber-400/20 shadow-md relative"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-6 text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full shadow-xs">
                    Most Popular Choice
                  </span>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      {pkg.type}
                    </span>
                    <h3
                      className="text-2xl font-black text-[#0B2545] mt-0.5"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {pkg.size}
                    </h3>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 mb-5">
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{pkg.coverage}</p>
                    <p className="text-xs font-bold text-sky-700 mt-1.5 flex items-center gap-1">
                      <Sun className="w-3.5 h-3.5 text-amber-500" />
                      <span>{pkg.generation}</span>
                    </p>
                  </div>

                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Includes:</p>
                    {pkg.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="mb-3">
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Estimated Cost</p>
                    <p
                      className="text-xl font-black text-emerald-700"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {pkg.price}
                    </p>
                  </div>

                  <a
                    href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                      `Hello Dream Solar Energy, I would like to inquire about the ${pkg.size} solar package pricing and details.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs transition-colors shadow-xs ${
                      pkg.popular
                        ? "bg-[#F59E0B] hover:bg-[#D97706] text-slate-950"
                        : "bg-[#0B2545] hover:bg-[#133966] text-white"
                    }`}
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire for {pkg.size}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Hardware Catalog Tab Content */}
        {activeTab === "hardware" && (
          <div>
            {/* Category selection */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                    activeCategory === cat.key
                      ? "bg-white border-[#0B2545] text-[#0B2545] shadow-sm ring-1 ring-[#0B2545]/10"
                      : "bg-white/80 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white"
                  }`}
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Hardware Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {products[activeCategory].map((prod) => (
                <div
                  key={prod.name}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    {prod.badge && (
                      <span className="inline-block text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2.5">
                        {prod.badge}
                      </span>
                    )}
                    <h4
                      className="font-bold text-base text-[#0B2545] mb-1.5"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {prod.name}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">{prod.specs}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-semibold text-emerald-700 mb-3 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{prod.warranty}</span>
                    </p>
                    <a
                      href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                        `Hello Dream Solar Energy, please provide pricing and availability for ${prod.name}.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-amber-600 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Request Quote on WhatsApp</span>
                      <ArrowRight className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Turnkey Assurance Banner */}
        <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5 text-amber-600" />
          </div>
          <div className="text-xs sm:text-sm text-slate-600">
            <strong className="text-slate-900 font-bold">Complete Turnkey Solutions:</strong> We provide
            everything under one roof — official Tier-1 photovoltaic panels, certified hybrid inverters,
            energy storage batteries, custom galvanized structures, TÜV-certified cables, and complete installation.
          </div>
        </div>
      </div>
    </section>
  );
}
