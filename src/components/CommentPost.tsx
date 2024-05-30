import { Bookmark, Heart } from "lucide-react";
import React from "react";
import { BiRepost } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { GoShare } from "react-icons/go";

const CommentPost = () => {
  return (
    <div className="flex w-full justify-around">
      <FaRegComment className="text-gray-600 cursor-pointer hover:text-blue-500" />
      <BiRepost className="cursor-pointer text-xl hover:text-green-500" />
      <Heart className="cursor-pointer text-lg hover:text-green-500" />
      <Bookmark className="text-sm cursor-pointer hover:text-blue-500" />
      <GoShare className="cursor-pointer text-xl hover:text-blue-500" />
    </div>
  );
};

export default CommentPost;
