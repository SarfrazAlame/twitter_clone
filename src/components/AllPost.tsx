"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Post } from "@prisma/client";
import Posts from "./Post";
import Image from "next/image";
import MyImage from "./MyImage";
import { PostWithExtra } from "@/lib/alltypes";

const data = [
  {
    name: "Posts",
    href: "/dashboard/profile/posts",
  },
  {
    name: "Replies",
    href: "/dashboard/profile/reply",
  },
  {
    name: "Like",
    href: "/dashboard/profile/like",
  },
  {
    name: "Media",
    href: "/dashboard/profile/media",
  },
];

const AllPost = ({ post }: { post: PostWithExtra }) => {
  const [state, setState] = useState("");
  return (
    <>
      <div className="flex mt-12 w-full gap-10 justify-evenly">
        {data.map((data) => (
          <div key={data.href}>
            <button
              onClick={() => setState(data.name)}
              className="text-md text-gray-600 font-bold hover:bg-gray-200 px-7 py-4"
            >
              {data.name}
            </button>
          </div>
        ))}
      </div>
      <div>
        {state === "Posts" ? (
          <>
            <div>
              <Image
                src={post.user.image || ""}
                alt="logo"
                height={40}
                width={40}
              />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default AllPost;
