"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const BottomNav = ({
  home,
  services,
  about,
  contact,
}: {
  home: string;
  services: string;
  about: string;
  contact: string;
}) => {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(true);
  return (
    <nav className=" mb-4  relative mr-[32px] p-0 text-center ease-in-out duration-300">
      <div className="flex items-center">
        <div className="hidden sm:flex items-center mx-auto space-x-1">
          <Link
            href={"/"}
            className={`py-4 px-2 ${
              pathname == "/"
                ? " text-[#66ab36] border-b-4 border-[#66ab36] font-semibold"
                : pathname == "/ar"
                ? " text-[#66ab36] border-b-4 border-[#66ab36] font-semibold"
                : " text-gray-500 font-semibold dark:text-white hover:text-[#66ab36] transition duration-300"
            }`}
          >
            {home}
          </Link>
          <Link
            href={"/services"}
            className={`py-4 px-2 ${
              pathname == "/services"
                ? " text-[#66ab36] border-b-4 border-[#66ab36] font-semibold"
                : pathname == "/ar/services"
                ? " text-[#66ab36] border-b-4 border-[#66ab36] font-semibold"
                : " text-gray-500 font-semibold dark:text-white hover:text-[#66ab36] transition duration-300"
            }`}
          >
            {services}
          </Link>
          <Link
            href={"/about"}
            className={`py-4 px-2 ${
              pathname == "/about"
                ? " text-[#66ab36] border-b-4 border-[#66ab36] font-semibold"
                : pathname == "/ar/about"
                ? " text-[#66ab36] border-b-4 border-[#66ab36] font-semibold"
                : " text-gray-500 font-semibold dark:text-white hover:text-[#66ab36] transition duration-300"
            }`}
          >
            {about}
          </Link>
          <Link
            href={"/contact"}
            className={`py-4 px-2 ${
              pathname == "/contact"
                ? " text-[#66ab36] border-b-4 border-[#66ab36] font-semibold"
                : pathname == "/ar/contact"
                ? " text-[#66ab36] border-b-4 border-[#66ab36] font-semibold"
                : " text-gray-500 font-semibold dark:text-white hover:text-[#66ab36] transition duration-300"
            }`}
          >
            {contact}
          </Link>
        </div>
      </div>

      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setIsHidden((c) => !c)}
          title="mobile-BTN"
          className="outline-none mobile-menu-button ml-auto mr-2 "
        >
          <svg
            className="w-6 h-6 text-gray-500  hover:text-[#66ab36] "
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div
        className={`sm:hidden fixed z-50 bg-white dark:bg-gray-500 top-0 right-0 w-[100vw] ${
          isHidden ? "hidden" : ""
        }`}
      >
        <div
          className="py-[2vh] text-left font-bold text-2xl cursor-pointer px-8  hover:bg-[#66ab36] hover:text-white transition duration-300"
          onClick={() => setIsHidden((c) => !c)}
        >
          x
        </div>
        <ul className="">
          <li>
            <Link
              onClick={() => setIsHidden((c) => !c)}
              href={"/"}
              className={`block text-sm  px-2 py-[10vh] ${
                pathname == "/"
                  ? " text-white bg-[#66ab36] font-semibold"
                  : pathname == "/ar"
                  ? " text-white bg-[#66ab36] font-semibold"
                  : " hover:bg-[#66ab36] transition duration-300"
              }`}
            >
              {home}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsHidden((c) => !c)}
              href={"/services"}
              className={`block text-sm px-2 py-[10vh] ${
                pathname == "/services"
                  ? " text-white bg-[#66ab36] font-semibold"
                  : pathname == "/ar/services"
                  ? " text-white bg-[#66ab36] font-semibold"
                  : " hover:bg-[#66ab36] transition duration-300"
              }`}
            >
              {services}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsHidden((c) => !c)}
              href={"/about"}
              className={`block text-sm px-2 py-[10vh] ${
                pathname == "/about"
                  ? " text-white bg-[#66ab36] font-semibold"
                  : pathname == "/ar/about"
                  ? " text-white bg-[#66ab36] font-semibold"
                  : " hover:bg-[#66ab36] transition duration-300"
              }`}
            >
              {about}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsHidden((c) => !c)}
              href={"/contact"}
              className={`block text-sm px-2 py-[10vh] ${
                pathname == "/contact"
                  ? " text-white bg-[#66ab36] font-semibold"
                  : pathname == "/ar/contact"
                  ? " text-white bg-[#66ab36] font-semibold"
                  : " hover:bg-[#66ab36] transition duration-300"
              }`}
            >
              {contact}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BottomNav;
