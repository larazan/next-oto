import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GoTop from "../../components/GoTop";
import FormulaNav from "../../components/FormulaNav";
import ScheduleRace from "../../components/ScheduleRace";

import verstappen from "@/assets/drivers/verstappen.png";
import perez from "@/assets/drivers/perez.png";
import russel from "@/assets/drivers/russell.png";
import hamilton from "@/assets/drivers/hamilton.png";
import leclerc from "@/assets/drivers/leclerc.png";
import sainz from "@/assets/drivers/carlos_sainz.png";
import piastri from "@/assets/drivers/piastri.png";
import lando from "@/assets/drivers/lando_norris.png";
import stroll from "@/assets/drivers/stroll.png";
import alonso from "@/assets/drivers/alonso.png";
import ocon from "@/assets/drivers/ocon.png";
import gasly from "@/assets/drivers/gasly.png";
import albon from "@/assets/drivers/albon.png";
import sargeant from "@/assets/drivers/sargeant.png";
import ricciardo from "@/assets/drivers/ricciardo.png";
import tsunoda from "@/assets/drivers/tsunoda.png";
import bottas from "@/assets/drivers/bottas.png";
import zhou from "@/assets/drivers/zhou.png";
import magnussen from "@/assets/drivers/magnussen.png";
import hulkenberg from "@/assets/drivers/hulkenberg.png";
import SortYear from "@/app/components/SortYear";

