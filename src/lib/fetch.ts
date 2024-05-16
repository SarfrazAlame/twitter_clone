import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import prisma from "./prisma";
import { getUserID } from "./userId";

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

export const fetchUsers = async () => {
    const userId = await getUserID()
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                posts: true,
                
            }
        })
        return user
    } catch (error) {
        console.log(error)
        return {
            message: "failed to get User"
        }
    }
}