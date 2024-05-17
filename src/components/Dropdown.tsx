"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CgMoreO, CgProfile } from "react-icons/cg";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { AiOutlineLogout } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { IoSettingsOutline } from "react-icons/io5";

const Dropdown = () => {
  return (
    <div className="mx-2">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex gap-3">
              <CgMoreO className="text-3xl" />
              <p className="hidden lg:flex">More</p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <div className="flex gap-2">
                <CgProfile className="text-xl" />
                <p>Profile</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex gap-2">
                <AiOutlineLogout className="text-xl" />
                <button onClick={() => signOut({ callbackUrl: "/" })}>
                  Logout
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex gap-2">
                <IoSettingsOutline className="text-xl" />
                <p>Setting & privacy</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Dropdown;
