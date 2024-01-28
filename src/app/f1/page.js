import React from 'react'
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";
import FormulaNav from '../components/FormulaNav';
import ScheduleRace from '../components/ScheduleRace';

export default function F1() {
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

      <Footer />
    </>
  )
}
