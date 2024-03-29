"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Autocomplete = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  const closeSearch = () => {
    setShow(false);
  };

  let autoRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!autoRef.current.contains(e.target)) {
        setShow(false);
        console.log(autoRef.current);
      }
    }

    document.addEventListener("mousedown", handler);

    return() => {
      document.removeEventListener("mousedown", handler);
    }
  })

  return (
    <>
      <div className="relative w-3/5 hidden  md:flex flex-col" ref={autoRef}>
        <div
          className={` ${
            show == false ? "bg-[#ebebeb]" : "bg-white"
          } flex w-full items-center  rounded-lg z-30`}
        >
          <div className="pl-2">
            <svg
              className="fill-current text-gray-500 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className="heroicon-ui"
                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
              />
            </svg>
          </div>
          <input
            className="w-full rounded-2xl bg-transparent text-gray-700 leading-tight focus:outline-none py-2 px-2"
            id="search"
            type="text"
            placeholder="Search something"
            onClick={handleClick}
          />
        </div>
        <div className="absolute top-12 w-full z-40">
          {/* <div className={` ${
              show == false ? "hidden" : "flex"
            } mx-auto w-full justify-center`}>
            <div
              className=" w-20 px-2 flex items-center space-x-0.5 text-red-400 cursor-pointer"
              onClick={closeSearch}
            >
              <div>
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <span className="text-sm">close</span>
            </div>
          </div> */}
          <div
            className={` ${
              show == false ? "hidden" : "flex"
            }  px-6 py-8  flex-col space-y-8 w-full bg-white rounded-2xl`}
          >
            <div className="flex flex-col space-y-2">
              <span className="text-md text-gray-500 font-semibold">Gifts</span>
              <ul className="w-full flex flex-col space-y-3">
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm">
                    25 New Mom Gift Baskets That Are All About Her
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm">
                    33 Meditation Gifts to Help Find Your Inner Zen Master
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm">
                    25 New Mom Gift Baskets That Are All About Her
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm">
                    33 Meditation Gifts to Help Find Your Inner Zen Master
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-md text-gray-500 font-semibold">
                Reviews
              </span>
              <ul className="w-full flex flex-col space-y-3">
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm">
                    25 New Mom Gift Baskets That Are All About Her
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm">
                    33 Meditation Gifts to Help Find Your Inner Zen Master
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm">
                    25 New Mom Gift Baskets That Are All About Her
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm">
                    33 Meditation Gifts to Help Find Your Inner Zen Master
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {show ? (
        <div className="opacity-50 fixed inset-0 z-20 bg-black"></div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Autocomplete;
