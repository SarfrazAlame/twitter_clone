import AllPost from "@/components/AllPost";
import React from "react";

export default function DhashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      {children}
      <AllPost />
    </div>
  );
}
