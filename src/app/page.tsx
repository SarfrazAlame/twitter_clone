import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>{session ? redirect("/dashboard/home") : redirect("/login")}</div>
  );
};

export default page;
