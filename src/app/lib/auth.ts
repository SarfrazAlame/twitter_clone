import { PrismaAdapter } from '@auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import prisma from './prisma'
import { Adapter } from 'next-auth/adapters'

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
        session: ({ token, session }) => {
            if (token) {
                session.user.id = token.id
                session.user.username = token.username
                session.user.email = token.email
                session.user.name = token.name
                session.user.image = token.image as string
            }
            return session
        },
        jwt: async ({ token, user }) => {
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
                        username: prismaUser.name?.split(" ").join("")
                    }
                })
            }

            return {
                id: prismaUser?.id,
                name: prismaUser.name,
                username: prismaUser.name,
                email: prismaUser.email,
                image: prismaUser.image
            }
        }
    },
}
