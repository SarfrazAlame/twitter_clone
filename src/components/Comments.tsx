import { Bookmark } from "lucide-react";
import React from "react";
import { BiRepost } from "react-icons/bi";
import { GoShare } from "react-icons/go";
import { PostWithExtra } from "@/lib/alltypes";
import LikeButton from "./LikeButton";
import Comment from "./Comment";
import { fetchLike } from "@/lib/fetch";

const Comments = async ({ post }: { post: PostWithExtra }) => {
  const like = await fetchLike(post.id);

  return (
    <div className="flex w-full justify-between">
      <Comment post={post} />
      <BiRepost className="cursor-pointer text-xl hover:text-green-500" />
      <LikeButton post={post} like={like} />
      <div className="flex gap-6">
        <Bookmark className="text-sm cursor-pointer hover:text-blue-500" />
        <GoShare className="cursor-pointer text-xl hover:text-blue-500" />
      </div>
    </div>
  );
};  

export default Comments;
