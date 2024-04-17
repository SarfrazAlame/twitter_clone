import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  return <div className="">page</div>;
};

export default page;
