"use client";
import { usePathname } from "next/navigation";
import { formattedPath } from "@/app/_utils/utils";
import { useRouter } from "next/router";
import ButtonLink from "./ButtonLink";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <TopHeader />
      <BottomHeader />
    </>
  );
}

function TopHeader() {
  const [navbar, setNavbar] = useState(false);
  const path = usePathname();
  const format = formattedPath(path);

  return (
    <header>
      <nav className="hidden lg:flex justify-between items-center w-full h-16 px-6 bg-black text-white shadow-md z-20 border-b border-gray-500">
        {/* Logo or Brand Name */}
        <div className="h-12 flex items-center space-x-6">
          <span className="flex items-center hover:text-gray-400 cursor-pointer">
            {format}
          </span>
        </div>
        <div className="flex h-12 items-center gap-8">
          <ButtonLink linkName="Activity" />
          <ButtonLink linkName="Logout" />
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="inline-flex justify-between items-center p-3 rounded lg:hidden w-full bg-black text-white ml-auto outline-none"
        onClick={() => setNavbar(!navbar)}
      >
        <span className="w-8 h-8 rounded-full bg-white flex justify-end items-end"></span>
        <Image
          src="/Group 7.png"
          width={30}
          height={30}
          alt="Picture of the author"
        />
        <BsThreeDotsVertical />
      </button>
    </header>
  );
}

function BottomHeader() {
  const path = usePathname();

  let headerLinks = [];
  if (path === "/analytics") headerLinks = ["Overview", "Demographics"];
  if (path === "/profile")
    headerLinks = ["Overview", "Profile", "Experience", "Media"];

  // Get links for the current path, fallback to an empty array if undefined

  return (
    <div className="flex justify-between items-center w-full h-12 bg-black px-8 z-10 lg:border-b border-gray-500">
      {/* {DeskTop} */}
      <ul className="hidden lg:flex space-x-6 text-white h-full">
        {headerLinks.length > 0 ? (
          headerLinks.map((item, i) => (
            <li
              key={i}
              className="h-full border-r border-gray-500 text-gray-500  gap-6 flex items-center pr-6"
            >
              {item}
            </li>
          ))
        ) : (
          <li className="text-gray-400 italic">No Sections</li>
        )}
      </ul>

      {/* {Mobile} */}
      <ul className=" flex items-center justify-between gap-6 h-full lg:hidden text-white">
        {headerLinks.length > 0 ? (
          headerLinks.map((item, i) => (
            <li
              key={i}
              className={`${
                i === 0 && "text-white border-b border-white"
              } h-full text-gray-500 flex items-center justify-center`}
            >
              {item}
            </li>
          ))
        ) : (
          <li className="text-gray-400 italic">No Sections</li>
        )}
      </ul>

      <ButtonLink linkName="More" AddClass="hidden lg:block" />
    </div>
  );
}
