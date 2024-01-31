import React, { useEffect, useRef } from "react";

const SpecSide = ({ isOpen, handleClose, setIsOpen }) => {
  let autoRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!autoRef.current.contains(e.target)) {
        setIsOpen(false);
        console.log(autoRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } flex flex-col w-full bg-white fixed top-0 h-full shadow-2xl md:w-[50vw] overflow-y-auto transition-all duration-300 z-50 px-4 lg:px-[35px]`}
        ref={autoRef}
      >
        <div className="flex w-full items-center justify-end py-4 ">
          <div className="flex justify-end">
            <div
              onClick={handleClose}
              className="cursor-pointer w-8 h-8 rounded-full flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-slate-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          
        </div>
        <div className="h-full w-full z-40 px-7">
          <h3 className="font-bold text-[24px] leading-7 md:text-[28px] md:leading-8 text-black">
            Technical Specifications
          </h3>
          <ul className="pb-[64px] lg:pb-[108px]">
            <li className="mt-6 md:mt-9">
              <h4 className="text-md font-bold text-gray-900 leading-5 mb-2">
                Warranty coverage
              </h4>
              <div className="text-md text-gray-900 font-sans">
                <div>
                  <div>
                    <p className="font-sans"> </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-6 md:mt-9">
              <h4 className="text-md font-bold text-gray-900 leading-5 mb-2">
                Packaging Contents
              </h4>
              <div className="text-md text-gray-900 font-sans">
                <div>
                  <div>
                    <ul className="list-disc list-outside mb-4 ml-4">
                      <li className="py-2">Polaroid Now Camera (Gen 2) </li>
                      <li className="py-2">USB-C Charging Cable (1.2m) </li>
                      <li className="py-2">Wrist Strap</li>
                      <li className="py-2">Quick Start Guide</li>
                      <li className="py-2">Safety &amp; Compliance Leaflet</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-6 md:mt-9">
              <h4 className="text-md font-bold text-gray-900 leading-5 mb-2">
                Camera Dimensions
              </h4>
              <div className="text-md text-gray-900 font-sans">
                <div>
                  <div>
                    <ul className="list-disc list-outside mb-4 ml-4">
                      <li className="py-2">Length: 150.2 mm (5.9 in)</li>
                      <li className="py-2">Width: 112.2 mm (4.4 in)</li>
                      <li className="py-2">Height: 94 mm (3.7 in)</li>
                      <li className="py-2">
                        Weight (exc. film pack): 455.8 grams (1 lbs)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-6 md:mt-9">
              <h4 className="text-md font-bold text-gray-900 leading-5 mb-2">Battery</h4>
              <div className="text-md text-gray-900 font-sans">
                <div>
                  <div>
                    <ul className="list-disc list-outside mb-4 ml-4">
                      <li className="py-2">High performance Lithium-Ion battery</li>
                      <li className="py-2">rechargeable via USB-C</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-6 md:mt-9">
              <h4 className="text-md font-bold text-gray-900 leading-5 mb-2">Outer shell</h4>
              <div className="text-md text-gray-900 font-sans">
                <div>
                  <div>
                    <ul className="list-disc list-outside mb-4 ml-4">
                      <li className="py-2">ABS</li>
                      <li className="py-2">PC (40% recycled plastics)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-6 md:mt-9">
              <h4 className="text-md font-bold text-gray-900 leading-5 mb-2">Lenses</h4>
              <div className="text-md text-gray-900 font-sans">
                <div>
                  <div>
                    <ul className="list-disc list-outside mb-4 ml-4">
                      <li className="py-2">
                        Optical grade PC and Acrylic lens, coated.
                      </li>
                      <li className="py-2">
                        Autofocus system via 2 fixed focus zones 0.55m-1.3m,
                        0.6m-infinity
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-6 md:mt-9">
              <h4 className="text-md font-bold text-gray-900 leading-5 mb-2">
                Shutter system
              </h4>
              <div className="text-md text-gray-900 font-sans">
                <div>
                  <div>
                    <p className="font-sans">
                      Custom design, using precision step motor for shutter
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-6 md:mt-9">
              <h4 className="text-md font-bold text-gray-900 leading-5 mb-2">
                Focal length
              </h4>
              <div className="text-md text-gray-900 font-sans">
                <div>
                  <div>
                    <ul className="list-disc list-outside mb-4 ml-4">
                      <li className="py-2">Close-up (lens 1) 94.96 mm </li>
                      <li className="py-2">Distance (lens 2) 102.35 mm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-6 md:mt-9">
              <h4 className="text-md font-bold text-gray-900 leading-5 mb-2">
                Field of view
              </h4>
              <div className="text-md text-gray-900 font-sans">
                <div>
                  <div>
                    <ul className="list-disc list-outside mb-4 ml-4">
                      <li className="py-2">Horizontal 40°</li>
                      <li className="py-2">Vertical 41°</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-6 md:mt-9">
              <h4 className="text-md font-bold text-gray-900 leading-5 mb-2">
                Flash System{" "}
              </h4>
              <div className="text-md text-gray-900 font-sans">
                <div>
                  <div>
                    <p className="font-sans">Vacuum discharge tube storage</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {isOpen ? (
        <div className="opacity-50 fixed inset-0 z-30 bg-black"></div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SpecSide;
