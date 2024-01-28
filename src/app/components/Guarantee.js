import React from 'react'
import Image from 'next/image'

import free from "@/assets/icons/Free-Shipping.svg"
import gua from "@/assets/icons/60DayIcon.svg"

import verstappen from "@/assets/drivers/verstappen.png"
import perez from "@/assets/drivers/perez.png"
import russel from "@/assets/drivers/russel.png"
import hamilton from "@/assets/drivers/hamilton.png"
import leclerc from "@/assets/drivers/leclerc.png"
import sainz from "@/assets/drivers/sainz.png"
import piastri from "@/assets/drivers/piastri.png"
import lando from "@/assets/drivers/lando_norris.png"
import stroll from "@/assets/drivers/stroll.png"
import alonso from "@/assets/drivers/alonso.png"
import ocon from "@/assets/drivers/ocon.png"
import gasly from "@/assets/drivers/gasly.png"
import albon from "@/assets/drivers/albon.png"
import sargeant from "@/assets/drivers/sargeant.png"
import ricciardo from "@/assets/drivers/ricciardo.png"
import tsunoda from "@/assets/drivers/tsunoda.png"
import bottas from "@/assets/drivers/bottas.png"
import zhou from "@/assets/drivers/zhou.png"
import magnussen from "@/assets/drivers/magnussen.png"
import hulkenberg from "@/assets/drivers/hulkenberg.png"


