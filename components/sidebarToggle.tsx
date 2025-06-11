// components/SidebarToggle.tsx
"use client";
import React from "react";
import { GoSidebarExpand } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { useSidebarStore } from "@/store/sidebarToggle";
import { usePathname } from "next/navigation";

const SidebarToggle = () => {
  const { toggleSidebar, isOpen } = useSidebarStore();
  const pathname = usePathname();

  return (
    <div
      className={`absolute lg:hidden ${
        pathname === "/commission" ? "top-[96px]" : "top-[32px]"
      } right-[32px] bg-[#F8F3FC] p-3 rounded-full text-[18px] shadow-md z-50`}
      onClick={toggleSidebar}
    >
      {isOpen ? <IoClose /> : <GoSidebarExpand />}
    </div>
  );
};

export default SidebarToggle;
