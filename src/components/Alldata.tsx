"use client";
import React, { useState } from "react";

const datas = [
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

const Alldata = () => {
  const [state, setState] = useState("");
  return (
    <div className="w-3/2 flex justify-between">
      {" "}
      {datas.map((data) => (
        <div key={data.href}>
          <button
            onClick={() => setState(data.name)}
            className="text-md text-gray-600 font-bold hover:bg-gray-200 px-7 py-4"
          >
            {data.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Alldata;