const Guarantee = () => {

  const calendars = [
    {
      title: "Gulf Air Bahrain GP",
      circuit: "Bahrain International Circuit",
      dateStart: "Feb 29",
      dateEnd: "Mar 2",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "STC Saudi Arabian GP",
      circuit: "Jeddah Street Circuit",
      dateStart: "Mar 7",
      dateEnd: "Mar 9",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Australian GP",
      circuit: "Melbourne Grand Prix Circuit",
      dateStart: "Mar 22",
      dateEnd: "Mar 24",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "MSC Cruises Japanese GP",
      circuit: "Suzuka International Racing Course",
      dateStart: "Apr 5",
      dateEnd: "Apr 7",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Lenovo Chinese GP",
      circuit: "Shanghai International Circuit",
      dateStart: "Apr 18",
      dateEnd: "Apr 21",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Crypto.com Miami GP",
      circuit: "Miami International Autodrome",
      dateStart: "May 3",
      dateEnd: "May 5",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "	MSC Cruises Emilia Romagna GP",
      circuit: "Autodromo Enzo e Dino Ferrari",
      dateStart: "May 17",
      dateEnd: "May 19",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Monaco GP",
      circuit: "Circuit de Monaco",
      dateStart: "May 24",
      dateEnd: "May 26",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Canadian GP",
      circuit: "Circuit Gilles-Villeneuve",
      dateStart: "Jun 7",
      dateEnd: "Jun 9",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Spanish GP",
      circuit: "Circuit de Barcelona-Catalunya",
      dateStart: "Jun 21",
      dateEnd: "Jun 22",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Qatar Airways Austrian GP",
      circuit: "Red Bull Ring",
      dateStart: "Jun 27",
      dateEnd: "Jun 30",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Qatar Airways British GP",
      circuit: "Silverstone Circuit",
      dateStart: "Jul 5",
      dateEnd: "Jul 7",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Hungarian GP",
      circuit: "Hungaroring",
      dateStart: "Jul 19",
      dateEnd: "Jul 21",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Rolex Belgian GP",
      circuit: "Circuit de Spa-Francorchamps",
      dateStart: "Jul 26",
      dateEnd: "Jul 28",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Heineken Dutch GP",
      circuit: "Circuit Park Zandvoort",
      dateStart: "Aug 23",
      dateEnd: "Aug 25",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Pirelli Italian GP",
      circuit: "Autodromo Nazionale Monza",
      dateStart: "Aug 30",
      dateEnd: "Sep 1",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Qatar Airways Azerbaijan GP",
      circuit: "Baku City Circuit",
      dateStart: "Sep 13",
      dateEnd: "Sep 15",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Singapore Airlines Singapore GP",
      circuit: "Marina Bay Street Circuit",
      dateStart: "Sep 20",
      dateEnd: "Sep 22",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Pirelli United States GP",
      circuit: "Circuit of the Americas",
      dateStart: "Okt 18",
      dateEnd: "Okt 20",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Mexico City GP",
      circuit: "Autodromo Hermanos Rodriguez",
      dateStart: "Okt 25",
      dateEnd: "Okt 27",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Lenovo São Paulo GP",
      circuit: "Autodromo Jose Carlos Pace",
      dateStart: "Nov 1",
      dateEnd: "Nov 3",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Heineken Las Vegas GP",
      circuit: "Las Vegas Street Circuit",
      dateStart: "Nov 21",
      dateEnd: "Nov 24",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Qatar Airways Qatar GP",
      circuit: "Losail International Circuit",
      dateStart: "Nov 28",
      dateEnd: "Dec 1",
      start: "6:30 pm",
      end: "10:00 pm",
    },
    {
      title: "Etihad Airways Abu Dhabi GP",
      circuit: "Yas Marina Circuit",
      dateStart: "Dec 6",
      dateEnd: "Dec 8",
      start: "6:30 pm",
      end: "10:00 pm",
    },
  
  ]

  const drivers = [
    {
      name: "Max Verstappen",
      birth: "",
      nation: "Netherlands",
      img: verstappen
    },
    {
      name: "Sergio Pérez",
      birth: "",
      nation: "Mexico",
      img: perez
    },
    {
      name: "Lewis Hamilton",
      birth: "",
      nation: "Britain",
      img: hamilton
    },
    {
      name: "Fernando Alonso",
      birth: "",
      nation: "Spain",
      img: alonso
    },
    {
      name: "Charles Leclerc",
      birth: "",
      nation: "Monaco",
      img: leclerc
    },
    {
      name: "Lando Norris",
      birth: "",
      nation: "Britain",
      img: lando
    },
    {
      name: "Carlos Sainz",
      birth: "",
      nation: "Spain",
      img: sainz
    },
    {
      name: "George Russell",
      birth: "",
      nation: "Britain",
      img: russel
    },
    {
      name: "Oscar Piastri",
      birth: "",
      nation: "Australia",
      img: piastri
    },
    {
      name: "Lance Stroll",
      birth: "",
      nation: "Canada",
      img: stroll
    },
    {
      name: "Pierre Gasly",
      birth: "",
      nation: "France",
      img: gasly
    },
    {
      name: "Esteban Ocon",
      birth: "",
      nation: "France",
      img: ocon
    },
    {
      name: "Alexander Albon",
      birth: "",
      nation: "Thailand",
      img: albon
    },
    {
      name: "Yuki Tsunoda",
      birth: "",
      nation: "Japan",
      img: tsunoda
    },
    {
      name: "Valtteri Bottas",
      birth: "",
      nation: "Finland",
      img: bottas
    },
    {
      name: "Nico Hülkenberg",
      birth: "",
      nation: "Germany",
      img: hulkenberg
    },
    {
      name: "Daniel Ricciardo",
      birth: "",
      nation: "Australia",
      img: ricciardo
    },
    {
      name: "Zhou Guanyu",
      birth: "",
      nation: "China",
      img: zhou
    },
    {
      name: "Kevin Magnussen",
      birth: "",
      nation: "Denmark",
      img: magnussen
    },
    {
      name: "Logan Sargeant",
      birth: "",
      nation: "USA",
      img: sargeant
    },
    
  ]

const teams = [
  {
    name: "Alfa Romeo",
    logo: ""
  },
  {
    name: "AlphaTauri",
    logo: ""
  },
  {
    name: "Alpine",
    logo: ""
  },
  {
    name: "Aston Martin",
    logo: ""
  },
  {
    name: "Ferrari",
    logo: ""
  },
  {
    name: "Haas",
    logo: ""
  },
  {
    name: "McLaren",
    logo: ""
  },
  {
    name: "Mercedes",
    logo: ""
  },
  {
    name: "Red Bull",
    logo: ""
  },
  {
    name: "Williams",
    logo: ""
  },
]
















































































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
              <path d="M0,0 0,100" stroke="#707070" stroke-width="1"></path>
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