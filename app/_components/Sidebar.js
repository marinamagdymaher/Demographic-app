"use client";
import { FaPlus } from "react-icons/fa6";
import Logo from "./Logo";
import RouterLinks from "./RouterLinks";
import Messages from "./Messages";

export default function Sidebar() {
  return (
    <>
      {/* {Desktop} */}
      <aside className="w-64 hidden lg:flex flex-col bg-black text-gray-500 z-10 border-r border-gray-500">
        <Logo />

        <div className="flex-1 flex">
          <Messages />
          <RouterLinks />
        </div>
      </aside>
      {/* {Mobile} */}
    </>
  );
}
