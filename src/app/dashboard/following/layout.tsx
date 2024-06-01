import AllFollowers from "@/components/AllFollowers";
import React from "react";

export default function DhashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full flex flex-col">{children}</div>
    </>
  );
}
