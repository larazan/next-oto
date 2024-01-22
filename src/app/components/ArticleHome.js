import React from "react";
import Link from "next/link";
import Image from "next/image";

import blog from "@/assets/blogs/blog.png";
import blog1 from "@/assets/blogs/blog1.png";
import blog4 from "@/assets/blogs/blog4.png";
import blog5 from "@/assets/blogs/blog5.png";
import blog6 from "@/assets/blogs/blog6.png";
import blog7 from "@/assets/blogs/blog7.png";
import blog8 from "@/assets/blogs/blog8.png";
import blog9 from "@/assets/blogs/blog9.png";
import blog10 from "@/assets/blogs/blog10.png";

const ArticleHome = () => {
  const blogData = [
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
      <div className="flex bg-white min-h-screen pt-1 pb-10 md:pt-[1px]">
        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col items-center2 justify-center2 relative">
            <div className="flex flex-1 flex-col mx-auto pb-18 max-w-md md:max-w-4xl ">
              <section className="w-full mx-auto  mt-10 md:mt-10 px-5 ">
                {/* <div>
                  <div className="py-6">
                    <Image src={blog} alt="" className="w-full" />
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
                </div> */}
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
                          few surprises but still delivered big blog: The
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
                      {blogData.map((data, index) => {
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
                                    className="h-full w-full rounded2 object-cover"
                                    style={{ color: "transparent" }}
                                  />
                                </Link>
                              </div>
                              <div className=" flex w-2/3 md:max-w-[55%] flex-1 flex-col space-y-1 md:space-y-2">
                                <div className="flex items-center flex-wrap py-0.5 ">
                                  <div className="text-[14px] font-bold text-[#eb002f] uppercase">
                                    {data.category}
                                  </div>
                                </div>
                                <Link
                                  href={"/blogs/blog-one"}
                                  className="text-gray-900 hover:underline underline-offset-2"
                                >
                                  <span className="my-[0.25em] mx-[0em] overflow-hidden break-words text-md md:text-2xl leading-tight md:leading-tight font-bold">
                                    {data.title}
                                  </span>
                                </Link>
                                <span className="hidden md:block text-md text-gray-900 md:text-md leading-tight md:leading-tight tracking-tight break-words text-justify">
                                  The next generation of the A6 transitions to
                                  an all-electric powertrain, providing a range
                                  of up to 435 miles and rapid 270 kW charging
                                  capability
                                </span>
                                <div className="flex flex-row space-x-3">
                                  <p className="text-sm font-semibold text-[#757575]">
                                    By Brigitt Earley
                                  </p>
                                  <div className="flex space-x-1 items-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                    <span className="text-[11px] text-gray-900">
                                      28
                                    </span>
                                  </div>

                                  {/* <span className="text-xs text-gray-900">
                                    January 6, 2024
                                  </span> */}
                                </div>
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
                <div className="mt-5 w-full rounded py-3 text-[#333333] hover:text-white text-center bg-[#ffc84e] hover:bg-gray-500 cursor-pointer">
                  <span className="font-bold ">Read more</span>
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
