"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// import logo from "/public/assets/img/logo.svg";
import Autocomplete from "./Autocomplete";
import Logo from "./Logo";
import MiniCart from "./MiniCart";
import UserMenu from "./UserMenu";
import Menu from "./Menu";

const Header = () => {
  const totalQTY = useState(12);
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const clickMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className="fixed2 z-20 flex h-10 md:h-14 w-full top-0 md:m-0 px-4 md:px-6 py-6 md:py-3  items-center justify-between bg-white border-b shadow2">
        <div className="flex w-full md:w-1/5 justify-between ">
          <div className="flex justify-between w-full md:w-[100px]">
            <section className="w-2/6">
              <button className=" h-8 w-8 md:hidden2" onClick={clickMenu}>
                <svg
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  ></path>
                </svg>
              </button>
              <div
                className={` ${
                  openMenu === false ? "hidden" : "flex flex-col"
                }   z-30 fixed top-0 left-0 text-white text-4xl font-bold  flex-1 flex-col justify-between`}
              >
                <aside className="bg-white w-[300px] h-[100vh] py-6 z-50">
                  <button
                    className="absolute flex top-1 right-1 rounded text-gray-800 px-1 py-1 cursor-pointer"
                    onClick={clickMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                      />
                    </svg>
                  </button>
                </aside>
                <div className="opacity-50 fixed inset-0 z-30 bg-black"></div>
              </div>
            </section>
            <div className="w-2/6 md:w-full flex md:hidden justify-center items-center">
              <Link href={"/"}>
                {/* <Image src={logo} alt="" /> */}
                <Logo />
              </Link>
            </div>
            <div className="w-2/6 flex justify-end space-x-2 md:hidden">
              <div
                id="search-toggle"
                className="flex items-center cursor-pointer"
                onClick={handleClick}
              >
                {show ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#1d494e]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="fill-current text-gray-700 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="heroicon-ui"
                      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    />
                  </svg>
                )}
              </div>
              <button
                className="relative flex items-center w-8 h-8 "
                onClick={() => setIsOpen(!isOpen)}
              >
                {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg> */}

                <div className="flex items-start justify-start">
                  <svg
                    x="0px"
                    y="0px"
                    viewBox="0 0 511.808 511.808"
                    className="w-5 h-6 icon icon-cart"
                    id="icon-cart"
                  >
                    <g>
                      <g>
                        <path d="M477.511,491.424l-26.48-348.832c-0.624-8.336-7.584-14.784-15.952-14.784H76.391c-8.368,0-15.328,6.448-15.952,14.8                     l-26.704,352c-0.336,4.432,1.2,8.816,4.224,12.08c3.024,3.264,7.28,5.12,11.728,5.12h412.112c0.096,0,0.208,0,0.32,0                     c8.832,0,16-7.168,16-16.016C478.119,494.288,477.911,492.816,477.511,491.424z M66.935,479.808l24.288-320h329.024l24.288,320                     H66.935z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M255.735,0c-70.576,0-128,57.44-128,128.032v63.776c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-63.776                     c0-52.96,43.056-96.032,96-96.032c52.944,0,96,43.072,96,96.032v63.776c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-63.776                     C383.735,57.44,326.311,0,255.735,0z"></path>
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>

                {/* <div className="absolute text-center top-2 right-[20%] w-4 h-4 text-[0.70rem] leading-tight tracking-tighter font-bold flex items-center justify-center cursor-pointer text-white ">
                <span className="font-bold">{totalQTY}</span>
              </div> */}

                <div class="absolute top-0 right-0 inset-2 object-right-top">
                  <span class="-mr-22 inline-flex items-center rounded-full  bg-[#ff9800] px-1 py-1 text-[0.6rem]  leading-none text-gray-900 lg:-mt-1 ">
                    {totalQTY}
                  </span>
                </div>
              </button>

              <UserMenu />
            </div>
          </div>
        </div>

        <div className="hidden md:flex">
        <Link href={"/"}>
          <Logo />
          </Link>
        </div>

        <div className="w-1/5 hidden md:flex justify-end">
          <div className="flex space-x-2 items-center">
            <Link
              href={"/search"}
              id="search-toggle"
              className="flex items-center cursor-pointer"
            >
              <svg
                className="fill-current text-gray-700 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="heroicon-ui"
                  d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                />
              </svg>
            </Link>
            <button
              className="relative flex w-8 h-7"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg> */}

              <div className="flex  items-start justify-end">
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 511.808 511.808"
                  className="w-5 h-7 icon icon-cart"
                  id="icon-cart"
                >
                  <g>
                    <g>
                      <path d="M477.511,491.424l-26.48-348.832c-0.624-8.336-7.584-14.784-15.952-14.784H76.391c-8.368,0-15.328,6.448-15.952,14.8                     l-26.704,352c-0.336,4.432,1.2,8.816,4.224,12.08c3.024,3.264,7.28,5.12,11.728,5.12h412.112c0.096,0,0.208,0,0.32,0                     c8.832,0,16-7.168,16-16.016C478.119,494.288,477.911,492.816,477.511,491.424z M66.935,479.808l24.288-320h329.024l24.288,320                     H66.935z"></path>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M255.735,0c-70.576,0-128,57.44-128,128.032v63.776c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-63.776                     c0-52.96,43.056-96.032,96-96.032c52.944,0,96,43.072,96,96.032v63.776c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-63.776                     C383.735,57.44,326.311,0,255.735,0z"></path>
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </div>

              {/* <div className="absolute text-center top-2 right-[20%] w-4 h-4 text-[0.70rem] leading-tight tracking-tighter font-bold flex items-center justify-center cursor-pointer text-white ">
                <span className="font-bold">{totalQTY}</span>
              </div> */}

              <div class="absolute top-0 right-0 inset-1 object-right-top">
                <span class="-mr-22 inline-flex items-center rounded-full  bg-[#ff9800] px-1 py-1 text-[0.6rem]  leading-none text-gray-900 lg:-mt-1 ">
                  {totalQTY}
                </span>
              </div>
            </button>

            <UserMenu />
          </div>
        </div>
      </header>

      {show ? (
        <div
          className="relative flex w-full md:hidden bg-white shadow-xl"
          id="search-content"
        >
          <div className="w-11/12 container  py-1 px-2  text-black">
            <input
              id="searchfield"
              type="search"
              placeholder="Search..."
              autofocus="autofocus"
              className="w-full text-grey-800 transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-md lg:text-2xl"
            />
          </div>
          <button
            className="absolute flex top-[15%] right-1  px-1 py-1 hover:rounded-full hover:bg-gray-100 cursor-pointer"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-[#1d494e]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ) : (
        <></>
      )}

      <MiniCart
        isOpen={isOpen}
        handleClose={handleClose}
        setIsOpen={setIsOpen}
      />
      <Menu
        openMenu={openMenu}
        clickMenu={clickMenu}
        setOpenMenu={setOpenMenu}
      />
    </>
  );
};

export default Header;
