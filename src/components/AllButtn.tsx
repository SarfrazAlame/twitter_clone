import { PostWithExtra } from "@/lib/alltypes";
import React from "react";
import Comment from "./Comment";
import { BiRepost } from "react-icons/bi";
import LikeButton from "./LikeButton";
import { Bookmark } from "lucide-react";
import { GoShare } from "react-icons/go";

const AllButtn = ({ post }: { post: PostWithExtra }) => {
  return (
    <div className="flex w-full justify-around">
      <Comment post={post} />
      <BiRepost className="cursor-pointer text-xl hover:text-green-500" />
      <LikeButton post={post} />
      <div className="flex gap-6">
        <Bookmark className="text-sm cursor-pointer hover:text-blue-500" />
        <GoShare className="cursor-pointer text-xl hover:text-blue-500" />
      </div>
    </div>
  );
};

export default AllButtn;
