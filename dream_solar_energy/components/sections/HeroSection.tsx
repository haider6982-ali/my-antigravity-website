"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";

interface HeroSectionProps {
  onOpenModal?: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const { openModal } = useQuoteModal();
  const handleOpen = onOpenModal || openModal;

  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Background Image: Panoramic high-efficiency solar installation */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-solar-bg.jpg"
          alt="Commercial and residential solar panel installation across rooftop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft neutral directional shadow — leaves natural sunlight and solar panels crisp while keeping text perfectly legible */}
        <div className="absolute inset-0 bg-slate-950/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-2xl flex flex-col items-start text-left">
          {/* 1. Understated eyebrow label */}
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F59E0B] mb-4">
            Solar Energy Systems &bull; Punjab, Pakistan
          </p>

          {/* 2. Confident 2-line headline, large scale, single color & weight */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-5"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Solar Energy Systems Built to Perform for Decades.
          </h1>

          {/* 3. Supporting sentence: 12 words, muted secondary color */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
            Tier-1 hardware, net-metering liaison, and complete turnkey installations across South Punjab.
          </p>

          {/* 4. Actions: Single flat CTA button + quiet secondary text link */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <button
              onClick={() => handleOpen()}
              className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold text-sm px-7 py-3.5 rounded-lg transition-colors shadow-xs"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <span>Request a Free Survey</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-200 hover:text-white transition-colors group"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <span>View systems &amp; pricing</span>
              <ArrowRight className="w-4 h-4 text-[#F59E0B] group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
