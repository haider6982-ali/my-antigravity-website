import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dream Solar Energy | Clean Energy • Brighter Tomorrow | Vehari, Pakistan",
  description:
    "Dream Solar Energy, Allama Iqbal Road near Bank of Punjab, Vehari. Authorized sales and professional installation of Tier-1 solar panels, hybrid inverters, batteries, and mounting accessories.",
  keywords: [
    "Dream Solar Energy",
    "solar panels Vehari",
    "solar inverters Pakistan",
    "solar batteries Vehari",
    "net metering Vehari",
    "solar installation Vehari",
    "Jinko solar panels Pakistan",
    "Knox inverter Vehari",
  ],
  openGraph: {
    title: "Dream Solar Energy | Clean Energy • Brighter Tomorrow",
    description:
      "Authorized sales & turnkey installation of Tier-1 solar panels, hybrid inverters, batteries, and mounting accessories in Vehari and South Punjab.",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakartaSans.variable} ${outfit.variable} antialiased scroll-smooth`}
    >
      <body className="bg-white text-slate-900 font-body min-h-screen relative overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
