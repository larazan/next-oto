import React from "react";

const CategoryProduct = () => {
  return (
    <>
      <div className="bg-[#f3f4f3] border-y2 w-full sticky top-0 left-0 lg:static z-[100] overflow-x-auto">
        <div className="hidden justify-center md:flex landscape:flex">
          <div>
            <a href="/collections/accessories">
              <div className="py-4 w-[109px] max-w-[109px] min-h-[64px] flex flex-col justify-center items-center h-full bg-[#198cd9]">
                <div className="flex justify-center">
                  <span className="text-[13px] lg:text-[15px] font-sans block text-center text-white">
                    All Accessories
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="/collections/polaroid-straps">
              <div className="py-4 w-[109px] max-w-[109px] min-h-[64px] flex flex-col justify-center items-center h-full hover:bg-white">
                <div className="flex justify-center">
                  <span className="text-[13px] lg:text-[15px] font-sans block text-center text-black">
                    Straps
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="/collections/polaroid-camera-bags">
              <div className="py-4 w-[109px] max-w-[109px] min-h-[64px] flex flex-col justify-center items-center h-full hover:bg-white">
                <div className="flex justify-center">
                  <span className="text-[13px] lg:text-[15px] font-sans block text-center text-black">
                    Camera Bags
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="/collections/polaroid-albums">
              <div className="py-4 w-[109px] max-w-[109px] min-h-[64px] flex flex-col justify-center items-center h-full hover:bg-white">
                <div className="flex justify-center">
                  <span className="text-[13px] lg:text-[15px] font-sans block text-center text-black">
                    Albums
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="/collections/polaroid-frames">
              <div className="py-4 w-[109px] max-w-[109px] min-h-[64px] flex flex-col justify-center items-center h-full hover:bg-white">
                <div className="flex justify-center">
                  <span className="text-[13px] lg:text-[15px] font-sans block text-center text-black">
                    Frames
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="/collections/polaroid-go-accessories">
              <div className="py-4 w-[109px] max-w-[109px] min-h-[64px] flex flex-col justify-center items-center h-full hover:bg-white">
                <div className="flex justify-center">
                  <span className="text-[13px] lg:text-[15px] font-sans block text-center text-black">
                    Go Accessories
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="/collections/polaroid-apparel">
              <div className="py-4 w-[109px] max-w-[109px] min-h-[64px] flex flex-col justify-center items-center h-full hover:bg-white">
                <div className="flex justify-center">
                  <span className="text-[13px] lg:text-[15px] font-sans block text-center text-black">
                    Apparel
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryProduct;
