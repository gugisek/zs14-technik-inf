"use client"

import React from 'react'
import Why_post from './why_post'
import { motion } from 'framer-motion'

type Props = {}

export default function Abilities_a({}: Props) {

    

    const abilities = [

        {title: 'BUDOWA I SERWIS KOMPUTERÓW',
        desc: 'Będziesz mógł złożyć swój własny komputer, <span style="color: #31939c">naprawiać</span> oraz <span style="color: #31939c">konfigurować</span> sprzęt komputerowy. <br/><br/> Poznasz podstawy elektroniki oraz fizyki, dzięki czemu będziesz rozumiał <span style="color: #31939c">technikę komputerową</span>.',
        img: '/serwis.jpg',
        imgHover: '/serwis2.jpg',
        option: 'right'},

        {title: 'PROGRAMOWANIE',
        desc: 'Znane Ci będą takie języki jak C++, Python, PHP, JavaScript, SQL, HTML, CSS. <br/><br/> Umożliwi Ci to <span style="color: #31939c">tworzenie oprogramowania</span> o określoncyh funkcjonalnościach i przeznaczeniu.',
        img: '/matil.jpg',
        imgHover: '/programowanie2l.jpg',
        option: 'left'},

        {title: 'PROJEKTOWANIE WITRYN',
        desc: 'Nauczysz się tworzenia interfejsów użytkownika, <span style="color: #31939c">projektowania stron</span> oraz wdrażaniu funkcjonalności i odpowiednich technologii. <br/><br/>Z zamkniętymi oczami będziesz robił przykładowe strony z arkuszy egzaminacyjnych.',
        img: '/witryny.jpg',
        imgHover: '/witryny2l.jpg',
        option: 'right'},

        {title: 'ADMINISTROWANIE SYSTEMAMI',
        desc: 'Będziesz mógł konfigurować oraz zarządzać infrastrukturą IT, podstawy linux oraz windows serwer nie będą Ci obce. <br/><br/>Nauczysz się umieszczać strony na serwerze które wcześniej sam wykonasz.',
        img: '/administrowanie2l.jpg',
        imgHover: '/administrowaniel.jpg',
        option: 'left'},

        {title: 'SIECI KOMPUTEROWE',
        desc: 'Umięjętności projektowania, konfigurowania i utrzymywania sieci będą Twoje! <br/><br/> Będzesz umiał przeliczać adresy IP, maski oraz wdrażać podsieci na switche i routery.',
        img: '/sieci2.jpg',
        imgHover: '/sieci.png',
        option: 'right'},

        {title: '!BAZY DANYCH',
        desc: 'Nabędziesz umiejętności pozwalające na <span style="color: #9c3197">projektowanie</span>, <span style="color: #3a319c">tworzenie</span> i <span style="color: #34a3c8">utrzymywanie</span> baz danych oraz ich interfejsów, zarządzania i analizowania danych, a także rozwiązywania problemów związanych z bazami danych.',
        img: '/bazy3.jpg',
        imgHover: '/bazy2l.jpg',
        option: 'left'},
        

    ]

    return (
  
        // <motion.div 
        // initial={{opacity: 0, x: -200}}
        // whileInView={{opacity: 1, x: 0}}
        // exit={{opacity: 0, x: -200}}
        // transition={{duration: 1}}
        // className='flex flex-row flex-wrap lg:w-3/5 w-[90%] gap-10 items-center justify-center'>
        //     {abilities.map((ability, index) => (
        //         <Abilit name={ability.name} desc={ability.desc} image={ability.img} key={index} />
        //     ))}
        // </motion.div>
        <section className='flex flex-col items-center justify-center gap-12'>
        {
            abilities.map((item, index) => (
                <Why_post title={item.title} desc={item.desc} img={item.img} imgHover={item.imgHover} option={item.option} key={index} />
            ))
        }
        </section>

  
  )
}