import AllFollowers from "@/components/AllFollowers";
import { fetchFollowerbyUserId, fetchUserByUserId } from "@/lib/fetch";
import { getUserID } from "@/lib/userId";
import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const followers: any = await fetchFollowerbyUserId(id);
  const users = await followers.map((user: any) => {
    return user.follower;
  });
  const userId = await getUserID();
  const userid: any = await fetchUserByUserId(userId);


  return (
    <>
      <AllFollowers id={id} />
      <div>
        {users.map((user: User) => (
          <div
            key={user.id}
            className="flex w-full my-5 md:w-4/5 items-center justify-around"
          >
            <div className="flex gap-2">
              <div>
                <Image
                  src={user?.image!}
                  alt="logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-bold text-gray-800">{user?.name}</p>
                <p>{user?.email}</p>
              </div>
            </div>
            {user.id === userId ? (
              <>
                <div className="w-24"></div>
              </>
            ) : (
              <>
                <button className="border px-3 py-1 rounded-full  bg-black text-white">
                  follow
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
