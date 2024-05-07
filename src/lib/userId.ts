'use server'
import { getServerSession } from "next-auth"
import { authOptions } from "./auth"

export const getUserID = async () => {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    if (!userId) {
      throw new Error("please signin to use this feature")
    }
  
    return userId
  }