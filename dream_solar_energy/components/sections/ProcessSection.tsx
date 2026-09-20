"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Radar, Cpu, Wrench, Activity, CheckCircle2, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      // Only perform horizontal scroll-jacking on desktop screens >= 1024px
      if (window.innerWidth >= 1024) {
        const totalScroll = track.scrollWidth - window.innerWidth + 120;

        gsap.to(track, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${totalScroll}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "01",
      title: "3D LiDAR Roof Assessment",
      subtitle: "PRECISION IRRADIANCE SCANNING",
      description: "We deploy high-resolution LiDAR drones to map your roof's exact azimuth, shading angles, and annual sun exposure down to the millimeter.",
      icon: Radar,
      accent: "#FFB800",
      tag: "AI SOLAR MODELING",
    },
    {
      number: "02",
      title: "Custom Architectural Engineering",
      subtitle: "TAILORED ENERGY ARCHITECTURE",
      description: "Our structural engineers design a bespoke panel layout that integrates seamlessly with your property aesthetics while maximizing daily kilowatt output.",
      icon: Cpu,
      accent: "#B8FF00",
      tag: "ZERO-VISIBILITY WIRING",
    },
    {
      number: "03",
      title: "Zero-Downtime Precision Install",
      subtitle: "MASTER CERTIFIED TECHNICIANS",
      description: "Our licensed installation team mounts N-Type monocrystalline panels, micro-inverters, and battery banks in under 8 hours with zero interruption to your power.",
      icon: Wrench,
      accent: "#00F5D4",
      tag: "1-DAY DEPLOYMENT",
    },
    {
      number: "04",
      title: "Autonomous Grid & Battery Sync",
      subtitle: "24/7 INTELLIGENT MONITORING",
      description: "Your energy sanctuary connects to the Solaris AI Mobile App — autonomously storing power during off-peak hours and feeding excess energy back for utility credits.",
      icon: Activity,
      accent: "#FF8C00",
      tag: "AUTONOMOUS MANAGEMENT",
    },
  ];

  return (
    <section id="process" ref={sectionRef} className="relative bg-[#0E1015] py-24 lg:py-0 overflow-hidden border-t border-white/5">
      {/* Track Container */}
      <div className="lg:h-screen w-full flex flex-col justify-center relative">
        {/* Section Title */}
        <div className="px-6 md:px-12 mb-8 lg:mb-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="font-mono text-xs text-[#FFB800] uppercase tracking-widest block mb-2">
              03 // THE IMPLEMENTATION ARCHITECTURE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              From Grid Slave to Energy Sovereign in 4 Steps
            </h2>
          </div>
          <p className="font-body text-[#94A3B8] text-sm max-w-md mt-4 md:mt-0">
            A turnkey, friction-free engineering deployment designed to make your solar transition effortless.
          </p>
        </div>

        {/* Horizontal Track for Desktop / Vertical Cards for Mobile */}
        <div className="w-full overflow-hidden px-6 md:px-12">
          <div ref={trackRef} className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 lg:w-max pb-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="w-full lg:w-[450px] glass-panel-gold rounded-3xl p-8 border border-white/10 relative flex flex-col justify-between group hover:border-[#FFB800]/50 transition-all duration-500 shadow-xl"
                >
                  {/* Step Number Backdrop */}
                  <div className="absolute top-6 right-8 font-display font-black text-7xl text-white/5 group-hover:text-[#FFB800]/10 transition-colors pointer-events-none">
                    {step.number}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: `${step.accent}15`, color: step.accent }}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="font-mono text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white uppercase tracking-wider">
                        {step.tag}
                      </span>
                    </div>

                    <span className="font-mono text-xs font-bold uppercase tracking-widest block mb-1" style={{ color: step.accent }}>
                      STEP {step.number} // {step.subtitle}
                    </span>

                    <h3 className="font-display font-bold text-2xl text-white mb-4">
                      {step.title}
                    </h3>

                    <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                    <span className="text-white flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#B8FF00]" />
                      <span>GUARANTEED ACCURACY</span>
                    </span>
                    <span className="text-[#94A3B8]">0{idx + 1}/04</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
