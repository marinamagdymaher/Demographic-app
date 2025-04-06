"use client";
import Link from "next/link";
import { MdAreaChart, MdDashboard } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaRegBell, FaStarOfLife } from "react-icons/fa";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  { title: "Dashboard", path: "/dashboard", icon: <MdAreaChart /> },
  { title: "Analytics", path: "/analytics", icon: <MdDashboard /> },
  { title: "Connect", path: "/connect", icon: <FaEarthAmericas /> },
  { title: "Activity", path: "/Activity", icon: <FaRegBell /> },
  { title: "Dealroom", path: "/dealroom", icon: <FaStarOfLife /> },
];

export default function Footer() {
  const pathname = usePathname();
  const isAnalyticsPage = pathname === "/analytics";
  const footerClasses = `
    w-full bg-black w-full lg:hidden 
    ${isAnalyticsPage ? "fixed right-0 left-0 bottom-0" : "relative"}
  `;

  return (
    <footer className={footerClasses}>
      <nav className="flex flex-wrap flex-row  items-center justify-between px-6 py-4 gap-3">
        {sidebarLinks.map(({ title, path, icon }) => (
          <Link
            key={path}
            href={path}
            className="flex flex-col items-center gap-2 p-3 rounded-lg font-semibold text-white/90 hover:text-white transition-colors duration-200"
          >
            <span className="text-3xl">{icon}</span>
            <span className="text-sm">{title}</span>
          </Link>
        ))}
      </nav>
    </footer>
  );
}
