"use client";

import React from "react";
import { Phone, MessageSquare } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
      {/* WhatsApp Button (Gold accent-500 fill, 8px radius) */}
      <a
        href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20would%20like%20to%20inquire%20about%20solar%20systems."
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex items-center justify-center gap-2 bg-[#F7941D] hover:bg-[#EE6B00] text-[#0F1B2E] p-3 sm:px-4 sm:py-2.5 rounded-[8px] shadow-site transition-colors group"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        <MessageSquare className="w-4 h-4 text-[#0F1B2E]" />
        <span className="hidden sm:inline font-bold text-xs">WhatsApp Us</span>
      </a>

      {/* Call Button (Navy primary-700, 8px radius) */}
      <a
        href="tel:03202200884"
        aria-label="Call Dream Solar Energy"
        className="flex items-center justify-center gap-2 bg-[#1B2A4A] hover:bg-[#22325A] text-[#F8F7F4] p-3 sm:px-4 sm:py-2.5 rounded-[8px] shadow-site transition-colors border border-[#22325A]"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        <Phone className="w-4 h-4 text-[#F7941D]" />
        <span className="hidden sm:inline font-bold text-xs">0320-2200884</span>
      </a>
    </div>
  );
}
