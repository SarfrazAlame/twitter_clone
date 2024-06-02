"use client";
import { signOut } from "next-auth/react";
import React from "react";

const Logout = () => {
  return (
    <div>
      <button className="border px-3 py-2 rounded-full " onClick={() => signOut({callbackUrl:"/login"})}>Logout</button>
    </div>
  );
};

export default Logout;
