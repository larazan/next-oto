import React from 'react'

 const Filter = () => {
  return (
    <>
        <div className="h-max flex flex-col mt-0">
        <div className="flex items-center">
          <div className="bg-[#ff74be]  w-full shadow-bleed-teal-sm  p-4 font-mono flex flex-wrap md:flex-nowrap items-center md:space-x-6">
            <select
              name="version"
              className="input-select text-sm z-1 border border-gray-800 text-gray-900 text-md font-mabrybold"
            >
              <option>Recipients</option>
              <option value="mom">Mom</option>
              <option value="dad">Dad</option>
              <option value="friends">Friends</option>
              <option value="couples">Couples</option>
              <option value="kids">Kids</option>
              <option value="teens">Teens</option>
            </select>
            <select
              name="sort"
              className="input-select text-sm z-1 border border-gray-800 text-gray-900 text-md font-mabrybold"
            >
              <option >Occasions</option>{" "}
              <option value="birthday">Birthday</option>{" "}
              <option value="wedding">Wedding</option>
              <option value="anniversary">Anniversary</option>
              <option value="graduation">Graduation</option>
              <option value="housewarming">Housewarming</option>
              <option value="retirement">Retirement</option>
            </select>{" "}
            <select
              name="layout"
              className="input-select text-sm z-1 border border-gray-800 text-gray-900 text-md font-mabrybold"
            >
              <option>Interests</option> 
              <option value="food-drink">Food + Drink</option>
              <option value="outdoor-sports">Outdoor + Sports</option>
              <option value="animal-lovers">Animal Lovers</option>
              <option value="travel">Travel</option>
              <option value="selfcare">Selfcare</option>
              <option value="gift-baskets">Gift Baskets</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter