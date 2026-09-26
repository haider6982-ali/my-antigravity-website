"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";

export default function ProcessSection() {
  const { openModal } = useQuoteModal();
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = useState(0);
  const [visible, setVisible] = useState(false);

  const steps = [
    {
      number: "01",
      title: "Free Site Survey & Energy Audit",
      description:
        "Our engineers visit your site in Vehari or surrounding districts to inspect roof integrity, orientation, shadow obstructions, and analyze your last 12 months of electricity bills.",
    },
    {
      number: "02",
      title: "Custom Engineering & Design",
      description:
        "We design a high-efficiency layout using Tier-1 N-Type panels and sized inverters. You receive a transparent proposal detailing hardware specs, estimated generation, and payback.",
    },
    {
      number: "03",
      title: "Turnkey Installation & Mounting",
      description:
        "Certified technicians erect elevated heavy-gauge galvanized structures, lay pure copper double-insulated DC wires, and mount inverters and safety breakers in just 48 to 72 hours.",
    },
    {
      number: "04",
      title: "Testing, Commissioning & App Setup",
      description:
        "We conduct complete electrical safety checks, test string voltages, and configure mobile app monitoring on your smartphone for real-time solar tracking.",
    },
    {
      number: "05",
      title: "Net Metering & 25-Year Support",
      description:
        "We handle the complete MEPCO net-metering liaison to get your bidirectional green meter installed, backed by accessible local after-sales service from our Vehari office.",
    },
  ];

  // Animate the connecting line on scroll entry
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Drive the line fill animation
  useEffect(() => {
    if (!visible) return;
    let start: number | null = null;
    const duration = 1800;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setLineWidth(progress * 100);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [visible]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8F7F4] border-t border-[#E2DFD6]"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-3">
            Precision Engineering Workflow
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B2A4A] tracking-tight leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            How We Execute Your Solar Project
          </h2>
          <p className="text-[#5B6472] text-sm sm:text-base leading-relaxed">
            From site survey to green meter activation, we handle every technical and administrative step.
          </p>
        </div>

        {/* ── Timeline ──────────────────────────────────────────────────── */}
        <div className="relative">

          {/* Connecting animated line — desktop only */}
          <div className="hidden lg:block absolute top-[21px] left-[10%] right-[10%] h-[4px] bg-[#E2DFD6] rounded-full z-0 overflow-hidden shadow-inner">
            <div
              ref={lineRef}
              className={`h-full rounded-full relative overflow-hidden transition-none ${visible && lineWidth >= 99 ? "animate-process-gradient" : ""}`}
              style={{
                width: `${lineWidth}%`,
                background: "linear-gradient(90deg, #F7941D 0%, #EE6B00 20%, #FBB859 45%, #7CB342 75%, #3C8C2E 100%)",
                backgroundSize: "200% 100%",
                transition: visible ? "none" : undefined,
              }}
            >
              {/* Live running energy beam from Process 1 to Process 5 */}
              {visible && lineWidth >= 60 && (
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

          {/* Steps row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10 items-stretch">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col items-start lg:items-center group h-full"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${index * 0.12}s, transform 0.5s ease ${index * 0.12}s`,
                }}
              >
                {/* Step number node */}
                <div className="relative mb-5 lg:mb-6 flex-shrink-0">
                  <div className="w-11 h-11 rounded-full bg-[#F8F7F4] border-2 border-[#E2DFD6] group-hover:border-[#F7941D] flex items-center justify-center transition-colors duration-300 shadow-site">
                    {/* Pulsing ring on hover */}
                    <span className="absolute inset-0 rounded-full border-2 border-[#F7941D]/0 group-hover:border-[#F7941D]/30 group-hover:scale-[1.35] transition-all duration-500" />
                  </div>
                  {/* Number label — large, positioned above or beside */}
                  <span
                    className="absolute -top-1 left-1/2 -translate-x-1/2 text-[28px] sm:text-[32px] font-black text-[#F7941D] leading-none select-none"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content card - equal height */}
                <div className="w-full h-full flex-1 flex flex-col justify-start bg-[#EFEDE7]/60 border border-[#E2DFD6] rounded-[8px] p-5 gap-2 group-hover:border-[#1B2A4A]/30 group-hover:shadow-site transition-all duration-300">
                  <h3
                    className="font-black text-sm sm:text-[15px] text-[#1B2A4A] leading-snug"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#5B6472] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA Banner ────────────────────────────────────────────────── */}
        <div className="mt-16 bg-[#1B2A4A] border border-[#0F1B2E] rounded-[8px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-white shadow-site">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-[8px] bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-[#F7941D]" />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base text-white">Ready to begin step 1 for your home or business?</p>
              <p className="text-xs text-[#EFEDE7]/90">Book a free technical site survey anywhere in Vehari and surrounding districts.</p>
            </div>
          </div>

          <button
            onClick={() => openModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F7941D] hover:bg-[#EE6B00] text-[#0F1B2E] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-[8px] transition-colors shadow-site flex-shrink-0"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <span>Book Free Site Survey</span>
            <ArrowRight className="w-4 h-4 text-[#0F1B2E]" />
          </button>
        </div>

      </div>
    </section>
  );
}
