import React from "react";
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

const RelatedReview = () => {
  const products = [
    {
      title: "The Apple Watch Is the Best Smartwatch for iPhone Owners",
      url: "best-smartwatch-iphone",
      image: product1,
    },
    {
      title: "The 32 Best Gifts for Frequent Travelers",
      url: "best-smartwatch-iphone",
      image: product2,
    },
    {
      title: "How to choose the Best running shoes for you",
      url: "best-smartwatch-iphone",
      image: product6,
    },
    {
      title: "The 16 best tech gifts for any gadget lovers",
      url: "best-smartwatch-iphone",
      image: product8,
    },
  ];

  return (
    <>
      <div className="flex w-full px-5 bg-[#f9f9f9]">
        <div>
        <p className="max-w-3xl mt-6 text-lg font-bold md:text-xl lg:text-2xl text-black">
            Further Reading
        </p>
          {products.map((data, index) => {
            return (
              <Link className="text-tundora no-underline" href="/" key={index}>
                <div className="my-[1em] mx-[0em] flex md:items-center w-full bg-[#f9f9f9] leading-[1.25em]">
                  <Link
                    href={"/reviews/the-gadgets-we-bring-on-every-trip"}
                    className="m-0 mr-2 md:mr-5 flex aspect-[16/9] md:aspect-[16/8] h-fit flex-1 items-center justify-center"
                  >
                    <Image
                      alt=""
                      src={data.image}
                      className="h-full w-full rounded object-cover"
                      style={{ color: "transparent" }}
                    />
                  </Link>
                  <div className="flex w-2/3 md:max-w-[55%] flex-1 flex-col space-y-1 md:space-y-2">
                    <Link
                      href={"/reviews/the-gadgets-we-bring-on-every-trip"}
                      className="text-gray-900 hover:text-indigo-600"
                    >
                      <span className="my-[0.25em] mx-[0em] overflow-hidden break-words text-md md:text-lg leading-tight md:leading-tight font-semibold">
                        {data.title}
                      </span>
                    </Link>
                    <span className="hidden md:block text-sm md:text-lg leading-tight md:leading-tight tracking-tight break-words text-justify">
                      Whether you&apos;re waiting for the weekend or
                      commiserating about your job, these funny work memes will
                      help you cope
                    </span>
                  </div>
                </div>
                <div className="h-px bg-mercury"></div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RelatedReview;
