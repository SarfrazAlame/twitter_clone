import { PostWithExtra } from "@/lib/alltypes";
import { authOptions } from "@/lib/auth";
import { getUserID } from "@/lib/userId";
import { getServerSession } from "next-auth";
import Image from "next/image";
import UserImage from "./UserImage";

const Post = async ({ post }: { post: PostWithExtra }) => {
  const userId = await getUserID();
  const session = await getServerSession(authOptions);
  return (
    <div className="flex mx-10">
      <div className="">
        <UserImage />
      </div>
      <div className="mx-3">
        <p className="font-bold text-gray-800">{session?.user.name}</p>
        <p>{post.title}</p>
        {post.imgUrl ? (
          <Image
            src={post.imgUrl}
            alt="jhlo"
            height={400}
            width={400}
            className=""
          />
        ) : null}
      </div>
    </div>
  );
};

export default Post;
