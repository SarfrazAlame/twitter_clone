import Sidebar from "@/components/Sidebar";
import SideNav from "@/components/Sidenav";
import React from "react";

export default function DhashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex w-full h-screen justify-evenly ">
          <div className="">
            <SideNav />
          </div>
          <div className="flex border-l w-full md:w-1/2">{children}</div>
          <div className="border-s hidden md:flex ">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
