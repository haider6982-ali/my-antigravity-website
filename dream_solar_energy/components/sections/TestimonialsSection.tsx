"use client";

import React from "react";
import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Haji Arif",
      location: "Vehari City",
      text: "We installed a 10 kW hybrid system for our residential home. Our monthly bill dropped from PKR 48,000 to less than PKR 1,500. Dream Solar Energy provided authentic Jinko panels and their technical installation was clean and punctual.",
      system: "10 kW Hybrid System",
      verified: true,
    },
    {
      name: "Ch. Shahid",
      location: "Burewala",
      text: "Visited their store near Bank of Punjab on Allama Iqbal Road. Purchased a 5 kW on-grid setup with net-metering support. The team completed the mounting structure and electrical wiring within 48 hours. Excellent service.",
      system: "5 kW On-Grid System",
      verified: true,
    },
    {
      name: "Rana Tariq",
      location: "Mailsi",
      text: "Got a 3 kW solar backup system to tackle severe voltage fluctuations. The deep-cycle battery backup runs our fans, lights, and refrigerator smoothly through the night. Truly dependable team.",
      system: "3 kW Off-Grid System",
      verified: true,
    },
    {
      name: "M. Irfan",
      location: "Vehari Commercial",
      text: "Upgraded our commercial store & plaza with a 15 kW three-phase setup. Electricity expenses have reduced by over 80%, and the mobile app provides real-time generation tracking every day.",
      system: "15 kW Commercial Plant",
      verified: true,
    },
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest block mb-2">
            Client Testimonials
          </span>
          <h2
            className="text-2xl sm:text-4xl font-black text-[#0D2354] tracking-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Trusted Across South Punjab
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Real experiences from homeowners, commercial establishments, and local businesses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-slate-200/80 rounded-lg p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-5">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <p
                      className="font-bold text-sm text-[#0D2354]"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {r.name}
                    </p>
                    {r.verified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {r.location} • {r.system}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
