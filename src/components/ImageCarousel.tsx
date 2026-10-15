/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SCROLLING_IMAGES } from "../data";

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SCROLLING_IMAGES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + SCROLLING_IMAGES.length) % SCROLLING_IMAGES.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const imageCaptions = [
    { title: "스테이 온도 전경", desc: "고즈넉한 숲속에 둘러싸인 모던하고 따뜻한 독채 풀빌라" },
    { title: "개별 온수 수영장", desc: "사계절 32℃~34℃ 미온수가 상시 유지되는 우리만의 수영장" },
    { title: "프라이빗 침실", desc: "천연 친환경 친근한 가구와 최고급 오가닉 홈웨어 리넨 침구" },
    { title: "야외 파이어핏 테라스", desc: "밤하늘의 은하수를 보며 참나무 장작과 함께하는 불멍 시간" },
    { title: "다이닝 & 다도룸", desc: "정갈한 찻잔과 고급 홍차, 숲의 고요를 조망하는 통유리창" },
  ];

  return (
    <div id="image-carousel-container" className="relative w-full h-[60vh] sm:h-[70vh] bg-neutral-900 overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.5 } }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={SCROLLING_IMAGES[currentIndex]}
              alt={imageCaptions[currentIndex].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover brightness-[0.7] animate-ambient-image"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Elegant Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

      {/* Manual Controls */}
      <button
        id="carousel-btn-prev"
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all cursor-pointer z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        id="carousel-btn-next"
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all cursor-pointer z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Overlay Caption (Strictly font sizes between 13px and 34px) */}
      <div className="absolute bottom-10 left-6 sm:left-12 lg:left-20 text-white z-10 max-w-xl">
        <motion.p
          key={`cap-title-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-cormorant text-[24px] sm:text-[28px] font-medium tracking-tight mb-2"
        >
          {imageCaptions[currentIndex].title}
        </motion.p>
        <motion.p
          key={`cap-desc-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[14px] sm:text-[16px] text-neutral-200 leading-relaxed font-light font-pretendard"
        >
          {imageCaptions[currentIndex].desc}
        </motion.p>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 right-6 sm:right-12 lg:right-20 flex space-x-2 z-10">
        {SCROLLING_IMAGES.map((_, index) => (
          <button
            key={index}
            id={`carousel-dot-${index}`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-[44px] h-[13px] flex items-center justify-center cursor-pointer`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
