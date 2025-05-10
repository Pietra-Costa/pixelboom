import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { CircleHelp } from "lucide-react";
import { Bell } from "lucide-react";

function Navbar() {
  return (
    <div className="h-[72px] w-full border-b border-[#e4e4e7] flex items-center px-[30px] justify-between">
      <SidebarTrigger />
      <div className="flex gap-3">
        <button className=" border border-[#e4e4e7] rounded-full p-3">
          <CircleHelp className="w-[16px] h-[16px]" />
        </button>

        <button className=" border border-[#e4e4e7] rounded-full p-3">
          <Bell className="w-[16px] h-[16px]" />
        </button>

        <div className="rounded-full ">
          <img src="/avatar.png" alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
