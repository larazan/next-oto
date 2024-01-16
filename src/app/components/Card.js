import React from "react";
import Link from "next/link";
import Image from "next/image";

import gift1 from "@/assets/gift1.png";
import gift2 from "@/assets/gift2.png";
import gift3 from "@/assets/gift3.png";
import gift4 from "@/assets/gift4.png";
import gift5 from "@/assets/gift5.png";
import gift6 from "@/assets/gift6.png";
import gift7 from "@/assets/gift7.png";
import gift8 from "@/assets/gift8.png";
import gift9 from "@/assets/gift9.png";
import gift10 from "@/assets/gift10.png";
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

const Card = () => {
  const gifts = [
    {
      title: "25 New Mom Gift Baskets That Are All About Her",
      url: "new-mom-gift-basket",
      image: gift1,
    },
    {
      title: "33 Meditation Gifts to Help Find Your Inner Zen Master",
      url: "meditation-gifts",
      image: gift2,
    },
    {
      title: "25 Creative Gifts for 7-Year-Old Boys to Fuel Their Curiosity",
      url: "gifts-for-7-year-old-boys",
      image: gift3,
    },
    {
      title: "25 Science Gifts That Are Sure To Make A Big Bang",
      url: "science-gifts",
      image: gift4,
    },
    {
      title: "30 Gifts For Your Brother-In Law That’ll Win Him Over",
      url: "gifts-for-brother-in-law",
      image: gift5,
    },
    {
      title: "30 Coffee Gift Basket Ideas For Your Favorite Java Junkies",
      url: "coffee-gift-baskets",
      image: gift6,
    },
    {
      title: "39 Stellar Astronomy Gifts for Every Starry-Eyed Enthusiast",
      url: "astronomy-gifts",
      image: gift7,
    },
    {
      title: "31 Epic Star Wars Gifts For Men They Will Geek Out Over",
      url: "star-wars-gifts-for-men",
      image: gift8,
    },
    {
      title: "27 Football Gifts That’ll Score You a Touchdown",
      url: "football-gifts",
      image: gift9,
    },
    {
      title: "32 Must-Have Gifts for 14-Year-Old Boys",
      url: "gift-ideas-for-14-year-old-boys",
      image: gift10,
    },
    {
        title: "32 Must-Have Gifts for 14-Year-Old Boys",
        url: "gift-ideas-for-14-year-old-boys",
        image: gift11,
      },
      {
        title: "32 Must-Have Gifts for 14-Year-Old Boys",
        url: "gift-ideas-for-14-year-old-boys",
        image: gift21,
      },
  ];
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 mb-8 mx-auto w-full px-3 md:px-0 md:w-11/12 ">
        {gifts.map((data, index) => {
          return (
            <div className="shadow-md hover:scale-105 " key={index}>
              <div className=" bg-white group flex flex-col overflow-hidden ">
                <Link href="/detail" className="relative">
                  <Image src={data.image} alt="" className="w-80 shadow" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <h3 className="font-semibold text-base md:text-md text-[#002f6c]  leading-tight">
                    <Link href="/detail">{data.title}</Link>
                  </h3>{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </>
  );
};

export default Card;
