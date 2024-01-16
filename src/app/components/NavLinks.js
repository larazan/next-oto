"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import icon1 from "@/assets/menu_icon_generate.svg";
import icon2 from "@/assets/menu_icon_explore.svg";
import icon3 from "@/assets/menu_icon_contrast_checker.svg";
import icon4 from "@/assets/menu_icon_image_picker.svg";
import icon5 from "@/assets/menu_icon_visualizer.svg";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const menuData = [
    "News",
    "Reviews",
    "Food",
    "Travel",
    "Gifts",

  ];

  return (
    <>
      <div className="z-30">
        <div className="px-0 text-left  group ">
          <h1
            className="py-7  flex cursor-pointer justify-between items-center md:pr-1 pr-5 group text-sm font-semibold font-mabrybold text-gray-900"
            onClick={() => {
              setHeading("");
              setSubHeading("");
            }}
          >
            Menu
          </h1>

          <div>
            <div className="w-[500px] absolute top-12 right-5 shadow-md border rounded-2xl hidden group-hover:md:block hover:md:block">
              <div className="w-full bg-white rounded-2xl flex  flex-row space-x-2">
                <div className="w-2/3 bg-white rounded-2xl">
                  <div className="flex flex-col space-y-1 p-3">
                    <Link
                      href={"/category"}
                      className="flex py-1 px-2 rounded-lg hover:bg-green-200 items-center space-x-2 cursor-pointer"
                    >
                      <div className="w-12">
                        <Image src={icon1} alt="" className="" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-base font-bold text-gray-900">
                          Beauty
                        </h3>
                        <span className="text-xs text-gray-500 ">
                          Create your pallete in seconds
                        </span>
                      </div>
                    </Link>
                    <Link
                      href={"/reviews"}
                      className="flex py-1 px-2 rounded-lg hover:bg-pink-200 items-center space-x-3 cursor-pointer"
                    >
                      <div className="w-12">
                        <Image src={icon2} alt="" className="" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-base font-bold text-gray-900">
                          Style
                        </h3>
                        <span className="text-xs text-gray-500 ">
                          Create your pallete in seconds
                        </span>
                      </div>
                    </Link>
                    <Link
                      href={"/detail"}
                      className="flex py-1 px-2 rounded-lg hover:bg-yellow-200 items-center space-x-3 cursor-pointer"
                    >
                      <div className="w-12">
                        <Image src={icon3} alt="" className="" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-base font-bold text-gray-900">
                          Health
                        </h3>
                        <span className="text-xs text-gray-500 ">
                          Create your pallete in seconds
                        </span>
                      </div>
                    </Link>
                    <Link href={"/articles"} className="flex py-1 px-2 rounded-lg hover:bg-blue-200 items-center space-x-3 cursor-pointer">
                      <div className="w-12">
                        <Image src={icon4} alt="" className="" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-base font-bold text-gray-900">
                          Entertainment
                        </h3>
                        <span className="text-xs text-gray-500 ">
                          Create your pallete in seconds
                        </span>
                      </div>
                    </Link>

                    <Link href={"/articles"} className="flex py-1 px-2 rounded-lg hover:bg-[#E8E2F7] items-center space-x-3 cursor-pointer">
                      <div className="w-12">
                        <Image src={icon5} alt="" className="" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-base font-bold text-gray-900">
                          Relationship
                        </h3>
                        <span className="text-xs text-gray-500 ">
                          Create your pallete in seconds
                        </span>
                      </div>
                    </Link>
                    
                  </div>
                </div>
                <div className="w-1/3 bg-gray-100 rounded-r-2xl">
                  <div className="flex flex-col space-y-2 p-5">
                    {menuData.map((data, index) => {
                      return (
                        <Link
                          href={"/collection"}
                          className="capitalize leading-tight text-[13px] text-gray-900 hover:text-indigo-600"
                          key={index}
                        >
                          {data}
                        </Link>
                      );
                    })}

                    <Link
                      href={""}
                      className="capitalize text-[13px] text-gray-900 hover:text-indigo-600"
                    >
                      deals
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavLinks;
