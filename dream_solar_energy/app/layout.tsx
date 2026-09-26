import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dream Solar Energy | Clean Energy • Brighter Tomorrow",
  description:
    "Dream Solar Energy offers authorized sales of Tier-1 solar panels, hybrid inverters, batteries, and turnkey installation for homes, commercial facilities, and agriculture.",
  keywords: [
    "Dream Solar Energy",
    "solar panels Pakistan",
    "solar inverters",
    "solar battery storage",
    "net metering",
    "solar installation",
    "Jinko solar panels",
    "Knox inverter",
  ],
  openGraph: {
    title: "Dream Solar Energy | Clean Energy • Brighter Tomorrow",
    description:
      "Authorized sales & turnkey installation of Tier-1 solar panels, hybrid inverters, batteries, and mounting accessories.",
    type: "website",
  },
  icons: {
    icon: "/dream-solar-logo.jpg",
  },
};

import ClientLayout from "@/components/providers/ClientLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${syne.variable} ${plusJakartaSans.variable} ${outfit.variable} antialiased scroll-smooth`}
    >
      <body className="bg-[#F8F7F4] text-[#14202F] font-body min-h-screen relative overflow-x-hidden selection:bg-[#FBB859]/30 selection:text-[#0F1B2E]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
