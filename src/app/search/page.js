import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";
import SubscribeForm from "../components/SubscribeForm";
import NewsFeed from "../components/NewsFeed";

import product1 from "@/assets/img/product1.png";
import product2 from "@/assets/img/product2.png";
import product3 from "@/assets/img/product3.png";
import product4 from "@/assets/img/product4.png";
import polaroid from "@/assets/img/polaroid.png"


export default function Search() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <NewsFeed />
      <GoTop />

      <div className="flex bg-white min-h-screen">
        <div className="max-w-full xl:max-w-[1800px] mx-auto flex flex-col justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center items-center px-[16px] lg:px-[144px]">
            <div className="w-full h-full my-[36px] lg:my-[48px]">
              <div className=" border-[1.5px] border-solid border-[#CCCCCC] rounded-full font-sans relative">
                <div className="realative px-[28px] py-[16px]">
                  <label className="invisible absolute" for="searchInput">
                    Search
                  </label>
                  <input
                    type="text"
                    id="searchInput"
                    autofocus=""
                    placeholder="Search"
                    className="w-full outline-none border-0 focus:border-0 focus:outline-none focus:ring-0"
                    value=""
                  />
                </div>
              </div>

              <div className="relative h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-[28px] lg:mt-[64px]">
                <div className="mb-[40px] lg:mb-0">
                  <div className="flex items-baseline">
                    <h4 className="font-bold text-lg text-gray-900 mr-[12px] lg:mr-[16px]">
                      Products
                    </h4>
                    <p className="font-sans text-[#808080]">111 results</p>
                  </div>
                  <div className="flex w-full pt-[24px] pb-[24px] lg:pt-[36px] lg:pb-[37px]">
                    <div className="w-full">
                      <div>
                        <a className="z-[1]" href="/products/i2-polaroid-camera">
                          <div className="w-full max-w-full lg:h-[108px] mb-[25px] pr-12">
                            <div className="relative grid grid-cols-[108px_1fr] gap-x-[16px] lg:gap-x-[36px] z-[10] hover:z-20 max-h-[108px] cursor-pointer">
                              <div className="relative h-[108px] w-[108px] bg-[#F0F0F0]">
                                <div className="absolute h-[100%] w-[100%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] animate-[fadeIn_0.2s_ease-in-out]">
                                  <div className="w-full h-full">
                                    <div className="block md:w-full md:h-full relative animate-[fadeIn_0.3s_ease-out]">
                                      <span>
                                        <Image
                                          src={product1}
                                          className="object-cover"
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                    <div className="w-full h-full block md:hidden relative animate-[fadeIn_0.3s_ease-out]"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div className="flex-1">
                                  <h6 className="text-[17px] text-black font-semibold max-w-[90%]">
                                    Polaroid I-2 Instant Camera
                                  </h6>
                                  <p className="text-[15px] font-sans mt-[6px] lg:mt-[12px] text-[#808080] leading-tight">
                                    Designed for craft, it’s the first analog
                                    instant camera with built-in manual
                                    controls.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a className="z-[1]" href="/products/i2-polaroid-camera">
                          <div className="w-full max-w-full lg:h-[108px] mb-[25px] pr-12">
                            <div className="relative grid grid-cols-[108px_1fr] gap-x-[16px] lg:gap-x-[36px] z-[10] hover:z-20 max-h-[108px] cursor-pointer">
                              <div className="relative h-[108px] w-[108px] bg-[#F0F0F0]">
                                <div className="absolute h-[100%] w-[100%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] animate-[fadeIn_0.2s_ease-in-out]">
                                  <div className="w-full h-full">
                                    <div className="block md:w-full md:h-full relative animate-[fadeIn_0.3s_ease-out]">
                                      <span>
                                        <Image
                                          src={product2}
                                          className="object-cover"
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                    <div className="w-full h-full block md:hidden relative animate-[fadeIn_0.3s_ease-out]"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div className="flex-1">
                                  <h6 className="text-[17px] text-black font-semibold max-w-[90%]">
                                    Polaroid I-2 Instant Camera
                                  </h6>
                                  <p className="text-[15px] font-sans mt-[6px] lg:mt-[12px] text-[#808080] leading-tight">
                                    Designed for craft, it’s the first analog
                                    instant camera with built-in manual
                                    controls.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a className="z-[1]" href="/products/i2-polaroid-camera">
                          <div className="w-full max-w-full lg:h-[108px] mb-[25px] pr-12">
                            <div className="relative grid grid-cols-[108px_1fr] gap-x-[16px] lg:gap-x-[36px] z-[10] hover:z-20 max-h-[108px] cursor-pointer">
                              <div className="relative h-[108px] w-[108px] bg-[#F0F0F0]">
                                <div className="absolute h-[100%] w-[100%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] animate-[fadeIn_0.2s_ease-in-out]">
                                  <div className="w-full h-full">
                                    <div className="block md:w-full md:h-full relative animate-[fadeIn_0.3s_ease-out]">
                                      <span>
                                        <Image
                                          src={product3}
                                          className="object-cover"
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                    <div className="w-full h-full block md:hidden relative animate-[fadeIn_0.3s_ease-out]"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div className="flex-1">
                                  <h6 className="text-[17px] text-black font-semibold max-w-[90%]">
                                    Polaroid I-2 Instant Camera
                                  </h6>
                                  <p className="text-[15px] font-sans mt-[6px] lg:mt-[12px] text-[#808080] leading-tight">
                                    Designed for craft, it’s the first analog
                                    instant camera with built-in manual
                                    controls.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a className="z-[1]" href="/products/i2-polaroid-camera">
                          <div className="w-full max-w-full lg:h-[108px] mb-[25px] pr-12">
                            <div className="relative grid grid-cols-[108px_1fr] gap-x-[16px] lg:gap-x-[36px] z-[10] hover:z-20 max-h-[108px] cursor-pointer">
                              <div className="relative h-[108px] w-[108px] bg-[#F0F0F0]">
                                <div className="absolute h-[100%] w-[100%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] animate-[fadeIn_0.2s_ease-in-out]">
                                  <div className="w-full h-full">
                                    <div className="block md:w-full md:h-full relative animate-[fadeIn_0.3s_ease-out]">
                                      <span>
                                        <Image
                                          src={product4}
                                          className="object-cover"
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                    <div className="w-full h-full block md:hidden relative animate-[fadeIn_0.3s_ease-out]"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div className="flex-1">
                                  <h6 className="text-[17px] text-black font-semibold max-w-[90%]">
                                    Polaroid I-2 Instant Camera
                                  </h6>
                                  <p className="text-[15px] font-sans mt-[6px] lg:mt-[12px] text-[#808080] leading-tight">
                                    Designed for craft, it’s the first analog
                                    instant camera with built-in manual
                                    controls.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="text-gray-900 font-semibold border-b-2 border-slate-800">
                    Show all results
                  </button>
                </div>
                <div className="relative block h-full">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mr-[12px] lg:mr-[16px]">Developing</h4>
                    <div className="flex w-full py-6 lg:py-9">
                      <div className="w-full">
                        <div>
                          <Link
                            className="z-[1]"
                            href="/blogs/capture-real-life-by-edie-sunday"
                          >
                            <div className="w-full max-w-full lg:h-[108px] mb-[25px]">
                              <div className="relative grid grid-cols-[108px_1fr] gap-x-[16px] lg:gap-x-[36px] z-[10] hover:z-20 cursor-pointer">
                                <div className="relative h-[108px] w-[108px] bg-[#F0F0F0]">
                                  <div className="absolute h-[100%] w-[100%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] animate-[fadeIn_0.2s_ease-in-out]">
                                    <div className="w-full h-full">
                                      <div className="block md:w-full md:h-full relative animate-[fadeIn_0.3s_ease-out]">
                                        <span>
                                          <Image
                                            src={polaroid}
                                            className="object-cover"
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                      <div className="w-full h-full block md:hidden relative animate-[fadeIn_0.3s_ease-out]"></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <div className="flex-1">
                                    <p className="text-[13px] font-normal text-[#808080]">
                                      Mei 2, 2023
                                    </p>
                                    <h6>
                                      <p className="text-h6 text-black font-headings max-w-[90%] mt-[6px] lg:mt-[12px]">
                                        <div>
                                          <div>
                                            <h1 className="leading-tight">
                                              <strong className="font-headings ">
                                                Embracing the Imperfections
                                              </strong>
                                            </h1>
                                            <h1>
                                              <strong className="font-headings">
                                                with Edie Sunday
                                              </strong>
                                            </h1>
                                          </div>
                                        </div>
                                      </p>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mr-[12px] lg:mr-[16px]">FAQs</h4>
                    <div className="py-[24px] lg:py-[36px] w-full">
                      <div className="w-full">
                        <div
                          data-state="closed"
                          className="w-full pb-[12px] lg:pb-[16px]"
                        >
                          <button
                            type="button"
                            aria-controls="radix-26"
                            aria-expanded="false"
                            data-state="closed"
                            id="radix-27"
                            className="flex items-center justify-between w-full"
                            data-radix-collection-item=""
                          >
                            <span className="text-h6-mobile leading-6 lg:text-[20px] lg:leading-10 font-sans text-left lg:text-center text-black">
                              {" "}
                              Something else?
                            </span>
                          </button>
                          <div
                            data-state="closed"
                            id="radix-26"
                            hidden=""
                            role="region"
                            aria-labelledby="radix-27"
                            className="mt-3 lg:mt-2"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<SubscribeForm />
      <Footer />
    </>
  );
}
