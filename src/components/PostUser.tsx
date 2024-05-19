import { PostWithExtra } from "@/lib/alltypes";
import Image from "next/image";
import React from "react";
import UserImage from "./UserImage";
import Timestamp from "./Timestamp";

const PostUser = ({ post }: { post: PostWithExtra }) => {
  return (
    <>
      <div className="flex gap-3 cursor-pointer">
        <Image
          src={post.user.image}
          alt="image"
          height={40}
          width={40}
          className="rounded-full"
        />
        <div className="flex gap-2">
          <p className="text-md font-bold text-gray-800">{post.user.name}</p>
          <span>.</span>
          <Timestamp createAt={post.createdAt} className="" />
        </div>
      </div>
    </>
  );
};

export default PostUser;
