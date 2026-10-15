/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Calendar, ChevronRight } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
}

export default function Header({
  currentPage,
  onNavigate,
  isMobileMenuOpen: externalIsOpen,
  setIsMobileMenuOpen: externalSetIsOpen,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isMobileMenuOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsMobileMenuOpen = externalSetIsOpen !== undefined ? externalSetIsOpen : setInternalIsOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "story", label: "스토리" },
    { id: "rooms", label: "객실안내" },
    { id: "experience", label: "부대시설" },
    { id: "notice", label: "오시는길" },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    // Instant React state navigation with transitions and scroll to top
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: "instant" });
    // Update address bar query
    const newUrl = window.location.origin + window.location.pathname + (id === "home" ? "" : "?page=" + id);
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  // Header transparency logic: When mobile menu is open, header must blend seamlessly with zero opaque bar or blur line
  const isTransparent = !isMobileMenuOpen && currentPage === "home" && !isScrolled;

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "bg-brand-beige border-b border-transparent py-5 sm:py-6 shadow-none"
            : isTransparent
            ? "bg-transparent border-b border-transparent py-5 sm:py-6"
            : isScrolled
            ? "bg-brand-beige/95 backdrop-blur-md border-b border-brand-warm py-3 shadow-xs"
            : "bg-brand-beige/70 backdrop-blur-md border-b border-brand-warm/30 py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          
          {/* Brand Logo Wordmark with Symbol - Clicking redirects to home page with a full refresh */}
          <button
            id="nav-logo"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 text-left cursor-pointer select-none"
          >
            {/* Elegant Seorimjae logo symbol */}
            <div className={`w-8 h-8 flex items-center justify-center ${
              isTransparent ? "text-white" : "text-brand-olive"
            }`}>
              <svg
                className="w-full h-full"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.2" className="opacity-70" />
                <path d="M10 26 C15 20, 20 20, 25 26" stroke="currentColor" strokeWidth="1" />
                <path d="M16 28 C20 22, 24 22, 28 28" stroke="currentColor" strokeWidth="0.8" className="opacity-60" />
                <path d="M20 10 C22 14, 22 18, 20 22" stroke="currentColor" strokeWidth="1" />
                <path d="M20 10 C18 14, 18 18, 20 22" stroke="currentColor" strokeWidth="1" />
                <circle cx="26" cy="12" r="2" fill="currentColor" />
              </svg>
            </div>

            <div className="flex flex-col items-start">
              <span className={`text-[17px] sm:text-[19px] tracking-[0.2em] font-medium leading-none ${
                isTransparent ? "text-white" : "text-brand-charcoal"
              }`}>
                SEORIMJAE
              </span>
              <span className={`text-[11px] tracking-[0.2em] font-light mt-1 leading-none ${
                isTransparent ? "text-white/80" : "text-neutral-500"
              }`}>
                서림재
              </span>
            </div>
          </button>

          {/* Desktop Right Alignment Group */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <nav id="desktop-nav" className="flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-item-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative text-[13px] tracking-[0.15em] font-medium transition-colors cursor-pointer py-1.5 pr-2.5 ${
                      isTransparent
                        ? "text-brand-beige/90 hover:text-white"
                        : "text-neutral-600 hover:text-brand-olive"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeDot"
                        className={`absolute top-1 right-0 w-1.5 h-1.5 rounded-full ${
                          isTransparent ? "bg-white" : "bg-brand-olive"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Booking Button */}
            <div className="flex items-center">
              <button
                id="header-booking-btn"
                onClick={() => handleNavClick("booking")}
                className={`inline-flex items-center gap-2 px-4 py-2 text-[12.5px] tracking-[0.16em] font-medium transition-all duration-300 cursor-pointer rounded-xl shadow-2xs ${
                  isTransparent
                    ? "bg-white/20 backdrop-blur-xs text-white border border-white/40 hover:bg-brand-olive hover:border-brand-olive hover:text-white hover:shadow-[0_4px_20px_rgba(62,80,60,0.55)] active:scale-98"
                    : "bg-brand-olive text-white hover:bg-brand-charcoal border border-brand-olive/30 shadow-xs active:scale-98"
                }`}
                aria-label="실시간 예약하기"
              >
                <Calendar className="w-3.5 h-3.5 stroke-[1.5]" />
                <span>실시간 예약</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden -mr-1 p-2 transition-colors cursor-pointer ${
              isMobileMenuOpen
                ? "text-brand-charcoal hover:text-brand-olive"
                : isTransparent
                ? "text-brand-beige hover:text-brand-gold"
                : "text-brand-charcoal hover:text-brand-olive"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu - Clean, unified, zero opaque-strip artifacts */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-brand-beige z-40 pt-28 px-8 sm:px-10 flex flex-col justify-between pb-16 md:hidden"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`group flex items-center justify-between text-left text-[18px] tracking-[0.08em] font-medium transition-all duration-150 cursor-pointer px-4 py-3 rounded-xl border-b border-brand-warm/30 hover:border-transparent hover:bg-black/5 active:bg-black/10 active:scale-[0.99] ${
                    currentPage === item.id
                      ? "text-brand-olive font-semibold bg-brand-warm/50 border-transparent"
                      : "text-brand-charcoal hover:text-brand-olive"
                  }`}
                >
                  <span className="transition-colors duration-150">{item.label}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-all duration-150 ${
                      currentPage === item.id
                        ? "text-brand-olive opacity-100"
                        : "text-neutral-400 group-hover:text-brand-olive group-hover:translate-x-0.5"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex flex-col space-y-6">
              <button
                id="mobile-booking-drawer-btn"
                onClick={() => handleNavClick("booking")}
                className="w-full flex items-center justify-center gap-2.5 bg-brand-olive text-white text-[13.5px] tracking-[0.15em] font-medium py-3.5 rounded-xl transition-all duration-150 cursor-pointer hover:bg-brand-charcoal shadow-2xs active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>실시간 예약 바로가기</span>
              </button>

              <div className="text-center text-[12px] text-neutral-500 tracking-wider font-cormorant">
                © SEORIMJAE. ALL RIGHTS RESERVED.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
