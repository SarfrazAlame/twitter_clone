import React from "react";
import Image from "next/image";
import { getServerSession } from "next-auth";

const UserImage = async () => {
  const session = await getServerSession();
  return (
    <div>
      <Image
        src={session?.user.image}
        alt={session?.user.name}
        width={40}
        height={40}
        className="rounded-full"
      />
    </div>
  );
};

export default UserImage;
