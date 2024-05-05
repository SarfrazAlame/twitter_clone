import { z } from "zod";

const PostSchema = z.object({
    id: z.string(),
    title: z.string(),
    imgUrl: z.string().url().optional()
})

export const CreatePost = PostSchema.omit({ id: true })