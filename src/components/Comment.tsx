
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

const Comment = ({ post }: { post: PostWithExtra }) => {
  const [comment, setComment] = useState("");
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <FaRegComment className="text-gray-600 cursor-pointer hover:text-blue-500" />
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
                  <input
                    className="outline-none mx-3"
                    placeholder="Post your reply"
                    name="comment"
                    value={comment}
                  />
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button className="bg-blue-500 px-4 py-2 rounded-full text-white">
                  Reply
                </button>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Comment;
