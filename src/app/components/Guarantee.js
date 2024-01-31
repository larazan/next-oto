import React from 'react'
import Image from 'next/image'

import free from "@/assets/icons/Free-Shipping.svg"
import gua from "@/assets/icons/60DayIcon.svg"



import mercedes from "@/assets/icons/mercedes.png"
import alpine from "@/assets/icons/alpine.png"
import haas from "@/assets/icons/haas.png"
import redbull from "@/assets/icons/redbul.png"
import mclaren from "@/assets/icons/mclaren.png"
import aston from "@/assets/icons/aston.png"
import ferrari from "@/assets/icons/mercedes.png"
import alpha from "@/assets/icons/alpha.png"
import william from "@/assets/icons/wiliam.png"
import sauber from "@/assets/icons/sauber.png"

import car_mercedes from "@/assets/cars/mercedes.png"
import car_alpine from "@/assets/cars/alpine.png"
import car_haas from "@/assets/cars/haas.png"
import car_redbull from "@/assets/cars/redbul.png"
import car_mclaren from "@/assets/cars/mclaren.png"
import car_aston from "@/assets/cars/aston.png"
import car_ferrari from "@/assets/cars/mercedes.png"
import car_alpha from "@/assets/cars/sauber.png"
import car_william from "@/assets/cars/wiliam.png"
import car_sauber from "@/assets/cars/sauber.png"


const Guarantee = () => {


  return (
    <>
        <div className="w-full py-6 text-white bg-gray-100 md:bg-grayish md:text-black">
        <div className="grid-container grid w-full grid-cols-1 gap-3 md:grid-cols-12 xl:gap-4 px-3 xl:px-0">
          <div className="flex flex-col space-y-6 md:space-y-0 justify-between md:flex col-span-full md:flex-row">
            <div className="flex flex-1 flex-col justify-start xl:flex-row xl:justify-end items-center text-gray-900">
             <Image src={free} alt='' />
              <div className="[&amp;_p:first-of-type]:text-base [&amp;_p:first-of-type]:lg:text-3xl [&amp;_p:last-child]:text-sm [&amp;_p:last-child]:lg:text-base pl-3 xl:pl-6 mt-3 xl:mt-0">
                <p className="font-bold text-[#004e7c]">Free shipping from €75,-</p>
                <p className="font-bold text-[#004e7c]">We ship our plants all over Europe!</p>
              </div>
            </div>
            <svg
              className="hidden md:flex-none mx-4 xl:mx-12 h-full w-px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1 100"
              preserveAspectRatio="none"
            >
              <path d="M0,0 0,100" stroke="#707070" strokeWidth="1"></path>
            </svg>
            <div className="flex flex-1 flex-col justify-start xl:flex-row items-center text-gray-900">
              <Image src={gua} alt='' />
              <div className="[&amp;_p:first-of-type]:text-base [&amp;_p:first-of-type]:lg:text-3xl [&amp;_p:last-child]:text-sm [&amp;_p:last-child]:lg:text-base pl-3 xl:pl-6 mt-3 xl:mt-0">
                <p className="font-bold text-[#004e7c]">30 day health guarantee</p>
                <p>
                  <span className="font-bold text-[#004e7c]">For all our happy plants.</span>{" "}
                  <a
                    className="hidden underline hover:no-underline [#004e7c]"
                    href="/page/guarantee"
                  >
                    Read more about our guarantees
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          {/* <div className="md:hidden [&amp;_ul_li+li]:mt-5 [&amp;_ul_li]:before:mr-4 [&amp;_ul_li]:before:content-['\2713']">
            <ul className='text-gray-900'>
              <li>
                Delivery <span className="font-bold">throughout Europe</span>
              </li>
              <li>
                <span className="font-bold">
                  Free shipping for orders over €75,-
                </span>
              </li>
              <li>
                <a
                  className="underline hover:no-underline"
                  href="/page/guarantee"
                >
                  <span className="font-bold">30 day</span> PLNTS health
                  guarantee
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Guarantee