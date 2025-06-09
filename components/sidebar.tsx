"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

type Props = {};

const navigationItems = [
  { name: "Home", icon: "/icons/home.png", href: "#" },
  {
    name: "Payment History",
    icon: "/icons/links.png",
    href: "#",
  },
  { name: "Comm and payouts", icon: "/icons/card.png", href: "./commission" },
  { name: "Add Request", icon: "/icons/add-line.png", href: "#" },
  { name: "Marketing", icon: "/icons/speak-line.png", href: "#" },
];

const active = "bg-[#20232D] text-white rounded-[8px]";

const Sidebar = (props: Props) => {
  const [activeItem, setActiveItem] = useState("Comm and payouts");

  return (
    <div className="p-[32px] min-w-[18.8%] relative flex flex-col gap-[10vh] border-r-1 border-[#E2E4E9] text-[16px] h-[100vh]">
      <div className="relative w-[137px]">
        <Image src="/logo.png" alt="logo" width={116} height={25} />
        <p className="absolute -top-2 right-0">PA</p>
      </div>
      <div className=" dashboardListItems flex flex-col gap-[130px]">
        <div className="navigation flex flex-col gap-[13vh]">
          <ul className="flex flex-col gap-[16px]">
            {navigationItems.map((item) => (
              <li
                key={item.name}
                className={`flex items-center gap-[8px] py-[8px] pl-[24px]  ${
                  activeItem === item.name ? active : ""
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                <Image src={item.icon} alt={item.name} width={24} height={24} />
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
  );
};

export default Sidebar;
