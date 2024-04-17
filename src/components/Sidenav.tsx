// "use client";
import Link from "next/link";
import React from "react";
import { BsSend } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { MdHomeFilled, MdOutlineMessage } from "react-icons/md";
import UserProfile from "./UserProfile";
import Dropdown from "./Dropdown";

const LogoBar = [
  {
    name: "Home",
    icon: MdHomeFilled,
    href: "/dashboard/home",
  },
  {
    name: "Explore",
    icon: IoSearchOutline,
    href: "/dashboard/explore",
  },
  {
    name: "Notifications",
    icon: IoNotificationsOutline,
    href: "/dashboard/notification",
  },
  {
    name: "Message",
    icon: MdOutlineMessage,
    href: "/dashboard/message",
  },
  {
    name: "Profile",
    icon: CgProfile,
    href: "/dashboard/profile",
  },
];

const SideNav = async () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col gap-5 mt-2">
          <Link href={"/"} className="mx-3">
            <FaXTwitter className="text-4xl cursor-pointer" />
          </Link>
          <div className="">
            {LogoBar.map((item) => {
              const IconItem = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-fit flex gap-3 my-2 py-3 px-2 hover:bg-gray-200 rounded-full"
                >
                  <IconItem className="text-3xl" />
                  <p className="hidden lg:flex">{item.name}</p>
                </Link>
              );
            })}
          </div>
          <div>
            <Dropdown />
          </div>

          <BsSend className="lg:hidden flex mx-2 bg-blue-500 w-10 h-10 text-white p-2 rounded-full" />

          <div className="mt-20">
            <UserProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
