import { usePathname } from "next/navigation";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";

export default function Messages() {
  const pathName = usePathname();
  if (pathName === "/profile")
    return (
      <div className=" flex flex-col items-center justify-between  border-r border-gray-500">
        <div className="flex-1 flex flex-col">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className={`flex justify-center items-center px-3 py-3 ${
                i === 0 && "bg-[#3A3030]"
              } `}
            >
              <span className="w-8 h-8 rounded-full bg-white flex justify-end items-end">
                {" "}
                <span
                  className={`w-2 h-2 rounded-full 
                ${[0, 2].includes(i) ? "bg-green-700" : "bg-red-700"} `}
                ></span>
              </span>
            </div>
          ))}
        </div>
        <div className=" border-t border-gray-500 w-full flex justify-center items-center">
          <FaPlus className="my-5 " />
        </div>
      </div>
    );
  if (pathName === "/analytics")
    return (
      <div className=" flex flex-col items-center justify-between  border-r border-gray-500">
        <div className="flex-1 flex flex-col">
          <div className={`flex justify-center items-center px-3 py-3 `}>
            <span className="w-8 h-8 flex relative">
              <Image
                src="/profile.png"
                width={30}
                height={30}
                alt="Picture of the author"
                className="rounded-full"
              />
              <span
                className={`w-2 h-2 rounded-full bg-green-700 absolute right-0 bottom-0`}
              ></span>
            </span>
          </div>
        </div>
        <div className=" border-t border-gray-500 w-full flex justify-center items-center">
          <FaPlus className="my-5 " />
        </div>
      </div>
    );
}
