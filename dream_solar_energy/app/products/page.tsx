"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sun,
  Zap,
  Battery,
  Wrench,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Award,
  Sparkles,
  Check,
} from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<"packages" | "panels" | "inverters" | "batteries" | "accessories">("packages");
  const { openModal } = useQuoteModal();

  const packages = [
    {
      id: "pkg-4kw",
      name: "4 kW Residential Solar System",
      type: "Hybrid / On-Grid",
      idealFor: "3 to 5 Marla Homes",
      unitsMonthly: "450 – 520 Units / Month",
      billSavings: "Rs. 25,000 – 30,000 / mo",
      loads: [
        "1 Inverter AC (1.5 Ton)",
        "1 Refrigerator",
        "1 Water Pump (0.5 – 1 HP)",
        "4–5 Ceiling Fans & LED Lights",
      ],
      hardware: [
        "7x Tier-1 585W Monocrystalline Panels",
        "Knox / Inverex 4kW Smart Hybrid Inverter",
        "Galvanized Heavy-Gauge L2 Structure",
        "Complete DC/AC Breakers, SPDs & Copper Wiring",
      ],
      warranty: "25-Yr Panel Warranty • 5-Yr Inverter Warranty",
      badge: "Budget Friendly",
      badgeColor: "bg-[#EFEDE7] text-[#1B2A4A]",
    },
    {
      id: "pkg-6kw",
      name: "6 kW Hybrid Solar System",
      type: "Hybrid with Battery Backup",
      idealFor: "5 to 10 Marla Homes",
      unitsMonthly: "720 – 850 Units / Month",
      billSavings: "Rs. 42,000 – 50,000 / mo",
      loads: [
        "2 Inverter ACs (Day time)",
        "1 Inverter AC + Refrigerator (Night time)",
        "Complete Home Lighting & Fans",
        "Washing Machine & Microwave",
      ],
      hardware: [
        "10x Tier-1 585W Monocrystalline Panels",
        "Knox / Inverex 6kW Hybrid Inverter",
        "Lithium LiFePO4 or Deep-Cycle Batteries",
        "Custom Elevated Galvanized Structure",
      ],
      warranty: "25-Yr Panel Warranty • 5-Yr Inverter Warranty",
      badge: "Most Popular",
      badgeColor: "bg-[#FBB859]/25 text-[#EE6B00]",
    },
    {
      id: "pkg-8kw",
      name: "8 kW Hybrid / On-Grid System",
      type: "On-Grid with Net Metering Option",
      idealFor: "10 Marla – 1 Kanal Homes",
      unitsMonthly: "1,000 – 1,150 Units / Month",
      billSavings: "Rs. 60,000 – 70,000 / mo",
      loads: [
        "2–3 Inverter ACs simultaneously",
        "Full household appliances 24/7",
        "Heavy water pump (1.5 HP)",
        "Net metering export to MEPCO",
      ],
      hardware: [
        "14x Tier-1 585W Monocrystalline Panels",
        "8kW Hybrid or On-Grid Inverter (Three Phase)",
        "Heavy-duty wind-resistant framing",
        "Full MEPCO Green Meter documentation support",
      ],
      warranty: "25-Yr Panel Warranty • 5-Yr Inverter Warranty",
      badge: "High Performance",
      badgeColor: "bg-[#3C8C2E]/15 text-[#3C8C2E]",
    },
    {
      id: "pkg-10kw",
      name: "10 kW Turnkey Solar System",
      type: "Three-Phase Hybrid / Net-Metered",
      idealFor: "1 Kanal Homes & Commercial Plazas",
      unitsMonthly: "1,350 – 1,500 Units / Month",
      billSavings: "Rs. 80,000 – 95,000 / mo",
      loads: [
        "3–4 Inverter ACs simultaneously",
        "Commercial freezers / multi-door refrigerators",
        "Tube well pump or heavy commercial machinery",
        "Generates surplus units for MEPCO credits",
      ],
      hardware: [
        "18x Tier-1 585W Monocrystalline Panels",
        "10kW Three-Phase Hybrid / On-Grid Inverter",
        "High-density Lithium Battery or Tubular Bank",
        "Complete MEPCO Net-Metering Package",
      ],
      warranty: "25-Yr Panel Warranty • 5-Yr Inverter Warranty",
      badge: "Net Metering Leader",
      badgeColor: "bg-[#1B2A4A]/10 text-[#1B2A4A]",
    },
    {
      id: "pkg-15kw",
      name: "15 kW – 20 kW Commercial Solar",
      type: "Industrial & Commercial Three-Phase",
      idealFor: "Shopping Plazas, Hospitals, Factories",
      unitsMonthly: "2,000 – 2,800 Units / Month",
      billSavings: "Rs. 130,000 – 180,000 / mo",
      loads: [
        "Heavy commercial air conditioning systems",
        "Medical machinery, computers, elevators",
        "Industrial motors and cold storage units",
        "Significant reduction in Peak Hour tariffs",
      ],
      hardware: [
        "26x to 35x Tier-1 585W Monocrystalline Panels",
        "15kW – 20kW Three-Phase European/Asian Inverters",
        "Custom engineered rooftop / shed mounting",
        "Smart industrial energy management & tracking",
      ],
      warranty: "25-Yr Panel Warranty • 5-Yr Inverter Warranty",
      badge: "Commercial Grade",
      badgeColor: "bg-[#EFEDE7] text-[#1B2A4A]",
    },
    {
      id: "pkg-tubewell",
      name: "Agricultural Solar Tube Well (15–25 HP)",
      type: "VFD Solar Pumping System",
      idealFor: "Farms, Orchards & Agricultural Land",
      unitsMonthly: "Zero Grid Dependency",
      billSavings: "Eliminates Rs. 100k+ Diesel Costs",
      loads: [
        "15 HP to 25 HP water extraction tube well",
        "Runs throughout sunshine hours uninterrupted",
        "Variable Frequency Drive (VFD) soft start",
        "No high MEPCO agriculture bills",
      ],
      hardware: [
        "Tier-1 Solar Panels sized for motor horsepower",
        "Heavy-duty Solar VFD Inverter with MPPT",
        "Manual / Auto Tracking heavy ground structures",
        "Lightning arrestor & industrial earthing pit",
      ],
      warranty: "25-Yr Panel Warranty • 100% Reliable",
      badge: "Agricultural Powerhouse",
      badgeColor: "bg-[#3C8C2E]/15 text-[#3C8C2E]",
    },
  ];

  const panels = [
    {
      name: "Jinko Solar Tiger Neo 585W",
      tech: "N-Type TOPCon Technology",
      power: "575W – 590W",
      efficiency: "22.65% Maximum Efficiency",
      specs: [
        "N-Type cells with lower degradation (<1% Year 1)",
        "Exceptional performance under high South Punjab heat",
        "Bifacial generation option with rear-side gain",
        "IP68 junction box & 5400 Pa mechanical load",
      ],
      warranty: "25-Year Product & 30-Year Linear Output Warranty",
      badge: "Best Seller",
    },
    {
      name: "Longi Hi-MO 6 Explorer 585W",
      tech: "HPBC Cell Architecture",
      power: "580W – 595W",
      efficiency: "22.8% Module Efficiency",
      specs: [
        "Hybrid Passivated Back Contact (HPBC) technology",
        "No front busbars for a sleek all-black modern aesthetic",
        "Superior low-light morning & evening generation",
        "High resistance against micro-cracks and hail",
      ],
      warranty: "25-Year Factory Warranty",
      badge: "Ultra Premium",
    },
    {
      name: "JA Solar DeepBlue 4.0 Pro 580W",
      tech: "Bycium+ N-Type Monocrystalline",
      power: "570W – 585W",
      efficiency: "22.5% Module Efficiency",
      specs: [
        "Dual-glass bifacial architecture for durability",
        "Optimized temperature coefficient (-0.30%/°C)",
        "Zero PID (Potential Induced Degradation)",
        "Heavy-duty 35mm anodized aluminum frame",
      ],
      warranty: "30-Year Performance Warranty",
    },
    {
      name: "Canadian Solar HiKu7 580W",
      tech: "Mono PERC Super High Power",
      power: "560W – 580W",
      efficiency: "21.9% Module Efficiency",
      specs: [
        "Proven workhorse with millions of global deployments",
        "Split-cell design reduces internal resistance loss",
        "High shade tolerance & robust frame structure",
        "Compatible with all major hybrid and on-grid inverters",
      ],
      warranty: "25-Year Linear Output Warranty",
    },
  ];

  const inverters = [
    {
      name: "Knox Krypton / Argon Hybrid",
      range: "3 kW – 10 kW (Single & Three Phase)",
      features: [
        "Pure sine wave output with seamless battery switchover (<10ms)",
        "Dual MPPT tracker for multi-roof orientation setups",
        "Integrated WiFi module for mobile phone monitoring",
        "Supports both Lithium LiFePO4 and Tubular batteries",
      ],
      warranty: "5-Year Official Manufacturer Warranty",
      badge: "Most Popular in Punjab",
    },
    {
      name: "Inverex Nitrox Hybrid Series",
      range: "3 kW – 12 kW Hybrid",
      features: [
        "High PV input voltage capability up to 800V",
        "Large color touch LCD screen with intuitive settings",
        "IP65 waterproof rating for outdoor or covered installations",
        "Approved for MEPCO net metering and zero-export control",
      ],
      warranty: "5-Year Official Brand Warranty",
      badge: "Heavy Duty",
    },
    {
      name: "Huawei SUN2000 Smart Inverter",
      range: "3 kW – 20 kW On-Grid",
      features: [
        "98.6% European maximum efficiency rating",
        "AI-powered arc fault circuit protection (AFCI)",
        "Smart I-V curve diagnosis down to single string level",
        "Ideal for seamless net metering with zero grid drop",
      ],
      warranty: "5 to 10-Year Manufacturer Warranty",
      badge: "Tier-1 Global Leader",
    },
    {
      name: "Growatt / Solis Three-Phase",
      range: "5 kW – 30 kW",
      features: [
        "Flexible DC/AC ratio up to 1.5x for maximum panel loading",
        "Integrated DC switch and surge protection devices (SPDs)",
        "Compact transformerless topology with low noise operation",
        "Complete cloud telemetry and smartphone application",
      ],
      warranty: "5-Year Official Warranty",
    },
  ];

  const batteries = [
    {
      name: "Pylontech US5000 / US3000C Lithium",
      type: "48V 100Ah (4.8 kWh) LiFePO4",
      specs: [
        "6,000+ deep cycles at 90% Depth of Discharge (DOD)",
        "Built-in smart Battery Management System (BMS)",
        "Modular stackable design (expandable up to 16 units)",
        "Zero maintenance, 10–15 year operational lifespan",
      ],
      warranty: "10-Year Performance Warranty",
      badge: "Top Tier Lithium",
    },
    {
      name: "Inverex PowerWall LFP 5.12 kWh",
      type: "51.2V 100Ah Wall-Mounted Lithium",
      specs: [
        "Sleek space-saving wall-mount enclosure",
        "Direct CAN/RS485 communication with Knox & Inverex",
        "Integrated circuit breaker and LED charge indicator",
        "Rapid 1C charge/discharge capability",
      ],
      warranty: "5-Year Official Warranty",
    },
    {
      name: "AGS Tubular Deep-Cycle Gel Battery",
      type: "200Ah – 250Ah Deep Cycle",
      specs: [
        "Reinforced tubular positive plates for prolonged night backup",
        "High resistance to deep discharge cycles",
        "Specially formulated electrolyte for hot South Punjab climate",
        "Cost-effective energy storage solution",
      ],
      warranty: "Standard Manufacturer Warranty",
    },
    {
      name: "Osaka Tubular Deep-Cycle Solar Battery",
      type: "180Ah – 240Ah Tubular",
      specs: [
        "Optimized for uninterrupted power supply and hybrid inverters",
        "Low self-discharge rate with durable antimony alloy grids",
        "Easily serviceable with clear electrolyte level indicators",
      ],
      warranty: "Standard Manufacturer Warranty",
    },
  ];

  const accessories = [
    {
      title: "Galvanized Iron Structures (L2 / L3)",
      desc: "Custom heavy-gauge galvanized iron mounting structures designed for rooftop elevations, wind speeds up to 130 km/h, and optimum 25°–30° solar tilt.",
    },
    {
      title: "Pure Copper Solar Cables (DC / AC)",
      desc: "TUV-certified 4mm², 6mm², and 10mm² double-insulated tin-plated copper DC solar cables and Pakistan Cables / Fast Cables for AC wiring to minimize transmission loss.",
    },
    {
      title: "DC / AC Protection Breakers & SPDs",
      desc: "High-grade Suntree and FEEO DC circuit breakers, Class II Surge Protection Devices (SPDs), lightning arrestors, and automatic changeover switches.",
    },
    {
      title: "MEPCO Net Metering Bidirectional Meters",
      desc: "WAPDA / MEPCO approved three-phase green meters with full compliance documentation, inspection test reports, and bidirectional import/export tracking.",
    },
  ];

  const handleInquire = (productName: string) => {
    openModal(productName);
  };

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
            <span className="text-[#1B2A4A] font-bold">Products &amp; Packages</span>
          </div>

          <div className="max-w-3xl">
            <div className="animate-fade-up inline-flex items-center gap-2 bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] px-4 py-1.5 mb-5 shadow-site">
              <Sparkles className="w-3.5 h-3.5 text-[#F7941D]" />
              <span className="text-xs font-bold text-[#1B2A4A] uppercase tracking-wider">
                100% Genuine Tier-1 Hardware &amp; Turnkey Systems
              </span>
            </div>

            <h1
              className="animate-fade-up delay-100 text-3xl sm:text-5xl lg:text-6xl font-black text-[#1B2A4A] leading-[1.12] mb-5 tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Solar Hardware &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7941D] via-[#F7941D] to-[#3C8C2E]">
                Complete Packages
              </span>
            </h1>

            <p className="animate-fade-up delay-200 text-[#5B6472] text-base sm:text-lg leading-relaxed mb-6">
              Dream Solar Energy provides transparently priced, authentic solar equipment backed by direct
              manufacturer warranties. Choose a complete turnkey system for your home or purchase verified Tier-1
              panels, hybrid inverters, and lithium batteries directly from our store.
            </p>

            <div className="animate-fade-up delay-300 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#0F1B2E] text-white font-bold text-sm px-6 py-3 rounded-[8px] shadow-site transition-all cursor-pointer active:scale-98"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <Zap className="w-4 h-4 text-[#F7941D]" />
                <span>Request Custom Quote</span>
              </button>
              <a
                href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20would%20like%20to%20inquire%20about%20product%20prices."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm px-6 py-3 rounded-[8px] shadow-site transition-all cursor-pointer active:scale-98"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Price Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs / Filter Strip */}
      <section className="sticky top-[68px] z-30 bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#E2DFD6] py-3 px-4 sm:px-6 lg:px-8 shadow-site">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 flex-nowrap">
            {(
              [
                { id: "packages", label: "Complete Turnkey Packages", icon: Sparkles },
                { id: "panels", label: "Solar Panels (Tier-1)", icon: Sun },
                { id: "inverters", label: "Hybrid & On-Grid Inverters", icon: Zap },
                { id: "batteries", label: "Batteries & Storage", icon: Battery },
                { id: "accessories", label: "Mounting & Accessories", icon: Wrench },
              ] as const
            ).map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-[8px] whitespace-nowrap transition-all cursor-pointer active:scale-98 ${
                  activeTab === id
                    ? "bg-[#1B2A4A] text-white shadow-site"
                    : "bg-[#EFEDE7] text-[#5B6472] hover:bg-[#E2DFD6] hover:text-[#1B2A4A]"
                }`}
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-2 text-xs text-[#5B6472] whitespace-nowrap">
            <ShieldCheck className="w-4 h-4 text-[#3C8C2E]" />
            <span>100% Genuine Barcodes</span>
          </div>
        </div>
      </section>

      {/* Tab Content 1: Complete Turnkey Packages */}
      {activeTab === "packages" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#EFEDE7]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
              <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-1">
                Turnkey Solar Packages
              </span>
              <h2
                className="text-2xl sm:text-4xl font-black text-[#1B2A4A] tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Engineered for Maximum Bill Reduction
              </h2>
              <p className="text-[#5B6472] text-xs sm:text-sm mt-2">
                Every package includes Tier-1 panels, smart inverters, elevated galvanized structures,
                certified copper wiring, protection breakers, and professional turnkey installation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg, idx) => (
                <div
                  key={pkg.id}
                  className="bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] p-6 sm:p-7 shadow-site hover:border-[#1B2A4A]/40 transition-all flex flex-col justify-between group duration-500 animate-fade-up"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-[6px] border border-[#E2DFD6] ${pkg.badgeColor}`}>
                        {pkg.badge}
                      </span>
                      <span className="text-[11px] font-semibold text-[#5B6472]">{pkg.type}</span>
                    </div>

                    <h3
                      className="text-xl font-black text-[#1B2A4A] mb-2 leading-tight group-hover:text-[#F7941D] transition-colors"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {pkg.name}
                    </h3>
                    <p className="text-xs font-medium text-[#5B6472] mb-4">Ideal for: {pkg.idealFor}</p>

                    {/* Stats strip */}
                    <div className="bg-[#EFEDE7] border border-[#E2DFD6] rounded-[8px] p-3.5 mb-5 grid grid-cols-2 gap-2 text-center">
                      <div>
                        <p className="text-xs text-[#5B6472] font-semibold uppercase">Generation</p>
                        <p className="text-xs sm:text-sm font-bold text-[#1B2A4A]">{pkg.unitsMonthly}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#5B6472] font-semibold uppercase">Est. Savings</p>
                        <p className="text-xs sm:text-sm font-bold text-[#3C8C2E]">{pkg.billSavings}</p>
                      </div>
                    </div>

                    {/* What it runs */}
                    <div className="mb-4">
                      <p className="text-xs font-bold text-[#14202F] uppercase tracking-wider mb-2">
                        Supported Appliances:
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#5B6472]">
                        {pkg.loads.map((load) => (
                          <li key={load} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#3C8C2E] flex-shrink-0 mt-0.5" />
                            <span>{load}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hardware included */}
                    <div className="mb-5 pt-3 border-t border-[#E2DFD6]">
                      <p className="text-xs font-bold text-[#14202F] uppercase tracking-wider mb-2">
                        Hardware Included:
                      </p>
                      <ul className="space-y-1 text-[11px] text-[#5B6472]">
                        {pkg.hardware.map((hw) => (
                          <li key={hw} className="flex items-start gap-1.5">
                            <span className="text-[#F7941D]">•</span>
                            <span>{hw}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] text-[#5B6472] mb-4 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#3C8C2E] flex-shrink-0" />
                      <span>{pkg.warranty}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleInquire(pkg.name)}
                        className="w-full inline-flex items-center justify-center gap-1 bg-[#1B2A4A] hover:bg-[#0F1B2E] text-white font-bold text-xs py-3 rounded-[8px] shadow-site transition-all cursor-pointer active:scale-98"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        <Zap className="w-3.5 h-3.5 text-[#F7941D]" />
                        <span>Get Quote</span>
                      </button>

                      <a
                        href={`https://wa.me/923202200884?text=${encodeURIComponent(
                          `Hello Dream Solar Energy, I would like to inquire about price and details for the ${pkg.name}.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs py-3 rounded-[8px] shadow-site transition-all cursor-pointer active:scale-98"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab Content 2: Solar Panels */}
      {activeTab === "panels" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#EFEDE7]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
              <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-1">
                Tier-1 Monocrystalline Panels
              </span>
              <h2
                className="text-2xl sm:text-4xl font-black text-[#1B2A4A] tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                World-Class Solar Modules
              </h2>
              <p className="text-[#5B6472] text-xs sm:text-sm mt-2">
                All solar panels imported with official bill of lading, original verifiable barcodes,
                and linear 25-to-30-year performance warranties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {panels.map((p, idx) => (
                <div
                  key={p.name}
                  className="bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] p-7 shadow-site hover:border-[#1B2A4A]/40 transition-all flex flex-col justify-between animate-fade-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F7941D] bg-[#FBB859]/15 border border-[#F7941D]/30 px-3 py-1 rounded-[6px]">
                        <Award className="w-3.5 h-3.5 text-[#F7941D]" />
                        {p.tech}
                      </span>
                      {p.badge && (
                        <span className="text-[10px] font-bold bg-[#EFEDE7] text-[#1B2A4A] border border-[#E2DFD6] px-2.5 py-0.5 rounded-[6px]">
                          {p.badge}
                        </span>
                      )}
                    </div>

                    <h3
                      className="text-2xl font-black text-[#1B2A4A] mb-1"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {p.name}
                    </h3>
                    <p className="text-xs font-bold text-[#5B6472] mb-4">
                      Rated Power: <span className="text-[#1B2A4A] font-extrabold">{p.power}</span> • {p.efficiency}
                    </p>

                    <div className="space-y-2 mb-6">
                      {p.specs.map((spec) => (
                        <div key={spec} className="flex items-start gap-2 text-xs text-[#5B6472]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3C8C2E] flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="p-3 bg-[#EFEDE7] border border-[#E2DFD6] rounded-[8px] mb-4 text-xs font-medium text-[#5B6472] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#3C8C2E] flex-shrink-0" />
                      <span>{p.warranty}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleInquire(p.name)}
                        className="flex-1 bg-[#1B2A4A] hover:bg-[#0F1B2E] text-white font-bold text-xs py-3 rounded-[8px] shadow-site transition-all cursor-pointer active:scale-98"
                      >
                        Inquire Pricing
                      </button>
                      <a
                        href={`https://wa.me/923202200884?text=${encodeURIComponent(
                          `Hello Dream Solar Energy, I would like to check per-watt price and stock for ${p.name}.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs py-3 rounded-[8px] shadow-site transition-all cursor-pointer active:scale-98"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab Content 3: Inverters */}
      {activeTab === "inverters" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#EFEDE7]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
              <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-1">
                Hybrid, On-Grid &amp; Off-Grid Inverters
              </span>
              <h2
                className="text-2xl sm:text-4xl font-black text-[#1B2A4A] tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Intelligent Energy Conversion
              </h2>
              <p className="text-[#5B6472] text-xs sm:text-sm mt-2">
                High-efficiency pure sine wave solar inverters with dual MPPT, smartphone WiFi telemetry,
                and MEPCO net metering compatibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inverters.map((inv, idx) => (
                <div
                  key={inv.name}
                  className="bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] p-7 shadow-site hover:border-[#1B2A4A]/40 transition-all flex flex-col justify-between animate-fade-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#1B2A4A] bg-[#EFEDE7] border border-[#E2DFD6] px-3 py-1 rounded-[6px]">
                        {inv.range}
                      </span>
                      {inv.badge && (
                        <span className="text-[10px] font-bold bg-[#FBB859]/20 text-[#EE6B00] border border-[#F7941D]/30 px-2.5 py-0.5 rounded-[6px]">
                          {inv.badge}
                        </span>
                      )}
                    </div>

                    <h3
                      className="text-2xl font-black text-[#1B2A4A] mb-2"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {inv.name}
                    </h3>

                    <div className="space-y-2 mb-6">
                      {inv.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs text-[#5B6472]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3C8C2E] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="p-3 bg-[#EFEDE7] border border-[#E2DFD6] rounded-[8px] mb-4 text-xs font-medium text-[#5B6472] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#3C8C2E] flex-shrink-0" />
                      <span>{inv.warranty}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleInquire(inv.name)}
                        className="flex-1 bg-[#1B2A4A] hover:bg-[#0F1B2E] text-white font-bold text-xs py-3 rounded-[8px] shadow-site transition-all cursor-pointer active:scale-98"
                      >
                        Get Price
                      </button>
                      <a
                        href={`https://wa.me/923202200884?text=${encodeURIComponent(
                          `Hello Dream Solar Energy, I would like to check price and availability for ${inv.name}.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs py-3 rounded-[8px] shadow-site transition-all cursor-pointer active:scale-98"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab Content 4: Batteries */}
      {activeTab === "batteries" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#EFEDE7]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
              <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-1">
                Lithium LiFePO4 &amp; Deep-Cycle Tubular
              </span>
              <h2
                className="text-2xl sm:text-4xl font-black text-[#1B2A4A] tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Reliable Energy Storage Solutions
              </h2>
              <p className="text-[#5B6472] text-xs sm:text-sm mt-2">
                Keep your home and business powered uninterrupted through load shedding and dark nights
                with premium Lithium LiFePO4 and heavy-duty tubular battery banks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {batteries.map((b, idx) => (
                <div
                  key={b.name}
                  className="bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] p-7 shadow-site hover:border-[#1B2A4A]/40 transition-all flex flex-col justify-between animate-fade-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#3C8C2E] bg-[#3C8C2E]/15 border border-[#3C8C2E]/30 px-3 py-1 rounded-[6px]">
                        {b.type}
                      </span>
                      {b.badge && (
                        <span className="text-[10px] font-bold bg-[#FBB859]/20 text-[#EE6B00] border border-[#F7941D]/30 px-2.5 py-0.5 rounded-[6px]">
                          {b.badge}
                        </span>
                      )}
                    </div>

                    <h3
                      className="text-2xl font-black text-[#1B2A4A] mb-2"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {b.name}
                    </h3>

                    <div className="space-y-2 mb-6">
                      {b.specs.map((s) => (
                        <div key={s} className="flex items-start gap-2 text-xs text-[#5B6472]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3C8C2E] flex-shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="p-3 bg-[#EFEDE7] border border-[#E2DFD6] rounded-[8px] mb-4 text-xs font-medium text-[#5B6472] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#3C8C2E] flex-shrink-0" />
                      <span>{b.warranty}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleInquire(b.name)}
                        className="flex-1 bg-[#1B2A4A] hover:bg-[#0F1B2E] text-white font-bold text-xs py-3 rounded-[8px] shadow-site transition-all cursor-pointer active:scale-98"
                      >
                        Inquire Price
                      </button>
                      <a
                        href={`https://wa.me/923202200884?text=${encodeURIComponent(
                          `Hello Dream Solar Energy, I would like to inquire about price and stock for ${b.name}.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs py-3 rounded-[8px] shadow-site transition-all cursor-pointer active:scale-98"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab Content 5: Accessories & Balance of System */}
      {activeTab === "accessories" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#EFEDE7]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
              <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-1">
                Balance of System (BOS)
              </span>
              <h2
                className="text-2xl sm:text-4xl font-black text-[#1B2A4A] tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Structures, Cables &amp; Electrical Protection
              </h2>
              <p className="text-[#5B6472] text-xs sm:text-sm mt-2">
                A solar plant is only as reliable as its electrical hardware. We use heavy-duty galvanized iron
                structures, tin-plated copper cables, and international-grade circuit protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {accessories.map((acc, idx) => (
                <div
                  key={acc.title}
                  className="bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] p-7 shadow-site hover:border-[#1B2A4A]/40 transition-all flex flex-col justify-between animate-fade-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div>
                    <div className="w-10 h-10 rounded-[8px] bg-[#EFEDE7] border border-[#E2DFD6] text-[#1B2A4A] flex items-center justify-center mb-4">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <h3
                      className="text-xl font-bold text-[#1B2A4A] mb-2"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {acc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed mb-6">
                      {acc.desc}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/923202200884?text=${encodeURIComponent(
                      `Hello Dream Solar Energy, I would like to inquire about ${acc.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B2A4A] hover:text-[#F7941D] transition-colors"
                  >
                    <span>Inquire Specifications &amp; Pricing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Authenticity Guarantee Banner */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#F8F7F4] border-t border-[#E2DFD6]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1B2A4A] border border-[#0F1B2E] rounded-[8px] p-8 sm:p-10 text-white shadow-site flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold text-[#FBB859] uppercase tracking-widest block">
                Genuine Verification Guarantee
              </span>
              <h3
                className="text-2xl sm:text-3xl font-black text-white"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Scan &amp; Verify Every Panel at Our Store
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Every solar panel sold by Dream Solar Energy features a scannable QR code matching
                its internal flash test report. We guarantee 100% genuine Tier-1 hardware or your money back.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
              <button
                onClick={() => openModal()}
                className="bg-[#F7941D] hover:bg-[#EE6B00] text-[#0F1B2E] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-[8px] transition-all shadow-site cursor-pointer active:scale-98"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Get Free Custom Quote
              </button>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-[8px] transition-all cursor-pointer active:scale-98"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Visit Our Store
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
