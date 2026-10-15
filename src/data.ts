/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Room, Experience, FaqItem } from "./types";

// Dynamic paths to generated pool villa assets
export const IMAGES = {
  exterior: "/src/assets/images/poolvilla_exterior_1783441698730.jpg",
  pool: "/src/assets/images/poolvilla_pool_1783441712578.jpg",
  bedroom: "/src/assets/images/poolvilla_bedroom_1783441742073.jpg",
  terrace: "/src/assets/images/poolvilla_firepit_empty_1783609417760.jpg",
  bbqTerrace: "/src/assets/images/bbq_evening_terrace_1787252026772.jpg",
  eveningTerrace: "/src/assets/images/bbq_evening_terrace_1787252026772.jpg",
  dining: "/src/assets/images/poolvilla_dining_1783441765027.jpg",
  teaDetail: "/src/assets/images/poolvilla_tea_detail_1783443892753.jpg",
  cozyLinens: "/src/assets/images/poolvilla_cozy_linens_1783443907020.jpg",
  breakfast: "/src/assets/images/poolvilla_breakfast_1783705791307.jpg",
  forest: "/src/assets/images/pine_forest_path_1783705944162.jpg",
  roomInterior: "/src/assets/images/seorimjae_room_interior_1783715563964.jpg",
  bedroomLounge: "/src/assets/images/seorimjae_bedroom_lounge_1783715573919.jpg",
  hinokiBedding: "/src/assets/images/seorimjae_hinoki_bedding_1783715584947.jpg",
  diningView: "/src/assets/images/seorimjae_dining_view_1783717019026.jpg",
  hanokNumaru: "/src/assets/images/hanok_numaru_stay_1785259063508.jpg",
  // Dedicated bespoke assets for Seorimjae
  seorimjaeDiningSpace: "/src/assets/images/seorimjae_dining_space_1785609789997.jpg",
  seorimjaeCozyBedding: "/src/assets/images/seorimjae_cozy_bedding_1785609804952.jpg",
  seorimjaeHinokiSpa: "/src/assets/images/seorimjae_hinoki_spa_1785609822645.jpg",
  seorimjaeTeaLounge: "/src/assets/images/seorimjae_serene_tea_ceremony_1787321032789.jpg",
  modernTeaSpace: "/src/assets/images/seorimjae_serene_tea_ceremony_1787321032789.jpg",
  // Dedicated unique assets for Villa On
  villaOnHinoki: "/src/assets/images/villa_on_hinoki_1785385906598.jpg",
  villaOnTeaRoom: "/src/assets/images/villa_on_tea_room_1785385923103.jpg",
  villaOnBedroom: "/src/assets/images/villa_on_bedroom_1785385934940.jpg",
  // Dedicated unique assets for Villa Do
  villaDoInfinity: "/src/assets/images/villa_do_infinity_1785385947960.jpg",
  villaDoFirepit: "/src/assets/images/villa_do_firepit_1785385965437.jpg",
  villaDoDuplex: "/src/assets/images/villa_do_duplex_1785385977617.jpg",
};

// 5 images that scroll/carousel through
export const SCROLLING_IMAGES = [
  IMAGES.exterior,
  IMAGES.pool,
  IMAGES.roomInterior,
  IMAGES.terrace,
  IMAGES.bedroomLounge,
];

