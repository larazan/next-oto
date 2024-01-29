import React from "react";
import Link from "next/link";
import Image from "next/image";

import flag from "@/assets/icons/i.png"

const FormulaNav = () => {
  return (
    <>
      <div className="shadow-lg bg-[#f1f2f3] sticky top-0 z-20 border-b2">
        <div className="inline-flex2 flex-nowrap mx-auto w-full md:w-full px-4">
          <ul className="flex overflow-x-auto no-scrollbar w-full items-center md:justify-center2 md:space-x-3  tracking-tight font-semibold2 text-sm text-[#b6cce2] shadow2">
            <li className="flex items-center space-x-1 min-w-max nav-item md:-mt-px pr-2 border-r border-gray-400">
                <Image src={flag} alt="" className="w-6 object-cover" />
                <span className="text-sm font-semibold text-black">F1</span>
            </li>
            <li className="flex min-w-max nav-item md:-mt-px">
              <Link
                className="flex items-center md:space-x-2 p-3 cursor-pointer border-b-2 border-red-500"
                href={"/"}
              >
                <span className="text-xs md:text-sm md:inline text-gray-900 font-semibold2">
                  News
                </span>
              </Link>
            </li>
            <li className="min-w-max nav-item md:-mt-px">
              <Link
                className="flex items-center md:space-x-2 p-3 cursor-pointer border-b-2 border-[#f1f2f3]"
                href={"/"}
              >
                <span className="text-xs md:text-sm md:inline text-gray-900 font-semibold2">
                  Calendar & Results
                </span>
              </Link>
            </li>
            <li className="min-w-max nav-item md:-mt-px">
              <Link
                className="flex items-center md:space-x-2 p-3 cursor-pointer border-b-2 border-[#f1f2f3]"
                href={"/"}
              >
                <span className="text-xs md:text-sm md:inline text-gray-900 font-semibold2">
                  Standing
                </span>
              </Link>
            </li>
            <li className="min-w-max nav-item   md:-mt-px">
              <Link
                className="flex items-center md:space-x-2 p-3 cursor-pointer border-b-2 border-[#f1f2f3]"
                href={"/"}
              >
                <span className="text-xs md:text-sm md:inline text-gray-900 font-semibold2">
                  Teams
                </span>
              </Link>
            </li>
            <li className="min-w-max nav-item   md:-mt-px">
              <Link
                className="flex items-center md:space-x-2 p-3 cursor-pointer border-b-2 border-[#f1f2f3]"
                href={"/"}
              >
                <span className="text-xs md:text-sm md:inline text-gray-900 font-semibold2">
                  Drivers
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FormulaNav;
