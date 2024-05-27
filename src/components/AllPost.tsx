import React from "react";
import Link from "next/link";

const data = [
  {
    name: "Posts",
    href: "/dashboard/profile/posts",
  },
  {
    name: "Replies",
    href: "/dashboard/profile/reply",
  },
  {
    name: "Like",
    href: "/dashboard/profile/like",
  },
  {
    name: "Media",
    href: "/dashboard/profile/media",
  },
];

const AllPost = () => {
  return (
    <div className="flex mt-12 w-full gap-10 justify-evenly">
      {data.map((data) => (
        <div key={data.href}>
          <button className="text-md text-gray-600 font-bold hover:bg-gray-200 px-7 py-4">
            {data.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllPost;
