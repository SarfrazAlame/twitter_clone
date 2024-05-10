import { User, Comment, Like, Post } from "@prisma/client";

export type CommentWithExtras = Comment & { user: User }
export type LikeWithExtra = Like & { user: User }

export type PostWithExtra = Post & {
    comments: CommentWithExtras[],
    likes: LikeWithExtra[],
    user: User
}