/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, Sun, Sparkles, Map, Clock, X, Info, HelpCircle, ChevronDown, Utensils, Flame } from "lucide-react";
import { EXPERIENCE_DATA } from "../data";

interface ExperienceProps {
  onNavigate?: (page: string) => void;
}

export default function Experience({ onNavigate }: ExperienceProps) {
  const [selectedExp, setSelectedExp] = useState<typeof EXPERIENCE_DATA[0] | null>(null);
  const [isMorningBasketOpen, setIsMorningBasketOpen] = useState(false);

  const getIcon = (id: string) => {
    if (id.includes("tea")) return <Coffee className="w-4 h-4 text-brand-olive stroke-[1.5]" />;
    if (id.includes("bbq")) return <Utensils className="w-4 h-4 text-brand-olive stroke-[1.5]" />;
    if (id.includes("breakfast")) return <Sparkles className="w-4 h-4 text-brand-olive stroke-[1.5]" />;
    if (id.includes("forest")) return <Map className="w-4 h-4 text-brand-olive stroke-[1.5]" />;
    if (id.includes("fire")) return <Flame className="w-4 h-4 text-brand-olive stroke-[1.5]" />;
    return <Sun className="w-4 h-4 text-brand-olive stroke-[1.5]" />;
  };

  const getExperienceSpecs = (id: string) => {
    switch (id) {
      case "exp-tea":
        return {
          time: "입실 후 상시 가능 (추천: 08:00 - 10:00 / 15:00 - 17:00)",
          items: "야생 유기농 잎차, 수공예 도자기 다기 세트, 보온 온수포트, 대나무 차선",
          tip: "서림재가 선사하는 고요함 속에 차를 따르는 소리와 찻잎이 피어오르는 향기에 집중해보시기 바랍니다.",
          guidelines: [
            "도자기 다기는 세심하게 제작된 수공예품이므로 취급 시 파손에 유의바랍니다.",
            "사용하신 다기는 동봉된 부드러운 천으로 가볍게 세척하여 건조대에 올려주십시오."
          ]
        };
      case "exp-bbq":
        return {
          time: "오후 17:30 - 21:30 (야외 테라스)",
          items: "최고급 웨버 가스 그릴, 집게/가위, 야외 전용 다이닝 테이블웨어 세트",
          tip: "솔숲의 맑은 저녁 공기와 함께 단독 정원에서 우리만의 오붓한 바베큐 만찬을 즐겨보세요.",
          guidelines: [
            "가스 그릴 사용법은 체크인 안내 시 상세히 설명해 드립니다.",
            "안전을 위해 사용 후 가스 밸브 잠금을 반드시 확인해 주시기 바랍니다."
          ]
        };
      case "exp-breakfast":
        return {
          time: "매일 오전 08:30 - 09:00 사이 제공 (비대면 룸서비스)",
          items: "히노끼 원목 찬합에 담긴 개별 조식 세트 & 유기농 드립 커피",
          tip: "신선한 제철 로컬 유기농 식재료와 갓 구운 통밀 빵으로 상쾌하게 깨어나는 아침을 만끽하세요.",
          guidelines: [
            "체크인 시 원하시는 음료(사과 착즙 주스 또는 드립 커피)를 선택하실 수 있습니다.",
            "식사 후 찬합을 문 밖에 다시 놓아주시면 정해진 시간에 수거해 드립니다."
          ]
        };
      case "exp-forest":
        return {
          time: "일출 후부터 일몰 전까지 자유 산책",
          items: "투숙객 전용 비공개 솔숲 둘레길, 산책 지도, 원목 스틱 대여",
          tip: "오대산 사유지 산책로를 걸으며 깊은 솔숲 피톤치드를 호흡해보세요.",
          guidelines: [
            "전 구역 절대 금연이며 어떤 화기 도구도 지참하실 수 없습니다.",
            "지정된 둘레길 이외 구역 진입은 안전을 위해 금지되어 있습니다."
          ]
        };
      case "exp-fire":
        return {
          time: "오후 18:00 - 22:30 (강풍, 강우 시 안전을 위해 제한)",
          items: "참나무 장작 1망(약 10kg), 석재 파이어핏 화로, 착화제, 롱라이터",
          tip: "밤하늘 은하수 아래 타닥타닥 참나무 장작불 소리와 함께 무념무상의 시간을 누립니다.",
          guidelines: [
            "서림재 전용 야외 정원 파이어핏 라운지에서 프라이빗하게 상시 제공됩니다.",
            "사용이 끝난 화로대에는 공기 차단 덮개를 닫아 자연 소화해주시길 바랍니다."
          ]
        };
      default:
        return {
          time: "오후 15:00 - 23:00 / 익일 오전 08:00 - 10:30",
          items: "천연 원목 편백 히노끼 대형 욕조, 천연 미네랄 솔트 1회분",
          tip: "온수가 원목에 닿는 순간 피어오르는 피톤치드 편백 향이 긴장을 편안하게 풀어줍니다.",
          guidelines: [
            "제공된 전용 스파 소금 외에 색소가 포함된 개인 입욕제 사용은 금지됩니다."
          ]
        };
    }
  };

  return (
    <div id="experience" className="w-full select-none bg-[#F5F2EB]">
      
      {/* Section 1: Facilities & Amenities Header & Cards */}
      <section className="py-20 sm:py-28 border-b border-brand-warm/60 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center md:text-left mx-auto md:mx-0"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 text-brand-olive mb-3">
              <span className="text-[13px] sm:text-[14px] tracking-[0.16em] font-bold uppercase font-cormorant">
                AESTHETICS OF REST
              </span>
            </div>
            <h2 className="font-cormorant text-[26px] sm:text-[28px] font-normal text-brand-charcoal tracking-tight leading-[1.3]">
              즐거움이 더해지는 부대시설
            </h2>
            <p className="text-[13.5px] sm:text-[14px] text-neutral-600 font-light mt-3 leading-[1.8] font-pretendard max-w-2xl mx-auto md:mx-0">
              <span className="hidden sm:inline">서림재의 다채로운 부대시설에서 온전한 쉼을 누려보세요.</span>
              <span className="sm:hidden">다채로운 부대시설에서 온전한 쉼을 누려보세요.</span>
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <motion.div
                key={exp.id}
                id={`exp-card-${exp.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onClick={() => setSelectedExp(exp)}
                className="group flex flex-col bg-white/60 border border-brand-warm/80 rounded-2xl overflow-hidden hover:border-brand-olive/60 transition-all duration-300 shadow-xs cursor-pointer hover:-translate-y-1"
              >
                <div className="overflow-hidden relative aspect-4/3">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover animate-ambient-image"
                    style={{ animationDelay: `${idx * -3.5}s` }}
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {getIcon(exp.id)}
                    </div>
                    <h3 className="font-cormorant text-[18px] sm:text-[19px] font-bold text-brand-charcoal tracking-tight group-hover:text-brand-olive transition-colors">
                      {exp.title}
                    </h3>
                    <p className="font-pretendard text-[12.5px] text-neutral-600 font-light leading-[1.7] pt-1">
                      {exp.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-1.5 text-[12.5px] font-pretendard font-medium text-brand-olive group-hover:text-brand-charcoal transition-colors">
                    <span>이용 상세 보기</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 2: A Day at Seorimjae (Timeline Stay Journal with Noto Serif KR Numbers) */}
      <section className="py-20 sm:py-28 border-b border-brand-warm/60 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center md:text-left mx-auto md:mx-0"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 text-brand-olive mb-2">
              <span className="text-[13px] sm:text-[14px] font-bold tracking-[0.16em] uppercase font-cormorant">
                STAY JOURNAL
              </span>
            </div>
            <h3 className="font-cormorant text-[26px] sm:text-[28px] font-normal text-brand-charcoal">
              서림재에서 맞이하는<br className="sm:hidden" /> 오붓한 하루의 여정
            </h3>
            <p className="text-[13.5px] font-pretendard font-light text-neutral-600 mt-3 leading-[1.75] mx-auto md:mx-0">
              시간의 흐름에 맞춰 설계된 사적 휴식 시나리오로<br className="sm:hidden" /> 지친 일상을 부드럽게 비워보세요.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                time: "15:00",
                title: "체크인 & 웰컴 티타임",
                desc: "은은한 편백 향과 웰컴 잎차를 음미하며 가볍게 짐을 풀고 온전한 쉼을 시작합니다.",
                icon: <Coffee className="w-5 h-5 text-brand-olive stroke-[1.5]" />
              },
              {
                time: "17:00",
                title: "편백 히노끼 입욕",
                desc: "통유리창 너머 석양이 지는 솔숲을 마주하며 즐기는 따스한 온수 스파",
                icon: <Sparkles className="w-5 h-5 text-brand-olive stroke-[1.5]" />
              },
              {
                time: "19:00",
                title: "프라이빗 가든 다이닝",
                desc: "웨버 바베큐 그릴과 신선한 제철 식재료로 오붓하게 채우는 저녁 식사",
                icon: <Utensils className="w-5 h-5 text-brand-olive stroke-[1.5]" />
              },
              {
                time: "21:00",
                title: "별빛 야외 참나무 불멍",
                desc: "풀벌레 소리와 밤하늘 은하수 아래 장작 타오르는 소리에 빠져드는 낭만의 밤",
                icon: <Flame className="w-5 h-5 text-brand-olive stroke-[1.5]" />
              },
              {
                time: "08:30",
                title: "히노끼 웰컴 조식 트레이",
                desc: "유기농 수제 요거트와 갓 구운 빵, 드립 커피로 상쾌하게 깨어나는 아침",
                icon: <Sun className="w-5 h-5 text-brand-olive stroke-[1.5]" />
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-[#F9F7F2] border border-brand-warm/80 p-6 rounded-2xl space-y-3 flex flex-col justify-between shadow-xs hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-brand-warm/50 pb-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#F5F2EB] flex items-center justify-center shrink-0 border border-brand-warm/60">
                      {step.icon}
                    </div>
                    {/* Time formatted in Gowun Batang for digits automatically */}
                    <span className="text-[13px] font-semibold tracking-widest text-brand-gold block">
                      {step.time}
                    </span>
                  </div>
                  <h4 className="font-cormorant text-[16px] font-bold text-brand-charcoal leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[12.5px] font-pretendard font-light text-neutral-600 leading-[1.7]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: MORNING REFRESHMENT (Background: #F5F2EB) */}
      <section className="py-20 sm:py-28 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-6 sm:space-y-7">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="border-b border-brand-warm/60 pb-4 sm:pb-5 space-y-2.5 sm:space-y-3 text-center sm:text-left"
          >
            <div className="flex items-center justify-center sm:justify-start gap-2 text-brand-olive">
              <span className="text-[13px] sm:text-[14px] font-cormorant font-bold tracking-[0.16em] uppercase">MORNING REFRESHMENT</span>
            </div>
            <h3 className="font-cormorant text-[26px] sm:text-[26px] font-normal text-brand-charcoal">
              시그니처 웰컴 조식 트레이
            </h3>
            <p className="text-[12.5px] sm:text-[13.5px] font-pretendard font-light text-neutral-600 leading-[1.75] max-w-2xl mx-auto sm:mx-0">
              <span className="hidden sm:inline">
                매일 아침, 오대산 로컬 식재료와 수제 요거트, 갓 구운 빵으로 정성껏 차려지는 비대면 룸서비스 조식입니다.
              </span>
              <span className="sm:hidden whitespace-nowrap block">
                매일 아침 정성껏 차려지는 비대면 룸서비스 조식입니다.
              </span>
            </p>
          </motion.div>

          {/* Downward Expanding Accordion Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="border border-brand-warm bg-white/90 rounded-2xl overflow-hidden shadow-xs"
          >
            <button
              onClick={() => setIsMorningBasketOpen(!isMorningBasketOpen)}
              className="w-full flex items-center justify-between p-6 sm:p-8 text-left cursor-pointer bg-white hover:bg-[#F9F7F2] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-olive/10 text-brand-olive rounded-xl flex items-center justify-center shrink-0">
                  <Coffee className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-cormorant text-[15px] sm:text-[18px] font-semibold text-brand-charcoal">
                    조식 트레이 서비스 안내
                  </h4>
                  <p className="text-[11.5px] sm:text-[12.5px] font-pretendard text-neutral-500 font-light mt-0.5">
                    제공 시간: 매일 아침 08:30 - 09:00<br className="sm:hidden" /> (객실 입구 비대면 전달)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-brand-olive font-pretendard text-[13px] shrink-0 ml-4">
                <span className="hidden sm:inline font-medium">
                  {isMorningBasketOpen ? "상세내용 접기" : "상세내용 펼치기"}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isMorningBasketOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </button>

            {/* Downward Animated Content */}
            <AnimatePresence>
              {isMorningBasketOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden border-t border-brand-warm/60 bg-white/80"
                >
                  <div className="p-6 sm:p-8 space-y-6 text-[13.5px] font-pretendard font-light text-neutral-600 leading-[1.8]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      
                      {/* 01. 구성 품목 */}
                      <div className="space-y-2">
                        <span className="text-[12px] font-cormorant font-bold text-brand-gold uppercase tracking-wider block">
                          01. 구성 품목
                        </span>
                        <div className="group bg-[#F9F7F2] p-5 border border-brand-warm/70 space-y-2 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-olive/50 hover:bg-white cursor-pointer">
                          <h5 className="text-[15px] font-bold text-brand-charcoal group-hover:text-brand-olive transition-colors font-cormorant">
                            정갈한 로컬 오가닉 세트
                          </h5>
                          <ul className="text-[13px] text-neutral-600 space-y-1.5 list-disc pl-4 font-light pt-1 font-pretendard">
                            <li>유기농 로컬 수제 요거트 & 계절 생과일</li>
                            <li>갓 구운 무첨가 통밀 식빵 & 잼</li>
                            <li>따뜻한 수제 단호박 스프</li>
                          </ul>
                        </div>
                      </div>

                      {/* 02. 전달 및 제공 방식 */}
                      <div className="space-y-2">
                        <span className="text-[12px] font-cormorant font-bold text-brand-gold uppercase tracking-wider block">
                          02. 전달 및 제공 방식
                        </span>
                        <div className="group bg-[#F9F7F2] p-5 border border-brand-warm/70 space-y-2 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-olive/50 hover:bg-white cursor-pointer">
                          <h5 className="text-[15px] font-bold text-brand-charcoal group-hover:text-brand-olive transition-colors font-cormorant">
                            비대면 히노끼 찬합 전달
                          </h5>
                          <ul className="text-[13px] text-neutral-600 space-y-1.5 list-disc pl-4 font-light pt-1 font-pretendard">
                            <li>히노끼 원목 보온 찬합 세팅</li>
                            <li>오전 08:30 ~ 09:00 사이 비대면 전달</li>
                            <li>식사 후 찬합 문 밖 회수 시스템</li>
                          </ul>
                        </div>
                      </div>

                      {/* 03. 음료 선택 & 옵션 */}
                      <div className="space-y-2">
                        <span className="text-[12px] font-cormorant font-bold text-brand-gold uppercase tracking-wider block">
                          03. 음료 선택 & 옵션
                        </span>
                        <div className="group bg-[#F9F7F2] p-5 border border-brand-warm/70 space-y-2 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-olive/50 hover:bg-white cursor-pointer">
                          <h5 className="text-[15px] font-bold text-brand-charcoal group-hover:text-brand-olive transition-colors font-cormorant">
                            맞춤 웰컴 드링크
                          </h5>
                          <ul className="text-[13px] text-neutral-600 space-y-1.5 list-disc pl-4 font-light pt-1 font-pretendard">
                            <li>스페셜티 로스팅 드립 커피 선택 가능</li>
                            <li>평창 오가닉 100% 사과 착즙 주스 선택 가능</li>
                            <li>알레르기 식이 사전 문의 시 맞춤 대체</li>
                          </ul>
                        </div>
                      </div>

                    </div>

                    <p className="text-[12.5px] text-neutral-700 font-medium pt-2 border-t border-brand-warm/40">
                      * 알레르기나 특이 체질이 있으신 경우 체크인 시 사전에 말씀해 주시면 맞춤 대체 품목으로 정성껏 변경해 드립니다.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Modal View for Experience Items */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-charcoal/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-beige w-full max-w-xl rounded-2xl border border-brand-warm relative z-10 shadow-xl p-6 sm:p-8 text-left overflow-y-auto max-h-[85vh]"
            >
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-brand-charcoal p-1 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-brand-warm pb-4 mb-5">
                <h3 className="font-cormorant text-[20px] font-bold text-brand-charcoal">
                  {selectedExp.title}
                </h3>
                {selectedExp.tagline && (
                  <p className="font-pretendard text-[13.5px] text-brand-olive font-medium mt-1">
                    {selectedExp.tagline}
                  </p>
                )}
              </div>

              <div className="space-y-5 text-[13.5px] font-pretendard font-light text-neutral-600 leading-[1.75]">
                <div className="space-y-1">
                  <span className="text-[11px] font-cormorant font-semibold tracking-wider text-neutral-400 uppercase flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-olive" />
                    이용 / 제공 시간
                  </span>
                  <p className="text-brand-charcoal font-medium pl-4">
                    {getExperienceSpecs(selectedExp.id).time}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-cormorant font-semibold tracking-wider text-neutral-400 uppercase flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-brand-olive" />
                    기본 구비 / 제공 소품
                  </span>
                  <p className="text-brand-charcoal font-medium pl-4">
                    {getExperienceSpecs(selectedExp.id).items}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-cormorant font-semibold tracking-wider text-neutral-400 uppercase flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-brand-olive" />
                    추천 쉼의 팁
                  </span>
                  <p className="text-brand-olive font-medium pl-4">
                    {getExperienceSpecs(selectedExp.id).tip}
                  </p>
                </div>

                <div className="border-t border-brand-warm/60 pt-4 space-y-2">
                  <span className="text-[11.5px] font-bold tracking-wider text-neutral-600 uppercase flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-brand-olive" />
                    상세 이용 안내
                  </span>
                  <ul className="list-disc pl-5 space-y-1 text-[13px] text-neutral-700 font-medium">
                    {getExperienceSpecs(selectedExp.id).guidelines.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
