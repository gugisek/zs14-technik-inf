"use client"; // aby się nie wywalało na server side rendering

// tsrfc
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image';

type Props = {}

export default function TestLanding({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='min-h-screen flex flex-col justify-center items-center bg-slate-100 text-gray-900'
    >
        <motion.div
        initial={{ scale: 1 }}
        
        className='flex flex-col justify-center items-center'
        
        >
        <Image
            src='/logo-solo.png'
            alt='logo'
            width={200}
            height={200}
        />
        </motion.div>
      </motion.div>
  )
}