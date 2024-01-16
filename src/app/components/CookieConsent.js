'use client'

import React, { useState } from "react";

 const CookieConsent = () => {
  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      {isShow ? (
        <>
        <div className="fixed left-2 bottom-0 z-50 ">
          <div className="fixed  bottom-6 left-6 py-4 px-5 rounded-lg bg-[#fafaf4] w-full max-w-[calc(100%-48px)] sm:max-w-xs shadow-xl z-50 border-platinum border-2">
            <div className="">
              <div className="relative overflow-hidden px-1 md:px-1 pt-2 ">
               
               
                <div className="pb-4 text-sm md:text-base text-gray-800 leading-tight md:leading-snug">
                <p class="text-sm text-brand-dark">We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Got it” or by continuing browsing this website, you consent to the use of ALL the cookies. <a class="text-[#5ca795] block" href="/policies/privacy-policy" >Read Privacy Policy</a></p>
                <button class="mt-2 block underline text-brand-dark font-medium" onClick={handleClick}>Got It</button>
                </div>
              </div>
            </div>

          </div>

        </div>
        {/* <div className="opacity-50 fixed inset-0 z-40 bg-black"></div> */}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CookieConsent