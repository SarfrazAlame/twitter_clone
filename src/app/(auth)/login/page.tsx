"use client";
import { signIn } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full justify-center h-4/5 items-center">
      <div className="flex flex-col items-center">
        <p className="my-10 text-gray-800 lg:text-3xl md:text-2xl sm:text-xl">
          Please Sign In to Use Chwitter
        </p>
        <button
          className="border px-6 py-2 rounded-full bg-black text-gray-100"
          onClick={() => signIn("google", { callbackUrl: "/dashboard/home" })}
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default page;
