"use client";

import React, { useState } from "react";
import { MapPin, Phone, MessageSquare, Clock, Send, CheckCircle2, Navigation, Mail } from "lucide-react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    requirement: "Complete Solar System",
    city: "Vehari",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Dream Solar Energy,\n\nName: ${form.name}\nPhone: ${form.phone}\nCity/Area: ${form.city}\nInterested In: ${form.requirement}\n${
        form.message ? `Details: ${form.message}` : ""
      }`
    );
    window.open(`https://wa.me/923202200884?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({
        name: "",
        phone: "",
        requirement: "Complete Solar System",
        city: "Vehari",
        message: "",
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3.5 py-1 mb-3">
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wide">
              Store &amp; Consultation
            </span>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-black text-[#0B2545] tracking-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Contact &amp; Store Location
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Visit our retail showroom in Vehari or contact us for a customized solar proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Store Address Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className="font-bold text-base text-[#0B2545]"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Main Showroom &amp; Office
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Allama Iqbal Road, Near Bank of Punjab,<br />
                    Vehari, Punjab, Pakistan
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Allama+Iqbal+Road+Near+Bank+of+Punjab+Vehari"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-800 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open Location in Google Maps</span>
              </a>
            </div>

            {/* Direct Phone & WhatsApp Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:03202200884"
                className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl p-4 transition-all shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B2545] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Call Directly</p>
                  <p className="font-bold text-sm text-[#0B2545]">0320-2200884</p>
                </div>
              </a>

              <a
                href="https://wa.me/923202200884"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 transition-all shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">WhatsApp</p>
                  <p className="font-bold text-sm text-emerald-950">0320-2200884</p>
                </div>
              </a>
            </div>

            {/* Business Hours Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <Clock className="w-4 h-4 text-amber-600" />
                <h4
                  className="font-bold text-sm text-[#0B2545] uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Operating Hours
                </h4>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                  <span className="font-medium text-slate-600">Saturday – Thursday</span>
                  <span className="font-bold text-[#0B2545]">8:00 AM – 7:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-600">Friday (Juma)</span>
                  <span className="font-bold text-emerald-700">9:00 AM – 12:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form Column */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="mb-6">
              <h3
                className="text-xl font-bold text-[#0B2545]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Request Quotation &amp; Consultation
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the details below and submit. Your inquiry will open in WhatsApp directly.
              </p>
            </div>

            {sent ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center flex flex-col items-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 animate-bounce" />
                <h4 className="font-bold text-lg text-emerald-950">Inquiry Opened in WhatsApp!</h4>
                <p className="text-xs text-slate-600 max-w-sm">
                  Your message has been composed. Our team at Dream Solar Energy will respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ahmad"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/30 focus:border-[#F59E0B]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300-1234567"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/30 focus:border-[#F59E0B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Required Solution
                    </label>
                    <select
                      value={form.requirement}
                      onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/30 focus:border-[#F59E0B]"
                    >
                      <option>Complete Solar System (Turnkey)</option>
                      <option>Solar Panels Only</option>
                      <option>Solar Inverter Only</option>
                      <option>Lithium / Tubular Batteries</option>
                      <option>Mounting Structures &amp; Accessories</option>
                      <option>Technical Survey &amp; Advice</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      City / Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vehari, Burewala, Mailsi"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/30 focus:border-[#F59E0B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Additional Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details such as approximate monthly electricity bill or appliances you need to run..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/30 focus:border-[#F59E0B] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm py-3.5 rounded-xl shadow-xs transition-colors cursor-pointer"
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
  );
}
