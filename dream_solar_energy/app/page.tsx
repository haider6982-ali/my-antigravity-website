"use client";

import React from "react";
import Link from "next/link";
import {
  Sun,
  Zap,
  Battery,
  Wrench,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  MapPin,
  Phone,
  MessageSquare,
  Home as HomeIcon,
  Store,
  Factory,
  Wheat,
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SavingsCalculator from "@/components/sections/SavingsCalculator";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";

export default function HomePage() {
  const { openModal } = useQuoteModal();

  const brands = [
    { name: "Jinko Solar", tag: "Tier-1 N-Type TOPCon Panels" },
    { name: "Longi Solar", tag: "Hi-MO 6 Advanced HPBC" },
    { name: "JA Solar", tag: "DeepBlue Bifacial Modules" },
    { name: "Knox Solar", tag: "Smart Hybrid Inverters" },
    { name: "Inverex", tag: "Nitrox & Lithium WallMount" },
    { name: "Huawei", tag: "SUN2000 European High-Efficiency" },
    { name: "Pylontech", tag: "LiFePO4 Lithium Battery Storage" },
    { name: "Growatt", tag: "Three-Phase Grid-Tied" },
  ];

  const coreServices = [
    {
      icon: Sun,
      title: "Solar Hardware Sales",
      desc: "Authorized wholesale and retail sales of Tier-1 solar panels, smart inverters, lithium batteries, and galvanized frames.",
      link: "/products",
      linkText: "Browse Hardware",
    },
    {
      icon: HomeIcon,
      title: "Residential Solar Systems",
      desc: "4 kW to 20 kW custom rooftop setups for houses and housing schemes. Cut electricity bills by up to 90% with zero load shedding.",
      link: "/services",
      linkText: "Home Solar Details",
    },
    {
      icon: Store,
      title: "Commercial & Industrial",
      desc: "High-yield commercial solar systems for shops, shopping plazas, cotton factories, and cold storages to slash peak tariff costs.",
      link: "/services",
      linkText: "Commercial Solutions",
    },
    {
      icon: Wheat,
      title: "Agricultural Solar Tube Wells",
      desc: "15 HP to 25 HP VFD solar pumping systems that completely replace diesel motors, irrigating fields 365 days a year for free.",
      link: "/services",
      linkText: "Tube Well Systems",
    },
  ];

  const featuredPackages = [
    {
      name: "4 kW Residential Package",
      ideal: "3 to 5 Marla Homes",
      units: "~450–520 Units/mo",
      savings: "Save Rs. 25,000–30,000/mo",
      runs: "1 Inverter AC + Refrigerator + Water Pump + Fans/Lights",
      badge: "Budget Friendly",
      badgeHighlight: false,
    },
    {
      name: "6 kW Hybrid System",
      ideal: "5 to 10 Marla Homes",
      units: "~750–850 Units/mo",
      savings: "Save Rs. 42,000–50,000/mo",
      runs: "2 Inverter ACs + Full Household + Lithium/Tubular Night Backup",
      badge: "Most Popular",
      badgeHighlight: true,
    },
    {
      name: "10 kW Turnkey Package",
      ideal: "1 Kanal Homes & Plazas",
      units: "~1,350–1,500 Units/mo",
      savings: "Save Rs. 80,000–95,000/mo",
      runs: "3–4 ACs simultaneously + Commercial Loads + Net Metering Export",
      badge: "Net Metering Leader",
      badgeHighlight: false,
    },
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection onOpenModal={() => openModal()} />

      {/* 2. Authorized Tier-1 Brands Bar (bg-subtle alternation) */}
      <section className="py-10 bg-[#EFEDE7] border-y border-[#E2DFD6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] font-bold text-[#5B6472] uppercase tracking-widest mb-6">
            Authorized Tier-1 Brands &amp; Hardware Partners
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-center">
            {brands.map((b) => (
              <div
                key={b.name}
                className="bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] p-3 text-center transition-colors hover:border-[#F7941D]"
              >
                <p className="font-extrabold text-xs text-[#1B2A4A]" style={{ fontFamily: "var(--font-outfit)" }}>
                  {b.name}
                </p>
                <p className="text-[9px] text-[#5B6472] truncate mt-0.5">{b.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Dream Solar Teaser (bg-base) */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block">
                Who We Are
              </span>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B2A4A] tracking-tight leading-[1.15]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Your Trusted Partner in{" "}
                <span className="text-[#F7941D]">
                  Clean Solar Power
                </span>
              </h2>

              <p className="text-[#5B6472] text-sm sm:text-base leading-relaxed">
                Dream Solar Energy is dedicated to transparent, engineering-grade solar solutions. We supply
                100% authentic Tier-1 solar panels, inverters, and lithium storage batteries, coupled with
                certified installation for homes, shops, factories, and agricultural lands across South Punjab.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-[#EFEDE7] border border-[#E2DFD6] rounded-[8px] p-4">
                  <p className="text-2xl sm:text-3xl font-black text-[#1B2A4A]" style={{ fontFamily: "var(--font-outfit)" }}>
                    500+
                  </p>
                  <p className="text-xs font-semibold text-[#5B6472] uppercase mt-0.5">Systems Installed</p>
                </div>
                <div className="bg-[#EFEDE7] border border-[#E2DFD6] rounded-[8px] p-4">
                  <p className="text-2xl sm:text-3xl font-black text-[#3C8C2E]" style={{ fontFamily: "var(--font-outfit)" }}>
                    100%
                  </p>
                  <p className="text-xs font-semibold text-[#5B6472] uppercase mt-0.5">Tier-1 Hardware</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-[#F8F7F4] font-bold text-xs sm:text-sm px-6 py-3 rounded-[8px] transition-colors"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <span>Learn More About Our Company</span>
                  <ArrowRight className="w-4 h-4 text-[#F7941D]" />
                </Link>
              </div>
            </div>

            {/* Showcase Visual Card (primary-700 navy, 8px radius) */}
            <div className="lg:col-span-6 bg-[#1B2A4A] border border-[#0F1B2E] rounded-[8px] p-8 sm:p-10 text-white shadow-site relative overflow-hidden">
              <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-2">
                Our Guarantee
              </span>
              <h3
                className="text-2xl sm:text-3xl font-black text-white mb-4"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Why Choose Dream Solar Energy?
              </h3>

              <div className="space-y-3.5 mb-6">
                {[
                  "100% Original Tier-1 Solar Panels with Verifiable Barcodes",
                  "Heavy-Gauge Galvanized Iron Structures (Wind Tested)",
                  "Pure Copper Double-Insulated DC & AC Wiring",
                  "Full MEPCO Green Net-Metering Documentation & Approval",
                  "Local Office on Allama Iqbal Road, Vehari",
                  "25-Year Manufacturer Warranty Support & Quick Claims",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold">Dream Solar Energy — Vehari, Punjab</span>
                <a href="tel:03202200884" className="font-bold text-[#F7941D] hover:underline">
                  0320-2200884
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Offerings Grid (bg-subtle) */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#EFEDE7] border-t border-[#E2DFD6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-2">
              What We Do
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B2A4A] tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Comprehensive Solar Solutions
            </h2>
            <p className="text-[#5B6472] text-sm sm:text-base mt-2">
              From individual component sales to large-scale industrial plants and tube wells.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {coreServices.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.title}
                  className="bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] p-6 transition-all hover:border-[#1B2A4A]/40 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-[8px] bg-[#EFEDE7] border border-[#E2DFD6] text-[#1B2A4A] flex items-center justify-center mb-4 group-hover:bg-[#1B2A4A] group-hover:text-[#F8F7F4] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3
                      className="font-bold text-base sm:text-lg text-[#1B2A4A] mb-2"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed mb-6">
                      {srv.desc}
                    </p>
                  </div>

                  <Link
                    href={srv.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B2A4A] hover:text-[#F7941D] transition-colors"
                  >
                    <span>{srv.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F7941D]" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1B2A4A] hover:text-[#F7941D] transition-colors"
            >
              <span>Explore All Installation Services &amp; Technical Standards</span>
              <ArrowRight className="w-4 h-4 text-[#F7941D]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Featured Solar Packages Preview (bg-base) */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F4] border-t border-[#E2DFD6]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-[#3C8C2E] uppercase tracking-widest block mb-2">
                Top Solar Packages
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B2A4A] tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Popular Turnkey Solar Systems
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1B2A4A] hover:text-[#F7941D] transition-colors"
            >
              <span>View All Packages &amp; Hardware Catalog</span>
              <ArrowRight className="w-4 h-4 text-[#F7941D]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-[#EFEDE7]/70 border border-[#E2DFD6] rounded-[8px] p-6 sm:p-7 transition-all hover:border-[#1B2A4A]/40 flex flex-col justify-between"
              >
                <div>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-[6px] inline-block mb-3 border ${
                      pkg.badgeHighlight
                        ? "bg-[#F7941D]/15 text-[#EE6B00] border-[#F7941D]/30"
                        : "bg-[#F8F7F4] text-[#1B2A4A] border-[#E2DFD6]"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                  <h3
                    className="text-xl font-black text-[#1B2A4A] mb-1"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#5B6472] mb-4">{pkg.ideal}</p>

                  <div className="bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] p-3.5 mb-4 space-y-1 text-center">
                    <p className="text-[11px] text-[#5B6472] font-semibold uppercase">Expected Output</p>
                    <p className="text-sm font-bold text-[#1B2A4A]">{pkg.units}</p>
                    <p className="text-xs font-bold text-[#3C8C2E]">{pkg.savings}</p>
                  </div>

                  <div className="text-xs text-[#5B6472] mb-6 space-y-1.5">
                    <p className="font-bold text-[#14202F]">Runs:</p>
                    <p>{pkg.runs}</p>
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <button
                    onClick={() => openModal(pkg.name)}
                    className="flex-1 bg-[#F7941D] hover:bg-[#EE6B00] text-[#0F1B2E] font-bold text-xs py-3 rounded-[8px] transition-colors shadow-site"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Get Quote
                  </button>
                  <a
                    href={`https://wa.me/923202200884?text=${encodeURIComponent(
                      `Hello Dream Solar Energy, I would like to inquire about price and details for the ${pkg.name}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-3.5 py-3 border border-[#E2DFD6] hover:bg-[#EFEDE7] text-[#1B2A4A] rounded-[8px] transition-colors"
                    aria-label="Inquire on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-[#F8F7F4] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-[8px] transition-colors"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <span>Explore All Solar Hardware &amp; Packages</span>
              <ArrowRight className="w-4 h-4 text-[#F7941D]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Interactive Savings Calculator Widget */}
      <SavingsCalculator onOpenModal={() => openModal()} />

      {/* 7. Turnkey Process Section */}
      <ProcessSection />

      {/* 8. Verified Testimonials */}
      <TestimonialsSection />

      {/* 9. Final Call to Action Banner (primary-700 navy) */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1B2A4A] border-t border-[#0F1B2E] text-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-[8px] px-3.5 py-1 text-xs font-bold text-[#FBB859] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#FBB859]" />
            <span>Allama Iqbal Road, Near Bank of Punjab, Vehari</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Start Saving on Electricity Bills Today
          </h2>

          <p className="text-[#EFEDE7]/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Visit our office in Vehari for a live demonstration of Tier-1 solar panels and hybrid inverters,
            or contact us directly to schedule a free rooftop survey and energy audit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F7941D] hover:bg-[#EE6B00] text-[#0F1B2E] font-bold text-sm px-8 py-3.5 rounded-[8px] transition-colors shadow-site"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <span>Visit Our Office &amp; Contact</span>
              <ArrowRight className="w-4 h-4 text-[#0F1B2E]" />
            </Link>

            <a
              href="tel:03202200884"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#E2DFD6]/30 text-white hover:bg-white/10 font-bold text-sm px-8 py-3.5 rounded-[8px] transition-colors"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <Phone className="w-4 h-4 text-[#FBB859]" />
              <span>Call: 0320-2200884</span>
            </a>

            <a
              href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20am%20interested%20in%20a%20solar%20system%20for%20my%20property."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#E2DFD6]/30 text-white hover:bg-white/10 font-bold text-sm px-8 py-3.5 rounded-[8px] transition-colors"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <MessageSquare className="w-4 h-4 text-[#7CB342]" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <p className="text-xs text-slate-300 pt-2 font-mono">
            Office Hours: Sat–Thu 8:00 AM – 7:00 PM | Friday 9:00 AM – 12:30 PM
          </p>
        </div>
      </section>
    </div>
  );
}
