"use client";

import React, { useState } from "react";
import { X, Zap, Send, CheckCircle2 } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "Vehari City",
    systemType: "Hybrid",
    systemSize: "10 kW",
    monthlyBill: "",
    product: "Complete Solar System",
    message: "",
  });

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `*Dream Solar Energy – Free Quote Request*\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📱 Phone: ${formData.phone}\n` +
      `📍 Area: ${formData.area}\n` +
      `⚡ System Size: ${formData.systemSize}\n` +
      `🔋 System Type: ${formData.systemType}\n` +
      `💡 Monthly Bill: Rs. ${formData.monthlyBill || "N/A"}\n` +
      `🛒 Product Interest: ${formData.product}\n` +
      `💬 Message: ${formData.message || "N/A"}`
    );
    window.open(`https://wa.me/923202200884?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      setFormData({ name: "", phone: "", area: "Vehari City", systemType: "Hybrid", systemSize: "10 kW", monthlyBill: "", product: "Complete Solar System", message: "" });
      onClose();
    }, 4000);
  };

  const inputClass = "w-full bg-[#0E1015] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#64748B] focus:border-[#FF8C00] focus:outline-none transition-colors";
  const labelClass = "font-mono text-[11px] text-[#94A3B8] uppercase block mb-1.5 font-semibold";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg glass-panel rounded-3xl border border-[#FF8C00]/30 shadow-[0_0_60px_rgba(255,140,0,0.2)] overflow-hidden">
        {/* Header */}
        <div className="relative p-6 pb-4 border-b border-white/10 bg-gradient-to-r from-[#FF8C00]/10 to-[#4BB8E8]/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-[#FF8C00]/20 border border-[#FF8C00]/30">
                <Zap className="w-5 h-5 text-[#FF8C00]" />
              </div>
              <div>
                <h3 className="font-black text-white text-lg" style={{ fontFamily: "var(--font-outfit)" }}>
                  Free Solar Quote
                </h3>
                <p className="font-mono text-[10px] text-[#94A3B8]">DREAM SOLAR ENERGY – VEHARI</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white transition-all border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Step indicator */}
          <div className="flex space-x-2 mt-4">
            {[1, 2].map((s) => (
              <div
                key={s}
                className={`h-1.5 rounded-full flex-1 transition-all ${step >= s ? "bg-[#FF8C00]" : "bg-white/10"}`}
              />
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#4CAF50] mx-auto animate-bounce" />
              <h4 className="font-black text-xl text-white" style={{ fontFamily: "var(--font-outfit)" }}>Quote Sent to WhatsApp!</h4>
              <p className="text-sm text-[#94A3B8]">
                Your inquiry is now in WhatsApp. Dream Solar Energy Vehari will respond shortly to <strong className="text-white">{formData.phone}</strong>.
              </p>
            </div>
          ) : step === 1 ? (
            <div className="space-y-4">
              <p className="font-medium text-[#94A3B8] text-sm mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Step 1 of 2 — Your contact details
              </p>
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Muhammad Ali"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="0300-1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Your City / Area</label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className={inputClass}
                >
                  <option value="Vehari City">Vehari City</option>
                  <option value="Burewala">Burewala</option>
                  <option value="Mailsi">Mailsi</option>
                  <option value="Kahror Pakka">Kahror Pakka</option>
                  <option value="Lodhran">Lodhran</option>
                  <option value="Sahiwal">Sahiwal</option>
                  <option value="Multan">Multan</option>
                  <option value="Other">Other Area</option>
                </select>
              </div>
              <button
                onClick={() => {
                  if (formData.name && formData.phone) setStep(2);
                }}
                disabled={!formData.name || !formData.phone}
                className="w-full bg-gradient-to-r from-[#FF8C00] to-[#FFB800] text-black font-black text-sm py-3.5 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 transition-all"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                NEXT STEP →
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="font-medium text-[#94A3B8] text-sm mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Step 2 of 2 — What do you need?
              </p>
              <div>
                <label className={labelClass}>Product Interest</label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className={inputClass}
                >
                  <option value="Complete Solar System">Complete Solar System</option>
                  <option value="Solar Panels Only">Solar Panels Only</option>
                  <option value="Inverter Only">Inverter Only</option>
                  <option value="Battery / UPS">Battery / UPS Backup</option>
                  <option value="Accessories">Solar Accessories</option>
                  <option value="Not Sure">Not Sure – Need Advice</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>System Size</label>
                  <select
                    value={formData.systemSize}
                    onChange={(e) => setFormData({ ...formData, systemSize: e.target.value })}
                    className={inputClass}
                  >
                    <option value="3 kW">3 kW</option>
                    <option value="5 kW">5 kW</option>
                    <option value="10 kW">10 kW</option>
                    <option value="15 kW">15 kW</option>
                    <option value="20 kW+">20 kW+</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>System Type</label>
                  <select
                    value={formData.systemType}
                    onChange={(e) => setFormData({ ...formData, systemType: e.target.value })}
                    className={inputClass}
                  >
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-Grid">On-Grid</option>
                    <option value="Off-Grid">Off-Grid</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClass}>Monthly Electricity Bill (Rs.)</label>
                <input
                  type="text"
                  placeholder="e.g. 15000"
                  value={formData.monthlyBill}
                  onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Additional Message</label>
                <textarea
                  rows={3}
                  placeholder="Any specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-white/10 hover:bg-white/15 text-white font-bold text-sm py-3.5 rounded-xl border border-white/10 transition-all"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  ← BACK
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="flex-[2] bg-gradient-to-r from-[#FF8C00] to-[#FFB800] text-black font-black text-sm py-3.5 rounded-xl hover:brightness-110 transition-all flex items-center justify-center space-x-2"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <Send className="w-4 h-4" />
                  <span>SEND VIA WHATSAPP</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
