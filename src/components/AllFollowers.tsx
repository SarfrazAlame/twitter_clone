import { getAuthOptions } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import { GoArrowLeft } from "react-icons/go";

const page = async () => {
  const session = await getAuthOptions();
  const user = session?.user;
  return (
    <div className="w-full h-fit border-b">
      <div className="flex w-full justify-center items-center  gap-4">
        <GoArrowLeft className="text-2xl cursor-pointer " />
        <div>
          <p className="text-2xl font-bold text-gray-800">{user?.name}</p>
          <p>{user?.email}</p>
        </div>
      </div>
      <div className="flex w-full justify-around mt-6">
        <Link
          href={"/dashboard/follower"}
          className="px-6 py-4 hover:bg-gray-300"
        >
          Followers
        </Link>
        <Link
          href={"/dashboard/following"}
          className="px-6 py-4 hover:bg-gray-300"
        >
          Following
        </Link>
        <Link
          href={"/dashboard/varified_follower"}
          className="px-6 py-4 hover:bg-gray-300"
        >
          Verified Followers
        </Link>
      </div>
    </div>
  );
};

export default page;
