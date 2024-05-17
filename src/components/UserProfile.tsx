import Image from "next/image";
import React from "react";

interface UserProps {
  id: string;
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
  username: string | null | undefined;
}

const UserProfile = async ({ user }: { user: UserProps }) => {
  return (
    <div className="">
      <div className="flex gap-3">
        <Image
          src={user.image}
          alt="image"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-xl font-bold">{user.name}</p>
        <p className="">{user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
