"use client"

import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Absolwents({}: Props) {
  return (
    <motion.section
     
    initial={{opacity: 0, x: -200}}
    whileInView={{opacity: 1, x: 0}}
    exit={{opacity: 0, x: -200}}
    transition={{duration: 1}}
    id="absolwent"
    className='bg-[#E6EDDF] lg:w-3/5 w-[90%] lg:rounded-[97px] rounded-[57px] lg:px-32 px-10 lg:py-24 py-16 leading-tight flex lg:flex-row flex-col-reverse justify-center items-center my-0 gap-10 mt-[300px]'>
        <h1 className='2xl:text-[80px] xl:text-[60px] lg:text-[50px] text-[40px] font-extrabold p-0 m-0 lg:w-2/3 text-[#535353]'>NASI <span className='text-[#5a9aaf]'>ABSOLWENCI</span></h1>
        <img src="hat.svg" alt="" className='2xl:w-[300px] 2xl:h-[300px] xl:w-[250px] lg:w-[200px] w-[190px] lg:block hidden'/>
    </motion.section>
  )
}