import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GoTop from "../../components/GoTop";
import FormulaNav from "../../components/FormulaNav";
import ScheduleRace from "../../components/ScheduleRace";
import SortYear from "@/app/components/SortYear";

export default function Calendar() {
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
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ScheduleRace />
      <Header />
      <GoTop />
      <FormulaNav />

      <main className="bg-white min-h-screen">
        <div className="py-3 mx-auto w-11/12 ">
          <div className="flex w-full flex-col space-y-2">
            <div className="flex flex-col md:flex-row justify-between pt-5">
              <div>
                <span className="text-2xl font-semibold md:font-bold tracking-tighter capitalize text-gray-800">
                  F1 Calendar - 2024
                </span>
              </div>
              <SortYear />
            </div>
            <div className="overflow-x-auto py-4 ">
              <table className="min-w-full text-sm">
                <thead className="bg-white border border-gray-300">
                  <tr className="text-left">
                    <th className="text-xs text-center p-4 uppercase text-gray-500">
                      <p>date</p>
                    </th>
                    <th className="text-xs text-center p-4 uppercase text-gray-500">
                      <p>race</p>
                    </th>
                    <th className="text-xs text-center p-4 uppercase text-gray-500">
                      <p>winner</p>
                    </th>
                    <th className="text-xs text-center p-4 uppercase text-gray-500">
                      <p>tv</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {calendars.map((data, index) => {
                    return (
                      <tr
                        className="bg-white text-gray-800 border border-gray-300"
                        key={index}
                      >
                        <td className="text-sm text-center p-2">
                          <p className="capitalize">
                            {data.dateStart} - {data.dateEnd}
                          </p>
                        </td>
                        <td className="text-sm p-2">
                          <div className="flex flex-col">
                            <p className="text-blue-500 text-[14px]">
                              {data.title}
                            </p>
                            <span className="capitalize">{data.circuit}</span>
                          </div>
                        </td>
                        <td className="text-sm text-center p-2">
                          <p>
                            {data.dateEnd} - {data.end}
                          </p>
                        </td>
                        <td className="text-sm text-center p-2 uppercase">
                          <p>ESPN</p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
