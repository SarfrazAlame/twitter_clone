import { z } from "zod"
import prisma from "./prisma"
import { CreatePost } from "./schema"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/lib/auth"

type Post = z.infer<typeof CreatePost>

export const createPost = async (values: Post) => {

    const email = await getServerSession(authOptions)

    const validatedField = CreatePost.safeParse(values)

    if (!validatedField.success) {
        return {
            errors: validatedField.error.flatten().fieldErrors,
            message: "failed to post"
        }
    }

    const { imgUrl, title } = validatedField.data

    // create post logic
    try {
        await prisma.post.create({
            data: {
                imgUrl,
                title,
                User: {
                    connect: {
                        email: email
                    }
                }
            }
        })
    } catch (error) {

    }
}