import { UserWithExtra } from "@/lib/alltypes";
import { fetchUserById } from "@/lib/fetch";
import Link from "next/link";
import React from "react";
import { GoArrowLeft } from "react-icons/go";

const page = async ({ id }: { id: string }) => {
  // @ts-ignore
  const user: UserWithExtra = await fetchUserById(id);
  return (
    <div className="w-full h-fit border-b">
      <div className="flex w-full justify-center items-center  gap-4">
        <Link href={`/dashboard/${user.id}`}>
          <GoArrowLeft className="text-2xl cursor-pointer " />
        </Link>
        <div>
          <p className="text-2xl font-bold text-gray-800">{user?.name}</p>
          <p>{user?.email}</p>
        </div>
      </div>
      <div className="flex w-full justify-around mt-6">
        <Link
          href={`/dashboard/follower/${user.id}`}
          className="px-6 py-4 hover:bg-gray-300"
        >
          Followers
        </Link>
        <Link
          href={`/dashboard/following/${user.id}`}
          className="px-6 py-4 hover:bg-gray-300"
        >
          Following
        </Link>
        <button
          className="px-6 py-4 hover:bg-gray-300"
        >
          Verified Followers
        </button>
      </div>
    </div>
  );
};

export default page;
