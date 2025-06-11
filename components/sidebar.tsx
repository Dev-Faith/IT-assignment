// components/Sidebar.tsx
"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/store/sidebarToggle";

const navigationItems = [
  { name: "Home", icon: "/icons/home.png", href: "/" },
  { name: "Payment History", icon: "/icons/links.png", href: "#" },
  { name: "Comm and payouts", icon: "/icons/cardii.png", href: "/commission" },
  { name: "Add Request", icon: "/icons/add-line.png", href: "#" },
  { name: "Marketing", icon: "/icons/speak-line.png", href: "#" },
];

const active = "bg-[#20232D] text-white rounded-[8px]";

const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen, closeSidebar } = useSidebarStore();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeSidebar]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-40 z-40 lg:hidden"></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-50 transform transition-transform duration-300 bg-white h-screen p-[32px] min-w-[70%] sm:min-w-[300px] lg:min-w-[18.8%] border-r-1 border-[#E2E4E9] text-[16px] flex flex-col gap-[10vh]
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:relative lg:translate-x-0 lg:flex`}
      >
        <div className="relative w-[137px]">
          <Image src="/logo.png" alt="logo" width={116} height={25} />
          <p className="absolute -top-2 right-0">PA</p>
        </div>

        <div className="dashboardListItems flex flex-col gap-[130px]">
          <div className="navigation flex flex-col gap-[13vh]">
            <ul className="flex flex-col gap-[16px]">
              {navigationItems.map((item) => (
                <li
                  key={item.name}
                  className={`flex items-center gap-[8px] py-[8px] pl-[24px] ${
                    pathname === item.href ? active : ""
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
            <ul>
              <li className="flex items-center gap-[8px] py-[8px] pl-[24px] pr-[12px]">
                <Image
                  src="/icons/support.png"
                  alt="Settings"
                  width={24}
                  height={24}
                />
                <a href="#">Support Chat</a>
              </li>
            </ul>
          </div>
          <div className="toggle flex justify-center">
            <div className="flex relative  w-[88px]">
              <span>Status</span>
              <Image
                src="/icons/toggle.png"
                alt="Toggle"
                width={32}
                height={24}
                className="absolute bottom-[-7px] right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
