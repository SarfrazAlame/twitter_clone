import ProfileDetails from "@/components/ProfileDetails";
import { fetchUsers } from "@/lib/fetch";
import React from "react";

const page = async () => {
  const user: any = await fetchUsers();
  const id = "";
  return (
    <>
      <ProfileDetails user={user} id={id} />
    </>
  );
};

export default page;
