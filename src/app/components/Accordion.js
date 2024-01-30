import React, { useState } from "react";

const Accordion = (props) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className={` ${props.bg ? 'bg-[#'+props.bg+']' : 'bg-white'} py-0 flex flex-col w-full `}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex items-center justify-between h-10 px-3 group text-base md:text-[12px] font-semibold md:font-bold"
      >
        <span className="text-gray-900 text-sm uppercase">{props.title}</span>
        {accordionOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-900">
          <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
        </svg>
        
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-900">
  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
</svg>

        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
