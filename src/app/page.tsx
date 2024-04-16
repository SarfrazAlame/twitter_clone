import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "./lib/auth";
import { signIn } from "next-auth/react";
import Button from "@/components/Button";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return <div>{session ? redirect("/dashboard") : redirect("/login")}</div>;
};

export default page;
