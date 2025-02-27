import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "/perkshub/";

export { prefix };
