"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  AtSign,
  Sparkles,
  ChevronDown,
} from "lucide-react";

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

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    propertyType: "Residential Home",
    requirement: "10 kW Solar System",
    city: "Vehari",
    monthlyBill: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Dream Solar Energy – Website Contact Inquiry*\n\n` +
      `👤 Name: ${form.name}\n` +
      `📱 Phone: ${form.phone}\n` +
      `📍 City / Area: ${form.city}\n` +
      `🏢 Property Type: ${form.propertyType}\n` +
      `⚡ Requirement: ${form.requirement}\n` +
      `💡 Monthly Electricity Bill: Rs. ${form.monthlyBill || "N/A"}\n` +
      (form.message ? `💬 Details: ${form.message}` : "")
    );
    window.open(`https://wa.me/923202200884?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({
        name: "",
        phone: "",
        propertyType: "Residential Home",
        requirement: "10 kW Solar System",
        city: "Vehari",
        monthlyBill: "",
        message: "",
      });
    }, 4500);
  };

  const MAPS_URL =
    "https://www.google.com/maps/place/30%C2%B002'30.4%22N+72%C2%B021'07.0%22E/@30.0417733,72.3493651,633m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d30.0417733!4d72.35194?hl=en&entry=ttu";

  const faqs = [
    {
      q: "Where is Dream Solar Energy's office located?",
      a: "Our main office is situated on Allama Iqbal Road, near the Bank of Punjab, Vehari. You are welcome to visit us Saturday to Thursday from 8:00 AM to 7:00 PM, and Friday from 9:00 AM to 12:30 PM.",
    },
    {
      q: "Do you provide on-site technical surveys in surrounding towns like Burewala, Mailsi, or Lodhran?",
      a: "Yes! Our engineering team frequently conducts on-site solar surveys and installations across Vehari, Burewala, Mailsi, Lodhran, Khanewal, and nearby areas across South Punjab.",
    },
    {
      q: "Can I verify the authenticity of solar panels at your store?",
      a: "Absolutely. Every Tier-1 solar panel in our inventory carries genuine factory barcodes and serial numbers that can be scanned on the spot to verify internal factory flash test data and warranty validity.",
    },
    {
      q: "How does the MEPCO net metering process work?",
      a: "Dream Solar Energy manages the complete turnkey process: preparing the single-line diagram (SLD), submitting the application to MEPCO, coordinating the technical inspection, and installing the bidirectional green meter.",
    },
    {
      q: "How quickly can a home solar system be installed?",
      a: "For standard residential installations (4 kW to 15 kW), our certified team typically completes structural mounting, panel placement, inverter wiring, and testing within 48 to 72 hours with zero disruption to your daily power.",
    },
  ];

  const { ref: mainGridRef, inView: mainGridVisible } = useInView(0.1);
  const { ref: faqsRef, inView: faqsVisible } = useInView(0.15);

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
            <span className="text-[#1B2A4A] font-bold">Contact Us</span>
          </div>

          <div className="max-w-3xl">
            <div className="animate-fade-up inline-flex items-center gap-2 bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] px-4 py-1.5 mb-5 shadow-site">
              <Sparkles className="w-3.5 h-3.5 text-[#F7941D]" />
              <span className="text-xs font-bold text-[#1B2A4A] uppercase tracking-wider">
                Visit Us or Request a Technical Survey
              </span>
            </div>

            <h1
              className="animate-fade-up delay-100 text-3xl sm:text-5xl lg:text-6xl font-black text-[#1B2A4A] leading-[1.12] mb-5 tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Contact Dream Solar{" "}
              <span className="shimmer-text">
                Energy
              </span>
            </h1>

            <p className="animate-fade-up delay-200 text-[#5B6472] text-base sm:text-lg leading-relaxed mb-6">
              Have questions about solar panels, inverters, battery storage, or MEPCO net metering?
              Visit our office on Allama Iqbal Road or submit your inquiry below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section ref={mainGridRef} className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#EFEDE7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left: Contact Info & Showroom Details */}
            <div
              className="lg:col-span-5 space-y-4 transition-all duration-600"
              style={{
                opacity: mainGridVisible ? 1 : 0,
                transform: mainGridVisible ? "translateX(0)" : "translateX(-24px)",
              }}
            >

              {/* Business Owner Card */}
              <div className="bg-[#1B2A4A] border border-[#0F1B2E] rounded-[8px] p-6 sm:p-7 shadow-site text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#F7941D]/10 rounded-full blur-[60px] pointer-events-none" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-[8px] overflow-hidden border border-[#F7941D]/40 flex-shrink-0 bg-[#0F1B2E]">
                    <Image
                      src="/tariq-mahmood.png"
                      alt="Tariq Mahmood"
                      fill
                      className="object-cover scale-120"
                      style={{ objectPosition: "50% 18%" }}
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#FBB859] uppercase tracking-widest mb-0.5">
                      Business Owner
                    </p>
                    <h3
                      className="text-xl font-black text-white"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      Tariq Mahmood
                    </h3>
                    <p className="text-slate-300 text-xs mt-0.5">Dream Solar Energy — Vehari</p>
                  </div>
                </div>

                <div className="relative z-10 mt-5 pt-5 border-t border-white/10 flex flex-wrap gap-3">
                  <a
                    href="tel:03202200884"
                    className="flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-[#FBB859] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FBB859]" />
                    0320-2200884
                  </a>
                  <a
                    href="https://wa.me/923202200884"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-emerald-300 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    WhatsApp
                  </a>
                  <a
                    href="mailto:tariqdp36@gmail.com"
                    className="flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-[#FBB859] transition-colors"
                  >
                    <AtSign className="w-3.5 h-3.5 text-[#FBB859]" />
                    tariqdp36@gmail.com
                  </a>
                </div>
              </div>

              {/* Showroom Address */}
              <div className="bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] p-6 shadow-site">
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-[8px] bg-[#F7941D]/10 text-[#F7941D] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#F7941D]/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-base text-[#1B2A4A]"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      Main Office &amp; Store
                    </h3>
                    <p className="text-sm text-[#5B6472] mt-1 leading-relaxed">
                      Allama Iqbal Road, near Bank of Punjab<br />
                      Vehari, Punjab, Pakistan<br />
                      <span className="text-xs text-[#5B6472]/70 font-mono">30°02′30.4″N 72°21′07.0″E</span>
                    </p>
                  </div>
                </div>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#EFEDE7] hover:bg-[#E2DFD6] border border-[#E2DFD6] text-[#1B2A4A] text-xs font-bold px-4 py-2.5 rounded-[8px] transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps Navigation</span>
                </a>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-[8px] overflow-hidden border border-[#E2DFD6] shadow-site bg-[#F8F7F4]">
                <iframe
                  title="Dream Solar Energy Showroom Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1266.3!2d72.35194!3d30.0417733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzMwLjQiTiA3MsKwMjEnMDcuMCJF!5e0!3m2!1sen!2s!4v1695000000000"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Operating Hours */}
              <div className="bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] p-6 shadow-site">
                <div className="flex items-center gap-2.5 mb-3">
                  <Clock className="w-4 h-4 text-[#F7941D]" />
                  <h4
                    className="font-bold text-sm text-[#1B2A4A] uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Operating Hours
                  </h4>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E2DFD6]">
                    <span className="font-medium text-[#5B6472]">Saturday – Thursday</span>
                    <span className="font-bold text-[#1B2A4A]">8:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[#5B6472]">Friday (Juma)</span>
                    <span className="font-bold text-[#3C8C2E]">9:00 AM – 12:30 PM</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Comprehensive Inquiry Form */}
            <div
              className="lg:col-span-7 bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] p-6 sm:p-8 shadow-site transition-all duration-600"
              style={{
                opacity: mainGridVisible ? 1 : 0,
                transform: mainGridVisible ? "translateX(0)" : "translateX(24px)",
              }}
            >
              <div className="mb-6">
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#1B2A4A]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Request a Proposal or Free Site Visit
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6472] mt-1">
                  Fill in your details below and click Submit. Your inquiry will open in WhatsApp
                  for a prompt response from our team.
                </p>
              </div>

              {sent ? (
                <div className="bg-[#3C8C2E]/10 border border-[#3C8C2E]/30 rounded-[8px] p-8 text-center flex flex-col items-center gap-3">
                  <CheckCircle2 className="w-12 h-12 text-[#3C8C2E] animate-bounce" />
                  <h4 className="font-bold text-lg text-[#1B2A4A]">Inquiry Opened in WhatsApp!</h4>
                  <p className="text-xs text-[#5B6472] max-w-sm">
                    Thank you. Dream Solar Energy will respond promptly to your request.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#14202F] block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Muhammad Ahmad"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-[#EFEDE7] border border-[#E2DFD6] rounded-[8px] px-4 py-2.5 text-sm text-[#14202F] placeholder-[#5B6472] focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#14202F] block mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0320-1234567"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-[#EFEDE7] border border-[#E2DFD6] rounded-[8px] px-4 py-2.5 text-sm text-[#14202F] placeholder-[#5B6472] focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#14202F] block mb-1.5">
                        Property Type
                      </label>
                      <select
                        value={form.propertyType}
                        onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                        className="w-full bg-[#EFEDE7] border border-[#E2DFD6] rounded-[8px] px-3 py-2.5 text-sm text-[#14202F] focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D]"
                      >
                        <option>Residential Home</option>
                        <option>Commercial Shop</option>
                        <option>Commercial Plaza</option>
                        <option>Factory / Industrial</option>
                        <option>Agricultural Tube Well</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#14202F] block mb-1.5">
                        Interested Capacity
                      </label>
                      <select
                        value={form.requirement}
                        onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                        className="w-full bg-[#EFEDE7] border border-[#E2DFD6] rounded-[8px] px-3 py-2.5 text-sm text-[#14202F] focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D]"
                      >
                        <option>4 kW Solar System</option>
                        <option>6 kW Solar System</option>
                        <option>8 kW Solar System</option>
                        <option>10 kW Solar System</option>
                        <option>15 kW Solar System</option>
                        <option>20 kW+ Commercial</option>
                        <option>Solar Tube Well</option>
                        <option>Panels / Inverter Only</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#14202F] block mb-1.5">
                        City / Area
                      </label>
                      <input
                        type="text"
                        placeholder="Vehari, Burewala..."
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className="w-full bg-[#EFEDE7] border border-[#E2DFD6] rounded-[8px] px-4 py-2.5 text-sm text-[#14202F] placeholder-[#5B6472] focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#14202F] block mb-1.5">
                      Approx Monthly Electricity Bill (PKR)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rs. 35,000"
                      value={form.monthlyBill}
                      onChange={(e) => setForm({ ...form, monthlyBill: e.target.value })}
                      className="w-full bg-[#EFEDE7] border border-[#E2DFD6] rounded-[8px] px-4 py-2.5 text-sm text-[#14202F] placeholder-[#5B6472] focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#14202F] block mb-1.5">
                      Additional Details / Special Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. How many ACs, roof type, net metering needed..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#EFEDE7] border border-[#E2DFD6] rounded-[8px] px-4 py-2.5 text-sm text-[#14202F] placeholder-[#5B6472] focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm py-3.5 rounded-[8px] shadow-site transition-all cursor-pointer active:scale-98"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section ref={faqsRef} className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F7F4] border-t border-[#E2DFD6]">
        <div
          className="max-w-4xl mx-auto transition-all duration-700"
          style={{
            opacity: faqsVisible ? 1 : 0,
            transform: faqsVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-1">
              Help &amp; Guidance
            </span>
            <h2
              className="text-2xl sm:text-3xl font-black text-[#1B2A4A] tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className="border border-[#E2DFD6] rounded-[8px] overflow-hidden transition-all shadow-site bg-[#EFEDE7]"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-5 bg-[#EFEDE7] hover:bg-[#E2DFD6]/60 flex items-center justify-between gap-4 transition-colors font-bold text-sm text-[#1B2A4A] cursor-pointer"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#5B6472] transition-transform duration-200 flex-shrink-0 ${
                      activeFaq === idx ? "rotate-180 text-[#F7941D]" : ""
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="p-5 bg-[#F8F7F4] text-xs sm:text-sm text-[#5B6472] leading-relaxed border-t border-[#E2DFD6] animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
