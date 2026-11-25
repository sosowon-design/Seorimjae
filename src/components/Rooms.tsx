/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  Bed,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Droplets,
  Coffee,
  Disc,
  Film,
  Wind,
  Utensils,
  CheckCircle2,
  ArrowRight,
  Building,
  TreePine,
} from "lucide-react";
import { ROOMS_DATA, IMAGES } from "../data";

interface RoomsProps {
  onSelectRoomForBooking: (roomId: string) => void;
  onNavigate?: (page: string) => void;
}

export default function Rooms({ onSelectRoomForBooking, onNavigate }: RoomsProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const currentRoom = ROOMS_DATA[0];

  // Preload all room images on mount for instantaneous, zero-delay switching
  useEffect(() => {
    currentRoom.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [currentRoom.images]);

  // Continuous smooth automatic slide transition every 4.0 seconds without stopping/resetting on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % currentRoom.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentRoom.images.length]);

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? currentRoom.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === currentRoom.images.length - 1 ? 0 : prev + 1));
  };

  const premiumAmenities = [
    {
      icon: <Droplets className="w-5 h-5 text-brand-olive stroke-[1.5]" />,
      titleDesktop: "이솝(Aesop) 바스 세트",
      titleMobile: "이솝 바스 세트",
      subDesktop: "비건 바스 & 바디 케어",
      subMobile: "비건 바스 & 바디 케어",
    },
    {
      icon: <Coffee className="w-5 h-5 text-brand-olive stroke-[1.5]" />,
      titleDesktop: "시그니처 야생 잎차",
      titleMobile: "시그니처 야생 잎차",
      subDesktop: "수공예 다기 세트 제공",
      subMobile: "수공예 다기 세트 제공",
    },
    {
      icon: <Utensils className="w-5 h-5 text-brand-olive stroke-[1.5]" />,
      titleDesktop: "발뮤다 토스터 & 드립",
      titleMobile: "발뮤다 토스터 & 드립",
      subDesktop: "스페셜티 핸드드립 원두",
      subMobile: "스페셜티 핸드드립 원두",
    },
    {
      icon: <Disc className="w-5 h-5 text-brand-olive stroke-[1.5]" />,
      titleDesktop: "LP 하이파이 오디오",
      titleMobile: "LP 하이파이 오디오",
      subDesktop: "클래식 LP 앰비언스",
      subMobile: "클래식 LP 앰비언스",
    },
    {
      icon: <Film className="w-5 h-5 text-brand-olive stroke-[1.5]" />,
      titleDesktop: "4K 빔 프로젝터",
      titleMobile: "4K 빔 프로젝터",
      subDesktop: "프라이빗 영화관 시스템",
      subMobile: "프라이빗 영화관 시스템",
    },
    {
      icon: <Wind className="w-5 h-5 text-brand-olive stroke-[1.5]" />,
      titleDesktop: "편백 피톤치드 아로마",
      titleMobile: "편백 피톤치드 아로마",
      subDesktop: "100% 천연 편백 룸 스프레이",
      subMobile: "100% 천연 편백 룸 스프레이",
    },
  ];

  return (
    <div id="rooms" className="w-full select-none bg-[#F5F2EB] min-h-screen">
      <section className="py-20 sm:py-28 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-2 text-brand-olive"
            >
              <span className="text-[13px] sm:text-[14px] tracking-[0.16em] font-bold font-cormorant uppercase">
                PRIVATE SANCTUARY STAY
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-cormorant text-[26px] sm:text-[28px] font-normal text-brand-charcoal tracking-tight"
            >
              단 한 팀만을 위한<br className="sm:hidden" /> 사적 공간, 서림재
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-[13.5px] sm:text-[14px] text-neutral-600 font-pretendard font-light leading-relaxed pt-1"
            >
              <span className="hidden sm:inline">
                오대산 솔숲의 고요함 속에서 24시간 미온수 풀과 히노끼 스파를 누리는 사적인 안식처입니다.
              </span>
              <span className="sm:hidden">
                오대산 솔숲 속에서 24시간 온수풀과<br />히노끼 스파를 편안하게 누리는 휴식처입니다.
              </span>
            </motion.p>
          </div>

          {/* MAIN ROOM CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-white border border-brand-warm p-6 sm:p-8 lg:p-10 shadow-xs rounded-2xl">
            
            {/* Left Column: Image Carousel View with Overlay Controls */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Main Image with Left / Right Slide Arrows & Smooth Crossfade */}
              <div
                className="relative aspect-16/10 overflow-hidden bg-neutral-100 border border-brand-warm/60 group rounded-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AnimatePresence initial={false}>
                  <motion.img
                    key={activeImageIndex}
                    src={currentRoom.images[activeImageIndex]}
                    alt={`서림재 공간 ${activeImageIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full h-full object-cover absolute inset-0 animate-ambient-image"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Left Slide Arrow - Smaller on mobile */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-10 sm:h-10 bg-brand-charcoal/70 hover:bg-brand-olive text-white rounded-full flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 cursor-pointer shadow-md"
                  aria-label="이전 사진 보기"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2]" />
                </button>

                {/* Right Slide Arrow - Smaller on mobile */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-10 sm:h-10 bg-brand-charcoal/70 hover:bg-brand-olive text-white rounded-full flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 cursor-pointer shadow-md"
                  aria-label="다음 사진 보기"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2]" />
                </button>

                {/* Natural Image Counter Badge & Speed Indicator - Hidden on mobile */}
                <div className="hidden sm:flex absolute bottom-4 right-4 bg-brand-charcoal/70 text-white text-[12px] font-light px-3 py-1.5 tracking-widest backdrop-blur-xs rounded-lg items-center gap-2 shadow-xs">
                  <span>0{activeImageIndex + 1}</span>
                  <span className="text-white/40">/</span>
                  <span className="text-white/70">0{currentRoom.images.length}</span>
                </div>

                {/* Animated Auto-Slide Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 overflow-hidden">
                  <motion.div
                    key={activeImageIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, ease: "linear" }}
                    className="h-full bg-brand-olive shadow-xs"
                  />
                </div>
              </div>

              {/* Image Thumbnails Strip */}
              <div className="pt-1">
                <div className="grid grid-cols-4 gap-2.5 max-w-sm">
                  {currentRoom.images.map((imgSrc, imgIdx) => (
                    <button
                      key={imgIdx}
                      onClick={() => setActiveImageIndex(imgIdx)}
                      className={`aspect-4/3 overflow-hidden border transition-all cursor-pointer relative rounded-md ${
                        imgIdx === activeImageIndex
                          ? "border-brand-olive ring-2 ring-brand-olive/70 opacity-100 scale-102"
                          : "border-brand-warm/80 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt={`서림재 썸네일 ${imgIdx + 1}`}
                        className="w-full h-full object-cover animate-ambient-image"
                        style={{ animationDelay: `${imgIdx * -2}s` }}
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Info & Specs (Positioned comfortably with top spacing) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-2 sm:pt-6 lg:pt-8">
              <div className="space-y-4">
                
                {/* Natural Motif Design Element without icon - Centered on mobile, Left on tablet & desktop */}
                <div className="flex items-center justify-center sm:justify-start gap-2 text-brand-olive pt-1">
                  <span className="text-[11px] font-cormorant tracking-[0.25em] uppercase font-semibold text-brand-olive">
                    SANCTUARY PRIVATE VILLA
                  </span>
                  <span className="hidden sm:block h-px flex-1 bg-gradient-to-r from-brand-olive/30 via-brand-warm/60 to-transparent" />
                </div>

                {/* Room Name with Icon - Centered on mobile, Left on tablet & desktop */}
                <div className="border-b border-brand-warm/60 pb-3 flex items-center justify-center sm:justify-start text-center sm:text-left">
                  <h3 className="font-cormorant text-[19px] xs:text-[21px] sm:text-[25px] font-normal text-brand-charcoal inline-flex items-center justify-center gap-2">
                    <Sparkles className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-brand-olive shrink-0" />
                    <span>프라이빗 독채 풀빌라, 서림재</span>
                  </h3>
                </div>

                {/* Key Specs - Fully visible without ellipsis (...), customer-friendly core wording */}
                <div className="bg-[#F9F7F2] p-4 border border-brand-warm/60 space-y-2.5 text-[12px] sm:text-[12.5px] font-pretendard rounded-xl">
                  <div className="flex items-start sm:items-center gap-2">
                    <span className="text-[11px] font-sans font-semibold text-neutral-400 uppercase w-16 sm:w-20 shrink-0 pt-0.5 sm:pt-0">건축 형태</span>
                    <div className="flex items-center gap-1.5 text-brand-charcoal font-medium">
                      <Building className="w-3.5 h-3.5 text-brand-olive shrink-0" />
                      <span>개별 정원 프라이빗 독채</span>
                    </div>
                  </div>

                  <div className="flex items-start sm:items-center gap-2">
                    <span className="text-[11px] font-sans font-semibold text-neutral-400 uppercase w-16 sm:w-20 shrink-0 pt-0.5 sm:pt-0">공간 구성</span>
                    <div className="flex items-start sm:items-center gap-1.5 text-brand-charcoal font-medium leading-snug">
                      <Sparkles className="w-3.5 h-3.5 text-brand-olive shrink-0 mt-0.5 sm:mt-0" />
                      <span className="break-keep">침실 · 온수풀 · 히노끼 다도룸 · 테라스</span>
                    </div>
                  </div>

                  <div className="flex items-start sm:items-center gap-2">
                    <span className="text-[11px] font-sans font-semibold text-neutral-400 uppercase w-16 sm:w-20 shrink-0 pt-0.5 sm:pt-0">침대 구성</span>
                    <div className="flex items-start sm:items-center gap-1.5 text-brand-charcoal font-medium leading-snug">
                      <Bed className="w-3.5 h-3.5 text-brand-olive shrink-0 mt-0.5 sm:mt-0" />
                      <span className="break-keep">{currentRoom.bedType}</span>
                    </div>
                  </div>

                  <div className="flex items-start sm:items-center gap-2">
                    <span className="text-[11px] font-sans font-semibold text-neutral-400 uppercase w-16 sm:w-20 shrink-0 pt-0.5 sm:pt-0">수용 인원</span>
                    <div className="flex items-center gap-1.5 text-brand-charcoal font-medium">
                      <Users className="w-3.5 h-3.5 text-brand-olive shrink-0" />
                      <span>기준 {currentRoom.capacityStandard}인 / 최대 {currentRoom.capacityMax}인</span>
                    </div>
                  </div>
                </div>

                {/* Key Features Bullet List - Focus purely on spatial characteristics without '단독' */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11.5px] font-sans font-bold text-brand-olive uppercase tracking-wider block">
                    공간 주요 특징
                  </span>
                  <ul className="grid grid-cols-1 gap-1.5 text-[12.5px] font-pretendard text-neutral-700 font-light">
                    {[
                      {
                        desktop: "사계절 24시간 온도를 유지하는 개별 온수풀",
                        mobile: "24시간 언제든 즐기는 사계절 개별 온수풀",
                      },
                      {
                        desktop: "야외 참나무 장작 파이어핏 & 프라이빗 불멍 테라스",
                        mobile: "참나무 장작 파이어핏 & 프라이빗 불멍 테라스",
                      },
                      {
                        desktop: "온전한 비움과 사적 휴식을 보장하는 가든 자쿠지",
                        mobile: "자연을 바라보며 즐기는 힐링 가든 자쿠지",
                      },
                    ].map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-olive shrink-0 mt-0.5" />
                        <span className="hidden sm:inline">{feat.desktop}</span>
                        <span className="sm:hidden">{feat.mobile}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Redesigned Button without '서림재' */}
              <div className="pt-2">
                <button
                  id="btn-book-now-seorimjae"
                  onClick={() => onSelectRoomForBooking(currentRoom.id)}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-charcoal hover:bg-brand-olive text-white font-pretendard font-medium text-[13.5px] tracking-wider transition-all duration-300 shadow-sm cursor-pointer rounded-xl group"
                >
                  <span>실시간 예약 바로가기</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>

          {/* In-Room Integrated Amenities Bar */}
          <div className="pt-8 border-t border-brand-warm/60 space-y-6">
            <div className="text-center">
              <h4 className="font-cormorant text-[22px] sm:text-[24px] font-medium text-brand-charcoal">
                서림재 웰컴 프리미엄 어메니티
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {premiumAmenities.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9F7F2] border border-brand-warm/80 py-5 px-3 sm:py-6 sm:px-4 text-center flex flex-col items-center justify-start hover:-translate-y-1 transition-transform duration-300 shadow-2xs rounded-xl min-h-[155px] sm:min-h-[160px]"
                >
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-brand-olive border border-brand-warm/60 shadow-2xs mb-3 shrink-0">
                    {item.icon}
                  </div>
                  <div className="w-full flex flex-col items-center">
                    <h5 className="font-cormorant text-[13.5px] sm:text-[14.5px] font-semibold text-brand-charcoal min-h-[38px] sm:min-h-[42px] flex items-center justify-center text-center leading-snug w-full">
                      <span className="hidden sm:inline">{item.titleDesktop}</span>
                      <span className="sm:hidden whitespace-nowrap">{item.titleMobile}</span>
                    </h5>
                    <p className="text-[11px] text-neutral-500 font-light font-pretendard pt-1 min-h-[28px] sm:min-h-[30px] flex items-center justify-center text-center leading-tight w-full">
                      <span className="hidden sm:inline">{item.subDesktop}</span>
                      <span className="sm:hidden">{item.subMobile}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Guest Stay Comfort & Detailed Guide (Core Titles & Uniform Equal-Height Layout) */}
      <section className="py-20 sm:py-24 bg-[#F9F7F2] border-b border-brand-warm/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto space-y-2"
          >
            <div className="flex items-center justify-center gap-2 text-brand-olive mb-2 sm:mb-2.5">
              <span className="text-[13px] sm:text-[14px] font-cormorant font-bold tracking-[0.16em] sm:tracking-[0.22em] uppercase">
                <span className="sm:hidden">SPECIAL SIGNATURE</span>
                <span className="hidden sm:inline tracking-[0.22em]">SIGNATURE EXPERIENCES</span>
              </span>
            </div>
            <h3 className="font-cormorant text-[26px] sm:text-[28px] font-normal text-brand-charcoal">
              서림재만의 특별한 시그니처<span className="hidden sm:inline"> 혜택</span>
            </h3>
            <p className="text-[13px] sm:text-[14px] font-pretendard font-light text-neutral-600 leading-relaxed pt-1">
              <span className="hidden sm:inline">
                머무시는 시간을 더욱 풍요롭게 채워드리기 위해 다채로운 휴식 요소를 담아낸 공간입니다.
              </span>
              <span className="sm:hidden">
                머무시는 시간을 더욱 풍요롭게 채워드리는 공간입니다.
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              {
                icon: <Droplets className="w-5 h-5 text-brand-olive stroke-[1.5]" />,
                title: "사계절 개별 온수풀",
                desc: "사계절 내내 31~33℃ 미온수가 자동 순환되어 별도의 대기시간 없이 언제든 즉시 풀에 입수하실 수 있습니다.",
                img: IMAGES.pool,
              },
              {
                icon: <Coffee className="w-5 h-5 text-brand-olive stroke-[1.5]" />,
                title: "편백 히노끼 & 다도",
                desc: "피톤치드 편백 향이 가득한 누마루에서 오대산 야생 잎차를 다기로 정성껏 우려내며 심신의 평온을 찾으세요.",
                img: IMAGES.seorimjaeTeaLounge,
              },
              {
                icon: <Film className="w-5 h-5 text-brand-olive stroke-[1.5]" />,
                title: "4K 시네마 & LP",
                desc: "100인치 대형 4K 프로젝터 OTT 시청과 감성적인 LP 턴테이블로 클래식한 아날로그 사운드를 즐기실 수 있습니다.",
                img: IMAGES.bedroom,
              },
              {
                icon: <Utensils className="w-5 h-5 text-brand-olive stroke-[1.5]" />,
                title: "웰컴 조식 트레이",
                desc: "매일 아침 08:30, 객실 입구 히노끼 찬합으로 수제 요거트, 갓 구운 빵과 드립 커피가 전달됩니다.",
                descTablet: (
                  <>
                    매일 아침 08:30, 객실 입구 히노끼 찬합으로 수제 <br className="hidden sm:inline lg:hidden" />
                    요거트, 갓 구운 빵과 드립 커피가 전달됩니다.
                  </>
                ),
                img: IMAGES.breakfast,
              }
            ].map((guide, gIdx) => (
              <motion.div
                key={gIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: gIdx * 0.1 }}
                className="bg-[#F5F2EB] border border-brand-warm/80 rounded-2xl overflow-hidden shadow-2xs hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full"
              >
                <div className="aspect-16/10 overflow-hidden relative border-b border-brand-warm/60 shrink-0">
                  <img
                    src={guide.img}
                    alt={guide.title}
                    className="w-full h-full object-cover animate-ambient-image"
                    style={{ animationDelay: `${gIdx * -4}s` }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-3.5 min-h-[175px]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-brand-warm/60 shrink-0 shadow-2xs">
                      {guide.icon}
                    </div>
                    <h4 className="font-cormorant text-[16px] sm:text-[17px] font-semibold text-brand-charcoal">
                      {guide.title}
                    </h4>
                  </div>
                  <p className="text-[13px] font-pretendard text-neutral-600 font-light leading-[1.8] flex-1">
                    <span className="sm:hidden lg:inline">{guide.desc}</span>
                    <span className="hidden sm:inline lg:hidden">{guide.descTablet || guide.desc}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
