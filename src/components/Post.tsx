import { PostWithExtra } from "@/lib/alltypes";
import { authOptions } from "@/lib/auth";
import { getUserID } from "@/lib/userId";
import { getServerSession } from "next-auth";
import Image from "next/image";
import UserImage from "./UserImage";
import { FaRegComment } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { Bookmark } from "lucide-react";
import { GoShare } from "react-icons/go";

const Post = async ({ post }: { post: PostWithExtra }) => {
  const userId = await getUserID();
  return (
    <>
      <div className=" pb-3 mx-10 my-6 border-b">
        <div className="flex my-2">
          <div className="">
            <UserImage />
          </div>
          <div className="mx-3">
            <p className="font-bold text-gray-800">{post.user.name}</p>
            <p className="mb-2">{post.title}</p>
            {post.imgUrl ? (
              <Image src={post.imgUrl} alt="jhlo" height={400} width={400} className="rounded"/>
            ) : null}
          </div>
        </div>

        <div className="mx-12 flex w-full justify-between">
          <FaRegComment className="text-gray-600 cursor-pointer hover:text-blue-500" />
          <BiRepost className="cursor-pointer text-xl hover:text-green-500" />
          <CiHeart className="cursor-pointer text-xl hover:text-red-600" />
          <div className="flex gap-6">
            <Bookmark className="text-sm cursor-pointer hover:text-blue-500" />
            <GoShare className="cursor-pointer text-xl hover:text-blue-500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
