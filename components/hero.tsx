"use client"; // aby się nie wywalało na server side rendering

// tsrfc
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image';

type Props = {}

export default function Hero({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='min-h-screen flex flex-col justify-center items-center text-gray-900'
    >
        <motion.div
        initial={{ scale: 1 }}
        
        className='flex sm:flex-row flex-col justify-center items-center gap-5'
        
        >
          <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          
          >
            <motion.a href="https://zs14.pl/" target='_blank'
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='block'
            >
              <Image
                  src='/logo.png'
                  alt='logo'
                  width={200}
                  height={200}
                  className='hover:shadow-xl rounded-full'
              />
            </motion.a>
          </motion.div>
          <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          >
            <h1 className='font-bold text-5xl sm:text-left text-center'>TECHNIK INFORMATYK</h1>
            <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0,  y: 30 }}
            transition={{ duration: 1 }}
            className='text-gray-700 text-2xl sm:text-left text-center'>W Zespole Szkół nr. 14 w Warszawie</motion.p>
          </motion.div>
        </motion.div>
        <motion.a 
        href="#scrolled"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
          <Image
                  src='/arrow.svg'
                  alt='scroll down'
                  width={50}
                  height={50}
                  className='absolute sm:bottom-40 bottom-20 animate-bounce'
            />
        </motion.a>
      </motion.div>
  )
}