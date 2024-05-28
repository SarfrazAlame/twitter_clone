import { PostWithExtra } from "@/lib/alltypes";
import Image from "next/image";
import Comments from "./Comments";
import PostUser from "./PostUser";
import DeletePost from "./DeletePost";
import Link from "next/link";

const Post = ({ post }: { post: PostWithExtra }) => {
  return (
    <>
      {post.title || post.imgUrl ? (
        <div className="w-full pb-3 mx-3 md:mx-10 my-6 border-b">
          <div className="my-2">
            <div className="w-5/4 lg:w-full flex justify-between">
              <Link href={`/dashboard/${post.user.id}`}>
                <PostUser post={post} />
              </Link>
              <DeletePost post={post} />
            </div>
            <Link href={`/dashboard/user/${post.id}`}>
              <div className="mx-12 -mt-3">
                <p className="mb-2">{post.title}</p>
                {post.imgUrl ? (
                  <Image
                    src={post.imgUrl}
                    alt="jhlo"
                    height={400}
                    width={400}
                    className="rounded"
                  />
                ) : null}
              </div>
            </Link>
          </div>

          <div className="mx-12 ">
            <Comments post={post} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Post;
