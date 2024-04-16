import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const UserProfile = async () => {
  const session = await getServerSession();
  return (
    <div className="">
      
      <div className="flex gap-3">
        <Image
          src={session?.user.image}
          alt={session?.user.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="text-xl font-bold">{session?.user.name}</p>
      </div>
      <p className="">{session?.user.email}</p>
    </div>
  );
};

export default UserProfile;
