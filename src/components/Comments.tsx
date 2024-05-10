import { Bookmark } from "lucide-react";
import React from "react";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { GoShare } from "react-icons/go";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { PostWithExtra } from "@/lib/alltypes";
import PostUser from "./PostUser";
import UserImage from "./UserImage";

const Comments = ({ post }: { post: PostWithExtra }) => {
  return (
    <div className="flex w-full justify-between">
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
      <BiRepost className="cursor-pointer text-xl hover:text-green-500" />
      <CiHeart className="cursor-pointer text-xl hover:text-red-600" />
      <div className="flex gap-6">
        <Bookmark className="text-sm cursor-pointer hover:text-blue-500" />
        <GoShare className="cursor-pointer text-xl hover:text-blue-500" />
      </div>
    </div>
  );
};

export default Comments;
