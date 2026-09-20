"use client";

import React, { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProductSection from "@/components/sections/ProductSection";
import SavingsCalculator from "@/components/sections/SavingsCalculator";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function Home() {
  const [, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      <Navbar onOpenModal={handleOpenModal} />

      <main>
        <HeroSection onOpenModal={handleOpenModal} />
        <ProductSection />
        <SavingsCalculator onOpenModal={handleOpenModal} />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <FooterSection onOpenModal={handleOpenModal} />

      {/* Floating WhatsApp + Call */}
      <FloatingCTA onOpenModal={handleOpenModal} />
    </div>
  );
}
