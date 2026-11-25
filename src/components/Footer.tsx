/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { STAY_GUIDE_DATA } from "../data";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (id: string) => {
    // Instant SPA navigation
    onNavigate(id);
  };

  return (
    <footer id="app-footer" className="bg-brand-charcoal text-brand-beige py-14 border-t border-brand-warm/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
        
        {/* Main Grid: Centered on mobile, Left-aligned on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start text-center md:text-left">
          
          {/* Brand identity (7 cols) */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start space-y-3.5 sm:space-y-4">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 text-left cursor-pointer group -mt-1.5 sm:mt-0 mb-3 sm:mb-2 md:mb-0"
            >
              {/* Elegant Seorimjae logo symbol (Color: White) */}
              <div className="w-8.5 h-8.5 sm:w-7 sm:h-7 flex items-center justify-center text-white transition-colors shrink-0">
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
                <span className="font-cormorant text-[17.5px] sm:text-lg tracking-[0.25em] font-medium text-brand-beige group-hover:text-[#A8AF90] transition-colors leading-none">
                  SEORIMJAE
                </span>
                <span className="font-cormorant text-[11px] lg:text-[10px] tracking-[0.35em] text-neutral-400 mt-1 uppercase leading-none sm:hidden lg:inline">
                  서림재
                </span>
              </div>
            </button>

            {/* Address and info container - generous spacing on tablet */}
            <div className="w-full flex flex-col items-center md:items-start pt-2.5 sm:pt-4 space-y-2">
              {/* Address directly below logo */}
              <p className="flex items-center justify-center md:justify-start">
                <span className="bg-neutral-800/90 text-brand-beige px-2.5 py-1 rounded-md text-[10.5px] sm:text-[11.5px] inline-block border border-white/10 shadow-2xs font-pretendard break-keep">
                  <span className="font-cormorant text-neutral-400 font-semibold mr-1.5">주소 :</span> 
                  {STAY_GUIDE_DATA.address}
                </span>
              </p>

              {/* Company Info - Centered and cleanly structured on mobile and tablet */}
              <div className="font-pretendard text-[11px] sm:text-[12px] text-neutral-300 font-normal space-y-1.5 leading-relaxed pt-0.5">
                <p className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-0.5">
                  <span><span className="font-cormorant text-neutral-400 font-semibold">상호명 :</span> 주식회사 서림재</span>
                  <span className="text-white/20 hidden xs:inline">|</span> 
                  <span><span className="font-cormorant text-neutral-400 font-semibold">대표자 :</span> 최서윤</span>
                </p>
                <p className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1 sm:pt-1 sm:flex-col sm:items-center md:items-start lg:flex-row">
                  <span className="sm:block lg:inline sm:mt-0.5"><span className="font-cormorant text-neutral-400 font-semibold">사업자등록번호 :</span> 124-86-56789</span>
                  <span className="text-white/20 hidden xs:inline sm:hidden lg:inline">|</span> 
                  <span className="sm:block lg:inline"><span className="font-cormorant text-neutral-400 font-semibold">통신판매업신고 :</span> 제 2026-강원평창-1004호</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Operational Details (5 cols) - Centered on mobile, no bank account */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start space-y-3 pt-2 md:pt-0">
            <h4 className="text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase text-neutral-200 font-cormorant text-center md:text-left">
              CUSTOMER CARE
            </h4>
            <div className="flex flex-col items-center md:items-start space-y-1 text-[11.5px] sm:text-[12.5px] font-pretendard text-neutral-300 font-normal leading-relaxed">
              <p>
                <span className="font-cormorant text-neutral-400 font-medium mr-1.5">예약 및 고객문의 :</span> 
                <a href="tel:010-8254-1902" className="text-neutral-100 font-medium hover:text-brand-gold transition-colors">
                  010-8254-1902
                </a>
              </p>
              <p>
                <span className="font-cormorant text-neutral-400 font-medium mr-1.5">이메일 문의 :</span> 
                <a href="mailto:contact@seorimjae.com" className="text-neutral-200 font-cormorant text-[12px] sm:text-[13px] hover:text-brand-gold transition-colors">
                  contact@seorimjae.com
                </a>
              </p>
              <p>
                <span className="font-cormorant text-neutral-400 font-medium mr-1.5">상담 가능 시간 :</span> 
                <span className="text-neutral-300">09:00 - 20:00 (연중무휴)</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright bar - Reduced by 1px on tablet (11px) */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-neutral-400 font-light gap-1 sm:gap-2 text-center">
          <p className="font-cormorant tracking-[0.16em] text-[10px] sm:text-[11px] lg:text-[12px] text-neutral-400">
            © {new Date().getFullYear()} SEORIMJAE. ALL RIGHTS RESERVED.
          </p>
          <p className="font-cormorant tracking-[0.24em] uppercase text-[8.5px] sm:text-[10px] text-neutral-500">
            NATURAL SANCTUARY & REST STAY
          </p>
        </div>

      </div>
    </footer>
  );
}
