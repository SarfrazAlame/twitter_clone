import React from "react";
import Image from "next/image";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { getUserID } from "@/lib/userId";

const UserImage = async () => {
  const session = await getServerSession();
  const userId = await getUserID();
  return (
    <div>
      <Link href={`/dashboard/${userId}`}>
        <Image
          src={session?.user.image || ""}
          alt={session?.user.name || ""}
          width={40}
          height={40}
          className="rounded-full"
        />
      </Link>
    </div>
  );
};

export default UserImage;
