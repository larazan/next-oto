import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import drivetrain from "@/assets/icons/drivetrain-icon.png"
import suspension from "@/assets/icons/suspension-icon.png"
import forced from "@/assets/icons/forced-induction-icon.png"
import exterior from "@/assets/icons/exterior-styling-icon.png"
import oil from "@/assets/icons/oil-icon.png"
import exhaust from "@/assets/icons/exhaust-icon.png"
import airintake from "@/assets/icons/air-intake-systems.png"
import bumpers from "@/assets/icons/bumpers-icon.png"
import interior from "@/assets/icons/interior-accessories-icon.png"
import wheels from "@/assets/icons/wheels-icon.png"
import ignition from "@/assets/icons/ignition-icon.png"
import roofrack from "@/assets/icons/roof-rack-icon.png"
import components from "@/assets/icons/engine-components-icon.png"
import fender from "@/assets/icons/fender-flares-icon.png"
import filters from "@/assets/icons/filters-icon.png"
import gauges from "@/assets/icons/gauges-icon.png"
import grilles from "@/assets/icons/grilles-icon.png"
import lights from "@/assets/icons/lights-icon.png"
import programmers from "@/assets/icons/programmers-icon.png"
import safety from "@/assets/icons/safety-icon.png"
import brakes from "@/assets/icons/brakes-icon.png"
import cooling from "@/assets/icons/cooling-icon.png"

const Spareparts = () => {
    
    const sparepartsData = [
        {
            title: "drivetrain",
            img: drivetrain
        },
        {
            title: "suspension",
            img: suspension
        },
        {
            title: "forced induction",
            img: forced
        },
        {
            title: "exterior styling",
            img: exterior
        },
        {
            title: "oils",
            img: oil
        },
        {
            title: "exhaust",
            img: exhaust
        },
        {
            title: "air intake",
            img: airintake
        },
        {
            title: "bumpers",
            img: bumpers
        },
        {
            title: "interior accessories",
            img: interior
        },
        {
            title: "wheels",
            img: wheels
        },
        {
            title: "roof rack",
            img: roofrack
        },
        {
            title: "ignition",
            img: ignition
        },
        
        {
            title: "engine components",
            img: components
        },
        {
            title: "fender",
            img: fender
        },
        {
            title: "filters",
            img: filters
        },
        {
            title: "gauges",
            img: gauges
        },
        {
            title: "grilles",
            img: grilles
        },
        {
            title: "lights",
            img: lights
        },
        {
            title: "programmers",
            img: programmers
        },
        {
            title: "safety",
            img: safety
        },
        {
            title: "brakes",
            img: brakes
        },
        {
            title: "cooling",
            img: cooling
        },
    ]

  return (
    <>
        <div className="bg-white w-full">
            <div className='py-8 mx-auto w-11/12'>
             <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                {sparepartsData.map((data,index) => 
                     (
                    <Link href={"/collection"} className='flex items-center justify-center bg-[#f3f5f7] cursor-pointer hover:scale-105' key={index}>
                        <div className='flex flex-col items-center p-6'>
                            <div className=' bg-transparent'>
                                <Image src={data.img} alt='' className='object-cover' />
                            </div>
                            <div>
                                <span className='text-sm font-semibold capitalize text-black'>{data.title}</span>
                            </div>
                        </div>
                    
                    </Link>
                    )
                )}
                
                </div>
            </div>
        </div>
    </>
  )
}

export default Spareparts