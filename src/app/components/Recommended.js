"use client"

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import product1 from "@/assets/products/product1.png";
import product2 from "@/assets/products/product2.png";
import product3 from "@/assets/products/product3.png";
import product4 from "@/assets/products/product4.png";
import product5 from "@/assets/products/product5.png";
import product6 from "@/assets/products/product6.png";
import product7 from "@/assets/products/product7.png";
import product8 from "@/assets/products/product8.png";
import product9 from "@/assets/products/product9.png";


const Recommended = () => {
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

  const productData = [
    {
      id: 1,
      title: "Glow Balm",
      slug: "product-1",
      price: "37.95",
      category: "Ursa Major",
      img: product1,
    },
    {
      id: 2,
      title: "Mighty Patch Original Patch",
      slug: "product-1",
      price: "8.00",
      category: "Osea",
      img: product2,
    },
    {
      id: 3,
      title: "Mighty Patch Nose Patch",
      slug: "product-1",
      price: "21.00",
      category: "Ilia",
      img: product3,
    },
    {
      id: 4,
      title: "Mighty Patch Variety Patch",
      slug: "product-1",
      price: "28.00",
      category: "Heretic",
      img: product4,
    },
    {
      id: 5,
      title: "Pore Release",
      slug: "product-1",
      price: "35.00",
      category: "Anthurium",
      img: product5,
    },
    {
      id: 6,
      title: "Pore Purity",
      slug: "product-1",
      price: "16.00",
      category: "Monstera",
      img: product6,
    },
    {
      id: 7,
      title: "Rescue Balm",
      slug: "product-1",
      price: "48.00",
      category: "Anthurium",
      img: product7,
    },
    {
      id: 8,
      title: "Rescue Balm Red Correct",
      slug: "product-1",
      price: "85.00",
      category: "Monstera",
      img: product8,
    },
    {
      id: 9,
      title: "Lightning Wand",
      slug: "product-1",
      price: "8.00",
      category: "Anthurium",
      img: product9,
    },
  ];

  return (
    <>
      <div className="flex w-full py-6 px-5 bg-white">
        <div className="flex flex-col space-y-5 w-full">
          <div className="flex flex-row justify-between  items-center">
            <p className=" text-lg font-bold md:text-3xl lg:text-2xl text-black">
            You might also like
            </p>
            <div className="flex space-x-0">
              <div
                onClick={() => slide(-shiftN)}
                className={`p-1 text-pink-500  ${
                  scrollX !== 0
                    ? "bg-white cursor-pointer"
                    : "bg-white opacity-50 cursor-default"
                } shadow-menu`}
              >
                <span>
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
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
              <div
                onClick={() => slide(+shiftN)}
                className={`p-1 text-pink-500  ${
                  !scrolEnd
                    ? "bg-white cursor-pointer"
                    : "bg-white opacity-50 cursor-default"
                }`}
              >
                <span>
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
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex flex-row w-12/12 justify-between items-center">
            <div
              className="mb-[1em] flex flex-row overflow-x-auto scroll-smooth no-scrollbar"
              ref={scrl}
              onScroll={scrollCheck}
            >
              {productData.map((data, index) => 
                 (
                  <div
                    className="relative overflow-hidden md:transform md:transition-all cursor-pointer w-[200px] shrink-0 grow-0 snap-start lg:w-[197px] mr-3"
                    key={index}
                  >
                    <Link
                      href="/detail"
                      className="group relative flex flex-col justify-start"
                    >
                      <div className="aspect-h-305 aspect-w-246 bg-grayish transform transition-transform  md:motion-safe:group-hover:scale-110">
                        <Image src={data.img} alt="" />
                        
                      </div>
                      <div>
                      <span className="w-auto px-2 py-1.5 text-[10px] font-semibold leading-none rounded-full uppercase text-red-600 3xl:px-3 3xl:py-1.7 3xl:text-base bg-[#ffefef] border border-red-100 absolute top-2 left-2 ">
                        save 12%
                      </span>
                    </div>
                      <button
                        className="max-h-8 max-w-8 overflow-hidden rounded-full lg:max-h-10 lg:max-w-10 absolute right-2 top-2 z-10"
                        aria-label="product is not on your wishlist"
                      >
                        <svg
                          className="h-8 w-8 transform transition-all md:hover:scale-110 lg:h-10 lg:w-10"
                          viewBox="0 0 50 50"
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        >
                          <circle cx="25" cy="25" r="25" fill="#fff"></circle>
                          <path
                            className="transition-opacity opacity-0"
                            d="M16.96 13.795c-3.86 0-6.77 3.2-6.77 7.447 0 .261.02.522.05.782.77 7.94 12.78 16.4 14.68 17.689 1.9-1.292 13.92-9.749 14.69-17.687.03-.266.04-.529.04-.784a7.782 7.782 0 00-2.33-5.513 6.622 6.622 0 00-4.8-1.983c-2.46.046-3.8.419-7.27 3.971l-.33.338-.33-.338c-3.48-3.568-4.93-3.922-7.63-3.922z"
                            fill="#debe48"
                            fill-rule="nonzero"
                          ></path>
                          <path
                            d="M24.932 24.091h-.014a3.058 3.058 0 01-3.043-3.043c0-.809.323-1.586.897-2.157l2.153-2.153 2.153 2.153c.574.571.897 1.348.897 2.157a3.058 3.058 0 01-3.043 3.043zm-.007-6.044l-1.5 1.5a2.123 2.123 0 00-.622 1.501c0 1.164.958 2.122 2.122 2.122a2.132 2.132 0 002.122-2.122c0-.563-.224-1.103-.622-1.501l-1.5-1.5zm0 22.771l-.252-.163a60.533 60.533 0 01-7.314-5.81c-4.967-4.64-7.673-8.923-8.041-12.73a8.478 8.478 0 01-.045-.873c0-4.771 3.305-8.37 7.689-8.37 2.827 0 4.479.373 7.963 3.865 3.456-3.472 5-3.866 7.585-3.914a7.65 7.65 0 015.46 2.247 8.626 8.626 0 012.56 7.046c-.368 3.806-3.074 8.089-8.042 12.729a60.445 60.445 0 01-7.313 5.81l-.25.163zm-7.963-27.023c-3.857 0-6.766 3.2-6.766 7.447 0 .261.013.522.04.782.77 7.94 12.785 16.4 14.688 17.689 1.9-1.292 13.918-9.749 14.688-17.687a8.09 8.09 0 00.04-.784 7.776 7.776 0 00-2.328-5.513 6.642 6.642 0 00-4.8-1.983c-2.459.046-3.806.419-7.273 3.971l-.33.338-.331-.338c-3.479-3.568-4.925-3.922-7.628-3.922z"
                            fill="#1a171b"
                            fill-rule="nonzero"
                            stroke="#000"
                            strokeWidth=".5"
                          ></path>
                        </svg>
                      </button>

                      <section className="flex py-1 mt-1 space-y-1 grow flex-col justify-start lg:mt-2 lg:justify-between">
                    <span className="text-[11px] italic2 font-semibold uppercase leading-tight tracking-tight lg:text-base 3xl:text-base text-gray-900">
                      {data.category}
                    </span>
                    <span className="truncate2 m-0 font-sans text-md font-bold leading-tight 3xl:text-base text-gray-900">
                      {data.title}
                    </span>

                    <span className="flex flex-row items-center gap-2 text-sm leading-tight 3xl:text-base">
                      <span className="font-normal line-through decoration-sale text-gray-900">
                        €29.95
                      </span>
                      <span className="font-bold text-sale">€32.95</span>
                    </span>
                  </section>
                    </Link>

                    
                  </div>

                  //   <div
                  //     className="transition-all duration-150 flex mr-[1em] mb-[1em] "
                  //     key={index}
                  //   >
                  //     <div className="flex w-[260px] ">
                  //       <div className="rounded bg-transparent border border-gray-800 shadow-stack-sm group flex flex-col overflow-hidden  ">
                  //         <Link href="/" className="relative">
                  //           <Image
                  //             src={data.image}
                  //             alt=""
                  //             className="w-full object-cover"
                  //           />{" "}
                  //           <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                  //         </Link>{" "}
                  //         <div className="px-3 py-2 flex flex-col justify-between leading-tight">
                  //           <h3 className="my-[0.25em] mx-[0em] overflow-hidden break-words text-md md:text-lg leading-tight md:leading-tight font-semibold">
                  //             <Link href="/">{data.title}</Link>
                  //           </h3>{" "}
                  //           <div className="font-mabry text-xs">
                  //             May 9th, 2023
                  //           </div>
                  //         </div>
                  //       </div>
                  //     </div>
                  //   </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;
