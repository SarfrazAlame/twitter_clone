import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { FaRegComment } from "react-icons/fa6";
import PostUser from "./PostUser";
import { PostWithExtra } from "@/lib/alltypes";
import UserImage from "./UserImage";
import Inputs from "./Inputs";

const Comment = ({ post }: { post: PostWithExtra }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="flex gap-2">
            <FaRegComment className="text-gray-600 cursor-pointer hover:text-blue-500" />
            {post.comments.length > 0 ? (
              <p className="-mt-1">{post.comments.length}</p>
            ) : null}
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="mx-2">
              <div className="border-l border-gray-400">
                <PostUser post={post} />

                <p className="mx-12">{post.title}</p>
                <p className="mx-10 mt-2">
                  Replying to{" "}
                  <span className="text-blue-400 cursor-pointer">
                    {post.user.name}
                  </span>
                </p>
                <div className="flex mt-10">
                  <UserImage />
                  <Inputs post={post} />
                </div>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Comment;
