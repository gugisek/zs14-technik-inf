"use client"

import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    name: string;
    where: string;
    direction: string;
    option: string;
}

export default function Absolwents_post({name, where, direction, option}: Props) {
  return (
    option === 'left' ? (
    <motion.section
    initial={{opacity: 0, x: -200}}
        whileInView={{opacity: 1, x: 0}}
        whileHover={{scale: 1.02, transition: {duration: 0.2}}}
        transition={{duration: 1}}
        whileTap={{ scale: 0.9 }}
        className={`flex lg:flex-row flex-col lg:w-3/5 w-[90%] px-10 py-7 justify-between items-center bg-white drop-shadow-2xl lg:rounded-[57px] rounded-[57px]`}>
            <div>
                <p className='w-full text-[#3d3d3d] text-xl font-black'>
                    {name}<span className='text-black text-xs font-normal pl-1'> TECHNIK INFORMATYK</span>
                </p>
                <p className='text-black '>
                    {where}
                </p>
            </div>
            <div>
                <p className='text-black lg:text-right text-center lg:pt-0 pt-5 font-medium leading-4'>
                    {direction}<br></br>
                    <span className='text-black text-xs font-normal'>kierunek studiów</span>
                </p>
                
            </div>
    </motion.section>
     ) : (
<motion.section
initial={{opacity: 0, x: 200}}
    whileInView={{opacity: 1, x: 0}}
    whileHover={{scale: 1.02, transition: {duration: 0.2}}}
    transition={{duration: 1}}
    whileTap={{ scale: 0.9 }}
    className={`flex lg:flex-row flex-col lg:w-3/5 w-[90%] px-10 py-7 justify-between items-center bg-white drop-shadow-2xl lg:rounded-[57px] rounded-[57px]`}>
        <div>
            <p className='w-full text-[#3d3d3d] text-xl font-black'>
                {name}<span className='text-black text-xs font-normal pl-1'>  TECHNIK INFORMATYK</span>
            </p>
            <p className='text-black'>
                {where}
            </p>
        </div>
        <div>
            <p className='text-black lg:text-right text-center lg:pt-0 pt-5 font-medium leading-4'>
                {direction}<br></br>
                <span className='text-black text-xs font-normal'>kierunek studiów</span>
            </p>
            
        </div>
</motion.section>
     )
 )
}