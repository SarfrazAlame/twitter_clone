import { User, Comment, Like, Post, Follows } from "@prisma/client";

export type CommentWithExtras = Comment & { user: User }
export type LikeWithExtra = Like & { user: User }

export type PostWithExtra = Post & {
    comments: CommentWithExtras[],
    likes: LikeWithExtra[],
    user: User
}

export type UserWithExtra = User & {
    posts:Post[],
    likes:LikeWithExtra[],
    followers:Follows[],
    following:Follows[]
}