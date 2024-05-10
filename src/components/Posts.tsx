import React from "react";
import { fetchPosts } from "@/lib/fetch";
import { PostWithExtra } from "@/lib/alltypes";
import Post from "./Post";

const Posts = async () => {
  const posts = await fetchPosts();
  return (
    <div className="w-full flex justify-start">
      <div>
        {posts.map((post: PostWithExtra) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
