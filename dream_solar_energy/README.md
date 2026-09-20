# Dream Solar Energy — Next-Gen Clean Energy Architecture

An Awwwards-tier narrative-driven scroll marketing website for **Dream Solar Energy**. Built with Next.js 16 (App Router), Tailwind CSS v4, GSAP (ScrollTrigger & timelines), Lenis smooth scroll, and interactive Canvas visuals.

---

## 🚀 Technical Architecture & Lenis + GSAP Sync

### 1. Unified Scroll Sync Strategy
To avoid scroll tearing or fighting between GSAP `ScrollTrigger` and Lenis smooth scrolling:
- **Provider Hook**: [`SmoothScrollProvider.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/components/providers/SmoothScrollProvider.tsx) initializes Lenis once per session.
- **Scroll Updates**: Lenis' `scroll` event calls `ScrollTrigger.update()` on every scroll tick.
- **Frame Sync**: Lenis RAF execution is attached directly to `gsap.ticker` via `gsap.ticker.add((time) => lenis.raf(time * 1000))`.
- **Lag Prevention**: `gsap.ticker.lagSmoothing(0)` is invoked to prevent scroll jumps following heavy calculations or initial render.

---

## 🎬 Section Motion & Scroll Choreography Guide

| Section | Component File | Animation Technique | Description |
| :--- | :--- | :--- | :--- |
| **00. Preloader** | [`Preloader.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/components/ui/Preloader.tsx) | GSAP Timeline + Counter | Branded solar ray count-up masking initial Lenis/GSAP setup. |
| **01. Hero** | [`HeroSection.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/components/sections/HeroSection.tsx) | 2D Canvas + Staggered Clip-Path | Mouse-reactive particle flare core + clip-path text reveals for headline. |
| **02. Problem** | [`ProblemSection.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/components/sections/ProblemSection.tsx) | ScrollTrigger Counter & Stagger | Animated tariff inflation ticker (`+148%`) and grid fragility threat cards. |
| **03. Transformation** | [`TransformationSection.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/components/sections/TransformationSection.tsx) | **Pinned Scrub (`scrub: 0.6`)** | **Centerpiece Wow Moment:** Residence SVG morphs from dark grid smog to glowing solar sanctuary with panels snapping onto roof on scroll. |
| **04. Process** | [`ProcessSection.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/components/sections/ProcessSection.tsx) | **Horizontal Scroll Track** | Horizontal pinned panel track on desktop (`>=1024px`) & stacked cards on mobile. |
| **05. Specs** | [`ProductSection.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/components/sections/ProductSection.tsx) | Interactive Hotspots + Counter | Rotatable monocrystalline panel graphic with clickable architectural hotspots. |
| **06. Proof & Calculator** | [`SocialProofSection.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/components/sections/SocialProofSection.tsx) & [`SavingsCalculator.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/components/sections/SavingsCalculator.tsx) | Dynamic ROI Sliders + Marquee | Interactive 25-year financial return modeler with 30% tax credit computation. |
| **07. Final CTA** | [`FinalCTASection.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/components/sections/FinalCTASection.tsx) | Activated Sun Canvas | Re-engages the hero solar aura in full activation as a visual bookend. |
| **08. Footer** | [`FooterSection.tsx`](file:///c:/Users/Admin/OneDrive/Documents/Projects/dream_solar_energy/components/sections/FooterSection.tsx) | Status Indicator + Glass Links | Live solar grid status indicator (`100% OPERATIONAL`) and editorial links. |

---

## 🎨 Design Tokens & Customization

- **Dark Obsidian Base**: `#08090C`, `#0E1015`, `#14171F`
- **Solar Gold Accent**: `#FFB800`
- **Kinetic Lime Energy Accent**: `#B8FF00`
- **Cyan Kinetic Highlight**: `#00F5D4`
- **Typography**: Display font `Syne` + Body font `Plus Jakarta Sans` via Google Fonts.

### Where to Replace Imagery & Branding Copy:
- **Brand Name & Tagline**: Updated across `Navbar.tsx`, `HeroSection.tsx`, `FooterSection.tsx`, and `app/layout.tsx`.
- **Custom Renderings / 3D Asset Integration**: Swap SVG placeholders in `TransformationSection.tsx` and `ProductSection.tsx` with GLTF/Three.js 3D models or WebGL canvas shaders.
- **Client Testimonials & Metrics**: Edit `testimonials` array in `SocialProofSection.tsx`.

---

## 🛠️ Local Development & Build Commands

```bash
# 1. Install Dependencies
npm install

# 2. Run Next.js Local Development Server
npm run dev

# 3. Production Build & Lint Verification
npm run build
```
