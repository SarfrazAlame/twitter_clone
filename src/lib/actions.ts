'use server'
import { z } from "zod"
import { CreatePost } from "./schema"
import { getUserID } from "./userId"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import prisma from "./prisma"
import { connect } from "http2"

type Post = z.infer<typeof CreatePost>

export const createPost = async (values: Post) => {

    const userId = await getUserID()

    const validatedFields = CreatePost.safeParse(values)

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'failed to post'
        }
    }

    const { title, imgUrl } = validatedFields.data

    try {
        const posts = await prisma.post.create({
            data: {
                title,
                imgUrl,
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        })

    } catch (error) {
        console.log(error)
        return {
            message: "databse error: failed to create post"
        }
    }
    revalidatePath("/dashboard/home")
    redirect('/dashboard/home')
}


export const deletePost = async (id: string) => {
    const userId = await getUserID()
    try {
        await prisma.like.deleteMany({
            where: {
                id
            }
        })
        await prisma.post.delete({
            where: {
                id: id,
                userId: userId
            }
        })
        revalidatePath('/dashboard/home')
    } catch (error) {
        console.log(error)
        return {
            message: "failed to delete"
        }
    }
    revalidatePath('/dashboard/home')
    redirect('/dashboard/home')
}


export const likesPost = async (id: string) => {
    const userId = await getUserID()
    const like = await prisma.like.findUnique({
        where: {
            postId_userId: {
                userId,
                postId: id
            }
        }
    })

    if (like) {
        await prisma.like.delete({
            where: {
                postId_userId: {
                    postId: id,
                    userId: userId
                }
            }
        })
        revalidatePath("/dashboard/home")
        return { message: "Unliked Post" }
    }

    try {
        await prisma.like.create({
            data: {
                postId: id,
                userId: userId
            }
        })
        revalidatePath('/dashboard/home')
        return { message: "liked post" }
    } catch (error) {
        return { message: "Database Error: Failed to like post" }
    }
}


export const commentPost = async (comment: string, postId: string) => {
    const userId = await getUserID()

    try {
        await prisma.comment.create({
            data: {
                body: comment,
                postId,
                userId
            }
        })
        revalidatePath("/dashboard/home")
        return {
            message: "Comment Created"
        }
    } catch (error) {
        console.log(error)
        return {
            message: "failed to create post"
        }
    }
}