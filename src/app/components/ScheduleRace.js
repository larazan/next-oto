"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import SortVenue from "./SortVenue";

const ScheduleRace = () => {
  let scrl = useRef(null);
  const shiftN = 230;
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

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
  ];

  return (
    <>
      <div className="flex w-full py-0 border-y px-0 bg-[#f1f2f3]">
        <div className="flex flex-row  w-full">
          <div className="flex w-3/12 divide-x divide-gray-300">
            <div className="flex w-1/2 px-2 justify-center items-center">
              <SortVenue />
            </div>
            <div className="flex w-1/2 px-2 justify-center items-center">
              <div className="flex items-center justify-between px-2 border border-gray-300 bg-white rounded-full w-full h-8">
                <span className="text-[11px] text-gray-900 font-semibold">
                  MAR 1
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex flex-row w-8/12  items-center2 bg-white">
            {scrollX !== 0 && (
              <div className="top-[40%] left-0">
                <button
                  onClick={() => slide(-shiftN)}
                  className="none absolute h-full left-0 z-10 cursor-pointer px-1 py-2 bg-[#ff9800] text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            )}
            {!scrolEnd && (
              <div className="top-[40%] right-0">
                <button
                  onClick={() => slide(+shiftN)}
                  className="none absolute h-full right-0 z-10 cursor-pointer px-1 py-2 bg-[#ff9800]  text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            )}
            <div
              className=" flex flex-row w-full overflow-x-auto scroll-smooth no-scrollbar"
              ref={scrl}
              onScroll={scrollCheck}
            >
              {calendars.map((data, index) => {
                return (
                  <div
                    className="flex overflow-hidden2 border-r h-[65px] w-[180px] shrink-0 grow-0  mr-0"
                    key={index}
                  >
                    <div className="flex flex-col px-2 py-2 max-w-[100%]">
                      <div className="leading-tight ">
                        <p className="text-[13px] text-gray-900 font-semibold leading-tight truncate">
                          {data.title}
                        </p>
                      </div>
                      <span className="text-[11px] text-gray-900">
                        Sat, {data.dateStart}
                      </span>
                      <span className="text-[11px] text-gray-900">
                        10:00 PM WIB
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-1/12  justify-center items-center">
            <Link
              href={"/f1/calendar"}
              className="text-[11px] text-gray-900 hover:underline tracking-tight underline-offset-2"
            >
              Full results »
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleRace;
