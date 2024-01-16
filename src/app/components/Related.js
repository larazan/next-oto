import React from "react";
import Link from "next/link";
import Image from "next/image";

import gift11 from "@/assets/gift11.png";
import gift12 from "@/assets/gift12.png";
import gift13 from "@/assets/gift13.png";
import gift14 from "@/assets/gift14.png";
import gift15 from "@/assets/gift15.png";
import gift16 from "@/assets/gift16.png";
import gift17 from "@/assets/gift17.png";
import gift18 from "@/assets/gift18.png";
import gift19 from "@/assets/gift19.png";
import gift20 from "@/assets/gift20.png";
import gift21 from "@/assets/gift21.png";

const Related = () => {
  const gifts = [
    {
      title: "25 New Mom Gift Baskets That Are All About Her",
      url: "new-mom-gift-basket",
      image: gift11,
    },
    {
      title: "33 Meditation Gifts to Help Find Your Inner Zen Master",
      url: "meditation-gifts",
      image: gift12,
    },
    {
      title: "25 Creative Gifts for 7-Year-Old Boys to Fuel Their Curiosity",
      url: "gifts-for-7-year-old-boys",
      image: gift13,
    },
    {
      title: "25 Science Gifts That Are Sure To Make A Big Bang",
      url: "science-gifts",
      image: gift14,
    },
    {
      title: "30 Gifts For Your Brother-In Law That’ll Win Him Over",
      url: "gifts-for-brother-in-law",
      image: gift15,
    },
    {
      title: "30 Coffee Gift Basket Ideas For Your Favorite Java Junkies",
      url: "coffee-gift-baskets",
      image: gift16,
    },
    {
      title: "39 Stellar Astronomy Gifts for Every Starry-Eyed Enthusiast",
      url: "astronomy-gifts",
      image: gift17,
    },
    {
      title: "31 Epic Star Wars Gifts For Men They Will Geek Out Over",
      url: "star-wars-gifts-for-men",
      image: gift18,
    },
    {
      title: "27 Football Gifts That’ll Score You a Touchdown",
      url: "football-gifts",
      image: gift19,
    },
    {
      title: "32 Must-Have Gifts for 14-Year-Old Boys",
      url: "gift-ideas-for-14-year-old-boys",
      image: gift20,
    },
  ];

  return (
    <>
      <div className="py-10 px-3">
        <div>
          <p className="max-w-3xl mt-6 text-lg font-bold md:text-xl lg:text-2xl text-black">
            Related Gift List
          </p>
        </div>
        <div className=" w-full grid grid-cols-3 gap-3">
          {gifts.map((data, index) => {
            return (
              <Link className="text-tundora no-underline " href="/detail" key={index}>
              <div className=" mx-[0em] flex flex-col items-center2 space-y-2 w-full bg-white leading-[1.25em]">
                <figure className="m-0 flex aspect-[10/9] md:aspect-[16/10] h-fit flex-1 items-center justify-center">
                  <Image
                    alt=""
                    src={data.image}
                    className="h-full w-full rounded object-cover"
                    style={{ color: "transparent" }}
                  />
                </figure>
                <div className="flex w-11/12 px-2 py-1 flex-1">
                  <Link href={"/detail"}>
                  <span className="my-[0.05em] mx-[0em] overflow-hidden break-words text-sm leading-tight md:leading-tight font-semibold text-gray-900 hover:text-indigo-600">
                    {data.title}
                  </span>
                  </Link>
                </div>
              </div>
              {/* <div className="h-px bg-mercury"></div> */}
            </Link>
            )
          })}
          

         
        </div>
      </div>
    </>
  );
};

export default Related;
