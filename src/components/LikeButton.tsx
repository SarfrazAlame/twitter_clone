"use client";

import { likesPost } from "@/lib/actions";
import { PostWithExtra } from "@/lib/alltypes";
import { fetchPosts } from "@/lib/fetch";
import { Heart } from "lucide-react";
import React from "react";
import { CiHeart } from "react-icons/ci";

const LikeButton = ({ post }: { post: PostWithExtra }) => {
  const likes = post.likes;
  return (
    <div>
      <div className="flex">
        <Heart
          onClick={() => likesPost(post.id)}
          className={
            likes.length > 0
              ? "cursor-pointer text-xl hover:text-red-600 fill-red-600 border-none"
              : "cursor-pointer text-xl hover:text-red-600"
          }
        />
        <p className="-mt-1">{likes ? likes.length : null}</p>
      </div>
    </div>
  );
};

export default LikeButton;
