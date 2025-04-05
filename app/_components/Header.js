"use client";
import { usePathname } from "next/navigation";
import { formattedPath } from "@/app/_utils/utils";
import { useRouter } from "next/router";
import ButtonLink from "./ButtonLink";

export default function Header() {
  return (
    <>
      <TopHeader />
      <BottomHeader />
    </>
  );
}

function TopHeader() {
  const path = usePathname();
  const format = formattedPath(path);

  return (
    <header className="flex justify-between items-center w-full h-16 px-6 bg-black text-white shadow-md z-20 border-b border-gray-500">
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
    <div className=" w-full h-12 bg-black px-6 z-10 border-b border-gray-500">
      <div className="flex justify-between items-center h-full">
        <ul className="flex space-x-6 text-white h-full">
          {headerLinks.length > 0 ? (
            headerLinks.map((item, i) => (
              <li
                key={i}
                className="h-full border-r border-gray-500 text-gray-500  pr-6 flex items-center justify-center"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="text-gray-400 italic">No Sections</li>
          )}
        </ul>

        <ButtonLink linkName="More" />
      </div>
    </div>
  );
}
