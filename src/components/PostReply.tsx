"use client";
import { commentPost } from "@/lib/actions";
import Image from "next/image";
import React, { useState } from "react";

type UserProps =
  | {
      id: string;
      name: string | null | undefined;
      email: string | null | undefined;
      image: string | null | undefined;
      username: string | null | undefined;
    }
  | undefined;

const PostReply = ({ user, postId }: { user: UserProps; postId: string }) => {
  const [comment, setComment] = useState("");

  return (
    <div className="w-full md:w-2/3">
      <div className="flex w-full justify-between mx-7 gap-2">
        <div className="flex gap-5">
          <Image
            src={user?.image || ""}
            alt="image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <input
            onChange={(e) => setComment(e.target.value)}
            type="text"
            autoComplete="off"
            placeholder="Post your reply"
            className="outline-none text-xl"
          />
        </div>
        <button
          className={
            comment?.length > 0
              ? "bg-blue-600 px-5 text-white rounded-full"
              : ""
          }
          onClick={() => {
            setComment(""), commentPost(comment, postId);
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostReply;
