"use client";
import { signIn } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <button onClick={() => signIn("google", { callbackUrl: "/dashboard/home" })}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default page;
