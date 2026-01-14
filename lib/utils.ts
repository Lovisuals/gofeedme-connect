import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNaira(amount: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateProgress(current: number, total: number) {
  if (total === 0) return 0;
  return Math.min(100, Math.max(0, (current / total) * 100));
}

export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
