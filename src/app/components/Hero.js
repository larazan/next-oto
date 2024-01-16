import React from "react";
import Image from "next/image";
import Link from "next/link";

import product from "@/assets/img/lipstick.png";
import blog1 from "@/assets/blogs/blog10.png";
import blog2 from "@/assets/blogs/blog7.jpg";
import blog3 from "@/assets/blogs/blog4.jpg";
import blog4 from "@/assets/blogs/blog6.jpg";

const Hero = () => {
  return (
    <>
      <div className="bg-white w-full flex items-center py-3">
        <div className="flex flex-col items-center justify-center mx-auto w-11/12 ">
          <div className="flex flex-col w-full">
            <Image src={product} alt="" className="w-full object-cover" />
            <div className="flex flex-col space-y-2 items-center justify-center px-6 md:px-20 py-6 text-center bg-[#f7623b] ">
              <span className="text-white text-2xl md:text-4xl font-bold">
                Why Do I Crave Sugar After Cutting Out Alcohol? The Science
                Behind Your Hankering For Sweets
              </span>
              <span className="text-lg text-white leading-tight">
                You’ll need to replace the dopamine hit you get from that glass
                of wine.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-4 mx-auto w-full px-3 md:px-0 ">
            <div className="">
              <div className=" bg-white group flex flex-col overflow-hidden ">
                <Link href="/detail" className="relative">
                  <Image src={blog1} alt="" className="object-cover" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-0 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <h3 className="font-bold text-base md:text-md text-[#333333] leading-tight hover:underline underline-offset-2">
                    <Link href="/detail">
                    Your January 2024 Horoscope Is Here
                    </Link>
                  </h3>{" "}
                </div>
              </div>
            </div>
            <div className="">
              <div className=" bg-white group flex flex-col overflow-hidden ">
                <Link href="/detail" className="relative">
                  <Image src={blog2} alt="" className="object-cover" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-0 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <h3 className="font-bold text-base md:text-md text-[#333333] leading-tight hover:underline underline-offset-2">
                    <Link href="/detail">
                    The Austin Evolution
                    </Link>
                  </h3>{" "}
                </div>
              </div>
            </div>
            <div className="">
              <div className=" bg-white group flex flex-col overflow-hidden ">
                <Link href="/detail" className="relative">
                  <Image src={blog3} alt="" className="object-cover" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-0 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <h3 className="font-bold text-base md:text-md text-[#333333] leading-tight hover:underline underline-offset-2">
                    <Link href="/detail">
                      Sausage And Fennel Chickpea Rigatoni Recipe
                    </Link>
                  </h3>{" "}
                </div>
              </div>
            </div>
            <div className="">
              <div className=" bg-white group flex flex-col overflow-hidden ">
                <Link href="/detail" className="relative">
                  <Image src={blog4} alt="" className="object-cover" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-0 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <h3 className="font-bold text-base md:text-md text-[#333333] leading-tight hover:underline underline-offset-2">
                    <Link href="/detail">
                    Join The WH Strength Transformation Challenge
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
};

export default Hero;
