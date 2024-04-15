"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { MdHomeFilled, MdOutlineMessage } from "react-icons/md";

const LogoBar = [
  {
    name: "Home",
    icon: MdHomeFilled,
    href: "/",
  },
  {
    name: "Explore",
    icon: IoSearchOutline,
    href: "/explore",
  },
  {
    name: "Notifications",
    icon: IoNotificationsOutline,
    href: "/notification",
  },
  {
    name: "Message",
    icon: MdOutlineMessage,
    href: "/message",
  },
  {
    name: "Profile",
    icon: CgProfile,
    href: "/profile",
  },
];

const SideNav = () => {
  const pathName = usePathname();
  return (
    <div className="flex flex-col gap-5 mt-2">
      <Link href={'/'} className="mx-3">
        <FaXTwitter className="text-4xl cursor-pointer" />
      </Link>
      <div className="">
        {LogoBar.map((item) => {
          const IconItem = item.icon;
          const isActive = pathName === item.href;

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
        <button className="bg-blue-500 text-white w-40 py-3 rounded-full">Post</button>
      </div>

      <div>
        {/* user profile details */}
      </div>
    </div>
  );
};

export default SideNav;
