import React from 'react'
import Image from 'next/image';

import lg from "@/assets/img/autocar_logo.svg"

const Logo = () => {
  return (
    <>
    <Image src={lg} alt='' className='w-32 md:w-32 h-full' />
    </>
  )
}

export default Logo