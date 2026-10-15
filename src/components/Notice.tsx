/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Info, ChevronDown, Sparkles, Clock, Compass, ArrowRight, HelpCircle } from "lucide-react";
import { STAY_GUIDE_DATA } from "../data";

interface NoticeProps {
  onNavigate?: (page: string) => void;
}

export default function Notice({ onNavigate }: NoticeProps) {
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  const generalFaqs = [
    {
      id: "gen-faq-1",
      question: "예약 및 결제는 어떻게 진행되나요?",
      mobileQuestion: "예약 및 결제 방법 안내",
      answer: "서림재는 '네이버 공식 예약 시스템'을 통해 실시간으로 예약이 확정됩니다.",
      highlights: [
        { label: "실시간 예약", text: "상단 실시간 예약을 통해 잔여 객실 확인 및 즉시 예약 가능" },
        { label: "간편 결제", text: "네이버페이 및 신용카드 간편 결제 지원 (결제 즉시 예약 확정)" }
      ]
    },
    {
      id: "gen-faq-2",
      question: "온수풀 이용 시간과 수온은 어떻게 되나요?",
      mobileQuestion: "온수풀 이용 시간 및 수온",
      answer: "개별 사계절 온수풀은 입실(15:00)부터 퇴실(11:00)까지 24시간 무료 이용 가능합니다.",
      highlights: [
        { label: "24h 미온수", text: "사계절 32~34℃ 적정 수온이 24시간 자동 순환 유지 (추가 요금 없음)" },
        { label: "고온 옵션", text: "더 따뜻한 수온을 원하실 경우 사전 요청 시 36℃ 고온 유지 가능" }
      ]
    },
    {
      id: "gen-faq-3",
      question: "웰컴 티와 다도 세트는 어떻게 이용하나요?",
      mobileQuestion: "웰컴 티 & 다도 세트 이용",
      answer: "편백 누마루에 최고급 수공예 도자기 다기와 오대산 야생 잎차가 기본 세팅됩니다.",
      highlights: [
        { label: "무료 제공", text: "체크인 시 누마루에 다기 세트, 온수포트, 찻잎 정갈하게 준비" },
        { label: "이용 추천", text: "솔숲을 바라보며 아침 기상 후나 스파 후 따뜻한 티타임 추천" }
      ]
    },
    {
      id: "gen-faq-4",
      question: "주차 공간 및 전기차 충전이 가능한가요?",
      mobileQuestion: "전용 주차 및 충전 안내",
      answer: "하루 한 팀 단독 전용 주차장이 객실 정문 바로 앞에 마련되어 있습니다.",
      highlights: [
        { label: "단독 주차", text: "객실 바로 앞 전용 주차 공간에 최대 3대까지 여유롭게 단독 주차 가능" },
        { label: "평지 동선", text: "주차장에서 객실 현관까지 단차 없는 평지로 쾌적한 짐 이동" }
      ]
    },
    {
      id: "gen-faq-5",
      question: "기본 구비 어메니티는 어떤 것들이 있나요?",
      mobileQuestion: "기본 어메니티 구비 품목",
      answer: "호텔급 프리미엄 친환경 비건 어메니티와 호텔 코튼 베딩이 완비되어 있습니다.",
      highlights: [
        { label: "구비 품목", text: "샴푸, 컨디셔너, 바디워시, 바디로션, 호텔 가운, 다이슨 드라이어 완비" },
        { label: "개별 지참", text: "환경 보호(일회용품 줄이기) 정책으로 칫솔 및 치약은 개별 지참 권장" }
      ]
    },
    {
      id: "gen-faq-6",
      question: "야외 바베큐 및 불멍 이용 방법이 궁금합니다.",
      mobileQuestion: "야외 바베큐 & 불멍 이용",
      answer: "개별 솔숲 테라스에서 최고급 웨버 가스 그릴과 참나무 파이어핏을 즐기실 수 있습니다.",
      highlights: [
        { label: "웨버 그릴", text: "온도 조절이 간편하고 연기가 적은 최고급 웨버 가스 그릴 제공" },
        { label: "참나무 불멍", text: "오대산 참나무 장작(10kg)과 안전 화로대로 밤하늘 불멍 만끽" },
        { label: "조리 안내", text: "쾌적한 룸 관리를 위해 실내 구이는 제한되며 야외 테라스 이용" }
      ]
    },
    {
      id: "gen-faq-7",
      question: "인근 마트 및 편의점 등 편의시설 위치는 어디인가요?",
      mobileQuestion: "인근 마트 및 편의시설 위치",
      answer: "호젓한 숲속 힐링을 위해 도보 거리에는 상점이 없으므로 사전 구매를 권장합니다.",
      highlights: [
        { label: "인근 마트", text: "차량 8~10분 거리 '진부 농협 하나로마트' 및 24시 대형 편의점 위치" },
        { label: "장보기 팁", text: "체크인 전 필요한 식음료 및 바베큐 식자재를 미리 구매 후 입실 추천" }
      ]
    }
  ];

  return (
    <section id="notice" className="bg-[#F5F2EB] relative overflow-hidden">
      
      {/* Soft Decorative Background Blur */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-brand-warm/20 rounded-full filter blur-3xl opacity-50 z-0 pointer-events-none" />

      {/* SECTION 1: 찾아오시는 길 안내 (Directions & Map) - Background #F5F2EB */}
      <div className="py-20 sm:py-24 border-b border-brand-warm/60 bg-[#F5F2EB]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center gap-2 text-brand-olive mb-2.5"
            >
              <span className="text-[13px] sm:text-[14px] tracking-[0.16em] font-bold uppercase font-cormorant">
                LOCATION GUIDE
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="font-cormorant text-[26px] sm:text-[28px] font-normal text-brand-charcoal tracking-tight"
            >
              찾아오시는 길 안내
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-[13.5px] font-pretendard font-light text-neutral-600 max-w-xl mx-auto mt-3 leading-relaxed break-keep text-center"
            >
              편안하고 안전한 방문을 위한<br className="sm:hidden" /> 서림재 위치와 교통편 안내입니다.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Custom Vector Graphic Map Container - Styled with #F9F7F2 */}
            <div className="bg-[#F9F7F2] border border-brand-olive/20 rounded-2xl p-8 h-[290px] relative overflow-hidden flex flex-col justify-between shadow-xs">
              
              {/* Abstract Stylized Minimal Mountain & Forest Art Grid background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-10 180 Q40 100 90 180 T190 180 Q240 110 290 180 T390 180" fill="none" stroke="#3E503C" strokeWidth="1.2" />
                  <path d="M40 220 Q120 150 200 220 T360 220" fill="none" stroke="#3E503C" strokeWidth="0.8" />
                  <circle cx="50" cy="120" r="3" fill="#3E503C" />
                  <circle cx="120" cy="80" r="2" fill="#3E503C" />
                  <circle cx="280" cy="90" r="3.5" fill="#3E503C" />
                  <circle cx="340" cy="150" r="2" fill="#3E503C" />
                </svg>
              </div>

              {/* Core stay indicator */}
              <div className="relative my-auto flex flex-col items-center justify-center z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-olive rounded-full filter blur-md opacity-30 animate-ping" />
                  <div className="w-12 h-12 bg-brand-olive text-white rounded-full flex items-center justify-center relative shadow-md">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="font-cormorant text-[16.5px] font-semibold text-brand-charcoal mt-3 tracking-wide">
                  서림재 (SEORIMJAE)
                </span>
                <span className="text-[13px] text-brand-charcoal mt-2.5 font-pretendard font-medium bg-[#EFECE3] border border-brand-warm/80 px-4 py-1.5 rounded-xl shadow-2xs">
                  도로명 주소: 강원도 평창군 깊은숲길 108
                </span>
              </div>

              {/* Location Footer / Guide tips */}
              <div className="relative z-10 text-[11.5px] sm:text-[12px] text-neutral-700 font-medium border-t border-brand-warm/80 pt-3.5 sm:pt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center sm:text-left gap-1">
                <span className="whitespace-nowrap inline-block text-center w-full sm:w-auto">* 영동고속도로 진부 IC에서 차로 12분 소요</span>
                <span className="font-semibold text-brand-olive hidden sm:inline">오대산 국립공원 인근</span>
              </div>

            </div>

            {/* Map Integration Buttons - Point color default and darker hover for Naver map */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8 mb-4 sm:mt-10 sm:mb-6 pt-2 pb-2">
              <a
                href="https://map.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-brand-olive text-white border border-transparent text-[13.5px] font-medium font-pretendard rounded-xl text-center hover:bg-brand-charcoal transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-white" />
                네이버 지도에서 보기
              </a>
              <a
                href="https://map.kakao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-white border border-brand-warm text-[13.5px] text-neutral-700 font-medium font-pretendard rounded-xl text-center hover:bg-[#F9F7F2] hover:border-brand-olive/50 transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-brand-olive" />
                카카오 맵에서 보기
              </a>
            </div>

          </motion.div>

        </div>
      </div>

      {/* SECTION 2: 자주 묻는 질문 (FAQ) - Background #F9F7F2 */}
      <div className="py-20 sm:py-24 bg-[#F9F7F2] border-b border-brand-warm/60">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-2 text-brand-olive mb-3"
            >
              <span className="text-[13px] sm:text-[14px] tracking-[0.16em] font-bold uppercase font-cormorant">
                COMMON QUESTIONS
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-cormorant text-[26px] sm:text-[28px] font-normal text-brand-charcoal tracking-tight"
            >
              자주 묻는 질문 (FAQ)
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[13.5px] font-pretendard font-light text-neutral-600 max-w-xl mx-auto mt-3 leading-relaxed break-keep text-center"
            >
              시설 및 서비스에 대해 자주 궁금해하시는<br className="sm:hidden" /> 핵심 안내사항입니다.
            </motion.p>
          </div>

          <div className="space-y-8">
            {/* Accordion Questions List with Staggered Entrance */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#F9F7F2] border border-brand-warm/80 p-4 sm:p-6 shadow-2xs space-y-2.5 sm:space-y-3 rounded-2xl"
            >
              {generalFaqs.map((faq) => {
                const isOpen = activeFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    id={`faq-item-container-${faq.id}`}
                    className="bg-[#F5F2EB] border border-brand-warm/80 p-3.5 sm:p-4.5 rounded-xl shadow-2xs transition-all duration-200"
                  >
                    <button
                      id={`faq-trigger-${faq.id}`}
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex justify-between items-center text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
                        <HelpCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-brand-olive shrink-0 stroke-[1.8]" />
                        <span className="font-cormorant text-[14.5px] sm:text-[16px] font-semibold text-brand-charcoal group-hover:text-brand-olive transition-colors leading-snug whitespace-nowrap">
                          <span className="sm:hidden">{faq.mobileQuestion || faq.question}</span>
                          <span className="hidden sm:inline">{faq.question}</span>
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 group-hover:text-brand-olive transition-transform duration-300 shrink-0 ml-2 sm:ml-4 ${
                          isOpen ? "rotate-180 text-brand-olive" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 p-3.5 sm:p-6 bg-[#FDFBF7] border border-brand-warm/90 rounded-xl shadow-xs space-y-3 sm:space-y-4">
                            <p className="text-[12px] sm:text-[14.5px] text-brand-charcoal leading-[1.7] sm:leading-[1.8] font-pretendard font-medium">
                              {faq.answer}
                            </p>
                            {faq.highlights && faq.highlights.length > 0 && (
                              <div className="pt-2 border-t border-brand-warm/60 space-y-2 sm:space-y-2.5">
                                {faq.highlights.map((h, hIdx) => (
                                  <div key={hIdx} className="flex items-center gap-2 sm:gap-3 bg-[#F5F2EB]/70 p-2 sm:p-3 rounded-lg border border-brand-warm/60">
                                    <span className="w-20 sm:w-28 shrink-0 text-center text-[10.5px] sm:text-[12px] font-pretendard font-semibold text-brand-olive bg-[#EAE5D9] px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md border border-brand-warm/80">
                                      {h.label}
                                    </span>
                                    <span className="text-[11.5px] sm:text-[13.5px] text-neutral-800 font-medium leading-[1.5] sm:leading-[1.65]">
                                      {h.text}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>

            {/* Direct Contact Call to Action Box - Distinct Natural Soft Warm Background (#F4F0E6) & Refined Contrast */}
            <div className="p-6 sm:p-10 bg-[#F4F0E6] border border-[#DDD6C5] text-[13px] text-neutral-700 leading-relaxed text-center space-y-4 rounded-2xl shadow-xs mt-12 mb-10">
              <p className="font-semibold text-brand-charcoal text-[17.5px] tracking-wide mb-3">
                추가 문의사항 안내
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-brand-olive font-semibold text-[13px] sm:text-[13.5px] pt-1">
                <span>전화문의: 010-8254-1902</span>
                <span className="hidden sm:inline text-neutral-400">|</span>
                <span>이메일: contact@seorimjae.com</span>
                <span className="hidden sm:inline text-neutral-400">|</span>
                <span>카카오톡 채널: @서림재</span>
              </div>
              <p className="text-[11.5px] sm:text-[12px] text-neutral-700 font-medium pt-3 border-t border-[#DDD6C5]/70 max-w-lg mx-auto whitespace-nowrap sm:whitespace-normal">
                <span className="hidden sm:inline">고객센터로 연락주시면 정성을 다해 신속하게 상담해 드리겠습니다. (상담시간 09:00 - 20:00)</span>
                <span className="sm:hidden">궁금하신 점은 언제든 편안하게 문의해 주세요.</span>
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
