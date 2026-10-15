/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, ChevronDown, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export default function Booking() {
  // Accordion state for booking guideline items (matching FAQ accordion style, initial null for all collapsed)
  const [activeAccordionId, setActiveAccordionId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordionId(activeAccordionId === id ? null : id);
  };

  const bookingGuidelines = [
    {
      id: "book-1",
      number: "01",
      title: "입퇴실 시간 및 이용 정원 안내",
      mobileTitle: "입퇴실 시간 및 이용 정원",
      summary: "서림재는 하루 한 팀만을 위한 프라이빗 독채 풀빌라로 운영됩니다.",
      highlights: [
        { label: "입퇴실 시간", text: "입실 15:00 / 퇴실 11:00 (정밀 위생 소독 및 룸 컨디션 정비)" },
        { label: "이용 정원", text: "기준 2인 / 최대 6인 (독채 1팀 전용, 기준 초과 시 1인 30,000원 추가)" },
        { label: "비대면 체크인", text: "체크인 당일 오전 입실 안내 문자 및 스마트 도어락 비밀번호 발송" }
      ]
    },
    {
      id: "book-2",
      number: "02",
      title: "사계절 온수풀 & 편백 스파 이용 수칙",
      mobileTitle: "온수풀 & 스파 이용 수칙",
      summary: "사계절 24시간 미온수(32~34℃)와 천연 편백 히노끼를 추가 요금 없이 상시 이용하실 수 있습니다.",
      highlights: [
        { label: "24h 무료 이용", text: "입실부터 퇴실까지 24시간 언제든 자유롭게 온수풀 이용 가능 (추가 요금 없음)" },
        { label: "수심 및 안전", text: "수심 1.1m (영유아 및 아동 물놀이 시 성인 보호자의 상시 밀착 케어 필수)" },
        { label: "입욕제 제한", text: "천연 편백목 및 순환 필터 보호를 위해 개별 입욕제(버블바 등) 사용 제한" }
      ]
    },
    {
      id: "book-3",
      number: "03",
      title: "객실 필수 금지 및 이용 주의사항",
      mobileTitle: "객실 이용 및 주의사항",
      summary: "쾌적한 휴식 환경과 원목 건축물 보호를 위해 아래 필수 수칙을 준수해 주시기 바랍니다.",
      highlights: [
        { label: "전 구역 금연", text: "실내 및 온수풀 영역 전 구역 금연 (흡연 흔적 적발 시 특수 청소비 20만원 부과)" },
        { label: "실내 조리 제한", text: "실내 육류/생선 구이 및 튀김 조리 금지 (야외 전용 바베큐 테라스 이용)" },
        { label: "반려동물 불가", text: "위생 관리 및 알레르기 예방을 위해 반려동물 동반 입실 불가" }
      ]
    },
    {
      id: "book-4",
      number: "04",
      title: "취소 수수료 및 환불 규정 안내",
      mobileTitle: "취소 수수료 및 환불 규정",
      summary: "올바른 예약 문화 정착을 위해 이용일 기준 아래 환불 기준이 적용됩니다.",
      hasTable: true
    }
  ];

  const refundPolicy = [
    { day: "이용 10일 전까지", fee: "수수료 없음", refund: "100% 전액 환불", status: "safe" },
    { day: "이용 9일 ~ 7일 전", fee: "10% 공제", refund: "90% 환불", status: "safe" },
    { day: "이용 6일 ~ 5일 전", fee: "30% 공제", refund: "70% 환불", status: "warning" },
    { day: "이용 4일 ~ 3일 전", fee: "50% 공제", refund: "50% 환불", status: "warning" },
    { day: "이용 2일 ~ 전일", fee: "80% 공제", refund: "20% 환불", status: "danger" },
    { day: "당일 취소 / 노쇼", fee: "100% 공제", refund: "환불 불가", status: "danger" },
  ];

  return (
    <section id="booking-portal" className="bg-[#F5F2EB] min-h-screen py-16 sm:py-24 border-b border-brand-warm/60 select-none">
      
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-12">
        
        {/* Main Header - Unified Style matching Notice FAQ */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-brand-olive mb-3"
          >
            <span className="text-[13px] sm:text-[14px] tracking-[0.2em] font-bold uppercase font-cormorant">
              RESERVATION & POLICIES
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cormorant text-[26px] sm:text-[28px] font-normal text-brand-charcoal tracking-tight"
          >
            예약 및 이용 안내
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[13.5px] text-neutral-700 font-medium leading-relaxed max-w-xl mx-auto mt-2 break-keep"
          >
            서림재를 예약하시기 전 안내사항을<br className="sm:hidden" /> 꼭 확인해 주시기 바랍니다.
          </motion.p>
        </div>

        {/* Master Outer Container matching FAQ section */}
        <div className="bg-[#F9F7F2] border border-brand-warm/80 p-4 sm:p-6 shadow-2xs space-y-2.5 sm:space-y-3 rounded-2xl">
          {bookingGuidelines.map((item, index) => {
            const isOpen = activeAccordionId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#F5F2EB] border border-brand-warm/80 p-3 sm:p-4.5 rounded-xl shadow-2xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <span className="text-brand-olive text-[13px] sm:text-[14px] font-semibold shrink-0">
                      {item.number}
                    </span>
                    <span className="font-cormorant text-[14.5px] sm:text-[16.5px] font-semibold text-brand-charcoal group-hover:text-brand-olive transition-colors whitespace-nowrap">
                      <span className="sm:hidden">{item.mobileTitle || item.title}</span>
                      <span className="hidden sm:inline">{item.title}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-2 sm:ml-4">
                    <ChevronDown
                      className={`w-4 h-4 sm:w-4.5 sm:h-4.5 text-neutral-400 group-hover:text-brand-olive transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-brand-olive" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3.5 p-3.5 sm:p-6 bg-[#FDFBF7] border border-brand-warm/90 rounded-xl shadow-xs space-y-3.5 sm:space-y-4">
                        <p className="text-[13px] sm:text-[14.5px] text-brand-charcoal leading-[1.75] sm:leading-[1.8] font-medium break-keep">
                          {item.summary}
                        </p>

                        {/* Text Highlights with Mobile Vertical Stacking for Readability */}
                        {item.highlights && item.highlights.length > 0 && (
                          <div className="pt-2 border-t border-brand-warm/60 space-y-2 sm:space-y-2.5">
                            {item.highlights.map((h, hIdx) => (
                              <div
                                key={hIdx}
                                className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 bg-[#F5F2EB]/70 p-2.5 sm:p-3 rounded-lg border border-brand-warm/60"
                              >
                                <div className="shrink-0">
                                  <span className="inline-block sm:w-28 text-left sm:text-center text-[11px] sm:text-[12px] font-semibold text-brand-olive bg-[#EAE5D9] px-2 py-0.5 sm:py-1 rounded-md border border-brand-warm/80">
                                    {h.label}
                                  </span>
                                </div>
                                <span className="text-[12px] sm:text-[13.5px] text-neutral-800 font-medium leading-[1.65] pl-0.5 sm:pl-0">
                                  {h.text}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Refund Table inside Accordion */}
                        {item.hasTable && (
                          <div className="pt-2 border-t border-brand-warm/60">
                            <div className="bg-[#F5F2EB]/70 border border-brand-warm/80 rounded-xl overflow-hidden shadow-2xs">
                              <div className="w-full">
                                <div className="grid grid-cols-12 bg-[#EAE6DC] border-b border-brand-warm/80 px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-[12px] font-bold text-brand-charcoal text-center">
                                  <div className="col-span-5 text-left pl-1 sm:pl-2">이용 기준일</div>
                                  <div className="col-span-3">취소 수수료</div>
                                  <div className="col-span-4 text-right pr-1 sm:pr-2">환불 비율</div>
                                </div>

                                <div className="divide-y divide-brand-warm/50">
                                  {refundPolicy.map((refItem, rIdx) => (
                                    <div
                                      key={rIdx}
                                      className="grid grid-cols-12 items-center px-3 sm:px-4 py-2 sm:py-2.5 text-[11.5px] sm:text-[13px]"
                                    >
                                      <div className="col-span-5 text-left pl-1 sm:pl-2 font-semibold text-brand-charcoal text-[11px] sm:text-[13px]">
                                        {refItem.day}
                                      </div>
                                      <div className="col-span-3 text-center text-neutral-700 font-medium text-[11px] sm:text-[12.5px]">
                                        {refItem.fee}
                                      </div>
                                      <div className="col-span-4 text-right pr-1 sm:pr-2">
                                        <span
                                          className={`inline-block px-2 sm:px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11.5px] font-semibold transition-colors ${
                                            refItem.status === "safe"
                                              ? "bg-[#E2EAE0] text-[#3D5237] border border-[#CAD8C7]"
                                              : refItem.status === "warning"
                                              ? "bg-[#EFE9DC] text-[#7A6643] border border-[#DDD3C0]"
                                              : "bg-[#EFE6E4] text-[#8C534D] border border-[#DCC5C1]"
                                          }`}
                                        >
                                          {refItem.refund}
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <p className="text-[11px] sm:text-[12px] text-neutral-600 font-medium pt-2.5 pl-1 leading-relaxed">
                              * 취소 수수료 규정은 공정거래위원회 표준 약관 및 네이버 예약 취소 규정에 준하여 엄격히 적용됩니다.
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Real-time Reservation Action Button */}
        <div className="text-center pt-3 sm:pt-6">
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            href="https://booking.naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 sm:gap-3 w-full max-w-[290px] sm:w-auto px-8 sm:px-12 py-3.5 sm:py-4 bg-brand-olive hover:bg-brand-charcoal text-white font-medium text-[14px] sm:text-[15px] tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer rounded-xl group"
          >
            <Calendar className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            <span>실시간 예약 바로가기</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </motion.a>
        </div>

      </div>

    </section>
  );
}
