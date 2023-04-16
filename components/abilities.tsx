"use client"

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'

type Props = {}

export default function Abilities({}: Props) {
  return (
    <motion.section 
    initial={{opacity: 0, x: 200}}
    whileInView={{opacity: 1, x: 0}}
    exit={{opacity: 0, x: 200}}
    transition={{duration: 1}}
    style={{backgroundImage: 'url(web_bg.svg)', backgroundPosition: '50% -20%', backgroundRepeat: 'no-repeat'}}  
    className='bg-[#A0A7EE]  lg:w-3/5 w-[90%] mt-[300px] lg:rounded-[97px] rounded-[57px] lg:px-32 px-10 lg:py-24 py-16 leading-tight flex flex-row justify-between my-0' 
    >
        <h1 className='2xl:text-[70px] xl:text-[60px] lg:text-[50px] text-[40px] font-extrabold p-0 m-0'>TWOJE <span className='text-[#494949]'>UMIEJĘTNOŚCI</span><br/> JAKO <br/> NASZ <span className='text-[#7761FF]'>ABSOLWENT</span></h1>
        
    </motion.section>
  )
}