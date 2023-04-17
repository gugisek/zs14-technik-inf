"use client"

import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion'

type Props = {}

export default function Who_a({}: Props) {

  // function for read more button
  const [ readMore, setReadMore ] = React.useState(false)

  const extraContent = (
    <span>
      Technik informatyk jest odpowiedzialny za konfigurację i administrację siecią firmową, co oznacza, że ​​musi znać różne protokoły sieciowe, jak również wiedzieć, jak skonfigurować i utrzymać sieć. Dodatkowo, musi dbać o cyberbezpieczeństwo, co w dzisiejszych czasach jest bardzo ważne, ponieważ firmy mają coraz więcej danych i informacji, które muszą być chronione przed atakami cybernetycznymi.
      <br/><br/>
Technik informatyk musi również znać się na konfiguracji i naprawie sprzętu komputerowego, od laptopów po serwery. W przypadku problemów z komputerem, to właśnie do niego zgłaszają się pracownicy firmy, którzy nie są w stanie samodzielnie rozwiązać problemów technicznych.
<br/><br/>
Zawód technika informatyka jest obecnie jednym z najbardziej poszukiwanych na rynku pracy. Z jednej strony, ze względu na szybki rozwój technologii informatycznej, a z drugiej strony, ze względu na niedobór specjalistów w tym obszarze. Absolwenci technikum informatycznego mają szerokie możliwości podjęcia pracy zarówno w Polsce, jak i za granicą. Mogą pracować w różnych sektorach, takich jak usługi IT, przemysł, medycyna, finanse czy administracja.
<br/><br/>
W tym zawodzie ważna jest nie tylko wiedza techniczna, ale także umiejętności komunikacyjne i interpersonalne. Technik informatyk musi być w stanie jasno i zrozumiale wyjaśnić swoje działania dla pracowników firmy, którzy nie są zaznajomieni z językiem technicznym. Ważne są również umiejętności pracy w zespole, ponieważ często musi współpracować z innymi specjalistami w dziedzinie informatyki.
<br/><br/>
Podsumowując, zawód technika informatyka to praca wymagająca, ale również bardzo satysfakcjonująca. Zadania są zróżnicowane, a możliwości rozwoju kariery są ogromne. To idealna praca dla osób, które interesują się nowymi technologiami i chcą być na bieżąco z ich rozwojem.
    </span>
  )
  return (
    <motion.section 
    initial={{opacity: 0, x: 200}}
    whileInView={{opacity: 1, x: 0}}
    exit={{opacity: 0, x: 200}}
    transition={{duration: 1}}
    id='kto' className={` ${readMore ? 'bg-[#ffffff73] text-[#3d3d3d] transition-all duration-300' : 'bg-[#fdfdfd]'}  text-[#3d3d3d] lg:w-3/5 w-[90%] lg:rounded-[97px] rounded-[57px] lg:px-32 px-10 lg:py-24 py-16 leading-tight flex flex-col justify-between my-0 shadow-2xl`}>
        <p className='lg:text-3xl text-xl font-medium'>
        {/* Technik informatyk jest to osoba, dzięki której cały informatyczny system firmy działa tak, jak trzeba. 
        <br/> <br/>
        Jest on odpowiedzialny jest za <span className='text-[#704BDA]'>konfigurowanie i administrowanie</span> wewnętrzną siecią firmową, ale jego obowiązkiem jest również dbanie o <span className='text-[#C15FCA]'>cyberbezpieczeństwo</span>.
         */}
Jako technik informatyk, osoba ta pełni <span className='text-[#704BDA]'>ważną rolę w każdej firmie</span>, która korzysta z systemów informatycznych. <br></br>To on dba o to, żeby komputery, sieci i oprogramowanie działały sprawnie i bezpiecznie. Jest to zawód wymagający zarówno wiedzy teoretycznej, jak i <span className='text-[#C15FCA]'>praktycznej</span>. <br/><br/>W trakcie nauki w technikum informatycznym, uczniowie poznają różne zagadnienia związane z informatyką, takie jak programowanie, sieci komputerowe, bazy danych, systemy operacyjne i <span className='text-[#704BDA]'>bezpieczeństwo informatyczne</span>.
<br/><br/>

        {
          readMore && extraContent
        }
        
        </p>
        {readMore ? 
        <a onClick={() => setReadMore(!readMore) } 
        href='#kto' 
        className='text-center lg:mb-[-60px] mb-[-30px] pt-5 flex flex-row items-center justify-center gap-2 text-[#5C5C5C] font-medium'>
          ZWIŃ TEKST
          <Image
              src='/more.svg'
              alt='more'
              width={30}
              height={30}
              className='mb-[5px] rotate-180'
          />
        </a>
        :
        <a onClick={() => setReadMore(!readMore) }
        href='#scrolled'  
        className='text-center lg:mb-[-60px] mb-[-30px] pt-5 flex flex-row items-center justify-center gap-2 text-[#5C5C5C] font-medium'>
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
    </motion.section>
  )
}