import { z } from "zod"
import { CreatePost } from "./schema"
import { getUserID } from "./utils"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

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
        await prisma?.post.create({
            data: {
                title,
                imgUrl,
                User: {
                    connect: {
                        id: userId
                    }
                }
            }
        })
    } catch (error) {
        return {
            message: "databse error: failed to create post"
        }
    }
    revalidatePath("/dashboard/home")
    redirect('/dashboard/home')
}