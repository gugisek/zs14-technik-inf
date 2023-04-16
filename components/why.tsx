"use client"

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'

type Props = {}

export default function Why({}: Props) {
  return (
    <motion.section 
    initial={{opacity: 0, x: 200}}
    whileInView={{opacity: 1, x: 0}}
    exit={{opacity: 0, x: 200}}
    transition={{duration: 1}}
    className='bg-[#ADD0FA]  lg:w-3/5 w-[90%] lg:rounded-[97px] rounded-[57px] px-28 lg:py-24 py-16 leading-tight flex lg:flex-row flex-col justify-between items-center gap-4 my-0 mt-[300px] '>
        <img src="location.svg" alt="" className='2xl:w-[300px] 2xl:h-[300px] xl:w-[250px] lg:w-[200px] w-[190px] lg:block hidden'/>
        <h1 className='2xl:text-[70px] xl:text-[60px] lg:text-[50px] text-[40px] font-extrabold p-0 m-0 lg:w-2/3'>DLACZEGO<br/> <span className='text-[#535353]'>ZS14</span> <br/>W WARSZAWIE?</h1>
        
    </motion.section>
  )
}