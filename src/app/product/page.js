import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";

import product1 from "@/assets/products/product1.png";
import product2 from "@/assets/products/product2.png";
import product3 from "@/assets/products/product3.png";
import product4 from "@/assets/products/product4.png";
import product5 from "@/assets/products/product5.png";
import product6 from "@/assets/products/product6.png";
import product7 from "@/assets/products/product7.png";
import product8 from "@/assets/products/product8.png";
import product9 from "@/assets/products/product9.png";
import Specification from "../components/Specification";
import ReviewList from "../components/ReviewList";
import Recommended from "../components/Recommended";
import NewsFeed from "../components/NewsFeed";
import Breadcrumb from "../components/Breadcrumb";

export default function page() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <GoTop />
<NewsFeed />
<Breadcrumb />
      <div className="flex flex-col md:flex-row justify-between max-w-full h-auto pb-10 bg-white">
        <div className="w-screen h-[415px] max-w-full md:min-w-[55%] md:h-[546px] md:sticky md:top-0 z-[9]">
          <div className="flex flex-col w-full h-full bg-[#e9e9e9]">
            <div className="keen-slider h-full">
              <div className="absolute z-30 hidden top-4 lg:top-5 left-5 lg:left-[60px] font-sans text-body-detail lg:text-h6">
                <a
                  className="z-1 flex items-center"
                  href="/collections/now-plus-camera"
                >
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform rotate-90 mr-[9px] lg:mr-[14.67px] h-[5px] lg:h-[7px]"
                    stroke="#000"
                    stroke-width="2"
                    stroke-linecap="square"
                  >
                    <path d="M12 2.33203L7 7.33203L2 2.33203"></path>
                  </svg>
                  See Polaroid Now+ Cameras
                </a>
              </div>
              <div className="h-[375px] min-w-full md:h-full bg-[#e9e9e9] cursor-grab flex justify-center items-center">
                <div className="h-full w-full sm:max-w-[375px] md:max-w-[80%] p-6 lg:p-10">
                  <div className="w-full h-full">
                    <div className="w-full h-full relative animate-[fadeIn_0.3s_ease-out]">
                      <Image src={product1} alt="" className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:justify-start md:relative md:border-t-[2px] md:border-white md:border-solid bg-[#e9e9e9]">
              <button
                type="button"
                className="h-[108px] w-[72px] flex justify-center items-center bg-[#e9e9e9] border-solid border-r-[2px] border-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
              <div className="md:flex md:justify-start md:relative overflow-hidden">
                <div className="bg-[#e9e9e9] min-w-[108px] transition p-4 relative mr-[2px] border-solid border-r-[2px] border-white">
                  <div className="flex items-center justify-center w-16 h-full">
                    <div className="w-full h-full md:w-full md:h-full relative animate-[fadeIn_0.3s_ease-out]">
                      <Image src={product1} alt="" className="object-cover" />
                    </div>
                  </div>
                </div>
                <div className="bg-[#e9e9e9] min-w-[108px] transition p-4 relative mr-[2px] border-solid border-r-[2px] border-white">
                  <div className="flex items-center justify-center w-16 h-full">
                    <div className="w-full h-full md:w-full md:h-full relative animate-[fadeIn_0.3s_ease-out]">
                      <Image src={product2} alt="" className="object-cover" />
                    </div>
                  </div>
                </div>
                <div className="bg-[#e9e9e9] min-w-[108px] transition p-4 relative mr-[2px] border-solid border-r-[2px] border-white">
                  <div className="flex items-center justify-center w-16 h-full">
                    <div className="w-full h-full md:w-full md:h-full relative animate-[fadeIn_0.3s_ease-out]">
                      <Image src={product3} alt="" className="object-cover" />
                    </div>
                  </div>
                </div>
                <div className="bg-[#e9e9e9] min-w-[108px] transition p-4 relative mr-[2px] border-solid border-r-[2px] border-white">
                  <div className="flex items-center justify-center w-16 h-full">
                    <div className="w-full h-full md:w-full md:h-full relative animate-[fadeIn_0.3s_ease-out]">
                      <Image src={product4} alt="" className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="h-[108px] w-[72px] flex justify-center items-center bg-[#e9e9e9] ml-auto border-solid border-l-[2px] border-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="w-screen max-w-full md:min-w-[45%] h-auto px-3 md:px-8">
          <div className="mt-9 md:mt-7 md:pb-8">
            <div
              itemprop="offers"
              itemtype="https://schema.org/Offer"
              itemscope=""
            >
              <meta itemprop="price" content="174.99" />
              <meta itemprop="priceValidUntil" content="2025/01/23" />
              <meta
                itemprop="itemCondition"
                content="https://schema.org/NewCondition"
              />
              <meta itemprop="priceCurrency" content="EUR" />
              <meta
                itemprop="availability"
                content="https://schema.org/InStock"
              />
              <div className="flex gap-2 transition-opacity ease-in-out duration-300 opacity-100">
                <div
                  className="mb-3 md:mb-4 px-4 py-2 rounded-full text-white font-sans font-normal text-body-detail w-fit"
                  style={{ backgroundColor: "rgb(121, 190, 33)" }}
                >
                  + Free Round Strap
                </div>
              </div>
              <h1 className="font-bold text-2xl leading-8 md:text-4xl md:leading-[42px]">
                Polaroid Now+ Generation 2 Starter Set
              </h1>
              <div className="flex items-center mt-1.5 md:mt-3">
                <button
                  type="button"
                  className="flex items-center md:cursor-pointer undefined"
                  data-label="reviewStars"
                >
                  <svg
                    className=""
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 12.87L3.153 15.418L4.079 10.021L0.157 6.198L5.577 5.411L8 0.5L10.424 5.411L15.844 6.198L11.922 10.021L12.848 15.418L8 12.87Z"></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1118_49479"
                        x1="8"
                        y1="7"
                        x2="-5"
                        y2="7"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.0001" stop-color="#BFBFBF"></stop>
                        <stop offset="0.0002"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className=""
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 12.87L3.153 15.418L4.079 10.021L0.157 6.198L5.577 5.411L8 0.5L10.424 5.411L15.844 6.198L11.922 10.021L12.848 15.418L8 12.87Z"></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1118_49479"
                        x1="8"
                        y1="7"
                        x2="-5"
                        y2="7"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.0001" stop-color="#BFBFBF"></stop>
                        <stop offset="0.0002"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className=""
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 12.87L3.153 15.418L4.079 10.021L0.157 6.198L5.577 5.411L8 0.5L10.424 5.411L15.844 6.198L11.922 10.021L12.848 15.418L8 12.87Z"></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1118_49479"
                        x1="8"
                        y1="7"
                        x2="-5"
                        y2="7"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.0001" stop-color="#BFBFBF"></stop>
                        <stop offset="0.0002"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className=""
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 12.87L3.153 15.418L4.079 10.021L0.157 6.198L5.577 5.411L8 0.5L10.424 5.411L15.844 6.198L11.922 10.021L12.848 15.418L8 12.87Z"></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1118_49479"
                        x1="8"
                        y1="7"
                        x2="-5"
                        y2="7"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.0001" stop-color="#BFBFBF"></stop>
                        <stop offset="0.0002"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className=""
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#BFBFBF "
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.843 12.37L2.996 14.918L3.922 9.521L0 5.698L5.42 4.911L7.843 0L10.267 4.911L15.687 5.698L11.765 9.521L12.691 14.918L7.843 12.37Z"
                      fill="url(#paint0_linear_1118_49479)"
                    ></path>
                  </svg>

                  <span className="inline-block ml-1 font-semibold text-xs">
                    (100+)
                  </span>
                </button>
              </div>
              <div className="mt-4 font-bold text-lg flex gap-2">
                <p>€ 174.99</p>
              </div>
            </div>
            <div className="mt-7 md:mt-8">
              <div className="flex flex-col font-semibold">
                <p className="text-lg md:text-h5">Color: Black &amp; White</p>
                <ul className="flex pl-[5px] py-2 mt-[14px] md:mt-[18px] overflow-x-auto ">
                  <li data-label="in-stock" className="relative">
                    <div className="relative w-full h-full">
                      <span className="rounded-full mr-3 overflow-hidden w-[32px] h-[32px] after:absolute after:left-[-3px] after:top-[21px] after:w-[38px] after:h-[38px] after:border-2 after:border-gray-900 after:rounded-full after:z-[2]"></span>
                      <div
                        className="rounded-full mr-3 relative overflow-hidden w-[32px] h-[32px]"
                        tabindex="0"
                        role="button"
                        style={{
                          background: "rgb(255, 255, 255)",
                          border: "2px solid rgb(204, 204, 204)",
                          boxSizing: "border-box",
                        }}
                      >
                        <span className="hidden">Black &amp; White</span>
                        <span
                          className="absolute w-[20px] h-[35px] left-1 translate-x-[50%]"
                          style={{ background: "rgb(0, 0, 0)" }}
                        ></span>
                      </div>
                    </div>
                  </li>
                  <li data-label="in-stock" className="relative">
                    <div className="relative w-full h-full">
                      <span className="rounded-full mr-3 overflow-hidden w-[32px] h-[32px]"></span>
                      <div
                        className="rounded-full mr-3 relative overflow-hidden w-[32px] h-[32px]"
                        tabindex="0"
                        role="button"
                        style={{
                          background: "rgb(0, 0, 0)",
                          border: "2px solid transparent",
                          boxSizing: "border-box",
                        }}
                      >
                        <span className="hidden">Black &amp; White</span>
                        <span
                          className="absolute w-[20px] h-[35px] left-1 translate-x-[50%]"
                          style={{ background: "transparent" }}
                        ></span>
                      </div>
                    </div>
                  </li>
                  <li data-label="in-stock" className="relative">
                    <div className="relative w-full h-full">
                      <span className="rounded-full mr-3 overflow-hidden w-[32px] h-[32px]"></span>
                      <div
                        className="rounded-full mr-3 relative overflow-hidden w-[32px] h-[32px]"
                        tabindex="0"
                        role="button"
                        style={{
                          background: "rgb(239, 56, 39)",
                          border: "2px solid transparent",
                          boxSizing: "border-box",
                        }}
                      >
                        <span className="hidden">Black &amp; White</span>
                        <span
                          className="absolute w-[20px] h-[35px] left-1 translate-x-[50%]"
                          style={{ background: "transparent" }}
                        ></span>
                      </div>
                    </div>
                  </li>
                  <li data-label="in-stock" className="relative">
                    <div className="relative w-full h-full">
                      <span className="rounded-full mr-3 overflow-hidden w-[32px] h-[32px]"></span>
                      <div
                        className="rounded-full mr-3 relative overflow-hidden w-[32px] h-[32px]"
                        tabindex="0"
                        role="button"
                        style={{
                          background: "rgb(25, 140, 217)",
                          border: "2px solid transparent",
                          boxSizing: "border-box",
                        }}
                      >
                        <span className="hidden">Black &amp; White</span>
                        <span
                          className="absolute w-[20px] h-[35px] left-1 translate-x-[50%]"
                          style={{ background: "transparent" }}
                        ></span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="font-semibold mt-7 md:mt-[30px]">
              <p className="text-lg md:text-h5">Pick your model</p>
              <ul className="flex mt-[12px] md:mt-4">
                <li>
                  <div
                    className="rounded-full mr-3 border-solid border-[2px] border-[#000] bg-white text-black transition-colors ease-out duration-300 hover:bg-black hover:text-white hover:border-solid"
                    tabindex="0"
                    role="button"
                  >
                    <a
                      className="flex justify-center items-center px-7 py-4 w-auto h-auto md:w-auto md:h-auto font-bold text-h6"
                      href="/"
                    >
                      Single
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    className="rounded-full mr-3 border-solid border-[2px] bg-black text-white border-black"
                    tabindex="0"
                    role="button"
                  >
                    <a
                      className=" flex justify-center items-center px-7 py-4 w-auto h-auto md:w-auto md:h-auto font-bold text-h6"
                      href="/"
                    >
                      Bundle
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="font-headings flex flex-col mt-9 md:mt-10">
              <div className="flex mt-4">
                <button
                  type="button"
                  className="text-h6 font-bold rounded-[100px] transition-[all] duration-300 ease-out cursor-pointer bg-black text-white border-2 border-black hover:bg-white hover:text-black hover:border-solid py-4 px-7 flex-1"
                >
                  Add to bag
                </button>
                <button
                  type="button"
                  className="w-[60px] h-[60px] rounded-full border-solid border-[2px] border-[#F0F0F0] flex justify-center items-center ml-2 md:ml-4"
                >
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 19L9.55 17.7052C4.4 13.1243 1 10.103 1 6.3951C1 3.37384 3.42 1 6.5 1C8.24 1 9.91 1.79455 11 3.05014C12.09 1.79455 13.76 1 15.5 1C18.58 1 21 3.37384 21 6.3951C21 10.103 17.6 13.1243 12.45 17.715L11 19Z"
                      fill="white"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="square"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-9 md:mt-10">
              <ul className="flex flex-col gap-3">
                <li className="flex items-center">
                  <div className="flex rounded-full border border-black p-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className="font-sans text-h6 ml-3 leading-tight">
                    Mobile connectivity to unlock more creative features through
                    Polaroid App
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="flex rounded-full border border-black p-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className="font-sans text-h6 ml-3">
                    Classic look made of 40% recycled materials
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="flex rounded-full border border-black p-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className="font-sans text-h6 ml-3">
                    Works with our iconic full size Polaroid film
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="flex rounded-full border border-black p-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className="font-sans text-h6 ml-3">
                    Comes with 5 lens filters
                  </p>
                </li>
              </ul>
            </div>
            <Specification />
          </div>
        </div>
      </div>

      <ReviewList />
      <Recommended />

      <Footer />
    </>
  );
}
