"use client";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        login
      </button>
      {JSON.stringify(session?.user)}
    </div>
  );
};

export default page;
