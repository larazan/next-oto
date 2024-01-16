'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";

import nike from '/public/assets/img/nike.jpg'
import promo1 from "@/assets/promo/promo1.jpeg"
import promo2 from "@/assets/promo/promo2.jpeg"
import promo3 from "@/assets/promo/promo3.png"

 const AdsModal = () => {
  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <>
        {isShow ? (
          <>
        <div className="fixed inset-0 z-50 overflow-hidden flex items-start top-[10%] md:top-1/3 mb-4 justify-center transform px-4 sm:px-6 ">
         <div
          className="relative bg-white overflow-auto max-w-3xl w-full md:h-96 max-h-full rounded shadow-lg"
        >
          {/* Search form */}
          <section className="overflow-hidden2 h-full shadow-2xl md:grid md:grid-cols-3">
            
            <Image
              alt="Trainer"
              src={promo1}
              className="h-52 w-full object-cover md:h-full"
            />
            
            <button className="absolute flex top-1 right-1 rounded-full bg-gray-100 px-1 py-1 hover:bg-gray-200 cursor-pointer" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-5 h-5 text-[#1d494e]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-widest">
                Run with the pack
              </p>

              <h2 className="mt-6 font-black capitalize">
                <span className="text-3xl font-black sm:text-5xl lg:text-6xl">
                  Take 20% off Your Order
                </span>

                <span className="mt-2 block text-sm">
                  On your next order over $50
                </span>
              </h2>

              <a
                className="mt-8 inline-block w-full rounded-full bg-black py-4 text-sm font-bold capitalize tracking-widest text-white"
                href=""
              >
                Yes, Please!
              </a>

              <p className="mt-8 text-xs font-medium uppercase text-gray-400">
                Offer valid until 24th March, 2021 *
              </p>
            </div>
          </section>
        </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default AdsModal