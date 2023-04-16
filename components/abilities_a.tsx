"use client"

import React from 'react'
import Abilit from './abilit'
import { motion } from 'framer-motion'

type Props = {}

export default function Abilities_a({}: Props) {

    

    const abilities = [
        {name: 'SIECI', desc: 'opis', img: '/serwis.jpg'},
        {name: 'BAZY DANYCH', desc: 'opis', img: '/serwis.jpg'},
        {name: 'PROGRAMOWANIE', desc: 'opis', img: '/serwis.jpg'},
        {name: 'SERWISOWANIE KOMPUTERÓW', desc: 'serwisować i naprawiać zepsuty sprzęt komputerowyserwisować i naprawiać zepsuty sprzęt komputerowyserwisować i naprawiać zepsuty sprzęt komputerowyserwisować i naprawiać zepsuty sprzęt komputerowyserwisować i naprawiać zepsuty sprzęt komputerowyserwisować i naprawiać zepsuty sprzęt komputerowy', img: '/serwis.jpg'},
    ]

    return (
  
        <motion.div 
        initial={{opacity: 0, x: -200}}
        whileInView={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -200}}
        transition={{duration: 1}}
        className='flex flex-row flex-wrap lg:w-3/5 w-[90%] gap-10 items-center justify-center'>
            {abilities.map((ability, index) => (
                <Abilit name={ability.name} desc={ability.desc} image={ability.img} key={index} />
            ))}
        </motion.div>

  
  )
}