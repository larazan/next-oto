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

import spain from "@/assets/icons/spain.svg"
import japan from "@/assets/icons/japan.svg"
import f1 from "@/assets/icons/f1.png"



export default function Drivers() {
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
                  F1 Drivers - 2024
                </span>
              </div>
              <SortYear />
            </div>
            <div className="w-full overflow-x-auto py-4 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {drivers.map((data, index) => {
                  return (
                    <div className="px-3 py-3" key={index}>
                      <div className="group flex flex-col overflow-hidden hover:scale-105 shadow-lg border px-2 bg-gradient-to-bl from-gray-900 to-gray-600 bg-gradient-to-r">
                        <Link href={"/"} className="relative">
                          <div className="flex pt-0 items-center justify-between leading-tight py-1 ">
                            <div>
                              <span className="text-white uppercase text-md font-bold">
                                Red Bull 
                              </span>
                            </div>
                            <div className="w-8">
                              <Image src={f1} alt="" />
                            </div>
                          </div>

                          <div className="flex w-full justify-between pt-2 ">
                            <div className="w-full flex flex-col space-y-2 p-2 pb-4 justify-end items-end2">
                            <div>
                              <span className="text-white uppercase text-2xl font-bold">
                                {data.name}
                              </span>
                            </div>
                              <div className="text-red-600 text-6xl font-extrabold tracking-tighter">
                                {data.number}
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-6">
                                  <Image src={spain} alt="" />
                                </div>
                                <span className="text-sm text-white">{data.nation}</span>
                              </div>
                            </div>
                            <Image src={data.img} alt="" className=" h-full" />{" "}
                          </div>
                        </Link>{" "}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
