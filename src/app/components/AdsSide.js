"use client";

import React, { useState } from "react";

const AdsSide = () => {
  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      {isShow ? (
        <>
          <div className="hidden md:block fixed left-2 top-[35%] z-50 ">
            <div className="relative bg-green-200 shadow-lg  w-[150px] h-80  overflow-hidden">
              <button
                className="absolute flex top-0.5 right-0.5 rounded bg-gray-100 px-0.5 py-0.5 hover:bg-gray-200 cursor-pointer"
                onClick={handleClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 text-[#1d494e]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex w-full h-full justify-center items-center">
                <span className="text-gray-500">advertising</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default AdsSide;
