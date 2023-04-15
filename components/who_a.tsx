"use client"

import React from 'react'
import Image from 'next/image';
import { useState } from 'react';

type Props = {}

export default function Who_a({}: Props) {

  // function for read more button
  const [ readMore, setReadMore ] = React.useState(false)

  const extraContent = (
    <span>
      <br/> <br/>
      Technik informatyk odpowiada także za poprawną konfigurację sprzętu, np. komputerów czy routerów, jak też oprogramowania – które zresztą nie ma przed nim tajemnic. 
      <br/><br/>
      Jest to komputerowy czarodziej, do którego zgłaszają się wszyscy ci, których kompetencje informatyczne kończą się na włączeniu komputera, napisaniu tekstu i uruchomieniu przeglądarki.
      <br/><br/>
      Zarówno w Polsce jak i pozostałych krajach Europy utrzymuję się bardzo duże zapotrzebowanie na kompetentnych pracowników sektora branży technologii informatycznych. Prognozy rynku pracy wskazują, że zawód informatyka będzie nadal utrzymywał się na liście najbardziej poszukiwanych wśród pracodawców. 
      <br/><br/>
      Rozwój młodego człowieka w tym kierunku roztacza przed nim perspektywę na odniesienie zawodowego i życiowego sukcesu. <br/>
      Wielu informatyków łączy wykonywany zawód ze swoją pasją dając im powód do zadowolenia i samorealizacji.
      <br/><br/>
      Absolwenci technikum mogą w przyszłości kontynuować naukę na uczelniach wyższych,
    </span>
  )
  return (
    <section id='kto' className={` ${readMore ? 'bg-[#ffffff73] text-[#3d3d3d]' : 'bg-[#fdfdfd]'} transition-all duration-300 text-[#3d3d3d] mx-[20%] rounded-[97px] px-32 py-24 leading-tight flex flex-col justify-between my-0 shadow-2xl`}>
        <p className='text-3xl font-medium'>
        Technik informatyk jest to osoba, dzięki której cały informatyczny system firmy działa tak, jak trzeba. 
        <br/> <br/>
        Jest on odpowiedzialny jest za <span className='text-[#704BDA]'>konfigurowanie i administrowanie</span> wewnętrzną siecią firmową, ale jego obowiązkiem jest również dbanie o <span className='text-[#C15FCA]'>cyberbezpieczeństwo</span>.
        
        {
          readMore && extraContent
        }
        
        </p>
        {readMore ? 
        <a onClick={() => setReadMore(!readMore) } 
        href='#kto' 
        className='text-center mb-[-60px] pt-10 flex flex-row items-center justify-center gap-2 text-[#5C5C5C] font-medium'>
          ROZWIŃ WIĘCEJ 
          <Image
              src='/more.svg'
              alt='more'
              width={30}
              height={30}
              className='mt-[5px]'
          />
        </a>
        :
        <a onClick={() => setReadMore(!readMore) }
        href='#scrolled'  
        className='text-center mb-[-60px] pt-10 flex flex-row items-center justify-center gap-2 text-[#5C5C5C] font-medium'>
          ROZWIŃ WIĘCEJ 
          <Image
              src='/more.svg'
              alt='more'
              width={30}
              height={30}
              className='mt-[5px]'
          />
        </a>
        }
    </section>
  )
}