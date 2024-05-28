import { fetchCommentWithPostId } from "@/lib/fetch";
import Image from "next/image";
import React from "react";

const ShowComments = async ({ postId }: { postId: string }) => {
  const post = await fetchCommentWithPostId(postId);
  return <div></div>;
};

export default ShowComments;
