import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

type Props = {
    name: string;
    desc: string;
    image: string;
}

export default function Abilit({name, image, desc}: Props) {

    const [hover, setHover] = React.useState(false)

  return (
            <div 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setHover(!hover)}
                className=' w-[47%] flex flex-col h-[25vw] shadow-2xl rounded-[60px] '
                >
                
                    {/* <div 
                    style={{backgroundImage: 'url(' + image + ')'}} className={`${hover ? 'opacity-0 fixed w-0' :''} transition-all duration-300 w-full h-100 rounded-[60px] bg-cover flex items-center justify-center`}>
                        <p className={` bg-[#2F2F2F] text-center py-7 font-medium text-xl transition-all duration-300 w-full`}>{name}</p>
                    </div>
                    <div 
                 
                    
                    className={`${hover ? '' :'opacity-0 fixed'} w-full h-100 rounded-[60px] bg-cover flex items-center justify-center transition-all duration-300`}>
                        <p className={`text-[#3d3d3d] text-center py-7 font-medium text-xl transition-all duration-300 w-full`}>{desc}</p>
                    </div> */}

                <img src={image} alt="" className={`${hover ? 'opacity-0 h-0' : 'h-4/5 '} object-cover rounded-tl-[60px] rounded-tr-[60px] transition-all duration-300`} />
                <p className={`${hover ? 'h-4/5 p-14' : 'opacity-0 h-0'}  text-xl transition-all duration-300 text-black`}>{desc}</p>
                <p className={`text-[#fdfdfd] h-1/5 bg-[#A0A7EE] rounded-bl-[60px] rounded-br-[60px] text-center pb-7 pt-8 font-bold text-2xl transition-all duration-300 w-full`}>{name}</p>
                

                    
                    
                   
                
                    
                   
            </div> 
  )
}