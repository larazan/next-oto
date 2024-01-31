import React from "react";
import Image from "next/image";

import product from "@/assets/slides/category.png";

const HeroSection = () => {
  return (
    <>
      <div
        className="relative w-full flex flex-col justify-center md:h-[480px] mx-auto h-[193px] xs:items-center xs:justify-center md:items-start md:justify-center text-white"
      >
        <div className="absolute w-full h-full">
          <div className="w-full h-full">
            <div className="hidden2 md:block md:w-full md:h-full relative animate-[fadeIn_0.3s_ease-out]">
              <Image src={product} alt="" className="object-cover h-full" />
            </div>
          </div>
        </div>
        <div className="z-10 h-full flex flex-col justify-center bg-gray-900/60 items-center text-center  xs:my-[12px] md:my-[48px] px-[12px] md:px-[30px] md:w-[380px] relative xs:items-center xs:text-center xs:justify-center md:items-start md:text-left md:justify-center">
          <h3 className="font-bold mb-[12px] text-2xl md:text-h5 md:mb-[20px]">
            Instant Cameras
          </h3>
          <div className="font-bold text-6xl md:text-h1 mb-[8px] md:mb-[24px]">
            <div>
              <div>
                <h1>Polaroid cameras</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-3"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
