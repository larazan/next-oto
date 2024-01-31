import React from "react";

const Information = () => {
  return (
    <>
      <div
        className="h-12 px-[var(--col-mobile)] lg:px-[var(--col)] flex items-center text-white text-md font-sans bg-[#4d2e47]"
      >
        <div>
          <div>
            <p className="font-sans">
              Start the year off right by getting out there and capturing the
              best of it.{" "}
              <a href="/collections/instant-film" className="underline">
                Shop films
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
