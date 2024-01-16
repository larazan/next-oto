"use client"

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import nail1 from "@/assets/news/nail1.png";
import nail2 from "@/assets/news/nail2.png";
import nail3 from "@/assets/news/nail3.png";
import nail4 from "@/assets/news/nail4.png";
import nail5 from "@/assets/news/nail5.png";
import nail6 from "@/assets/news/nail6.png";
import nail7 from "@/assets/news/nail7.png";

const TipsHome = () => {
  let scrl = useRef(null);
  const shiftN = 230;
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const nailData = [
    {
      title: "The Top Trending Nail Designs for 2024",
      category: "Nails",
      img: nail1,
    },
    {
      title: "How to Manifest Your 2024 Goals Using Nail Polish Colors",
      category: "Nails",
      img: nail2,
    },
    {
      title: "Everything You Need to Know About Getting 3D Nail Art",
      category: "Nails",
      img: nail3,
    },
    {
      title:
        "I‘m Obsessed With Camila Cabello's Black-and-White ‘Vintage Moon’ Manicure",
      category: "Nails",
      img: nail4,
    },
    {
      title:
        "Megan Fox's Blood Red Halloween Manicure Has the Most Creepy Nail Art",
      category: "Nails",
      img: nail5,
    },
    {
      title:
        "Vanessa Hudgens’s Copper Nails Are the Perfect Trend for Long-Lasting Manis",
      category: "Nails",
      img: nail6,
    },
    {
      title:
        "Camila Cabello’s ‘Cinnamon Cider Twist’ Mani is Perfect for Party Season",
      category: "Nails",
      img: nail7,
    },
  ];

  return (
    <>
      <div className="h-max mx-auto w-full lg:w-1/2 flex flex-col space-y-3 px-3 md:px-6 lg:px-0 py-6 md:py-10 justify-center2 items-center2 bg-white">
        <div className="flex flex-row2 justify-between mx-auto w-full md:w-12/12 space-x-6 items-center">
          <div className="flex mx-auto py-2 w-full space-y-2 items-center justify-center hover:opacity-80">
            <span className="text-lg tracking-tight capitalize md:text-2xl font-bold text-[#333333]">
                More from Beauty
            </span>
          </div>
          {/* <div className="flex space-x-1">
            <div
              onClick={() => slide(-shiftN)}
              className={`p-1 rounded-full  shadow-md text-black  ${scrollX !== 0 ? 'bg-[#fd9c0c] cursor-pointer' : 'bg-orange-300 opacity-50 cursor-default'} border-2 border-gray-800 shadow-menu`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <div
              onClick={() => slide(+shiftN)}
              className={`p-1 rounded-full  shadow-md text-black  ${!scrolEnd ? 'bg-[#fd9c0c] cursor-pointer' : 'bg-orange-300 opacity-50 cursor-default'} border-2 border-gray-800 shadow-menu`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </div>
          </div> */}
        </div>

        <div className="relative flex flex-row mx-auto w-full md:w-12/12 justify-between items-center">
          {scrollX !== 0 && (
            <div className="top-[40%] left-0">
              <button
                onClick={() => slide(-shiftN)}
                className="none absolute top-[35%] -left-0 md:-left-3 z-10 cursor-pointer rounded-r px-2 py-2 bg-[#f2ffc2] hover:bg-[#e8f8b0] border shadow text-[#333333]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          )}
          {!scrolEnd && (
            <div className="top-[40%] right-0">
              <button
                onClick={() => slide(+shiftN)}
                className="none absolute top-[35%] -right-0 md:-right-3 z-10 cursor-pointer rounded-l px-2 py-2 bg-[#f2ffc2] hover:bg-[#e8f8b0] border  shadow text-[#333333]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          )}
          {/*  */}
          <div
            className="mb-[1em] flex flex-row overflow-x-auto no-scrollbar scroll-smooth"
            ref={scrl}
            onScroll={scrollCheck}
          >
            {nailData.map((data, index) => {
              return (
                <div
                  className="transition-all duration-150 flex mr-[1em] "
                  key={index}
                >
                  <div className="flex flex-col space-y-2 w-[230px] md:w-[230px]  bg-white border2 shadow2 ">
                    <div className="relative w-full bg-gray-200 flex ">
                      <Link
                        href="/detail"
                        className="flex w-full "
                      >
                        <div className="">
                          <Image src={data.img} alt="" className="object-cover " />
                        </div>
                      </Link>{" "}
                    </div>
                    <div className="flex flex-col space-y-2 justify-center2 items-center2">
                      <div className="flex items-center flex-wrap py-0.5 ">
                        <div className="text-[13px] font-semibold text-[#eb002f] capitalize">
                          {data.category}
                        </div>
                      </div>
                      <Link
                        href={"/blogs/blog-one"}
                        className="text-gray-900 hover:underline underline-offset-2"
                      >
                        <span className="my-[0.25em] mx-[0em] overflow-hidden break-words text-md md:text-2xl leading-tight md:leading-tight font-semibold">
                          {data.title}
                        </span>
                      </Link>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-semibold text-[#757575]">
                          By Brigitt Earley
                        </p>
                        <span className="text-xs text-gray-900">
                          January 6, 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TipsHome;
