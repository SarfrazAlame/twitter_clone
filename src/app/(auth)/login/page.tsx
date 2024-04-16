"use client";
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import React from "react";

const page = async () => {
  return (
    <div>
      <button onClick={() => signIn("google")} className="mt-12">
        Login with google
      </button>
    </div>
  );
};

export default page;
