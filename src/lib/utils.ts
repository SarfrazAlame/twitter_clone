import { type ClassValue, clsx } from "clsx"
import { getServerSession } from "next-auth"
import { twMerge } from "tailwind-merge"
import { authOptions } from "./auth"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getUserID = async () => {
  const session = await getServerSession(authOptions)
  const userId = session?.user.id
  if (userId) {
    throw new Error("please signin to use this feature")
  }

  return userId
}