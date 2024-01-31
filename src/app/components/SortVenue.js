"use client"

import React, { useState, useRef, useEffect } from "react";

const options = ["F1", "MotoGP", "FE", "Le mans", "Nascar"];

const SortVenue = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

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
    <div className="flex w-full z-30">
        <div className="relative flex items-center justify-between px-2 border border-gray-300 bg-white rounded-full w-full h-8 cursor-pointer" ref={autoRef} onClick={toggling}>
          <button className="text-[11px] text-gray-900 font-semibold uppercase" >
            {selectedOption || "F1"}
          </button>
          <span >
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-3 h-3 ${isOpen? 'rotate-180' : ''} text-black`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            
          </span>
          {isOpen && (
            <div className="min-w-[140px] absolute top-5 py-2 left-0 z-10 mt-4 origin-top-right rounded border border-gray-200 bg-white shadow-lg">
              {options.map((option, index) => (
                <div className="px-2" key={index}>
                  <button
                    type="button"
                    onClick={onOptionClicked(option)}
                    className="flex py-1 px-2 w-full uppercase rounded text-[11px] text-gray-500 no-underline hover:bg-blue-600 hover:text-white"
                  >
                    <span>{option}</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        </div>
    </>
  );
};

export default SortVenue;
