import React from "react";
import Image from "next/image";
import Link from "next/link";

import product from "@/assets/blogs/blog.png";
import blog1 from "@/assets/blogs/blog10.png";
import blog2 from "@/assets/blogs/blog7.png";
import blog3 from "@/assets/blogs/blog4.png";
import blog4 from "@/assets/blogs/blog6.png";

const Hero = () => {
  return (
    <>
     <div
        data-section="hero-sectionIndex=0"
        className="relative w-full flex flex-col justify-center md:h-[480px] mx-auto h-[193px] xs:items-center xs:justify-center md:items-start md:justify-center text-white"
      >
        <div className="absolute w-full h-full">
          <div className="w-full h-full">
            <div className="hidden md:block md:w-full md:h-full relative animate-[fadeIn_0.3s_ease-out]">
              <Image src={product} alt="" className="object-cover h-full" />
            </div>
          </div>
        </div>
        <div className="z-10 h-full flex flex-col justify-center bg-black/70 items-center text-center  xs:my-[12px] md:my-[48px] px-[12px] md:px-[30px] md:w-[380px] relative xs:items-center xs:text-center xs:justify-center md:items-start md:text-left md:justify-center">
          <h3 className="font-bold mb-[12px] text-2xl md:text-h5 md:mb-[20px]">
          Here's More Of That Scion XD86D Four-Door Concept Based On The 86 Coupe
          </h3>
          <div className=" leading-tight text-md md:text-lg mb-[8px] md:mb-[24px]">
            <div>
              <div>
                <p className="leading-tight">Would you prefer if the Scion FR-S, Toyota 86, and Subaru BRZ had a more practical shooting brake body?</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3"></div>
        </div>
      </div>

      <div className="bg-white w-full flex items-center py-3">
        <div className="flex flex-col items-center justify-center mx-auto w-11/12 ">
          {/* <div className="flex flex-col w-full">
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
          </div> */}
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
                    Ford Is Slowing F-150 Lightning Production Again
                    </Link>
                  </h3>{" "}
                  <span className="pt-1 font-semibold uppercase text-[11px] text-gray-900">
                    by todd lassa
                  </span>
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
                    Will Honda Finally Capitalize on EVs in 2024?
                    </Link>
                  </h3>{" "}
                  <span className="pt-1 font-semibold uppercase text-[11px] text-gray-900">
                    by todd lassa
                  </span>
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
                    2024 Kia EV9 Brings Comfort and 304 Miles of Range
                    </Link>
                  </h3>{" "}
                  <span className="pt-1 font-semibold uppercase text-[11px] text-gray-900">
                    by todd lassa
                  </span>
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
                    Was 2023 an Awful Year for EV Sales? They Grew 46%
                    </Link>
                  </h3>{" "}
                  <span className="pt-1 font-semibold uppercase text-[11px] text-gray-900">
                    by todd lassa
                  </span>
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
