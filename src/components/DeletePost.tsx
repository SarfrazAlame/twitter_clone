"use client";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlinePushPin } from "react-icons/md";
import { deletePost } from "@/lib/actions";
import { PostWithExtra } from "@/lib/alltypes";

const DeletePost = ({ post }: { post: PostWithExtra }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <BsThreeDots />
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>
            <div className="gap-3">
              <div className="flex gap-3 mb-7  cursor-pointer text-red-700">
                <RiDeleteBin6Line />
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </div>
              <div className="flex gap-3 mb-4 cursor-pointer">
                <MdOutlinePushPin />
                <button>Pin to your profile</button>
              </div>
            </div>
          </DialogTitle>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeletePost;
