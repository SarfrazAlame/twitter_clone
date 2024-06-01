import Comment from "@/components/Comment";
import Comments from "@/components/Comments";
import ProfileDetails from "@/components/ProfileDetails";
import { PostWithExtra } from "@/lib/alltypes";
import { fetchUsers } from "@/lib/fetch";
import Image from "next/image";
import React from "react";

const page = async () => {
  const user: any = await fetchUsers();
  const id = "";
  const posts: any = await fetchUsers();
  console.log(posts);
  return (
    <>
      <ProfileDetails user={user} id={id} />
      <div className="mx-7 ">
        {posts?.posts.map((post: PostWithExtra) => (
          <>
            <div key={post.id} className="border-b py-4">
              <div className="flex gap-2">
                <div>
                  <Image
                    src={post.user.image!}
                    alt="logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div className="flex gap-3">
                  <p className="font-bold">{post.user.name}</p>
                  <p>{post.user.email}</p>
                </div>
              </div>
              <p className="mx-12 -mt-2">{post.title}</p>

              <div>
                <Comments post={post} />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default page;
