import { type ClassValue, clsx } from "clsx"
import { getServerSession } from "next-auth"
import { twMerge } from "tailwind-merge"
import { authOptions } from "./auth"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

