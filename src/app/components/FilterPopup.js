import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Accordion from "./Accordion";
import DropFilter from "./DropFilter";

const FilterPopup = ({ isOpen, handleClose, setIsOpen }) => {
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

  const concernData = [
    "Acne",
    "Acne & Blemishes",
    "Aging",
    "Anti-Aging",
    "Color Care",
    "Curl Care",
    "Damaged Hair",
    "Dark Circles",
    "Dry Hair",
    "Dry Skin",
  ]

  return (
    <>
      <div
        className={`${
          isOpen ? "left-0" : "-left-full"
        } flex flex-col w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
        ref={autoRef}
      >
        <div className="flex w-full items-center justify-between py-4 border-b">
          <div className="w-1/2">
            <span className="uppercase text-sm md:text-lg tracking-wide font-semibold text-[#001838]">Filters</span>
          </div>

          <div className="flex justify-end w-1/2">
            <div
              onClick={handleClose}
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-full bg-pink-200 hover:bg-pink-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="divide-y">
          <DropFilter title="Brands">
            <div className="overflow-hidden pb-0">
              <div className="duration-300 px-0 pb-3">
                <div className="space-y-1">
                  <ul className="flex flex-col flex-wrap justify-start space-y-2 px-2">
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                          Abbott
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                          Arey
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                          Bathing Culture
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                          Cocofloss
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                          Corpus
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                          Dedcool
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                          Ellis Brooklyn
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                          Eleven by Venus William
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </DropFilter>
          <DropFilter title="Category">
            <div className="overflow-hidden pb-0">
              <div className="duration-300 px-0 pb-3">
                <div className="space-y-1">
                  <ul className="flex flex-col flex-wrap justify-start space-y-2 px-2">
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                        Moisturizers & Face Oils
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                        Serums & Eye Creams
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                        SPF & Skin Tint SPF
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                        Cleansers
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                        Essence, Mists & Toners
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                        Masks & Treatments
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                        Hair Care
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                        Body Care
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                        Skincare
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex cursor-pointer justify-start text-gray-900 ">
                        <button className="h-full w-full2 outline-none text-[13px] focus:outline-none">
                        Tools & Accessories
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </DropFilter>
          
          <DropFilter title="Concern">
            <div className="overflow-hidden pb-0">
              <div className="duration-300 px-0 pb-3">
                <ul>
                  {concernData.map((data,index) => {
                    return (
                      <li className="pl-2" key={index}>
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">{data} </span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:air-purifying"
                          value="367"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                    )
                  })}
                  
                
                </ul>
              </div>
            </div>
          </DropFilter>
          <DropFilter title="Color">
            <div className="overflow-hidden pb-0">
              <div className="duration-300 px-0 pb-3">
                <ul>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Orange </span>
                        <span className="text-xs text-sold-out">(8)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:air-purifying"
                          value="367"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Grey </span>
                        <span className="text-xs text-sold-out">(8)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:air-purifying"
                          value="367"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Yellow </span>
                        <span className="text-xs text-sold-out">(7)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:pet-friendly"
                          value="368"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Blue </span>
                        <span className="text-xs text-sold-out">(1)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:hanging-plant"
                          value="370"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </DropFilter>
          
          <div>
            {/* <div
            className="bg-[#073d30] hover:opacity-80 uppercase  rounded text-white border border-[#073d30] flex p-3 justify-center items-center w-full font-semibold cursor-pointer"
          >
            Filter
          </div> */}
          </div>
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

export default FilterPopup;
