"use client";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const UserProfile = async () => {
  const session = await getServerSession();
  console.log(session)
  return (
    <div>
      <Image src={session?.user.image} alt={session?.user.name} />
      <p>{session?.user.name}</p>
    </div>
  );
};

export default UserProfile;
