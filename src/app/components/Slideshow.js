"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide5 from "@/assets/slides/slide5.png";
import slide6 from "@/assets/slides/slide6.png";
import slide7 from "@/assets/slides/slide7.png";
import slide8 from "@/assets/slides/slide8.png";

const Slideshow = () => {
  const settings = {
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    
  };

  const slides = [
    {
      url: slide5,
    },
    {
      url: slide6,
    },
    {
      url: slide7,
    },
    {
      url: slide8,
    },
  ];

  return (
    <>
      <div className="max-w-[1400px]2 h-full w-full mx-auto py-0 px-02 relative group">
        <div className="w-full h-full rounded-2xl bg-center bg-cover object-cover duration-500">
          <Slider {...settings}>
            {slides.map((data, index) => {
              return (
                <div className="w-full" key={index}>
                  <Image src={data.url} alt="" className="object-cover md:h-full w-full"  />
                </div>
              );
            })}
          </Slider>
        </div>
     
      </div>
    </>
  );
};

export default Slideshow;
