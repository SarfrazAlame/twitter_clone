"use client";
import React, { useState } from "react";
import { Post, User } from "@prisma/client";
import Image from "next/image";
import Comments from "./Comments";
import { PostWithExtra } from "@/lib/alltypes";
import AllButtn from "./AllButtn";

const AllPost = ({
  data,
  post,
}: {
  data: Post & { user: User };
  post: PostWithExtra;
}) => {
  const [state, setState] = useState("");
  return (
    <>
      <div className="border-b">
        <div className="flex justify-start mt-12 w-full mx-7 ">
          <div>
            <Image
              src={data.user.image!}
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="mx-2">
            <p className="font-bold mx-2 text-gray-800">{data.user.name}</p>
            <div className="my-2">{data.title}</div>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <AllButtn post={post}/>
        </div>
      </div>
    </>
  );
};

export default AllPost;
