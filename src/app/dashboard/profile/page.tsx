import ProfileDetails from "@/components/ProfileDetails";
import { fetchUsers } from "@/lib/fetch";
import React from "react";

const page = async () => {
  const user: any = await fetchUsers();
  return (
    <>
      <ProfileDetails user={user} />
    </>
  );
};

export default page;
