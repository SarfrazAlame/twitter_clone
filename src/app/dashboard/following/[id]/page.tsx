import AllFollowers from "@/components/AllFollowers";
import { fetchFollowerbyUserId } from "@/lib/fetch";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const follower = await fetchFollowerbyUserId();
  console.log(id);
  return (
    <>
      <div>
        <AllFollowers id={id} />
      </div>
    </>
  );
};

export default page;
