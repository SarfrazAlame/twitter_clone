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
      <div>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-3 w-full h-screen justify-between ">
            <div className="border-e flex lg:justify-center lg:w-full">
              <SideNav />
            </div>
            <div className="flex">{children}</div>
            <div className="border-s hidden sm:flex">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
