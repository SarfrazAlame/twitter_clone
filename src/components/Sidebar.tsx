import { fetchUser } from "@/lib/fetch";
import Image from "next/image";
import React from "react";

const Sidebar = async () => {
  const users = await fetchUser();
  return (
    <div className="w-full text-center">
      <div className="text-xl font-semibold m-3">Who to follow</div>
      <div className="my-7">
        {users.users?.map((user) => (
          <div
            key={user.id}
            className="flex justify-between gap-2 hover:bg-gray-100 cursor-pointer rounded"
          >
            <div className="flex gap-2 my-2 px-2 py-2 ">
              <div>
                <Image
                  src={user.image}
                  alt="image"
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{user.name}</p>
                <p>{user.email}</p>
              </div>
            </div>
            <button className="text-end border h-fit mt-7 px-4 py-1 bg-black text-white rounded-full">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
