"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  Store,
  Factory,
  Wheat,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Wrench,
  Activity,
  FileCheck2,
  Sparkles,
  Phone,
} from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";

export default function ServicesPage() {
  const { openModal } = useQuoteModal();

  const services = [
    {
      id: "residential",
      icon: Home,
      title: "Residential Solar Systems",
      subtitle: "4 kW to 20 kW Turnkey Rooftop Setups",
      desc: "Custom-designed rooftop solar systems for private residences, villas, and housing societies. Cut monthly electricity bills by up to 90%, run multiple inverter air conditioners during daytime, and enjoy silent battery backup during power outages.",
      features: [
        "Hybrid or on-grid systems with net metering",
        "Daytime solar direct running for ACs, refrigerators & pumps",
        "Lithium LiFePO4 or tubular battery banks for night power",
        "Aesthetic elevated structures preserving rooftop terrace utility",
      ],
      idealFor: "3 Marla, 5 Marla, 10 Marla & 1 Kanal+ Homes",
      color: "border-sky-200 bg-sky-50/40 text-sky-800",
    },
    {
      id: "commercial",
      icon: Store,
      title: "Commercial & Retail Solar",
      subtitle: "Shops, Commercial Plazas & Offices",
      desc: "Commercial electricity tariffs in Pakistan are among the highest. Our commercial systems offset high-cost daytime grid consumption, drastically reducing overhead expenses for showroom owners, shopping plazas, and private clinics in Vehari.",
      features: [
        "Heavy daytime load optimization for commercial ACs & lighting",
        "Fast 2 to 3-year financial payback period",
        "Three-phase balanced power distribution",
        "Cloud-based smartphone generation monitoring",
      ],
      idealFor: "Retail Shops, Commercial Showrooms, Offices & Clinics",
      color: "border-amber-200 bg-amber-50/40 text-amber-800",
    },
    {
      id: "industrial",
      icon: Factory,
      title: "Industrial Solar Power Plants",
      subtitle: "50 kW to 500 kW+ Heavy Duty Installations",
      desc: "Engineered for cotton ginning factories, cold storage units, textile mills, and manufacturing plants across South Punjab. Designed to handle heavy motor inductive loads, synchronize with diesel generators, and maximize return on capital.",
      features: [
        "High-voltage synchronization and generator fuel saving",
        "Substantial reduction in peak-hour MEPCO demand charges",
        "Heavy-duty industrial shed and ground mount structures",
        "Continuous string-level telemetry and fault detection",
      ],
      idealFor: "Factories, Warehouses, Cold Storages & Processing Units",
      color: "border-slate-200 bg-slate-50/60 text-slate-800",
    },
    {
      id: "agricultural",
      icon: Wheat,
      title: "Agricultural Solar Tube Wells",
      subtitle: "15 HP to 25 HP High-Horsepower Pumping",
      desc: "Replace expensive diesel engines and erratic agricultural grid power with dependable solar energy. Our VFD solar pumping systems run heavy submersible or centrifugal water pumps from morning to evening with zero fuel costs.",
      features: [
        "Variable Frequency Drive (VFD) for soft start & motor longevity",
        "Operates directly on solar panels with no grid requirement",
        "Tested heavy galvanized structures with seasonal tilt adjustment",
        "Substantially lowers per-acre agricultural irrigation cost",
      ],
      idealFor: "Farms, Orchards, Landlords & Fish Farms",
      color: "border-emerald-200 bg-emerald-50/40 text-emerald-800",
    },
    {
      id: "net-metering",
      icon: FileCheck2,
      title: "MEPCO Net Metering Facilitation",
      subtitle: "Turn Your Solar System into an Income Source",
      desc: "Sell surplus solar units back to MEPCO (WAPDA) through bidirectional green meters. Dream Solar Energy manages the entire administrative and technical process from initial load feasibility to green meter activation.",
      features: [
        "Preparation of certified single-line diagrams (SLDs)",
        "NEPRA & MEPCO application filing and document tracking",
        "Testing, inspection, and official NOC acquisition",
        "Bidirectional green meter installation and billing activation",
      ],
      idealFor: "Residential, Commercial & Industrial 3-Phase Systems",
      color: "border-purple-200 bg-purple-50/40 text-purple-800",
    },
    {
      id: "maintenance",
      icon: Wrench,
      title: "Maintenance, Audit & Cleaning",
      subtitle: "Protect Your 25-Year Energy Investment",
      desc: "Dust, hot spots, and loose connections can reduce solar yield by 15% to 30%. Our specialized technical team offers scheduled panel cleaning, thermal imaging scans, wiring maintenance, and inverter firmware updates.",
      features: [
        "Professional dust and residue chemical-free washing",
        "Infrared thermal imaging to detect hot spots and damaged cells",
        "Earthing resistance checking and connection tightening",
        "Inverter parameter recalibration for optimal solar harvesting",
      ],
      idealFor: "All Existing Solar Installations in South Punjab",
      color: "border-blue-200 bg-blue-50/40 text-blue-800",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Free Site Survey & Energy Audit",
      desc: "Our engineers visit your site in Vehari or surrounding districts to inspect roof integrity, orientation, shadow obstructions, and analyze your last 12 months of electricity bills.",
    },
    {
      step: "02",
      title: "Custom Engineering & Design",
      desc: "We design a high-efficiency layout using Tier-1 N-Type panels and sized inverters. You receive a transparent proposal detailing hardware specs, estimated generation, and payback.",
    },
    {
      step: "03",
      title: "Turnkey Installation & Mounting",
      desc: "Certified technicians erect elevated heavy-gauge galvanized structures, lay pure copper double-insulated DC wires, and mount inverters and safety breakers in just 48 to 72 hours.",
    },
    {
      step: "04",
      title: "Testing, Commissioning & App Setup",
      desc: "We conduct complete electrical safety checks, test earthing pits, verify string voltages, and configure mobile app monitoring on your smartphone for real-time solar tracking.",
    },
    {
      step: "05",
      title: "Net Metering & 25-Year Support",
      desc: "We handle the complete MEPCO net-metering liaison to get your bidirectional green meter installed, backed by accessible local after-sales service from our Vehari showroom.",
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero Header */}
      <section className="pt-32 pb-14 sm:pb-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/70 via-white to-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#0D2354] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#0D2354] font-bold">Services &amp; Installations</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/80 rounded-full px-4 py-1.5 mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-xs font-bold text-[#0D2354] uppercase tracking-wider">
                Full-Service Solar Engineering in South Punjab
              </span>
            </div>

            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0D2354] leading-[1.12] mb-5 tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Turnkey Solar Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#16A34A]">
                &amp; Installation
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              From compact residential rooftop systems to massive industrial setups and agricultural tube wells,
              Dream Solar Energy delivers end-to-end solar solutions engineered for South Punjab&apos;s climate,
              backed by 25-year warranties and local accountability.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center gap-2 bg-[#0D2354] hover:bg-[#163574] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <Zap className="w-4 h-4 text-[#F59E0B]" />
                <span>Book Free Site Survey</span>
              </button>

              <a
                href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20want%20to%20schedule%20a%20site%20survey%20for%20my%20property."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-sm transition-all"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Survey Booking</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest block mb-1">
              End-to-End Capabilities
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0D2354] tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Solar Solutions For Every Sector
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Explore our core installation domains across residential, commercial, industrial, and agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="bg-white border border-slate-200/90 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0D2354]/5 border border-[#0D2354]/10 flex items-center justify-center text-[#0D2354] mb-5 group-hover:bg-[#0D2354] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3
                      className="text-xl font-black text-[#0D2354] mb-1 leading-tight group-hover:text-amber-600 transition-colors"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {srv.title}
                    </h3>
                    <p className="text-xs font-bold text-amber-700 mb-3">{srv.subtitle}</p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {srv.desc}
                    </p>

                    <div className="space-y-2 mb-6">
                      {srv.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 mb-4 text-[11px] font-semibold text-slate-500">
                      Best For: <span className="text-[#0D2354] font-bold">{srv.idealFor}</span>
                    </div>

                    <button
                      onClick={() => openModal(srv.title)}
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-[#0D2354] hover:bg-[#163574] text-white font-bold text-xs py-3 rounded-xl transition-all shadow-sm"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      <span>Get Proposal For This Service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5-Step Turnkey Process */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#16A34A] uppercase tracking-widest block mb-1">
              Precision Engineering Workflow
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0D2354] tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              How We Execute Your Solar Project
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From site survey to green meter activation, we handle every technical and administrative step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflow.map((item, idx) => (
              <div
                key={item.step}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 relative hover:bg-sky-50/40 hover:border-sky-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <span
                    className="text-3xl font-black text-[#F59E0B] block mb-3 opacity-90"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {item.step}
                  </span>
                  <h3
                    className="font-bold text-base text-[#0D2354] mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structural & Safety Standards */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0D2354] to-[#163574] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block">
                Engineering Integrity
              </span>
              <h2
                className="text-3xl sm:text-4xl font-black text-white tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Zero Compromise on Technical Standards
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Cheap installations often fail during high-wind storms or suffer fire hazards due to thin wires
                and undersized breakers. We adhere to rigorous engineering standards for every installation.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <span>Consult With Tariq Mahmood</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Elevated Galvanized Structures", detail: "Heavy gauge iron with anti-rust zinc coating, tested against 130 km/h wind gusts." },
                { title: "Pure Copper DC/AC Cabling", detail: "Double-insulated tin-plated copper solar wire to ensure minimal voltage drop over long runs." },
                { title: "Industrial Class II Surge SPDs", detail: "Guards delicate inverter microprocessors against grid voltage surges and lightning." },
                { title: "Certified Earthing & Grounding Pits", detail: "Deep bore chemical earthing pits tested for <5 Ohm resistance to ensure total user safety." },
              ].map((item) => (
                <div key={item.title} className="bg-white/10 border border-white/15 rounded-2xl p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <h4 className="font-bold text-sm text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
