"use client";

import React, { useState } from "react";
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
import product10 from "@/assets/products/product10.png";
import product11 from "@/assets/products/product11.png";
import product12 from "@/assets/products/product12.png";
import product13 from "@/assets/products/product13.png";

const ProductShop = () => {
  const [open, setOpen] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const unhover = () => {
    setOpen("");
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
    {
      id: 10,
      title: "Lightning Wand",
      slug: "product-1",
      price: "8.00",
      category: "Anthurium",
      img: product10,
    },
    {
      id: 11,
      title: "Lightning Wand",
      slug: "product-1",
      price: "8.00",
      category: "Anthurium",
      img: product11,
    },
    {
      id: 12,
      title: "Lightning Wand",
      slug: "product-1",
      price: "8.00",
      category: "Anthurium",
      img: product12,
    },
    {
      id: 13,
      title: "Lightning Wand",
      slug: "product-1",
      price: "8.00",
      category: "Anthurium",
      img: product13,
    },
  ];

  return (
    <>
      <div className="max-w-full xl:max-w-[1800px] mx-auto  flex flex-col justify-center items-center bg-white">
        <div className="w-11/12 mx-auto">
          <div className=" pb-16 mt-7 md:mt-[72px] ">
            <div className="mt-12 md:mt-[72px] flex flex-col">
              <div className="mb-4 md:mb-9">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Polaroid Now Generation 2 Cameras
                </h3>
              </div>
              <div className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-3/12 ">
                  <div className="flex flex-col text-md leading-5 md:text-lg md:leading-6 font-semibold custom-rich-text mb-7 md:mb-8">
                    <div>
                      <div>
                        <p className="font-sans">
                          Discover the beautifully imperfect world of Polaroid
                          photography with our autofocus instant classic camera.
                        </p>
                        <p className="font-sans"></p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href="/collections/now-camera"
                      className="font-semibold animated-underline after:bg-[#fff] before:bg-[#000]"
                    >
                      See all
                    </a>
                  </div>
                </div>

                <div className="overflow-x-auto overflow-hidden md:w-9/12 md:-mt-4 ">
                  <div>
                    <div className="w-full">
                      <div className="w-full table">
                        <div className="w-full  flex px-0 pb-6 -ml-2 md:px-4">
                          {productData.map((data,index) => {
                            return (
<Link
                            href="/product"
                            className="h-full z-1 relative text-left"
                            key={index}
                          >
                            <div className="absolute top-10 z-10 left-4 lg:left-10">
                              <div className="flex gap-2 transition-opacity ease-in-out duration-300 opacity-0 min-h- 7 h-7 mb-3 md:mb-4 pointer-events-none"></div>
                            </div>
                            <div className="flex flex-col items-center h-full">
                              <div className="relative lg:p-4 mb-10 lg:mb-0 hover:lg:shadow-sm lg:w-[342px] lg:min-h-[412px] p-2 h-full cursor-pointer">
                                <div className="group/card">
                                  <div className="relative h-[297px] w-[297px] lg:h-[306px] lg:w-[306px] bg-[#e9e9e9]">
                                    <div className="absolute h-[80%] w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2">
                                      <div className="absolute h-[100%] w-[100%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 opacity-100 group-hover/card:lg:opacity-0">
                                        <div className="w-full h-full">
                                          <div className="hidden2 md:block md:w-full md:h-full relative animate-[fadeIn_0.3s_ease-out]">
                                            <Image
                                              src={data.img}
                                              alt=""
                                              className="object-cover"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="pt-4 md:pt-4 flex justify-between w-[297px] lg:w-[306px]">
                                  <div className="flex-1">
                                    <p className="text-sm text-black font-semibold max-w-[75%] lg:max-w-[85%] line-clamp-2">
                                      Polaroid Now Generation 2 i-Type Instant
                                      Camera
                                    </p>
                                  </div>
                                  <div className="flex flex-col items-end basis-[40%]">
                                    <p className="flex gap-2">
                                      <span className="font-sans text-h6 text-right text-black">
                                        €129.99
                                      </span>
                                    </p>
                                    <div className="flex mt-4 justify-end">
                                      <button className="button bg-white text-black border-black hover:bg-black hover:text-white hover:border-black text-sm leading-none py-1 px-2 border font-sans rounded-full transition-[all] duration-300 ease-out border-solid disabled:cursor-default undefined">
                                        Add to cart
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                            )
                          })}
                          
                          
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
    </>
  );
};

export default ProductShop;
