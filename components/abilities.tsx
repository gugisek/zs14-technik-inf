import React from 'react'
import Image from 'next/image';

type Props = {}

export default function Abilities({}: Props) {
  return (
    <section style={{backgroundImage: 'url(web_bg.svg)', backgroundPosition: '50% -20%', backgroundRepeat: 'no-repeat'}}  
    className='bg-[#A0A7EE] mx-[20%] mt-[300px] rounded-[97px] px-32 py-24 leading-tight flex flex-row justify-between my-0' 
    id='scrolled'>
        <h1 className='text-[75px] font-extrabold p-0 m-0'>TWOJE <span className='text-[#494949]'>UMIEJĘTNOŚCI</span><br/> JAKO <br/> NASZ <span className='text-[#7761FF]'>ABSOLWENT</span></h1>
        
    </section>
  )
}