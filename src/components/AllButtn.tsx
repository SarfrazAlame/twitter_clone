import { PostWithExtra } from "@/lib/alltypes";
import React from "react";
import { BiRepost } from "react-icons/bi";
import { Bookmark, Heart } from "lucide-react";
import { GoShare } from "react-icons/go";
import { FaRegComment } from "react-icons/fa6";
import { likesPost } from "@/lib/actions";
import Comments from "./Comments";

const AllButtn = ({ post }: { post: PostWithExtra }) => {
  const comment = post?.comments?.map((com) => com.body);
  return (
    <div className="mx-12 w-full">
      <Comments post={post} />
    </div>
  );
};

export default AllButtn;
