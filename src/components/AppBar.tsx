import Link from "next/link";
import React from "react";

const AppBar = () => {
  return (
    <div className="flex border-b h-16 w-full gap-4 mx-12">
      <button className="hover:bg-gray-200 px-2">For you</button>
      <button className="hover:bg-gray-200 px-2">Following</button>
      {/* here will come whosoever's community you follow */}
    </div>
  );
};

export default AppBar;
