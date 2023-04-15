"use client"

import React from 'react'
import Abilit from './abilit'

type Props = {}

export default function Abilities_a({}: Props) {

    

    const abilities = [
        {name: 'SIECI', desc: 'opis', img: '/sieci.svg'},
        {name: 'BAZY DANYCH', desc: 'opis', img: '/bazy_danych.svg'},
        {name: 'PROGRAMOWANIE', desc: 'opis', img: '/programowanie.svg'},
        {name: 'SERWISOWANIE KOMPUTERÓW', desc: 'serwisować i naprawiać zepsuty sprzęt komputerowyserwisować i naprawiać zepsuty sprzęt komputerowyserwisować i naprawiać zepsuty sprzęt komputerowyserwisować i naprawiać zepsuty sprzęt komputerowyserwisować i naprawiać zepsuty sprzęt komputerowyserwisować i naprawiać zepsuty sprzęt komputerowy', img: '/serwis.jpg'},
    ]

    return (
  
        <div className='flex flex-row flex-wrap w-[60%] mx-[20%] gap-10 items-center justify-center'>
            {abilities.map((ability, index) => (
                <Abilit name={ability.name} desc={ability.desc} image={ability.img} key={index} />
            ))}
        </div>

  
  )
}