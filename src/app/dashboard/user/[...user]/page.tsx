"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const page = () => {
  const params = useParams();
  return (
    <div className="w-full">
      <div className="flex mx-12 gap-7 h-7 items-center">
        <Link href={"/dashboard/home"}>
          <FaArrowLeftLong className="mt-2" />
        </Link>
        <p className="text-xl font-bold mt-2">Post</p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default page;
