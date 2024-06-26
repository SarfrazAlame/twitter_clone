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
                user: true,
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

export async function fetchPostsByUserId() {
    noStore()

    const userId = await getUserID()

    try {
        const posts = await prisma.post.findMany({
            where: {
                userId
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
                user: true,
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
                comments: {
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
        const posts = await prisma.post.findFirst({
            where: {
                id
            },
            include: {
                comments: {
                    include: {
                        user: {
                            select: {
                                image: true,
                                name: true
                            }
                        }
                    },
                    orderBy: {
                        createdAt: "desc"
                    }
                },
                likes: {
                    include: {
                        user: true
                    },
                },
                user: true,
            },
            orderBy: {
                createdAt: "desc"
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
            message: "errror while fetching user"
        }
    }
}

export const fetchCommentWithPostId = async (id: string) => {
    noStore()

    try {
        const data = await prisma.post.findUnique({
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
        return data?.comments.map((comment) => { comment.user.name })
    } catch (error) {
        console.log(error)
        return {
            message: "Error failed to fetch comments"
        }
    }
}


export const fetchFollower = async (id: string) => {
    noStore()
    const userId = await getUserID()

    try {
        const follower = await prisma.follows.findUnique({
            where: {
                followerId_followingId: {
                    followerId: userId,
                    followingId: id
                }
            }
        })
        return follower
    } catch (error) {
        console.log(error)
        return {
            message: "failed to fetch follower"
        }
    }
}

export const fetchAllPost = async () => {
    noStore()
    const userId = await getUserID()
    try {
        const posts = await prisma.post.findMany({
            where: {
                userId
            },
            include: {
                comments: {
                    include: {
                        user: true
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
            message: "database error"
        }
    }
}


export const fetchPostsById = async (id: string) => {
    noStore()
    try {
        const posts = await prisma.post.findFirst({
            where: {
                id
            },
            include: {
                comments: {
                    include: {
                        user: true
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
        return {
            message: "database error"
        }
    }
}


export const fetchLike = async (id: string) => {
    const userId = await getUserID()
    noStore()
    try {
        const like = await prisma.like.findFirst({
            where: {
                userId: userId,
                postId: id
            }
        })
        return like
    } catch (error) {
        console.log(error)
        return {
            message: "database error"
        }
    }
}

export const fetchCommentByPostId = async (id: string) => {
    noStore()
    try {
        const comments = await prisma.comment.findMany({
            where: {
                postId: id
            },
            include: {
                Post: {
                    include: {
                        user: true
                    }
                },
                user: true
            }
        })
        return comments
    } catch (error) {
        return {
            message: "errror" + error
        }
    }
}

export const fetchFollowerbyUserId = async (id: string) => {
    try {
        const followers = await prisma.follows.findMany({
            where: {
                followingId: id
            },
            include: {
                follower: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        })
        return followers
    } catch (error) {
        return {
            message: "database error"
        }
    }
}

export const fetchFollowingUser = async (id: string) => {
    try {
        const followingUser = await prisma.follows.findMany({
            where: {
                followerId: id
            },
            include: {
                following: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        })
        return followingUser
    } catch (error) {
        return {
            message: "database error"
        }
    }
}

export const fetchAllFollower = async () => {
    noStore()
    try {
        const follows = await prisma.follows.findMany({})
        return follows
    } catch (error) {
        return {
            error
        }
    }
}


export const fetchUserByUserId = async (id: string) => {
    noStore()
    try {
        const user = await prisma.user.findUnique({
            where: {
                id
            },
            include: {
                following: {
                    select: {
                        followerId: true,
                        followingId: true
                    }
                },
            },

        })
        return user?.following
    } catch (error) {
        return {
            message: error
        }
    }
}