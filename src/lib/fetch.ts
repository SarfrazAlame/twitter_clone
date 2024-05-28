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
                posts: {
                    include: {
                        user: true
                    }
                },
                likes: {
                    include: {
                        user: true
                    }
                },
                followers: true,
                following: true
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

export const fetchUser = async () => {
    const userId = await getUserID()
    try {
        const users = await prisma.user.findMany({})
        return users.filter((user) => user.id !== userId)
    } catch (error) {
        console.log(error)
        return {
            error: "failed to get user"
        }
    }
}

export const fetchPostById = async (id: string) => {
    noStore()
    try {
        const posts = await prisma.post.findUnique({
            where: {
                id
            },
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
            }
        })
        return posts
    } catch (error) {
        console.log(error)
        return {
            message: "failed to fetch post"
        }
    }
}


export const fetchUserById = async (id: string) => {
    noStore()
    try {
        const user = await prisma.user.findUnique({
            where: {
                id
            },
            include: {
                posts: {
                    include: {
                        user: true
                    }
                },
                likes: {
                    include: {
                        user: true
                    }
                },
                followers: true,
                following: true
            }
        })
        return user
    } catch (error) {
        console.log(error)
        return {
            message:"errror while fetching user"
        }
    }
}