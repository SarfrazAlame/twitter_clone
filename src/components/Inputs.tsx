"use client";
import { commentPost } from "@/lib/actions";
import { PostWithExtra } from "@/lib/alltypes";
import React, { useState } from "react";
import { toast } from "sonner";

const Inputs = ({ post }: { post: PostWithExtra }) => {
  const [comment, setComment] = useState("");
  return (
    <div className="mt-2 w-full">
      <input
        className="outline-none mx-3"
        placeholder="Post your reply"
        name="comment"
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="w-full flex justify-end">
        <button
          className="bg-blue-500 px-4 py-2 rounded-full text-white"
          onClick={() => {
            commentPost(comment, post.id);
            toast.success("Comment Sent");
          }}
        >
          Reply
        </button>
      </div>
    </div>
  );
};

export default Inputs;