export default function Standing() {
  const glossary = [
    {
      alias: "BRN",
      name: "Gulf Air Bahrain Grand Prix",
    },
    {
      alias: "SAU",
      name: "STC Saudi Arabian Grand Prix",
    },
    {
      alias: "AUS",
      name: "Rolex Australian Grand Prix",
    },
    {
      alias: "AZB",
      name: "Azerbaijan Grand Prix",
    },
    {
      alias: "MIA",
      name: "Crypto.com Miami Grand Prix",
    },
    {
      alias: "ITA",
      name: "Qatar Airways Emilia Romagna Grand Prix",
    },
    {
      alias: "MON",
      name: "Monaco Grand Prix",
    },
    {
      alias: "ESP",
      name: "AWS Spanish Grand Prix",
    },
    {
      alias: "CAN",
      name: "Pirelli Canadian Grand Prix",
    },
    {
      alias: "AUT",
      name: "Rolex Austrian Grand Prix",
    },
    {
      alias: "GBR",
      name: "Aramco British Grand Prix",
    },
    {
      alias: "HUN",
      name: "Qatar Airways Hungarian Grand Prix",
    },
    {
      alias: "BEL",
      name: "MSC Cruises Belgian Grand Prix",
    },
    {
      alias: "NED",
      name: "Heineken Dutch Grand Prix",
    },
    {
      alias: "ITA2",
      name: "Pirelli Italian Grand Prix",
    },
    {
      alias: "SIN",
      name: "Singapore Airlines Singapore Grand Prix",
    },
    {
      alias: "JPN",
      name: "Lenovo Japanese Grand Prix",
    },
    {
      alias: "QAT",
      name: "Qatar Airways Qatar Grand Prix",
    },
    {
      alias: "USA",
      name: "Lenovo United States Grand Prix",
    },
    {
      alias: "MEX",
      name: "Mexico City Grand Prix",
    },
    {
      alias: "BRA",
      name: "Rolex São Paulo Grand Prix",
    },
    {
      alias: "LAS",
      name: "Heineken Las Vegas Grand Prix",
    },
    {
      alias: "ARE",
      name: "Etihad Airways Abu Dhabi Grand Prix",
    },
  ];

  const drivers = [
    {
      number: 1,
      name: "Max Verstappen",
      birth: "",
      nation: "Netherlands",
      img: verstappen,
    },
    {
      number: 11,
      name: "Sergio Pérez",
      birth: "",
      nation: "Mexico",
      img: perez,
    },
    {
      number: 63,
      name: "George Russell",
      birth: "",
      nation: "Britain",
      img: russel,
    },
    {
      number: 44,
      name: "Lewis Hamilton",
      birth: "",
      nation: "Britain",
      img: hamilton,
    },
    {
      number: 16,
      name: "Charles Leclerc",
      birth: "",
      nation: "Monaco",
      img: leclerc,
    },
    {
      number: 55,
      name: "Carlos Sainz",
      birth: "",
      nation: "Spain",
      img: sainz,
    },
    {
      number: 4,
      name: "Lando Norris",
      birth: "",
      nation: "Britain",
      img: lando,
    },
    {
      number: 81,
      name: "Oscar Piastri",
      birth: "",
      nation: "Australia",
      img: piastri,
    },
    {
      number: 1,
      name: "Lance Stroll",
      birth: "",
      nation: "Canada",
      img: stroll,
    },
    {
      number: 14,
      name: "Fernando Alonso",
      birth: "",
      nation: "Spain",
      img: alonso,
    },
    {
      number: 10,
      name: "Pierre Gasly",
      birth: "",
      nation: "France",
      img: gasly,
    },
    {
      number: 31,
      name: "Esteban Ocon",
      birth: "",
      nation: "France",
      img: ocon,
    },
    {
      number: 23,
      name: "Alexander Albon",
      birth: "",
      nation: "Thailand",
      img: albon,
    },
    {
      number: 2,
      name: "Logan Sargeant",
      birth: "",
      nation: "USA",
      img: sargeant,
    },
    {
      number: 3,
      name: "Daniel Ricciardo",
      birth: "",
      nation: "Australia",
      img: ricciardo,
    },
    {
      number: 22,
      name: "Yuki Tsunoda",
      birth: "",
      nation: "Japan",
      img: tsunoda,
    },
    {
      number: 77,
      name: "Valtteri Bottas",
      birth: "",
      nation: "Finland",
      img: bottas,
    },
    {
      number: 24,
      name: "Zhou Guanyu",
      birth: "",
      nation: "China",
      img: zhou,
    },
    {
      number: 20,
      name: "Kevin Magnussen",
      birth: "",
      nation: "Denmark",
      img: magnussen,
    },
    {
      number: 27,
      name: "Nico Hülkenberg",
      birth: "",
      nation: "Germany",
      img: hulkenberg,
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
                  F1 Standings - 2024
                </span>
              </div>
             
              <SortYear />
            </div>
            <div className="overflow-x-auto py-4 ">
              <div className="flex">
                <table className="min-w-[210px] text-sm">
                  <thead className="bg-white border border-gray-300">
                    <tr className="text-left">
                      <th className="text-xs text-left p-4 uppercase text-gray-500" colSpan={2}>
                        <p>Racer</p>
                      </th>
                      <th className="text-xs text-center py-4 px-2 uppercase text-gray-500">
                        <p>PTS</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {drivers.map((data, index) => {
                      return (
                        <tr
                          className="bg-white text-gray-800 border border-gray-300"
                          key={index}
                        >
                          <td className="text-sm text-left px-1">
                            <p className="capitalize">{index+1}</p>
                          </td>
                          <td className="text-sm text-left p-2">
                            <p className="capitalize">{data.name}</p>
                          </td>
                          <td className="text-sm text-center p-2 uppercase bg-blue-100">
                            <p>-</p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="flex relative overflow-hidden overflow-x-auto no-scrollbar">
                  <div className="w-full">
                    <table>
                      <thead className="bg-white border border-gray-300">
                        <tr>
                          {glossary.map((data, index) => {
                            return (
                              <th
                                className="text-xs text-left py-4 px-2 uppercase text-gray-500"
                                key={index}
                              >
                                <span title={data.name}>{data.alias}</span>
                              </th>
                            );
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {drivers.map((data, index) => {
                          return (
                            <tr
                              className="bg-white text-gray-800 border border-gray-300"
                              key={index}
                            >
                              {glossary.map((data, index) => {
                                return (
                                  <td
                                    className="text-sm text-center py-2 px-1 uppercase"
                                    key={index}
                                  >
                                    <span>-</span>
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-4">
              <div className="flex flex-col space-y-2">
                <p className="uppercase font-semibold text-sm text-gray-900">
                  glossary
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {glossary.map((data, index) => {
                    return (
                      <div key={index}>
                        <p className="text-gray-900 font-semibold text-xs">
                          {data.alias}:{" "}
                          <span className="font-sans">{data.name}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
