"use client";
import { followUser } from "@/lib/actions";
import { User } from "@prisma/client";
import React from "react";

const Follows = ({
  user,
  follows,
}: {
  user: User;
  follows:
    | { followerId: string; followingId: string }
    | { message: string }
    | null;
}) => {
  return (
    <>
      {!follows ? (
        <button
          onClick={() => {
            followUser(user.id);
          }}
          className="border h-fit mt-5 px-4 py-1 rounded-full text-gray-800"
        >
          Following
        </button>
      ) : (
        <button
          onClick={() => {
            followUser(user.id);
          }}
          className="border h-fit mt-5 px-4 py-1 rounded-full bg-black text-white"
        >
          Follow
        </button>
      )}
    </>
  );
};

export default Follows;
