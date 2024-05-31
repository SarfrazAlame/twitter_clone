import { fetchFollowerbyUserId } from "@/lib/fetch";
import React from "react";

const page = async() => {
  const follower = await fetchFollowerbyUserId()
  console.log(follower)
  return <>
  <div>
asaqsd
  </div>
  </>;
};

export default page;
