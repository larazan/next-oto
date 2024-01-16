import React from "react";
import Link from "next/link";
import Image from "next/image";

import ava from "@/assets/img/ava4.svg"

const AuthorBubble = () => {
  return (
    <>
      <div className="shrink-0 z-30 cursor-pointer group">
        
        <div className="text-sm font-semibold text-[#757575] inset-0 w-max">
            By <span className="underline">Brigitt Earley</span>
        </div>
        <div className="absolute member hidden group-hover:block w-56 md:w-64 shadow-xl rounded border border-gray-300 mt-2 md:mt-2 -ml-102">
          
          <div className="flex justify-between items-center border-b-0.5 md:border-b p-3 bg-white rounded-t">
            <div className="flex justify-center w-12 h-12 md:w-14 md:h-14">
                <Image src={ava} alt="" />
            </div>
            
            <div className="flex flex-col items-center text-gray-900 text-center">
              <span className="flex min-w-8 h-8 px-2 bg-lio-100 font-bold rounded items-center justify-center">
                1
              </span>
              <span className="text-sm">Articles</span>
            </div>

            <div className="flex flex-col items-center text-gray-900 text-center">
              <span className="flex min-w-8 h-8 px-2 bg-lio-100 font-bold rounded items-center justify-center">
                0
              </span>
              <span className="text-sm">Replies</span>
            </div>
          </div>

          <div className="flex flex-col bg-gray-100 py-1 px-2 md:p-3 text-sm rounded-b">
            <span className="text-gray-900">Brigitt Earley</span>
            <span className="text-gray-500">Active: November 2023</span>
          </div>
        </div>

      </div>
    </>
  );
};

export default AuthorBubble;
