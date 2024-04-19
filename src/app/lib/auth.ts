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
            if (token) {
                session.user.id = token.id
                session.user.email = token.email,
                session.user.name = token.name
                session.user.image = token.picture
            }
            return session
        },
        async jwt({ token, user }) {
            const prismaUser = await prisma.user.findFirst({
                where: {
                    email: token.email
                }
            })
            if (!prismaUser) {
                token.id = user.id
                return token
            }
            if (!prismaUser.username) {
                await prisma.user.update({
                    where: {
                        id: prismaUser.id
                    },
                    data: {
                        username: prismaUser.name?.split(" ").join("").toLowerCase()
                    }
                })
            }
            return {
                id: prismaUser.id,
                name:prismaUser.name,
                email:prismaUser.email,
                picture:prismaUser.image
            }
        },
    },
}
