import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const UserProfile = async () => {
  const session = await getServerSession();
  const user = session?.user;
  return (
    <div className="">
      <div className="flex gap-3">
        {user ? (
          <>
            <Image
              src={user.image}
              alt="image"
              width={40}
              height={40}
              className="rounded-full"
            />
          </>
        ) : null}
      </div>
      {user ? (
        <div className="flex flex-col">
          <p className="text-xl font-bold">{user.name}</p>
          <p className="">{user.email}</p>
        </div>
      ) : null}
    </div>
  );
};

export default UserProfile;
