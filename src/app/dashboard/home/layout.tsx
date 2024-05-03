import AppBar from "@/components/AppBar";
import FormHandler from "@/components/FormHandler";
import Sidebar from "@/components/Sidebar";
import SideNav from "@/components/Sidenav";
import React from "react";

export default function DhashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <AppBar />
      <div className="flex mt-3">
        {children}
        <FormHandler/>
      </div>
    </div>
  );
}
