/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, ArrowRight, Bed, Coffee, TreePine, Droplets, HeartHandshake, CheckCircle2, Lock, Wind, Leaf, Shield, Compass, Star, Utensils, Flame } from "lucide-react";
import { IMAGES } from "../data";
import valSilenceImg from "../assets/images/seorimjae_val_silence_1785611363645.jpg";
import valNatureImg from "../assets/images/seorimjae_val_nature_1785611381226.jpg";
import valRestImg from "../assets/images/seorimjae_val_rest_1785611398939.jpg";

interface StoryProps {
  onNavigate?: (page: string) => void;
}

export default function Story({ onNavigate }: StoryProps) {
  return (
    <div id="story-page" className="w-full select-none bg-[#F5F2EB]">
      
      {/* Section 1: Sanctuary Story Editorial - Asymmetric 2-Column Minimalist Layout (Unified Font Sizes with Section 2) */}
      <section className="py-20 sm:py-28 border-b border-brand-warm/60 bg-[#F5F2EB] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Eyebrow, Main Title, Story Narrative, Footnote & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 space-y-4 text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 text-brand-olive mb-2.5 sm:mb-3">
                <span className="text-[13px] sm:text-[14px] font-cormorant font-bold tracking-[0.16em] uppercase">
                  SANCTUARY RETREAT
                </span>
              </div>

              <h3 className="font-cormorant text-[26px] sm:text-[28px] font-normal text-brand-charcoal leading-[1.35] break-keep whitespace-normal text-center lg:text-left">
                숲속 프라이빗 <br className="sm:hidden" />독채 풀빌라, 서림재
              </h3>

              <div className="space-y-3 pt-1 text-[13.5px] sm:text-[14px] text-neutral-600 font-pretendard font-light leading-[1.85] break-keep text-left">
                <p>
                  서림재는 다른 사람들의 시선이나 방해 없이, 오직 우리만을 위해 설계된 오대산 솔숲 속 단독 독채 풀빌라입니다.
                </p>
                <p>
                  따뜻한 편백 히노끼 입욕과 향긋한 잎차 다도 공간, 밤하늘 별빛 아래 타오르는 참나무 불멍까지 머무는 모든 순간이 특별한 쉼이 됩니다.
                </p>
                <p>
                  복잡했던 일상의 속도를 늦추고, 사랑하는 사람들과 함께 자연이 전하는 고요와 따스한 온기를 마음껏 누려보세요.
                </p>
              </div>

              {/* Mobile-Only Architecture Image - Placed directly above the card boxes */}
              <div className="lg:hidden my-3 sm:my-4 rounded-2xl overflow-hidden shadow-md border border-brand-warm/80 bg-neutral-100">
                <motion.img
                  src={IMAGES.exterior}
                  alt="서림재 솔숲 독채 풀빌라 전경"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-[240px] sm:h-[320px] object-cover"
                />
              </div>

              {/* Core Facility Highlights (Respective Icons, Left-aligned) */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                {[
                  {
                    title: "편백 히노끼 입욕",
                    icon: <Droplets className="w-3.5 h-3.5 text-brand-olive shrink-0 stroke-[1.6]" />,
                  },
                  {
                    title: "향긋한 잎차 다도 공간",
                    icon: <Leaf className="w-3.5 h-3.5 text-brand-olive shrink-0 stroke-[1.6]" />,
                  },
                  {
                    title: "웨버 그릴 야외 바베큐",
                    icon: <Utensils className="w-3.5 h-3.5 text-brand-olive shrink-0 stroke-[1.6]" />,
                  },
                  {
                    title: "참나무 장작 감성 불멍",
                    icon: <Flame className="w-3.5 h-3.5 text-brand-olive shrink-0 stroke-[1.6]" />,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FAF8F3]/90 border border-brand-warm/70 px-3.5 py-2.5 rounded-lg shadow-2xs flex items-center justify-start gap-2.5"
                  >
                    {item.icon}
                    <span className="font-pretendard text-[12.5px] sm:text-[13.5px] font-normal text-neutral-700 tracking-tight whitespace-nowrap">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Architectural Photography (Pristine & Grand, desktop only) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden lg:block lg:col-span-7"
            >
              {/* Main Base Architecture Image (Slow breathing motion without hover) */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-brand-warm/80 bg-neutral-100">
                <motion.img
                  src={IMAGES.exterior}
                  alt="서림재 솔숲 독채 풀빌라 전경"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-[300px] sm:h-[380px] lg:h-[410px] object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 2: Essential Values ("특별한 쉼") with Hero Section Images */}
      <section className="py-20 sm:py-28 border-b border-brand-warm/60 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto space-y-2"
          >
            <div className="flex items-center justify-center gap-2 text-brand-olive mb-1">
              <span className="text-[13px] sm:text-[14px] font-cormorant font-bold tracking-[0.16em] uppercase">
                REASONS TO STAY
              </span>
            </div>
            <h3 className="font-cormorant text-[26px] sm:text-[28px] font-normal text-brand-charcoal">
              서림재에서 경험하는<br className="sm:hidden" /> 특별한 쉼
            </h3>
            <p className="text-[13.5px] text-neutral-600 font-pretendard font-light">
              머무시는 분의 온전한 회복과 낭만을 위해<br className="sm:hidden" /> 준비된 서림재의 핵심 가치입니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                mainTitle: "온전한 사적 휴식의 단독 공간",
                desc: "외부 시선이나 소음 없이, 울창한 오대산 숲속에서 사랑하는 이들과 함께 오롯이 우리만의 시간에 몰입할 수 있습니다.",
                highlight: "단독 독채 & 프라이빗 가든",
                img: IMAGES.roomInterior,
              },
              {
                mainTitle: "24시간 식지 않는 따스한 온수풀",
                desc: "시간 제약 없이 원할 때 언제든 뛰어들 수 있는 개별 온수풀에서 통유리창 너머 숲을 바라보며 따뜻한 힐링을 누려보세요.",
                highlight: "무제한 사계절 온수 스파",
                img: IMAGES.pool,
              },
              {
                mainTitle: "자연과 함께 숨 쉬는 편백의 향기",
                desc: "천연 편백나무 대형 히노끼 탕과 정갈한 야외 참나무 불멍 테라스에서 향긋한 차와 온기로 하루의 피로를 녹여보세요.",
                highlight: "편백 히노끼 & 야외 파이어핏",
                img: IMAGES.terrace,
              },
            ].map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group bg-[#F5F2EB] border border-brand-warm rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-brand-olive/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="aspect-16/10 overflow-hidden relative border-b border-brand-warm/60">
                    <img
                      src={val.img}
                      alt={val.mainTitle}
                      className="w-full h-full object-cover animate-ambient-image"
                      style={{ animationDelay: `${idx * -3}s` }}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Generous padding between image and text */}
                  <div className="p-6 sm:p-7 pt-7 sm:pt-8 space-y-3.5">
                    <h4 className="font-cormorant text-[18px] sm:text-[19px] font-semibold text-brand-charcoal leading-snug">
                      {val.mainTitle}
                    </h4>

                    <p className="text-[13px] text-neutral-600 font-pretendard font-light leading-[1.8] pt-1">
                      {val.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
                  <div className="bg-[#F9F7F2] border border-brand-warm/80 rounded-xl px-3.5 py-2.5 flex items-center justify-between">
                    <span className="text-[11.5px] font-pretendard font-medium text-brand-charcoal">
                      ✦ {val.highlight}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-brand-olive shrink-0" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Genuine Host Sanctuary Commitments (서림재의 약속) - Refined Natural Aesthetic */}
      <section className="py-20 sm:py-28 border-b border-[#E8E2D5] bg-[#F6F2EA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto space-y-3"
          >
            <div className="flex items-center justify-center gap-2 text-brand-olive mb-1">
              <span className="text-[13px] sm:text-[14px] font-cormorant font-bold tracking-[0.16em] uppercase">
                HOST COMMITMENTS
              </span>
            </div>
            <h3 className="font-cormorant text-[26px] sm:text-[28px] font-normal text-brand-charcoal">
              머무시는 동안 온전히<br className="sm:hidden" /> 누리는 서림재의 약속
            </h3>
            
            <p className="text-[13.5px] text-neutral-600 font-pretendard font-light leading-relaxed break-keep">
              서림재는 고객의 진정한 쉼을 위해 공간의 청결, 위생, 프라이버시에 대해 엄격한 기준을 지킵니다.
            </p>
          </motion.div>

          {/* 4-Pillar Distinct Sanctuary Guarantees - Elevated Natural Paper-White Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2 items-stretch">
            {[
              {
                icon: <Lock className="w-4 h-4 text-brand-olive stroke-[1.8]" />,
                title: "비대면 프라이버시",
                desc: "체크인부터 퇴실까지 외부인의 대면이나 간섭 없이 스마트 도어락과 단독 동선으로 완벽한 사적 휴식을 보장합니다.",
                commitment: "단독 사적 동선 보증",
              },
              {
                icon: <Wind className="w-4 h-4 text-brand-olive stroke-[1.8]" />,
                title: "무결점 안심 린넨",
                desc: "매 체크인 전 객실 전체 피톤치드 살균 소독을 진행하며, 최고급 침구와 타월은 1회 사용 후 전량 수거 세탁합니다.",
                commitment: "1회 사용 즉시 전량 세탁",
              },
              {
                icon: <Droplets className="w-4 h-4 text-brand-olive stroke-[1.8]" />,
                title: "24h 순환 청정수질",
                desc: "화학 약품 냄새 없이 첨단 순환 여과 정수 시스템을 통해 사계절 맑고 쾌적한 32~34℃ 미온수를 상시 유지합니다.",
                commitment: "약품 냄새 없는 천연 정화",
              },
              {
                icon: <Leaf className="w-4 h-4 text-brand-olive stroke-[1.8]" />,
                title: "비건 친환경 케어",
                desc: "인공 화학 유해 성분을 배제한 프리미엄 비건 헤어·바디 케어와 생분해 친환경 어메니티를 정갈하게 제공합니다.",
                commitment: "프리미엄 비건 라인 제공",
              },
            ].map((commit, cIdx) => (
              <motion.div
                key={cIdx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: cIdx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-[#E6DFCF] rounded-2xl p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full space-y-6"
              >
                <div className="space-y-4">
                  {/* Clean Icon Badge + Title Header */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#F6F2EA] border border-[#E6DFCF] flex items-center justify-center shrink-0 shadow-2xs">
                      {commit.icon}
                    </div>
                    <h4 className="font-cormorant text-[17.5px] sm:text-[18px] font-semibold text-brand-charcoal leading-snug break-keep">
                      {commit.title}
                    </h4>
                  </div>

                  {/* Equal-height Description */}
                  <p className="text-[13px] font-pretendard text-neutral-600 font-light leading-[1.85] min-h-[64px] break-keep">
                    {commit.desc}
                  </p>
                </div>

                {/* Bottom Commitment Tag */}
                <div className="pt-3.5 border-t border-[#EFE9DF]">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#EAE3D6] w-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-olive shrink-0" />
                    <span className="text-[11.5px] font-pretendard font-medium text-brand-charcoal break-keep">
                      {commit.commitment}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 4: Experience Teaser Cards */}
      <section className="py-20 sm:py-28 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-xl mx-auto space-y-2"
          >
            <div className="flex items-center justify-center gap-2 text-brand-olive mb-1">
              <span className="text-[13px] sm:text-[14px] font-cormorant font-bold tracking-[0.16em] uppercase">
                EXPERIENCE SEORIMJAE
              </span>
            </div>
            <h3 className="font-cormorant text-[26px] sm:text-[28px] font-normal text-brand-charcoal">
              머무름을 완성하는<br className="sm:hidden" /> 서림재의 공간
            </h3>
            <p className="text-[13.5px] text-neutral-600 font-pretendard font-light">
              사계절 온수풀과 정갈한 편의시설에서 완성되는<br className="sm:hidden" /> 프리미엄 프라이빗 스테이
            </p>
          </motion.div>

          {/* Horizontal Layout Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
            
            {/* Horizontal Card 1: Villa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              onClick={() => onNavigate?.("rooms")}
              className="group bg-[#F5F2EB] border border-brand-warm overflow-hidden flex flex-col sm:flex-row shadow-xs hover:border-brand-olive/60 transition-all duration-300 rounded-2xl cursor-pointer hover:-translate-y-1"
            >
              <div className="sm:w-1/2 aspect-16/10 sm:aspect-auto overflow-hidden relative shrink-0">
                <img
                  src={IMAGES.roomInterior}
                  alt="프라이빗 독채 풀빌라"
                  className="w-full h-full object-cover animate-ambient-image"
                  style={{ animationDelay: "-2s" }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-brand-olive">
                    <span className="text-[12px] sm:text-[13px] font-cormorant font-bold tracking-[0.16em] uppercase">PRIVATE VILLA</span>
                  </div>
                  <h4 className="font-cormorant text-[19px] sm:text-[20px] font-medium text-brand-charcoal">
                    프라이빗 독채 풀빌라
                  </h4>
                  <p className="text-[13px] text-neutral-600 font-light font-pretendard leading-[1.75]">
                    24시간 개별 온수풀, 편백 히노끼 탕, 다도 누마루를 온전히 단독으로 누리는 사적 안식처입니다.
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 px-4.5 py-2 bg-brand-charcoal group-hover:bg-brand-olive text-white font-pretendard font-medium text-[12.5px] rounded-xl shadow-xs transition-colors">
                    <span>객실 살펴보기</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Horizontal Card 2: Facilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onClick={() => onNavigate?.("experience")}
              className="group bg-[#F5F2EB] border border-brand-warm overflow-hidden flex flex-col sm:flex-row shadow-xs hover:border-brand-olive/60 transition-all duration-300 rounded-2xl cursor-pointer hover:-translate-y-1"
            >
              <div className="sm:w-1/2 aspect-16/10 sm:aspect-auto overflow-hidden relative shrink-0">
                <img
                  src={IMAGES.breakfast}
                  alt="휴식의 깊이를 더하는 부대시설"
                  className="w-full h-full object-cover animate-ambient-image"
                  style={{ animationDelay: "-5s" }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-brand-olive">
                    <span className="text-[12px] sm:text-[13px] font-cormorant font-bold tracking-[0.16em] uppercase">SPECIAL FACILITIES</span>
                  </div>
                  <h4 className="font-cormorant text-[19px] sm:text-[20px] font-medium text-brand-charcoal">
                    휴식의 깊이를 더하는 부대시설
                  </h4>
                  <p className="text-[13px] text-neutral-600 font-light font-pretendard leading-[1.75]">
                    매일 아침 비대면 히노끼 조식, 참나무 불멍 파이어핏, 정원 바베큐 등 세심한 쉼의 디테일입니다.
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 px-4.5 py-2 bg-brand-charcoal group-hover:bg-brand-olive text-white font-pretendard font-medium text-[12.5px] rounded-xl shadow-xs transition-colors">
                    <span>부대시설 살펴보기</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}

