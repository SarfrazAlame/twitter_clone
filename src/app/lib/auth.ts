import { PrismaAdapter } from '@auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import prisma from './prisma'
import { Adapter } from 'next-auth/adapters'
import { User } from 'lucide-react'
import { any } from 'zod'

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
            allowDangerousEmailAccountLinking: true
        })
    ],
    pages: {
        signIn: "/login"
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    debug: true,
    callbacks: {
        async session({ session, token }) {
            console.log("session callback", { session, token })
            session.user.id = token.id
            return session
        },
        async jwt({ token, user }) {
            console.log("jwt callback", { token, user })
            token.id = user.id
            return token
        },
    },
}
