import React from 'react'

const BreadcrumbArticle = () => {
  return (
    <>
        <section className="py-2 md:bg-white md:py-4 md:text-sm">
        <div className="grid-container px-0 lg:px-0">
          <nav aria-label="breadcrumbs">
            <div className="relative w-full">
              
              <ul className="scrollbar-fix flex flex-row flex-nowrap justify-start overflow-x-scroll no-scrollbar">
                <li className="">
                  <a
                    className="whitespace-nowrap text-sm font-semibold hover:underline text-[#f36b82]"
                    href="/"
                  >
                    Health
                  </a>
                </li>
                
                
                <li className='before:inline before:px-2 before:text-sm before:content-[">"] text-[#f36b82]'>
                  <a
                    className="whitespace-nowrap text-sm font-semibold hover:underline text-[#f36b82]"
                    href="/"
                  >
                    Mental Health
                  </a>
                </li>
                
              </ul>
              
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}

export default BreadcrumbArticle