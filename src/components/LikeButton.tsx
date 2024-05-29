"use client";

import { likesPost } from "@/lib/actions";
import { PostWithExtra } from "@/lib/alltypes";
import { Like } from "@prisma/client";
import { Heart } from "lucide-react";
import React from "react";

type Props =
  | {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      postId: string;
      userId: string;
    }
  | {
      message: string;
    }
  | null;

const LikeButton = ({ post, like }: { post: PostWithExtra; like: Props }) => {
  const likes = post.likes;
  return (
    <div>
      <div className="flex">
        <Heart
          onClick={() => likesPost(post.id)}
          className={
            like && likes?.length > 0
              ? "cursor-pointer text-xl text-red-600  fill-red-600 border-none"
              : "cursor-pointer text-xl hover:text-red-600"
          }
        />
        {likes?.length > 0 ? (
          <p className="-mt-1">{likes ? likes.length : null}</p>
        ) : null}
      </div>
    </div>
  );
};

export default LikeButton;
