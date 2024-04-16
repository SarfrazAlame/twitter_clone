import Link from "next/link";
import React from "react";
import { BsSend } from "react-icons/bs";
import { CgMoreO, CgProfile } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import {
  IoNotificationsOutline,
  IoSearchOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdHomeFilled, MdOutlineMessage } from "react-icons/md";
import UserProfile from "./UserProfile";
import Dropdown from "./Dropdown";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { Input } from "./ui/input";

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

const SideNav = async () => {
  const session = await getServerSession();
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

          <Dialog>
            <DialogTrigger>
              <button className="bg-blue-500 hidden lg:flex text-white w-40 py-3 px-16 text-xl rounded-full">
                Post
              </button>
            </DialogTrigger>
            <DialogContent>
              <Image
                src={session?.user.image}
                alt={session?.user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <DialogHeader>
                <Input
                  className="h-24 text-2xl"
                  placeholder="What is happening?!"
                />
              </DialogHeader>
            </DialogContent>
          </Dialog>

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