export const ROOMS_DATA: Room[] = [
  {
    id: "seorimjae",
    name: "서림재 (Seorimjae)",
    nameEng: "PRIVATE SANCTUARY VILLA · HEALING SPA & POOL",
    tagline: "오대산 푸른 솔숲과 24시간 개별 온수풀, 히노끼 스파를 품은 단독 독채",
    description: "오대산 솔숲 깊은 곳에 자리한 서림재는 하루 단 한 팀만을 맞이하는 프라이빗 독채 스파 풀빌라입니다. 파노라마 통유리 솔숲 뷰, 24시간 따뜻한 사계절 개별 온수풀, 편백 히노끼 입욕 공간, 정갈한 야생 잎차 다도, 야외 참나무 불멍 테라스에서 온전한 휴식을 느껴보세요.",
    area: "침실 · 거실 · 개별 온수풀 · 히노끼 다도 룸 · 야외 테라스",
    capacityStandard: 2,
    capacityMax: 6,
    bedType: "최고급 친환경 거위털 침구 & 킹사이즈 매트리스",
    checkIn: "15:00",
    checkOut: "11:00",
    priceWeekday: 450000,
    priceWeekend: 550000,
    images: [
      IMAGES.roomInterior,
      IMAGES.pool,
      IMAGES.terrace,
      IMAGES.bedroom
    ],
    features: [
      "24시간 사계절 개별 온수 스파 풀 (미온수 무제한)",
      "천연 편백나무 히노끼 탕 & 야생 잎차 다도 누마루",
      "야외 참나무 장작 화로 & 불멍 파이어핏 테라스",
      "매일 아침 비대면 히노끼 찬합 유기농 조식 제공"
    ],
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "exp-tea",
    title: "차분한 다도",
    tagline: "",
    description: "편백 누마루에서 오대산 야생 잎차의 그윽한 향과 온기를 직접 우려내며 맑은 사색과 여유를 즐기실 수 있습니다.",
    image: IMAGES.seorimjaeTeaLounge,
  },
  {
    id: "exp-bbq",
    title: "프라이빗 바베큐 파티",
    tagline: "",
    description: "솔숲의 상쾌한 저녁 바람과 함께 단독 야외 테라스에서 즐기는 최고급 웨버 그릴 프라이빗 바베큐 디너입니다.",
    image: IMAGES.eveningTerrace,
  },
  {
    id: "exp-breakfast",
    title: "정갈한 아침 조식",
    tagline: "",
    description: "유기농 수제 요거트, 따뜻한 호박 스프, 갓 구운 통밀 빵과 스페셜티 드립 커피를 객실 입구로 정성스레 전달합니다.",
    image: IMAGES.breakfast,
  },
  {
    id: "exp-forest",
    title: "솔숲 피톤치드 산책",
    tagline: "",
    description: "서림재 투숙객 전용 프라이빗 숲길을 따라 맑은 공기와 천연 피톤치드를 깊이 호흡하며 호젓하게 거닐 수 있습니다.",
    image: IMAGES.forest,
  },
  {
    id: "exp-fire",
    title: "불멍과 야외 파이어핏",
    tagline: "",
    description: "야외 단독 테라스에서 밤하늘 은하수 아래 타닥타닥 타오르는 참나무 장작불을 바라보며 따스한 온기를 나눕니다.",
    image: IMAGES.terrace,
  },
  {
    id: "exp-spa",
    title: "편백 히노끼 입욕",
    tagline: "",
    description: "천연 편백나무의 짙은 피톤치드 향과 미네랄 입욕 온수로 하루의 묵은 피로를 부드럽게 녹여내는 힐링 스파입니다.",
    image: IMAGES.seorimjaeHinokiSpa,
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "예약은 어떻게 진행되나요?",
    answer: "서림재는 투명하고 간편한 예약을 위해 '네이버 공식 예약 시스템'을 운영합니다.",
    highlights: [
      { label: "실시간 잔여 확인", text: "상단 '실시간 예약' 클릭 시 날짜별 실시간 예약 현황을 바로 확인하실 수 있습니다." },
      { label: "간편 결제 지원", text: "네이버페이 및 신용카드 간편 결제를 지원하며 결제 즉시 예약이 안전하게 확정됩니다." },
    ],
    category: "reservation",
  },
  {
    id: "faq-2",
    question: "온수 수영장 이용 시간과 수온 조절은 어떻게 되나요?",
    answer: "객실 내 개별 온수풀은 입실(15:00)부터 퇴실(11:00)까지 24시간 언제든 무료로 이용하실 수 있습니다.",
    highlights: [
      { label: "24시간 자동 온수 케어", text: "사계절 32℃~34℃ 아늑한 미온수가 24시간 자동 순환 유지되어 별도의 대기 시간 없이 즉시 입수 가능합니다." },
      { label: "고온 옵션 가능", text: "더 따뜻한 온도를 원하실 경우 사전 예약 시 36℃ 고온 유지 옵션을 선택하실 수 있습니다." },
    ],
    category: "facility",
  },
  {
    id: "faq-3",
    question: "예약하기 전 반드시 확인해야 하는 이용 수칙이 있나요?",
    answer: "모든 투숙객의 쾌적하고 안전한 휴식을 위해 아래 수칙을 준수해 주시기 바랍니다.",
    highlights: [
      { label: "실내 조리 제한", text: "객실 내 육류/생선 등 냄새가 남는 요리는 금지되며, 야외 지정 바베큐 테라스를 이용해 주세요." },
      { label: "온수풀 안전 동행", text: "영유아 및 어린이는 안전을 위해 수영 시 반드시 성인 보호자가 상시 동행해야 합니다." },
      { label: "전 구역 금연", text: "청정한 숲 환경과 쾌적한 룸 컨디션을 위해 실내외 전 구역 금연 구역으로 운영됩니다." },
    ],
    category: "utilization",
  },
  {
    id: "faq-4",
    question: "취소 및 환불 기준은 네이버 예약 규정을 따르나요?",
    answer: "네, 네이버 공식 예약 시스템의 표준 취소/환불 수수료 규정이 투명하게 적용됩니다.",
    highlights: [
      { label: "투명한 환불 기준", text: "이용일 기준 취소 시점에 따라 네이버 예약 공식 규정에 맞춰 위약금 및 환불금이 자동 정산됩니다." },
      { label: "마이페이지 간편 관리", text: "예약 일정 변경이나 취소는 네이버 예약 'MY 페이지'에서 직접 편리하게 처리하실 수 있습니다." },
    ],
    category: "refund",
  },
];

export const STAY_GUIDE_DATA = {
  welcomeMessage: "서림재는 복잡하고 소란스러운 일상에서 한 걸음 물러나, 깊은 숲속 독채 풀빌라 안에서 오롯이 우리의 온도를 찾고 마주하는 가치 있는 쉼을 제안합니다.",
  address: "강원도 평창군 깊은숲길 108",
  phone: "010-8765-4321",
  email: "seorimjae@gmail.com",
  bankAccount: "네이버 페이 실시간 예약 / 간편 카드 결제 지원",
};
