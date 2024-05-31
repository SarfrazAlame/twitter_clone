import AllFollowers from "@/components/AllFollowers";
import { fetchFollowerbyUserId } from "@/lib/fetch";
import Image from "next/image";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const follower = await fetchFollowerbyUserId(id);
  console.log(id);
  return (
    <>
      <div>
        <AllFollowers id={id} />
        <div>
          <div>
            {/* {users.map((user: User) => (
              <div className="flex w-full my-5 md:w-4/5 items-center justify-around">
                <div className="flex gap-2">
                  <div>
                    <Image
                      src={user.image!}
                      alt="logo"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{user.name}</p>
                    <p>{user.email}</p>
                  </div>
                </div>
                <button className="border h-fit px-5 py-1.5 rounded-full bg-black text-gray-100">
                  Follow
                </button>
              </div> */}
            {/* ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
