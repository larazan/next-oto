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
    lazyLoad: 'progressive',
    arrow: false,
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
    
      <div className="max-w-[1400px] bg-white overflow-hidden no-scrollbar overflow-x-auto h-full w-full2 mx-auto  relative2 group2">
        <div className="w-full2 h-full2  bg-center2 bg-cover2 object-cover2 duration-500">
          <Slider {...settings}>
            {slides.map((data, index) => {
              return (
                <div className="w-full2" key={index}>
                  <Image src={data.url} alt="" className="object-cover md:h-full w-full2"  />
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
