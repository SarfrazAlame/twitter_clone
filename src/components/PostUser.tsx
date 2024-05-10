import { PostWithExtra } from "@/lib/alltypes";
import Image from "next/image";
import React from "react";
import UserImage from "./UserImage";

const PostUser = ({ post }: { post: PostWithExtra }) => {
  return (
    <>
      <div className="flex gap-3">
        <Image
          src={post.user.image}
          alt="image"
          height={40}
          width={40}
          className="rounded-full"
        />
        <p className="text-md font-bold text-gray-800">{post.user.name}</p>
      </div>
    </>
  );
};

export default PostUser;
