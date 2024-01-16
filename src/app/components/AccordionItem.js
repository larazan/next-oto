import React from 'react'

 const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="w-full pt-3 md:pt-6">
        <dt className="w-full flex items-center text-lg">
          <button
            className="flex items-start justify-between w-full text-left text-gray-400"
            id="headlessui-disclosure-button-11"
            type="button"
            aria-expanded="true"
            aria-controls="headlessui-disclosure-panel-12"
            onClick={toggle}
          >
            <span className="font-medium text-sm md:text-lg text-gray-900">{title}</span>
            <span className="flex items-center ml-6 h-7">
            <span className="text-primary font-normal text-2xl">
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-900 transition duration-150 hover:rotate-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              )}
            </span>
            </span>
          </button>
        </dt>
        {open ? (
            <dd className="pr-12 mt-2" id="headlessui-disclosure-panel-12" >
          <p className="text-base text-gray-700">
            <div>
              {desc}
            </div>
          </p>
        </dd>
        ) : (
        <>
         
        </>
      )}
        
      </div>
  )
}

export default AccordionItem