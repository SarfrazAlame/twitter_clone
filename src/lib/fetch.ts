import { unstable_noStore as noStore } from "next/cache";
import prisma from "./prisma";

export async function fetchPosts() {
    noStore()

    try {
        const posts = await prisma.post.findMany({
            include: {
                comments: {
                    include: {
                        user: true
                    },
                    orderBy: {
                        createdAt: "desc"
                    }
                },
                likes: {
                    include: {
                        user: true
                    }
                },
                user: true
            },
            orderBy: {
                createdAt: "desc"
            }
        })

        return posts
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch posts")
    }
}