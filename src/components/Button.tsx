"use client";
import { followUser } from "@/lib/actions";
import { User } from "@prisma/client";
import React from "react";

const Button = async ({ user }: { user: User }) => {
  return (
    <button
      onClick={() => {
        followUser(user.id);
      }}
      className="border h-fit mt-5 px-4 py-1 rounded-full bg-black text-white"
    >
      Follow
    </button>
  );
};

export default Button;
