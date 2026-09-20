"use client";

import React from "react";
import { Phone, MessageSquare } from "lucide-react";

interface FloatingCTAProps {
  onOpenModal: () => void;
}

export default function FloatingCTA({ onOpenModal }: FloatingCTAProps) {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20would%20like%20to%20inquire%20about%20solar%20systems."
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline font-bold text-xs">WhatsApp</span>
      </a>

      {/* Call Button */}
      <a
        href="tel:03202200884"
        aria-label="Call Dream Solar Energy"
        className="flex items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#133966] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 border border-slate-700/20"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        <Phone className="w-5 h-5 text-[#F59E0B]" />
        <span className="hidden sm:inline font-bold text-xs">0320-2200884</span>
      </a>
    </div>
  );
}
