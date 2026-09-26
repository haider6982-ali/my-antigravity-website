"use client";

import React, { useEffect, useRef, useState } from "react";
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
  FileCheck2,
  Sparkles,
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

export default function ServicesPage() {
  const { openModal } = useQuoteModal();

  /* animated line for workflow */
  const { ref: workflowRef, inView: workflowVisible } = useInView(0.15);
  const [lineW, setLineW] = useState(0);
  useEffect(() => {
    if (!workflowVisible) return;
    let start: number | null = null;
    const dur = 1600;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setLineW(p * 100);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [workflowVisible]);

  const { ref: cardsRef, inView: cardsVisible } = useInView(0.1);
  const { ref: standardsRef, inView: standardsVisible } = useInView(0.15);
  const { ref: ctaBannerRef, inView: ctaBannerVisible } = useInView(0.2);

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
      accent: "#F7941D",
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
      accent: "#F7941D",
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
      accent: "#1B2A4A",
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
      accent: "#3C8C2E",
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
      accent: "#22325A",
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
      accent: "#F7941D",
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
      desc: "We handle the complete MEPCO net-metering liaison to get your bidirectional green meter installed, backed by accessible local after-sales service from our Vehari office.",
    },
  ];

  const standards = [
    { title: "Elevated Galvanized Structures", detail: "Heavy gauge iron with anti-rust zinc coating, tested against 130 km/h wind gusts." },
    { title: "Pure Copper DC/AC Cabling", detail: "Double-insulated tin-plated copper solar wire to ensure minimal voltage drop over long runs." },
    { title: "Industrial Class II Surge SPDs", detail: "Guards delicate inverter microprocessors against grid voltage surges and lightning." },
    { title: "Certified Earthing & Grounding Pits", detail: "Deep bore chemical earthing pits tested for <5 Ohm resistance to ensure total user safety." },
  ];

  return (
    <div className="bg-[#F8F7F4]">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#EFEDE7] border-b border-[#E2DFD6] overflow-hidden relative">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-[520px] h-[360px] bg-[#F7941D]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[240px] bg-[#1B2A4A]/5 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5B6472] mb-6 animate-fade-up">
            <Link href="/" className="hover:text-[#1B2A4A] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1B2A4A] font-bold">Services & Installations</span>
          </div>

          <div className="max-w-3xl">
            <div className="animate-fade-up inline-flex items-center gap-2 bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] px-4 py-1.5 mb-5 shadow-site">
              <Sparkles className="w-3.5 h-3.5 text-[#F7941D]" />
              <span className="text-xs font-bold text-[#1B2A4A] uppercase tracking-wider">
                Full-Service Solar Engineering in South Punjab
              </span>
            </div>

            <h1
              className="animate-fade-up delay-100 text-3xl sm:text-5xl lg:text-6xl font-black text-[#1B2A4A] leading-[1.1] mb-5 tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Turnkey Solar Engineering{" "}
              <span className="shimmer-text">&amp; Installation</span>
            </h1>

            <p className="animate-fade-up delay-200 text-[#5B6472] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              From compact residential rooftop systems to massive industrial setups and agricultural tube wells,
              Dream Solar Energy delivers end-to-end solar solutions engineered for South Punjab&apos;s climate,
              backed by 25-year warranties and local accountability.
            </p>

            <div className="animate-fade-up delay-300 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center gap-2 bg-[#F7941D] hover:bg-[#EE6B00] text-[#0F1B2E] font-bold text-sm px-7 py-3.5 rounded-[8px] shadow-site transition-colors"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <Zap className="w-4 h-4" />
                <span>Book Free Site Survey</span>
              </button>

              <a
                href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20want%20to%20schedule%20a%20site%20survey%20for%20my%20property."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white font-bold text-sm px-7 py-3.5 rounded-[8px] transition-colors"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <div className="bg-[#1B2A4A] border-b border-[#0F1B2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { val: "500+", label: "Systems Installed" },
            { val: "6", label: "Service Categories" },
            { val: "48–72h", label: "Typical Deployment" },
            { val: "25 Yr", label: "Panel Warranty" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-black text-[#F7941D]" style={{ fontFamily: "var(--font-outfit)" }}>{s.val}</p>
              <p className="text-[11px] font-semibold text-[#EFEDE7]/70 uppercase tracking-wider mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Services Grid ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-2">
              End-to-End Capabilities
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B2A4A] tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Solar Solutions For Every Sector
            </h2>
            <p className="text-[#5B6472] text-sm sm:text-base mt-3">
              Explore our core installation domains across residential, commercial, industrial, and agriculture.
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((srv, i) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="bg-[#EFEDE7]/60 border border-[#E2DFD6] rounded-[8px] p-7 flex flex-col justify-between group hover:border-[#1B2A4A]/30 hover:shadow-site transition-all duration-300"
                  style={{
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? "translateY(0)" : "translateY(28px)",
                    transition: `opacity 0.55s ease ${i * 0.09}s, transform 0.55s ease ${i * 0.09}s`,
                  }}
                >
                  <div>
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-[8px] border flex items-center justify-center mb-5 transition-colors duration-300"
                      style={{
                        backgroundColor: `${srv.accent}12`,
                        borderColor: `${srv.accent}28`,
                        color: srv.accent,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3
                      className="text-xl font-black text-[#1B2A4A] mb-1 leading-tight group-hover:text-[#F7941D] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {srv.title}
                    </h3>
                    <p className="text-xs font-bold text-[#F7941D] mb-4">{srv.subtitle}</p>

                    <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed mb-5">
                      {srv.desc}
                    </p>

                    <div className="space-y-2 mb-6">
                      {srv.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs text-[#14202F]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3C8C2E] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] p-2.5 mb-4 text-[11px] font-semibold text-[#5B6472]">
                      Best For: <span className="text-[#1B2A4A] font-bold">{srv.idealFor}</span>
                    </div>

                    <button
                      onClick={() => openModal(srv.title)}
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-[#1B2A4A] hover:bg-[#F7941D] text-white hover:text-[#0F1B2E] font-bold text-xs py-3 rounded-[8px] transition-all duration-300 shadow-site"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      <span>Get Proposal For This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Animated Workflow Timeline ────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#EFEDE7] border-t border-[#E2DFD6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#3C8C2E] uppercase tracking-widest block mb-2">
              Precision Engineering Workflow
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B2A4A] tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              How We Execute Your Solar Project
            </h2>
            <p className="text-[#5B6472] text-sm sm:text-base mt-3">
              From site survey to green meter activation, we handle every technical and administrative step.
            </p>
          </div>

          {/* Timeline */}
          <div ref={workflowRef} className="relative">
            {/* Animated horizontal line — desktop */}
            <div className="hidden lg:block absolute top-[21px] left-[10%] right-[10%] h-[4px] bg-[#E2DFD6] rounded-full z-0 overflow-hidden shadow-inner">
              <div
                className={`h-full rounded-full relative overflow-hidden transition-none ${workflowVisible && lineW >= 99 ? "animate-process-gradient" : ""}`}
                style={{
                  width: `${lineW}%`,
                  background: "linear-gradient(90deg, #F7941D 0%, #EE6B00 20%, #FBB859 45%, #7CB342 75%, #3C8C2E 100%)",
                  backgroundSize: "200% 100%",
                  transition: "none",
                }}
              >
                {/* Live running energy beam from Process 1 to Process 5 */}
                {workflowVisible && lineW >= 60 && (
                  <div
                    className="absolute top-0 bottom-0 w-36 rounded-full animate-process-beam pointer-events-none"
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.95) 50%, rgba(124,179,66,0.7) 80%, transparent 100%)",
                      boxShadow: "0 0 12px 2px rgba(247,148,29,0.8), 0 0 20px 4px rgba(60,140,46,0.6)",
                    }}
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10 items-stretch">
              {workflow.map((item, i) => (
                <div
                  key={item.step}
                  className="flex flex-col items-start lg:items-center group h-full"
                  style={{
                    opacity: workflowVisible ? 1 : 0,
                    transform: workflowVisible ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 0.5s ease ${i * 0.13}s, transform 0.5s ease ${i * 0.13}s`,
                  }}
                >
                  {/* Node */}
                  <div className="relative mb-5 flex-shrink-0">
                    <div className="w-11 h-11 rounded-full bg-[#F8F7F4] border-2 border-[#E2DFD6] group-hover:border-[#F7941D] transition-colors duration-300 shadow-site flex items-center justify-center">
                      <span className="absolute inset-0 rounded-full border-2 border-[#F7941D]/0 group-hover:border-[#F7941D]/25 group-hover:scale-[1.4] transition-all duration-500" />
                    </div>
                    <span
                      className="absolute -top-1 left-1/2 -translate-x-1/2 text-[30px] font-black text-[#F7941D] leading-none select-none"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Card - equal height with flex-1 h-full */}
                  <div className="w-full h-full flex-1 flex flex-col justify-start bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] p-5 group-hover:border-[#1B2A4A]/25 group-hover:shadow-site transition-all duration-300">
                    <h3
                      className="font-black text-sm text-[#1B2A4A] mb-2 leading-snug"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#5B6472] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Engineering Standards ─────────────────────────────────────────── */}
      <section
        ref={standardsRef}
        className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1B2A4A] to-[#0F1B2E] text-white border-t border-[#0F1B2E] overflow-hidden relative"
      >
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#F7941D]/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[250px] bg-[#3C8C2E]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left copy */}
            <div
              className="lg:col-span-5 space-y-5"
              style={{
                opacity: standardsVisible ? 1 : 0,
                transform: standardsVisible ? "translateX(0)" : "translateX(-30px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <span className="text-xs font-bold text-[#FBB859] uppercase tracking-widest block">
                Engineering Integrity
              </span>
              <h2
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Zero Compromise on Technical Standards
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Cheap installations often fail during high-wind storms or suffer fire hazards due to thin wires
                and undersized breakers. We adhere to rigorous engineering standards for every installation.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => openModal()}
                  className="inline-flex items-center gap-2 bg-[#F7941D] hover:bg-[#EE6B00] text-[#0F1B2E] font-bold text-sm px-6 py-3 rounded-[8px] transition-colors shadow-site"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-bold text-sm px-6 py-3 rounded-[8px] transition-colors"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <span>Visit Our Office</span>
                </Link>
              </div>
            </div>

            {/* Right standards grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {standards.map((item, i) => (
                <div
                  key={item.title}
                  className="bg-white/8 border border-white/12 rounded-[8px] p-5 backdrop-blur-sm hover:bg-white/12 hover:border-white/20 transition-all duration-300"
                  style={{
                    opacity: standardsVisible ? 1 : 0,
                    transform: standardsVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease ${0.15 + i * 0.1}s, transform 0.5s ease ${0.15 + i * 0.1}s`,
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-[8px] bg-[#3C8C2E]/20 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#7CB342]" />
                    </div>
                    <h4 className="font-bold text-sm text-white leading-tight">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA Banner ──────────────────────────────────────────────── */}
      <section
        ref={ctaBannerRef}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F7F4] border-t border-[#E2DFD6]"
      >
        <div
          className="max-w-4xl mx-auto text-center"
          style={{
            opacity: ctaBannerVisible ? 1 : 0,
            transform: ctaBannerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-3">
            Start Your Solar Journey
          </span>
          <h2
            className="text-2xl sm:text-4xl font-black text-[#1B2A4A] tracking-tight mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Ready to Cut Your Electricity Bill to Zero?
          </h2>
          <p className="text-[#5B6472] text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Book a free, no-obligation site survey today. Our engineers will visit your property, analyse your bills,
            and deliver a detailed proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F7941D] hover:bg-[#EE6B00] text-[#0F1B2E] font-bold text-sm px-8 py-4 rounded-[8px] transition-colors shadow-site"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <Zap className="w-4 h-4" />
              <span>Book Free Site Survey</span>
            </button>
            <a
              href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20would%20like%20to%20inquire%20about%20a%20solar%20installation."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white font-bold text-sm px-8 py-4 rounded-[8px] transition-colors"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: 0320-2200884</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
