import { PostWithExtra, UserWithExtra } from "@/lib/alltypes";
import { Post, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const ProfileDetails = ({ user }: { user: UserWithExtra }) => {
  return (
    <>
      <div className="flex h-8 items-center w-1/3 justify-center gap-10">
        <Link href={"/dashboard/home"}>
          <FaArrowLeftLong className="cursor-pointer w-9 h-9 px-2 hover:bg-gray-100 rounded-full" />
        </Link>
        <p className="text-2xl font-bold text-gray-700 cursor-pointer">
          {user?.name}
        </p>
      </div>
      <p className="w-1/3 text-center text-sm -mt-1 ">
        {user?.posts.length} posts
      </p>
      <div className="w-2/3 flex justify-between mt-16 mx-12">
        <div>
          <Image
            src={user?.image || ""}
            width={130}
            height={130}
            alt="logo"
            className="rounded-full"
          />
          <div>
            <p className="mt-3 mx-3 font-bold text-2xl text-gray-800">
              {user?.name}
            </p>
            <p>{user?.email}</p>
          </div>
          <div className="mt-7 flex gap-5">
            <p className="hover:underline cursor-pointer">
              {user?.following.length} following
            </p>
            <p className="hover:underline cursor-pointer">
              {user?.followers.length} followers
            </p>
          </div>
        </div>
        <button className="border h-fit px-3 py-1 rounded-full font-semibold hover:bg-gray-200">
          Edit profile
        </button>
      </div>
    </>
  );
};

export default ProfileDetails;
