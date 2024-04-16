import type { User, Session } from "next-auth"
import type { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
    interface JWT {
        id: string,
    }
}

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            name: string | null | undefined
            email: string | null | undefined
            image: string | null | undefined
        }
    }
}