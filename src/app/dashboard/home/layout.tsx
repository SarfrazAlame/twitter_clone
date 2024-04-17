import AppBar from "@/components/AppBar";
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
      {children}
    </div>
  );
}
