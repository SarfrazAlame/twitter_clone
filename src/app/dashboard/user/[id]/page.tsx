import PostReply from "@/components/PostReply";
import ShowComments from "@/components/ShowComments";
import Timestamp from "@/components/Timestamp";
import { getAuthOptions } from "@/lib/auth";
import { fetchCommentByPostId, fetchPostById } from "@/lib/fetch";
import { Comment, User } from "@prisma/client";
import { Bookmark, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import { BiRepost } from "react-icons/bi";
import { FaArrowLeftLong, FaRegComment } from "react-icons/fa6";
import { GoShare } from "react-icons/go";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const posts: any = await fetchPostById(id);
  const session = await getAuthOptions();
  const user = session?.user;

  const comments = await fetchCommentByPostId(id);

  return (
    <div className="w-full">
      <div className="flex mx-12 gap-7 h-7 items-center">
        <Link href={"/dashboard/home"}>
          <FaArrowLeftLong className="mt-2" />
        </Link>
        <p className="text-xl font-bold mt-2">Post</p>
      </div>
      <div className="mx-5 my-7">
        {
          <div>
            <div className="flex gap-2">
              <Image
                src={posts?.user?.image!}
                alt="image"
                height={40}
                width={40}
                className="rounded-full"
              />
              <p className="font-bold text-gray-700">{posts?.user?.name}</p>
            </div>
            <p className="mt-3">{posts?.title}</p>

            <div>{/* <p>{posts?.createdAt}</p> */}</div>

            <div className="flex w-full justify-between my-4 border-b py-3">
              <div className="flex gap-2">
                <FaRegComment className="cursor-pointer rounded-full  hover:text-blue-400" />
                {posts?.comments?.length > 0 ? (
                  <p className="-mt-1">{posts?.comments?.length}</p>
                ) : null}
              </div>
              <BiRepost className="cursor-pointer text-xl rounded-full hover:text-green-400" />
              <div className="flex">
                <Heart
                  className={
                    posts?.likes?.length > 0
                      ? "cursor-pointer rounded-full text-red-500 fill-red-600 border-none"
                      : "cursor-pointer rounded-full  hover:text-red-400"
                  }
                />
                {posts?.likes?.length > 0 ? (
                  <p>{posts?.likes?.length}</p>
                ) : null}
              </div>
              <Bookmark className="cursor-pointer rounded-full  hover:text-blue-400" />
              <GoShare className="cursor-pointer rounded-full  hover:text-blue-400" />
            </div>
          </div>
        }
      </div>

      <div>
        <PostReply user={user} postId={posts.id} />
      </div>

      {/* <div>
        <ShowComments postId={posts.id} />
      </div> */}

      <div className="my-10">
        {
          // @ts-ignore
          comments.map((comment: Comment & { user: User }) => (
            <ShowComments
              key={comment.body}
              comment={comment.body}
              user={comment.user}
              posts={posts}
            />
          ))
        }
      </div>
    </div>
  );
};

export default page;
