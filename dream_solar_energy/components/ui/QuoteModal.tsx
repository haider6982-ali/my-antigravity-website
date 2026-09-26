"use client";

import React, { useState } from "react";
import { X, Zap, Send, CheckCircle2 } from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";

interface QuoteModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultProduct?: string;
}

export default function QuoteModal(props: QuoteModalProps) {
  const context = useQuoteModal();
  const isOpen = props.isOpen !== undefined ? props.isOpen : context.isOpen;
  const handleClose = props.onClose || context.closeModal;
  const initialProduct = props.defaultProduct || context.selectedProduct || "Complete Solar System";

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "Vehari City",
    propertyType: "Home (Residential)",
    systemSize: "10 kW",
    monthlyBill: "",
    product: initialProduct,
    message: "",
  });

  const [prevSelectedProduct, setPrevSelectedProduct] = useState(context.selectedProduct);
  if (context.selectedProduct !== prevSelectedProduct) {
    setPrevSelectedProduct(context.selectedProduct);
    if (context.selectedProduct) {
      setFormData((prev) => ({ ...prev, product: context.selectedProduct || "Complete Solar System" }));
    }
  }

  if (!isOpen) return null;

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*Dream Solar Energy – Free Quote Request*\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📱 Phone: ${formData.phone}\n` +
      `📍 City / Area: ${formData.area}\n` +
      `🏢 Property: ${formData.propertyType}\n` +
      `⚡ System Capacity: ${formData.systemSize}\n` +
      `💡 Approx Monthly Bill: Rs. ${formData.monthlyBill || "N/A"}\n` +
      `🛒 Solution/Product: ${formData.product}\n` +
      (formData.message ? `💬 Note: ${formData.message}` : "")
    );
    window.open(`https://wa.me/923202200884?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      setFormData({
        name: "",
        phone: "",
        area: "Vehari City",
        propertyType: "Home (Residential)",
        systemSize: "10 kW",
        monthlyBill: "",
        product: "Complete Solar System",
        message: "",
      });
      handleClose();
    }, 3500);
  };

  const inputClass =
    "w-full bg-[#F8F7F4] border border-[#E2DFD6] rounded-[8px] px-4 py-2.5 text-sm text-[#14202F] placeholder-[#5B6472] focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D] transition-colors";
  const labelClass = "text-xs font-bold text-[#1B2A4A] block mb-1.5";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0F1B2E]/75 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#F8F7F4] rounded-[8px] border border-[#E2DFD6] shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="relative p-6 pb-4 border-b border-[#E2DFD6] bg-[#EFEDE7]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[8px] bg-[#1B2A4A] text-[#F7941D] flex items-center justify-center shadow-site">
                <Zap className="w-5 h-5 fill-[#F7941D]" />
              </div>
              <div>
                <h3
                  className="font-black text-[#1B2A4A] text-lg leading-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Request a Free Solar Quote
                </h3>
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Dream Solar Energy • Vehari
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-[8px] text-[#5B6472] hover:text-[#1B2A4A] hover:bg-[#E2DFD6] transition-colors"
              aria-label="Close quote modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Step indicator */}
          <div className="flex gap-2 mt-4">
            {[1, 2].map((s) => (
              <div
                key={s}
                className={`h-1.5 rounded-full flex-1 transition-all ${
                  step >= s ? "bg-[#1B2A4A]" : "bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-16 h-16 rounded-[8px] bg-[#3C8C2E]/10 border border-[#3C8C2E]/30 flex items-center justify-center mx-auto text-[#3C8C2E] animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4
                className="font-black text-xl text-[#1B2A4A]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Inquiry Opened in WhatsApp!
              </h4>
              <p className="text-xs text-[#5B6472] max-w-sm mx-auto">
                Thank you! Dream Solar Energy Vehari will review your requirements and respond promptly with a customized proposal.
              </p>
            </div>
          ) : step === 1 ? (
            <div className="space-y-4">
              <p className="text-xs font-semibold text-[#5B6472] mb-1">
                Step 1 of 2 — Contact Details
              </p>
              <div>
                <label className={labelClass}>Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Ahmad"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="0320-1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>City / Area</label>
                  <input
                    type="text"
                    placeholder="Vehari, Burewala, Mailsi"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Property Type</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className={inputClass}
                  >
                    <option>Home (Residential)</option>
                    <option>Shop / Commercial</option>
                    <option>Factory / Industrial</option>
                    <option>Agricultural Tube Well</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.name || !formData.phone) {
                      alert("Please provide your name and phone number.");
                      return;
                    }
                    setStep(2);
                  }}
                  className="w-full bg-[#1B2A4A] hover:bg-[#0F1B2E] text-white font-bold text-sm py-3 rounded-[8px] transition-all shadow-site cursor-pointer active:scale-98"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Continue to System Requirements →
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsApp} className="space-y-4">
              <p className="text-xs font-semibold text-[#5B6472] mb-1">
                Step 2 of 2 — System Specifications
              </p>

              <div>
                <label className={labelClass}>Solution / Product Interest</label>
                <input
                  type="text"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  placeholder="e.g. 10 kW Hybrid System, Tier-1 Panels..."
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>System Capacity</label>
                  <select
                    value={formData.systemSize}
                    onChange={(e) => setFormData({ ...formData, systemSize: e.target.value })}
                    className={inputClass}
                  >
                    <option>4 kW Solar System</option>
                    <option>6 kW Solar System</option>
                    <option>8 kW Solar System</option>
                    <option>10 kW Solar System</option>
                    <option>15 kW Solar System</option>
                    <option>20 kW+ Commercial</option>
                    <option>Agricultural Solar Tube Well</option>
                    <option>Panels / Inverter Only</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Approx Monthly Bill (PKR)</label>
                  <input
                    type="text"
                    placeholder="e.g. Rs. 35,000"
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Additional Notes / Questions (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. How many ACs can run, net metering required..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 bg-[#EFEDE7] hover:bg-[#E2DFD6] text-[#1B2A4A] font-bold text-xs py-3 rounded-[8px] transition-colors"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm py-3 rounded-[8px] shadow-site transition-all cursor-pointer active:scale-98"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          )}

          {/* Quick Direct Help */}
          <div className="mt-5 pt-4 border-t border-[#E2DFD6] flex items-center justify-between text-xs text-[#5B6472]">
            <span>Direct Call: 0320-2200884</span>
            <span className="font-semibold text-[#1B2A4A]">Tariq Mahmood</span>
          </div>
        </div>
      </div>
    </div>
  );
}
