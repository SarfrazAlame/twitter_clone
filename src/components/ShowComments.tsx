import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";
import CommentPost from "./CommentPost";

const ShowComments = async ({
  comment,
  user,
}: {
  comment: string | null;
  user: User;
}) => {
  return (
    <>
      <div className="w-full flex mx-7 my-4">
        {/* @ts-ignore */}
        {comment?.length > 0 ? (
          <>
            <div className="">
              <Image
                src={user.image!}
                alt="lgo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="mx-3 font-bold text-gray-800">{user.name}</p>
              <p className="mx-2">{comment}</p>
            </div>
          </>
        ) : null}
      </div>
      <div>
        <CommentPost/>
      </div>
    </>
  );
};

export default ShowComments;
