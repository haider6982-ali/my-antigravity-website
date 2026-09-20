"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "interactive" | "drag">("default");

  useEffect(() => {
    // Only enable on desktop with fine pointers
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // Quick x & y setters for performance
    const xDotTo = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
    const yDotTo = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });

    const xRingTo = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const yRingTo = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xDotTo(e.clientX);
      yDotTo(e.clientX ? e.clientY : e.clientY);

      xRingTo(e.clientX);
      yRingTo(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Delegate hover target detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest("[data-cursor]") as HTMLElement | null;
      if (interactiveEl) {
        const type = interactiveEl.getAttribute("data-cursor");
        if (type === "drag") {
          setCursorVariant("drag");
          setCursorText("DRAG");
        } else if (type === "explore") {
          setCursorVariant("interactive");
          setCursorText("VIEW");
        } else if (type === "hotspot") {
          setCursorVariant("interactive");
          setCursorText("SPEC");
        } else {
          setCursorVariant("hover");
          setCursorText("");
        }
        setIsHovered(true);
        return;
      }

      const isButtonOrLink = target.closest("a, button, input, select, textarea, [role='button']");
      if (isButtonOrLink) {
        setCursorVariant("hover");
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorVariant("default");
        setCursorText("");
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Precision Core Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#FFB800] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out hidden md:block"
        style={{
          boxShadow: "0 0 10px #FFB800",
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.6 : isHovered ? 1.5 : 1})`,
        }}
      />

      {/* Trailing Fluid Ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center font-display text-[10px] tracking-widest font-bold hidden md:flex ${
          cursorVariant === "drag" || cursorVariant === "interactive"
            ? "w-20 h-20 bg-[#FFB800] text-black border-none shadow-[0_0_30px_rgba(255,184,0,0.5)]"
            : isHovered
            ? "w-14 h-14 bg-transparent border-2 border-[#B8FF00] shadow-[0_0_20px_rgba(184,255,0,0.3)]"
            : "w-8 h-8 bg-transparent border border-[rgba(255,184,0,0.4)]"
        }`}
        style={{
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.85 : 1})`,
        }}
      >
        {cursorText && <span className="animate-pulse">{cursorText}</span>}
      </div>
    </>
  );
}
