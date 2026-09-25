"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  ShieldCheck,
  Award,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  User,
  Wrench,
  Battery,
  Cpu,
  Home,
  Store,
  Factory,
  Wheat,
} from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";

export default function AboutPage() {
  const { openModal } = useQuoteModal();

  const milestones = [
    { value: "500+", label: "Solar Installations", desc: "Across homes, commercial plazas, and tube wells" },
    { value: "3.5+ MW", label: "Clean Power Deployed", desc: "Generating millions of kWh every year" },
    { value: "100%", label: "Tier-1 Genuine Hardware", desc: "Original QR-verifiable panels & inverters" },
    { value: "25 Years", label: "Performance Warranty", desc: "Backed by direct manufacturer guarantees" },
  ];

  const coreValues = [
    {
      title: "100% Genuine Tier-1 Hardware",
      desc: "We strictly reject sub-standard, refurbished, or B-grade solar panels. Every panel and inverter supplied by Dream Solar Energy carries genuine factory barcodes, serial numbers, and manufacturer warranties.",
      icon: Award,
    },
    {
      title: "Engineered For South Punjab Climate",
      desc: "Our installations are designed to withstand high summer temperatures, dust storms, and seasonal humidity. We use elevated heavy-gauge galvanized iron structures and heat-tolerant N-type cell technology.",
      icon: ShieldCheck,
    },
    {
      title: "Complete Turnkey Execution",
      desc: "From initial shadow analysis and load calculation to structural fabrication, electrical wiring, and MEPCO net-metering synchronization, our in-house team handles every stage seamlessly.",
      icon: Wrench,
    },
    {
      title: "Local Office & Accountability",
      desc: "Unlike temporary online vendors, our physical office on Allama Iqbal Road is open 6 days a week. We stand behind every installation with accessible, lifelong after-sales service.",
      icon: Users,
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero Header */}
      <section className="pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/70 via-white to-white relative overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-amber-200/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 left-10 w-[350px] h-[300px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#0D2354] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#0D2354] font-bold">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="animate-fade-up inline-flex items-center gap-2 bg-amber-50 border border-amber-200/80 rounded-full px-4 py-1.5 mb-5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                <span className="text-xs font-bold text-[#0D2354] uppercase tracking-wider">
                  About Dream Solar Energy
                </span>
              </div>

              <h1
                className="animate-fade-up delay-100 text-3xl sm:text-5xl lg:text-6xl font-black text-[#0D2354] leading-[1.12] mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Powering South Punjab With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#16A34A]">
                  Dependable Clean Energy
                </span>
              </h1>

              <p className="animate-fade-up delay-200 text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mb-8">
                Founded and managed by <strong className="text-[#0D2354]">Tariq Mahmood</strong>, Dream Solar Energy
                is your premier destination for high-efficiency solar equipment and precision turnkey installations.
                We help families, businesses, factories, and agricultural landowners eliminate soaring utility bills
                with reliable, long-lasting solar solutions.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openModal()}
                  className="inline-flex items-center gap-2 bg-[#0D2354] hover:bg-[#163574] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <Zap className="w-4 h-4 text-[#F59E0B]" />
                  <span>Request Free Survey</span>
                </button>

                <a
                  href="https://wa.me/923202200884?text=Hello%20Tariq%20Mahmood%2C%20I%20would%20like%20to%20know%20more%20about%20Dream%20Solar%20Energy."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-sm transition-all"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Logo Emblem Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-sky-300 shadow-2xl bg-[#5CB3E8] p-4 flex items-center justify-center">
                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="/dream-solar-logo.jpg"
                    alt="Dream Solar Energy Emblem"
                    fill
                    className="object-contain scale-90"
                    priority
                    sizes="(max-width: 768px) 256px, 288px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones / Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map(({ value, label, desc }) => (
              <div
                key={label}
                className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-6 text-center hover:bg-white hover:border-amber-200 hover:shadow-md transition-all"
              >
                <p
                  className="text-3xl sm:text-4xl font-black text-[#0D2354] mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {value}
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-1">
                  {label}
                </p>
                <p className="text-xs text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Spotlight: Tariq Mahmood */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#0D2354] to-[#163574] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-amber-400/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-24 h-24 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center mb-4">
                  <User className="w-12 h-12 text-amber-300" />
                </div>
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-1">
                  Business Owner &amp; Director
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-black text-white tracking-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Tariq Mahmood
                </h2>
                <p className="text-sm text-slate-300 mt-1">Dream Solar Energy — Vehari</p>

                <div className="mt-6 pt-6 border-t border-white/10 w-full flex flex-col gap-2.5 text-xs text-slate-300">
                  <a href="tel:03202200884" className="flex items-center gap-2 hover:text-amber-300 transition-colors">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>0320-2200884</span>
                  </a>
                  <a href="mailto:tariqdp36@gmail.com" className="flex items-center gap-2 hover:text-sky-300 transition-colors">
                    <Zap className="w-4 h-4 text-sky-400" />
                    <span>tariqdp36@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>Allama Iqbal Road, Vehari</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 lg:border-l lg:border-white/10 lg:pl-10">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3.5 py-1 mb-4">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Our Leadership Vision
                  </span>
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  &ldquo;A solar system is a 25-year commitment. We refuse to compromise on hardware quality.&rdquo;
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  When families and businesses in South Punjab invest in solar energy, they are seeking relief
                  from unpredictable electricity costs and frequent power outages. Too often, consumers are sold
                  untested, uncertified panels that degrade after just two or three years.
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  At Dream Solar Energy, our principle is simple: every panel must be an authentic Tier-1 unit
                  with direct manufacturer backing. Every cable must be genuine heavy-duty copper. Every frame
                  must be engineered to endure severe winds. When you visit our Vehari store or contact us, you
                  speak directly to solar specialists who genuinely care about your long-term energy independence.
                </p>

                <div className="flex flex-wrap gap-4 text-xs font-semibold text-amber-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Transparent Pricing
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Genuine Serial Numbers
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Rapid Warranty Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Wings of Our Business */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest block mb-2">
              Comprehensive Operations
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0D2354] tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              What We Do at Dream Solar Energy
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              We operate both as an authorized distributor of world-class solar equipment and as an engineering team
              providing turnkey installations across residential, commercial, industrial, and agricultural sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Wing 1: Hardware Sales */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 text-amber-800 flex items-center justify-center mb-5">
                <Sun className="w-6 h-6" />
              </div>
              <h3
                className="text-2xl font-black text-[#0D2354] mb-3"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                1. Solar Hardware Sales &amp; Supply
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                We supply individual equipment, components, and replacement parts to homeowners, local electricians,
                contractors, and businesses throughout Vehari and neighboring districts.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { title: "Solar Panels", detail: "Jinko Solar (Tiger Neo N-Type), Longi (Hi-MO 6), JA Solar (DeepBlue)" },
                  { title: "Smart Inverters", detail: "Knox, Inverex (Nitrox), Huawei, Growatt, Solis (Hybrid & On-Grid)" },
                  { title: "Batteries", detail: "Pylontech & Inverex Lithium (LiFePO4) & AGS/Osaka Deep-Cycle Tubular" },
                  { title: "Accessories & BOS", detail: "Galvanized L2/L3 frames, pure copper DC/AC cables, breakers, SPDs, net meters" },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-slate-200/60 rounded-xl p-3.5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#0D2354] block">{item.title}</span>
                      <span className="text-xs text-slate-500">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0D2354] hover:text-[#F59E0B] transition-colors"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <span>Browse Hardware Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Wing 2: Turnkey Installations */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-200 text-sky-800 flex items-center justify-center mb-5">
                <Wrench className="w-6 h-6" />
              </div>
              <h3
                className="text-2xl font-black text-[#0D2354] mb-3"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                2. Complete Turnkey Installations
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our certified technicians design, engineer, mount, wire, and commission customized solar power systems
                that guarantee maximum efficiency and zero hassle for the property owner.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { title: "Residential Homes", detail: "4 kW to 20 kW on-grid and hybrid setups for villas, bungalows & housing societies." },
                  { title: "Commercial & Retail", detail: "Shops, shopping plazas, and offices looking to slash high commercial tariffs." },
                  { title: "Industrial Plants", detail: "50 kW to 500 kW+ high-load systems for cotton ginning factories, cold storages & mills." },
                  { title: "Agricultural Solar Tube Wells", detail: "High-horsepower VFD solar pumping systems to irrigate farmlands without diesel." },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-slate-200/60 rounded-xl p-3.5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#0D2354] block">{item.title}</span>
                      <span className="text-xs text-slate-500">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0D2354] hover:text-[#F59E0B] transition-colors"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <span>Explore Installation Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#16A34A] uppercase tracking-widest block mb-2">
              Our Core Standards
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0D2354] tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Why Vehari Trusts Dream Solar
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Engineered with precision, built for longevity, backed by local accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3
                  className="font-bold text-base text-[#0D2354] mb-2"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom & Contact CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 mb-4">
            <MapPin className="w-3.5 h-3.5 text-sky-700" />
            <span className="text-xs font-bold text-sky-900 uppercase tracking-wider">
              Visit Our Office
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-black text-[#0D2354] tracking-tight mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Ready to Plan Your Solar System?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Visit our store on Allama Iqbal Road, near Bank of Punjab, Vehari — or request a free site visit
            and energy audit from our engineering team today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D2354] hover:bg-[#163574] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition-all"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <span>View Contact &amp; Location Details</span>
              <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            </Link>

            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold text-sm px-8 py-3.5 rounded-xl shadow-sm transition-all"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <Zap className="w-4 h-4" />
              <span>Get Free Quotation</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
