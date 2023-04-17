"use client"

import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    title: string,
    desc: string,
    img: string,
    imgHover: string,
    option: string,
}

export default function Why_post({title, desc, img, imgHover, option}: Props) {

    const [hover, setHover] = React.useState(false)

  return (
    option === 'left' ? (
        <motion.section
        
        initial={{opacity: 0, x: -200}}
        whileInView={{opacity: 1, x: 0}}
        whileHover={{scale: 1.02, transition: {duration: 0.2}}}
        transition={{duration: 1}}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setHover(!hover)}
        className={`flex lg:flex-row flex-col-reverse lg:w-3/5 w-[90%] bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] lg:rounded-[57px] rounded-[57px]`}>
            <div className='lg:w-1/2 xl:max-h-96'>
                <img src={imgHover} alt="" 
                //style={{height: '-webkit-fill-available'}}
                className={`${hover ? 'opacity-100 ' : ' opacity-0  h-0 '} w-full lg:w-1/2 absolute transition-all duration-300 object-cover lg:rounded-tl-[57px] rounded-bl-[57px] rounded-br-[57px] lg:rounded-br-[0px] lg:h-full h-[-webkit-fill-available]`} />
                <img src={img} alt="" className={`${hover ? 'opacity-0 h-0' : 'opacity-100'} w-full transition-all duration-300 object-cover lg:rounded-tl-[57px] rounded-bl-[57px] rounded-br-[57px] lg:rounded-br-[0px] lg:h-full h-[-webkit-fill-available] `} />
            </div>
            <div className='lg:w-1/2 text-[#3d3d3d] py-9 lg:px-14 px-10'>
                <h1 className='text-center pt-4 pb-10 font-black text-2xl'>{title}</h1>
                <div className='font-medium text-xl' dangerouslySetInnerHTML={{ __html: desc }}></div>
            </div>
        </motion.section>
     ) : (
        <motion.section 

        initial={{opacity: 0, x: 200}}
        whileInView={{opacity: 1, x: 0}}
        whileHover={{scale: 1.02, transition: {duration: 0.2}}}
        whileTap={{ scale: 0.9, transition: {duration: 1}}}
        transition={{duration: 1}}

        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setHover(!hover)}
        className='flex lg:flex-row-reverse flex-col-reverse lg:w-3/5 w-[90%] bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] lg:rounded-[57px] rounded-[57px]'>
            <div className='lg:w-1/2'>
                <img src={imgHover} alt="" 
                // style={{height: '-webkit-fill-available'}}
                className={`${hover ? 'opacity-100 ' : ' opacity-0  h-0 '}w-full lg:w-1/2 absolute transition-all duration-300 object-cover lg:rounded-tr-[57px] lg:rounded-br-[57px] rounded-br-[57px] rounded-bl-[57px] lg:rounded-bl-[0px] lg:h-full h-[-webkit-fill-available]`} />
                <img src={img} alt="" className={`${hover ? 'opacity-0' : 'opacity-100'} w-full transition-all duration-300 object-cover lg:rounded-tr-[57px] lg:rounded-br-[57px] rounded-br-[57px] rounded-bl-[57px] lg:rounded-bl-[0px] lg:h-full h-[-webkit-fill-available]`} />
            </div>
            <div className='lg:w-1/2 text-[#3d3d3d] py-9 lg:px-14 px-10'>
                <h1 className='text-center pt-4 pb-10 font-black text-2xl'>{title}</h1>
                <div className='font-medium text-xl' dangerouslySetInnerHTML={{ __html: desc }}></div>
            </div>
        </motion.section>
     )
  )
}