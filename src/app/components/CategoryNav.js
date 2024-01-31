"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

const CategoryNav = () => {
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

  const categoryData = [
    "Air filter",
    "Air intake",
    "Batteries",
    "Body kit",
    "Brakes",
    "Bumper",
    "Cooling",
    "Deflector",
    "Drivetrain",
    "Exhaust",
    "Exterior",
    "Fabrication",
    "Trim",
    "Floor Mats",
    "Gauges",
    "Grilles",
    "Accessories",
    "Lights",
    "Oils & Oil Filters",
    "Chips",
    "Roof",
    "Safety",
    "Tires",
    "Velg",
    "Clean Kit",
  ]

  return (
    <>
      <div className="h-14 bg-[#f3f4f3] shadow border-y2">
        <nav className="grid-container relative h-full px-3 lg:px-0 mx-auto w-11/12">
          <button
            className={`absolute left-2 top-4 z-20 flex h-6 w-6 items-center justify-center bg-black/20 ${
              scrollX !== 0 ? "hover:bg-black/50" : " cursor-default"
            }  md:-left-2 `}
            onClick={() => slide(-shiftN)}
          >
            <svg
              className="text-white h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <ul
            className="scrollbar-fix no-scrollbar flex h-full w-full flex-row items-center justify-between2 overflow-y-scroll whitespace-nowrap"
            ref={scrl}
            onScroll={scrollCheck}
          >
            <li>
              <a href="/collections/accessories">
                <div className="py-4 w-[109px] max-w-[109px] min-h-[64px] flex flex-col justify-center items-center h-full bg-[#198cd9]">
                  <div className="flex justify-center">
                    <span className="text-[13px] lg:text-[15px] font-sans block text-center text-white">
                      All Accessories
                    </span>
                  </div>
                </div>
              </a>
            </li>
            {categoryData.map((data, index) => {
              return (
                <li key={index}>
              <Link href="/collections/polaroid-straps">
                <div className="py-4 w-[109px] max-w-[109px] min-h-[64px] flex flex-col justify-center items-center h-full hover:bg-white">
                  <div className="flex justify-center">
                    <span className="text-[13px] lg:text-[15px] font-sans block text-center text-black">
                      {data}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
              )
            })}
            
            
            {/* <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm font-bold text-sold-out hover:border-gray-400 border-sold-out text-sold-out"
                href="/en/shop/all-plnts"
              >
                <span>All Beauty</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sold-out hover:border-gray-400"
                href="/en/shop/babyplnts-home"
              >
                <span>Skincare</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sold-out hover:border-gray-400"
                href="/en/shop/new-releases"
              >
                <span>Hair</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sold-out hover:border-gray-400"
                href="/en/shop/rare-plnts"
              >
                <span>Makeup</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sold-out hover:border-gray-400"
                href="/en/shop/pots"
              >
                <span>Celebrity Beauty</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sold-out hover:border-gray-400"
                href="/en/shop/accessories"
              >
                <span>Product Reviews</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sold-out hover:border-gray-400"
                href="/en/shop/care-products"
              >
                <span>How-to</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sold-out hover:border-gray-400"
                href="/en/shop/gift-ideas"
              >
                <span>gift ideas</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sale hover:border-sale"
                href="/en/shop/sale"
              >
                <span>sale</span>
              </a>
            </li> */}
          </ul>
          <button
            className={`absolute right-2 top-4 z-20 flex h-6 w-6 items-center justify-center bg-black/20 ${
              !scrolEnd ? "hover:bg-black/50" : " cursor-default"
            }  md:-right-2`}
            onClick={() => slide(+shiftN)}
          >
            <svg
              className="text-white h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </nav>
      </div>
    </>
  );
};

export default CategoryNav;
