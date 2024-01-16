import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import GoTop from "../components/GoTop";
import Header from "../components/Header";
import Footer from "../components/Footer";

import news from "@/assets/news/news.png";
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

const ArticleHome = () => {
  const newsData = [
    {
      title:
        "Anine Bing on Her Work Uniform and the Book Every Creative Needs to Read",
      category: "Doing the work",
      img: news1,
    },
    {
      title:
        "Every Time Pamela Anderson Has Gone Makeup-Free: See All Her All-Natural Looks",
      category: "Celebrity Beauty",
      img: news4,
    },
    {
      title:
        "The Benefits of Walking Are Greater If You Do This One Simple Thing",
      category: "Doing the work",
      img: news5,
    },
    {
      title:
        "Goodbye, Oat Milk: Since Learning This, I No Longer Add It to My Coffee",
      category: "Doing the work",
      img: news6,
    },
    {
      title: "17 Effective Dark Spot Correctors, According to Dermatologists",
      category: "Doing the work",
      img: news7,
    },
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
      <div className="flex bg-white min-h-screen pt-5 pb-10 md:pt-[10px]">
        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col items-center justify-center relative">
            <div className="flex flex-1 flex-col pb-18 max-w-md md:max-w-2xl ">
              <section className="w-full mx-auto  mt-10 md:mt-10 px-5 ">
                <div>
                  <div className="py-6">
                    <Image src={news} alt="" className="w-full" />
                  </div>

                  <Link
                    href={"/blogs/3"}
                    className="flex text-3xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-black hover:underline underline-offset-2"
                  >
                    <span className="text-center">
                      I Tried PRF Fillers for My 30th Birthday—Here’s What I
                      Wish I’d Known First
                    </span>
                  </Link>
                  <p className="max-w-3xl mt-6 text-lg font-medium md:text-xl lg:text-2xl text-black leading-snug">
                    People ask all the time – is the ZZ plant poisonous? Here’s
                    the details! ZZ plants known by the botanical name of
                    Zamioculcas Zamiifolia have become a very popular houseplant
                    over..
                  </p>
                  <div className="flex flex-col py-4 items-center justify-center space-y-1">
                    <p className="text-sm font-semibold text-[#757575]">
                      By Brigitt Earley
                    </p>
                    <span className="text-xs text-gray-900">
                      January 6, 2024
                    </span>
                  </div>
                  <div className="h-px bg-mercury"></div>
                </div>
                <div>
                  {/* tweet */}
                  {/* <div className="flex min-w-0 flex-1 flex-col py-2">
                    <div className="w-full rounded p-4 bg-[##14ada8]">
                      <div className="flex flex-col space-y-1 md:space-y-2">
                        <Link
                          href={"/blogs/3"}
                          className="my-[0.25em] mx-[0em] overflow-hidden break-words text-md md:text-lg leading-tight md:leading-tight font-semibold text-gray-900 hover:text-indigo-600"
                        >
                          Apple&apos;s iPhone 15 Event Recap: New Phones, New
                          Watches, and USB-C
                        </Link>
                        <span className="text-sm md:text-lg leading-tight md:leading-tight break-words text-justify">
                          Apple&apos;s annual fall product-launch event brought
                          few surprises but still delivered big news: The
                          company unveiled four iPhone 15 models
                        </span>
                      </div>
                      <div className="pt-2 ">
                        <Tweet
                          id="1724501306109579518"
                          className="w-1/2 md:w-full"
                        />
                      </div>
                    </div>
                    <div className="h-px bg-mercury"></div>
                  </div> */}
                  <div className="flex w-full space-x-4">
                    <div>
                      {newsData.map((data, index) => {
                        return (
                          <div
                            className="text-tundora no-underline"
                            key={index}
                          >
                            <div className="my-[1em] mx-[0em] flex md:items-center w-full bg-transparent leading-[1.25em]">
                              <div className="m-0 mr-2 md:mr-5 flex aspect-[16/9] md:aspect-[16/9] h-fit flex-1 items-center justify-center">
                                <Link href={"/blogs/blog-one"}>
                                  <Image
                                    alt=""
                                    src={data.img}
                                    className="h-full w-full rounded object-cover"
                                    style={{ color: "transparent" }}
                                  />
                                </Link>
                              </div>
                              <div className=" flex w-2/3 md:max-w-[55%] flex-1 flex-col space-y-1 md:space-y-2">
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
                                {/* <span className="hidden md:block text-sm md:text-lg leading-tight md:leading-tight tracking-tight break-words text-justify">
                                A common topic among Aglaonema owners is “My Chinese Evergreen has been one of my happiest plants, but recently some of the bottom leaves have been yellowing. What’s wrong? 
                                </span> */}
                              </div>
                            </div>
                            <div className="h-px bg-mercury"></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* load more */}
                <div className="mt-5 w-full rounded-2xl py-3 text-center bg-[#f2ffc2] hover:bg-[#e8f8b0] cursor-pointer">
                  <span className="font-semibold text-[#333333]">
                    Load more
                  </span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleHome;
