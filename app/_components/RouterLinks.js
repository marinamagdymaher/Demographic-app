import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function RouterLinks() {
  const sidebarLinks = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "Analytics", path: "/analytics" },
    { title: "Connect", path: "/connect" },
    { title: "Dealroom", path: "/dealroom" },
    { title: "Profile", path: "/profile" },
    { title: "Settings", path: "/settings" },
  ];

  const pathName = usePathname();

  const isActive = (path) => path === pathName;
  return (
    <>
      {/* {Desktop} */}
      <ul className="flex flex-col px-6 py-3 flex-grow gap-3">
        {sidebarLinks.map((item, index) => {
          if (!item.path) {
            throw new Error(`Missing path for "${item.title}"`);
          }
          return (
            <li key={index}>
              <Link
                href={item.path}
                className={`${
                  isActive(item.path) ? "text-white" : "text-gray-500"
                } block p-3 rounded-lg  hover:text-white transition-colors duration-200`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
