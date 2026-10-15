/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight, Phone } from "lucide-react";
import { SCROLLING_IMAGES } from "../data";

interface HeroProps {
  onScrollDown?: () => void;
  onNavigate?: (page: string) => void;
}

export default function Hero({ onScrollDown, onNavigate }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SCROLLING_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + SCROLLING_IMAGES.length) % SCROLLING_IMAGES.length);
  };

  // Auto-play the slider every 5.0 seconds with fast and snappy cross-fade
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleExplore = () => {
    if (onNavigate) {
      onNavigate("story");
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (onScrollDown) {
      onScrollDown();
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] sm:h-screen flex items-center justify-center bg-brand-charcoal overflow-hidden select-none"
    >
      {/* Background Image Carousel Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.5, ease: "easeOut" }, // Snappy, immediate image transition
              scale: { duration: 5.0, ease: "linear" }, // Soft subtle Ken Burns
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={SCROLLING_IMAGES[currentIndex]}
              alt={`Seorimjae view ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Premium Vignette Overlay (Enhanced contrast and readability) */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/70 via-brand-charcoal/25 to-brand-charcoal/80 z-5" />
      </div>

      {/* Mobile-Only Exploration Button in Center - Adjusted slightly down */}
      <div className="sm:hidden relative z-20 w-full px-6 flex flex-col items-center justify-center text-center -translate-y-1.5">
        {/* Mobile Center Circular Exploration Button - Clean Emblem */}
        <button
          onClick={handleExplore}
          className="group flex flex-col items-center cursor-pointer focus:outline-hidden active:scale-95 transition-transform"
          aria-label="서림재 스토리 페이지로 이동"
        >
          <div className="relative w-34 h-34 flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/35 rounded-full p-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300">
            <svg
              className="w-full h-full text-white"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="0.8" className="opacity-25" />
              <circle
                key={currentIndex}
                cx="60"
                cy="60"
                r="48"
                stroke="currentColor"
                strokeWidth="1.6"
                className="stroke-white animate-circular-loader"
                strokeDasharray="301.6"
                strokeDashoffset="301.6"
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "60px 60px",
                }}
              />
              <g transform="translate(34, 34) scale(1.3)" className="opacity-95">
                <path d="M10 26 C15 20, 20 20, 25 26" stroke="currentColor" strokeWidth="1.1" />
                <path d="M16 28 C20 22, 24 22, 28 28" stroke="currentColor" strokeWidth="0.8" className="opacity-60" />
                <path d="M20 10 C22 14, 22 18, 20 22" stroke="currentColor" strokeWidth="1.1" />
                <path d="M20 10 C18 14, 18 18, 20 22" stroke="currentColor" strokeWidth="1.1" />
                <circle cx="26" cy="12" r="2.2" fill="currentColor" />
              </g>
            </svg>
          </div>

          {/* Refined Pill Badge with concise core text and Arrow Icon */}
          <div className="mt-3.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/25 text-white shadow-lg active:bg-black/70 transition-all">
            <span className="text-[12px] font-pretendard font-medium text-white/95 tracking-wide">
              숲속 독채 풀빌라, 서림재
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-white/90 shrink-0" />
          </div>
        </button>
      </div>

      {/* Bottom Bar: Cleanly Separated Controls (No overlapping on mobile or desktop) */}
      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 flex items-center justify-center sm:justify-between w-full">
          {/* Inquiry & Contact Information on the Left (Simple Minimalist Translucent Pill) */}
          <a
            href="tel:010-8254-1902"
            className="pointer-events-auto flex items-center gap-2 bg-black/35 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-white/70 text-[10.5px] sm:text-[11.5px] font-pretendard tracking-wide shadow-md select-none"
            title="전화 문의하기"
          >
            <Phone className="w-3 h-3 text-white/60 shrink-0" />
            <span className="font-normal tracking-wider text-white/75">010-8254-1902</span>
            <span className="text-white/25 text-[10px]">·</span>
            <span className="text-white/60 font-light">상담 09:00~20:00</span>
          </a>

          {/* Slide Navigation & Counter on the Right - Hidden on mobile */}
          <div className="hidden sm:flex pointer-events-auto items-center gap-0.5 bg-black/40 backdrop-blur-md border border-white/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full shadow-lg">
            <button
              onClick={prevSlide}
              className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-all duration-200 cursor-pointer active:scale-95"
              aria-label="이전 사진 보기"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
            </button>

            <div className="px-1 text-[11.5px] sm:text-[13px] font-medium tracking-[0.08em] text-white/90 select-none">
              <span>{String(currentIndex + 1).padStart(2, "0")}</span>
              <span className="text-white/40 mx-0.5">/</span>
              <span>{String(SCROLLING_IMAGES.length).padStart(2, "0")}</span>
            </div>

            <button
              onClick={nextSlide}
              className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-all duration-200 cursor-pointer active:scale-95"
              aria-label="다음 사진 보기"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Centered Button: Shown only on screens >= 640px where there is ample width */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2">
        <button
          onClick={handleExplore}
          className="group flex flex-col items-center cursor-pointer focus:outline-hidden"
          aria-label="서림재 스토리 페이지로 이동"
        >
          <div className="relative w-30 h-30 sm:w-32 sm:h-32 flex items-center justify-center transition-all duration-300 group-hover:scale-105 active:scale-95 bg-brand-charcoal/30 border border-white/10 group-hover:bg-brand-olive group-hover:border-brand-olive group-hover:shadow-[0_4px_24px_rgba(62,80,60,0.55)] rounded-full p-2">
            <svg
              className="w-full h-full text-white"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Faint static background circle */}
              <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="1" className="opacity-20" />
              
              {/* Animated foreground loading circle - resets on currentIndex change */}
              <circle
                key={currentIndex}
                cx="60"
                cy="60"
                r="48"
                stroke="currentColor"
                strokeWidth="1.5"
                className="stroke-white animate-circular-loader"
                strokeDasharray="301.6"
                strokeDashoffset="301.6"
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "60px 60px",
                }}
              />
              
              {/* Seorimjae Nature Symbol placed precisely inside the center */}
              <g transform="translate(34, 34) scale(1.3)" className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <path d="M10 26 C15 20, 20 20, 25 26" stroke="currentColor" strokeWidth="1" />
                <path d="M16 28 C20 22, 24 22, 28 28" stroke="currentColor" strokeWidth="0.8" className="opacity-60" />
                <path d="M20 10 C22 14, 22 18, 20 22" stroke="currentColor" strokeWidth="1" />
                <path d="M20 10 C18 14, 18 18, 20 22" stroke="currentColor" strokeWidth="1" />
                <circle cx="26" cy="12" r="2" fill="currentColor" />
              </g>
            </svg>
          </div>

          {/* Point color on hover for center button */}
          <span className="mt-2.5 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-xs border border-white/20 text-white/90 text-[11.5px] font-pretendard tracking-wider transition-all duration-300 group-hover:bg-brand-olive group-hover:border-brand-olive group-hover:text-white group-hover:scale-105 shadow-sm">
            <span>스토리 페이지 이동</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </button>
      </div>

    </section>
  );
}
