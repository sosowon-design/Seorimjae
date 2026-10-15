/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Room {
  id: string;
  name: string;
  nameEng: string;
  tagline: string;
  description: string;
  area: string; // e.g., "54㎡"
  capacityStandard: number;
  capacityMax: number;
  bedType: string; // e.g., "퀸사이즈 베드 1"
  checkIn: string; // e.g., "16:00"
  checkOut: string; // e.g., "11:00"
  priceWeekday: number; // e.g., 320000
  priceWeekend: number; // e.g., 380000
  images: string[];
  features: string[];
}

export interface Experience {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  duration?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  highlights?: { label: string; text: string }[];
  category: "reservation" | "utilization" | "facility" | "refund";
}

export interface BookingDetails {
  checkInDate: string; // YYYY-MM-DD
  checkOutDate: string; // YYYY-MM-DD
  selectedRoomId: string;
  guestsCount: number;
  addFirepit: boolean;
  addTeaSet: boolean;
  userName: string;
  userPhone: string;
  specialRequests: string;
}
