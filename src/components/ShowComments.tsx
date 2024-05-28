import { PostWithExtra } from "@/lib/alltypes";
import { fetchCommentWithPostId } from "@/lib/fetch";
import Image from "next/image";
import React from "react";
import { string } from "zod";

const ShowComments = async ({ postId }: { postId: string }) => {
  return <div>{postId}</div>;
};

export default ShowComments;
