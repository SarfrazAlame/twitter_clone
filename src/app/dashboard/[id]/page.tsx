import ProfileDetails from "@/components/ProfileDetails";
import { fetchUserById } from "@/lib/fetch";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const user: any = await fetchUserById(id);
  return (
    <>
      <div className="w-full">
        <ProfileDetails user={user} />
      </div>
    </>
  );
};

export default page;
