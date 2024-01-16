"use client"

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import news1 from "@/assets/news/news1.png";
import news4 from "@/assets/news/news4.png";
import news5 from "@/assets/news/news5.png";
import news6 from "@/assets/news/news6.png";
import news7 from "@/assets/news/news7.png";
import news8 from "@/assets/news/news8.png";
import news9 from "@/assets/news/news9.png";
import news10 from "@/assets/news/news10.png";
import news11 from "@/assets/news/news11.png";
import news12 from "@/assets/news/news12.png";
import news13 from "@/assets/news/news13.png";

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
    // {
    //   title:
    //     "Anine Bing on Her Work Uniform and the Book Every Creative Needs to Read",
    //   category: "Doing the work",
    //   img: news1,
    // },
    // {
    //   title:
    //     "Every Time Pamela Anderson Has Gone Makeup-Free: See All Her All-Natural Looks",
    //   category: "Celebrity Beauty",
    //   img: news4,
    // },
    // {
    //   title:
    //     "The Benefits of Walking Are Greater If You Do This One Simple Thing",
    //   category: "Doing the work",
    //   img: news5,
    // },
    // {
    //   title:
    //     "Goodbye, Oat Milk: Since Learning This, I No Longer Add It to My Coffee",
    //   category: "Doing the work",
    //   img: news6,
    // },
    // {
    //   title: "17 Effective Dark Spot Correctors, According to Dermatologists",
    //   category: "Doing the work",
    //   img: news7,
    // },
    {
      title:
        "Not Getting 8 Hours of Sleep? This Wellness Hack Could Make Up for It",
      category: "Doing the work",
      img: news8,
    },
    {
      title: "The Best Energy-Boosting Foods to Combat Winter Sluggishness",
      category: "Doing the work",
      img: news9,
    },
    {
      title: "5 Ways to Reset Your Body and Mind After a Tiring Weekend",
      category: "Doing the work",
      img: news10,
    },
    {
      title:
        "3 Healthy Wellness Shots to Start Your Day Right, Courtesy of Nutritionists",
      category: "Doing the work",
      img: news11,
    },
    {
      title:
        "How Much Water Should You Drink in a Day? Experts Set the Record Straight",
      category: "Doing the work",
      img: news12,
    },
    {
      title:
        "The Secret to Better Gut Health and Boosted Brain Function? It Could Be Your Daily Coffee",
      category: "Doing the work",
      img: news13,
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
