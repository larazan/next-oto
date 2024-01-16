import React from "react";
import Link from "next/link";
import Image from "next/image";

import blog1 from "@/assets/blogs/fitness1.png";
import blog2 from "@/assets/blogs/fitness2.png";
import blog3 from "@/assets/blogs/fitness3.png";
import blog4 from "@/assets/blogs/fitness4.png";

export default function TrendingHome() {
  return (
    <>
      <div className="bg-[#f2f0e8]">
        <div className="flex flex-col mx-auto items-center justify-center w-11/12">
          <div className="flex w-full py-4 items-center justify-center border-b border-gray-400">
            <span className="text-gray-900 text-2xl font-semibold">Trending Stories</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 mb-4 mx-auto w-full px-3 md:px-0 ">
            <div className="">
              <div className=" bg-transparent group flex flex-col overflow-hidden ">
                <Link href="/detail" className="relative">
                  <Image src={blog1} alt="" className="object-cover" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-0 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <h3 className="font-bold text-base md:text-md text-[#333333] leading-tight hover:underline underline-offset-2">
                    <Link href="/detail">
                      The 17 Best Butt Exercises For A Super-Toned Tush
                    </Link>
                  </h3>{" "}
                </div>
              </div>
            </div>
            <div className="">
              <div className=" bg-transparent group flex flex-col overflow-hidden ">
                <Link href="/detail" className="relative">
                  <Image src={blog3} alt="" className="object-cover" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-0 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <h3 className="font-bold text-base md:text-md text-[#333333] leading-tight hover:underline underline-offset-2">
                    <Link href="/detail">
                    These 20 Exercises Will Sculpt Your Shoulders
                    </Link>
                  </h3>{" "}
                </div>
              </div>
            </div>
            <div className="">
              <div className=" bg-transparent group flex flex-col overflow-hidden ">
                <Link href="/detail" className="relative">
                  <Image src={blog2} alt="" className="object-cover" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-0 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <h3 className="font-bold text-base md:text-md text-[#333333] leading-tight hover:underline underline-offset-2">
                    <Link href="/detail">
                    20 Dumbbell Exercises For Seriously Sculpted Arms
                    </Link>
                  </h3>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
