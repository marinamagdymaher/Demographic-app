import React from "react";

export default function ButtonLink({ linkName, AddClass }) {
  return (
    <button className=
    {`${AddClass} hover:text-gray-400 text-white cursor-pointer flex items-center h-full border-l border-gray-500 pl-6`}>
      {linkName}
    </button>
  );
}
