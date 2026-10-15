/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, MessageSquareMore, X, Mail, Phone, Clock, Copy, Check } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Rooms from "./components/Rooms";
import Experience from "./components/Experience";
import Notice from "./components/Notice";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  // Page states: "home" | "story" | "rooms" | "experience" | "notice" | "booking"
  const [currentPage, setCurrentPage] = useState("home");
  const [preSelectedRoomId, setPreSelectedRoomId] = useState("");
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copiedType, setCopiedType] = useState<"phone" | "email" | null>(null);
  const contactPopupRef = useRef<HTMLDivElement>(null);

  const handleCopy = (text: string, type: "phone" | "email", e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType((prev) => (prev === type ? null : prev));
    }, 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
        setIsContactOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close contact popup on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contactPopupRef.current &&
        !contactPopupRef.current.contains(event.target as Node)
      ) {
        setIsContactOpen(false);
      }
    };

    if (isContactOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isContactOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Sync state with URL parameter to support direct linking and reloads
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page");
    if (page && ["home", "story", "rooms", "experience", "notice", "booking"].includes(page)) {
      setCurrentPage(page);
    }
    window.scrollTo(0, 0);
  }, []);

  // Modern Page-switching Navigation with instant scroll-to-top
  const navigateToPage = (id: string) => {
    let targetPage = id;
    
    // Normalize section-based routing to page states
    if (id === "hero") {
      targetPage = "home";
    }

    setCurrentPage(targetPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Sync Room selection with booking notice redirection
  const handleSelectRoomForBooking = (roomId: string) => {
    setPreSelectedRoomId(roomId);
    navigateToPage("booking");
  };

  return (
    <div className="relative min-h-screen bg-brand-beige text-brand-charcoal selection:bg-brand-olive/20 selection:text-brand-charcoal">
      
      {/* Universal Floating Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateToPage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={(open) => {
          setIsMobileMenuOpen(open);
          if (open) setIsContactOpen(false);
        }}
      />

      {/* Main Pages Conditional Rendering */}
      <main className={currentPage === "home" ? "pt-0" : "pt-20"}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {currentPage === "home" && (
              /* Cinematic Welcome Hero Carousel - Shown when clicking logo or on home */
              <Hero 
                onScrollDown={() => navigateToPage("story")} 
                onNavigate={navigateToPage} 
              />
            )}

            {currentPage === "story" && (
              /* Brand Story, Philosophy, Feature highlights and Gallery */
              <Story onNavigate={navigateToPage} />
            )}

            {currentPage === "rooms" && (
              /* Editorial Rooms Layout */
              <Rooms onSelectRoomForBooking={handleSelectRoomForBooking} onNavigate={navigateToPage} />
            )}

            {currentPage === "experience" && (
              /* Sensory Experience Cards */
              <Experience onNavigate={navigateToPage} />
            )}

            {currentPage === "notice" && (
              /* Notice, Guidelines, Map & FAQs */
              <Notice onNavigate={navigateToPage} />
            )}

            {currentPage === "booking" && (
              /* Pre-booking Agreement and Final Link Button */
              <Booking preSelectedRoomId={preSelectedRoomId} onNavigate={navigateToPage} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Brand Footer - Hidden on Main/Home page as requested */}
      {currentPage !== "home" && <Footer onNavigate={navigateToPage} />}

      {/* Floating Action Buttons: Contact Inquiry & Scroll to Top - Hidden on mobile menu open */}
      <AnimatePresence>
        {showTopBtn && !isMobileMenuOpen && (
          <div className="fixed bottom-8 right-6 z-50 flex flex-col items-center gap-2.5">
            {/* Simple Contact Popup Card */}
            <AnimatePresence>
              {isContactOpen && (
                <motion.div
                  ref={contactPopupRef}
                  initial={{ opacity: 0, scale: 0.9, y: 10, x: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-14 right-0 w-[calc(100vw-3rem)] max-w-xs sm:w-80 bg-[#FAF8F5] border border-[#DDD5C5] rounded-2xl p-5 shadow-xl text-neutral-800 space-y-3.5 z-50 font-pretendard"
                >
                  {/* Popup Header */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-[#EAE3D4]">
                    <div className="flex items-center gap-2">
                      <MessageSquareMore className="w-4 h-4 text-brand-olive shrink-0" />
                      <span className="font-cormorant font-semibold text-[15.5px] text-brand-charcoal tracking-tight">
                        고객 문의
                      </span>
                    </div>
                    <button
                      onClick={() => setIsContactOpen(false)}
                      className="p-1 text-neutral-400 hover:text-neutral-700 rounded-md transition-colors cursor-pointer"
                      aria-label="문의 팝업 닫기"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[12px] text-neutral-600 font-light leading-relaxed break-keep font-pretendard">
                    궁금하신 점은 편하게 문의해 주시기 바랍니다.
                  </p>

                  {/* Direct Contact Actions */}
                  <div className="space-y-2 pt-0.5">
                    {/* Phone Call / Copy Item */}
                    <div
                      onClick={() => handleCopy("010-8254-1902", "phone")}
                      className="flex items-center justify-between p-2.5 px-3 rounded-xl bg-white border border-[#E8E1D2] hover:border-brand-olive hover:bg-brand-olive/5 transition-all group cursor-pointer shadow-2xs no-underline"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-brand-olive/10 flex items-center justify-center text-brand-olive group-hover:bg-brand-olive group-hover:text-white transition-colors shrink-0">
                          <Phone className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-left font-pretendard truncate">
                          <p className="text-[10.5px] text-neutral-500 leading-none">전화문의</p>
                          <p className="text-[13px] font-bold text-brand-charcoal mt-1.5 leading-none tracking-tight">010-8254-1902</p>
                        </div>
                      </div>
                      {copiedType === "phone" ? (
                        <span
                          className="w-7 h-7 flex items-center justify-center rounded-md bg-brand-olive/10 text-brand-olive shrink-0"
                          title="복사 완료"
                          aria-label="복사 완료"
                        >
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => handleCopy("010-8254-1902", "phone", e)}
                          className="w-7 h-7 flex items-center justify-center rounded-md text-neutral-400 group-hover:text-brand-olive hover:bg-neutral-100 transition-colors shrink-0 cursor-pointer"
                          title="전화번호 복사"
                          aria-label="전화번호 복사"
                        >
                          <Copy className="w-3.5 h-3.5 stroke-[1.8]" />
                        </button>
                      )}
                    </div>

                    {/* Email / Copy Item */}
                    <div
                      onClick={() => handleCopy("contact@seorimjae.com", "email")}
                      className="flex items-center justify-between p-2.5 px-3 rounded-xl bg-white border border-[#E8E1D2] hover:border-brand-olive hover:bg-brand-olive/5 transition-all group cursor-pointer shadow-2xs no-underline"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-brand-olive/10 flex items-center justify-center text-brand-olive group-hover:bg-brand-olive group-hover:text-white transition-colors shrink-0">
                          <Mail className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-left font-pretendard truncate">
                          <p className="text-[10.5px] text-neutral-500 leading-none">이메일 문의</p>
                          <p className="text-[13px] font-bold text-brand-charcoal mt-1.5 leading-none tracking-tight truncate">contact@seorimjae.com</p>
                        </div>
                      </div>
                      {copiedType === "email" ? (
                        <span
                          className="w-7 h-7 flex items-center justify-center rounded-md bg-brand-olive/10 text-brand-olive shrink-0"
                          title="복사 완료"
                          aria-label="복사 완료"
                        >
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => handleCopy("contact@seorimjae.com", "email", e)}
                          className="w-7 h-7 flex items-center justify-center rounded-md text-neutral-400 group-hover:text-brand-olive hover:bg-neutral-100 transition-colors shrink-0 cursor-pointer"
                          title="이메일 주소 복사"
                          aria-label="이메일 주소 복사"
                        >
                          <Copy className="w-3.5 h-3.5 stroke-[1.8]" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Consultation Hours */}
                  <div className="flex items-center gap-2 pt-1 border-t border-[#EAE3D4] text-[11px] text-neutral-500 font-pretendard">
                    <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>상담 시간: 09:00 - 20:00 (연중무휴)</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating Inquiry Icon Button (Exact same size as Top Button: w-11 h-11, pure icon, no text) */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsContactOpen((prev) => !prev)}
              aria-label="고객 문의 정보 보기"
              className={`w-11 h-11 transition-colors duration-300 flex items-center justify-center shadow-md cursor-pointer border border-white/20 rounded-full ${
                isContactOpen
                  ? "bg-brand-olive text-white ring-2 ring-brand-olive/40"
                  : "bg-brand-olive text-white hover:bg-brand-charcoal"
              }`}
            >
              {isContactOpen ? (
                <X className="w-5 h-5 stroke-[2]" />
              ) : (
                <MessageSquareMore className="w-5 h-5 stroke-[2]" />
              )}
            </motion.button>

            {/* Floating Scroll to Top Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              onClick={scrollToTop}
              aria-label="최상단으로 이동"
              className="w-11 h-11 bg-brand-charcoal text-white hover:bg-brand-olive transition-colors duration-300 flex items-center justify-center shadow-md cursor-pointer border border-white/20 rounded-full"
            >
              <ArrowUp className="w-5 h-5 stroke-[2]" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
