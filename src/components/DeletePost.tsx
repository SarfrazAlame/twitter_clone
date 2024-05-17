"use client";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlinePushPin } from "react-icons/md";
import { deletePost } from "@/lib/actions";
import { PostWithExtra } from "@/lib/alltypes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const DeletePost = ({ post }: { post: PostWithExtra }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <BsThreeDots />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <div className="gap-3">
              <div className="flex gap-3   cursor-pointer text-red-700">
                <RiDeleteBin6Line />
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </div>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <div className="flex gap-3 cursor-pointer">
              <MdOutlinePushPin />
              <button>Pin to your profile</button>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DeletePost;
