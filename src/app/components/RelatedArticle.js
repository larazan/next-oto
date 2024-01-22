"use client"

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import blog1 from "@/assets/blogs/blog1.png";
import blog4 from "@/assets/blogs/blog4.png";
import blog5 from "@/assets/blogs/blog5.png";
import blog6 from "@/assets/blogs/blog6.png";
import blog7 from "@/assets/blogs/blog7.png";
import blog8 from "@/assets/blogs/blog8.png";
import blog9 from "@/assets/blogs/blog9.png";
import blog10 from "@/assets/blogs/blog10.png";


const RelatedArticle = () => {
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

  const newsData = [
    {
      title:
        "Anine Bing on Her Work Uniform and the Book Every Creative Needs to Read",
      category: "News",
      img: blog1,
    },
    {
      title:
        "Every Time Pamela Anderson Has Gone Makeup-Free: See All Her All-Natural Looks",
      category: "New Car",
      img: blog4,
    },
    {
      title:
        "The Benefits of Walking Are Greater If You Do This One Simple Thing",
      category: "News",
      img: blog5,
    },
    {
      title:
        "Goodbye, Oat Milk: Since Learning This, I No Longer Add It to My Coffee",
      category: "News",
      img: blog6,
    },
    {
      title: "17 Effective Dark Spot Correctors, According to Dermatologists",
      category: "News",
      img: blog7,
    },
    {
      title:
        "Not Getting 8 Hours of Sleep? This Wellness Hack Could Make Up for It",
      category: "News",
      img: blog8,
    },
    {
      title: "The Best Energy-Boosting Foods to Combat Winter Sluggishness",
      category: "News",
      img: blog9,
    },
    {
      title: "5 Ways to Reset Your Body and Mind After a Tiring Weekend",
      category: "News",
      img: blog10,
    },
  ];

  return (
    <>
      <div className="flex w-full py-6 md:px-0 px-4 bg-white">
        <div className="flex flex-col space-y-0 w-full">
          <div className="flex flex-row justify-between  items-center">
            <p className=" text-2xl font-bold md:text-2xl lg:text-2xl text-black">
              Read More
            </p>
          </div>

          <div className="flex w-full space-x-4">
                    <div>
                      {newsData.map((data, index) => {
                        return (
                          <div
                            className="text-tundora no-underline"
                            key={index}
                          >
                            <div className="my-[1em] mx-[0em] flex md:items-center w-full bg-transparent leading-[1.25em]">
                              
                              <div className=" flex w-8/12 md:max-w-[75%]2 flex-1 flex-col space-y-1 md:space-y-2">
                                <div className="flex items-center flex-wrap py-0.5 ">
                                  <div className="text-[13px] font-semibold text-[#eb002f] capitalize">
                                    {data.category}
                                  </div>
                                </div>
                                <Link
                                  href={"/blogs/blog-one"}
                                  className="text-gray-900 hover:underline underline-offset-2"
                                >
                                  <span className="my-[0.25em] mx-[0em] overflow-hidden break-words text-md md:text-md leading-tight md:leading-tight font-semibold">
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
                                {/* <span className="hidden md:block text-sm md:text-lg leading-tight md:leading-tight tracking-tight break-words text-justify">
                                A common topic among Aglaonema owners is “My Chinese Evergreen has been one of my happiest plants, but recently some of the bottom leaves have been yellowing. What’s wrong? 
                                </span> */}
                              </div>
                              <div className="flex w-4/12 m-0 ml-2 md:ml-5 flex h-26 w-26 flex-12 items-center justify-center">
                                <Link href={"/blogs/blog-one"}>
                                  <Image
                                    alt=""
                                    src={data.img}
                                    className="h-full2 w-full2 rounded object-cover"
                                    style={{ color: "transparent" }}
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="h-px bg-mercury"></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

          
        </div>
      </div>
    </>
  );
};

export default RelatedArticle;
