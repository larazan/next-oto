import React from "react";

const Search = () => {
  return (
    <>
      <div className="bg-white">
        <div className="dark:bg-transparent">
          <div className="mx-auto flex flex-col items-center py-12 sm:py-12">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
              <h1 className="text-4xl md:text-4xl lg:text-4xl text-center text-gray-900 font-bold leading-10">
                The Wall of Love ❤️
              </h1>
              <p className="mt-7  lg:w-10/12 text-gray-900  font-normal text-center text-[18px] ">
                What do you get for the woman who has already given you so much? Finding the perfect gift for mom can be tough, especially when she never tells you exactly what she wants, or already has everything. Our team rounded thoughtful and unique gifts for mom that are bound to make her smile.
              </p>
            </div>
            {/* <div className="flex w-11/12 md:w-8/12 xl:w-6/12">
              <div className="flex rounded-md w-full">
                <input
                  type="text"
                  name="q"
                  className="w-full p-3 rounded-md rounded-r-none border border-2 border-gray-300 placeholder-current dark:bg-gray-500  dark:text-gray-300 dark:border-none "
                  placeholder="keyword"
                />
                <button className="inline-flex items-center gap-2 bg-[#736ef7] text-white text-sm font-semibold py-3 px-6 rounded-r-md">
                  <span>Find</span>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
