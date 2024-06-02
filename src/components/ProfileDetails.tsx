import { PostWithExtra, UserWithExtra } from "@/lib/alltypes";
import Image from "next/image";
import Link from "next/link";
import React, { useId } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import AllPost from "./AllPost";
import { CiCircleMore } from "react-icons/ci";
import { MdForwardToInbox } from "react-icons/md";
import { getUserID } from "@/lib/userId";
import Button from "./Button";
import { fetchFollower, fetchPosts } from "@/lib/fetch";
import Alldata from "./Alldata";
import Logout from "./Logout";

const ProfileDetails = async ({
  user,
  id,
}: {
  user: UserWithExtra;
  id: string;
}) => {
  const userId = await getUserID();
  const follows = await fetchFollower(user?.id);
  const posts = await fetchPosts();

  const postq = posts.filter((post: PostWithExtra) => post.user.id === id);
  return (
    <>
      <div className="flex h-8 items-center sm:w-1/3 w-full justify-center gap-10">
        <div className="flex gap-2 mt-28 sm:mt-2">
          <Link href={"/dashboard/home"}>
            <FaArrowLeftLong className="cursor-pointer w-9 h-9 px-2 hover:bg-gray-100 rounded-full" />
          </Link>
          <p className="sm:text-2xl text-lg font-bold text-gray-700 cursor-pointer">
            {user?.name}
          </p>
        </div>
      </div>
      <p className="sm:w-1/3 w-full mt-10 sm:mt-0 text-center text-sm">
        {user?.posts.length} posts
      </p>
      <div className="sm:w-1/3 w-full flex justify-between mt-16 sm:mx-12 mx-0 ">
        <div>
          <Image
            src={user?.image || ""}
            width={130}
            height={130}
            alt="logo"
            className="rounded-full"
          />
          <div>
            <p className="mt-3 font-bold sm:text-2xl text-xl text-gray-800">
              {user?.name}
            </p>
            <p>{user?.email}</p>
          </div>
          <div className="mt-7 flex gap-5">
            <Link
              href={`/dashboard/following/${user.id}`}
              className="hover:underline cursor-pointer"
            >
              {user?.following.length} following
            </Link>
            <Link
              href={`/dashboard/follower/${user.id}`}
              className="hover:underline cursor-pointer"
            >
              {user?.followers.length} followers
            </Link>
          </div>
        </div>
        <div className="sm:flex flex-col gap-3">
          <div className="flex gap-2">
            <div>
              <Logout />
            </div>
            <CiCircleMore className="text-4xl text-gray-500 cursor-pointer" />
            <MdForwardToInbox className="text-xl text-gray-500 w-8 h-8 border rounded-full cursor-pointer" />
          </div>
          {user?.id === userId ? (
            <button className="border h-fit px-3 py-1 rounded-full font-semibold hover:bg-gray-200 ">
              Edit profile
            </button>
          ) : (
            <div className="h-fit -mt-5">
              <Button user={user} follows={follows} />
            </div>
          )}
        </div>
      </div>

      <div>
        <Alldata />
      </div>

      <div className="w-full">
        {postq.map((data) => (
          <AllPost key={data.id} post={data} />
        ))}
      </div>
    </>
  );
};

export default ProfileDetails;
